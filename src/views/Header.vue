<template>
  <div class="header">
    <div class="container">
      <div class="meun-box">
        <span class="search-box">
          <i-popover>
            <template v-slot:reference>
              <input
                type="text"
                v-model="searchValue"
                placeholder="输入搜索值"
                @input="searchContent"
              >
            </template>
            <ul class="search-result-box">
              <li
                v-for="(item, index) in searchResult"
                :key="index"
              >
                <a :href="`#${item}`">{{item}}</a>
              </li>
            </ul>
          </i-popover>
        </span>
        <span class="menu-item">
          <router-link :to="{name:'Setting'}">
            设置
          </router-link>
        </span>
        <span class="menu-item">
          历史
        </span>
        <span class="menu-item">
          Api {{ state.apiCount }}
        </span>
        <span
          class="menu-item"
          @click="openSidebar"
        >
          目录
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "header",
  setup() {
    onMounted(() => {
      let a = "123";
      console.log(a.indexOf("7"));
    });
    const store = useStore(),
      state = store.state,
      searchValue = ref(""),
      searchResult = ref([]);

    const searchContent = () => {
      if (searchValue.value) {
        searchResult.value = [];
        for (let idx = 0; idx < state.apiCount; idx++) {
          if (state.baseDocs[idx].Title.indexOf(searchValue.value) !== -1) {
            searchResult.value.push(state.baseDocs[idx].Title);
          }
        }
      }
    };

    const openSidebar = () => {
      store.commit("openSideBar");
    };

    return computed(() => {
      return {
        state,
        searchContent,
        searchValue,
        searchResult,
        openSidebar,
      };
    }).value;
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 70px;
  top: 0;
  background-color: #ffffff;
  display: flex;
  flex-direction: row-reverse;
}
.meun-box {
  height: inherit;
  line-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.meun-box .menu-item {
  display: inline-block;
  padding: 0 26px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  color: var(--default-color);
}

.search-box input {
  outline: none;
  height: 46px;
  width: 500px;
  border-radius: 10px;
  border-style: none;
  text-indent: 18px;
  background-color: rgba(0, 0, 0, 0.06);
  font-size: 1rem;
}
.menu-item {
  transition: 0.3s;
}
.menu-item:hover {
  background-color: #efefef;
}

.menu-item-action {
  background-color: brown;
  color: var(--default-action-color);
}
.search-result-box li {
  /* border: 1px solid blue; */
  height: 30px;
  line-height: 30px;
  font-size: 1rem;
}
</style>