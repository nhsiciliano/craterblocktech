import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Crater Block Creatives</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact">
            <span className={styles.linkText}>WORK WITH US</span>
            <Image src="/img/link.png" width="40px" height="40px" alt="" />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          11 MADEN STREET <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@CRATERBLOCKTECH.DEV <br /> 213 4565 5489
        </div>
      </div>
      <div className={styles.cardS}>
          <div className={styles.cardItem}>
            FOLLOW US:
            <br /> _FB _IN _BE _TW
          </div>
          <div className={styles.cardItem}>
            2022 CRATER BLOCK INTERACTIVE
            <br /> ALL RIGHTS RESERVED
          </div>
      </div>
    </div>
  )
}

export default Footer