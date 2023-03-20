import { createContext, useContext, useState } from "react";

let canvas = createContext();

const CanvasProvider = ({ children }) => {
  const [canvasList, setCanvasList] = useState([]);
  return (
    <canvas.Provider value={{ canvasList, setCanvasList }}>
      {children}
    </canvas.Provider>
  );
};

export default CanvasProvider;

export const useCanvasProvider = () => {
  return useContext(canvas);
};
