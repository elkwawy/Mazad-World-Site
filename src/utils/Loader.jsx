import { memo } from "react"
import LoaderW from "@/assets/loaderW.svg"

const Loader = memo(({className}) => {
    return (
        <img draggable={false} src={LoaderW} alt="Loading..." className={className} />
    )
})

export default Loader