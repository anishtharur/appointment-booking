import React from "react";

export default function Radio({ OnChange }) {
  return (
    <div>
      <label for="date">Select a date:</label>
      <input
        type="date"
        id="date"
        name="date"
        onChange={(e) => {
          const value = e.target.value;
          OnChange(value);
        }}
      />
    </div>
  );
}
