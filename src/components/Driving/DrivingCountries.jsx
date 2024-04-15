import React, { useEffect, useState } from "react";
import countriesIcon from "./../../assets/Driving/countries-icon.png";
import { regions, globe } from "./../../data/driving-data";
import { Link } from "react-router-dom";

const DrivingCountries = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [selectedRegionCountries, setselectedRegionCountries] = useState(null);

  const onRegionChange = (region) => {
    console.log(selectedRegion);
    setSelectedRegion(region);
    setselectedRegionCountries(globe.find((data) => data.region === region));
  };

  useEffect(() => {
    setSelectedRegion(regions[0]);
    setselectedRegionCountries(
      globe.find((data) => data.region === regions[0])
    );
  }, []);
  return (
    <div className="bg-[#0E416D] p-4">
      <div className="flex gap-8 items-center py-4 pl-8">
        <img src={countriesIcon} className="self-start" />
        <div className="text-white">
          <h2 className="text-3xl">Countries</h2>
          <p>
            An overview of the countries of {selectedRegion}, select the country
            of which you want to learn the traffic rules!
          </p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-3 gap-4 py-4">
        {regions.map((region) => (
          <div
            className={`p-4 border border-slate-300 bg-white text-xl rounded-md hover:cursor-pointer ${
              region === selectedRegion ? "bg-[#245682] text-white" : ""
            }`}
            onClick={() => onRegionChange(region)}
          >
            <h2>{region}</h2>
          </div>
        ))}
      </div>

      {selectedRegionCountries && (
        <div className="bg-white w-full rounded-md p-4">
          <h2 className="text-3xl  mb-4">{selectedRegion}</h2>
          <hr />
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {selectedRegionCountries.countries.map((country) => (
              <Link to={`${country.name}`}>
                <div className="flex flex-col gap-2 items-center border-2 bg-slate-100 border-slate-200 p-4 group">
                  <h2 className="text-lg text-blue-800 group-hover:underline">
                    {country.name}
                  </h2>
                  <img
                    className="w-28 h-32 object-contain group-hover:scale-110 ease-in-out "
                    src={country.image}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DrivingCountries;
