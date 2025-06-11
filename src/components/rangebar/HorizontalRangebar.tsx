import { useRef } from 'react';

type HorizontalRangebarProps = {
  range: { min: number; max: number };
  value: { min: number; max: number };
  step: number;
  handleChange: ({ min, max }: { min: number; max: number }) => void;
};

const HorizontalRangebar = ({ range, value, step, handleChange }: HorizontalRangebarProps) => {
  const rangeRef = useRef<HTMLDivElement>(null);

  const calculatePercent = (value: number) => ((value - range.min) / (range.max - range.min)) * 100;

  const handleMouseDown = (type: 'min' | 'max') => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!rangeRef.current) return;

      const rect = rangeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;

      const percent = Math.max(0, Math.min(x, rect.width));
      const rawValue = range.min + (percent / rect.width) * (range.max - range.min);

      const stepped = Math.round(rawValue / step) * step;
      const clamped = Math.max(range.min, Math.min(stepped, range.max));

      type === 'min' && clamped < value.max && handleChange({ min: clamped, max: value.max });
      type === 'max' && clamped > value.min && handleChange({ min: value.min, max: clamped });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const minPercent = calculatePercent(value.min);
  const maxPercent = calculatePercent(value.max);

  return (
    <div ref={rangeRef} className="relative w-full h-2 bg-gray-200 rounded-full">
      {/* Fill */}
      <div
        className="absolute h-full bg-gray-300"
        style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
      />

      {/* Min Value */}
      <div
        className="absolute z-10 w-4 h-4 flex items-center justify-center rounded-full bg-gray-300 select-none"
        style={{ top: '50%', left: `${minPercent}%`, transform: 'translate(-50%, -50%)' }}
        onMouseDown={() => handleMouseDown('min')}
      />

      {/* Max Value */}
      <div
        className="absolute z-10 w-4 h-4 flex items-center justify-center rounded-full bg-gray-300 select-none"
        style={{ top: '50%', left: `${maxPercent}%`, transform: 'translate(-50%, -50%)' }}
        onMouseDown={() => handleMouseDown('max')}
      />
    </div>
  );
};

export default HorizontalRangebar;
