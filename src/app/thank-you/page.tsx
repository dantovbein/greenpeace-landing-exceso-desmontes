'use client'

import { FC, useEffect } from "react";
import ThankYou from '@/app/_components/ThankYou'
import HomeText from "../_components/HomeText";

declare const window: Window & { dataLayer: Record<string, unknown>[]; };

const Page:FC<{}> = () => {

  useEffect(() => {
    if(window.dataLayer) {
      window.dataLayer.push({
        event: "formSubmission",
      });
    }
  }, [])

  return (
    <>
      <ThankYou />
      <HomeText />
    </>
  )
}

export default Page;
