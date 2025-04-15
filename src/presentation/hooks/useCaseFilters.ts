import { useEffect, useState } from "react";
import { useDebounce } from "@presentation/hooks/useDebounce";

interface UseCaseFilters {
    search: string,
    setSearch: (value: string) => void
}

export function useCaseFilters({search, setSearch}:UseCaseFilters){
    const [localSearch, setLocalSearch] = useState(search);
      const debouncedSearch = useDebounce(localSearch, 500);
    
      useEffect(() => {
        setSearch(debouncedSearch);
      }, [debouncedSearch, setSearch]);

      return {localSearch, setLocalSearch}
}