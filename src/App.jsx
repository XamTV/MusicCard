import { useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

function App() {
  const [albumIndex, setAlbumIndex] = useState(0);

  const Albums = [
    {
      cover:
        "https://www.rocknfolk.com/wp-content/uploads/2021/11/Queen-Bohemian-Rhapsody.jpg",
      title: "Bohemian Rhapsody",
      artist: "Queen",
      date: "1975",
    },
    {
      cover:
        "https://m.media-amazon.com/images/I/816dZ6Fg1cL._UF1000,1000_QL80_.jpg",
      title: "Boogie Wonderland",
      artist: "Earth, Wind & Fire",
      date: " 1979",
    },
    {
      cover:
        "https://m.media-amazon.com/images/I/61VbxoIERKL._UF1000,1000_QL80_.jpg",
      title: "Never gonna give you up",
      artist: "Rick Astley",
      date: " 1987",
    },
  ];

  return (
    <>
      <NavBar
        albumIndex={albumIndex}
        setAlbumIndex={setAlbumIndex}
        Albums={Albums}
      />
      <Card Albums={Albums[albumIndex]} />
    </>
  );
}

export default App;
