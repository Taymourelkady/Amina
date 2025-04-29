import { Text, Heading } from "../../components";
import AIAnalysisProfile from "../../components/AIAnalysisProfile";
import React, { Suspense } from "react";

const aiPoweredFeaturesGrid = [
  {
    userImage: "images/img_user_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0.svg",
    headingText: "AI-Powered Analysis",
    descriptionText: (
      <>
        Let AI analyze your data to uncover trends,
        <br />
        anomalies, and insights that would take hours to
        <br />
        find manually.
      </>
    ),
  },
  {
    userImage: "images/img_user_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0_40x40.svg",
    headingText: "Natural Language Queries",
    descriptionText: (
      <>
        Ask questions about your data in plain English and
        <br />
        get instant answers, charts, and visualizations.
      </>
    ),
  },
  {
    userImage: "images/img_thumbs_up_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0.svg",
    headingText: "Smart Formulas",
    descriptionText: (
      <>
        Use AI-enhanced formulas that go beyond
        <br />
        traditional spreadsheet capabilities for advanced
        <br />
        calculations.
      </>
    ),
  },
  {
    userImage: "images/img_component_1_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0.svg",
    headingText: "Automated Visualizations",
    descriptionText: (
      <>
        Generate the perfect charts and graphs for your
        <br />
        data with a single click, no design skills required.
      </>
    ),
  },
  {
    userImage:
      "images/img_airplane_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0_40x40.svg",
    headingText: "Predictive Analytics",
    descriptionText: (
      <>
        Forecast future trends and outcomes based on
        <br />
        historical data with AI-powered predictive models.
      </>
    ),
  },
  {
    userImage:
      "images/img_thumbs_up_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0_40x40.svg",
    headingText: "Familiar Spreadsheet Interface",
    descriptionText: (
      <>
        Work with your data in a familiar spreadsheet
        <br />
        environment that&#39;s easy to use but powerful enough
        <br />
        for complex analysis.
      </>
    ),
  },
];

export default function FeaturesOverviewSection() {
  return (
    <>
      {/* features overview section */}
      <div>
        <div className="flex justify-center bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_30_ py-20 lg:py-8 md:py-5 sm:py-4">
          <div className="container-xs flex justify-center lg:px-5 md:px-5">
            <div className="flex w-full flex-col gap-16 px-[30px] sm:gap-8 sm:px-4">
              <div className="mx-[284px] flex flex-col items-center justify-center gap-3.5 md:mx-0">
                <Heading
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_2"
                  as="h2"
                  className="text-[33.75px] font-bold lg:text-[28px] md:text-[27px] sm:text-[25px]"
                >
                  Powerful Features, Simple Interface
                </Heading>
                <Text
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular"
                  as="p"
                  className="text-center text-[18.28px] font-normal leading-7 lg:text-[15px]"
                >
                  <>
                    TreeBI combines the best of spreadsheets and AI to create a powerful yet intuitive
                    <br />
                    analytics platform.
                  </>
                </Text>
              </div>
              <div className="grid grid-cols-3 justify-center gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {aiPoweredFeaturesGrid.map((d, index) => (
                    <AIAnalysisProfile {...d} key={"gridaipowered" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
