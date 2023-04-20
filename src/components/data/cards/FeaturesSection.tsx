import ButtonLink from "@/components/basic/links/ButtonLink"
import clsxm from "@/lib/clsxm"
import { Feature, urlImage } from "@/types"
import React from "react"

export type TFeature = {
  imgUrl?: string
  featureTitle?: string
  subTitle?: string
  featureDescription?: string
  className?: string
  featureVideo?: string
  featureImage?: urlImage
}

export const FeatureCard = ({
  featureTitle,
  featureDescription,
  className,
  featureVideo
}: TFeature) => {
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
        src={featureVideo}
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
      <h3 className="h4 text-primary-400 p-1 bg-gray-600">{featureTitle}</h3>
      <p>{featureDescription}</p>
    </div>
  )
}
type FeaturesSectionProps = {
  className: string
  features: Feature[]
}
const FeaturesSection = ({ className, features }: FeaturesSectionProps) => {
  return (
    <div
      id="features"
      className={clsxm(
        "flex flex-col mt-16 pt-12 text-center gap-4 " + className
      )}
    >
      <h1>Most Loved Features</h1>
      <p>List of most loved features by our clients</p>
      <div className="gap-7 md:grid-cols-2 grid grid-cols-1 py-8">
        {features.reverse().map((feature, index) => {
          while (index < 4) {
            return (
              <FeatureCard
                key={feature.featuresTitle}
                imgUrl={feature.featureImage.url}
                featureTitle={feature.featuresTitle}
                featureDescription={feature.featureDescription}
                featureVideo={feature.featureVideo}
              />
            )
          }
        })}
      </div>
      <ButtonLink
        href="/features"
        variant="outline"
        className=" hover:text-black self-center mb-2 bg-gray-800"
      >
        See All Features
      </ButtonLink>
    </div>
  )
}

export default FeaturesSection
