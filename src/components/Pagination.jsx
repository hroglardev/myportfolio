import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';

const Pagination = ({ page, setPage, items, limit, pages }) => {
  const { mode } = useContext(ModeContext);
  return (
    <>
      <div
        className={`${
          items.length <= 4 && 'hidden'
        } sm:hidden flex justify-center mt-12 gap-2`}>
        <button
          className={`border px-4 py-2 rounded-xl  ${
            mode === 'DARK' ? 'bg-midGray' : 'bg-lightGray'
          }`}
          disabled={page === 0}
          onClick={() => setPage(page - 1)}>
          {'<'}
        </button>
        <button
          className={`border px-4 py-2 rounded-xl  ${
            mode === 'DARK' ? 'bg-midGray' : 'bg-lightGray'
          }`}
          disabled={(page + 1) * limit >= items.length}
          onClick={() => setPage(page + 1)}>
          {'>'}
        </button>
      </div>
      <div
        className={`max-sm:hidden justify-center mt-4 rounded-xl ${
          pages.length === 1 ? 'hidden' : 'sm:flex'
        }`}>
        {pages.map((pageNumber, index) => {
          return (
            <button
              disabled={pageNumber - 1 < 0 || pageNumber + 1 > pages.length + 1}
              key={pageNumber}
              className={`border px-4 py-2  mt-8 ${
                index === 0 && 'rounded-l-xl'
              } ${index === pages.length - 1 && 'rounded-r-xl'} ${
                pageNumber - 1 === page
                  ? 'bg-lightRed text-white'
                  : mode === 'DARK'
                  ? 'bg-midGray text-white'
                  : 'bg-lightGray text-black'
              } `}
              onClick={() => setPage(pageNumber - 1)}>
              {pageNumber}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default Pagination;
