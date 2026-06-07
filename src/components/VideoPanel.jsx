import { useRef, useState, useEffect } from 'react'
import styles from './VideoPanel.module.css'

const VIDEOS = [
  'assets/Video1.mp4',
  'assets/Video2.mp4',
]

export default function VideoPanel() {
  const videoRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.src = VIDEOS[0]
    video.muted = false
    video.volume = 1
    video.playsInline = true
    video.play().catch(() => {})
  }, [])

  const handleEnded = () => {
    setTransitioning(true)
    setTimeout(() => {
      const next = (current + 1) % VIDEOS.length
      setCurrent(next)
      const video = videoRef.current
      if (video) {
        video.src = VIDEOS[next]
        video.play().catch(() => {})
      }
      setTransitioning(false)
    }, 400)
  }

  return (
    <div className={styles.panel}>
      <div className={styles.frame}>
        <div className={styles.label}>
          <span className={styles.labelDot} />
          happy birthday 🎉
        </div>
        <div className={`${styles.videoWrap} ${transitioning ? styles.fading : ''}`}>
          <video
            ref={videoRef}
            className={styles.video}
            playsInline
            onEnded={handleEnded}
          />
        </div>
        <div className={styles.dots}>
          {VIDEOS.map((_, i) => (
            <span key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
