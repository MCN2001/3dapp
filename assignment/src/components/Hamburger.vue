<template>
  <div :class="['hamburger', isOpen ? 'active' : '']">
    <div class="container">
      <router-link class="hamb-link" @click.prevent="close" to="/"
        >Home</router-link
      >
      <router-link class="hamb-link" @click.prevent="close" to="/about"
        >About</router-link
      >
      <router-link class="hamb-link" @click.prevent="close" to="/showcase"
        >3D Showcase</router-link
      >
      <router-link class="hamb-link" @click.prevent="close" to="/gallery"
        >Gallery</router-link
      >
      <router-link class="hamb-link" @click.prevent="close" to="/instruction"
        >Instructions</router-link
      >
      <router-link class="hamb-link" @click.prevent="close" to="/contact"
        >Contact</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    close: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
