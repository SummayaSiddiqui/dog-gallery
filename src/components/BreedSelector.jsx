import React, { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery";

const BreedSelector = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);

  // Fetch the list of dog breeds
  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      const breedNames = Object.keys(data.message);
      setBreeds(breedNames);
    };

    fetchBreeds();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://dog.ceo/api/breed/${selectedBreed}/images/random/${numImages}`
    );
    const data = await response.json();
    setImages(data.message);
  };

  return (
    <div className="outlook">
      <p>
        Welcome to the Dog Image Gallery! Select a breed and the number of
        images you want to see.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="breed" className="color-label">
            Select Breed:{" "}
          </label>
          <select
            id="breed"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            required
            style={{
              color: "#006444",
              padding: "5px",
              border: "1px solid #006444",
              borderRadius: "4px",
              fontSize: "16px",
            }}>
            <option value="">--Select a Breed--</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="numImages" className="color-label">
            Number of Images:{" "}
          </label>
          <input
            type="number"
            id="numImages"
            value={numImages}
            onChange={(e) => setNumImages(e.target.value)}
            min="1"
            max="100"
            required
            style={{
              color: "#006444",
              padding: "5px",
              border: "1px solid #006444",
              borderRadius: "4px",
              fontSize: "16px",
            }}></input>
        </div>
        <button type="submit" className="btn">
          Fetch Images
        </button>
      </form>
      <ImageGallery images={images} numImages={numImages} />
    </div>
  );
};

export default BreedSelector;
