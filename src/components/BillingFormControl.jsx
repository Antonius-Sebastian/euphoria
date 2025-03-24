import React from "react";

const BillingFormControl = ({ label, colSpan, inputType }) => {
  const colSpanVariants = {
    2: "col-span-2",
    3: "col-span-3",
  };

  const id = label.toLowerCase().replace(" ", "-");
  return (
    <div
      className={`font-causten ${colSpanVariants[colSpan]} flex flex-col gap-2.5`}
    >
      <label
        htmlFor={id}
        className="text-grayDark2 text-sm font-semibold md:text-base"
      >
        {label}*
      </label>

      <input
        type={inputType}
        id={id}
        className="text-grayDark2 bg-secondary w-full rounded-lg px-3 py-4 text-sm font-medium outline-0 md:px-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        placeholder={label}
      />
    </div>
  );
};

export default BillingFormControl;
