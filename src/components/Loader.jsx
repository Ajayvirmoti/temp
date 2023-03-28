import { Html,useProgress } from "@react-three/drei"
// This component is used to load the canvas on click frequentlly without any delay 
const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>
      <span>
        <p style={{fontSize:14,color:'#f1f1f1',fontWeight:800,marginTop:40}}>
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>

  )
}

export default Loader