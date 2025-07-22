import { Paginator} from 'primereact/paginator';
import type { PaginatorPageChangeEvent } from 'primereact/paginator';


interface PaginatorFormat {
  currentPage: number;
  totalRecords: number;
  onPageChange: (newPage: number) => void;
}

const CustomPaginator=({ currentPage, totalRecords, onPageChange }: PaginatorFormat) => {
  const rowsPerPage = 10;

  const handlePageChange = (event: PaginatorPageChangeEvent) => {
    const newPage = event.page + 1;
    onPageChange(newPage);
  };

  return (
    <div className="card">
      <Paginator
        first={(currentPage - 1) * rowsPerPage}
        rows={rowsPerPage}
        totalRecords={totalRecords}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CustomPaginator;
