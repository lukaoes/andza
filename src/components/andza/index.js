import { AndzaLayout, ThickBottom, ThickMiddle, ThickTop } from "./andza.styled"
import { MiddleThickConnectBottom, MiddleThickConnectTop } from "./andza.styled"


const Andza = () => {

    return (
        <AndzaLayout>
            <ThickTop></ThickTop>
            <MiddleThickConnectTop></MiddleThickConnectTop>
            <ThickMiddle></ThickMiddle>
            <MiddleThickConnectBottom></MiddleThickConnectBottom>
            <ThickBottom></ThickBottom>
        </AndzaLayout>
    )
}

export default Andza