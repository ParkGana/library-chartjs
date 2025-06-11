import clsx from 'clsx';
import { FiHome } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const BreadcrumbButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className={clsx('rounded-full border border-gray-900 p-2 cursor-pointer', 'hover:bg-gray-200')}
      onClick={() => navigate('/')}
    >
      <FiHome size={20} />
    </div>
  );
};

export default BreadcrumbButton;
