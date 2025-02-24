import { initFlowbite } from "flowbite"
import Hero from "../Hero/Index"
import HomeCard from "../HomeCard/Index"
import React from "react"

function Index() {

    React.useEffect(() => {
        initFlowbite();
    }, [])

  return (
   <>
    <Hero></Hero>
    <HomeCard></HomeCard>
   </>
  )
}

export default Index