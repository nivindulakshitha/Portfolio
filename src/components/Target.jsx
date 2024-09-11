import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Target = (props) => {
    const target = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

    useGSAP(() => { 
        gsap.to(target.current.position, {
            y: target.current.position.y + 0.5, 
            duration: 1.5,
            repeat: -1,
            yoyo: true
        })
    })

    return (
        <mesh {...props} ref={target} rotation={[0, Math.PI/5, 0]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Target