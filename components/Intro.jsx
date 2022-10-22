import React from 'react'
import styles from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle'

const Intro = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
            <Circle backgroundColor="#01c686" right="-40vh" />
            <div className={styles.card}>
                <h1 className={styles.title}>
                    <span className={styles.brand}>CBT</span><br />
                    FRONT-END DEV
                </h1>
                <p className={styles.desc}>We are CRATER BLOCK TECHNOLOGY and we transform your company into a completely web3 
                experience taking full advantage of all the power of blockchain.</p>
                <button className={styles.button}>FIND OUT</button>
            </div>
            <div className={styles.card}>
                <Image 
                    src="/img/Avocado.png"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Intro