import React, { useState } from "react";

export default function TextBox({ value, OnChange }) {
  const [selectedText, setText] = useState("");
  return (
    <label>
      {value}: &nbsp;
      <input
        class="textbox"
        onChange={(e) => {
          const value = e.target.value;
          OnChange(value);
        }}
      />
    </label>
  );
}
