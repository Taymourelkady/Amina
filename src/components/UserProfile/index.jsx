import { Text, Heading, Img } from "./..";
import React from "react";

export default function UserProfile({
  userDescription = "&lt;&gt;Treeo has transformed how we analyze our sales data. The AI assistant&lt;br /&gt;helped us identify trends we would have missed otherwise, leading to a&lt;br /&gt;23% increase in revenue.&lt;/&gt;",
  userName = "Sarah Johnson",
  userPosition = "VP of Sales, TechCorp",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full gap-4 p-6 sm:p-4 border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ border border-solid bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-1 shadow-xs cursor-pointer rounded-lg hover:border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ hover:border hover:border-solid hover:shadow-xs`}
    >
      <Img
        src="images/img_thumbs_up_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0_32x32.svg"
        alt="Image"
        className="h-[32px]"
      />
      <Text
        size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular4"
        as="p"
        className="text-[16.73px] font-normal leading-7 !text-supabase_com-alabaster sm:text-[13px]"
      >
        {userDescription}
      </Text>
      <div className="flex items-end gap-3 self-stretch">
        <div className="flex h-[40px] flex-col rounded-[20px] bg-[url(/public/images/img_container.png)] bg-cover bg-no-repeat sm:h-auto">
          <Img src="images/img_component_1_40x40.png" alt="Image" className="h-[40px] rounded-[20px] object-cover" />
        </div>
        <div className="mt-2 flex flex-1 flex-col items-start justify-center gap-1 sm:gap-1">
          <Heading
            size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_9"
            as="p"
            className="text-[15.5px] font-medium"
          >
            {userName}
          </Heading>
          <Text
            size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular3"
            as="p"
            className="text-[13.67px] font-normal"
          >
            {userPosition}
          </Text>
        </div>
      </div>
    </div>
  );
}
