import React, { useState, useEffect } from 'react'
import scanStat from '../../../assets/scanStat.png'
import monitor from '../../../assets/monitor.png'
import receipt from "../../../assets/receipt.png"
import social from "../../../assets/social.png"
import discount from "../../../assets/discount.png"
import wallet from "../../../assets/wallet.png"
import folders from "../../../assets/folders.png"
import balance from "../../../assets/balance.png"

import './ScanPool.scss'

const ScanPool = props => {
    const [scan, setScan] = useState(
        {
            title: "",
            titleMin: "",
            monitor: "",
            receipt: "",
            receiptImg: "",
            discount: "",
            discountImg: "",
            wallet: "",
            folders: "",
            img1: false,
            img2: false

        }
    )
    useEffect(() => {
        switch (props.id) {
            case 0: {
                setScan({
                    title: "Welcome to SCAN Pool",
                    titleMin: "Info:",
                    monitor: "Pool ID:",
                    receipt: "Daedalus/Yoroi Ticker:",
                    receiptImg: receipt,
                    discount: "Fee:    6.25%",
                    discountImg: discount,
                    wallet: "Wallets:Daedalus, Yoroi",
                    folders: "Instructions: Delegation from Daedalus. Yoroi - search for SCAN ticker at the Delegation tab.",
                    img1: true,
                    img2: true
                })
                break;
            }
            case 1: {
                setScan({
                    title: "Instructions",
                    titleMin: "Demo:",
                    monitor: "Pool:",
                    receipt: "Delegating:   ",
                    receiptImg: social,
                    discount: "Balance:    1,000,000 ADA",
                    discountImg: balance,
                    wallet: "",
                    folders: "",
                    img: false,
                    img2: false
                })
                break;
            }

        }
    }, [props.id])
    return (
        <section className="ScanPool">
            <div className="ScanPool-Cont">
                <div className="ScanPool-Cont-Title">
                    <h1>{scan.title}</h1>
                    <p>{scan.titleMin}</p>
                </div>
                <div className="ScanPool-Cont-Flex">
                    <div className="ScanPool-Cont-Flex-Margin1">
                        <img src={monitor} alt="" />
                        <p className="ScanPool-Cont-Flex-Margin2">{scan.monitor}</p>
                    </div>
                    <div><img src={scanStat} alt="" /></div>
                </div>
                <div className="ScanPool-Cont-Flex1">
                    <div className="ScanPool-Cont-Flex1-Margin1">
                        <img src={scan.receiptImg} alt="" />
                        <p>{scan.receipt}</p>
                    </div>
                    <h1>SCAN</h1>
                </div>
                <div className="ScanPool-Cont-Flex1">
                    <div className="ScanPool-Cont-Flex1-Margin1">
                        <img src={scan.discountImg} alt="" />
                        <p>{scan.discount}</p>
                    </div>
                </div>
                <div className="ScanPool-Cont-Flex1">
                    <div className="ScanPool-Cont-Flex1-Margin1">
                        {scan.img1 && (
                            <img src={wallet} alt="" />
                        )}
                        <p>{scan.wallet}</p>
                    </div>
                </div>
                <div className="ScanPool-Cont-Flex1">
                    <div className="ScanPool-Cont-Flex1-Margin1">{scan.img2 && (
                        <img src={folders} alt="" />
                    )}
                        <p>{scan.folders}</p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default ScanPool
