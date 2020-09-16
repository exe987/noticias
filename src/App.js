import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
function App() {
  //CATEGORIA Y NOTICIAS
  const[ categoria, saveCategoria] = useState('');

  const [noticias, saveNews] = useState([]);

  useEffect(()=>{
    const consultarApi = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=7e93fe1edf43447eb16013e24bb46f62`
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
        saveNews(noticias.articles);
      };
    consultarApi();
  }, [categoria])

  return (
    <Fragment>
      <Header 
      titulo="Buscador de Noticias" />
      <div className='container white'>
          <Formulario
          saveCategoria={saveCategoria}
          />
          <ListadoNoticias 
          noticias={noticias}
          />
      </div>
    </Fragment>
  );
}

export default App;
