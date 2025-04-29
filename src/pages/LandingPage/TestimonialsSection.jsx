import { Heading, Text } from "../../components";
import UserProfile from "../../components/UserProfile";
import React from "react";

export default function TestimonialsSection() {
  return (
    <>
      {/* testimonials section */}
      <div>
        <div className="flex justify-center bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_30_ py-20 lg:py-8 md:py-5 sm:py-4">
          <div className="container-xs flex justify-center lg:px-5 md:px-5">
            <div className="flex w-full flex-col gap-16 px-8 sm:gap-8 sm:px-4">
              <div className="mx-[284px] flex flex-col items-center justify-center gap-3.5 md:mx-0">
                <Heading
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_2"
                  as="h2"
                  className="text-[33.75px] font-bold lg:text-[28px] md:text-[27px] sm:text-[25px]"
                >
                  Loved by Data Teams Everywhere
                </Heading>
                <Text
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular"
                  as="p"
                  className="text-center text-[18.28px] font-normal leading-7 lg:text-[15px]"
                >
                  <>
                    See what our customers are saying about how Treeo has transformed their data
                    <br />
                    analysis workflows.
                  </>
                </Text>
              </div>
              <div className="grid grid-cols-2 justify-center gap-6 lg:grid-cols-2 md:grid-cols-1">
                <UserProfile className="hover:border hover:border-solid hover:border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ hover:shadow-xs" />
                <UserProfile
                  userDescription={
                    <>
                      The spreadsheet interface is familiar enough that our team needed zero
                      <br />
                      training, but the AI capabilities are what make it truly revolutionary for our
                      <br />
                      business.
                    </>
                  }
                  userName="Michael Chen"
                  userPosition="Data Analyst, GrowthMetrics"
                  className="hover:border hover:border-solid hover:border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ hover:shadow-xs"
                />
                <UserProfile
                  userDescription={
                    <>
                      We&#39;ve tried many BI tools, but Treeo is the first one that our entire team, <br />
                      from analysts to executives, actually enjoys using. The AI insights are
                      <br />
                      game-changing.
                    </>
                  }
                  userName="Alex Rodriguez"
                  userPosition="CEO, Startup Ventures"
                  className="hover:border hover:border-solid hover:border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ hover:shadow-xs"
                />
                <UserProfile
                  userDescription={
                    <>
                      The natural language query feature saves me hours every week. I can just
                      <br />
                      ask questions about our data and get instant visualizations and insights.
                    </>
                  }
                  userName="Priya Patel"
                  userPosition="Marketing Director, BrandGrowth"
                  className="hover:border hover:border-solid hover:border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ hover:shadow-xs"
                />
                <Heading
                  size="headingxs"
                  as="h3"
                  className="w-full cursor-pointer text-[19.06px] font-bold hover:border hover:border-solid hover:border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ hover:shadow-xs lg:text-[16px]"
                >
                  Company A
                </Heading>
                <Heading
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_bold"
                  as="h4"
                  className="w-full cursor-pointer text-[19.22px] font-bold hover:border hover:border-solid hover:border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ hover:shadow-xs lg:text-[16px]"
                >
                  Company B
                </Heading>
                <Heading
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_bold"
                  as="h5"
                  className="w-full cursor-pointer text-[19.22px] font-bold hover:border hover:border-solid hover:border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ hover:shadow-xs lg:text-[16px]"
                >
                  Company C
                </Heading>
                <Heading
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_bold"
                  as="h6"
                  className="w-full cursor-pointer text-[19.22px] font-bold hover:border hover:border-solid hover:border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ hover:shadow-xs lg:text-[16px]"
                >
                  Company D
                </Heading>
                <Heading
                  size="v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_bold"
                  as="h6"
                  className="w-full cursor-pointer text-[19.22px] font-bold hover:border hover:border-solid hover:border-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-shark_40_ hover:shadow-xs lg:text-[16px]"
                >
                  Company E
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
