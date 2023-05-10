<template>
  <div class="gallery" id="gallery" data-page="gallery">
    <div class="banner">
      <div class="container">
        <div class="banner-content">
          <h1 class="title-xl">Explore the Galleries</h1>
          <p class="paragraph">
            Select a gallery to view the brand's collection.
          </p>
        </div>

        <!-- gallery filter start -->
        <button class="bg-link" @click="openModal" data-color="light">
          <img src="@/assets/images/filter.svg" alt="icon" class="icon" />
          Filter
        </button>
        <!-- gallery filter end -->
      </div>
    </div>

    <!-- gallery start -->
    <div class="gallery">
      <div class="container">
        <transition-group name="fade" tag="ul" class="gallery-box">
          <figure
            class="gallery-figure"
            v-for="item in gallery.gallery"
            :key="item.src"
            :data-type="item.type"
          >
            <lazy-image :lazySrc="item.src" alter="gallery image" />
          </figure>
        </transition-group>
      </div>
    </div>
    <!-- gallery end -->

    <!-- footer -->
    <FooterBox />

    <!-- modal -->
    <keep-alive>
      <Modal :close="closeModal" v-if="modal">
        <label for="brand" class="label-text">
          <input
            type="radio"
            name="filter"
            id="all"
            value="all"
            @change.prevent="updateFilter('all')"
            checked
          />
          All
        </label>
        <label for="brand" class="label-text">
          <input
            type="radio"
            name="filter"
            id="coc"
            value="coc"
            @change.prevent="updateFilter('coc')"
          />
          Coca Cola
        </label>
        <label for="brand" class="label-text">
          <input
            type="radio"
            name="filter"
            id="fanta"
            value="fanta"
            @change.prevent="updateFilter('fanta')"
          />
          Fanta
        </label>
        <label for="brand" class="label-text">
          <input
            type="radio"
            name="filter"
            id="sprite"
            value="sprite"
            @change.prevent="updateFilter('sprite')"
          />
          Sprite
        </label>
      </Modal>
    </keep-alive>
  </div>
</template>

<script>
import GSAP from "gsap";
import { Flip } from "gsap/Flip";

import GalleryData from "@/data/gallery.json";

import LazyImage from "@/components/LazyImage.vue";
import Modal from "@/components/Modal.vue";
import FooterBox from "@/components/FooterBox.vue";

GSAP.registerPlugin(Flip);

export default {
  name: "Gallery",
  data() {
    return {
      modal: false,
      gallery: GalleryData,
    };
  },
  components: {
    FooterBox,
    Modal,
    LazyImage,
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },

    // filter animation
    updateFilter(value) {
      const items = GSAP.utils.toArray(".gallery-figure");
      const state = Flip.getState(items);
      items.forEach((el) => {
        if (value === "all" || el.getAttribute("data-type") === value) {
          el.classList.remove("hidden");
        } else {
          el.classList.add("hidden");
        }
      });

      Flip.from(state, {
        duration: 0.7,
        scale: true,
        ease: "expo.inOut",
        stagger: 0.08,
        absolute: true,
        onEnter: (elements) =>
          GSAP.fromTo(
            elements,
            0.7,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, ease: "expo.inOut" }
          ),
        onLeave: (elements) => GSAP.to(elements, 0.5, { opacity: 0, scale: 0 }),
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
