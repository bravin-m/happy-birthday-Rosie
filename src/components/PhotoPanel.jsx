import { useState, useEffect, useRef } from 'react'
import styles from './PhotoPanel.module.css'

const PHOTOS = [
  'assets/Photo1.jpeg',
  'assets/Photo2.jpeg',
  'assets/Photo3.jpeg',
]

const INTERVAL = 4000

export default function PhotoPanel() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setPrev(current => current)
      setTransitioning(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % PHOTOS.length)
        setTransitioning(false)
        setPrev(null)
      }, 500)
    }, INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div className={styles.panel}>
      <div className={styles.frame}>
        <div className={`${styles.photoWrap} ${transitioning ? styles.fading : ''}`}>
          <img
            key={current}
            src={PHOTOS[current]}
            alt="Birthday memory"
            className={styles.photo}
          />
          {/* Shimmer overlay */}
          <div className={styles.shimmer} />
        </div>

        <div className={styles.caption}>
          <span className={styles.captionText}>birthday girl</span>
          <div className={styles.progress}>
            {PHOTOS.map((_, i) => (
              <div key={i} className={`${styles.progressItem} ${i === current ? styles.progressActive : ''}`}>
                <div className={styles.progressBar} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
