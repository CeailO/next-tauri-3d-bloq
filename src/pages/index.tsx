import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <Canvas
      style={{
        backgroundColor: "transparent",
        width: "100vw",
        height: "100vh",
      }}
    >
      <OrbitControls />
      <pointLight color="yellow" intensity={2} position={[-1, 1, 4]} />
      <mesh position={[1, 1, 3]}>
        <boxGeometry args={[1, 1, 4]} />
        <meshStandardMaterial color="#FFED00" />
      </mesh>
    </Canvas>
  );
}

export default App;
