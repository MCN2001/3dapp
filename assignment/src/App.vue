<template>
  <default>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </default>
</template>

<script>
import Default from "@/layouts/Default.vue";

export default {
  name: "App",
  components: {
    Default,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
