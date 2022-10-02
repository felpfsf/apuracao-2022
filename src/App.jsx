import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [candidatos, setCandidatos] = useState([])

  const API = 'https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json'

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setCandidatos(data.cand))
  }, [])


  return (
    <div className="App">
      <h1 className='header'>ELEIÇÕES 2022 <br /><br /> Apuração</h1>
      <table>
        <thead>
          <tr>
            <th>Candidatos</th>
            <th>Votos válidos</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {candidatos.map((candidato, key) => (
            <tr key={key} className='tr__candidato'>
              <td className='tr__cadidato__nome'>{candidato.nm}</td>
              <td className='td__cadidato__vt'>{candidato.vap}</td>
              <td className='td__cadidato__vt'>{candidato.pvap}%</td>
            </tr>
          ))}
          {/* <tr className='tr__candidato'>
            <td className='tr__cadidato__nome'>{candidatos[0].nm}</td>
            <td className='td__cadidato__vt'>{candidatos[0].vap}</td>
            <td className='td__cadidato__vt'>{candidatos[0].pvap}</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default App
