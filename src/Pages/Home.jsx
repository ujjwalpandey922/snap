import html2canvas from "html2canvas";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Map from "react-map-gl";
import { useCanvasProvider } from "../Context/CanvasContext";
import "./home.css";
const Home = () => {
  const [viewState, setViewState] = useState({
    longitude: 73.8161,
    latitude: 18.5286,
    zoom: 11,
  });
  const { setCanvasList } = useCanvasProvider();
  const handleClick = async () => {
    const input = document.getElementById("maiHunMap");
    let res = await html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    });
    const letsSee = res.toDataURL("image/png");
    setCanvasList((pre) => [...pre,  letsSee ]);

  };
  return (
    <div className="home" id="home">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "86vh" }}
        mapStyle="mapbox://styles/ujjwalpandey922/clfc9ogd900kf01pevl60dbpc"
        mapboxAccessToken="pk.eyJ1IjoidWpqd2FscGFuZGV5OTIyIiwiYSI6ImNsZmM5M2EwODAwN3ozdWxyOTlqcWJudnAifQ.7LEAxoY9g9D57Dp8JKT2kw"
        preserveDrawingBuffer="true"
        id="maiHunMap"
      ></Map>
      <Button className="snap-btn" onClick={handleClick}>
        Snap It...
      </Button>
    </div>
  );
};

export default Home;
