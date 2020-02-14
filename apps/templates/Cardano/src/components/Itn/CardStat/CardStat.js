import React, { useState, useEffect } from 'react'
import './CardStat.scss'

const CardStat = props => {
    const [content, setContent] = useState({
        title: '',
        desc: '',
        percent: '',
        footer: ''
    })
    useEffect(() => {
        switch (props.id) {
            case 0: {
                setContent({
                    title: 'Last epoch pool efficiency',
                    desc: 'Generated / Expected blocks',
                    percent: '77.27%',
                    footer: 'Efficiency'
                })
                break;
            }
            case 1: {
                setContent({
                    title: 'Current saturation',
                    desc: 'Pool epoch stake / Total epoch stake * 100',
                    percent: '0.46%',
                    footer: 'Saturation over 1% will result reduction of rewards'
                })
                break;
            }
            case 2: {
                setContent({
                    title: 'Expected saturation in 48hr',
                    desc: 'Pool live stake / Network live stake * 100',
                    percent: '0.46%',
                    footer: 'Saturation over 1% will result reduction of rewards'
                })
                break;
            }
            default: {
                setContent({
                    title: 'Last epoch pool efficiency',
                    desc: 'Generated / Expected blocks',
                    percent: '77.27%',
                    footer: 'Efficiency'
                })
            }
        }
    }, [props.id])

    return (
        <section className="CardStat">
            <div className="CardStat-Cont">
                <div className="CardStat-Cont-Header">
                    <div className="CardStat-Cont-Header-Title">
                        <h1>{content.title}</h1>
                        <p>{content.desc}</p>
                    </div>
                    <h1>{content.percent}</h1>
                </div>
                <div className="CardStat-Cont-Line"><div className="CardStat-Cont-Line-Inner"></div></div>
                <p className="CardStat-Cont-Plast">{content.footer}</p>
            </div>
        </section>
    )
}

export default CardStat