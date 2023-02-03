import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-auth-reducer";
import {Prealoder} from "./Components/common/Prealoder/Preloader";
import {withSuspense} from "./hoc/withSuspense";

// @ts-ignore
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"))
// @ts-ignore
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"))

class App extends React.Component<any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
   return <Prealoder/>
        }

        // @ts-ignore
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs/"
                           render={() => {return <React.Suspense fallback={<Prealoder/>}>
                               <DialogsContainer/>
                               </React.Suspense>}
                           }/>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>
                    <Route path='/users'
                           render={() =>
                               <UsersContainer/>}/>
                    <Route path='/login'
                           render={() =>
                               <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App)
