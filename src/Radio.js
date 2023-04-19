import React from "react";

export default function Radio({ OnChange }) {
  return (
    <div
      onChange={(e) => {
        const value = e.target.value;
        OnChange(value);
      }}
    >
      <input type="radio" value="Meet" name="where" />
      Meet
      <input type="radio" value="Phone" name="where" />
      Phone
    </div>
  );
}
