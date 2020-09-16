import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from 'prop-types';
const Formulario = ({saveCategoria}) => {
  const OPCIONES = [
      {value:'general', label:'General'},
      {value:'business', label:'Negocios'},
      {value:'entertainment', label:'Entretenimiento'},
      {value:'health', label:'Salud'},
      {value:'science', label:'Ciencia'},
      {value:'sports', label:'Deportes'},
      {value:'technology', label:'Tecnologia'}
  ];
  //CUSTOM HOOKS
  const [categoria, SelectNews] = useSelect('general', OPCIONES);

  //SUBMIT FORM
  const findNews = e =>{
      e.preventDefault();
        saveCategoria(categoria);
  }

  return (
    <div className={`row ${styles.buscador}`}>
      <div className="col s12 m8 offset-m2">
        <form
        onSubmit={findNews}
        >
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
          <SelectNews />
          <div className="input-field col s12">
            <input
              className={`${styles.btn_block} btn-large amber darken-2`}
              type="submit"
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  saveCategoria: PropTypes.func.isRequired
  
};

export default Formulario;
