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
      <h3>Playing Now</h3>
      <CarouselWrapper carouselConfig={{borderRadius:"8px"}}>
        <CarouselMovieItems
          movies={nowPlayingMovies.results}
          slideConfig={{ slideToContainerRatio: "20%", height:"100%", borderRadius:"8px", gap:"4px" }}
        />
      </CarouselWrapper>
    </div>
  )
}
