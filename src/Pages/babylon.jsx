import React from "react";
import {
  Vector3,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Texture,
  ArcRotateCamera,
} from "@babylonjs/core";
import SceneComponent from "./SceneComponent"; // uses above component in same directory
import "./babylon.css";
import { useLocation } from "react-router-dom";
let box;
const Babylon = () => {
  const { state } = useLocation();
  const onSceneReady = (scene) => {
    // This creates and positions a free camera (non-mesh)

    const camera = new ArcRotateCamera(
      "camera1",
      (13 * Math.PI) / 8,
      Math.PI / 4,
      5,
      new Vector3(0, 0, 0),
      scene
    );
    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, false);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 1;

    var mat = new StandardMaterial("img", scene);
    mat.diffuseTexture = new Texture(state.can, scene);
    mat.diffuseTexture.hasAlpha = true;
    mat.backFaceCulling = true;
    var box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
    box.material = mat;
  };

  /**
   * Will run on every frame render.  We are spinning the box on y-axis.
   */
  const onRender = (scene) => {
    if (box !== undefined) {
      const deltaTimeInMillis = scene.getEngine().getDeltaTime();

      const rpm = 10;
      box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  };

  return (
    <div className="baby">
      <SceneComponent
        antialias
        onSceneReady={onSceneReady}
        onRender={onRender}
        id="my-canvas"
        style={{ width: "100%", height: "85vh" }}
      />
    </div>
  );
};
export default Babylon;
