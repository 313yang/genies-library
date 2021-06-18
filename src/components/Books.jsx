import PropTypes from "prop-types";
import { BookContent } from "../styles/components/BookContent";

function Books({ title, image, author }) {
  return (
    <BookContent>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </BookContent>
  );
}
Books.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
export default Books;
