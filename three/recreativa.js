import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

const loader = new GLTFLoader()
loader.load('assets/modelos3d/recreativa_buena.glb', function(glb){
  // console.log(glb)
  const root = glb.scene
  root.scale.set(6,3.5,5)
  root.rotation.y = 3.12
  root.position.y += -3
  
  
  
  scene.add(root)

}, function(xhr){
  // console.log((xhr.loaded/xhr.total * 100) + "% loaded")

}, function(error){
  console.log("An error ocurred")
})


const light = new THREE.AmbientLight(0xffffff, 2, 100)
light.position.set(0, 10, 10)
scene.add(light)


//boiler plate code
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,2,7 )
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
  canvas
})

renderer.setClearColor( 0xffffff, 0);

//Controls
const controls = new OrbitControls(camera,  canvas)
//Para que se siente mas smooth
controls.enableDamping = true
//Para que se pueda mover con click derecho por donde quieras
controls.enablePan = false
//Para hacer zoom
controls.enableZoom = false
//Para que rote solo y la speed
controls.autoRotate = true
controls.autoRotateSpeed = 3

//Resize
window.addEventListener("resize", () => {

  //update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  //update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  //update renderer
  renderer.setSize(sizes.width, sizes.height)

})



renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true



function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  controls.update()
}

animate()