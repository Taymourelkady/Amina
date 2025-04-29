import { Text, Heading, Img } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center py-12 md:py-5 sm:py-4 border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ border-t border-solid bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_50_`}
    >
      <div className="container-xs flex justify-center px-8 lg:px-5 md:px-5">
        <div className="flex w-full flex-col items-start gap-12">
          <div className="flex w-[86%] items-start lg:w-full md:w-full md:flex-col">
            <div className="flex w-[46%] flex-col gap-4 md:w-full">
              <div className="flex gap-2">
                <Img src="images/img_send.svg" alt="Send" className="h-[24px]" />
                <Heading size="headingxs" as="h6" className="text-[19.38px] font-bold lg:text-[16px]">
                  Treeo
                </Heading>
              </div>
              <div className="relative h-[112px] content-center lg:h-auto md:h-auto">
                <div className="flex flex-1">
                  <div className="flex w-[78%] flex-col items-start lg:w-full md:w-full">
                    <div className="flex flex-col items-start gap-[18px] self-stretch">
                      <Text
                        size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular1"
                        as="p"
                        className="text-[15.25px] font-normal leading-6"
                      >
                        <>
                          Treeo combines the simplicity of spreadsheets with the
                          <br />
                          power of AI to help you analyze data, uncover insights, and
                          <br />
                          make better business decisions.
                        </>
                      </Text>
                      <Text
                        size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular6"
                        as="p"
                        className="ml-[66px] text-[15.13px] font-normal md:ml-0"
                      >
                        LinkedIn
                      </Text>
                    </div>
                    <a href="Twitter" target="_blank" rel="noreferrer" className="relative mt-[-18px]">
                      <Text
                        size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular6"
                        as="p"
                        className="text-[15.13px] font-normal"
                      >
                        Twitter
                      </Text>
                    </a>
                  </div>
                </div>
                <Text
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular6"
                  as="p"
                  className="absolute bottom-[3.08px] left-[26%] m-auto text-[15.13px] font-normal"
                >
                  GitHub
                </Text>
              </div>
            </div>
            <div className="flex w-[52%] items-center justify-between gap-5 self-center md:w-full md:flex-col">
              <div className="flex w-[44%] flex-col items-start gap-4 md:w-full">
                <Heading
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_10"
                  as="p"
                  className="text-[15.63px] font-medium"
                >
                  Product
                </Heading>
                <ul className="flex flex-col items-start justify-center gap-4">
                  <li>
                    <a href="Features" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15.38px] font-normal">
                        Features
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Pricing" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15.38px] font-normal">
                        Pricing
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Demo" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15.38px] font-normal">
                        Demo
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Roadmap" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15.38px] font-normal">
                        Roadmap
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex w-[44%] flex-col items-start gap-4 md:w-full">
                <Heading
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_9"
                  as="p"
                  className="text-[15.5px] font-medium"
                >
                  Resources
                </Heading>
                <ul className="flex flex-col items-start justify-center gap-4">
                  <li>
                    <a href="Documentation" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15.38px] font-normal">
                        Documentation
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Tutorials" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15.38px] font-normal">
                        Tutorials
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Blog" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15.38px] font-normal">
                        Blog
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Support" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15.38px] font-normal">
                        Support
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-4">
                <Heading
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_9"
                  as="p"
                  className="text-[15.5px] font-medium"
                >
                  Company
                </Heading>
                <ul className="flex flex-col items-center justify-center gap-4">
                  <li>
                    <a href="About" target="_blank" rel="noreferrer" className="self-start">
                      <Text as="p" className="text-[15.38px] font-normal">
                        About
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Careers" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15.38px] font-normal">
                        Careers
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Contact" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15.38px] font-normal">
                        Contact
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Privacy" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15.38px] font-normal">
                        Privacy
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between gap-5 self-stretch border-t border-solid border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ sm:flex-col">
            <Text
              size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular3"
              as="p"
              className="text-[13.67px] font-normal"
            >
              © 2025 TreeBI. All rights reserved.
            </Text>
            <div className="mt-6 flex flex-wrap gap-6">
              <Text
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular2"
                as="p"
                className="text-[13.56px] font-normal"
              >
                Terms of Service
              </Text>
              <Text
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular2"
                as="p"
                className="self-end text-[13.56px] font-normal"
              >
                Privacy Policy
              </Text>
              <Text
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular2"
                as="p"
                className="self-end text-[13.56px] font-normal"
              >
                Cookie Policy
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
