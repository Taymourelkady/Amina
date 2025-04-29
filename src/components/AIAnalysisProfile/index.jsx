import { Text, Heading, Img } from "./..";
import React from "react";

export default function AIAnalysisProfile({
  userImage = "images/img_user_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0.svg",
  headingText = "AI-Powered Analysis",
  descriptionText = "&lt;&gt;Let AI analyze your data to uncover trends,&lt;br /&gt;anomalies, and insights that would take hours to&lt;br /&gt;find manually.&lt;/&gt;",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full p-6 sm:p-4 border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ border border-solid bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-1 shadow-xs rounded-lg`}
    >
      <Img src={userImage} alt="Aipowered" className="h-[40px]" />
      <Heading
        size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_3"
        as="h6"
        className="mt-5 text-[18.91px] font-semibold"
      >
        {headingText}
      </Heading>
      <Text
        size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular1"
        as="p"
        className="mt-2 text-[15.25px] font-normal leading-6"
      >
        {descriptionText}
      </Text>
    </div>
  );
}
