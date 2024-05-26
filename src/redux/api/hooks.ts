import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// delay onchange search query event
export const useDebounce = ({
  searchQuery,
  delay,
}: {
  searchQuery: string;
  delay: number;
}) => {
  const [debounceText, setDebounceText] = useState<string>("");
  useEffect(() => {
    const handler = setInterval(() => {
      setDebounceText(searchQuery);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, delay]);

  return debounceText;
};

// uesHistory hook for redirect previous route
export const useHistory = () => {
  const router = useRouter();
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const handleRouteChange = (url: any, { shallow }: any) => {
      if (!shallow) {
        setHistory((prevState) => [...prevState, url]);
      }
    };

    router.beforePopState(() => {
      setHistory((prevState) => prevState.slice(0, -2));
      return true;
    });

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return { history, canGoBack: () => history.length > 1 };
};
