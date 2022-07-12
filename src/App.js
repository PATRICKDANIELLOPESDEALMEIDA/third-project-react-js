import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';


import './App.css';
import backgroundImage from './assets/background.png';

/**
 * // Conceitos importantes:
 * // Componente
 * // Propriedade
 * // Imutabilidade
 */


export default function App(){
  const [ usuario, setusuarios ] = useState([]);
  
  // useState retorna um array com 2 posicoes
  // 
  // 1. variavel com seu valor inicial 
  // 2. função para atualizacao deste valor 

  useEffect(() => {
    api.get('usuario').then(response => {
      setusuario(response.data);
    });
  }, []);

  async function addNewusuario() {
    const response = await api.post('usuarios', {
      nome: `Rubens Guimarães ${Date.now()}`,
      email: "rubens.guimaraes@ifrj.edu.com"
    });

    const usuario = response.data;

    console.log(usuario);

    setusuarios([...usuarios, usuario]); // spread operator
	
	// Logo abaixo, dentro do return temos o exemplo do fragment <>

  }

  return (
    <>
      <img width={200} src={backgroundImage} />
      <Header title="usuarios">
        <ul>
          {usuarios.map(usuario => <li key={usuario.id}>{usuario.title}</li>)}
        </ul>
      </Header>
      <button type="button" onClick={addNewusuario}>Adicionar Projeto</button>
    </>
  );
}