import { connect } from "react-redux"
import Checkin from "../components/Checkin"

const mapStateToProps = (state) => {
    console.log("am",state)
    return {
        user: state
    }
}

const CheckinReduxContainer = connect(mapStateToProps, null)(Checkin)
export default CheckinReduxContainer
