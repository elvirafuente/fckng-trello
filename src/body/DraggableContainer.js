import React, { useMemo, useState, useCallback, useEffect } from "react";

const INITIAL_STATE_POSITION = { x: 0, y: 0 };

const DraggableContainer = ({ children }) => {
  const [state, setState] = useState({
    isDragging: false,
    origin: INITIAL_STATE_POSITION,
    translation: INITIAL_STATE_POSITION,
  });

  const style = useMemo(
    () => ({
      cursor: state.isDragging ? "-webkit-grabbing" : "-webkit-grab",
      transform: `translate(${state.translation.x}px, ${state.translation.y}px)`,
      //   transition: state.isDragging ? "none" : "transform 500ms",
      zIndex: state.isDragging ? 2 : 1,
      position: state.isDragging ? "absolute" : "relative",
    }),
    [state.isDragging, state.translation]
  );

  const handleMouseDown = useCallback(({ clientX, clientY }) => {
    setState((prevState) => ({
      ...prevState,
      isDragging: true,
      origin: { x: clientX, y: clientY },
    }));
  }, []);

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      const translation = {
        x: clientX - state.origin.x,
        y: clientY - state.origin.y,
      };
      setState((prevState) => ({
        ...prevState,
        translation,
      }));
    },
    [state.origin]
  );

  const handleMouseUp = useCallback(({ clientX, clientY }) => {
    setState((prevState) => ({
      ...prevState,
      isDragging: false,
    }));
  }, []);

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      setState((prevState) => ({
        ...prevState,
        translation: INITIAL_STATE_POSITION,
      }));
    }
  }, [state.isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div style={style} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};

export default DraggableContainer;
