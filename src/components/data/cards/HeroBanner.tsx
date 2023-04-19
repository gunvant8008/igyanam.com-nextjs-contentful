import NextImage from "@/components/basic/NextImage"
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
        "relative text-white grid w-full sm:grid-cols-2 grid-cols-1 items-center justify-items-between gap-10 py-14 text-center sm:text-left " +
          className
      )}
    >
      <div className="absolute bg-gradient-to-br from-black to-gray-700 h-full top-0 -left-full -right-full -z-10 min-w-[100vw] " />
      {/* left section */}
      <div className="gap-y-8 flex flex-col col-span-1">
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
      <div>
        <Image
          src={heroImage?.url}
          alt="hero Image"
          width={1000}
          height={1000}
          sizes="100vw"
          className="min-h-full"
        />
      </div>
    </div>
  )
}

export default HeroBanner
