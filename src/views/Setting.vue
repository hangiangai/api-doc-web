<template>
  <div class="setting">
    <div class="container">
      <!-- 设置颜色 -->
      <div class="meun-item">
        <span>主题颜色</span>
        <span>
          <i-input v-model="targetTheme"></i-input>
        </span>
        <span :style="`color:${targetTheme}`">@</span>
        <span @click="changeTheme">换肤</span>
      </div>
      <!-- 接口测试地址 -->
      <div class="meun-item">
        <span>接口测试地址</span>
        <span>
          <i-input
            v-model="currApiServerAddr"
            v-if="apiServerEditState"
          ></i-input>
          <span v-else>{{state.serverApi}}</span>
        </span>
        <span @click="editAndSaveApiServer">
          {{apiServerEditState ? '保存' : '编辑'}}
        </span>
      </div>
      <!-- 数据提供地址 -->
      <div class="meun-item">
        <span>数据提供地址</span>
        <span>
          <i-input
            v-model="dataSupplyAddr"
            v-if="dataSupplyInputState"
          ></i-input>
          <span v-else>{{state.dataSupplyAddr}}</span>
        </span>
        <span @click="editDataSupplyAddr">
          {{dataSupplyInputState ? '保存' : '编辑'}}
        </span>
      </div>

      <div class="menu-item default-value">
        <span>
          <i-input
            label="key"
            v-model="defaultValue.key"
          ></i-input>
        </span>
        <span>
          <i-input
            label="value"
            v-model="defaultValue.val"
          ></i-input>
        </span>
        <span>
          <button @click="saveDefaultValue">click!!!</button>
        </span>
        <span>
          <ul>
            <li
              v-for="(item, index) in state.defaultValues"
              :key="index"
            >
              <span>{{item.key}}:{{item.val}}</span>
              <span @click="removeDefaultValue(index)">删除</span>
            </li>
          </ul>
        </span>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore(),
      state = store.state,
      currApiServerAddr = ref(""),
      targetTheme = ref(""),
      dataSupplyAddr = ref(""),
      apiServerEditState = ref(false),
      dataSupplyInputState = ref(false),
      defaultValue = ref({ key: "", val: "" });

    currApiServerAddr.value = state.serverApi;
    targetTheme.value = state.mainTheme;
    dataSupplyAddr.value = state.dataSupplyAddr;

    // 改变主题
    const changeTheme = () => {
      if (targetTheme.value && targetTheme.value != state.mainTheme) {
        store.commit("changeTheme", targetTheme.value);
      }
    };
    // 设置默认值
    const saveDefaultValue = () => {
      if (defaultValue.value.key && defaultValue.value.val) {
        store.commit("addDefaultValues", Object.assign({}, defaultValue.value));
      }
    };
    // 移除默认值
    const removeDefaultValue = (index) => {
      store.commit("removeDefaultValue", index);
    };
    // 编辑api测试地址
    const editAndSaveApiServer = () => {
      apiServerEditState.value = !apiServerEditState.value;
      if (!apiServerEditState.value) {
        store.commit("setServerApi", currApiServerAddr.value);
      }
    };
    // 数据提供地址
    const editDataSupplyAddr = () => {
      dataSupplyInputState.value = !dataSupplyInputState.value;
      if (!dataSupplyInputState.value) {
        store.commit("setDataSupplyAddr", dataSupplyAddr.value);
      }
    };

    return {
      changeTheme,
      state,
      apiServerEditState,
      currApiServerAddr,
      defaultValue,
      editAndSaveApiServer,
      saveDefaultValue,
      removeDefaultValue,
      targetTheme,
      dataSupplyAddr,
      dataSupplyInputState,
      editDataSupplyAddr,
    };
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 50%;
  /* background-color: coral; */
  margin: auto;
  margin-top: 100px;
  padding: 0 20px;
}
.meun-item {
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.2rem;
  /* border-bottom: 2px solid slategray; */
}
.default-value {
  /* background-color: violet; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
}
</style>