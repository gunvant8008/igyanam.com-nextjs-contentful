import clsxm from "@/lib/clsxm"
import React from "react"
import Button from "../basic/buttons/Button"

const ContactForm = ({ className }: any) => {
  return (
    <div
      className={clsxm(
        "flex flex-col border border-gray-200 bg-gray-300 border-dashed py-12 text-center gap-y-6 " +
          className
      )}
    >
      <h1>Request Demo</h1>
      <p>
        Request a free demo & see all the powerful features of our test
        generator
      </p>
      <form className="flex gap-x-2 mt-2 justify-center">
        <input placeholder="Email address" type="text" />
        <input placeholder="Phone no" type="text" />
        <Button variant="primary">Request Demo</Button>
      </form>
    </div>
  )
}

export default ContactForm
