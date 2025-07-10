import { useState, useEffect } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import "./App.css";
import minhaImagem from './assets/cel.jpeg';
import { motion } from "framer-motion"; 


function useSlideInOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".slide-in");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
}



export default function App() {
  useSlideInOnScroll();
  const [scrollY, setScrollY] = useState(0);

  const isScrolled = scrollY > 100;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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
      <section className={`Principal ${scrollY > 150 ? 'expandido' : ''}`} id="Principal">
  <div className="conteudo">
    <div className={`nome ${isScrolled ? 'nome-menor' : ''}`}>
      <p className="titulo">LUIZA LOURES</p>
      <p className="subtitulo">FRONTEND & PESQUISA</p>
    </div>


    <div className="descricao">
      <p>
        A paixão por criar interfaces que combinam beleza e funcionalidade me levou a explorar o mundo do desenvolvimento 
        front-end e a pesquisar novas formas de interação humano-computador.
      </p>
      
      <p>
        Estudante de Ciência da Computação, entusiasta de tecnologia e inovação, com interesse em desenvolvimento de software, UX design e
        pesquisa. Buscando contribuir para projetos que impactam positivamente a sociedade por
        meio da tecnologia.
      </p>
    </div>
  </div>
</section>

    <div className="fundo">

        <section className="habilidades">

            <div className="habilidade-card slide-in">
              <div className="card-icon-wrapper">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="card-title">PROGRAMAÇÃO</h3>
              <ul className="card-tech-list">
                <li>Lógica, Python, Java, C, C++</li>
              </ul>
            </div>

            <div
              className="habilidade-card slide-in">
                <div className="card-icon-wrapper">
                    <i className="fas fa-laptop-code"></i> </div>
                <h3 className="card-title">FRONT-END</h3>
                <ul className="card-tech-list">
                    <li>TML/CSS, React, Typesscript</li>
                </ul>
            </div>

           <div className="habilidade-card slide-in">
                <div className="card-icon-wrapper">
                    <i className="fas fa-mobile-alt"></i> </div>
                <h3 className="card-title">MOBILE</h3>
                <ul className="card-tech-list">
                    <li>Flutter (Dart)</li>
                </ul>
            </div>

            <div className="habilidade-card slide-in">
                <div className="card-icon-wrapper">
                    <i className="fas fa-palette"></i> </div>
                <h3 className="card-title">UX & DESIGN</h3>
                <ul className="card-tech-list">
                    <li>UX e UI, Edição de Vídeo, Figma</li>
                </ul>
            </div>

            <div className="habilidade-card slide-in">
                <div className="card-icon-wrapper">
                    <i className="fas fa-chart-line"></i> </div>
                <h3 className="card-title">GESTÃO</h3>
                <ul className="card-tech-list">
                    <li>Métodos Ágeis, Liderança, Gestão, Scrum </li>
                </ul>
            </div>

            <div className="habilidade-card slide-in">
                <div className="card-icon-wrapper">
                    <i className="fas fa-tools"></i> </div>
                <h3 className="card-title">FERRAMENTAS</h3>
                <ul className="card-tech-list">
                    <li>Power Point, Canvas, Git, Linux</li>
                </ul>
            </div>

            <div className="cursos slide-in">
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

        <section className="Projetos" id="Projetos">
            <p className="titulo-projetos">Projetos</p>
            
            <div className="conteiner-video">
                <div className="video-wrapper">
                    <img className="imagem" src={minhaImagem} alt="Globo MGTV" />
                    <div className="titulo-video"><h3>Globo, MGTV _ 25/03/2025</h3></div>

                    <div className="descricao-video">
                      <h3 className="titulo-video_2">Globo, MGTV _ 25/03/2025</h3>
                      <p className="texto-video">Grupo de projeto convidado para falar sobre um aplicativo de ensinar historia do brasil.</p>
                      <button className="botao-play-wrapper">
                        <span>Ver projeto</span>
                        <i className="fas fa-caret-square-right"></i>
                      </button>
                    </div>
                </div>

              
              <div className="video-wrapper">
                  <img className="imagem" src={minhaImagem} alt="Globo MGTV" />
                  <div  className="titulo-video"><h3>PILL BOX</h3></div>
                  <div className="descricao-video">
                    <h3 className="titulo-video_2">PILL BOX</h3>
                    <p className="texto-video">Porta remedios automatizado com aplicativo para ajudar idosos que moram sozinhos, versão beta.</p>
                    <button className="botao-play-wrapper" >
                        <span>Ver projeto</span>
                        <i className="fas fa-caret-square-right"></i>
                      </button>
                  </div>
              </div>
              
              
              <div className="video-wrapper">
                <img className="imagem" src={minhaImagem} alt="Globo MGTV" />
                  <div  className="titulo-video"><h3>Premio de melhor jogo</h3></div>
                  <div className="descricao-video">
                    <h3 className="titulo-video_2">Premio de melhor jogo</h3>
                    <p className="texto-video">Trabalho interdiciplinar da faculdade para fazer um jogo, cujo meu grupo ganhou de melhor trabalho</p>
                    <button className="botao-play-wrapper">
                        <span>Ver projeto</span>
                        <i className="fas fa-caret-square-right"></i>
                      </button>
                  </div>
              </div>

            </div>

        </section>
    </div>
         <section className="contato">
           <div className="lugar">
                <div> <i className="fas fa-globe"></i> <p>Belo Horizonte, Brasil</p> </div>
            </div>
            <div className="colunas">
                <div className="contatos">
                  <h3 className="card-title">Contato</h3>
                    <div> <i className="fas fa-phone"></i> <a href="tel:+5531985338564">(31) 98533-8564</a> </div>
                    <div><i className="fas fa-envelope"></i> <a href="mailto:louresluiza6776@gmail.com">louresluiza6776@gmail.com</a></div>
                    <div> <i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/luiza-loures-70137b324" target="_blank" rel="noopener noreferrer">
      linkedin.com/in/luiza-loures-70137b324
    </a> </div>
                </div>
                <div className="curiculo">
                <h3 className="card-title">Curiculo</h3>
                  <div> <i className="fas fa-eye"></i>  <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">Visualize como PDF</a> </div>
                </div>
            </div>
            <div className="linha"></div>
            <div className="linha_fim"><p>©2025 Luiza Loures.</p></div>
        </section>
      </div>
    </>
  );
}
