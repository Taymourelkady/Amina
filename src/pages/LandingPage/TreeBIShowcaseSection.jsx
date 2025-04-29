import { Img, Button, Text, Heading } from "../../components";
import UserInterfaceComponent from "../../components/UserInterfaceComponent";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function TreeBIShowcaseSection() {
  return (
    <>
      {/* tree b i showcase section */}
      <div className="flex justify-center py-[78px] lg:py-8 md:py-5 sm:py-4">
        <div className="container-xs flex justify-center lg:px-5 md:px-5">
          <div className="flex w-full flex-col items-center gap-12 px-14 md:px-5 sm:px-4">
            <div className="mx-32 flex w-[74%] flex-col items-center gap-3.5 lg:w-full md:mx-0 md:w-full">
              <div className="flex justify-center self-stretch px-14 md:px-5 sm:px-4">
                <Heading
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_6"
                  as="h2"
                  className="text-[33.89px] font-bold lg:text-[28px] md:text-[27px] sm:text-[25px]"
                >
                  See TreeBI in Action
                </Heading>
              </div>
              <Text
                size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular"
                as="p"
                className="text-center text-[18.28px] font-normal leading-7 lg:text-[15px]"
              >
                <>
                  Experience how TreeBI transforms complex data analysis into simple, intuitive
                  <br />
                  workflows.
                </>
              </Text>
            </div>
            <Tabs
              className="flex w-[80%] flex-col gap-8 lg:w-full md:w-full"
              selectedTabClassName="!text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-white font-medium text-[13.78px] bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-0 shadow-xs rounded"
              selectedTabPanelClassName="!relative tab-panel--selected"
            >
              <TabList className="flex justify-center gap-1.5 rounded-md bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark md:flex-col">
                <Tab className="flex gap-2 p-1.5 md:px-5">
                  <Img src="images/img_file.svg" alt="File" className="h-[20px]" />
                  <div className="flex">
                    <Heading
                      as="h3"
                      className="self-end text-[13.78px] font-medium !text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-white"
                    >
                      Spreadsheet Interface
                    </Heading>
                  </div>
                </Tab>
                <Tab className="flex gap-2 p-1.5 md:px-5">
                  <Img
                    src="images/img_airplane_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_santas_gray.svg"
                    alt="Airplane"
                    className="h-[20px]"
                  />
                  <div className="flex">
                    <Heading
                      size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_medium2"
                      as="h4"
                      className="text-[13.67px] font-medium !text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-santas_gray"
                    >
                      AI Assistant
                    </Heading>
                  </div>
                </Tab>
                <Tab className="flex w-[24%] justify-center gap-2 p-1.5 md:w-full md:px-5">
                  <Img
                    src="images/img_user_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_santas_gray.svg"
                    alt="User"
                    className="h-[20px]"
                  />
                  <div className="flex flex-1 justify-center">
                    <Heading
                      as="h5"
                      className="self-end text-[13.78px] font-medium !text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-santas_gray"
                    >
                      Natural Language Chat
                    </Heading>
                  </div>
                </Tab>
                <Tab className="flex gap-2 p-1.5 md:px-5">
                  <Img
                    src="images/img_settings_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_santas_gray.svg"
                    alt="Settings"
                    className="h-[20px]"
                  />
                  <div className="flex">
                    <Heading
                      as="h6"
                      className="text-[13.78px] font-medium !text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-santas_gray"
                    >
                      Smart Visualizations
                    </Heading>
                  </div>
                </Tab>
              </TabList>
              {[...Array(4)].map((_, index) => (
                <TabPanel key={`tab-panel${index}`} className="absolute justify-center">
                  <div className="w-full">
                    <div className="flex items-center gap-8 md:flex-col">
                      <div className="flex w-[38%] flex-col items-start gap-3 md:w-full">
                        <div className="flex self-stretch">
                          <Heading
                            size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_7"
                            as="h5"
                            className="self-end text-[22.69px] font-bold lg:text-[18px]"
                          >
                            Spreadsheet Interface
                          </Heading>
                        </div>
                        <Text
                          size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular1"
                          as="p"
                          className="text-[15.25px] font-normal leading-6"
                        >
                          <>
                            Work with your data in a familiar spreadsheet
                            <br />
                            environment with AI-powered features.
                          </>
                        </Text>
                        <div className="flex flex-col gap-4 self-stretch py-3">
                          <UserInterfaceComponent />
                          <UserInterfaceComponent
                            descriptionText={
                              <>
                                Use AI-powered formulas like =AI.PREDICT() and
                                <br />
                                =AI.TREND() for advanced analysis.
                              </>
                            }
                          />
                        </div>
                        <Button
                          shape="round"
                          rightIcon={
                            <Img
                              src="images/img_arrowleft.svg"
                              alt="Arrow Left"
                              className="h-[16px] w-[16px] object-contain"
                            />
                          }
                          className="min-w-[146px] gap-2 rounded-md px-4 font-medium"
                        >
                          Try it yourself
                        </Button>
                      </div>
                      <div className="flex-1 rounded-[12px] border border-solid border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ shadow-sm md:self-stretch">
                        <Img
                          src="images/img_component_1_v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mercury.png"
                          alt="Image"
                          className="h-[598px] w-full object-cover lg:h-auto md:h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
