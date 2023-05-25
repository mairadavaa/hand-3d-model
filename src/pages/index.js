import { OrbitControls } from '@react-three/drei';
import { useState } from "react"
import { Canvas } from 'react-three-fiber';
import { Model } from '../../public/Model';
import { GreenModel } from '../../public/GreenModel'
import { PinkModel } from '../../public/PinkModel';
export default function Home() {
  const [toggle, setToggle] = useState(2)

  const toggleButton = (index) => {
      setToggle(index)
      console.log(index)
  }
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
        <div> Choose color</div>

      <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor:"brown"}} onClick={() => toggleButton(1)}></div>
      <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor:"green"}} onClick={() => toggleButton(2)}></div>
      <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor:"pink"}} onClick={() => toggleButton(3)}></div>
      </div>
      
      <Canvas style={{ width:"40%", height:"50vh", border:"1px solid black"}} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      {toggle ===1 ?  <Model /> : <GreenModel />}
      {toggle ===2 ? <GreenModel />: <GreenModel />}
      {toggle ===3 ?  <PinkModel />: <GreenModel />}
       
       
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

