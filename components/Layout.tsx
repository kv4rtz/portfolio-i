import { ReactNode, memo, useState } from "react"
import Loading from "@/components/Loading"
import 'aos/dist/aos.css'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [loading, setLoading] = useState<boolean>(true)

    setTimeout(() => {
        setLoading(false)
    }, 1450)

    return (
        <>
            {loading ? <Loading/> : children}
        </>
    )

}


export default memo(Layout)