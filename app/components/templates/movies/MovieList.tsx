import { listMoviesApi } from 'app/api/MovieApi'
import ImageBox from 'app/components/atom/movies/ImageBox'
import MovieInfo from 'app/components/molecules/movies/MovieInfo'
import { Movies } from 'app/types/MovieList'
import { useEffect, useState } from 'react'
import styles from './MovieList.module.scss'
import DescriptionBox from 'app/components/atom/movies/DescriptionBox'

export default function MovieList() {
  const [movieList, setMovieList] = useState<Movies[] | undefined>(undefined)

  useEffect(() => {
    listMoviesApi()
      .then((data) => setMovieList(data.data.movies))
      .catch((error) => console.log('get api error', error))
  }, [])

  return (
    <div className={styles.movieList}>
      {movieList !== undefined ? (
        movieList.map((movie, index) => {
          return (
            <div key={`${index} + ${movie.id}`} className={styles.movieCard}>
              <div className={styles.movieDetail}>
                <ImageBox image={movie.medium_cover_image} />
                <MovieInfo
                  title={movie.title}
                  genres={movie.genres}
                  rating={movie.rating}
                  runtime={movie.runtime}
                  year={movie.year}
                  url={movie.url}
                />
              </div>
              <DescriptionBox description={movie.description_full} />
            </div>
          )
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}
