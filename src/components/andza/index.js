import { AndzaLayout, ThickBottom, ThickMiddle, ThickTop } from "./andza.styled"
import { MiddleThickConnectBottom, MiddleThickConnectTop } from "./andza.styled"
import { TinyLegOne, TinyLegTwo, TinyLegThree, TinyLegFour } from "./andza.styled"



const Andza = () => {

    return (
        <AndzaLayout>
            <ThickTop></ThickTop>

            <MiddleThickConnectTop></MiddleThickConnectTop>

            <ThickMiddle>
                <TinyLegThree></TinyLegThree>
            </ThickMiddle>

            <MiddleThickConnectBottom></MiddleThickConnectBottom>

            <ThickBottom>
                <TinyLegOne>
                </TinyLegOne>
                <TinyLegTwo>
                </TinyLegTwo>
                <TinyLegFour>
                </TinyLegFour>
            </ThickBottom>
        </AndzaLayout>
    )
}

export default Andza