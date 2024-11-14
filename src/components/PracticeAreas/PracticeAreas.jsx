import React from 'react'
import style from "./PracticeAreas.module.css"
import { CiBadgeDollar } from "react-icons/ci";
const PracticeAreas = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.practiceAreasHeadling}>
                    <h2>Practice Areas</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={style.practiceAreasCards}>
                    <div className={style.practiceAreasCard}>
                        <CiBadgeDollar className={style.ciBadgeDollar} />
                        <span>Bankruptcy Law</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                    </div>
                    <div className={style.practiceAreasCard}>
                        <CiBadgeDollar className={style.ciBadgeDollar} />
                        <span>Bankruptcy Law</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                    </div>
                    <div className={style.practiceAreasCard}>
                        <CiBadgeDollar className={style.ciBadgeDollar} />
                        <span>Bankruptcy Law</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                    </div>
                    <div className={style.practiceAreasCard}>
                        <CiBadgeDollar className={style.ciBadgeDollar} />
                        <span>Bankruptcy Law</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                    </div>
                    <div className={style.practiceAreasCard}>
                        <CiBadgeDollar className={style.ciBadgeDollar} />
                        <span>Bankruptcy Law</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                    </div>
                    <div className={style.practiceAreasCard}>
                        <CiBadgeDollar className={style.ciBadgeDollar} />
                        <span>Bankruptcy Law</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PracticeAreas
