import React from "react"
import { fetchMovies } from "@/actions/actions"
import { CarouselWrapper } from "@/component/CarouselWrapper"
import { CarouselMovieItems } from "@/component/CarouselMovieItems"

export default async function HomePage() {
  const nowPlayingMovies = await fetchMovies("now_playing")
  // const popularMovies = await fetchMovies("popular")
  // const topRatedMovies = await fetchMovies("top_rated")
  if (!nowPlayingMovies.success || !nowPlayingMovies.data) {
    throw new Error(nowPlayingMovies.error || "Failed to fetch movies")
  }

  const movies = nowPlayingMovies.data.results 

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-900 to-transparent p-2 rounded-md mb-1">
        <h3 className="text-lg capitalize text-yellow-200">playing now</h3>
      </div>
      <CarouselWrapper>
        <CarouselMovieItems movies={movies} />
      </CarouselWrapper>
    </div>
  )
}
