import { ReactNode } from 'react'
import styles from "./counter.module.css"

interface ICounterProps {
  children: ReactNode,
  onAddCount: () => void,
  onReduceCount: () => void,
}

export const Counter = ({children,onAddCount,onReduceCount}: ICounterProps) => {

  return (
    <div className={styles['cz-counter']}>
      <button type="button" className={`${styles['cz-counter-button']} pointer`} onClick={onReduceCount}>
        <span>-</span>
      </button>
      {children}
      <button type="button" className={`${styles['cz-counter-button']} pointer`} onClick={onAddCount}>
      <span>+</span>
      </button>
    </div>
  )
}
