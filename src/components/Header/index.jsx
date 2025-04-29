import { Button, Heading, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-3 bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-woodsmoke_60_`}
    >
      <div className="container-xs flex items-center justify-between gap-5 px-8 lg:px-5 md:px-5 sm:flex-col">
        <Img src="images/img_header_logo.png" alt="Headerlogo" className="h-[28px] w-[86px] object-contain" />
        <ul className="flex flex-wrap gap-6">
          <li>
            <a href="#">
              <Heading
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_medium"
                as="p"
                className="text-[13.89px] font-medium !text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-santas_gray"
              >
                Features
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_medium"
                as="p"
                className="text-[13.89px] font-medium !text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-santas_gray"
              >
                Demo
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_medium"
                as="p"
                className="text-[13.89px] font-medium !text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-santas_gray"
              >
                Pricing
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_medium"
                as="p"
                className="text-[13.89px] font-medium !text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-santas_gray"
              >
                Testimonials
              </Heading>
            </a>
          </li>
        </ul>
        <div className="flex w-[14%] items-center justify-between gap-5 sm:w-full">
          <Heading as="p" className="mb-2.5 ml-4 self-end text-[13.78px] font-medium">
            Log in
          </Heading>
          <Button shape="round" className="min-w-[108px] rounded-md px-4 font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
