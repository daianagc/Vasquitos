import { useState, useCallback } from "react";

const useDrag = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  const handleMouseDown = useCallback(
    (event: React.MouseEvent) => {
      setIsDragging(true);
      setStartPos(event.clientX);
      setPrevTranslate(currentTranslate);
    },
    [currentTranslate]
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (!isDragging) return;
      const currentPosition = event.clientX;
      const diff = currentPosition - startPos;
      setCurrentTranslate(prevTranslate + diff);
    },
    [isDragging, startPos, prevTranslate]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (event: React.TouchEvent) => {
      setIsDragging(true);
      setStartPos(event.touches[0].clientX);
      setPrevTranslate(currentTranslate);
    },
    [currentTranslate]
  );

  const handleTouchMove = useCallback(
    (event: React.TouchEvent) => {
      if (!isDragging) return;
      const currentPosition = event.touches[0].clientX;
      const diff = currentPosition - startPos;
      setCurrentTranslate(prevTranslate + diff);
    },
    [isDragging, startPos, prevTranslate]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return {
    isDragging,
    currentTranslate,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useDrag;
