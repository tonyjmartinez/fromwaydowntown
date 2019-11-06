import React, { useState } from "react";
import { ChangeEvent } from "jest-haste-map/build/types";

interface Props {
  enabled: boolean;
  setEnabled: (x: any) => {};
}

const Toggle = (props: Props) => {
  const { enabled, setEnabled } = props;

  return (
    <label className="checkbox">
      <input
        checked={enabled}
        type="checkbox"
        onChange={e => {
          if (e.target.checked) {
            setEnabled(true);
          } else {
            setEnabled(false);
          }
        }}
      />
      Remember me
    </label>
  );
};

export default Toggle;
