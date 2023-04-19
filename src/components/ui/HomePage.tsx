import {
  Client,
  ContactDetail,
  Description,
  Feature,
  SubTitle,
  SuccessStory,
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

export type HomePageDataProps = {
  title: Title
  subTitle: SubTitle
  description: Description
  logo: urlImage
  testimonials: Testimonial[]
  ourClients: Client[]
  heroImage: urlImage
  features: Feature[]
  contactDetails: ContactDetail[]
  successStory: SuccessStory[]
}
export type HomePageProps = {
  homePageData: HomePageDataProps
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
    contactDetails,
    successStory
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
      <SuccessSection className="col-span-12" successStories={successStory} />
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
