import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-md",
};
const variants = {
  fill: {
    "v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_1":
      "bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-1 shadow-sm text-supabase_com-alabaster",
    "v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_20%":
      "bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow_20_",
    black_900: "bg-black-900 text-supabase_com-alabaster",
    green_A700: "bg-green-a700 text-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-zuccini",
  },
};
const sizes = {
  xl: "h-[58px] px-[18px] text-[15px]",
  xs: "h-[36px] px-2",
  sm: "h-[40px]",
  lg: "h-[44px] px-8 text-[15px]",
  md: "h-[40px] px-4 text-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xl", "xs", "sm", "lg", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_1",
    "v0_integrate_ai_with_google_sheets_33hr6hg29.vercel.app_mountain_meadow_20%",
    "black_900",
    "green_A700",
  ]),
};

export { Button };
