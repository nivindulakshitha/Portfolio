import { useGLTF, VideoTexture } from '@react-three/drei'

const DemoComputer = (props) => {
    const { nodes, materials } = useGLTF('/models/computer.glb')
    const text = VideoTexture("/textures/project/project1.mp4")

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.501}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial.geometry}
                        material={materials['01___Default']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_1.geometry}
                        material={materials['01___Default']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_2.geometry}
                        material={materials['01___Default']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_3.geometry}
                        material={materials['01___Default']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_4.geometry}
                    >
                        <meshBasicMaterial map={text} />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_5.geometry}
                        material={materials['01___Default']}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/computer.glb')
export default DemoComputer;