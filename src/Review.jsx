import React from 'react'
import s from './Review.module.scss'
import first from './img/Ellipse (1).png'
import second from './img/Ellipse (2).png'
import third from './img/Ellipse (3).png'
import star from './img/Vector (8).png'

const Review = () => {
    const state = [
        {
            img: first,
            who: 'Арт-директор',
            name: 'Валерия Антонова',
            star: 5,
            description: 'Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!',
            when: '27 Апреля, 2019г.'
        },
        {
            img: second,
            name: 'Виталий Петров',
            who: 'Фотограф',
            star: 5,
            description: 'Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. Организация полёта отличная. Спасибо!',
            when: '19 Апреля, 2019г.'
        },
        {
            img: third,
            name: 'Джим Керри',
            star: 5,
            description: 'Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!',
            when: '11 Апреля, 2019г.'
        }
    ]
    
    return (
        <div className={s.container}>
            <div>Отзывы:</div>
                {state.map(u=>
                <div>
                 <table className={s.Review}>
                        <tbody>
                            <tr>
                                <td><div className={s.img}><img src={u.img} /></div></td>
                                <td><div>
                                    <div className={s.name}>{u.name} </div>
                               <div className={s.job}>{u.who}</div>
                               <div className={s.images}>
                              <img src={star}/>
                              <img src={star}/>
                              <img src={star}/>
                              <img src={star}/>
                              <img src={star}/>
                              </div>
                                    <div className={s.description}>{u.description}</div>
                                   <div className={s.when}> {u.when}</div></div>
                                   <div className={s.line}></div></td>
                            </tr>
                        </tbody>
                        </table>
                       
                        </div>)}
            </div>
       
    )
}

export default Review