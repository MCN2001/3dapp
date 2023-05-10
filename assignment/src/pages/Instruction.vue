<template>
  <div class="instruction" id="instruction" data-page="instruction">
    <div class="banner" id="banner">
      <div class="container">
        <h1 class="title-4xl">Instructions</h1>
        <p class="paragraph">
          I have implemented various features to enhance the user's ability to
          view and manipulate the 3D models, making the exploration of soda cans
          and bottles more engaging and immersive.
        </p>
        <p class="paragraph">
          Below is a step-by-step demonstration of the key features and
          functionalities available for viewing and manipulating the 3D models:
        </p>
      </div>
    </div>

    <!-- instruction images start -->
    <div class="instruction-images">
      <div class="container">
        <div class="image-box">
          <video
            src="@/assets/videos/1.mp4"
            class="instruction-video"
            preload="auto"
            playsinline
            webkit-playsinline
            loop
            muted
            autoplay
          />
          <p class="paragraph bold">- Camera Angle Adjustment:</p>
          <p class="paragraph">
            - The application allows users to change camera angles, providing
            different viewpoints for observing the 3D models. This feature
            further enhances the user's ability to explore the objects in a more
            detailed and personalized manner.
          </p>
        </div>
        <div class="image-box">
          <video
            src="@/assets/videos/2.mp4"
            class="instruction-video"
            preload="auto"
            playsinline
            webkit-playsinline
            loop
            muted
            autoplay
          />
          <p class="paragraph bold">- Model Rotation:</p>
          <p class="paragraph">
            - Users can rotate the 3D models along different axis to examine the
            object from various perspectives. This feature enables a
            comprehensive understanding of the object's shape and design
            elements
          </p>
        </div>
      </div>
    </div>
    <!-- instruction images end -->

    <div class="banner" id="banner-2">
      <div class="container">
        <h1 class="title-4xl">Lighting Control:</h1>
        <p class="paragraph">
          Users can toggle lighting effects on and off, giving them the option
          to view the 3D models under different lighting conditions. This
          feature can help users better appreciate the textures and materials of
          the soda cans and bottles.
        </p>
        <p class="paragraph">
          Integrating these features into our Web 3D application means that
          users can enjoy a more interactive and dynamic viewing experience,
          with greater control over how they explore the 3D models. This level
          of interactivity encourages deeper engagement with the content and
          provides a more satisfying and enjoyable experience for users.
        </p>
      </div>
    </div>

    <!-- footer -->
    <FooterBox />
  </div>
</template>

<script>
import FooterBox from "@/components/FooterBox.vue";

export default {
  name: "Instruction",
  components: {
    FooterBox,
  },
};
</script>

<style lang="scss" scoped></style>
