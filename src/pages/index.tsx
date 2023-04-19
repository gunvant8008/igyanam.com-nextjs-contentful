import Head from "next/head"
import HomePage, { HomePageProps } from "@/components/ui/HomePage"
import { getHomePageData } from "@/datalayer"

export default function Index({ homePageData }: HomePageProps) {
  return (
    <>
      <Head>
        <title>iGyanam.com</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <HomePage homePageData={homePageData} />
    </>
  )
}

export const getServerSideProps = async () => {
  const homePageData = await getHomePageData()
  return {
    props: {
      homePageData
    }
  }
}
