import { useGLTF } from "@react-three/drei"
import { useRef } from "react"

const Target = (props) => {
    const target = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
    return (
        <mesh {...props} ref={target}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Target