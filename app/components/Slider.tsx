import { Dispatch, SetStateAction } from "react";

interface SliderProps {
  setHue: Dispatch<SetStateAction<number>>;
  setSat: Dispatch<SetStateAction<number>>;
  setLum: Dispatch<SetStateAction<number>>;
  hue: number;
  sat: number;
  lum: number;
}

export const Slider: React.FC<SliderProps> = ({
  setHue,
  setSat,
  setLum,
  hue,
  sat,
  lum,
}) => {
  return (
    <div className="flex flex-col gap-2 text-black">
      <div className="flex flex-col gap-1">
        <h1>Hue</h1>
        <div className="flex gap-1">
          <input
            value={hue}
            type="range"
            min="0"
            max="360"
            onChange={(e) => setHue(parseInt(e.target.value))}
          />
          <input
            type="number"
            value={hue}
            min="0"
            max="360"
            onChange={(e) => setHue(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1>Saturation</h1>
        <div className="flex gap-1">
          <input
            value={sat}
            type="range"
            min="0"
            max="100"
            onChange={(e) => setSat(parseInt(e.target.value))}
          />
          <input
            type="number"
            value={sat}
            min="0"
            max="100"
            onChange={(e) => setSat(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1>Lumination</h1>
        <div className="flex gap-1">
          <input
            value={lum}
            type="range"
            min="0"
            max="100"
            onChange={(e) => setLum(parseInt(e.target.value))}
          />
          <input
            type="number"
            value={lum}
            min="0"
            max="100"
            onChange={(e) => setLum(parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};
