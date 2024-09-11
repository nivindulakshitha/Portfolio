import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html as="div" center style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <span className="canvas-loader" />
            <p style={{ fontSize: 14, color: '#F1F1F1', fontWeight: 700, marginTop: 40, opacity: 0.5, whiteSpace: 'nowrap' }}>
                {
                    progress !== 0 ? `Loading... ${progress.toFixed(0)}%` : 'Loading...'
                }
            </p>

        </Html>
    )
}

export default CanvasLoader