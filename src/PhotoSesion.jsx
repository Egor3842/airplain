import React from 'react'
import s from './PhotoSesion.module.scss'
import circle from './img/Vector.png'
import photo from './img/Vector (1).png'
import location from './img/Vector (2).png'
import answer from './img/Vector (6).png'
import example from './img/pic1.png'
import smile from './img/pic2.png'
import ground from './img/pic3.png'
import place from './img/pic4.png'

const PhotoSesion = () => {
    let state = [
        {
            img: circle,
            description: '3 часа съемки'
        },
        {
            img: photo,
            description: 'Более 50 фотографий'
        },
        {
            img: location,
            description: 'Москва'
        },
        {
            img: answer,
            description: 'Готовы ответить на любые вопросы'
        }
    ]
    return (
        <div className={s.container}>
            <div className={s.PhotoInfo}>
                <div className={s.MainInformation}>
                    <div className={s.header}>Фотосессия <br />
                в вертолете</div>
                    <div className={s.about}>Полет на вертолете это прекрасная возможность <br />
                 получить новые ощущения! А наш замечательный <br />
                  фотограф запечатлит лучшие моменты
                  </div>
                    {state.map(i => <table>
                        <tbody>
                            <tr>
                                <td><div className={s.frame}><img src={i.img} /></div></td>
                                <td><div className={s.description}>{i.description}</div></td>
                            </tr>
                        </tbody>
                    </table>)}


                </div>
                <div className={s.example}><img src={example} /></div>
            </div>
            <div className={s.AllPhotos}>
                        <div className={s.title}>Фотографии пакета:</div>
                        <div className={s.Photos}>
                            <img src={smile}/>
                            <img src={ground}/>
                            <img src={example}/>
                            <img src={place}/>
                            <img src={example}/>
                            <img src={place}/>
                            <img src={ground}/>
                            <img src={example}/>
                        </div>
                        <div className={s.ShowAll}>
                            Показать все фото
                        </div>
            </div>
            <div className={s.line}></div>
        </div>

    )
}

export default PhotoSesion