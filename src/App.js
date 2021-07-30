import React from "react";
import Pole from "./Pole";
import Light from "./Light";
import Timer from "./Timer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [lightState, setLightState] = React.useState({
    red: { state: false, color: "red", duration: 30 },
    orange: { state: false, color: "orange", duration: 3 },
    green: { state: false, color: "green", duration: 20 }
  });

  const [duration, setDuration] = React.useState("");

  const changeLightState = color => {
    switch (color) {
      case "red":
        const rState = {
          ...lightState,
          red: { state: true, color: "red", duration: 10 }
        };
        setTrafficLight("green", rState, 10 * 1000);
        break;
      case "orange":
        const oState = {
          ...lightState,
          orange: { state: true, color: "orange", duration: 2 }
        };
        setTrafficLight("red", oState, 2 * 1000);
        break;
      case "green":
        const gState = {
          ...lightState,
          green: { state: true, color: "green", duration: 5 }
        };
        setTrafficLight("orange", gState, 5 * 1000);
        break;
      default:
        console.log("it should not come here");
    }
  };

  const setTrafficLight = (color, state, duration) => {
    setLightState(state);
    setDuration(duration);
    setTimeout(() => {
      changeLightState(color);
    }, duration);
  };

  React.useEffect(() => {
    changeLightState("red");
  }, []);

  const renderLights = () => {
    console.log("ligt", lightState);
    return (
      <>
        {Object.keys(lightState).map(light => {
          return (
            <Light
              color={lightState[light].state ? lightState[light].color : "off"}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className="root">
      <div className="app">
        <Pole>
          {renderLights()}
          <Timer duration={duration}/>
        </Pole>
        <div className="standWrapper">
          <div className="stand"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
