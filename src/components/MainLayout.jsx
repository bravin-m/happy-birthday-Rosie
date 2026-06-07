import { useEffect, useState } from 'react'
import VideoPanel from './VideoPanel'
import PhotoPanel from './PhotoPanel'
import PoemCard from './PoemCard'
import styles from './MainLayout.module.css'

export default function MainLayout({ visible }) {
  return (
    <div className={`${styles.layout} ${visible ? styles.visible : ''}`}>
      {/* Ambient background blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <VideoPanel />
      <PoemCard />
      <PhotoPanel />
    </div>
  )
}
