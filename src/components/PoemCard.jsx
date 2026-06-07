import styles from './PoemCard.module.css'

function PoemBody() {
  return (
    <div className={styles.poem}>

      <p>
        Roses are red,<br />
        Violets are blue,
      </p>

      <p className={styles.stanzaBreak} />

      <p>
        Beauty may be admired,<br />
        Elegance may be learned,
      </p>

      <p className={styles.stanzaBreak} />

      <p>
        But grace, kindness, and character<br />
        are qualities uniquely you.
      </p>

      <p className={styles.stanzaBreak} />

      <p>
        May this birthday mark the beginning<br />
        of a year filled with joy,<br />
        meaningful memories,<br />
        and well-deserved success.
      </p>

      <p className={styles.stanzaBreak} />

      <p className={styles.closing}>
        Happy Birthday, Rosie.
      </p>

    </div>
  )
}

export default function PoemCard() {
  return (
    <div className={styles.center}>
      <div className={styles.card}>
        <div className={styles.borderInset} />

        <div className={styles.ornamentTop}>
          <span className={styles.ornLine} />
          <span className={styles.ornGlyph}>✦</span>
          <span className={styles.ornLine} />
        </div>

        <p className={styles.eyebrow}>for you, always</p>

        <h1 className={styles.title}>
          Happy Birthday
        </h1>
        <h2 className={styles.name}>Rosie</h2>

        <div className={styles.divider}>
          <span className={styles.divLine} />
          <span className={styles.divEmoji}>🌸 ✨ 💖</span>
          <span className={styles.divLine} />
        </div>

        <div className={styles.dateTag}>
          <span>June 10th</span>
        </div>

        <PoemBody />

        <div className={styles.ornamentBottom}>
          <span className={styles.ornLine} />
          <span className={styles.ornGlyph}>✦</span>
          <span className={styles.ornLine} />
        </div>
      </div>
    </div>
  )
}