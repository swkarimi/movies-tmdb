"use client"

import Image from "next/image"
import { MovieType } from "@/types/types"
import { FC } from "react"
import { image_base_url } from "@/libs/constant"
import { convertDate } from "@/libs/function"

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
          className={`relative shrink-0 grow-0 w-full select-none group/link`}
          style={{
            borderRadius,
            flexBasis: slideWidth,
            marginInlineStart: gap,
            height: slideHeight,
          }}
        >
          <Image
            src={
              `${image_base_url}${movie.poster_path}` ||
              `${image_base_url}${movie.poster_path}`
            }
            fill
            alt={movie.title}
            className="object-cover group-hover/link:brightness-110"
            style={{ borderRadius }}
            sizes="200px"
            priority
          />
          <div className="absolute bg-black opacity-20 inset-0 rounded-[8px] group-hover/link:opacity-0 duration-100"></div>
          <div className="absolute left-0 right-0 bottom-0 top-3/4 rounded-[8px] bg-gradient-to-t from-black to-transparent "></div>
          <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
            <h3 className="font-semibold line-clamp-1">{movie.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm">
                📅{convertDate(movie.release_date)}
              </span>
              <span className="text-sm">{movie.vote_average.toFixed(1)}⭐</span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
