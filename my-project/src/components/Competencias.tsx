import React, { useState } from "react";

const competencias = [
  { nome: "Programação", descricao: "Habilidades em lógica, Python, Java, C, C++." },
  { nome: "Front-end", descricao: "Experiência com HTML, CSS, React, TypeScript." },
  { nome: "Mobile", descricao: "Desenvolvimento em Flutter e Dart." },
  { nome: "UX & Design", descricao: "Design de interfaces, Figma, edição de vídeo." },
  { nome: "Gestão", descricao: "Liderança, Scrum, métodos ágeis." },
  { nome: "Ferramentas", descricao: "Git, Linux, PowerPoint, Canvas." },
];

export default function Competencias() {
  const [ativoIndex, setAtivoIndex] = useState<number | null>(null);

  return (
    <div className="competencias-container">
      <div className="competencias-titulo">
        <h2>Competências</h2>
        <div className="descricao-wrapper">
          {competencias.map((item, i) => (
            <p
              key={i}
              className={`descricao ${ativoIndex === i ? "visivel" : ""}`}
            >
              {item.descricao}
            </p>
          ))}
          {ativoIndex === null && (
            <p className="descricao visivel">
              Passe o mouse sobre um item para ver a descrição.
            </p>
          )}
        </div>
      </div>

      <ul className="competencias-lista">
        {competencias.map((item, i) => (
          <li
            key={i}
            className={ativoIndex === i ? "ativo" : ""}
            onMouseEnter={() => setAtivoIndex(i)}
            onMouseLeave={() => setAtivoIndex(null)}
            tabIndex={0}
            onFocus={() => setAtivoIndex(i)}
            onBlur={() => setAtivoIndex(null)}
          >
            {item.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}
