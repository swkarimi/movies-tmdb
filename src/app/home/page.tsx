import React from "react"
import { fetchMovies } from "@/actions/actions"
import { CarouselWrapper } from "@/component/CarouselWrapper"
import { CarouselMovieItems } from "@/component/CarouselMovieItems"

export default async function HomePage() {
  const nowPlayingMovies = await fetchMovies("now_playing")
  // const popularMovies = await fetchMovies("popular")
  // const topRatedMovies = await fetchMovies("top_rated")

  return (
    <div>
      <CarouselWrapper>
        <CarouselMovieItems
          movies={nowPlayingMovies.results}
          slideConfig={{ slideToContainerRatio: "25%", height:"300px" }}
        />
      </CarouselWrapper>
    </div>
  )
}
