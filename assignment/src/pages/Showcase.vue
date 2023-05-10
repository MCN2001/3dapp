<template>
  <div class="showcase" id="showcase" data-page="showcase">
    <div class="banner">
      <div class="container">
        <h1 class="title-xl">3D Product Showcase</h1>
        <div class="models-btns">
          <button
            :class="['link', modelId === 1 || modelId === 4 ? 'active' : '']"
            @click="changeModel(1)"
          >
            Coca Cola
          </button>
          <button
            :class="['link', modelId === 2 ? 'active' : '']"
            @click="changeModel(2)"
          >
            Fanta
          </button>
          <button
            :class="['link', modelId === 3 ? 'active' : '']"
            @click="changeModel(3)"
          >
            Sprite
          </button>
        </div>
      </div>
    </div>

    <!-- webgl start -->
    <div class="webgl-box">
      <div class="container">
        <div
          class="webgl-content"
          :data-id="modelId"
          v-if="modelId === 1 || modelId === 4"
        >
          <button class="btn" @click="changeModel(1)">Can</button>
          <button class="btn" @click="changeModel(4)">Bottle</button>
        </div>
        <div class="webgl-content" :data-id="modelId" v-else>
          <button class="btn">Can</button>
        </div>
        <Webgl :id="modelId" />
      </div>
    </div>
    <!-- webgl end -->

    <!-- history start -->
    <div class="history">
      <div class="container">
        <h1 class="title-4xl">{{ content.title }}</h1>
        <h2 class="title-xl">{{ content.subtitle }}</h2>
        <p class="paragraph">
          {{ content.description }}
        </p>
        <a
          :href="content.link"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-link"
          :data-color="content.name"
          >Read More...</a
        >
      </div>
    </div>
    <!-- history end -->
  </div>
</template>

<script>
import Data from "@/data/history.json";
import Webgl from "@/components/Webgl.vue";

export default {
  name: "Showcase",
  data() {
    return {
      modelId: 1,
      history: Data.history,
      content: Data.history[0],
      isOne: true,
    };
  },
  components: {
    Webgl,
  },
  methods: {
    changeModel(id) {
      this.modelId = id;
      this.content = this.history[id - 1];
    },
  },
};
</script>

<style lang="scss" scoped></style>
