import React from 'react';
import './App.css';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}

const mapContainerStyle = {
  height: "400px",
  width: "800px"
}

const center = {
  lat: 41.8781,
  lng: -87.6298
}

const position = {
  lat: 42.3314,
  lng: -83.0458
}

const onLoad = marker => {
  console.log('marker: ', marker)
}


function App() {
  return (
    <LoadScript

      googleMapsApiKey="AIzaSyATfEsiaXANDiCDpRBtADkL0IRMS2d29K4"
    >
      <GoogleMap
          id="marker-example"
          mapContainerStyle={mapContainerStyle}
          zoom={5}
          center={center}
      >
        <Marker
            onLoad={onLoad}
            position={position}
        />

        <InfoWindow

            position={position}
        >
          <div style={divStyle}>
            <h1>InfoWindow</h1>
          </div>
        </InfoWindow>

      </GoogleMap>
    </LoadScript>
  );
}

export default App;
