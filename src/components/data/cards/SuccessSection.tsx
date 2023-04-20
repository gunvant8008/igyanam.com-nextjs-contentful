import ButtonLink from "@/components/basic/links/ButtonLink"
import clsxm from "@/lib/clsxm"
import { SuccessStory, urlImage } from "@/types"
import Image from "next/image"
import React from "react"

export type SuccessCardProps = {
  studentImage?: urlImage
  collegeName?: string
  instituteName?: string
  studentName?: string
  examAndRank?: string
  successStory?: string
  className?: string
}
export const SuccessCard = ({
  collegeName,
  instituteName,
  studentName,
  examAndRank,
  successStory,
  className,
  studentImage
}: SuccessCardProps) => {
  return (
    <div
      className={clsxm(
        "flex items-center p-5 text-left gap-x-6 shadow-lg border " + className
      )}
    >
      <div>
        <Image
          src={studentImage.url ?? ""}
          alt="hero Image"
          width={200}
          height={200}
          sizes="100vw"
          className="rounded-full"
        />
      </div>
      <div className="gap-y-2 flex flex-col">
        <h2>{studentName}</h2>
        <h4 className="text-gray-500">{instituteName}</h4>
        <p>{successStory}</p>
        <div className="flex items-center justify-between text-gray-600">
          <span className="p-1 font-bold bg-gray-300">{collegeName}</span>
          <span className=" p-1 font-bold bg-gray-300">{examAndRank}</span>
        </div>
      </div>
    </div>
  )
}

type SuccessSectionProps = {
  className: string
  successStories: SuccessStory[]
}

const SuccessSection = ({ className, successStories }: SuccessSectionProps) => {
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
      <div className="md:grid-cols-2 grid grid-cols-1 gap-12 py-8">
        {successStories.map((successStory, index) => {
          while (index < 4) {
            return (
              <SuccessCard
                key={successStory.studentName}
                studentImage={successStory.studentImage}
                studentName={successStory.studentName}
                instituteName={successStory.instituteName}
                successStory={`${successStory.successStory?.substring(
                  0,
                  100
                )}...`}
                collegeName={successStory.collegeName}
                examAndRank={successStory.examAndRank}
                className="col-span-1"
              />
            )
          }
        })}
      </div>
      <ButtonLink
        href="/success-stories"
        variant="outline"
        className=" hover:text-black self-center mb-2 bg-gray-800"
      >
        More Success Stories
      </ButtonLink>
    </div>
  )
}

export default SuccessSection
