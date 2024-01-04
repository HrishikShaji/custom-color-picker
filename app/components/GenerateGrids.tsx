import { Dispatch, SetStateAction } from "react";
import { Color } from "./ColorPalette";

interface GenerateGridsProps {
	hue: number;
	sat: number;
	lum: number;
	setSelectedColor: Dispatch<SetStateAction<string>>;
	cols: number;
	selectedColor: string;
}

export const GenerateGrids: React.FC<GenerateGridsProps> = ({
	hue,
	sat,
	lum,
	cols,
	selectedColor,
	setSelectedColor,
}) => {
	let grids: Color[][] = [];
	for (let i = 0; i < cols; i++) {
		grids[i] = [];
		for (let j = 0; j < cols; j++) {
			grids[i][j] = {
				hue: hue,
				sat: sat + j * ((100 - sat) / cols),
				lum: lum + i * ((100 - lum) / cols),
			};
		}
	}
	return (
		<div className="flex gap-1">
			{grids.map((grid, i) => (
				<div key={i} className="flex flex-col gap-1">
					{grid.map((item, j) => {
						const currentColor = `hsl(${item.hue},${item.sat}%,${item.lum}%)`;
						const isSelected = selectedColor === currentColor ? true : false;
						return (
							<div
								onClick={() => setSelectedColor(currentColor)}
								className="w-4 h-4 border-2"
								key={j}
								style={{
									borderColor: isSelected ? "black" : currentColor,
									backgroundColor: currentColor,
								}}
							></div>
						);
					})}
				</div>
			))}
		</div>
	);
};
