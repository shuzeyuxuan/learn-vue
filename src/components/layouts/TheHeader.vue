<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <router-link to="/" class="navbar-brand">
          <img :src="logo.src" :alt="logo.title" />
          <span class="title">{{ logo.title }}</span>
        </router-link>
      </div>

      <div
        id="top-navbar-collapse"
        :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]"
      >
        <ul class="nav navbar-nav">
          <li
            v-for="(item, index) in navList"
            :class="{ active: index === activeNavIndex }"
            :key="index"
          >
            <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
          </li>
        </ul>

        <!-- 入口组件 -->
        <TheEntry/>
      </div>
    </div>
  </div>
</template>

<script>
import TheEntry from "./TheEntry";

export default {
  name: "TheHeader",
  components: {
    TheEntry,
  },
  data() {
    return {
      logo: {
        title: "Learnku Vue.js",
        src: require("../../assets/logo.png"),
      },
      navList: ["社区", "头条", "问答", "教程"],
      activeNavIndex: 0,
      showCollapsedNav: false,
    };
  },
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index;
    },
    toggleNav() {
      this.showCollapsedNav = !this.showCollapsedNav;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: black;
}
.navbar-brand img {
  display: inline-block;
}

.navbar-default .navbar-nav > .active > a {
  background: rgba(0, 0, 0, 0.03);
}
</style>