import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> React Weather App </h1>
        <button className="btn btn-primary">Test Button</button>
        <footer>
        This project was created by
          <a href="https://lau-carrillo.netlify.app/"> Lau Carrillo</a>
        and is 
          <a href="https://github.com/LauCarrillo21/react-app"> open-sourced on Github </a>
        </footer>
      </div>
    </div>
  );
}

