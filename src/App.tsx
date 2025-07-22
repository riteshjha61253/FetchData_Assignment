import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState(1);
  const [fetchApiData, setFetchApiData] = useState([]);
  const [loading, setLoading] = useState(false);

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

    </>
  )
}

export default App
