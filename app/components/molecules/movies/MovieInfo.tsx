import { Link } from 'react-router'
import styles from './MovieInfo.module.scss'
import { useTimeConversion } from 'app/hook/useTimeConversion'

interface MovieInfoProps {
  title: string
  genres: string[]
  rating: number
  runtime: number
  year: number
  url: string
}

export default function MovieInfo({
  title,
  genres,
  rating,
  year,
  runtime,
  url,
}: MovieInfoProps) {
  const { conversionRuntime } = useTimeConversion()

  return (
    <div className={styles.movieInfo}>
      <p className={`${styles.title}`}>{title}</p>
      <p className={`${styles.year} ${styles.movieInfoItem}`}>{`(${year})`}</p>
      <div className={`${styles.genreBox} ${styles.movieInfoItem}`}>
        {genres.map((genre, index) => {
          return (
            <span key={index} className={`${styles.genre}`}>
              {genre}
            </span>
          )
        })}
      </div>
      <p className={`${styles.movieInfoItem}`}>{`⭐️ ${rating}`}</p>
      <p
        className={`${styles.movieInfoItem}`}
      >{`🕓 ${conversionRuntime(runtime)}`}</p>

      <p className={`${styles.movieLink} ${styles.movieInfoItem}`}>
        <Link to={url} target="_blank">
          Movie Link
        </Link>
      </p>
    </div>
  )
}
