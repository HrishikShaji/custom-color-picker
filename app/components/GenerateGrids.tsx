import { Color } from "./ColorPalette";

export const GenerateGrids = ({
  hue,
  sat,
  lum,
}: {
  hue: number;
  sat: number;
  lum: number;
}) => {
  let grids: Color[][] = [];
  for (let i = 0; i < 10; i++) {
    grids[i] = [];
    for (let j = 0; j < 10; j++) {
      grids[i][j] = {
        hue: hue,
        sat: sat,
        lum: lum,
      };
    }
  }
  return (
    <div className="flex gap-1">
      {grids.map((grid, i) => (
        <div key={i} className="flex flex-col gap-1">
          {grid.map((item, j) => {
            console.log(item);
            return (
              <div
                className="w-4 h-4 "
                key={j}
                style={{
                  backgroundColor: `hsl(${item.hue},${item.sat}%,${item.lum}%)`,
                }}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
