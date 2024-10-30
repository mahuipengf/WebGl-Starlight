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
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far) // 创建的相机 可以一半在背景内也可在背景外
    camera.position.z = 2 // 朝着负z轴移动2
    const scene = new THREE.Scene() // 创建场景

    const boxWidth = 0.5
    const boxHeight = 0.5
    const boxDepth = 0.5
    const widthSegments = 4;  
    const heightSegments = 4;  
    const depthSegments = 4; 

    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth, widthSegments, heightSegments, depthSegments) // 正方形
    
    // 柱状图
    const radiusTop = 0.5;
    const radiusBottom = 0.5;
    const height = 1;
    const radialSegments = 0.5;
    // const geometry = new THREE.CylinderGeometry(5, 5, 20, 32)


    function makeInstance (geometry: any, color: any, x: number) {
        // const material = new THREE.MeshBasicMaterial({color}) // MeshBasicMaterial 不会受灯光影响
        const material = new THREE.MeshPhongMaterial({color});  // 绿蓝色 MeshPhongMaterial 材质会受灯光影响
        const cube = new THREE.Mesh(geometry, material) // 网格
        scene.add(cube)
        cube.position.x = x
        return cube;

    }
    const cubes = [
        makeInstance(geometry, 0x44aa88,  0),
        makeInstance(geometry, 0x8844aa, -1.5),
        makeInstance(geometry, 0xaa8844,  1.5),
    ];
    // 增加光线
    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.DirectionalLight(color, intensity); // 创建光线
    light.position.set(-1, 2, 4);
    scene.add(light);

    // renderer.render(scene, camera)

onMounted(() => {
    canvas.value.appendChild(renderer.domElement);
})
function render(time: number) {
  time *= 0.001;  // 将时间单位变为秒
  requestAnimationFrame(render);
 
  cubes.forEach((cube: any, ndx: number)=> {
    const speed = 1 + ndx * .1;
    const rot = time * speed;
    cube.rotation.x = rot;
    cube.rotation.y = rot;

  })
 
  renderer.render(scene, camera);
 
}

render(new Date().getTime());
// function animate() {
// 	requestAnimationFrame( animate );
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
// 	renderer.render( scene, camera );
// }
// animate();
</script>
<template>
  <div>hello-club</div>
  <!-- <canvas ref="canvas"></canvas> -->
  <div ref="canvas"></div>
</template>

<style scoped>
</style>