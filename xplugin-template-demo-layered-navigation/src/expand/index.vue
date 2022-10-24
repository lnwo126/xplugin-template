<template>
  <div ref="nav"  theme="ande" class="nav-levels" :style="{left: styleLeft, top: styleTop}"
  >
    <div class="nav-content-2021">
      <div class="node-btn level-back" :class="enableBackIcon?'':'disabled'" @click="levelBack">
        返回
        <div class="ande-back-btn"/>
      </div>
      <NavTreeNode
          ref="navTree"
          v-if="renderLevels.length>0"
          :levels="renderLevels"
          :rootNav="rootNav"
      />
    </div>
  </div>

</template>
<script>
import NavTreeNode from "./components/nav-tree-node";
import * as _ from "lodash";
import {levelManager} from "./controller/LevelManager";
import {funcAction} from "./controller/FuncAction";

export default {
  name: "HelloSampleComponent",//帕斯卡命名法,该名称目前不会影响实例
  components: {NavTreeNode},
  props: ['config', 'uri', 'instanceId'],
  data() {
    return {
      enable:true,
      renderLevels: [],
      styleLeft: 500,
      styleTop: 500,
      enableBackIcon: false,
      currentLevelNavNode: null,
      rootNav: null
    }
  },

  created() {

  },
  mounted() {
    levelManager.webNode = this;
  },
  watch: {
    currentLevelNavNode: {
      handler(newNode) {
        if (
            _.isNil(newNode)||
            _.isNil(newNode.rootNav) ||
            newNode === newNode.rootNav.$refs.navTree) {
          this.enableBackIcon = false;
        } else {
          this.enableBackIcon = true;
        }
      },
    },
  },
  methods: {
    init() {
      this.renderLevels = levelManager.getDisplayData();
      this.rootNav = this;
      this.$nextTick(() => {
        this.$refs.navTree.selectLevelByIndex(0);
        this.setCurrentLevel(this.$refs.navTree);
      });

    },
    closeOtherExpandLevels: function (eventTriggeredNavNode) {
      this.$refs.navTree.closeOtherExpandLevels(eventTriggeredNavNode);
    },
    setCurrentLevel: function (level) {
      this.currentLevelNavNode = level;
    },
    reset: function () {
      this.$refs.navTree.reset();
      this.currentLevelNavNode = null;
      this.enable = true;
    },
    changeLevelByPath: function (path) {
      this.reset();
      this.$nextTick(() => {
        this.$refs.navTree.changeLevelByPath(path, 0)
      })

    },
    levelBack: function () {
      if (!this.enableBackIcon) return;
      if (this.currentLevelNavNode) {
        this.currentLevelNavNode.reset();
      }
      if (this.currentLevelNavNode.$parent) {
        this.currentLevelNavNode = this.currentLevelNavNode.$parent
      }
      funcAction.backLevel();
    },

  },
};
</script>
<style scoped>

@import "./components/style.css";

</style>
