import * as React from "react"

import clsxm from "@/lib/clsxm"

import UnstyledLink from "@/components/basic/links/UnstyledLink"

const PrimaryLinkVariant = ["primary", "basic"]

const PrimaryLink = React.forwardRef(
  ({ className, children, variant = "primary", ...rest }: any, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          "inline-flex items-center",
          "focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          "font-medium",
          //#region  //*=========== Variant ===========
          variant === "primary" && [
            "text-primary-500 hover:text-primary-600 active:text-primary-700",
            "disabled:text-primary-200"
          ],
          variant === "basic" && [
            "text-black hover:text-gray-600 active:text-gray-800",
            "disabled:text-gray-300"
          ],
          //#endregion  //*======== Variant ===========
          className
        )}
      >
        {children}
      </UnstyledLink>
    )
  }
)

export default PrimaryLink
