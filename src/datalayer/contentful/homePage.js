import client from "./client.js"

export const getHomePageData = async () => {
  const res = await client.getEntries({
    content_type: "homePage",
    include: 5
  })
  const rawResponse = res.items
  const response = homePageReducer(rawResponse)
  return response
}

export const homePageReducer = rawResponse => {
  const {
    0: { fields }
  } = { ...rawResponse }
  const data = { ...fields }
  data.heroImage = imageReducer(fields.heroImage[0])
  data.introImage = imageReducer(fields.introImage)
  data.logo = imageReducer(fields.logo)
  data.features = fields.features.map(feature => featureReducer(feature))
  data.testimonials = fields.testimonials.map(testimonial =>
    testimonialReducer(testimonial)
  )
  data.ourClients = fields.ourClients.map(client => clientReducer(client))
  data.contactDetails = fields.contactDetails.map(contact =>
    contactReducer(contact)
  )
  return data
}
export const imageReducer = imageField => {
  return {
    url: `https:${imageField?.fields.file.url}` || null,
    width: imageField?.fields.file.details.image.width || null,
    height: imageField?.fields.file.details.image.height || null
  }
}
export const featureReducer = featuresField => {
  return {
    featuresTitle: featuresField.fields.featureTitle,
    featureDescription: featuresField.fields.featureDescription,
    featureImage: imageReducer(featuresField.fields.featureImage)
  }
}
export const testimonialReducer = testimonialField => {
  return {
    instituteName: testimonialField.fields.instituteName,
    instituteDirector: testimonialField.fields.instituteDirector,
    instituteText:
      testimonialField.fields.instituteText.content[0].content[0].value,
    instituteImage: imageReducer(testimonialField.fields.instituteImage)
  }
}
export const clientReducer = clientField => {
  return {
    name: clientField.fields.name,
    logo: imageReducer(clientField.fields.logo)
  }
}
export const contactReducer = contactField => {
  return {
    contactTitle: contactField.fields.contactTitle,
    contactDetails: contactField.fields.contactDetails
  }
}
