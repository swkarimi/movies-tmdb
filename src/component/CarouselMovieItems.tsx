"use client"

import Image from "next/image"
import Link from "next/link"
import { MovieType } from "@/types/types"
import { FC } from "react"
import { image_base_url } from "@/libs/constant"

type CarouselProps = {
  movies: MovieType[]
  slideConfig?: {
    height?: string
    borderRadius?: string
    gap?: string
    slideToContainerRatio?: string
  }
}

export const CarouselMovieItems: FC<CarouselProps> = ({
  movies,
  slideConfig = {},
}) => {
  const {
    height = "375px",
    borderRadius = "0",
    slideToContainerRatio = "100%",
    gap = "0px",
  } = slideConfig

  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className={`relative shrink-0 grow-0 w-full`}
          style={{
            borderRadius,
            flexBasis: slideToContainerRatio,
            marginInlineStart: gap,
            height,
          }}
        >
          <Image
            src={`${image_base_url}${movie.poster_path}`}
            fill
            alt={movie.title}
            className="object-cover border border-black"
            style={{ borderRadius }}
            unoptimized
            priority
          />
          <h2 className="absolute bottom-0 left-0 right-0 bg-white/40 text-gray-900 p-4 text-xl font-semibold">
            <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
          </h2>
        </div>
      ))}
    </>
  )
}
