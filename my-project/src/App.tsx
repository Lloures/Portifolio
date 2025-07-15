import { useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import AnimatedBackground from "./components/AnimatedBackground";
import ImagemAnimada from "./components/ImagemAnimada";
import VideoComModal from "./components/VideoComModal";
import Competencias from "./components/Competencias";

import "./App.css";

import historia from './assets/historia.png';
import pillbox from './assets/pillbox.png';
import minhokiller from './assets/minhokiler.png';
import manaus from './assets/manaus.jpeg';
import bolsa from './assets/comprida.jpeg';
import logo from './assets/logo.png';
import logo1 from './assets/logo_rosa.png';
import logo2 from './assets/logo_ciano.png';
import logo3 from './assets/logo_azul.png';


import { motion } from "framer-motion"; 
import VideoModal from "./components/VideoComModal";

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
  const [scrollY, setScrollY] = useState(0);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [videoAtual, setVideoAtual] = useState<string | null>(null);
  const [menuAberto, setMenuAberto] = useState(false);
  const [carregando, setCarregando] = useState(true);

  const cores = ["#0097B0", "#0055A6", "#F1F1F1", "#030303", "#030303"];
  const logos = [logo1, logo2, logo3, logo, logo];

  const [transicaoFinalizando, setTransicaoFinalizando] = useState(false);
  const [index, setIndex] = useState(0);

  // 👇 ATIVA APENAS QUANDO CARREGAMENTO TERMINA
  useEffect(() => {
    if (!carregando) {
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
    }
  }, [carregando]); // 👈 importante: depende de carregando

useEffect(() => {
  const sequencia = [0, 1, 2, 3, 4];
  let contador = 0;

  const rodar = () => {
    if (contador < sequencia.length) {
      setIndex(sequencia[contador]);
      contador++;
      setTimeout(rodar, 500); // muda logo/cor a cada 0.5s
    } else {
      setCarregando(false); // 👈 corta direto sem fade
    }
  };

  rodar();
}, []);


  console.log("Carregando:", carregando);

  const abrirVideo = (url: string) => {
    setVideoAtual(url);
    setMostrarModal(true);
  };

  const fecharVideo = () => {
    setMostrarModal(false);
    setVideoAtual(null);
  };

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const isScrolled = scrollY > 100;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
return (
  <>
  {carregando ? (
  <div
    className={`tela-abertura ${transicaoFinalizando ? 'fadeout' : ''}`}
    style={{ backgroundColor: cores[index] }}
  >
    <img
      src={logos[index]}
      alt="Logo"
      className="logo-girando"
      style={{ transform: `rotate(${index * 90}deg)` }}
    />
  </div>
) : (
    <>
      
        <div style={{
        backgroundColor: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
      }} />
      <AnimatedBackground />       

      <div className="App">


       <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#habilidades">Competências</a></li>
        <li><a href="#experiencia">Pesquisa</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>

     <div className="navbar-responsiva">
        <button
          className={`menu-botao ${menuAberto ? 'ativo' : ''}`}
          onClick={alternarMenu}
        >
          MENU
        </button>

        {menuAberto && (
          <div className="menu-flutuante">
            <ul className="menu-lista-flutuante">
              <li><a href="#sobre" onClick={alternarMenu}>Sobre</a></li>
              <li><a href="#habilidades" onClick={alternarMenu}>Competências</a></li>
              <li><a href="#experiencia" onClick={alternarMenu}>Pesquisa</a></li>
              <li><a href="#projetos" onClick={alternarMenu}>Projetos</a></li>
              <li><a href="#contato" onClick={alternarMenu}>Contato</a></li>
            </ul>
          </div>
        )}
      </div>


      <section className={`Principal ${scrollY > 150 ? 'expandido' : ''}`} id="Principal">
        <div className="conteudo">
          <div className={`nome ${isScrolled ? 'nome-menor' : ''}`}>
            <p className="titulo">LUIZA LOURES</p>
            <p className="subtitulo">FRONTEND & PESQUISA</p>
          </div>


    <div className="descricao" id="sobre">
      <p>
        Movida pela paixão em criar interfaces que aliam estética e funcionalidade, mergulhei no universo do desenvolvimento 
        front-end e da pesquisa em interação humano-computador. Acredito no poder do design e da tecnologia para transformar experiências.
      </p>
      
      <p>
        Sou estudante de Ciência da Computação, entusiasta de inovação e tecnologia, com interesse especial em desenvolvimento 
        de software, UX design e pesquisa. Busco contribuir para projetos que gerem impacto positivo na sociedade por 
        meio de soluções criativas e acessíveis.
      </p>
    </div>
  </div>
</section>

    <div className="fundo">

      
        <section className="habilidades" id="habilidades">

             {/* Preferi o outro

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

              */}

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

        <section className="competencias  slide-in"> <Competencias /> </section>
        
        <section id="experiencia">
          <div className="pesquisa" > 
          <div className="pesquisa_descricao">
              <h2>Pesquisa</h2>
             <p>
              A iniciação científica, iniciada em fevereiro de 2024 na PUC Minas, integra-se às atividades do
                laboratório <strong>I'M SCIENCE</strong> na área de <strong>processamento e análise de imagens</strong>. 
                Este centro de pesquisa concentra-se em processamento de imagem digital, vídeo e áudio, indexação e recuperação multimídia, 
                e análise de conteúdo multimídia, com uma abordagem fundamental baseada em <strong>modelos de grafos</strong>.
              </p>

              <p style={{ marginTop: '-0.5rem' }}>
              No âmbito das diversas pesquisas desenvolvidas no laboratório, a atuação específica foi alocada para o projeto 
              de <strong>classificação de células suscetíveis ao câncer</strong>. As contribuições incluem o trabalho com 
              <strong>pré-processamento, aplicação de filtros de imagem e técnicas de segmentação</strong>,
                etapas cruciais para a análise aprofundada de imagens biológicas. Para a realização desta pesquisa, as 
                linguagens <strong>Python e C++</strong> são empregadas no desenvolvimento e implementação dos algoritmos.
              </p>
          </div>
          <div className="pesquisa_fotos">
            <div className="foto_principal slide-in">
              <ImagemAnimada />
              <div className="fotos_pequenas">
             <div className="foto-hover-wrapper">
              <img className="foto-hover-img" src={bolsa} alt="SIBGRAP_2025" />
              <div className="descricao-foto-hover">
                <h3>SIBGRAP_2025</h3>
              </div>
            </div>

            <div className="foto-hover-wrapper">
              <img className="foto-hover-img" src={manaus} alt="SIBGRAP_2025" />
              <div className="descricao-foto-hover">
                <h3>SIBGRAP_2025</h3>
              </div>
            </div>
          </div>
            </div>
          </div>
          </div>
        </section>


        <section className="Projetos slide-in" id="projetos">
            <p className="titulo-projetos">Projetos Curriculares</p>
            
             <div className="conteiner-video slide-in">
                <div className="video-wrapper">
                  <img className="imagem" src={historia} alt="Globo MGTV" />
                  <div className="titulo-video"><h3>Globo, MGTV _ 25/03/2025</h3></div>
                  <div className="descricao-video">
                    <h3 className="titulo-video_2">Globo, MGTV 25/03/2025</h3>
                    <p className="texto-video">Grupo de projeto convidado para falar sobre um aplicativo de ensinar história do Brasil.</p>
                    <button className="botao-play-wrapper" onClick={() => abrirVideo("https://www.youtube.com/embed/3XdXJm_bGHQ")}>
                      Ver projeto <i className="fas fa-caret-square-right"></i>
                    </button>
                  </div>
                </div>

                <div className="video-wrapper">
                  <img className="imagem" src={pillbox} alt="Pill Box" />
                  <div className="titulo-video"><h3>PILL BOX</h3></div>
                  <div className="descricao-video">
                    <h3 className="titulo-video_2">PILL BOX</h3>
                    <p className="texto-video">Porta remédios automatizado com aplicativo para ajudar idosos que moram sozinhos.</p>
                    <button className="botao-play-wrapper" onClick={() => abrirVideo("https://www.youtube.com/embed/mft5FnJulzM")}>
                      Ver projeto <i className="fas fa-caret-square-right"></i>
                    </button>
                  </div>
                </div>

                <div className="video-wrapper">
                  <img className="imagem" src={minhokiller} alt="Minhokiller" />
                  <div className="titulo-video"><h3>Prêmio de melhor jogo</h3></div>
                  <div className="descricao-video">
                    <h3 className="titulo-video_2">Prêmio de melhor jogo</h3>
                    <p className="texto-video">Trabalho interdisciplinar da faculdade cujo grupo ganhou como melhor trabalho.</p>
                    <button className="botao-play-wrapper" onClick={() => abrirVideo("https://www.youtube.com/embed/His-NcpzziE")}>
                      Ver projeto <i className="fas fa-caret-square-right"></i>
                    </button>
                  </div>
                </div>
              </div>

        </section>
    </div>
         <section className="contato" id="contato">
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
                  <div> <i className="fas fa-eye"></i>  <a href="/Luiza-Loures.pdf" target="_blank" rel="noopener noreferrer">Visualize como PDF</a> </div>
                </div>
            </div>
            <div className="linha"></div>
            <div className="linha_fim"><p>©2025 Luiza Loures.</p></div>
        </section>
      </div>
       {mostrarModal && videoAtual && (
        <VideoModal videoUrl={videoAtual} onClose={fecharVideo} />
      )}
       </>
    )}
  </>
);
}
