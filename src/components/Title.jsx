import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="Title">
      <h1>{title}</h1>
    </div>
  );
};

Title.defaultProps = {
  title: "Dog Image Gallery",
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
