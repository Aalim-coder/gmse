import { createContext, useState ,useEffect} from "react";
import axios from "axios";

export const SearchContext = createContext();

export default function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchData = async (query="headphones") => {
    setLoading(true);
    setData([])
    try {
        const response = await axios.get(`http://localhost:8000/search?query=${query}`);
        const responseData = response.data.data;
        setData(responseData); 
        setLoading(false)
    } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false)
    }
};

useEffect(() => {
    fetchData(); 
}, []); 

  const value = {data,setData,loading,setLoading,fetchData}

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}
