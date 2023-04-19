import clsxm from "@/lib/clsxm"
import React from "react"

type StatCardProps = {
  title?: string
  subTitle?: string
  desc?: string
  className?: string
}

export const StatCard = ({
  title,
  subTitle,
  desc,
  className
}: StatCardProps) => {
  return (
    <div className={clsxm("flex flex-col gap-y-2 py-6 px-12 " + className)}>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <p className="mt-2">{desc}</p>
    </div>
  )
}
type StatsSectionProps = React.ComponentPropsWithoutRef<"div">

const StatsSection = ({ className }: StatsSectionProps) => {
  return (
    <div
      className={clsxm(
        "flex flex-col sm:flex-row border border-gray-500 border-dashed mt-16 text-center gap-7 bg-gray-100 " +
          className
      )}
    >
      <StatCard
        title="1000+"
        subTitle="Clients"
        desc="Our test generator is used by 1000+ clients across the globe."
      />
      <StatCard
        title="50+"
        subTitle="Features"
        desc="We are constantly adding new features to our test generator."
      />
      <StatCard
        title="1000+"
        subTitle="Success Stories"
        desc="In the end it's all about the success of our clients & their students."
      />
    </div>
  )
}

export default StatsSection
