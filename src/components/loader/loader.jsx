import { Html, useProgress } from '@react-three/drei'

export const Loader = () => {
    const { progress } = useProgress()
    return <Html zIndexRange={[2, 2]} center>{progress} % loaded</Html>
}