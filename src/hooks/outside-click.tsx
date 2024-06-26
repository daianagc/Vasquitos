import { useEffect } from "react";

function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}

export default useOutsideClick;
