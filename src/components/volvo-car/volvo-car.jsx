// 0. Install fingerpose npm install fingerpose
// 1. Add Use State
// 2. Import emojis and finger pose import * as fp from "fingerpose";
// 3. Setup hook and emoji object
// 4. Update detect function for gesture handling
// 5. Add emoji display to the screen
import React, { useRef,  useEffec, Suspense } from "react";
import * as THREE from 'three';
// import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import VolvoModel from '../../three/Volvo/5.fbx';
import VolvoModelNew from '../../three/Volvo_2020/auto.fbx';
import VolvoGLTF from '../../three/Volvo_GLTF/Fox.gltf';
import { Canvas } from '@react-three/fiber'
import {Loader} from "../loader/loader";


function VolvoCar() {
    const canvasRef = useRef(null);
    const gltf = useLoader(GLTFLoader, '/Fox.gltf')

    // useEffect(() => {
    //     if (canvasRef) {
    //         const canvas = document.getElementById('volvo-car');
    //         // initialize
    //         let mixer;
    //
    //         // Scene
    //         const scene = new THREE.Scene();
    //         scene.background = new THREE.Color('grey')
    //
    //         // Sizes
    //         const sizes = {
    //             width: window.innerWidth,
    //             height: window.innerHeight
    //         }
    //
    //         const onResize = () =>
    //         {
    //             // Update sizes
    //             sizes.width = window.innerWidth
    //             sizes.height = window.innerHeight
    //
    //             // Update camera
    //             camera.aspect = sizes.width / sizes.height
    //             camera.updateProjectionMatrix()
    //
    //             // Update renderer
    //             renderer.setSize(sizes.width, sizes.height)
    //             renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    //         };
    //
    //         window.addEventListener('resize', onResize);
    //
    //         // Models
    //         const dracoLoader = new DRACOLoader();
    //         dracoLoader.setDecoderPath("/draco/");
    //
    //         const gltfLoader = new GLTFLoader();
    //         gltfLoader.setDRACOLoader(dracoLoader);
    //
    //
    //         // const fbxLoader = new FBXLoader()
    //         // fbxLoader.load(
    //         gltfLoader.load(
    //             '../../three/Volvo_GLTF/Fox.gltf',
    //             (model) => {
    //                 // console.log(model)
    //                 // model.scale.set(0.05, 0.05, 0.05)
    //                 // const mashes = []
    //                 // const findMashes = (obj) => {
    //                 //     obj.children.forEach(child => {
    //                 //         if (child.type !== 'Group') {
    //                 //             mashes.push(child);
    //                 //         } else {
    //                 //             findMashes(child);
    //                 //         }
    //                 //     })
    //                 // }
    //                 // findMashes(model);
    //
    //                 // Animation
    //                 // mixer = new THREE.AnimationMixer(model);
    //                 // console.log((model.animations))
    //                 // console.log(model.animations[0])
    //                 // console.log(mixer)
    //                 // const action = mixer.clipAction(model.animations[0]);
    //                 // action.play();
    //                 scene.add(model.scene)
    //                 // scene.background = new THREE.Color('red')
    //                 console.log(scene)
    //             }
    //             );
    //
    //         // Camera
    //         const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    //         camera.position.set(-30, 10, 20)
    //         scene.add(camera);
    //
    //         // Lights
    //         // const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    //         // scene.add(ambientLight)
    //         //
    //         // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.05)
    //         // directionalLight.castShadow = true
    //         // directionalLight.shadow.mapSize.set(1024, 1024)
    //         // directionalLight.shadow.camera.far = 15
    //         // directionalLight.shadow.camera.left = - 7
    //         // directionalLight.shadow.camera.top = 7
    //         // directionalLight.shadow.camera.right = 7
    //         // directionalLight.shadow.camera.bottom = - 7
    //         // directionalLight.position.set(- 5, 5, 0)
    //         // scene.add(directionalLight)
    //
    //
    //         // Controls
    //         const controls = new OrbitControls(camera, canvas)
    //         controls.target.set(0, 0.75, 0)
    //         controls.enableDamping = true
    //         controls.minDistance = 25;
    //         controls.maxDistance = 50;
    //
    //         // renderer
    //         const renderer = new THREE.WebGLRenderer({
    //             canvas: canvas
    //         });
    //         renderer.shadowMap.enabled = true
    //         renderer.shadowMap.type = THREE.PCFSoftShadowMap
    //         renderer.setSize(sizes.width, sizes.height)
    //         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    //         renderer.setClearColor( 0xffffff, 0);
    //
    //         // Animations
    //         const clock = new THREE.Clock()
    //         let previousTime = 0
    //
    //         const tick = () =>
    //         {
    //             const elapsedTime = clock.getElapsedTime()
    //             const deltaTime = elapsedTime - previousTime
    //             previousTime = elapsedTime
    //
    //             // Model animation
    //             if(mixer)
    //             {
    //                 mixer.update(deltaTime)
    //             }
    //
    //             // Update controls
    //             controls.update()
    //
    //             // Render
    //             renderer.render(scene, camera)
    //
    //             // Call tick again on the next frame
    //             window.requestAnimationFrame(tick)
    //         }
    //
    //         tick();
    //
    //
    //         return () => {
    //             window.removeEventListener('resize', onResize);
    //         }
    //     }
    // },[canvasRef])

    return (
        // <canvas
        //     id="volvo-car"
        //                 ref={canvasRef}
        //                 style={{
        //                     position: "absolute",
        //                     marginLeft: "auto",
        //                     marginRight: "auto",
        //                     left: 0,
        //                     right: 0,
        //                     textAlign: "center",
        //                     zindex: 9,
        //                     width: 640,
        //                     height: 480,
        //                 }}
        // />
        <Canvas>
                <primitive object={gltf.scene} />
        </Canvas>


    );
}

export default VolvoCar;
