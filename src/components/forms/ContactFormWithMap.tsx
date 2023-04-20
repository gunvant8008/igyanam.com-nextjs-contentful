import React from "react"

const ContactFormWithMap = () => {
  return (
    <section className="body-font relative text-gray-600">
      <div className="sm:flex-nowrap container flex flex-wrap px-5 py-24 mx-auto">
        <div className="lg:w-2/3 md:w-1/2 sm:mr-10 relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1007.754934122587!2d75.83559670276533!3d25.14254087055525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8513445b9671%3A0xbf3aeae67cdc033c!2sGyanam%20Test%20Generator!5e0!3m2!1sen!2suk!4v1682015929643!5m2!1sen!2suk"
            width="100%"
            height="100%"
            loading="lazy"
            className="absolute inset-0 border border-gray-300"
            title="map"
            style={{ filter: "grayscale(0) contrast(1.2) opacity(0.5)" }}
          ></iframe>
          <div className="relative flex flex-wrap py-6 bg-white rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                ADDRESS
              </h2>
              <p className="mt-1">
                481, Keshavpura Sector-4, Kota, Rajasthan. 324009
              </p>
            </div>
            <div className="lg:w-1/2 lg:mt-0 px-6 mt-4">
              <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                EMAIL
              </h2>
              <a className="leading-relaxed text-indigo-500">
                info@igyanam.com
              </a>
              <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
                PHONE
              </h2>
              <p className="leading-relaxed">+91-9999999999</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0 flex flex-col w-full mt-8 bg-white">
          <h2 className="title-font mb-1 text-lg font-bold text-gray-900">
            BOOK A FREE DEMO
          </h2>
          <p className="mb-5 leading-relaxed text-gray-600">
            Our team will get back to you as soon as possible.
          </p>
          <form
            action="https://getform.io/f/562e0962-d97b-40c7-a895-097f42c9c6a4"
            method="POST"
          >
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="text-sm leading-7 text-gray-600"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none"
              ></textarea>
            </div>
            <button
              className="focus:outline-none hover:bg-indigo-600 px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">© 2023 iGyanam.com</p>
        </div>
      </div>
    </section>
  )
}

export default ContactFormWithMap
