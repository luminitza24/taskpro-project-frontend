import { selectBoardTitle } from '../../features/board-slice/selectors';
import { useSelector } from 'react-redux';
import Filters from './Filters';
import { selectFilterModal } from '../../features/modals/selectors';
import FilterModal from './FilterModal';

const HeaderDashboard = () => {
  const boardName = useSelector(selectBoardTitle);
  const filterModal = useSelector(selectFilterModal);

  return (
    <>
      <div className='d-flex p-4 m-0 justify-content-between'>
        <h4 className='text-light '>{boardName}</h4>
        <Filters />
      </div>
      {filterModal && <FilterModal />}
    </>
  );
};
export default HeaderDashboard;