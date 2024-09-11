import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import { easing } from "maath";

// eslint-disable-next-line react/prop-types
const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (!isMobile) {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, -state.pointer.x / 5, 0], 0.25, delta)
        }

        easing.damp3(state.camera.position, [0, 0, 5], 0.25, delta)
    });

    return (
        <group ref={groupRef}>
            {children}
        </group>
    )
}

export default HeroCamera