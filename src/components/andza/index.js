import { AndzaLayout, ThickBottom, ThickMiddle, ThickTop } from "./andza.styled"
import { MiddleThickConnectBottom, MiddleThickConnectTop } from "./andza.styled"
import { TinyLegOne, TinyLegTwo, TinyLegThree, TinyLegFour } from "./andza.styled"
import { SmallJointOne, SmallJointTwo, SmallJointThree, TopCircle } from "./andza.styled"
import "../sky/index.scss"


const Andza = (props) => {

    const data = props.currentClass

    return (
        <AndzaLayout className={`opa-${data}`}>

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