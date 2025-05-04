import { ApiResponse } from "@/libs/ApiResponse"
import { base_url } from "@/libs/constant"
import { ListMovieType, ResultFetchMovieType } from "@/types/types"

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

  try {
    const res = await fetch(url, options)
    if (!res.ok) {
      const errorData = await res.json()
      return ApiResponse.error<ResultFetchMovieType>(
        `Error ${res.status}: ${errorData.status_message || res.statusText}`
      )
    }

    const data = await res.json()
    return ApiResponse.success<ResultFetchMovieType>(data)
  } catch (error) {
    return ApiResponse.error<ResultFetchMovieType>(
      error instanceof Error ? error.message : "Unknown error"
    )
  }
}
