import {
  Client,
  ContactDetail,
  Description,
  Feature,
  SubTitle,
  Testimonial,
  Title,
  urlImage
} from "@/types"
import FeaturesSection from "../data/cards/FeaturesSection"
import HeroBanner from "../data/cards/HeroBanner"
import OurClientsSection from "../data/cards/OurClientsSection"
import StatsSection from "../data/cards/StatsSection"
import SuccessSection from "../data/cards/SuccessSection"
import TestimonialsSection from "../data/cards/TestimonialsSection"
import ContactForm from "../forms/ContactForm"

type HomePageData = {
  title: Title
  subTitle: SubTitle
  description: Description
  logo: urlImage
  testimonials: Testimonial[]
  ourClients: Client[]
  heroImage: urlImage
  features: Feature[]
  contactDetails: ContactDetail[]
}
type HomePageProps = {
  homePageData: HomePageData
}

const HomePage = ({ homePageData }: HomePageProps) => {
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
    <div className="min-h-main grid items-start grid-cols-12">
      <HeroBanner
        className="col-span-12"
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
