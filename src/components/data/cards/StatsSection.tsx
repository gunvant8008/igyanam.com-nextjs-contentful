import clsxm from "@/lib/clsxm"
import React from "react"

export const StatCard = ({ title, subTitle, desc, className }: any) => {
  return (
    <div className={clsxm("flex flex-col gap-y-2 py-6 px-12 " + className)}>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <p className="mt-2">{desc}</p>
    </div>
  )
}

const StatsSection = ({ className }: any) => {
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
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <StatCard
        title="50+"
        subTitle="Features"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
      />
      <StatCard
        title="1000+"
        subTitle="Success Stories"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
      />
    </div>
  )
}

export default StatsSection
