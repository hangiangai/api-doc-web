<template>
  <div></div>
</template>

<script lang="ts">
export default {
  name: "ITableColumn",
  props: {
    prop: String,
    label: String,
    width: String,
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style scoped>
td {
  border-width: 2px;
  padding: 8px;
  border-style: solid;
  border-color: #666666;
  background-color: #ffffff;
}
</style>