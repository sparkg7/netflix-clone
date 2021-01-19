import React, {useEffect, useState} from 'react'
import './App.css';
import Loading from './components/loading/Loading';
import MainMovie from './components/mainMovie/MainMovie';
import Navbar from './components/navbar/Navbar'
import Row from './components/row/Row';
import requests from'./requests'

function App() {
  const [close, setClose] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setClose(true)
    }, 2000)
  })

  return (
    <div className="App">
      <Navbar/>
      <MainMovie fetchURL={requests.fetchNetflixOriginals} baseURL={requests.baseURL}/>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} baseURL={requests.baseURL}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} baseURL={requests.baseURL}/>
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} baseURL={requests.baseURL}/>
      <Row title="Action" fetchURL={requests.fetchActionMovies} baseURL={requests.baseURL}/>
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} baseURL={requests.baseURL}/>
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} baseURL={requests.baseURL}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} baseURL={requests.baseURL}/>
      {close ? null : <Loading />}
    </div>
  );
}

export default App;