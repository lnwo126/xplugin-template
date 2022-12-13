<template>
  <!-- 指北针背景图 -->
  <div class="compass" @click="toSouth" v-if="showCompass" :style="compassStyleObj">
    <!-- 指北针指针图 -->
    <div class="pointerContain">
      <div class="pointer" :style="[
        pointerStyleObj,
        { transform: 'rotate(' + `${rotateAngle}` + 'deg)' },
      ]"></div>
    </div>
  </div>
</template>
<script>

import CompassStyle from './components/CompassStyle';
import PointerStyle from './components/PointerStyle';
import GetCompassRotate from './components/CompassRotate';

export default {
  name: "XpluginCompass", //帕斯卡命名法
  components: {},
  props: {
    //设置默认值保证配置项在任何时候都尽可能有值
    "config":{
      type: Object,
      default:function(){
        return {
          compassStyle:"ande",
          compassWidth: 50,
          compassPostion:"topRight",
          topLeftContainer:{
            tl_topMargin:100,
            tl_leftMargin:100,
          },
          topRightContainer:{
            tr_topMargin:100,
            tr_rightMargin:100,
          },
          bottomLeftContainer:{
            bl_bottomMargin:100,
            bl_leftMargin:100,  
          },
          bottomRightContainer:{
            br_bottomMargin:100,
            br_rightMargin:100,
          },
          effectiveLevel:[
            {
              "condition": {
                "uid": "C94B349DA87000012FD57A40633E7C50",
                "name": "园区",
                "type": 0
              }
            },
          ]
        }
        // 
      }
    }, 
    "uri":{
        type: String,
        default:"./"
    }
  },
  data() {
    return {
      //判断最外层级是否是地图层级或园区层级，两种情况指北针实现逻辑不同
      fromEarth: false, 
      //指北针旋转角度
      rotateAngle: 0, 
      //显示指北针 【标识】
      showCompass: true, 
      //场景自动指向北 【事件节流】
      isRotating: false, 
    };
  },
  created() {
    this.isFromEarth();
    this.checkCurrentLevel();
  },
  mounted() {
    this.initAngle();
    this.listenCamera();
    this.changeLevel();
  },
  computed: {
    //指北针背景样式对象
    compassStyleObj() {
      return CompassStyle(this.config,this.uri);
    },
    //指北针指针样式对象
    pointerStyleObj() {
      return PointerStyle(this.config,this.uri);
    },
  },
  methods: {
    // 是否从地图层级进入园区
    isFromEarth() {
      // this.fromEarth =
      //   THING.App.current.level.current.type === "GeoBasePoint" ||
      //   THING.App.current.level.current.parents.objects.some((item) => {
      //     return item.type === "GeoBasePoint";
      //   });
      const {type} = THINGX.Scene.getEntry();
      this.fromEarth =  type === "Map" || false;
    },
    //首次加载指北针后根据当前场角度景初始化方向
    initAngle() {
      if (this.showCompass) {
       this.rotateAngle = GetCompassRotate(this.fromEarth);
      }
    },
    //监听摄像头来出发指北针旋转
    listenCamera() {
      if (this.showCompass) {
        let that = this;
        
        if (this.fromEarth) {
          // 地球模式
          THING.App.current.on("camerachange", () => {
            that.rotateAngle = THING.App.current.camera.getCameInfo().heading;
          });
        } else {
          // 园区模式
          THING.App.current.camera.onChange = function () {
            that.rotateAngle = GetCompassRotate();
          };
        }
      }
    },
    // 检查当前层级是否显示指北针
    checkCurrentLevel() {
      const currentType = THING.App.current.level.current.type;
      this.showCompass = THINGX.Plugin.getDigitalTwinsWithConfigData(this.config.effectiveLevel).some((item)=>{
        return item.type === currentType;
      });
    },
    // 切换层级时显隐指北针
    changeLevel() {
      THING.App.current.on(
        THING.EventType.LevelChange,
        "*",
        () => {
          this.checkCurrentLevel();
        },
        "场景层级改变调整指北针显示状态"
      );
    },
    // 点击指北针场景指向北
    toSouth() {
      let that = this;
      // 点击事件节流
      if (!this.isRotating && this.rotateAngle !== 0) {
        this.isRotating = true;
        THING.App.current.camera.rotateAround({
          target: THING.App.current.camera.target,
          time: 2 * 1000, // 环绕飞行的时间
          yRotateAngle: -that.rotateAngle, // 环绕y轴飞行的旋转角度
          isEarth:that.isFromEarth,
          complete: function () {
            that.isRotating = false;
          },
        });
      }
    },
  },
};
</script>
<style scoped>
.compass {
  position: fixed;  
  cursor: pointer;
  background-size: 100% 100%;
}

.pointerContain {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pointer {
  background-size: 100% 100%;
}
</style>
