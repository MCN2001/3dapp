<template>
  <img :data-src="image" :alt="alter" ref="lazyImage" class="lazyimage" />
</template>

<script>
export default {
  name: "LazyImage",
  props: {
    lazySrc: {
      type: String,
      required: true,
      default: "",
    },
    alter: {
      type: String,
    },
  },
  mounted() {
    const image = this.$refs.lazyImage;
    image.setAttribute("src", "");
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const imgSrc = img.getAttribute("data-src");
          if (imgSrc) {
            img.setAttribute("src", imgSrc);
            img.onload = () => {
              img.removeAttribute("data-src");
              img.classList.add("loaded");
              imgObserver.unobserve(img);
            };
          }
        }
      });
    });
    imgObserver.observe(image);
  },
  computed: {
    image() {
      return require(`@/assets/images/${this.lazySrc}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
