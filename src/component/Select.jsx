import React, { forwardRef, useId } from "react";

function Select({ options, label, classname = "", ...props }, ref) {
  const id = useId();
  return (
    <div classname="">
      {label && <label htmlFor={id}></label>}
      <select classname="" id={id} {...props} ref={ref}>
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
