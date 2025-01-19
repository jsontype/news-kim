// MovieApi에서 받는 data의 타입을 정의

export type STATUS_TYPE = 'ok' | 'error'

export interface Torrents {
  url: string
  hash: string
  quality: string
  type: string
  is_repack: string
  video_codec: string
  bit_depth: string
  audio_channels: string
  seeds: number
  peers: number
  size: string
  size_bytes: number
  date_uploaded: string
  date_uploaded_unix: number
}

export interface Movies {
  id: number
  url: string
  imdb_code: string
  title: string
  title_english: string
  title_long: string
  slug: string
  year: number
  rating: number
  runtime: number
  genres: string[]
  summary: string
  description_full: string
  synopsis: string
  yt_trailer_code: string
  language: string
  mpa_rating: string
  background_image: string
  background_image_original: string
  small_cover_image: string
  medium_cover_image: string
  large_cover_image: string
  state: STATUS_TYPE
  torrents: Torrents[]
  date_uploaded: string
  date_uploaded_unix: number
}

export interface Movie {
  id: number
  url: string
  imdb_code: string
  title: string
  title_english: string
  title_long: string
  slug: string
  year: number
  rating: number
  runtime: number
  genres: string[]
  like_count: number
  description_intro: string
  description_full: string
  yt_trailer_code: string
  language: string
  mpa_rating: string
  background_image: string
  background_image_original: string
  small_cover_image: string
  medium_cover_image: string
  large_cover_image: string
  torrents: Torrents[]
  date_uploaded: string
  date_uploaded_unix: number
}

export interface Meta {
  server_time: number
  server_timezone: string
  api_version: number
  execution_time: string
}

export interface ListMovies {
  status: STATUS_TYPE
  status_message: string
  data: {
    movie_count: number
    limit: number
    page_number: number
    movies: Movies[]
  }
  '@meta': Meta
}
