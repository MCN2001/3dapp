<template>
  <footer class="footer" id="footer">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="@/assets/images/logo.png" alt="logo" class="logo-pic" />
      </router-link>
      <div class="line"></div>
      <p class="small-text coprights">© {{ year }} All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBox",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
