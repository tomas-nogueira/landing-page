import Inputcontato from './inputcontato'
import Style from "./styles/contate.module.css"

function Contate (props){
  return (
    <div className={Style.contact}>
      <span>CONTATE-NOS</span>
        <Inputcontato type="text" placeholder="Name" name= "Name" titulo="Name"/>
        <Inputcontato type="email" placeholder="Email" name="Email" titulo="Email"/>
        <Inputcontato type="tel" placeholder="tel" name="tel" titulo="Telefone"/>
    </div>
  )
}

export default Contate
