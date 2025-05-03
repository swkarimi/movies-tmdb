import { base_url } from "@/libs/constant"
import { ListMovieType } from "@/types/types"

export const fetchMovies = async (list: ListMovieType, page?: number) => {
  const p = page || 1
  const url = `${base_url}/movie/${list}?language=en-US&page=${p}`

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  }

  const res = await fetch(url, options)
  return await res.json()
}
