import './App.css';


const Vitor = new URL("./vitor.png", import.meta.url);
const Pablo = new URL("./pablo.jpg", import.meta.url);
//const Alexandre = new URL("./.jpg", import.meta.url);

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
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
            <img src={Vitor}/> // colocar imgaem Alexandre;
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
