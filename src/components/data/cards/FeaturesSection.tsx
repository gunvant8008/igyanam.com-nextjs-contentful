import Button from "@/components/basic/buttons/Button"
import ButtonLink from "@/components/basic/links/ButtonLink"
import clsxm from "@/lib/clsxm"
import Image from "next/image"
import React from "react"

export const FeatureCard = ({
  imgUrl,
  title,
  subTitle,
  desc,
  className
}: any) => {
  return (
    <div
      className={clsxm(
        "flex flex-col p-5 text-left gap-y-5 border " + className
      )}
    >
      <Image
        src="/images/igyanamLogo.png"
        alt="hero Image"
        width="100"
        height="100"
        sizes="100vw"
        className="rounded-xl w-full"
      />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

const FeaturesSection = ({ className }: any) => {
  return (
    <div
      className={clsxm(
        "flex flex-col border border-gray-200 bg-gray-300 border-dashed mt-16 pt-12 text-center gap-4 " +
          className
      )}
    >
      <h1>Most Loved Features</h1>
      <p>List of most loved features by our clients</p>
      <div className="gap-7 sm:flex-row flex flex-col py-8">
        <FeatureCard
          imgUrl="/"
          title="Figma"
          desc="This is description. This is description. This is description. This is description."
        />
        <FeatureCard
          imgUrl="/"
          title="Figma"
          desc="This is description. This is description. This is description. This is description."
        />
        <FeatureCard
          imgUrl="/"
          title="Figma"
          desc="This is description. This is description. This is description. This is description."
        />
      </div>
      <ButtonLink href="/" variant="dark" className="self-center mb-2">
        See All Features
      </ButtonLink>
    </div>
  )
}

export default FeaturesSection
