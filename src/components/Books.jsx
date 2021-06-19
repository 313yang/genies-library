import PropTypes from "prop-types";
import {
  BookContent,
  GenresBookContent,
} from "../styles/components/BookContent";

function Books({ title, image, author }) {
  return (
    <BookContent>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </BookContent>
  );
}

export function GenresBook({ title, image }) {
  return (
    <GenresBookContent>
      <div>
        <img src={image} alt={title} />
      </div>
      <h1>{title}</h1>
    </GenresBookContent>
  );
}
Books.propTypes = {
  title: PropTypes.string,
  author: PropTypes.array,
  description: PropTypes.string,
  image: PropTypes.string,
};
export default Books;
