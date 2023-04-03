import { createClient } from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT
})

export default client
