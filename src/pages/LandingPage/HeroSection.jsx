import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <div>
        <div className="bg-gradient">
          <div className="flex h-[1784px] flex-col items-center justify-center bg-[url(/public/images/img_group_2.svg)] bg-cover bg-no-repeat py-40 lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
            <div className="container-xs lg:px-5 md:px-5">
              <div className="flex flex-col items-center gap-8 px-14 md:px-5 sm:px-4">
                <div className="mx-44 flex w-[82%] flex-col items-center gap-[26px] px-14 lg:w-full md:mx-0 md:w-full md:px-5 sm:px-4">
                  <div className="bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-1 flex w-[32%] justify-center gap-2 rounded-[16px] p-1.5 lg:w-full md:w-full">
                    <div className="flex">
                      <Heading
                        size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_medium2"
                        as="h1"
                        className="!text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-0 text-[13.67px] font-medium"
                      >
                        New
                      </Heading>
                    </div>
                    <div className="flex flex-1 justify-center">
                      <Heading
                        size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_medium2"
                        as="h2"
                        className="self-end text-[13.67px] font-medium !text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-santas_gray"
                      >
                        AI-Powered Analytics
                      </Heading>
                    </div>
                  </div>
                  <Heading
                    size="headinglg"
                    as="h3"
                    className="text-center text-[55.55px] font-bold leading-[60px] tracking-[-1.50px] lg:text-[46px] md:text-[35px] sm:text-[29px]"
                  >
                    <span className="text-supabase_com-alabaster">
                      <>
                        Transform Your Data Into
                        <br />
                      </>
                    </span>
                    <span className="text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-0">
                      Intelligent Insights
                    </span>
                  </Heading>
                  <Text
                    size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular"
                    as="p"
                    className="text-center text-[18.28px] font-normal leading-7 lg:text-[15px]"
                  >
                    <>
                      TreeBI combines the simplicity of spreadsheets with the power of AI to help
                      <br />
                      you analyze data, uncover insights, and make better business decisions—all
                      <br />
                      in one intuitive platform.
                    </>
                  </Text>
                  <div className="mx-[130px] flex justify-center gap-3.5 self-stretch md:mx-0">
                    <Button
                      size="lg"
                      shape="round"
                      rightIcon={
                        <Img
                          src="images/img_arrowleft.svg"
                          alt="Arrow Left"
                          className="h-[16px] w-[16px] object-contain"
                        />
                      }
                      className="min-w-[172px] gap-1.5 rounded-md px-8 font-medium sm:px-4"
                    >
                      Get Started
                    </Button>
                    <Button
                      size="lg"
                      shape="round"
                      leftIcon={
                        <Img
                          src="images/img_airplane.svg"
                          alt="Airplane"
                          className="h-[16px] w-[16px] object-contain"
                        />
                      }
                      className="min-w-[206px] gap-2 rounded-md border border-solid border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark px-[31px] font-medium sm:px-4"
                    >
                      See AI in Action
                    </Button>
                  </div>
                </div>
                <div className="relative ml-12 h-[1072px] w-[86%] md:ml-0">
                  <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-auto mr-12 h-max flex-1 rounded-[12px] border border-solid border-gray-700 bg-gradient2 shadow-md lg:mr-0 md:mr-0">
                    <div className="flex flex-col items-center justify-center rounded-[3px] bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mercury px-14 py-[342px] lg:py-8 md:p-5 sm:p-4">
                      <Img src="images/img_group.png" alt="Image" className="h-[334px] w-[36%] object-contain" />
                    </div>
                  </div>
                  <Button
                    size="xl"
                    shape="round"
                    leftIcon={
                      <Img
                        src="images/img_airplane_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_0.svg"
                        alt="Airplane"
                        className="h-[20px] w-[20px] object-contain"
                      />
                    }
                    className="absolute right-[1.92px] top-0 m-auto min-w-[304px] gap-2 rounded-lg border border-solid border-gray-700 px-[17px] font-medium"
                  >
                    AI detected a 15% sales increase
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
