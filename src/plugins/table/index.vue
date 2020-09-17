<template>
  <div class="table">
    <div class="container">
      <div class="hidden-columns">
        <slot></slot>
      </div>
      <table
        class="gridtable"
        border="0"
      >
        <thead class="theader">
          <tr>
            <th
              align="left"
              v-for="(item, index) in theaders"
              :key="index"
              :style="`width:${item.width};`"
            >{{item.label}}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in data"
            :key="index"
            class="row"
          >
            <td
              v-for="(cloum, index) in theaders"
              align="left"
              :key="index"
            >{{item[cloum.prop]}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, getCurrentInstance, reactive } from "vue";

export default {
  name: "ITable",
  props: {
    data: {
      type: Array,
    },
  },
  setup() {
    const instance = getCurrentInstance();
    const slots = instance.slots.default();
    const theaders = reactive([]);
    for (let i = 0; i < slots.length; i++) {
      theaders.push({
        prop: slots[i].props.prop,
        label: slots[i].props.label,
        width: `${slots[i].props.width}px `,
      });
    }
    onMounted(() => {});
    return {
      theaders,
    };
  },
};
</script>

<style scoped>
.container {
  position: relative;
}

.theader {
  color: #909399;
}
table.gridtable {
  width: 100%;
  font-family: verdana, arial, sans-serif;
  font-size: 1rem;
  color: #606266;
  border-collapse: collapse;
}
table.gridtable th {
  padding: 16px 10px;
  font-size: 1.1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
table.gridtable td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px 10px;
  font-size: 1.1rem;
  background-color: #ffffff;
}
tbody .row:hover td {
  background-color: #efefef;
}
</style>