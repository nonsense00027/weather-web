import { useEffect, useState } from "react";

import "./App.css";
import { Home } from "./pages/Home";
import type { DataResponse } from "./common/types";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  const [data, setData] = useState<DataResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${apiUrl}?key=${apiKey}&q=14.2970081,121.0969422&days=7&aqi=no&alerts=no`
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Error loading data</div>;
  return (
    <>
      <Home data={data} />
      {/* <a href="https://www.flaticon.com/free-icons/rain" title="rain icons">
        Rain icons created by apien - Flaticon
      </a> */}
    </>
  );
}

export default App;
