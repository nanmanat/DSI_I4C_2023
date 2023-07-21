import React from 'react'
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100%",
};

type Props = {}

const GMap = (props: Props) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBtyHrF0enGHiuCgnhiPHzJVXLQ7LUE_bs",
    });

    if (!isLoaded) {
        return <div>Loading...</div>
    }
    const position = [
        { lat: 13.818740844727, lng: 100.67939758301, color: "red" },
        { lat: 13.818741, lng: 100.677109, color: "lightgreen" },
        { lat: 13.819079, lng: 100.678673, color: "lightgreen" },
        { lat: 13.820992, lng: 100.678673, color: "lightgreen" },
        { lat: 13.820992, lng: 100.68073, color: "lightgreen" },
        { lat: 13.823547, lng: 100.678024, color: "lightgreen" },
        { lat: 13.825417, lng: 100.675851, color: "lightgreen" },
        { lat: 13.827744, lng: 100.673463, color: "lightgreen" },
        { lat: 13.830044, lng: 100.673856, color: "lightgreen" },
        { lat: 13.828576, lng: 100.67458, color: "lightgreen" },
        { lat: 13.825721, lng: 100.675804, color: "lightgreen" },
        { lat: 13.824078, lng: 100.677751, color: "lightgreen" },
        { lat: 13.821487426758, lng: 100.68077087402, color: "lightgreen" },
        { lat: 13.819427, lng: 100.682831, color: "lightgreen" },
        { lat: 13.818221, lng: 100.683927, color: "lightgreen" },
        { lat: 13.816341, lng: 100.686012, color: "lightgreen" },
        { lat: 13.813522, lng: 100.689102, color: "lightgreen" },
        { lat: 13.812885, lng: 100.691208, color: "lightgreen" },
        { lat: 13.812851, lng: 100.694817, color: "lightgreen" },
        { lat: 13.812915, lng: 100.698437, color: "lightgreen" },
        { lat: 13.813814, lng: 100.69912, color: "yellow" },
        { lat: 13.812915, lng: 100.698437, color: "lightgreen" },
        { lat: 13.812851, lng: 100.694817, color: "lightgreen" },
        { lat: 13.812885, lng: 100.691208, color: "lightgreen" },
        { lat: 13.813522, lng: 100.689102, color: "lightgreen" },
        { lat: 13.816341, lng: 100.686012, color: "lightgreen" },
        { lat: 13.818221, lng: 100.683927, color: "lightgreen" },
        { lat: 13.819427, lng: 100.682831, color: "lightgreen" },
        { lat: 13.818740844727, lng: 13.818740844727, color: "red" },
        { lat: 13.819608, lng: 100.680193, color: "lightgreen" },
        { lat: 113.818740844727, lng: 100.67939758301, color: "lightgreen" },
        { lat: 13.818740844727, lng: 100.67939758301, color: "lightgreen" },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
        // { lat: 1, lng: 1 },
    ]

    return (
        <div className='w-full h-[100vh]'>
            <GoogleMap
                zoom={15}
                center={{ lat: 13.818740844727, lng: 100.67939758301 }}
                mapContainerStyle={containerStyle}
            >
                {position.map(position => {
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
                    )
                })}
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
        </div>
    )
}

export default GMap