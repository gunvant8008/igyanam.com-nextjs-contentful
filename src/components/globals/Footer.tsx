import Image from "next/image"
import Link from "next/link"
import React from "react"
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai"

const Footer = () => {
  return (
    <footer id="contact" className="layout z-50 bg-gray-200">
      <div className="justify-items-center grid grid-cols-4 py-12">
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
          <div className="gap-y-1 flex flex-col">
            <Link href="/">About Us</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Blog</Link>
            <Link href="/">FAQ</Link>
          </div>
        </div>
        <div>
          <h4 className="text-bold mb-2">Legal Stuff</h4>
          <div className="gap-y-1 flex flex-col">
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Blog</Link>
            <Link href="/">FAQ</Link>
          </div>
        </div>
        <div>
          <h4 className="text-bold mb-2">Office</h4>
          <div className="gap-y-1 flex flex-col">
            <p>info@igyanam.com</p>
            <p>+91-9999999999</p>
            <p>Kota, Rajasthan.</p>
          </div>
        </div>
      </div>
      <p className="pb-2 text-center">All Right Reserved @iGyanam.com</p>
    </footer>
  )
}

export default Footer
