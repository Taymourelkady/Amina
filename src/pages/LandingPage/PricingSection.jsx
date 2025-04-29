import { Heading, Switch, Text } from "../../components";
import PricingPlan from "../../components/PricingPlan";
import React, { Suspense } from "react";

const planOptionsList = [
  {
    planTitle: "Starter",
    planDescription: "Perfect for individuals and small teams",
    planPrice: "$15",
    billingCycle: "/month",
    billingFrequency: "Billed annually",
    featureDescription1: "Up to 5 sheets",
    featureDescription2: "Basic AI analysis",
    featureDescription3: "Standard visualizations",
    featureDescription4: "7-day data history",
    featureDescription5: "Email support",
    buttonText: "Choose Plan",
  },
  {
    planTitle: "Professional",
    planDescription: "For growing businesses and data teams",
    planPrice: "$39",
    billingCycle: "/month",
    billingFrequency: "Billed annually",
    featureDescription1: "Up to 5 sheets",
    featureDescription2: "Basic AI analysis",
    featureDescription3: "Standard visualizations",
    featureDescription4: "7-day data history",
    featureDescription5: "Email support",
    buttonText: "Get Started",
  },
  {
    planTitle: "Enterprise",
    planDescription: (
      <>
        For large organizations with complex
        <br />
        needs
      </>
    ),
    planPrice: "$79",
    billingCycle: "/month",
    billingFrequency: "Billed annually",
    featureDescription1: "Up to 5 sheets",
    featureDescription2: "Basic AI analysis",
    featureDescription3: "Standard visualizations",
    featureDescription4: "7-day data history",
    featureDescription5: "Email support",
    buttonText: "Choose Plan",
  },
];

export default function PricingSection() {
  return (
    <>
      {/* pricing section */}
      <div className="mt-20 flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-12 px-14 lg:px-5 md:px-5">
          <div className="mx-32 flex w-[74%] flex-col gap-4 lg:w-full md:mx-0 md:w-full">
            <div className="mx-10 flex flex-col items-center gap-[18px] md:mx-0">
              <Heading
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_2"
                as="h2"
                className="text-[33.75px] font-bold lg:text-[28px] md:text-[27px] sm:text-[25px]"
              >
                Simple, Transparent Pricing
              </Heading>
              <Text
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular"
                as="p"
                className="text-[18.28px] font-normal lg:text-[15px]"
              >
                Choose the plan that&#39;s right for your business, with no hidden fees or surprises.
              </Text>
            </div>
            <div className="flex items-end justify-center gap-4 px-14 md:px-5 sm:px-4">
              <Text
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular2"
                as="p"
                className="text-[13.56px] font-normal"
              >
                Monthly
              </Text>
              <Switch value={true} className="mt-4" />
              <Heading size="textxs" as="h3" className="text-[14px] font-medium">
                <span className="text-supabase_com-alabaster">Annual&nbsp;</span>
                <span className="text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-0">
                  (Save 20%)
                </span>
              </Heading>
            </div>
          </div>
          <div className="flex w-[80%] gap-6 md:w-full md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {planOptionsList.map((d, index) => (
                <PricingPlan
                  {...d}
                  key={"container" + index}
                  className="hover:border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-0 hover:border hover:border-solid hover:shadow-bs"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
