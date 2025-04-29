import { Text, Heading, Button, Img } from "./..";
import React from "react";

export default function UserInterfaceComponent({
  headingText = "Familiar Interface",
  descriptionText = "&lt;&gt;All the spreadsheet features you know, enhanced&lt;br /&gt;with AI capabilities.&lt;/&gt;",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-start self-stretch mr-[26px] gap-3 md:mr-0 flex-1`}
    >
      <Button size="xs" shape="circle" className="w-[36px] rounded-[18px] px-2">
        <Img src="images/img_thumbs_up_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0_40x40.svg" />
      </Button>
      <div className="flex flex-1 flex-col items-center self-center sm:self-stretch">
        <div className="flex self-stretch">
          <Heading
            size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_8"
            as="p"
            className="text-[15.38px] font-medium"
          >
            {headingText}
          </Heading>
        </div>
        <Text
          size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular2"
          as="p"
          className="text-[13.56px] font-normal leading-5"
        >
          {descriptionText}
        </Text>
      </div>
    </div>
  );
}
