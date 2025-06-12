import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

type ThumbnailProps = {
  type: 'area' | 'bar' | 'line' | 'pie' | 'bar + line';
};

const Thumbnail = ({ type }: ThumbnailProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative group bg-red-300" onClick={() => navigate(`/${type.replace(' + ', '')}`)}>
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
