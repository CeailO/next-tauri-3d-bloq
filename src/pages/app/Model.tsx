import { useGLTF } from "@react-three/drei";

function Model(props) {
  const gltf = useGLTF("Wolf-Blender-2.82a.glb");
  return <primitive object={gltf.scene} {...props} />;
}

export { Model };
