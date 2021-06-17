import PropTypes from "prop-types";

function Books({ title, image, description, author, pubdate }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <h3>{author}</h3>
      <p>{description}</p>
      <p>{pubdate}</p>
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
