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
    <div className="flex flex-col gap-2">
      <input
        value={hue}
        type="range"
        min="0"
        max="360"
        step="10"
        onChange={(e) => setHue(parseInt(e.target.value))}
      />
      <input
        value={sat}
        type="range"
        min="0"
        max="100"
        step="10"
        onChange={(e) => setSat(parseInt(e.target.value))}
      />
      <input
        value={lum}
        type="range"
        min="0"
        max="100"
        step="10"
        onChange={(e) => setLum(parseInt(e.target.value))}
      />
    </div>
  );
};
