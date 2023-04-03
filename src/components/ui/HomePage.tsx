import FeaturesSection from "../data/cards/FeaturesSection"
import HeroBanner from "../data/cards/HeroBanner"
import OurClientsSection from "../data/cards/OurClientsSection"
import StatsSection from "../data/cards/StatsSection"
import SuccessSection from "../data/cards/SuccessSection"
import TestimonialsSection from "../data/cards/TestimonialsSection"
import ContactForm from "../forms/ContactForm"

const HomePage = ({ homePageData }: any) => {
  const {
    title,
    subTitle,
    description,
    logo,
    testimonials,
    ourClients,
    heroImage,
    features,
    contactDetails
  } = homePageData
  return (
    <div className="min-h-main grid grid-cols-12 items-start ">
      <HeroBanner
        className="col-span-12 "
        title={title}
        subTitle={subTitle}
        description={description}
        heroImage={heroImage}
      />
      <StatsSection className="col-span-12" />
      <FeaturesSection className="col-span-12" features={features} />
      <SuccessSection className="col-span-12" />
      <OurClientsSection className="col-span-12" ourClients={ourClients} />
      <TestimonialsSection
        className="col-span-12"
        testimonials={testimonials}
      />
      <ContactForm className="col-span-12" contactDetails={contactDetails} />
    </div>
  )
}

export default HomePage
