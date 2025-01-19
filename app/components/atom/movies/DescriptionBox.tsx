import styles from './DescriptionBox.module.scss'

interface Props {
  description: string
}

export default function DescriptionBox({ description }: Props) {
  return <div className={styles.descriptionBox}>{description || '...'}</div>
}
