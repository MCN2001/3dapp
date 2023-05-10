<template>
  <div :class="['app-container', this.$store.state.darkMode ? 'dark' : '']">
    <Navigation />
    <slot></slot>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Default",
  components: {
    Navigation,
  },
};
</script>

<style lang="scss" scoped></style>
