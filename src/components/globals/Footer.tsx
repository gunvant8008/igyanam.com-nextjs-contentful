import Image from "next/image"
import React from "react"
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="z-50 layout bg-gray-200">
      <div className="grid grid-cols-4 py-12 justify-items-center ">
        <div>
          <div className="flex">
            <Image
              src={"/images/gyanam.png"}
              width={40}
              height={40}
              alt="logo"
            />
            <h4>iGyanam.com</h4>
          </div>
          <div className="flex items-center justify-between">
            <AiFillMail size={30} className="text-primary-800" />
            <AiFillLinkedin size={30} className="text-primary-800" />
            <AiFillInstagram size={32} className="text-primary-800" />
          </div>
        </div>
        <div>
          <h4 className="text-bold mb-2">Resource</h4>
          <div className="flex flex-col gap-y-1">
            <a href="/">About Us</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>
            <a href="/">FAQ</a>
          </div>
        </div>
        <div>
          <h4 className="text-bold mb-2">Legal Stuff</h4>
          <div className="flex flex-col gap-y-1">
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Blog</a>
            <a href="/">FAQ</a>
          </div>
        </div>
        <div>
          <h4 className="text-bold mb-2">Office</h4>
          <div className="flex flex-col gap-y-1">
            <p>info@igyanam.com</p>
            <p>+91-9999999999</p>
            <p>Kota, Rajasthan.</p>
          </div>
        </div>
      </div>
      <p className="text-center pb-2">All Right Reserved @iGyanam.com</p>
    </footer>
  )
}

export default Footer
