import clsx from 'clsx';
import { FiHome } from 'react-icons/fi';

const BreadcrumbButton = () => {
  return (
    <div
      className={clsx('rounded-full border border-gray-900 p-2 cursor-pointer', 'hover:bg-gray-200')}
      onClick={() => (window.location.href = '/')}
    >
      <FiHome size={20} />
    </div>
  );
};

export default BreadcrumbButton;
