import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Box3, Vector3 } from "three";

useGLTF.preload("/models/myAnimation.glb");

function Model() {
  const gltf = useGLTF("/models/myAnimation.glb");
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const modelRef = useRef();

  useEffect(() => {
    console.log("GLTF loaded:", gltf);

    const box = new Box3().setFromObject(gltf.scene);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);
    console.log("Model bounding box size:", size);
    console.log("Model center:", center);

    gltf.scene.position.x -= center.x;
    gltf.scene.position.y -= center.y;
    gltf.scene.position.z -= center.z;

    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    const firstAction = Object.values(actions)[0];
    if (firstAction) {
      console.log("Playing animation:", firstAction.getClip().name);
      firstAction.play();
    } else {
      console.log("No animations found.");
    }
  }, [gltf, actions]);

  // Rotate the model a bit every frame (around Y axis)
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust speed here
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={0.5} // adjust scale if needed
    />
  );
}

export default function GLBViewer() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Suspense fallback={<div>Loading model...</div>}>
        <Canvas
          shadows
          camera={{ position: [0, 2, 10], fov: 45 }}
          style={{ background: "#222" }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
          <Model />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
}
