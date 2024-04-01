import { PropTypes } from "prop-types";

function NavBar({ Albums, albumIndex, setAlbumIndex }) {
  const handleNextAlbum = () => {
    setAlbumIndex(albumIndex + 1);
  };

  const handlePreviousAlbum = () => {
    setAlbumIndex(albumIndex - 1);
  };

  return (
    <>
      {" "}
      {albumIndex > 0 ? (
        <button onClick={handlePreviousAlbum}>Previous</button>
      ) : undefined}
      {albumIndex < Albums.length - 1 ? (
        <button onClick={handleNextAlbum}>Next</button>
      ) : undefined}
    </>
  );
}

NavBar.propTypes = {
  albumIndex: PropTypes.number.isRequired,
  Albums: PropTypes.array.isRequired,
  setAlbumIndex: PropTypes.func.isRequired,
};

export default NavBar;
