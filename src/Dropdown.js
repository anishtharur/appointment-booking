import React, { useState } from "react";

export default function Dropdown({ OnChange }) {
  const [selectedVal, setSelectedVal] = useState("Select your doctor");
  return (
    <label>
      <select
        name="selectedDoctor"
        onChange={(e) => {
          const value = e.target.value;
          OnChange(value);
        }}
      >
        <option value="default">Select your doctor</option>
        <option value="anish">Dr.Anish</option>
        <option value="kp">Dr.KP</option>
        <option value="srk">Dr.SRK</option>
      </select>
    </label>
  );
}
