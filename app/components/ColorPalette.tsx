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
  const [selectedColor, setSelectedColor] = useState("hsl(0,0%,0%)");

  return (
    <div className="p-5 bg-neutral-700 flex flex-col gap-3 rounded-md">
      <div className="w-full h-5" style={{ backgroundColor: selectedColor }} />
      <GenerateGrids
        selectedColor={selectedColor}
        cols={15}
        setSelectedColor={setSelectedColor}
        hue={hue}
        sat={sat}
        lum={lum}
      />
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
