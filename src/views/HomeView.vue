<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import btn_slot from '@/components/btn-slot.vue';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5

function animate() {
	requestAnimationFrame( animate );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();
const dom = ref();
onMounted(() => {
  dom.value.appendChild(renderer.domElement);
})
</script>

<template>
  <div class="border">
    <div class="">
      <btn_slot >
        <template v-slot:btn>
          都可以啊
        </template>
      </btn_slot>
      <btn_slot>
        <template #text>
          只需要展示具名插槽
        </template>
      </btn_slot>
    </div>
  </div>
  12341
    <div ref="dom"></div>
</template>
<style>
.border {
  width: 300px;
  height: 200px;
  /* border: 3px solid #f00; */
  /* border-color: linear-gradient(180deg, rgba(133, 157, 221, 0) 0%, rgba(133, 157, 221, 0.4) 45.05%, rgba(133, 157, 221, 0.7) 100%); */
  /* border: 5px solid; */
  /* border: 20px solid #f00; */
  /* border-image: linear-gradient(to bottom,#eaf3f3, #fbfbfb); */
/* border-image-source: linear-gradient(180deg, rgba(133, 157, 221, 0), rgba(133, 157, 221, 0.4), rgba(133, 157, 221, 0.7)); */

  /* border-image: linear-gradient(180deg, rgba(133, 157, 221, 0) 0%, rgba(133, 157, 221, 0.4) 45.04%, rgba(133, 157, 221, 0.7) 100%) 30; */
  border-image: linear-gradient(180deg, rgba(133, 157, 221, 0) 0%, rgba(133, 157, 221, 0.4) 45.05%, rgba(133, 157, 221, 0.7) 100%) 30;
  /* border: 20px solid; */
  border-image-width: 20px;

}
</style>