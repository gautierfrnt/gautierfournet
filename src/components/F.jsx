import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import { useRef } from "react";
import { easing } from "maath";

export default function F() {
    const textRef = useRef();

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


        <ambientLight intensity={2} />

       
            <Float rotationIntensity={0.4}>
                <Center>
                    <Text3D
                        ref={textRef}
                        font="../fonts/false_Bold.json"
                        size={12}
                        height={1}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.01}
                        bevelSize={0.1}
                        bevelOffset={0}
                        bevelSegments={5}

                        >
                        F
                        <meshBasicMaterial
                            color={"#FF4D00"}
                            toneMapped={false}
                            wireframe
                            wireframeLinewidth={5}
                        />
                    </Text3D>

                    {/* <mesh>
                        <boxGeometry
                            args={[5, 5, 5]}
                        />
                        <meshStandardMaterial color="#010101" ref={textRef}/>
                    </mesh> */}

                </Center>
            </Float>

            <Rig />

        </Canvas>
    </div>
  );
}





