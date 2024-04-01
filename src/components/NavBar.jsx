function NavBar({ Albums, albumIndex, setAlbumIndex }) {
  const handleNextAlbum = () => {
    setAlbumIndex(albumIndex + 1);
    console.log(albumIndex);
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

export default NavBar;
