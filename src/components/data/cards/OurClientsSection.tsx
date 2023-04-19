import clsxm from "@/lib/clsxm"
import { Client, urlImage } from "@/types"
import Image from "next/image"
import React from "react"

type ClientCardProps = {
  logo?: urlImage
  name?: string
}

export const ClientCard = ({ logo, name }: ClientCardProps) => {
  return (
    <div
      className={clsxm(
        "flex flex-col items-center justify-center p-5 shadow-lg text-left gap-y-2 border "
      )}
    >
      <Image
        src={logo.url}
        alt="logo"
        width={100}
        height={100}
        sizes="100vw"
        className="w-1/2"
      />
      <p className="font-bold">{name}</p>
    </div>
  )
}
type OurClientsSectionProps = {
  className: string
  ourClients: Client[]
}
const OurClientsSection = ({
  className,
  ourClients
}: OurClientsSectionProps) => {
  return (
    <div
      className={clsxm(
        "flex flex-col mt-16 py-12 text-center gap-4 " + className
      )}
    >
      <h1>Trusted By Hundreds Of Institute</h1>
      <p>
        Our product is used throughout the country by so many well established
        institutes.
      </p>
      <div className="gap-7 md:grid-cols-4 grid grid-cols-2 py-8">
        {ourClients.map(client => (
          <ClientCard key={client.name} logo={client.logo} name={client.name} />
        ))}
      </div>
    </div>
  )
}

export default OurClientsSection
