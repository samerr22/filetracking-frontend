import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import * as THREE from "three"; // Required for animation loop constants

// Preload model
useGLTF.preload("/models/myAnimation.glb");

function Model() {
  const gltf = useGLTF("/models/myAnimation.glb");
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const modelRef = useRef();

  useEffect(() => {
    console.log("GLTF loaded:", gltf);

    // Center the model
    const box = new Box3().setFromObject(gltf.scene);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);
    gltf.scene.position.x -= center.x;
    gltf.scene.position.y -= center.y;
    gltf.scene.position.z -= center.z;

    // Enable shadows
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    // Play the first animation only once
    const firstAction = Object.values(actions)[0];
    if (firstAction) {
      console.log("Playing animation:", firstAction.getClip().name);
      firstAction.reset();
      firstAction.setLoop(THREE.LoopOnce, 1);
      firstAction.clampWhenFinished = true; // Freeze on last frame
      firstAction.play();
    } else {
      console.log("No animations found.");
    }
  }, [gltf, actions]);

  // Optional: Add gentle rotation (remove if not needed)
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={0.5} // Adjust as needed
    />
  );
}

export default function GLBViewer() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Suspense fallback={<div style={{ color: "#fff" }}>Loading model...</div>}>
        <Canvas
          shadows
          camera={{ position: [0, 2, 10], fov: 45 }}
          style={{ background: "#222" }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
          <Model />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
}
