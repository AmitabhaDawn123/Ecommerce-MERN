import "./App.css"
import Header from "./components/Layout/Header.jsx"
import Footer from "./components/Layout/Footer.jsx"
import Home from "./components/Home.jsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
      
      <div className="container">
      <Routes>
<Route path="/" element={<Home/>}></Route>

</Routes>
      </div>

<Footer/>
     
      </div>

    </Router>




  );
}

export default App;
