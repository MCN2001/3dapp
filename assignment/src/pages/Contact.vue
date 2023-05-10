<template>
  <div class="contact" id="contact" data-page="contact">
    <div class="banner">
      <div class="container">
        <h1 class="title-4xl">Contact Us</h1>
        <p class="big-paragraph">
          This page was created to apply my skills in PHP and SQlite however
          unfortunately due to time constraints I was not able to fully complete
          this.
        </p>

        <h1 class="title-xl">Contact Form</h1>

        <!-- form -->
        <form action="/" class="contact-form">
          <div class="input-box">
            <label for="name" class="input-label">Name :</label>
            <input type="text" name="name" id="name" class="input" required />
          </div>
          <div class="input-box">
            <label for="email" class="input-label">Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              class="input"
              required
            />
          </div>
          <div class="input-box">
            <label for="message" class="input-label">Message :</label>
            <textarea
              name="message"
              id="message"
              class="input"
              required
            ></textarea>
          </div>
          <div class="input-box">
            <button type="submit" class="bg-link" data-color="black">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- footer -->
    <FooterBox />
  </div>
</template>

<script>
import FooterBox from "@/components/FooterBox.vue";

export default {
  name: "Contact",
  components: {
    FooterBox,
  },
};
</script>

<style lang="scss" scoped></style>
