import NextImage from "@/components/basic/NextImage"
import React from "react"
import clsxm from "@/lib/clsxm"
import Image from "next/image"
import ButtonLink from "@/components/basic/links/ButtonLink"

const HeroBanner = ({
  className,
  title,
  subTitle,
  description,
  heroImage
}: any) => {
  return (
    <div
      className={clsxm(
        "relative text-white grid w-full sm:grid-cols-2 grid-cols-1 items-center justify-items-between gap-10 py-14 text-center sm:text-left " +
          className
      )}
    >
      <div className="absolute bg-gradient-to-br from-black to-gray-700 h-full top-0 -left-full -right-full -z-10 min-w-[100vw] " />
      {/* left section */}
      <div className="gap-y-6 flex flex-col col-span-1">
        <h1>{title}</h1>
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
          src={heroImage.url}
          alt="hero Image"
          width={heroImage.width}
          height={heroImage.height}
          sizes="100vw"
          className="rounded-xl w-full h-auto"
        />
      </div>
    </div>
  )
}

export default HeroBanner
