import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import studio from "@theatre/studio";
import { getProject } from "@theatre/core";
import extension from "@theatre/r3f/dist/extension";
import { editable as e, SheetProvider } from "@theatre/r3f";
import { Model } from "./app/Model";

// initialize the studio
studio.initialize();
studio.extend(extension);
const polySheet = getProject("Poly Project").sheet("Poly Sheet");

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <Canvas
      style={{
        backgroundColor: "transparent",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Snapshot visibility */}
      <SheetProvider sheet={polySheet}>
        <OrbitControls />
        <e.pointLight
          theatreKey="Light 1"
          color="yellow"
          intensity={2}
          position={[-1, 1, 4]}
        />
        <e.pointLight
          theatreKey="Light 2"
          color="yellow"
          intensity={2}
          position={[1, 1, 4]}
        />
        <mesh position={[1, 1, 3]}>
          <boxGeometry args={[1, 1, 4]} />
          <meshStandardMaterial color="#FFED00" />
        </mesh>
        <e.mesh theatreKey="Wolf" position={[3, 1, 2]}>
          <Model />
        </e.mesh>
      </SheetProvider>
    </Canvas>
  );
}

export default App;
