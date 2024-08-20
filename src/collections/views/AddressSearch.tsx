"use client";
import { useState } from "react";

const AddressSearch = () => {
  // const [value, setValue] = useField<string>({path})
  const [address, setAddress] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchAddress = async () => {
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${encodeURIComponent(address)}`;
      const response = await fetch(url);
      const data = await response.json();
      setResults(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch address.");
      console.error(err);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchAddress();
  };

  return (
    <div>
      <div onSubmit={handleSubmit}>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
        />
        <button type="submit">Search</button>
      </div>
      <div id="results">
        {error && <p style={{ color: "red" }}>{error}</p>}
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="results">
              {result.display_name}
              <br /> Lat: {result.lat} Lng: {result.lon}
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default AddressSearch;
