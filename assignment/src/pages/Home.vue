<template>
  <div class="home" id="home" data-page="home">
    <section class="banner" id="banner">
      <div class="container">
        <div class="home-card">
          <figure class="home-card-image-wrapper">
            <lazy-image
              lazySrc="coc.webp"
              alt="home-card"
              class="home-card-image"
            />
          </figure>
          <div class="home-card-content">
            <h1 class="title-2xl">Coca Cola</h1>
            <h2 class="title-xl">New York Harbour, 1886</h2>
            <p class="paragraph">
              It was 1886, John Pemberton, an Atlanta pharmacist, was inspired
              by simple curiosity. One afternoon, he stirred up a fragrant,
              caramel-coloured liquid and, when it was done, the mixture was
              combined with carbonated water and sampled by customers who all
              agreed - this new drink was something special!
            </p>
            <ButtonLink to="/about" text="More" color="coc" />
          </div>
        </div>
        <div class="home-card">
          <figure class="home-card-image-wrapper">
            <lazy-image
              lazySrc="fanta.webp"
              alt="banner"
              class="banner-image"
            />
          </figure>
          <div class="home-card-content">
            <h1 class="title-2xl">Fanta</h1>
            <h2 class="title-xl">Germany, 1940</h2>
            <p class="paragraph">
              Fanta is an American-owned German brand of fruit-flavored
              carbonated soft drinks created by Coca-Cola Deutschland under the
              leadership of German businessman Max Keith. There are more than
              200 flavors worldwide.
            </p>
            <ButtonLink to="/about" text="More" color="fanta" />
          </div>
        </div>
        <div class="home-card">
          <figure class="home-card-image-wrapper">
            <lazy-image
              lazySrc="sprite.webp"
              alt="banner"
              class="banner-image"
            />
          </figure>
          <div class="home-card-content">
            <h1 class="title-2xl">Sprite</h1>
            <h2 class="title-xl">West Germany, 1959</h2>
            <p class="paragraph">
              First introduced in 1961, crisp, refreshing, clean-tasting Sprite
              is now the world's leading lemon and lime flavoured soft drink and
              is sold in more than 190 different countries. Sprite Zero, part of
              our no sugar Zero range, offers the delicious lemon lime taste of
              Sprite without the sugar or calories.
            </p>
            <ButtonLink to="/about" text="More" color="sprite" />
          </div>
        </div>
      </div>
    </section>
    <FooterBox />
  </div>
</template>

<script>
import FooterBox from "@/components/FooterBox.vue";
import ButtonLink from "@/components/ButtonLink.vue";
import LazyImage from "@/components/LazyImage.vue";

export default {
  name: "Home",
  components: {
    ButtonLink,
    FooterBox,
    LazyImage,
  },
};
</script>

<style lang="scss" scoped></style>
