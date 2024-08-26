import React, { useState, useEffect } from "react";

const DogGallery = () => {
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
    <div>
      <p>
        Welcome to the Dog Image Gallery! Select a breed and the number of
        images you want to see.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="breed">Select Breed: </label>
          <select
            id="breed"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            required>
            <option value="">--Select a Breed--</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="numImages">Number of Images: </label>
          <input
            type="number"
            id="numImages"
            value={numImages}
            onChange={(e) => setNumImages(e.target.value)}
            min="1"
            max="10"
            required
          />
        </div>
        <button type="submit">Fetch Images</button>
      </form>
      <div className="image-gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Dog ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default DogGallery;
