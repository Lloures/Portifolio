// src/components/ImagemAnimada.tsx
import { useEffect, useState } from "react";
import img1 from "/home/lloures/Documentos/Portifolio/Portifolio/my-project/src/assets/Frame 1.svg";
import img2 from "/home/lloures/Documentos/Portifolio/Portifolio/my-project/src/assets/Frame 2.svg";
import img3 from "/home/lloures/Documentos/Portifolio/Portifolio/my-project/src/assets/Frame 3.svg";
import img4 from "/home/lloures/Documentos/Portifolio/Portifolio/my-project/src/assets/Frame 4.svg";
import img5 from "/home/lloures/Documentos/Portifolio/Portifolio/my-project/src/assets/Frame 5.svg";

const imagens = [img1, img2, img3, img4, img5];

export default function ImagemAnimada() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <img
      src={imagens[index]}
      alt={`Frame ${index + 1}`}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
