<template>
  <div class="about" id="about" data-page="about">
    <div class="banner" id="banner">
      <div class="container">
        <h1 class="title-4xl">About Project</h1>
        <p class="paragraph">
          My Web 3D application website showcases 3D models of soda cans and
          bottles, an AIgenerated image gallery, and a variety of user interface
          features. Below, I’ve highlighted the key aspects of my project and
          the benefits they provide.My Web 3D application website showcases 3D
          models of soda cans and bottles, an AIgenerated image gallery, and a
          variety of user interface features. Below, I’ve highlighted the key
          aspects of my project and the benefits they provide.
        </p>
        <p class="paragraph">
          I chose the Vue framework for frontend development due to its
          component-based architecture, reactive data-binding, and scalability.
          These features facilitate code reusability, maintainability, and
          modularity, allowing for quicker development and easier updates.
          Furthermore, they simplify UI updates when data changes, improving
          user experience and reducing development complexity.
        </p>
        <p class="paragraph">
          For creating realistic 3D models of soda cans and bottles, I used 3ds
          Max, a powerful modelling and texturing tool. The process involved
          creating a base mesh, refining the topology, UV mapping, and applying
          textures and materials.
        </p>
        <p class="paragraph">
          Instead of X3D files, I opted for the .GLB format due to its better
          compatibility with modern 3D web viewers and frameworks. This decision
          allowed for a more seamless integration and support for advanced
          animation and lighting options, enriching the user experience.
        </p>
        <p class="paragraph">
          My application utilizes AI algorithms to generate photorealistic
          images of soda cans and bottles for the gallery section. To enhance
          the browsing experience and cater to user preferences, I implemented a
          filter option that allows users to selectively view a particular brand
          of soda.
        </p>

        <p class="paragraph">
          I integrated a dark mode option to provide a more comfortable viewing
          experience for users in low-light environments. This feature
          demonstrates commitment to implementing accessibility features and
          catering to diverse user needs, showcasing our versatility and
          usercentric design as programmers.
        </p>

        <!-- tech stacks -->
        <h1 class="title-xl">Tech Stack :</h1>
        <ul class="tech-list">
          <li class="tech-list-item">
            <p class="paragraph">HTML5</p>
          </li>
          <li class="tech-list-item">
            <p class="paragraph">CSS3</p>
          </li>
          <li class="tech-list-item">
            <p class="paragraph">JAVASCRIPT</p>
          </li>
          <li class="tech-list-item">
            <p class="paragraph">VUE (Frontend framework)</p>
          </li>
          <li class="tech-list-item">
            <p class="paragraph">AJAX</p>
          </li>
          <li class="tech-list-item">
            <p class="paragraph">JSON</p>
          </li>
          <li class="tech-list-item">
            <p class="paragraph">XML</p>
          </li>
          <li class="tech-list-item">
            <p class="paragraph">PHP</p>
          </li>
          <li class="tech-list-item">
            <p class="paragraph">SQLITE</p>
          </li>
          <li class="tech-list-item">
            <p class="paragraph">X3D</p>
          </li>
        </ul>

        <!-- credits -->
        <h1 class="title-xl">Credits :</h1>
        <ul class="credits-list">
          <li class="credits-list-item">
            <p class="paragraph">
              <span class="bold">“Designed, developed and maintained by :</span>
              <a href="/" target="_blank"> candidate # 233886</a>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <!-- footer -->
    <FooterBox />
  </div>
</template>

<script>
import FooterBox from "@/components/FooterBox.vue";

export default {
  name: "About",
  components: {
    FooterBox,
  },
};
</script>

<style lang="scss" scoped></style>
