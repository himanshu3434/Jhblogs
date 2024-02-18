import React, { forwardRef, useId } from "react";

function Select({ options, label, classname = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="">
      {label && <label htmlFor={id}></label>}
      <select className="" id={id} {...props} ref={ref}>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
