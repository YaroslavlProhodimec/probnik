// @ts-ignore

import React from 'react'
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPages, toggleFollowingProgress, unfollow} from "../../redux/users-reduser";
import Users from "./Users";
import {Prealoder} from '../common/Prealoder/Preloader';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersSuper,

} from "../../redux/users-selectoors";
// Выше делаем прелоодер в него помещаем картинку


// Тут как то не понятно оббьорачивваем есть контейнераня внутри нее контейнерная и внутри Users
// компонента для аякс запросов
// ЭТО КОНТЕЙНЕРНАЯ  классовая КОМПОНЕНТА ТУТ мы её используем для отчистки презентационной
// компоненты от соединения со сторонними серверами
// у классовых компонентов пропсы это часть обьекта это их свойство короче говоря мы их пишем чере this.props
class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        let{currentPage,pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber: any) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)

    }
    //componentDidMount()
    // Это  место для создания сетевых запросов,встроенный метод
    // Делаем запрос через axios.get
    // Тут внимательно домен оборачиваем обратными ковычками чтобы можно было вставить обьект
    // Так же после домена через слеш прописываем то место где бы мы хотели оказаться на сервере
    // другими словами делаем запрос
    //какие запросы серверу мы можем делать можно посмотреть на https://social-network.samuraijs.com/docs?type=todolist#
    // тут внимательнее мы вставляем прогрузочную аннимацию в аякс запрос если аякс запрос uhepbn то мы получаем true
    // а это ознает что аниимации надо показывать себя для позователей
    // а когда аякс запрос прогрузиться то это означает её нужно убрать
    // (response: AxiosResponse) погуглить работа идёт с тайп скриптом
    // {withCredentials : true} добавляем во всю да чтобы сервер знал что мы залогинины



// выше мы получили с сервера данные они у нас уже отрисованы, ниже мы уже ппросим по методу нашей функции
    // разместить все этих пользователей по страничкам в этом нам помогает наша функция onPageChanged там мы и сопоставляем currentPage
    //  и тут получается пронумеровка страниц и соответствено располагаются юзеры

    // что касаемо прогрузочной аниммации описание смотри выше тут мы повторяем те же действия
    //  если посмотреть в верхнем запросе то там используется this.props.currentPage
    // здесь же в нижем запросе необходимо использовать {pageNumber} который нам приходит в праметрах


    render() {

// тут внимательнее выше мы указываем состояние стейта isFetching а ниже мы передаем и создаем условие
        // при которых оно будет работать(отображаться)
        // сама эта функция она никуда не передается она остается здесь и ретурнеться и вместе с ней ретурняться юзеры
        // и
        // @ts-ignore
        return <>

            {this.props.isFetching ? <Prealoder/> : null}
            <Users
                setTotalUsersCount={this.props.setTotalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}

                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
    }

}
export default compose (connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPages,
    toggleFollowingProgress,
    getUsers
}),withAuthRedirect)(UsersContainer)