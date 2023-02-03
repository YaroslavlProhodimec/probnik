import * as React from "react"
import {sendMessage,} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}



export default compose(
    connect(mapStateToProps,{sendMessage,} ),
    withAuthRedirect
)(Dialogs);
