import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "leaflet/dist/leaflet.css";

const fetchCountriesData = async () => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/countries");
  return data;
};

const CovidMap = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["countriesData"],
    queryFn: fetchCountriesData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="w-full h-screen">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="h-96 sm:h-[500px] md:h-[600px] lg:h-[700px] w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((country) => (
          <Marker
            key={country.countryInfo._id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div className="text-center">
                <strong className="text-lg">{country.country}</strong>
                <br />
                <img
                  src={country.countryInfo.flag}
                  alt={`Flag of ${country.country}`}
                  className="w-12 h-auto mx-auto my-2"
                />
                <strong>Active Cases:</strong> {country.active}
                <br />
                <strong>Recovered:</strong> {country.recovered}
                <br />
                <strong>Deaths:</strong> {country.deaths}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CovidMap;
