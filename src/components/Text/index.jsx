import React from "react";

const sizes = {
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular: "text-[18.28125px] font-normal lg:text-[15px]",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular1: "text-[15.25px] font-normal",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular2: "text-[13.5625px] font-normal",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular3: "text-[13.671875px] font-normal",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular4:
    "text-[16.734375px] font-normal lg:text-[13px]",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular5: "text-[16.875px] font-normal lg:text-[13px]",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular6: "text-[15.125px] font-normal",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_inter_regular7: "text-[12px] font-normal",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_item: "text-[15.375px] font-normal",
  v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_item1: "text-[15.625px] font-normal",
};

const Text = ({
  children,
  className = "",
  as,
  size = "v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app_semantic_item",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-santas_gray font-inter ${className} ${sizes[size]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
