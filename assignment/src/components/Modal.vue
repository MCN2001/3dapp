<template>
  <div class="modal" ref="modal">
    <div class="modal-inner">
      <button class="modal-close" @click.prevent="close">
        <img src="@/assets/images/close.svg" alt="icon" class="close-icon" />
      </button>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    close: {
      type: Function,
      required: true,
    },
  },
  mounted() {
    this.$refs.modal.addEventListener("click", (e) => {
      if (e.target === this.$refs.modal) {
        this.close();
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
