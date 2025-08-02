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

  return <primitive ref={modelRef} object={gltf.scene} scale={0.5} />;
}

export default function GLBViewer() {
  return (
    <div className="bg-blue-500 text-white min-h-screen font-sans flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-xl font-bold">BRAND</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-cyan-400">
            Features
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-20 px-4 flex-grow gap-8">
        {/* Left side: Text + button */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unleash the Future <br /> of Safety
          </h2>
          <div className="space-x-4 mb-8">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-full font-semibold">
              Buy Now
            </button>
          </div>
        </div>

        {/* Right side: 3D Model Canvas */}
        <div className="md:w-1/2 w-full h-[400px] md:h-[500px]">
          <Suspense
            fallback={
              <div className="flex justify-center items-center w-full h-full bg-black">
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
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-900">
        <h3 className="text-center text-3xl font-bold mb-12">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-cyan-400 text-4xl mb-2">🛡️</div>
            <h4 className="font-bold mb-2">Superior Durability</h4>
            <p>Reliable safety for any ride.</p>
          </div>
          <div>
            <div className="text-cyan-400 text-4xl mb-2">💨</div>
            <h4 className="font-bold mb-2">Aerodynamic Design</h4>
            <p>Built for maximum airflow.</p>
          </div>
          <div>
            <div className="text-cyan-400 text-4xl mb-2">👌</div>
            <h4 className="font-bold mb-2">Optimal Comfort</h4>
            <p>Lightweight and comfortable fit.</p>
          </div>
          <div>
            <div className="text-cyan-400 text-4xl mb-2">🔋</div>
            <h4 className="font-bold mb-2">Smart Technology</h4>
            <p>Integrated communication features.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-400">
        &copy; 2025 BRAND. All rights reserved.
      </footer>
    </div>
  );
}
