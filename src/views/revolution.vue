<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

// 太阳系、太阳、地球、月亮

const canvas = ref() // 获取画布dom元素

const scene = new THREE.Scene() // 创建背景
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
) // 创建📷
const renderer = new THREE.WebGLRenderer() // 渲染器
renderer.setSize(window.innerWidth, window.innerHeight)

onMounted(() => {
  canvas.value.appendChild(renderer.domElement)
})

// 设置相机所在位置
camera.position.set(0, 50, 0)
camera.up.set(0, 0, 1)
camera.lookAt(0, 0, 0)

const objects: any[] = []
// 创建3D空间
const solarSystem = new THREE.Object3D()
scene.add(solarSystem)
objects.push(solarSystem)

const radius = 1
const widthSegments = 6
const heightSegments = 6
const sphereGeometry = new THREE.SphereGeometry(
  radius,
  widthSegments,
  heightSegments,
)
const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xffff00 })
const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial)
sunMesh.scale.set(5, 5, 5)
// 将背景替换成3D空间
// scene.add(sunMesh)
solarSystem.add(sunMesh)
objects.push(sunMesh)

// 地球月球关联
const earthOrbit = new THREE.Object3D()
earthOrbit.position.x = 10
solarSystem.add(earthOrbit)
objects.push(earthOrbit)

// 地球
const earthMaterial = new THREE.MeshPhongMaterial({
  color: 0x2233ff,
  emissive: 0x112244,
})
const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial)
earthMesh.scale.set(1.5, 1.5, 1.5)
// earthMesh.position.x = 10
// sunMesh.add(earthMesh)
// solarSystem.add(earthMesh)
earthOrbit.add(earthMesh)
objects.push(earthMesh)

// 月球
const moonOrbit = new THREE.Object3D()
moonOrbit.position.x = 3
earthOrbit.add(moonOrbit)
const moonMaterial = new THREE.MeshPhongMaterial({
  color: 0x888888,
  emissive: 0x222222,
})
const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial)
moonMesh.scale.set(1, 1, 1)
moonOrbit.add(moonMesh)
objects.push(moonMesh)

// 增加光源
const color = 0xffffff
const intensity = 3
const light = new THREE.DirectionalLight(color, intensity) // 创建光线
light.position.set(-1, 2, 4)
scene.add(light)

function animate() {
  requestAnimationFrame(animate)
  objects.forEach(obj => {
    obj.rotation.y += 0.01
  })
  renderer.render(scene, camera)
}
animate()
</script>
<template>
  <div>cylinder</div>
  <!-- <canvas ref="canvas"></canvas> -->
  <div ref="canvas"></div>
</template>

<style scoped></style>
