import React from 'react'
import styles from './Home.module.css'
import Cabecalho from '../layout/Cabecalho'
import TabelaAulas from '../tabelaAulas/TabelaAulas'
function Home() {
  return (
    <>
    <Cabecalho/>
    <TabelaAulas/>
    </>
  )
}

export default Home;
