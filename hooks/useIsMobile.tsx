import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const useIsMobile = () => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });

  useEffect(() => {
    setHasMounted(true);
    return () => setHasMounted(false);
  }, []);
  return { isMobile, hasMounted };
};

export default useIsMobile;
