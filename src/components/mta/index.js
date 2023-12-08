import { MtaLayout } from "./mta.index"

const Mta = (props) => {
    const data = props.currentClass
    return (
        <MtaLayout className={`opa-${data}`}>

        </MtaLayout>
    )
}

export default Mta