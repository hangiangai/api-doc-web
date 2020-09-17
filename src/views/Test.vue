<template >
  <div class="test-box">
    <div class="container">
      <p class="card-header">
        <a :href="`#${state.currentTestApiTitle}`">
          {{state.currentTestApiTitle}}
        </a>
      </p>
      <ul>
        <li
          v-for="(item, index) in state.currentTestApiParams"
          :key="index"
        >
          <i-popover>
            <template v-slot:reference>
              <i-input
                v-model="item.value"
                :label="item.name"
                width="100%"
                style="padding: 6px 0"
              ></i-input>
            </template>
            <ul>
              <li
                v-for="(value, idx) in state.defaultValues"
                :key="idx"
                class="menu-item"
              >
                <span>{{value.key}}</span>
                <span>:</span>
                <span>{{value.val}}</span>
                <span
                  class="fill-btn"
                  @click="item.value = value.val"
                >填充</span>
              </li>
            </ul>
          </i-popover>
        </li>

        <div
          class="test-button"
          @click="startApiTest"
        >Fetch</div>
        <div class="result-area">
          <pre>{{state.currentTestApiResult}}</pre>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { fetchTestResult } from "./../services/request";

export default {
  setup() {
    const store = useStore(),
      state = store.state;
    const startApiTest = function () {
      let finalRequestUrl = `http://${state.serverApi}/${state.currentTestApiUrl}`;
      fetchTestResult({
        url: finalRequestUrl,
        method: state.currentTestApiMethod,
        params: state.currentTestApiParams,
      })
        .then((data) => {
          store.commit("addTestHistory", data);
          store.commit("changeCurrentTestApiResult", data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    onMounted(() => {});
    return {
      startApiTest,
      state,
    };
  },
};
</script>

<style scoped>
.test-box {
  width: 340px;
  height: 97%;
  position: fixed;
  z-index: 5;
  border-radius: 10px;
  background-color: #ffffff;
  left: 10px;
  top: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 20px #d1d9e6;
  transition: 0.3s;
}
.container {
  width: 100%;
  height: 100%;
}
.container .card-header:first-child {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-weight: 600px;
}
.container p:first-child a {
  font-size: var(--title-fontSize);
}
.container ul {
  padding: 10px;
  height: calc(100% - 80px);
  overflow-y: scroll;
}
.result-area {
  height: 300px;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  text-align: left;
  overflow: scroll;
  width: 100%;
}
.test-button {
  height: 36px;
  width: 100%;
  background-color: var(--main-theme);
  margin: 10px 0;
  border-radius: 4px;
  text-align: center;
  line-height: 36px;
  font-size: 1.2rem;
  color: var(--g-colorWhite);
}
.menu-item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 4px 0;
}
.fill-btn {
  cursor: pointer;
  background-color: blueviolet;
}
</style>