import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function HeroSection1() {
  return (
    <>
      {/* hero section */}
      <div className="mt-20">
        <div className="bg-gradient1">
          <div className="flex items-start justify-center overflow-x-scroll opacity-20 md:flex-col">
            <Img
              src="images/img_background_blur.svg"
              alt="Backgroundblur"
              className="mb-36 h-[320px] w-[320px] rounded-[50%]"
            />
            <div className="mt-20 flex w-[1192px] flex-1 flex-col items-center px-14 md:self-stretch md:px-5">
              <Img
                src="images/img_airplane_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0_40x40.svg"
                alt="Airplane"
                className="h-[48px]"
              />
              <Heading
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_6"
                as="h2"
                className="mt-6 text-[33.89px] font-bold lg:text-[28px] md:text-[27px] sm:text-[25px]"
              >
                Ready to Transform Your Data Experience?
              </Heading>
              <Text
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular"
                as="p"
                className="mt-3 text-center text-[18.28px] font-normal leading-7 lg:text-[15px]"
              >
                <>
                  Join thousands of businesses that are using TreeBI to unlock the power of their data
                  <br />
                  with AI.
                </>
              </Text>
              <div className="mt-8 flex gap-4">
                <Button
                  size="lg"
                  shape="round"
                  rightIcon={
                    <Img src="images/img_arrowleft.svg" alt="Arrow Left" className="h-[16px] w-[16px] object-contain" />
                  }
                  className="min-w-[174px] gap-2 rounded-md px-8 font-medium sm:px-4"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  shape="round"
                  className="min-w-[196px] rounded-md border border-solid border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark px-[31px] font-medium sm:px-4"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <Img
              src="images/img_background_blur_blue_a200.svg"
              alt="Backgroundblur"
              className="h-[320px] w-[320px] rounded-[50%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
