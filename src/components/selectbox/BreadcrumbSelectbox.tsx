import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';

type BreadcrumbSelectboxProps = {
  options: string[];
};

const BreadcrumbSelectbox = ({ options }: BreadcrumbSelectboxProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const selectboxRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState<string>(pathname.replace('/', '').replace('barline', 'bar + line'));
  const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);

  /* 바깥 영역 클릭 시 option 창 닫기 */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectboxRef.current && !selectboxRef.current.contains(e.target as Node)) {
        setIsOpenOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* option 선택 */
  const handleSelectValue = (value: string) => {
    setSelected(value);
    setIsOpenOptions(false);
    navigate(`/${value.replace(' + ', '')}`);
  };

  return (
    <div ref={selectboxRef} className="w-32 relative">
      <div
        className={clsx(
          'w-32 flex items-center justify-between gap-1 rounded-full border border-gray-900 px-3 py-2 cursor-pointer',
          'hover:bg-gray-200'
        )}
        onClick={() => setIsOpenOptions(!isOpenOptions)}
      >
        <p className="text-body truncate">{selected}</p>
        <div className="w-4">{isOpenOptions ? <FaAngleUp /> : <FaAngleDown />}</div>
      </div>
      {isOpenOptions && (
        <div className="absolute left-0 right-0 z-10 rounded-xl border border-gray-900 bg-white overflow-hidden">
          {options.map((option) => (
            <p
              key={option}
              className={clsx(
                'text-body truncate px-3 py-2 cursor-pointer',
                'hover:bg-gray-200',
                option === selected && 'font-bold'
              )}
              onClick={() => handleSelectValue(option)}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default BreadcrumbSelectbox;
