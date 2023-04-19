import clsxm from "@/lib/clsxm"
import { Testimonial, urlImage } from "@/types"
import Image from "next/image"
import React from "react"

type TestimonialCardProps = {
  imgUrl?: urlImage
  title?: string
  subTitle?: string
  desc?: string
}

export const TestimonialCard = ({
  imgUrl,
  subTitle,
  desc,
  title
}: TestimonialCardProps) => {
  return (
    <div
      className={clsxm("flex flex-col p-5 shadow-lg text-left gap-y-2 border ")}
    >
      <p>{desc}</p>
      <div className="gap-x-4 flex">
        <Image
          src={imgUrl.url}
          alt="logo"
          width="50"
          height="50"
          sizes="100vw"
          className="rounded-xl"
        />
        <div>
          <h4>{title}</h4>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  )
}
type TestimonialsSectionProps = {
  className: string
  testimonials: Testimonial[]
}
const TestimonialsSection = ({
  className,
  testimonials
}: TestimonialsSectionProps) => {
  return (
    <div
      className={clsxm(
        "flex flex-col mt-16 py-12 text-center gap-4 " + className
      )}
    >
      <h1>What Our Clients Say About Our Product</h1>
      <p>Our clients are in love with Gyanam Test Generator.</p>
      <div className="md:grid-cols-2 gap-7 grid grid-cols-1 py-8">
        {testimonials.map(testimonial => (
          <TestimonialCard
            key={testimonial.instituteName}
            imgUrl={testimonial.instituteImage}
            title={testimonial.instituteName}
            subTitle={testimonial.instituteDirector}
            desc={testimonial.instituteText}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection
