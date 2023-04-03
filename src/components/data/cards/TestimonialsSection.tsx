import clsxm from "@/lib/clsxm"
import Image from "next/image"
import React from "react"

export const TestimonialCard = ({ logoUrl, subTitle, desc, title }: any) => {
  return (
    <div
      className={clsxm("flex flex-col p-5 shadow-lg text-left gap-y-2 border ")}
    >
      <p>{desc}</p>
      <div className="gap-x-4 flex">
        <Image
          src="/images/igyanamLogo.png"
          alt="logo"
          width="50"
          height="50"
          sizes="100vw"
          className="rounded-full"
        />
        <div>
          <h4>{title}</h4>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  )
}

const TestimonialsSection = ({ className }: any) => {
  return (
    <div
      className={clsxm(
        "flex flex-col border border-gray-200 bg-gray-300 border-dashed mt-16 py-12 text-center gap-4 " +
          className
      )}
    >
      <h1>What Our Clients Say About Our Product</h1>
      <p>Our clients are in love with Gyanam Test Generator.</p>
      <div className="sm:grid-cols-3 gap-7 grid grid-cols-1 py-8">
        <TestimonialCard
          imgUrl="/"
          title="Gyanam IIT"
          subTitle="Director- Gyanam IIT"
          desc="This is description. This is description. This is description. This is description."
        />
        <TestimonialCard
          imgUrl="/"
          title="Gyanam IIT"
          subTitle="Director- Gyanam IIT"
          desc="This is description. This is description. This is description. This is description."
        />
        <TestimonialCard
          imgUrl="/"
          title="Gyanam IIT"
          subTitle="Director- Gyanam IIT"
          desc="This is description. This is description. This is description. This is description."
        />
        <TestimonialCard
          imgUrl="/"
          title="Gyanam IIT"
          subTitle="Director- Gyanam IIT"
          desc="This is description. This is description. This is description. This is description."
        />
        <TestimonialCard
          imgUrl="/"
          title="Gyanam IIT"
          subTitle="Director- Gyanam IIT"
          desc="This is description. This is description. This is description. This is description."
        />
        <TestimonialCard
          imgUrl="/"
          title="Gyanam IIT"
          subTitle="Director- Gyanam IIT"
          desc="This is description. This is description. This is description. This is description."
        />
      </div>
    </div>
  )
}

export default TestimonialsSection
