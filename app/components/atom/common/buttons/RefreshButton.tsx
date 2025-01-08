'use client'

import styles from './RefreshButton.module.scss'

//새로고침 버튼. error화면에서 사용
export default function RefreshButton() {
  const reload = () => {
    window.location.replace('/')
  }

  return (
    <div className={styles.refeshButtonBox}>
      <button className={styles.refreshButton} onClick={reload}>
        refresh
      </button>
    </div>
  )
}
