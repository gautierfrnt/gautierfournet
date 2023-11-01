import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Float, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { MeshBasicMaterial } from "three";
import { easing } from "maath";


export default function F() {

    const gltf = useGLTF('./F.glb')

    const wireframeMaterial = new MeshBasicMaterial({
        color: 0xff4d00, // Rouge
        wireframe: true,  // Active le fil de fer
    });

    const clonedObject = gltf.scene.clone();
    clonedObject.traverse((group) => {
        if (group.isMesh) {
            group.material = wireframeMaterial; // Appliquer le matériau de fil de fer
        }
    });


    const rotate = useRef();

    function Rig() {
        useFrame((state, delta) => {
          easing.damp3(
            state.camera.position,
            [Math.sin(-state.pointer.x) * 5, state.pointer.y * 3.5, 15 + Math.cos(state.pointer.x) * 10],
            0.2,
            delta,
          )
          state.camera.lookAt(0, 0, 0)
        })
    }

    return (

        
        <div className="content">


        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
            position: [0, 0, 6],
        }}
        >

        <ambientLight color={"#D3FFF1"} intensity={1} />  
   
            <Float rotationIntensity={0.4}>
                <Center>

                    <primitive
                        object={clonedObject}
                        // object={gltf.scene}
                        ref={rotate}
                        scale={20}
                        material={wireframeMaterial}
                        size={12}
                        wireframeLinewidth={10}
                    />

                </Center>
            </Float>

            <Rig />

        </Canvas>
    </div>
  );
}





