import s from "../../Users/Users.module.css";
import React from "react";


// @ts-ignore
let Paginator = ({totalItemsCount,pageSize,currentPage,onPageChanged}) => {


    // Ниже тут считаем сколько нам нужно страниц, для пользователей
    // общее количество пользователей  totalUsersCount которые будут на сервере делим на размер страницы pageSize
    //  и получаем количество страниц
    // так же используем метод округления в большую сторону Math.ceil()  так как если будет дробное число
    // цикл for посчитает его в меньшую сторону и получиться так что нам не хватит страниц для пользователей
    // ниже создаём ппеременную pages = [] с пустым массивом и через цикл считаем кол во страниц и через метод push  засовываем
    // в эту переменную именно в массив
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    // ниже через метод map отрисовываем все странички и называем каждый элемент массива p
    //  делаем условие при котором при нажатии на страничку она должна будет выделяться жирным текстом
    //для этого создаём в user-reduser  в  initiaState новую переменную и называем её currentPage
    // когда currentPage будет равна {p} которая вставлена между span тогда цифра странички должна становиться
    // выделенной (жирной)

// В посте axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
//             withCredentials : true
//         })
    //  withCredentials : true передается третим параметром
    //axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
    //                                withCredentials : true
    //                            })
    // У delete  запроса нету второго параметра как и у get запроса
    return (
            <div className={s.pages}>
                {pages.map(p => {
                        //
                        // Так как это классический типичный обработчик событий сюда приходит е(event)
                        // selectedPage это выделенный класс
                        // @ts-ignore
                        return <span className={currentPage === p && s.selectedPage}
                                     onClick={(e) => {onPageChanged(p)}}>{p}</span>
                    }
                )}


            </div>


    )


}
export default Paginator;