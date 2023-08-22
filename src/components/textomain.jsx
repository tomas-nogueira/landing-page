import Style from './styles/textomain.module.css'

function Textomain(props){
  return (
    <div>
      <h1>Marceneiro não faz móveis.</h1>
      <h2>Realiza sonhos</h2>
      <div className={Style.divtext}>
        <p>"Transformamos sonhos em realidade: na nossa marcenaria, unimos a precisão dos móveis planejados à beleza única da movelaria artesanal."</p>
      </div>
    </div>
  )
}

export default Textomain
