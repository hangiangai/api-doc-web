<template>
  <div class="popover">
    <div
      class="reference"
      @click="targerOpen"
    >
      <slot name="reference"></slot>
    </div>
    <transition name="fade">
      <div
        v-outside="close"
        class="popover-content"
        v-show="open"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref, getCurrentInstance, onUnmounted } from "vue";

export default {
  name: "IPopover",
  directives: {
    outside: {
      mounted(el, binding) {
        const documentHandler = function (e) {
          if (el.contains(e.target)) return;
          binding.value(e);
        };
        setTimeout(() => {
          document.addEventListener("click", documentHandler);
        }, 300);
      },
    },
  },
  setup() {
    const instance = getCurrentInstance(),
      open = ref(false);

    onUnmounted(() => {
      console.log("test");
    });

    const targerOpen = () => {
      open.value = !open.value;
    };

    const close = (e) => {
      if (instance.vnode.el.contains(e.target)) return;
      open.value = false;
    };
    return {
      targerOpen,
      open,
      close,
    };
  },
};
</script>

<style scoped>
.popover {
  position: relative;
}
.popover-content::before {
  content: "";
  position: absolute;
  left: 6px;
  top: -6px;
  border-top: none;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #ffffff;
}
.popover-content {
  min-width: 250px;
  min-height: 60px;
  background-color: #ffffff;
  position: absolute;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #ebeef5;
  padding: 8px;
  z-index: 5;
  /* background-color: sandybrown; */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>