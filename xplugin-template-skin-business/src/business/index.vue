<template>
  <div class="skin-example">
    <ul>
      <li v-for="data in moduleTreeStructData" :key="data.id">
          <a @click="clickItem">{{data.name}}</a>
          <ul v-show="data.isFolder">
                <li v-for="subdata in data.children" :key="subdata.id">
                  <a @click="flagChange1(subdata)">{{subdata.name}}</a>
                      <ul v-show="subdata.isFolder">
                        <li v-for="dataitem in subdata.children" :key="dataitem.id" >
                          {{dataitem.name}}
                      </li>
                  </ul> 
              </li>
          </ul> 
      </li>
    </ul> 
  </div>
  
</template>
<script>


export default {
  name:"HelloSampleComponent",//帕斯卡命名法,该名称目前不会影响实例
  props:{
    config:Object,
    uri:String,
    instanceId:String,
    moduleTreeStructData:Array,
    activateEvent:Function,
    deactivateEvent:Function
  },
  data() {
    return {
     
     
    }
  },
  created() {},
  mounted(){
    
  },
  methods: {
    clickItem(){
       this.activateEvent();
       this.deactivateEvent();
    }
  },
};
</script>
<style scoped>

.skin-example {
    font: optional;
    position: absolute;
}

</style>
