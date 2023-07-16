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
    return (
        <div className='w-full h-[100vh]'>
            <GoogleMap
                zoom={10}
                center={{ lat: 44, lng: -80 }}
                mapContainerStyle={containerStyle}
            >
                <Marker
                    icon={{
                        fillColor: "blue",
                        fillOpacity: 0.3,
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 200,
                        strokeColor: "white",
                        strokeWeight: 2,
                    }}
                    position={{ lat: 44, lng: -80 }}
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
                />
            </GoogleMap>
        </div>
    )
}

export default GMap