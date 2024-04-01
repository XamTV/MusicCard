import { PropTypes } from "prop-types";
import "../Card.scss";
import StarRating from "./StarRating";

function Card({ Albums }) {
  return (
    <>
      <figure className="container">
        <img className="image" src={Albums.cover} alt={Albums.title} />
        <figcaption className="infos">
          <h1>{Albums.title} </h1>
          <h2>{Albums.artist} </h2>
          <h2>( {Albums.date} ) </h2>
        </figcaption>
        <h3>Rating </h3> <StarRating />
      </figure>
    </>
  );
}

Card.propTypes = {
  Albums: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export default Card;
