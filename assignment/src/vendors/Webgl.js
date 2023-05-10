import GSAP from "gsap";

import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import Models from "./Models";

export default class Webgl {
  constructor({ canvas, loadingScreen }) {
    this.canvas = canvas;
    this.loadingScreen = loadingScreen;
    this.loadingProgressbar = this.loadingScreen.querySelector(
      ".webgl-loading-screen-progressbar-bar"
    );
    this.bounds = this.canvas.getBoundingClientRect();
    this.models = Models;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.bounds.width / this.bounds.height,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(this.bounds.width, this.bounds.height);
    this.renderer.setClearColor(0xffffff, 0);
    this.camera.position.set(0, 0, 10);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 10;
    this.controls.maxDistance = 20;
    this.controls.maxPolarAngle = Math.PI / 2;

    this.state = {
      animation: {
        rotateX: false,
        rotateY: false,
        rotateZ: false,
        off: true,
      },
      lights: {
        on: true,
        off: false,
      },
      camera: {
        front: true,
        back: false,
        left: false,
        right: false,
      },
    };

    window.addEventListener("resize", () => this.onResize());

    this.manager = new THREE.LoadingManager();
  }

  loadModel({ model }) {
    this.scene.clear();
    this.controls.reset();
    this.model = model;
    this.modelUrl = this.models.find((m) => m.id === this.model.id).model;

    this.manager.onStart = () => {
      this.loadingScreen.classList.add("loading");
    };

    this.manager.onLoad = () => {
      this.loadingScreen.classList.remove("loading");
      setTimeout(() => {
        this.loadingProgressbar.style.width = "0%";
      }, 1000);
    };

    this.manager.onProgress = (url, itemsLoaded, itemsTotal) => {
      this.loadingProgressbar.style.width = `${
        (itemsLoaded / itemsTotal) * 100
      }%`;
    };

    this.manager.onError = (url) => {
      console.log("there was an error loading " + url);
    };

    this.loader = new GLTFLoader(this.manager);
    this.loader.load(
      this.modelUrl,
      (gltf) => {
        this.loadedModel = gltf.scene;
        this.loadedModel.position.set(
          model.position.x,
          model.position.y,
          model.position.z
        );
        this.loadedModel.scale.set(model.scale.x, model.scale.y, model.scale.z);

        this.scene.add(this.loadedModel);
        this.addLight({
          light: this.model.light,
        });
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      }
    );
  }

  addLight({ light }) {
    this.light = new THREE.DirectionalLight(light.color, light.intensity);
    this.light.position.set(
      light.position.x,
      light.position.y,
      light.position.z
    );

    this.light2 = new THREE.DirectionalLight(light.color, light.intensity);
    this.light2.position.set(5, 0, -5);

    this.light3 = new THREE.DirectionalLight(light.color, light.intensity);
    this.light3.position.set(-5, 0, -5);

    this.light4 = new THREE.DirectionalLight(light.color, light.intensity);
    this.light4.position.set(0, 10, 0);

    if (this.state.lights.on) {
      this.scene.add(this.light, this.light2, this.light3, this.light4);
    }
  }

  updateStateAnimation(animation, value) {
    this.state.animation.rotateX = false;
    this.state.animation.rotateY = false;
    this.state.animation.rotateZ = false;
    this.state.animation[animation] = value;

    if (this.state.animation.off) {
      GSAP.to(this.loadedModel.rotation, {
        x: 0,
        y: 0,
        z: 0,
      });
    }
  }

  updateStateLight(light, value) {
    this.state.lights.on = false;
    this.state.lights.off = false;
    this.state.lights[light] = value;

    switch (light) {
      case "on":
        this.scene.add(this.light, this.light2, this.light3, this.light4);
        break;
      case "off":
        this.scene.remove(this.light, this.light2, this.light3, this.light4);
        break;
      default:
        break;
    }
  }

  updateStateCamera(camera, value) {
    this.state.camera.front = false;
    this.state.camera.back = false;
    this.state.camera.left = false;
    this.state.camera.right = false;
    this.state.camera[camera] = value;

    switch (camera) {
      case "front":
        GSAP.to(this.camera.position, {
          x: 0,
          y: 0,
          z: 10,
        });
        break;
      case "back":
        GSAP.to(this.camera.position, {
          x: 0,
          y: 0,
          z: -10,
        });
        break;
      case "left":
        GSAP.to(this.camera.position, {
          x: -10,
          y: 0,
          z: 0,
        });
        break;
      case "right":
        GSAP.to(this.camera.position, {
          x: 10,
          y: 0,
          z: 0,
        });
        break;
      default:
        GSAP.to(this.camera.position, {
          x: 0,
          y: 0,
          z: 10,
        });
        break;
    }
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  render() {
    this.renderer.render(this.scene, this.camera);

    this.controls.update();

    if (this.loadedModel) {
      if (this.state.animation.rotateX) {
        this.loadedModel.rotation.x += 0.01;
      }

      if (this.state.animation.rotateY) {
        this.loadedModel.rotation.y += 0.01;
      }

      if (this.state.animation.rotateZ) {
        this.loadedModel.rotation.z += 0.01;
      }
    }
  }
}
