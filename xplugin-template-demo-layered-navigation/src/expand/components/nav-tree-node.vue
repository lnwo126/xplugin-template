<template>
  <div class="nav-tree-node">
    <div class="nav-current-node">
      <div class="node-btn"
           @click="changeExpendLevels"
           v-if="currentSelected!==-1"
      >
        {{ levels[currentSelected].name }}
      </div>
      <div class="node-btn" v-else @click="changeExpendLevels">
        请选择
      </div>

      <div class="node-List" :class="{expend:isExpendLevels}">
        <div class="node-btn"
             v-for="(item,index) in levels"
             :key="item.id"
             @click="changeLevel(item,index)"
             @mouseenter="onMouseEnter(item,index)"
             @mouseleave="onMouseLeave(item,index)"
             :class="{active:currentSelected===index}"
             :style="{order:item.order||9999}"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <nav-tree-node
        ref="childNavTree"
        v-if="childrenOfSelectedLevel.length>0"
        :levels="childrenOfSelectedLevel"
        :rootNav="rootNav"
    />
  </div>
</template>

<script>
import {levelManager} from "../controller/LevelManager";

export default {
  name: "nav-tree-node",
  data() {
    return {
      currentSelected: -1,
      childrenOfSelectedLevel: [],
      isActive: true,
      isExpendLevels: false
    };
  },
  props: {
    rootNav: {
      type: Object
    },
    levels: {
      type: Array,
      default: () => {
        return []
      }
    }

  },
  methods: {
    reset() {
      this.currentSelected = -1;
      this.isExpendLevels = false;
      this.childrenOfSelectedLevel = [];
    },
    selectLevelByIndex(index) {
      this.currentSelected = index;
      this.childrenOfSelectedLevel = this.levels[index].children;
    },
    changeLevel(obj, index) {
      if (this.$refs.childNavTree) {
        this.$refs.childNavTree.reset();
      }
      this.reset();
      this.currentSelected = index;
      const currentLevel = this.levels[this.currentSelected];
      if (currentLevel.children) {
        this.childrenOfSelectedLevel = currentLevel.children;
      }
      this.rootNav.setCurrentLevel(this);
      this.onMouseLeave(obj);
      levelManager.changeLevel(obj.id);
    },

    changeLevelByPath: function (path, index) {

      this.selectLevelByIndex(path[index]);
      index++;
      this.$nextTick(() => {
        if (index > path.length - 1) {
          this.rootNav.setCurrentLevel(this);
          return;
        }
        this.$refs.childNavTree.changeLevelByPath(path, index);
      });


    },
    onMouseEnter(obj) {
      levelManager.onMouseEnter(obj.id);
    },
    onMouseLeave(obj) {
      levelManager.onMouseLeave(obj.id);
    },
    changeExpendLevels() {
      this.rootNav.closeOtherExpandLevels(this);
      this.isExpendLevels = !this.isExpendLevels;
    },
    closeOtherExpandLevels(eventTriggeredNavNode) {
      if (this !== eventTriggeredNavNode) {
        this.isExpendLevels = false;
      }
      if (this.$refs.childNavTree) {
        this.$refs.childNavTree.closeOtherExpandLevels(eventTriggeredNavNode);
      }

    },
  },
  created() {

  },
  mounted() {
  },
  watch: {},
}
</script>

<style scoped>
@import "./style.css";
</style>
