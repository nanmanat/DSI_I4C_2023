import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, InfoBox } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};


type Props = {
  showLightGreenMarkers: boolean,
  showRedZoneMarkers: boolean,
  showOtherMarkers: boolean,
};

const GMap = (props: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBtyHrF0enGHiuCgnhiPHzJVXLQ7LUE_bs",
  });

  const [showInfo, setShowInfo] = React.useState(false);
  const [confidence, setConfidence] = React.useState(0);
  const [hoverText, setHoverText] = React.useState("");

  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = (event: any) => {
    setMouseCoordinates({
      x: event.clientX + 5,
      y: event.clientY,
    });
  }


  const position = [
    { lat: 13.818741, lng: 100.677109, color: "lightgreen", conf: 30, showInfo: false },
    { lat: 13.819079, lng: 100.678673, color: "lightgreen", conf: 40, showInfo: false },
    { lat: 13.820992, lng: 100.678673, color: "lightgreen", conf: 31, showInfo: false },
    { lat: 13.820992, lng: 100.68073, color: "lightgreen", conf: 27, showInfo: false },
    { lat: 13.823547, lng: 100.678024, color: "lightgreen", conf: 37, showInfo: false },
    { lat: 13.825417, lng: 100.675851, color: "lightgreen", conf: 21, showInfo: false },
    { lat: 13.827744, lng: 100.673463, color: "lightgreen", conf: 67, showInfo: false },
    { lat: 13.830044, lng: 100.673856, color: "lightgreen", conf: 10, showInfo: false },
    { lat: 13.828576, lng: 100.67458, color: "lightgreen", conf: 46, showInfo: false },
    { lat: 13.825721, lng: 100.675804, color: "lightgreen", conf: 34, showInfo: false },
    { lat: 13.824078, lng: 100.677751, color: "lightgreen", conf: 25, showInfo: false },
    { lat: 13.821487426758, lng: 100.68077087402, color: "lightgreen", conf: 56, showInfo: false },
    { lat: 13.819427, lng: 100.682831, color: "lightgreen", conf: 69, showInfo: false },
    { lat: 13.818221, lng: 100.683927, color: "lightgreen", conf: 89, showInfo: false },
    { lat: 13.816341, lng: 100.686012, color: "lightgreen", conf: 34, showInfo: false },
    { lat: 13.813522, lng: 100.689102, color: "lightgreen", conf: 25, showInfo: false },
    { lat: 13.812885, lng: 100.691208, color: "lightgreen", conf: 26, showInfo: false },
    { lat: 13.812851, lng: 100.694817, color: "lightgreen", conf: 28, showInfo: false },
    { lat: 13.812915, lng: 100.698437, color: "lightgreen", conf: 29, showInfo: false },
    { lat: 13.812915, lng: 100.698437, color: "lightgreen", conf: 46, showInfo: false },
    { lat: 13.812851, lng: 100.694817, color: "lightgreen", conf: 47, showInfo: false },
    { lat: 13.812885, lng: 100.691208, color: "lightgreen", conf: 43, showInfo: false },
    { lat: 13.813522, lng: 100.689102, color: "lightgreen", conf: 41, showInfo: false },
    { lat: 13.816341, lng: 100.686012, color: "lightgreen", conf: 75, showInfo: false },
    { lat: 13.818221, lng: 100.683927, color: "lightgreen", conf: 82, showInfo: false },
    { lat: 13.819427, lng: 100.682831, color: "lightgreen", conf: 32, showInfo: false },
    { lat: 13.819608, lng: 100.680193, color: "lightgreen", conf: 15, showInfo: false },
    { lat: 113.818740844727, lng: 100.67939758301, color: "lightgreen", conf: 17, showInfo: false },
    { lat: 13.818740844727, lng: 100.67939758301, color: "lightgreen", conf: 18, showInfo: false },
    { lat: 13.813814, lng: 100.69912, color: "yellow", conf: 90, showInfo: false },
    { lat: 13.818740844727, lng: 100.67939758301, color: "red", conf: 85, showInfo: false },
  ];

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
  }, [showInfo, props]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const handleOnMouseOver = (conf: number, color: string) => {
    setShowInfo(true);
    setConfidence(conf);
    if (color == "lightgreen") {
      setHoverText("Path");
    }
    else if (color == "yellow") {
      setHoverText("Warehouse");
    }
    else if (color == "red") {
      setHoverText("Home");
    }
  }

  const handleOnMouseOut = () => {
    setShowInfo(false);
    console.log('test');
    setConfidence(0);
  }

  const uniquePositions = Array.from(
    new Set(position.map((pos) => JSON.stringify(pos)))
  ).map((strPos) => JSON.parse(strPos));

  return (
    <div className="w-full h-[100vh]">
      {isLoaded ? (
        <GoogleMap
          zoom={15}
          center={{ lat: 13.818000844727, lng: 100.68539758301 }}
          mapContainerStyle={containerStyle}
        >
          {/* {position.map((position) => {
          return (
            <Marker
              icon={{
                fillColor: position.color,
                fillOpacity: 0.3,
                path: google.maps.SymbolPath.CIRCLE,
                scale: 50,
                strokeColor: position.color,
                strokeWeight: 0,
              }}
              position={{ lat: position.lat, lng: position.lng }}
            />
          );
        })} */}
          {uniquePositions.map((position) =>
            position.color === "lightgreen" && props.showLightGreenMarkers ? (
              <>

                <Marker
                  key={`${position.lat}-${position.lng}`}
                  icon={{
                    fillColor: position.color,
                    fillOpacity: 0.3,
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 50,
                    strokeColor: position.color,
                    strokeWeight: 0,
                  }}
                  position={{ lat: position.lat, lng: position.lng }}
                  onMouseOver={() => {
                    handleOnMouseOver(position.conf, position.color)
                  }}
                  onMouseOut={() => {
                    handleOnMouseOut();
                  }}
                >
                </Marker>
              </>

            ) : position.color === "red" && props.showRedZoneMarkers ? (
              <Marker
                key={`${position.lat}-${position.lng}`}
                icon={{
                  fillColor: position.color,
                  fillOpacity: 0.3,
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 50,
                  strokeColor: position.color,
                  strokeWeight: 0,
                }}
                position={{ lat: position.lat, lng: position.lng }} onMouseOver={() => {
                  handleOnMouseOver(position.conf, position.color)
                }}
                onMouseOut={() => {
                  handleOnMouseOut();
                }}
              />
            ) : position.color === "yellow" && props.showOtherMarkers ? (
              <Marker
                key={`${position.lat}-${position.lng}`}
                icon={{
                  fillColor: position.color,
                  fillOpacity: 0.3,
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 50,
                  strokeColor: position.color,
                  strokeWeight: 0,
                }}
                position={{ lat: position.lat, lng: position.lng }}
                onMouseOver={() => {
                  handleOnMouseOver(position.conf, position.color)
                }}
                onMouseOut={() => {
                  handleOnMouseOut();
                }}
              />
            ) : null
          )}

          {/* <Marker
            icon={{
              fillColor: "blue",
              fillOpacity: 0.3,
              path: google.maps.SymbolPath.CIRCLE,
              scale: 100,
              strokeColor: "white",
              strokeWeight: 2,
            }}
            position={{ lat: 13.818740844727, lng: 100.67939758301 }}
          />
          <Marker
            icon={{
              fillColor: "red",
              fillOpacity: 0.3,
              path: google.maps.SymbolPath.CIRCLE,
              scale: 250,
              strokeColor: "white",
              strokeWeight: 2,
            }}
            position={{ lat: 44.4, lng: -80.4 }}
          />
          <Marker
            icon={{
              fillColor: "yellow",
              fillOpacity: 0.3,
              path: google.maps.SymbolPath.CIRCLE,
              scale: 150,
              strokeColor: "white",
              strokeWeight: 2,
            }}
            position={{ lat: 44.2, lng: -79.3 }}
          /> */}
        </GoogleMap>
      ) : (
        <></>
      )}
      {showInfo ?
        (
          <div style={{ position: 'absolute', left: mouseCoordinates.x, top: mouseCoordinates.y, backgroundColor: "#fff" }}>
            <div className="h-full flex flex-col items-center gap-2 px-7">
              <h1 className="font-bold text-md">{hoverText}</h1>
              <h1 className="font-bold text-md">Confidence Level: {confidence}%</h1>
            </div>
          </div>
        ) : null}
    </div>
  );
};

export default GMap;
