import PropTypes from "prop-types";

function Books({ title, image, description, author, pubdate }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </div>
  );
}
Books.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pubdate: PropTypes.string,
};
export default Books;
