<template>
  <div class="content">
    <div class="container">
      <div class="item-box">
        <div class="card-header">
          <span>
            <a :name="data['Title']">{{data['Title']}}</a>
          </span>
          <span
            class="action-button"
            @click="changeCurrentApiInfo"
          >测试</span>
        </div>
        <div class="card-body">
          <span>
            Url:
            <span class="item-value">{{data['Url']}}</span>
          </span>
          <span>
            Method:
            <span class="item-value">{{data['Method']}}</span>
          </span>
          <span>
            Header:
            <span class="item-value">{{data['Header']}}</span>
          </span>
          <span>
            <i-table :data="data['Params']">
              <i-table-column
                prop="name"
                label="name"
                width="150"
              ></i-table-column>
              <i-table-column
                prop="type"
                label="type"
              ></i-table-column>
              <i-table-column
                prop="explain"
                label="explain"
              ></i-table-column>
              <i-table-column
                prop="remark"
                label="remark"
              ></i-table-column>
              <i-table-column
                prop="other"
                label="other"
              ></i-table-column>
            </i-table>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "content",
  props: {
    data: Object,
  },
  setup(props) {
    const store = useStore();
    const changeCurrentApiInfo = function () {
      store.commit("changeCurrentTestApiInfo", props.data);
    };
    onMounted(() => {});

    return {
      changeCurrentApiInfo,
    };
  },
};
</script>

<style scoped>
.container {
  font-family: verdana, arial, sans-serif;
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 10px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}

.card-header {
  height: 64px;
  line-height: 64px;
  padding: 0 14px;
  font-size: 1.4rem;
  font-weight: 600;
  background-color: var(--main-theme);
  color: var(--g-colorWhite);
}
.action-button {
  /* background-color: brown; */
  padding: 6px 20px;
  margin-left: 20px;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
}

.card-body {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.card-body span {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 8px 0;
  color: var(--default-color);
}
.card-body .item-value {
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  padding: 4px;
  margin-left: 10px;
}
</style>