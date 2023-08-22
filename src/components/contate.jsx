import Inputcontato from './inputcontato'
import Style from "./styles/contate.module.css"

function Contate (props){
  return (
    <div>
      <span>CONTATE-NOS</span>
        <Inputcontato type="text" placeholder="Name" name= "Name"/>
        <Inputcontato type="email" placeholder="Email" name="Email"/>
    </div>
  )
}

export default Contate
