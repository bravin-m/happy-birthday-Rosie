import { useState } from 'react'
import styles from './StartScreen.module.css'

export default function StartScreen({ onStart }) {
  const [pressing, setPressing] = useState(false)

  return (
    <div className={styles.overlay}>
      {/* Decorative corner flourishes */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />

      <div className={styles.card}>
        <div className={styles.cardInner}>
          <p className={styles.eyebrow}>a gift crafted with love</p>
          <h1 className={styles.name}>Rosie</h1>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerIcon}>🌸</span>
            <span className={styles.dividerLine} />
          </div>
          <p className={styles.date}>June 10th</p>
          <p className={styles.subtitle}>
            Something beautiful awaits you inside.
          </p>
          <button
            className={`${styles.enterBtn} ${pressing ? styles.pressing : ''}`}
            onClick={onStart}
            onMouseDown={() => setPressing(true)}
            onMouseUp={() => setPressing(false)}
            onMouseLeave={() => setPressing(false)}
          >
            <span className={styles.btnText}>Open Your Gift</span>
            <span className={styles.btnIcon}>💖</span>
          </button>
          <p className={styles.secret}>
            {/* Secret Message #1 — Some gifts are bought. Some are wrapped. This one was built. */}
          </p>
        </div>
      </div>
    </div>
  )
}
