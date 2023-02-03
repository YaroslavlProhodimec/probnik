import React from "react";

import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateStatus,} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

// Классовая компонента в ней как минимум определен метод рендер
//Все аякс запросы делаются в классовой компоненте через методы жизненного цикла componentDidMount
// Отклики сидят в response то есть данные
//
class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        if (!userId) {
            userId = this.props.history.push('/login')
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return (<div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        ) //newPostText={props.profilePage.newPost} cоздали и протащили через пропсы прописывали их в app.js потом profile.jsx
    };
}

// Смотри ниже мы делаем новую контейрную обёртку и это у нас компонента поэтому переменную мы
// записываем с большой буквы и приравниваем к встроеному методу withRouter и помещаем в скобки
// (ProfileContainer)
//  этот метод withRouter делается для того чтобы привизать url  к компоненте
// отдаём это всё connect



let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
status:state.profilePage.status,
    authorizedUserId:state.auth.userId,
    isAuth:state.auth.isAuth
})

export default compose (
    connect(mapStateToProps, {getUserProfile,getUserStatus,updateStatus}),
    withRouter,

)
(ProfileContainer);