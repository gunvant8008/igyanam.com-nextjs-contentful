import UnstyledLink from "@/components/basic/links/UnstyledLink"
import ButtonLink from "../basic/links/ButtonLink"
import UnderlineLink from "../basic/links/UnderlineLink"
import NextImage from "../basic/NextImage"
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri"
import { useState } from "react"
import { useAutoAnimate } from "@formkit/auto-animate/react"

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/success-stories", label: "Success-Stories" },
  { href: "/contact", label: "Contact" }
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuRef] = useAutoAnimate({
    duration: 200,
    easing: "ease-in-out"
  })
  return (
    <header className="sticky top-0 z-50 bg-gray-800">
      <div className="layout h-15 z-50 flex items-center justify-between text-white">
        <UnstyledLink href="/">
          <NextImage
            width={60}
            alt="logo"
            height={60}
            src="/images/gyanam.png"
          />
        </UnstyledLink>
        <nav
          className={
            `md:static md:min-h-fit min-h-[60vh] absolute top-0 duration-500 bg-gray-800 md:w-auto w-full  flex items-center px-7 md:px-0 ` +
            `${menuOpen ? "left-0" : "left-[-100%]"}`
          }
        >
          <ul className="md:flex-row flex flex-col md:items-center md:gap-[4vw] gap-8">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnderlineLink href={href}>{label}</UnderlineLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="gap-x-5 z-50 flex items-center transition-all duration-500">
          <ButtonLink
            className="hover:text-black"
            variant="outline"
            href="/contact"
          >
            Book Demo
          </ButtonLink>
          <button
            ref={menuRef}
            className="md:hidden text-primary-600 text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <RiCloseFill /> : <RiMenu5Fill />}
          </button>
        </div>
      </div>
    </header>
  )
}
