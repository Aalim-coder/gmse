import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function useSearchContext(){
    const context = useContext(SearchContext)

    return context;
}