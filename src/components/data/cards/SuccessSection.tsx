import Button from "@/components/basic/buttons/Button"
import ButtonLink from "@/components/basic/links/ButtonLink"
import clsxm from "@/lib/clsxm"
import Image from "next/image"
import React from "react"

type SuccessCardProps = {
  imgUrl?: string
  college?: string
  institute?: string
  title?: string
  rank?: string
  desc?: string
  className?: string
}
export const SuccessCard = ({
  college,
  institute,
  title,
  rank,
  desc,
  className
}: SuccessCardProps) => {
  return (
    <div
      className={clsxm(
        "flex items-center p-5 text-left gap-x-6 shadow-lg border " + className
      )}
    >
      <div>
        <Image
          src="/images/igyanamLogo.png"
          alt="hero Image"
          width={100}
          height={100}
          sizes="100vw"
        />
      </div>
      <div className="gap-y-2 flex flex-col">
        <h2>{title}</h2>
        <h4>{institute}</h4>
        <p>{desc}</p>
        <div className="flex items-center justify-between text-gray-600">
          <span>{college}</span>
          <span>{rank}</span>
        </div>
      </div>
    </div>
  )
}

type SuccessSectionProps = React.ComponentPropsWithoutRef<"div">

const SuccessSection = ({ className }: SuccessSectionProps) => {
  return (
    <div
      className={clsxm(
        "relative flex flex-col border border-gray-200 bg-gray-300 border-dashed mt-16 sm:mx-12 mx-2 pt-12 text-center gap-4 z-10 " +
          className
      )}
    >
      <div className="absolute bg-gray-100 h-full top-0 -left-full -right-full -z-10 min-w-[100vw] " />
      <h1>Student & Institutes Success Stories</h1>
      <p>We feel so proud that our product is changing lives.</p>
      <div className="sm:grid-cols-2 grid grid-cols-1 gap-12 py-8">
        <SuccessCard
          imgUrl="/"
          title="Student Name"
          institute="Gyanam IIT"
          desc="This is description. This is description. This is description. This is description."
          college="college"
          rank="rank"
          className="col-span-1"
        />
        <SuccessCard
          imgUrl="/"
          title="Student Name"
          institute="Gyanam IIT"
          desc="This is description. This is description. This is description. This is description."
          college="college"
          rank="rank"
          className="col-span-1"
        />
        <SuccessCard
          imgUrl="/"
          title="Student Name"
          institute="Gyanam IIT"
          desc="This is description. This is description. This is description. This is description."
          college="college"
          rank="rank"
          className="col-span-1"
        />
        <SuccessCard
          imgUrl="/"
          title="Student Name"
          institute="Gyanam IIT"
          desc="This is description. This is description. This is description. This is description."
          college="college"
          rank="rank"
          className="col-span-1"
        />
      </div>
      <ButtonLink href="/" variant="dark" className="self-center mb-2">
        More Success Stories
      </ButtonLink>
    </div>
  )
}

export default SuccessSection
