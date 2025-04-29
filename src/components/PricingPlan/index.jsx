import { Button, Text, Img, Heading } from "./..";
import React from "react";

export default function PricingPlan({
  planTitle = "Starter",
  planDescription = "Perfect for individuals and small teams",
  planPrice = "$15",
  billingCycle = "/month",
  billingFrequency = "Billed annually",
  featuredescription1 = "Up to 5 sheets",
  featuredescription2 = "Basic AI analysis",
  featuredescription3 = "Standard visualizations",
  featuredescription4 = "7-day data history",
  featuredescription5 = "Email support",
  buttonText = "Choose Plan",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[32%] md:w-full border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ border border-solid bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-1 shadow-xs cursor-pointer rounded-lg hover:border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-0 hover:border hover:border-solid hover:shadow-bs`}
    >
      <div className="flex flex-col items-start justify-center gap-1 self-stretch px-6 py-[22px] sm:p-5">
        <Heading
          size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_semi_bold"
          as="h5"
          className="text-[22.13px] font-semibold tracking-[-0.60px]"
        >
          {planTitle}
        </Heading>
        <Text
          size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular3"
          as="p"
          className="text-[13.67px] font-normal"
        >
          {planDescription}
        </Text>
      </div>
      <div className="relative mt-[-2px] flex flex-col gap-6 self-stretch px-6 sm:px-5">
        <div className="flex flex-col items-start gap-0.5">
          <div className="flex flex-wrap items-center self-stretch">
            <Heading size="headings" as="h2" className="text-[35.86px] font-bold">
              {planPrice}
            </Heading>
            <Text
              size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular6"
              as="p"
              className="self-end text-[15.13px] font-normal"
            >
              {billingCycle}
            </Text>
          </div>
          <Text
            size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular7"
            as="p"
            className="text-[12px] font-normal"
          >
            {billingFrequency}
          </Text>
        </div>
        <div className="mb-[136px] flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <Img
              src="images/img_checkmark_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0.svg"
              alt="Up To 5 Sheets"
              className="h-[20px]"
            />
            <Text
              size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular1"
              as="p"
              className="self-end text-[15.25px] font-normal !text-supabase_com-alabaster"
            >
              {featuredescription1}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <Img
              src="images/img_checkmark_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0.svg"
              alt="Basic Ai"
              className="h-[20px]"
            />
            <Text
              size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular1"
              as="p"
              className="text-[15.25px] font-normal !text-supabase_com-alabaster"
            >
              {featuredescription2}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <Img
              src="images/img_checkmark_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0.svg"
              alt="Image"
              className="h-[20px]"
            />
            <Text
              size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular1"
              as="p"
              className="text-[15.25px] font-normal !text-supabase_com-alabaster"
            >
              {featuredescription3}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <Img
              src="images/img_checkmark_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0.svg"
              alt="7day Data"
              className="h-[20px]"
            />
            <Text
              size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular6"
              as="p"
              className="text-[15.13px] font-normal !text-supabase_com-alabaster"
            >
              {featuredescription4}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <Img
              src="images/img_checkmark_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0.svg"
              alt="Email Support"
              className="h-[20px]"
            />
            <Text as="p" className="text-[15.38px] font-normal !text-supabase_com-alabaster">
              {featuredescription5}
            </Text>
          </div>
        </div>
      </div>
      <Button
        shape="round"
        className="mx-6 mb-6 self-stretch rounded-md border border-solid border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark px-[33px] font-medium sm:px-5"
      >
        {buttonText}
      </Button>
    </div>
  );
}
