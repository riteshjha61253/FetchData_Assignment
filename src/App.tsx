import CustomTable from './components/customTable';
import CustomPaginator from './components/customPaginator';
import type { Data_Format } from './components/customTable';
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [rowClick, setRowClick] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Data_Format[]>([]);
  const [autoSelectTarget, setAutoSelectTarget] = useState<number | null>(null);
  const [fetchApiData, setFetchApiData] = useState<Data_Format[]>([]);
  const URL = "https://api.artic.edu/api/v1/artworks";

  const onAutoSelectRows = (count: number) => {
    setAutoSelectTarget(count);
  };

  useEffect(() => {
    if (autoSelectTarget && fetchApiData.length > 0) {
      const alreadySelectedIds = new Set(selectedProducts.map((item) => item.id));
      const remainingToSelect = autoSelectTarget - selectedProducts.length;

      if (remainingToSelect > 0) {
        const newSelections = fetchApiData
          .filter((item) => !alreadySelectedIds.has(item.id))
          .slice(0, remainingToSelect);

        setSelectedProducts([...selectedProducts, ...newSelections]);
      }
    }
  }, [fetchApiData, autoSelectTarget]);

  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}?page=${page}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("This is data", data)
      setFetchApiData(data.data);
      setTotalRecords(data.pagination.total);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <>
      {loading ? (
        <div className="load">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <CustomTable fetchApiData={fetchApiData} selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            rowClick={rowClick}
            setRowClick={setRowClick}
            onAutoSelectRows={onAutoSelectRows} />
          <CustomPaginator currentPage={page} totalRecords={totalRecords} onPageChange={setPage}
          />
        </>
      )}
    </>
  )
}

export default App
