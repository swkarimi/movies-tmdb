"use client"

import Image from "next/image"
import Link from "next/link"
import { MovieType } from "@/types/types"
import { FC } from "react"
import { image_base_url } from "@/libs/constant"

type CarouselProps = {
  movies: MovieType[]
  slideConfig?: {
    slideHeight?: string
    borderRadius?: string
    gap?: string
    slideWidth?: string
  }
}

export const CarouselMovieItems: FC<CarouselProps> = ({
  movies,
  slideConfig = {},
}) => {
  const {
    slideHeight = "300px",
    borderRadius = "8px",
    slideWidth = "200px", // 50% half of carousel
    gap = "4px",
  } = slideConfig

  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className={`relative shrink-0 grow-0 w-full`}
          style={{
            borderRadius,
            flexBasis: slideWidth,
            marginInlineStart: gap,
            height:slideHeight,
          }}
        >
          <Image
            src={`${image_base_url}${movie.poster_path}`}
            fill
            alt={movie.title}
            className="object-cover"
            style={{ borderRadius }}
          />
          <h2 className="absolute bottom-0 left-0 right-0 bg-white/50 text-gray-900 p-2 font-semibold">
            <Link className="line-clamp-1" href={`/movie/${movie.id}`}>{movie.title}</Link>
          </h2>
        </div>
      ))}
    </>
  )
}
