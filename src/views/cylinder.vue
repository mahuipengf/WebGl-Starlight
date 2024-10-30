<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three';

const canvas = ref(); // 获取画布dom元素

const renderer = new THREE.WebGLRenderer(); // 渲染器
renderer.setSize(window.innerWidth, window.innerHeight);
const fov = 75; // 视野范围 代表垂直75度
const aspect = 2 // 宽高比例
const near = 0.1 // 近平面
const far = 5 // 远平面
// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far) // 创建的相机 可以一半在背景内也可在背景外
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2 // 朝着负z轴移动2
const scene = new THREE.Scene() // 创建场景
camera.position.set(400, 300, 200);

// 使相机朝向场景的原点
camera.lookAt(new THREE.Vector3(0, 0, 0));

// 创建一个圆台几何体，设置其底面半径、顶面半径、高度和分段数
// const geometry = new THREE.CylinderGeometry(40, 80, 100, 150, 20);
const geometry = new THREE.CylinderGeometry( 40, 40, 100, 150 );
// 创建一个法线材质，用于显示几何体的原始表面纹理
const material = new THREE.MeshNormalMaterial();
// const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );

// 使用几何体和材质创建一个新的网格 (Mesh) 对象，即圆台模型
const mesh = new THREE.Mesh(geometry, material);

// 在X、Y和Z方向上放大几何体 (圆台) 的大小，使其变为原来的两倍大小
mesh.scale.set(2, 2, 2);

// 将圆台模型添加到场景中
scene.add(mesh);

const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);


onMounted(() => {
    canvas.value.appendChild(renderer.domElement);
})
function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
</script>
<template>
    <div>cylinder</div>
    <!-- <canvas ref="canvas"></canvas> -->
    <div ref="canvas"></div>
</template>

<style scoped></style>