import React, { useEffect, useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import "./App.css";
import minhaImagem from './assets/cel.jpeg';
import { motion } from "framer-motion";



export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 100;

  return (
    <>
      <AnimatedBackground />

      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <div className="App">
        
        <div>
          <p className="titulo-principal">LUIZA LOURES</p>
          <p className="subtitulo">FRONTEND & PESQUISA</p>
        </div>

        <section className="descricao-completa" id="sobre">
          
          <p>A paixão por criar interfaces que combinam beleza e funcionalidade me levou a explorar o mundo do desenvolvimento 
            front-end e a pesquisar novas formas de interação humano-computador.</p>
          
          <p>Estudante de Ciência da Computação, entusiasta de
                tecnologia e inovação, com interesse em desenvolvimento de software, UX design e
                pesquisa. Buscando contribuir para projetos que impactam positivamente a sociedade por
                meio da tecnologia.
          </p>
        </section>
        <section className="habilidades">

            <div className="habilidade-card">
                <div className="card-icon-wrapper">
                    <i className="fas fa-code"></i> </div>
                <h3 className="card-title">PROGRAMAÇÃO</h3>
                <ul className="card-tech-list">
                    <li>Lógica, Python, Java, C, C++</li>
                </ul>
            </div>
            <div className="habilidade-card">
                <div className="card-icon-wrapper">
                    <i className="fas fa-laptop-code"></i> </div>
                <h3 className="card-title">FRONT-END</h3>
                <ul className="card-tech-list">
                    <li>TML/CSS, React, Typesscript</li>
                </ul>
            </div>

            <div className="habilidade-card">
                <div className="card-icon-wrapper">
                    <i className="fas fa-mobile-alt"></i> </div>
                <h3 className="card-title">MOBILE</h3>
                <ul className="card-tech-list">
                    <li>Flutter (Dart)</li>
                </ul>
            </div>

            <div className="habilidade-card ">
                <div className="card-icon-wrapper">
                    <i className="fas fa-palette"></i> </div>
                <h3 className="card-title">UX & DESIGN</h3>
                <ul className="card-tech-list">
                    <li>UX e UI, Edição de Vídeo, Figma</li>
                </ul>
            </div>

            <div className="habilidade-card ">
                <div className="card-icon-wrapper">
                    <i className="fas fa-chart-line"></i> </div>
                <h3 className="card-title">GESTÃO</h3>
                <ul className="card-tech-list">
                    <li>Métodos Ágeis, Liderança, Gestão, Scrum </li>
                </ul>
            </div>

            <div className="habilidade-card ">
                <div className="card-icon-wrapper">
                    <i className="fas fa-tools"></i> </div>
                <h3 className="card-title">FERRAMENTAS</h3>
                <ul className="card-tech-list">
                    <li>Power Point, Canvas, Git, Linux</li>
                </ul>
            </div>

            <div className="cursos">
                <div>
                  <p className="subtitulo_2">CURSO: Acessibilidade Web</p>
                  <p className="descricao_2">Aprendido como criar aplicações web incluisvas para pessoas cegas ou 
                    com algum problema de visão e problemas intelectuiais</p>
                </div>
                <div>
                  <p className="subtitulo_2">CURSO: Learn Graphic Design in Projects</p>
                  <p className="descricao_2">Como utilizar conhecimentos de deing grafico para criação de projetos web, como teoria das cores</p>
                </div>
            </div>

        </section>
        <section className="pesquisa">
            <div>

            </div>
            <div>
              <img src={minhaImagem} alt="Descrição da imagem" />
            </div>
        </section>
         <section className="contato">
          <div style={{height: "1000px"}}> </div>
        </section>
      </div>
    </>
  );
}
