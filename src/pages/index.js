import { OrbitControls } from '@react-three/drei';

import { Canvas } from 'react-three-fiber';
import { Model } from '../../public/Model';

export default function Home() {
  return (
    <div style={{ width: "100%", height: "1000px" }}>
      <div> fkdhhkdahkfhk</div>
      <Canvas style={{ width:"600px", height:"1000px", border:"1px solid black"}} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
        <Model />
        <OrbitControls
          enableZoom={true}
        // minPolarAngle={1.45}
        // maxPolarAngle={Math.PI / 1.85}
        // autoRotate
        // enableRotate={true}
        // autoRotateSpeed={5}
        // rotateSpeed={0.5}
        />
      </Canvas>
     
  
    </div>
  );
}

