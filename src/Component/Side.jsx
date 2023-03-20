import { Link } from "react-router-dom";
import { useCanvasProvider } from "../Context/CanvasContext";
import "./side.css";

const Side = () => {
  const { canvasList, setCanvasList } = useCanvasProvider();
  console.log(canvasList);
  return (
    <div className="side">
      <div className="sideContent">
        {canvasList.length > 0 ? (
          <>
            {canvasList.map((e, i) => {
              return (
                <Link to="/babylon" key={e} state={{ can: e }}>
                  <div className="singlebox">
                    <h4># {i + 1}</h4>
                    <p>Cuboid</p>
                  </div>
                </Link>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Side;
