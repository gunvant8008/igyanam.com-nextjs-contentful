import React from "react"
import clsxm from "@/lib/clsxm"
import Image from "next/image"
import ButtonLink from "@/components/basic/links/ButtonLink"
import { Description, SubTitle, Title, urlImage } from "@/types"

type HeroBannerProps = {
  className?: string
  title: Title
  subTitle: SubTitle
  description: Description
  heroImage?: urlImage
}

const HeroBanner = ({
  className,
  title,
  subTitle,
  description,
  heroImage
}: HeroBannerProps) => {
  return (
    <div
      className={clsxm(
        "relative text-white flex flex-col-reverse justify-center w-full h-full gap-10 py-14 text-center sm:text-left " +
          className
      )}
    >
      {/* this div is for gradient & full width canvas */}
      <div className="absolute bg-gradient-to-br from-black to-gray-700 h-full top-0 -left-full -right-full -z-10 min-w-[100vw] " />
      {/* left section */}
      <div className="gap-y-8 flex flex-col">
        <h1 className=" leading-[3rem]">{title}</h1>
        <h4>{subTitle}</h4>
        <p>{description} </p>
        <ButtonLink
          direction="right"
          variant="outline"
          className=" sm:self-start hover:text-black self-center"
          href="/"
        >
          Know More
        </ButtonLink>
      </div>
      {/* Right section */}
      <div className="relative flex items-center justify-center">
        <Image
          src={heroImage?.url}
          alt="hero Image"
          width={1000}
          height={1000}
          sizes="100vw"
          className="relative w-3/4 h-full"
        />
        <iframe
          className="sm:top-5 lg:top-8 top-2 left-25 h-[55%] absolute w-[70%]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fbRnlHJVkeo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default HeroBanner
