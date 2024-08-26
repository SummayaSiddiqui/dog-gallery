const ImageGallery = ({ images, numImages }) => {
  return (
    <div className="image-gallery">
      {images.slice(0, numImages).map((img, index) => (
        <img key={index} src={img} alt={`Dog ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
