import Style from './styles/textomain.module.css'

function Textomain(props){
  return (
    <div className={Style.textop}>
      <div>
        <h1>Marceneiro não faz móveis.</h1>
        <h2>Realiza<span className={Style.sonhos}>SONHOS</span></h2>
      </div>
      <div className={Style.divtext}>
        <p>"Transformamos sonhos em realidade: na nossa marcenaria,</p>
        <p>unimos a precisão dos móveis planejados à beleza única da</p>
        <p>movelaria artesanal."</p>
      </div>
    </div>
  )
}

export default Textomain
