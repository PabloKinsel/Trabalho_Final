import React from 'react';
import './App.css';


const Vitor = new URL("./vitor.png", import.meta.url);
const Pablo = new URL("./pablo.jpg", import.meta.url);
const Alexandre = new URL("./Alexandre.jpg", import.meta.url);

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <div class="escolha"> 
        <p>3. Criar uma página para controlar uma lista de compras. 
            Consiste em um campo para adicionar itens na lista.
            com a possibilidade de editar, excluir e
            marcar que já pegou o item. </p>
      </div>

      <div class="card">
            <div class="imgBox">
            <img src={Pablo}/>
            </div>
            <div class="content">
                    <h2>Pablo Yuri</h2>
            </div>
            </div>

      <div class="card">
            <div class="imgBox">
            <img src={Vitor}/>
            </div>
            <div class="content">
                    <h2>Vitor Buss</h2>
            </div>
            </div>

      <div class="card">
            <div class="imgBox">
            <img src={Alexandre}/>
            </div>          
            <div class="content">
                    <h2>Alexandre</h2>
            </div>
            </div>

     
      </header>
    </div>
  );
}

export default App;
