import { useLocation } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';
import BreadcrumbButton from '../button/BreadcrumbButton';
import BreadcrumbSelectbox from '../selectbox/BreadcrumbSelectbox';

const Breadcrumb = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center gap-2">
      <BreadcrumbButton />
      {pathname !== '/' && (
        <>
          <FaAngleRight />
          <BreadcrumbSelectbox options={['bar', 'line']} />
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
