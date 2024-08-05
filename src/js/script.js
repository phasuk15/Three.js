import * as THREE from 'three';
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js';
import { reduceVertices } from 'three/examples/jsm/utils/SceneUtils.js';

//creates new WebGL renderer which renders 3D scene to a canvas
const renderer = new THREE.WebGLRenderer();

//sets size of rendering area to window size
renderer.setSize(window.innerWidth, window.innerHeight);

//appends DOM element (canvas) created by renderer onto HTML document
document.body.appendChild(renderer.domElement);

//scene is a container that holds all objects 
const scene = new THREE.Scene();

//has 4 parameters (fov, aspect ratio, near, far)
//orthographic camera doesn't change size regardless of distance from camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

//helps visualises axes
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//sets the camera position
camera.position.set(0, 2, 5);


const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color:0X00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

renderer.render(scene, camera);


