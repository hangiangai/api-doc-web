<template>
  <div class="index">
    <div class="container">
      <Content
        style="width:100%"
        v-for="(item, index) in baseDocs"
        :key="index"
        :data="item"
      ></Content>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { getBaseDocs } from "./../services/request";
import { toDoc } from "./../libs/docs";
import Content from "./../views/Content.vue";
export default {
  name: "index",
  components: {
    Content,
  },
  setup() {
    const store = useStore(),
      state = store.state,
      baseDocs = reactive([]);
    onMounted(() => {
      getBaseDocs({
        url: `http://${state.dataSupplyAddr}/doc/v1`,
      })
        .then((res) => {
          if (Array.isArray(res.Docs)) {
            let docsLen = res.Docs.length;
            for (let index = 0; index < docsLen; index++) {
              baseDocs.push(...toDoc(res.Docs[index].Notes));
            }
            store.commit("setApiCount", baseDocs.length);
            store.commit("updateBaseDocs", baseDocs);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });

    return {
      baseDocs,
    };
  },
};
</script>

<style scoped>
.index {
  position: relative;
  width: 100%;
}
</style>