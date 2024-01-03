"use client";

import { useState } from "react";
import { Slider } from "./Slider";
import { GenerateGrids } from "./GenerateGrids";

export type Color = {
  hue: number;
  sat: number;
  lum: number;
};

export const ColorPalette = () => {
  const [hue, setHue] = useState(0);
  const [sat, setSat] = useState(0);
  const [lum, setLum] = useState(0);

  return (
    <div className="p-5 bg-neutral-700 rounded-md">
      <div
        className="w-2 h-2"
        style={{ backgroundColor: `hsl(${hue},${sat}%,${lum}%)` }}
      ></div>

      <GenerateGrids hue={hue} sat={sat} lum={lum} />
      <Slider
        hue={hue}
        sat={sat}
        lum={lum}
        setHue={setHue}
        setLum={setLum}
        setSat={setSat}
      />
    </div>
  );
};
