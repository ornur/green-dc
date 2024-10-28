"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import locations from "@/app/data";
import React from "react";

export default function GMap() {
  // 48.0057902,66.9043114
  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const position = { lat: 48.0057902, lng: 66.9043114 };
  const KAZAKHSTAN_BOUNDS = {
    north: 53,
    south: 43,
    west: 50,
    east: 80,
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <h1 className="font-bold text-lg px-2 md:text-2xl lg:text-3xl my-12 text-center w-full">Data centres began to use &quot;green&quot; technology.</h1>
      <div className="container mx-auto mt-24 mb-48 aspect-square md:aspect-[16/7] md:px-32">
        <Map
          defaultZoom={6}
          defaultCenter={position}
          mapId={"wekrhwiuefhwe"}
          backgroundColor={"#000000"}
          zoomControl={false}
          gestureHandling={"greedy"}
          clickableIcons={true}
          disableDefaultUI={true}
          mapTypeId={"roadmap"}
          restriction={{
            latLngBounds: KAZAKHSTAN_BOUNDS,
            strictBounds: false,
          }}
        >
          {/* Map through the filtered data */}
          {locations.map((location) => (
            <React.Fragment key={location.key}>
              <AdvancedMarker
                title={location.key}
                position={{ lat: location.lat, lng: location.lng }}
                onClick={() => setActiveMarkerId(location.id)}
                className="hover:scale-125 transition-all duration-300 ease-in-out"
              />
              {/* Set marker and window for each fragment instance */}
              {/* Otherwise they just end up all opening or closing at once */}
              {activeMarkerId === location.id && (
                <InfoWindow
                  position={{ lat: location.lat, lng: location.lng }}
                  onCloseClick={() => setActiveMarkerId(null)}
                >
                  <div style={{ color: "black", backgroundColor: "white" }}>
                    <h1>{location.name}</h1>
                    <p>ID: {location.id}</p>
                  </div>
                </InfoWindow>
              )}
            </React.Fragment>
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}
