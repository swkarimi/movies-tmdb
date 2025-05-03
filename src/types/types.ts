export type ResultFetchType = {
  page: number
  results: MovieType[]
  total_pages: number
  total_results: number
}

export type MovieType = {
  adult: boolean
  backdrop_path: string
  genre_ids: [number, ...number[]]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: number
  vote_average: number
  vote_count: number
}

export type ListMovieType = "now_playing" | "popular" |"top_rated" | "upcoming"
