import clsxm from "@/lib/clsxm"
import Image from "next/image"
import React from "react"

export const ClientCard = ({ logoUrl, desc, title }: any) => {
  return (
    <div
      className={clsxm("flex flex-col p-5 shadow-lg text-left gap-y-2 border ")}
    >
      <Image
        src="/images/igyanamLogo.png"
        alt="logo"
        width="100"
        height="100"
        sizes="100vw"
        // className="w-full rounded-xl"
      />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

const OurClientsSection = ({ className }: any) => {
  return (
    <div
      className={clsxm(
        "flex flex-col border border-gray-200 bg-gray-300 border-dashed mt-16 py-12 text-center gap-4 " +
          className
      )}
    >
      <h1>Trusted By Hundreds Of Institute</h1>
      <p>
        Our product is used throughout the country by so many well established
        institutes.
      </p>
      <div className="flex flex-wrap justify-center py-8 gap-7">
        <ClientCard imgUrl="/" title="Gyanam IIT" desc="Kota Rajasthan" />
        <ClientCard imgUrl="/" title="Gyanam IIT" desc="Kota Rajasthan" />
        <ClientCard imgUrl="/" title="Gyanam IIT" desc="Kota Rajasthan" />
        <ClientCard imgUrl="/" title="Gyanam IIT" desc="Kota Rajasthan" />
        <ClientCard imgUrl="/" title="Gyanam IIT" desc="Kota Rajasthan" />
        <ClientCard imgUrl="/" title="Gyanam IIT" desc="Kota Rajasthan" />
        <ClientCard imgUrl="/" title="Gyanam IIT" desc="Kota Rajasthan" />
      </div>
    </div>
  )
}

export default OurClientsSection
