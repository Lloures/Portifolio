import React, { useState } from "react";

const competencias = [
  { nome: "Programação", descricao: "Lógica, Python, Java, C, C++." },
  { nome: "Front-end", descricao: "HTML, CSS, React, TypeScript." },
  { nome: "Mobile", descricao: "Desenvolvimento em Flutter (Dart)." },
  { nome: "UX & Design", descricao: "Design de interfaces, Figma, edição de vídeo." },
  { nome: "Gestão", descricao: "Liderança, Scrum, Kanban, Design thinking, metodologia ágil." },
  { nome: "Ferramentas", descricao: "GitHub, Linux, PowerPoint, Canvas." },
];

export default function Competencias() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [fixoIndex, setFixoIndex] = useState<number | null>(null);

  const mostrarIndex = hoverIndex !== null ? hoverIndex : fixoIndex;

  return (
    <div className="competencias-container">
      <div className="competencias-titulo">
        <h2>Competências</h2>
        <div className="descricao-wrapper">
          {mostrarIndex !== null ? (
            <p className="descricao visivel">{competencias[mostrarIndex].descricao}</p>
          ) : (
            <p className="descricao visivel">
              Passe o mouse sobre uma competência.
            </p>
          )}
        </div>
      </div>

      <ul className="competencias-lista">
        {competencias.map((item, i) => (
          <li
            key={i}
            className={
              i === (hoverIndex !== null ? hoverIndex : fixoIndex) ? "ativo" : ""
            }
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => setFixoIndex(i)}
            tabIndex={0}
            onFocus={() => setHoverIndex(i)}
            onBlur={() => setHoverIndex(null)}
          >
            {item.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}
