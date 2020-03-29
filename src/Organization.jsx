import React from 'react'
import s from './Organization.module.scss'
import photo from './img/Ellipse.png'

const Organization = () => {
    return (
        <div className={s.container}>
            <div className={s.AboutOrganization}>
                <div className={s.title}>  Об организаторе:</div><br/>
                <div className={s.description}>
                    Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются в маркетинге, операциях и услугах обслуживания клиентов, специализирующихся на совместном использовании и частных турах.
                    <br />
                    <br />
                    Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету
                    и планам клиента. Мы никогда не зависим от субпоставщиков
                    и не свяжемся…
                    <div className={s.ReadMore}>Читать еще </div>
                    </div>
            </div>
            <div className={s.Photographer}>
               <div className={s.HeartContainer}> <div className={s.heart}></div> </div>
                <img src={photo}/> <br/><br/>
                <div className={s.name}>Марина Иванова</div>
                <div className={s.job}>Фотограф</div><br/>
                <div className={s.ShowMore}>Показать больше <br/> информации о фотографе</div>
            </div>
            <div className={s.WhatDo}>
                <div className={s.ShowTitle}>Что я предоставлю:</div><br/>
                <div className={s.ShowDesription}>Встречу вас на машине после длительного перелёта. <br/>
                Качественный подбор места и локации для вашей съемки.<br/> При необходимости всегда возможно прерваться на обед/ужин.
                Более 50 фотографий на выходе с обработкой и замечательные впечатления о Дубае !</div>
            </div>
            <div className={s.line}></div>
        </div>
    )
}

export default Organization