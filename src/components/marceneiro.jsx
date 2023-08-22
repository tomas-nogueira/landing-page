import Imagem from './photos/marceneiro-removebg-preview 1.png'
import Style from './styles/marceneiro.module.css'

function Marceneiro(props){
  return (
    <div className={Style.img}>
      <img src={Imagem}alt=""/>
    </div>
  )
}

export default Marceneiro
