import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import * as THREE from "three";

// Preload model
useGLTF.preload("/models/myAnimation.glb");

function Model() {
  const gltf = useGLTF("/models/myAnimation.glb");
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const modelRef = useRef();

  useEffect(() => {
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

    // Play first animation once
    const firstAction = Object.values(actions)[0];
    if (firstAction) {
      firstAction.reset();
      firstAction.setLoop(THREE.LoopOnce, 1);
      firstAction.clampWhenFinished = true;
      firstAction.play();
    }
  }, [gltf, actions]);

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={0.5}
    />
  );
}

export default function GLBViewer() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Suspense
        fallback={
          <div
            style={{
              width: "100%",
              height: "500px",
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                border: "6px solid #444",
                borderTop: "6px solid #0ff",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                animation: "spin 1s linear infinite",
              }}
            />
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        }
      >
        <Canvas
          shadows
          camera={{ position: [0, 2, 10], fov: 45 }}
          gl={{ alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
          <Model />
          <OrbitControls
            enableRotate={false}
            enableZoom={false}
            enablePan={false}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
