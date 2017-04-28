import { connect } from "react-redux"
import Checkin from "../components/Checkin"
import {checkin} from "../actioncreators"

const mapStateToProps = (state) => {
    console.log("am",state)
    return {
        user: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkIn(id,location){
            dispatch(checkin(id,location))
        }
    }
}

const CheckinReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Checkin)
export default CheckinReduxContainer
