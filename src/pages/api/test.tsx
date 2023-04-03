// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getHomePageData } from "@/datalayer/contentful/homePage"

export default async function handler(req, res) {
  const response = await getHomePageData()
  res.status(200).json(response)
}
