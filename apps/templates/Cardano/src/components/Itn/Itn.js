import React from 'react'
import CardStat from './CardStat'
import PoolStat from './PoolStat'
import ScanPool from "./ScanPool"
import Query from './Query'
import './Itn.scss'

const Itn = () => {

    return (
        <section className="Itn">
            <div className="Itn-Cont">
                <div className="Itn-Cont-Card">
                    {[0, 1, 2].map(id => <CardStat key={id} id={id} />)}
                </div>
                <div className="Itn-Cont-Pool">
                    {[0, 1].map(id => <PoolStat key={id} id={id} />)}
                </div>
                <div className='Itn-Cont-Context'>
                    <div className="Itn-Cont-Context-Info">
                        <div className="Itn-Cont-Context-Info-Scan">
                            {[0, 1].map(id => <ScanPool key={id} id={id} />)}
                        </div>
                        <div className="Itn-Cont-Context-Info-Query">
                            <Query />
                        </div>
                    </div>
                    <div className="Itn-Cont-Context-Map">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Itn