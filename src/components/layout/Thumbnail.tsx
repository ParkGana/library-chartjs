import clsx from 'clsx';

type ThumbnailProps = {
  type:
    | 'area'
    | 'bar'
    | 'bubble'
    | 'doughnut'
    | 'line'
    | 'pie'
    | 'polar'
    | 'radar'
    | 'scatter'
    | 'bar + line'
    | 'bar + list';
};

const Thumbnail = ({ type }: ThumbnailProps) => {
  return (
    <div className="relative group bg-red-300" onClick={() => (window.location.href = `/${type.replace(' + ', '')}`)}>
      <div
        className={clsx(
          'hidden absolute inset-0 z-10 items-center justify-center bg-black/50 cursor-pointer',
          'group-hover:flex'
        )}
      >
        <p className="text-title text-white">{type.toLocaleUpperCase()}</p>
      </div>
      <img className="w-full h-full" src={`/images/thumbnail-${type.replace(' + ', '')}.png`} />
    </div>
  );
};

export default Thumbnail;
