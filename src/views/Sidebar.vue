<template>
  <div
    class='sidebar'
    v-show="state.sidebarState"
  >
    <div class='container'>
      <div class="card-header">
        <span class='title'>
          目录
        </span>
        <span
          class="close"
          @click="openSideBar"
        >
          X
        </span>
      </div>
      <div class='card-body'>
        <span
          class="menu-item"
          v-for="(item, index) in state.baseDocs"
          :key="index"
        >
          <span
            class="menu-item-dot"
            style="background-color:#e60023"
            v-if="item.Method == 'DELETE'"
          ></span>
          <span
            class="menu-item-dot"
            style="background-color:#0fa573"
            v-if="item.Method == 'POST'"
          ></span>
          <span
            class="menu-item-dot"
            style="background-color:#0074e8"
            v-if="item.Method == 'GET'"
          ></span>
          <span
            class="menu-item-dot"
            style="background-color:#e3780c"
            v-if="item.Method == 'PUT'"
          ></span>
          <a :href="`#${item.Title}`">{{item.Title}}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "sidebar",
  setup() {
    const openState = ref(1);
    const store = useStore(),
      state = store.state;
    onMounted(() => {});

    const openSideBar = () => {
      store.commit("closeSideBar");
    };

    return computed(() => {
      return {
        openState,
        state,
        openSideBar,
      };
    }).value;
  },
};
</script>

<style scoped>
.sidebar {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 6;
}

.container {
  color: var(--default-color);
  width: 340px;
  height: 100%;
  right: 0;
  top: 0;
  background-color: #ffffff;
  position: absolute;
  transition: 1s;
}

.card-header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: var(--title-fontSize);
  color: var(--default-color);
  font-weight: 400;
  position: relative;
}

.card-header .close {
  position: absolute;
  left: 0;
  top: -20px;
  cursor: pointer;
}

.card-body {
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: scroll;
}

.menu-item {
  display: block;
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
}
.menu-item:hover {
  background-color: blanchedalmond;
}
.menu-item a {
  transition: 0.2s;
  padding-left: 7px;
}
.menu-item-dot {
  width: 10px;
  height: 10px;
  background-color: slateblue;
  display: inline-block;
  border-radius: 10px;
}
</style>