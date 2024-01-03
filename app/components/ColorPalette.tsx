"use client";

import { useState } from "react";
import { Slider } from "./Slider";

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
			<Slider hue={hue} sat={sat} lum={lum} setHue={setHue} setLum={setLum} setSat={setSat} />
		</div>
	);
};
