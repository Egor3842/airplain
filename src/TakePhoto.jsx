import React from 'react'
import s from './TakePhoto.module.scss'
import calendar from './img/Calendar.jpg';

const TakePhoto = () => {
    return(
        <div className={s.container}>
            <div className={s.title}>Доступная съемка <br/> в ближайшее время:</div>
            <table  className={s.table}>
                        <tbody>
                            <tr>
                                <td className={s.When}>
                                    <span className={s.calendar}>Пятница, 14 сентября</span>
                                    <span className={s.frameCalendar}><img src={calendar}/></span>
                                </td>
                            </tr>
                            <tr>
                                <td className={s.td}><div className={s.choose}>
                                    <div className={s.frame}>
                                    <div>15:00-18:00</div>
                                    <div>1500Р</div>
                                    <div>Осталось-1место</div>
                                    </div>
                                    <div className={s.button}><button>Выбрать</button></div>
                                    </div></td>
                            </tr>
                            <tr>
                                <td className={s.td}><div className={s.choose}>
                                    <div className={s.frame}>
                                    <div>19:00-22:00</div>
                                    <div>1500Р</div>
                                    <div>Осталось-1место</div>
                                    </div>
                                    <div className={s.button}><button>Выбрать</button></div>
                                    </div></td>
                            </tr>
                        </tbody>
                    </table>
        </div>
    )
}

export default TakePhoto