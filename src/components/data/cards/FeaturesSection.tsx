import Button from "@/components/basic/buttons/Button"
import ButtonLink from "@/components/basic/links/ButtonLink"
import clsxm from "@/lib/clsxm"
import { Feature } from "@/types"
import Image from "next/image"
import React from "react"

type FeatureCardProps = {
  imgUrl?: string
  title?: string
  subTitle?: string
  desc?: string
  className?: string
  videoUrl?: string
}

export const FeatureCard = ({
  imgUrl,
  title,
  subTitle,
  desc,
  className,
  videoUrl
}: FeatureCardProps) => {
  return (
    <div
      className={clsxm(
        "flex flex-col p-5 text-left gap-y-5 border " + className
      )}
    >
      <iframe
        className="w-full"
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {/* <Image
        src="/images/igyanamLogo.png"
        alt="hero Image"
        width="300"
        height="300"
        sizes="100vw"
        className="rounded-xl"
      /> */}
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
type FeaturesSectionProps = {
  className: string
  features: Feature[]
}
const FeaturesSection = ({ className, features }: FeaturesSectionProps) => {
  console.log(features)
  return (
    <div
      className={clsxm(
        "flex flex-col mt-16 pt-12 text-center gap-4 " + className
      )}
    >
      <h1>Most Loved Features</h1>
      <p>List of most loved features by our clients</p>
      <div className="gap-7 md:grid-cols-2 grid grid-cols-1 py-8">
        {features.reverse().map(feature => (
          <FeatureCard
            key={feature.featuresTitle}
            imgUrl={feature.featureImage.url}
            title={feature.featuresTitle}
            desc={feature.featureDescription}
            videoUrl={feature.featureVideo}
          />
        ))}
      </div>
      <ButtonLink href="/" variant="dark" className="self-center mb-2">
        See All Features
      </ButtonLink>
    </div>
  )
}

export default FeaturesSection
