import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls , Center, Float, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { MeshBasicMaterial } from "three";


export default function FlashContact() {

    const gltf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/lightning/model.gltf')

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
            rotate.current.rotation.y += delta
        })
        return null;
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

        <OrbitControls 
            makeDefault 
            enableZoom={false} 
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
        /> 
   
            <Float rotationIntensity={0.4}>
                <Center>

                    <primitive
                        object={clonedObject}
                        // object={gltf.scene}
                        ref={rotate}
                        scale={2}
                        material={wireframeMaterial}
                        position-y={2}
                        position-x={0}
                    />

                </Center>
            </Float>

            <Rig />

        </Canvas>
    </div>
  );
}





