import React from 'react';
import Menu from './components/Menu'

function App() {
  return (
    <div>
      <Menu/>

      <BannerMain
        videoTitle={dadosIniciais.categoria[0].videos[0].titulo}
        url={dadosIniciais.categoria[0].videos[0].url}
        videoDescription={"O que é Front-end trabalhando na area os termos HTML, CSS e JS fazem parte da rotina das desenvolvedoras e desenvolvedores, Mas o que eles fazem afinal descubra com a Vanessa "}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <footer />

    </div>
  );
}

export default App;