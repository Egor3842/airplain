import React from 'react'
import sale from './img/sale.png'
import s from './Header.module.scss'

const Header = () =>{
    return(
        <div className={s.container}>
        <div className={s.Header}>
            <div className={s.MainInfo}>
                <div className={s.Text}>Эксклюзивная <span className={s.Photo}>фотосессия</span> при полете на вертолете</div>
                <div className={s.Block}>
                    <div className={s.Info}>                    
                    <div className={s.Cost}>Стоимость:</div>
                    <div className={s.Money}>1500 P</div>
                    </div>
                    <div className={s.Sale}><img className={s.img} src={sale}/></div> 
                </div>
                <div className={s.Button}>
               <button>Забронировать место</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header
