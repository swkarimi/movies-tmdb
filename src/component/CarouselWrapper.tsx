"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { FC, ReactNode } from "react"

type CarouselWrapperProps = {
  children: ReactNode
  carouselConfig?: {
    delay?: number
    align?: "start" | "center" | "end"
    loop?: boolean
    height?: string
    className?: string
    borderRadius?: string
  }
}

export const CarouselWrapper: FC<CarouselWrapperProps> = ({
  children,
  carouselConfig = {},
}) => {
  const {
    delay = 2500,
    align = "start",
    loop = false,
    className = "", //max-w-5xl w-11/12 mx-auto
    borderRadius = "0px",
  } = carouselConfig

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, align, slidesToScroll: 1 },
    [Autoplay({ delay })]
  )

  const handlePrevButton = () => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }

  const handleNextButton = () => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ borderRadius }}
      ref={emblaRef}
    >
      <div className={`flex`}>{children}</div>
      <button
        className="absolute top-1/2 -translate-y-1/2 left-0"
        onClick={handlePrevButton}
      >
        <ChevronLeftIcon className="size-10 opacity-20 hover:opacity-80 duration-300" />
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 right-0"
        onClick={handleNextButton}
      >
        <ChevronRightIcon className="size-10 opacity-20 hover:opacity-80 duration-300" />
      </button>
    </div>
  )
}
