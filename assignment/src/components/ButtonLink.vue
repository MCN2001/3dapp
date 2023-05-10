<template>
  <router-link :to="to" class="bg-link" :data-color="color">
    {{ text }}</router-link
  >
</template>

<script>
export default {
  name: "ButtonLink",
  props: {
    to: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
