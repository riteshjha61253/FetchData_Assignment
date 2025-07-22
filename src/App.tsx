import { useEffect, useState } from 'react'
import './App.css'
import CustomTable from './components/CustomTable';
import CustomPaginator from './components/customPaginator';

function App() {
  const [page, setPage] = useState(1);
  const [fetchApiData, setFetchApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    console.log("fetchApiData updated:", fetchApiData);
  }, [fetchApiData]);

  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);

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
        <p>Loading...</p>
      ) : (
        <>
          <CustomTable fetchApiData={fetchApiData} />
          <CustomPaginator
            currentPage={page}
            totalRecords={totalRecords}
            onPageChange={setPage}
          />
        </>
      )}
    </>
  )
}

export default App
