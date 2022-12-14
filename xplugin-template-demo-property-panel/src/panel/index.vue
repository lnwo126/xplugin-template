<template>

  <div class="panel-example">
    <div class="tip"><span class="line"></span> 属性信息:</div>
    <div class="property" v-for="(value,key, index) in propertys" :key="index">
     <div>{{key}}</div><div>{{value||'-'}}</div>
    </div>
    <div class="tip"><span class="line"></span> 指标信息:</div>
    <div class="monitor" v-for="(value,key, index) in monitor" :key="index">
     <div>{{key}}</div><div>{{value.value}}{{value.unit}}</div>
    </div>
  </div>
</template>
<script>

// import XxxComponent from "./components/xxx.vue";

export default {
  name:"PropertyPanel",//帕斯卡命名法
  // components:{XxxComponent},
  props: ['config','uri'],
  data() {
    return {
      dialogVisible: false,
      propertys:{
          "名称":"中央空调",
          "品牌":"奥克斯",
          "型号":"GG66-P100"
      },
      monitor:{

      }
    }
  },
  created() {},
  mounted(){},
  methods: {},
};
</script>
<style scoped>

.panel-example {
  font: optional;
  position: absolute;
  width: 100%;
  padding-top:10px;
}
.property{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  line-height: 32px;

}
.monitor{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  line-height: 32px;
}
.line{
  height:40px;
  border-right:solid rgb(231, 101, 25) 3px;
}
.tip{
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Medium, sans-serif;
    font-weight: 600;
    color: #63a1e4;
    line-height: 20px;
}
</style>
