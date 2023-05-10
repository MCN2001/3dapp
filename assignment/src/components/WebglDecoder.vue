<template>
  <div class="webgl-decoder">
    <div class="webgl-decoder-box">
      <div class="input-box">
        <label for="camera" class="label-box">Camera Views :</label>
        <select name="camera" id="camera" @change="updateCamera">
          <option value="front" selected>Front</option>
          <option value="back">Back</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div class="input-box">
        <label for="animation" class="label-box">Animations :</label>
        <select name="animation" id="animation" @change="updateAnimation">
          <option value="off" selected>Off</option>
          <option value="rotateX">RotateX</option>
          <option value="rotateY">RotateY</option>
          <option value="rotateZ">RotateZ</option>
        </select>
      </div>
      <div class="input-box">
        <label for="lights" class="label-box">Lights :</label>
        <select name="lights" id="light" @change="updateLight">
          <option value="on" selected>On</option>
          <option value="off">Off</option>
        </select>
      </div>
      <button class="close-btn" @click.prevent="close">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebglDecoder",
  props: {
    animation: {
      type: Function,
      default: () => {},
    },
    camera: {
      type: Function,
      default: () => {},
    },
    light: {
      type: Function,
      default: () => {},
    },
    close: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    updateAnimation(e) {
      const data = e.target.value;

      this.animation({
        animation: data,
        value: true,
      });
    },

    updateCamera(e) {
      const data = e.target.value;

      this.camera({
        camera: data,
        value: true,
      });
    },

    updateLight(e) {
      const data = e.target.value;

      this.light({
        light: data,
        value: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
