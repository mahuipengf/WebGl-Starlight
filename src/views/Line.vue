<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as THREE from 'three';

const dom = ref();
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt( 0, 0, 0);
const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({ color: 0x000ff });
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render( scene, camera );

onMounted(() =>{
    dom.value.appendChild( renderer.domElement );
})
</script>
<template>
  <div ref="dom"></div>
</template>

<style scoped>
</style>