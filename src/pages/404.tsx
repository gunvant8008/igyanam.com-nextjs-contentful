import * as React from "react"
import { RiAlarmWarningFill } from "react-icons/ri"

import Layout from "@/components/globals/Layout"
import ArrowLink from "@/components/basic/links/ArrowLink"
import Seo from "@/components/basic/Seo"

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle="Not Found" />

      <main>
        <section className="bg-white">
          <div className="layout flex flex-col items-center justify-center min-h-screen text-center text-black">
            <RiAlarmWarningFill
              size={60}
              className="drop-shadow-glow animate-flicker text-red-500"
            />
            <h1 className="md:text-6xl mt-8 text-4xl">Page Not Found</h1>
            <ArrowLink className="md:text-lg mt-4" href="/">
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </main>
    </>
  )
}
