import Link from "next/link"

export default function PageNotFound() {
  return (
    <>
      <div className="sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 min-h-full px-4 py-16 bg-white">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="sm:text-5xl text-4xl font-extrabold text-yellow-600">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="sm:text-5xl text-4xl font-extrabold tracking-tight text-gray-900">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="sm:border-l sm:border-transparent sm:pl-6 flex mt-10 space-x-3">
                <Link
                  href="/"
                  className="hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-sm shadow-sm"
                >
                  Go back home
                </Link>

                <Link
                  href="/"
                  className="hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 inline-flex items-center px-4 py-2 text-sm font-medium text-yellow-700 bg-yellow-100 border border-transparent rounded-sm"
                >
                  Contact support
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
