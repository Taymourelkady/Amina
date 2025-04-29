import React from "react";

const sizes = {
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_medium: "text-[13.890625px] font-medium",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_medium1: "text-[13.78125px] font-medium",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_medium2: "text-[13.671875px] font-medium",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_2:
    "text-[33.75px] font-bold lg:text-[28px] md:text-[31px] sm:text-[29px]",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_3:
    "text-[18.90625px] font-semibold lg:text-[15px]",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_4:
    "text-[19.0625px] font-semibold lg:text-[16px]",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_5:
    "text-[18.75px] font-semibold lg:text-[15px]",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_6:
    "text-[33.890625px] font-bold lg:text-[28px] md:text-[31px] sm:text-[29px]",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_7:
    "text-[22.6875px] font-bold lg:text-[18px]",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_8: "text-[15.375px] font-medium",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_9: "text-[15.5px] font-medium",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_bold: "text-[19.21875px] font-bold lg:text-[16px]",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_semi_bold:
    "tracking-[-0.60px] text-[22.125px] font-semibold lg:text-[18px]",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_semi_bold1:
    "tracking-[-0.60px] text-[22.3125px] font-semibold lg:text-[18px]",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_heading_10: "text-[15.625px] font-medium",
  headingmd: "text-[36px] font-bold lg:text-[30px] md:text-[34px] sm:text-[32px]",
  headinglg: "text-[55px] font-bold lg:text-[46px] md:text-[47px] sm:text-[41px]",
  textxs: "text-[14px] font-medium",
  headingxs: "text-[19px] font-bold lg:text-[16px]",
  headings: "text-[35px] font-bold lg:text-[29px] md:text-[33px] sm:text-[31px]",
};

const Heading = ({
  children,
  className = "",
  size = "v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_medium1",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-supabase_com-alabaster font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
