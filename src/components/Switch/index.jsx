import React from "react";

import SwitchProvider from "@dhiwise/react-switch";
import PropTypes from "prop-types";

const variants = {
  swtV0integrateaiwithgooglesheets33hr6hg29vercelappMountainMeadow: {
    offColor: "#e3e4e8",
    onColor: "#10b981",
    offHandleColor: "#101827",
    onHandleColor: "#101827",
    boxShadow: "0 4px 6px -4px #00000019",
  },
};
const sizes = {
  xs: {
    width: 48,
    height: 24,
  },
};

const Switch = ({
  value = false,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  variant = "swtV0integrateaiwithgooglesheets33hr6hg29vercelappMountainMeadow",
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={className}>
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        {...variants[variant]}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </div>
  );
};

Switch.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["swtV0integrateaiwithgooglesheets33hr6hg29vercelappMountainMeadow"]),
};

export { Switch };
