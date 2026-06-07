import { useEffect, useRef } from 'react'
import styles from './Petals.module.css'

const PETAL_COUNT = 22

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

export default function Petals({ active }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!active) return
    const container = containerRef.current
    if (!container) return

    const petals = ['🌸', '🌷', '✿', '❀', '🌺']

    const spawn = () => {
      const el = document.createElement('span')
      el.className = styles.petal
      el.textContent = petals[Math.floor(Math.random() * petals.length)]
      const size = randomBetween(0.8, 1.6)
      const left = randomBetween(-5, 105)
      const duration = randomBetween(6, 14)
      const delay = randomBetween(0, 3)
      const drift = randomBetween(-80, 80)

      el.style.cssText = `
        left: ${left}%;
        font-size: ${size}rem;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        --drift: ${drift}px;
        opacity: 0;
      `
      container.appendChild(el)
      setTimeout(() => el.remove(), (duration + delay) * 1000 + 500)
    }

    // Initial burst
    for (let i = 0; i < PETAL_COUNT; i++) {
      setTimeout(spawn, i * 200)
    }

    // Continuous drizzle
    const interval = setInterval(spawn, 800)
    return () => clearInterval(interval)
  }, [active])

  return <div ref={containerRef} className={styles.container} />
}
