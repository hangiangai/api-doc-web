<template>
  <div id="app">
    <Header></Header>
    <Sidebar></Sidebar>
    <Test></Test>
    <div class="wrapper">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./views/Header";
import Sidebar from "./views/Sidebar.vue";
import Test from "./views/Test.vue";
import { onMounted } from "vue";
import axios from "i-ts-axios";
export default {
  components: {
    Header,
    Sidebar,
    Test,
  },
  setup() {
    onMounted(() => {
      axios.get("http://192.168.0.110:8888/doc/v1").then((res) => {
        console.log(res);
      });
    });
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  outline: none;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica,
    ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, Meiryo,
    ＭＳ Ｐゴシック, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
}

a:link {
  color: var(--default-color);
}
a:visited {
  color: var(--default-color);
}
#app {
  width: 100%;
  height: 100%;
  /* background: #ecf0f3; */
}
.wrapper {
  position: relative;
  width: calc(100% - 360px);
  height: calc(100% - 70px);
  top: 70px;
  left: 360px;
}
.content {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  /* background-color: rosybrown; */
}
</style>