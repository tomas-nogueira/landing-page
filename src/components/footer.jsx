import Style from './styles/footer.module.css'
import Imagem from './photos/🦆 icon _Facebook F_.png'
import Image from './photos/🦆 icon _Instagram_.png'
import Image2 from './photos/🦆 icon _What.png'


function Footer (props){
  return (
    <div>
      <footer>
        <span className={Style.marcenaria}>Marcenaria Gustavo Nogueira ©</span>
        <img src={Imagem} alt="" className={Style.img} />
        <img src={Image} alt="" className={Style.img}/>
        <img src={Image2} alt="" className={Style.img}/>
      </footer>
    </div>
  )
}

export default Footer
