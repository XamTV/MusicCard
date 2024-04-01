function Card({ Albums }) {
  return (
    <>
      <figure>
        <img src={Albums.cover} alt={Albums.title} />
        <h1>{Albums.title} </h1>
        <h2>{Albums.artist} </h2>
        <h2>( {Albums.date} ) </h2>
        <h3>Rating</h3> <p>X X X X X</p>
      </figure>
    </>
  );
}

export default Card;
