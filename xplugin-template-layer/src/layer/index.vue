<template>
  <div class="layer-example">
     <div style="font-size:48px;color:green;">{{str}}  </div>
     <div style="padding-top: 30px;"></div>
      <XXX></XXX>
     <div style="padding-top: 30px;"></div>
     <div>
        <img :src="a" width="200px;">
        <img :src="b" width="180px;">
        <img :src="c" width="200px;">
     </div>
   
  </div>
  
</template>
<script>

import XXX from "./components/xxx.vue"
import a from './resources/111.png'
import b from './resources/222.png'
import c from './resources/333.jpeg'

export default {
  name:"HelloSampleComponent",//帕斯卡命名法,该名称目前不会影响实例
  components:{XXX},
  props: ['config','uri','instanceId'], 
  data() {
    return {
      str: "Welcome to the crazy ThingJS-X universe",
      a:a,
      b:b,
      c:c,
    }
  },
  created() {},
  mounted(){},
  methods: {},
};
</script>
<style scoped>

.layer-example {
    font: optional;
}

</style>
