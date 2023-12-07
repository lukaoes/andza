import { AndzaLayout, ThickBottom, ThickMiddle, ThickTop } from "./andza.styled"
import { MiddleThickConnectBottom, MiddleThickConnectTop } from "./andza.styled"
import { TinyLegOne, TinyLegTwo, TinyLegThree, TinyLegFour } from "./andza.styled"
import { SmallJointOne, SmallJointTwo, SmallJointThree, TopCircle } from "./andza.styled"



const Andza = () => {

    return (
        <AndzaLayout>

            <ThickTop>
                <TopCircle></TopCircle>
            </ThickTop>

            <MiddleThickConnectTop></MiddleThickConnectTop>

            <ThickMiddle>
                <TinyLegThree></TinyLegThree>
                <SmallJointOne>

                </SmallJointOne>
                <SmallJointTwo>

                </SmallJointTwo>
                <SmallJointThree>

                </SmallJointThree>
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