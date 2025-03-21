import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
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

