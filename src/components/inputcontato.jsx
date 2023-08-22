import Style from './styles/inputcontato.module.css'

function Inputcontato( props ){
  return (
    <div>
      <label for={props.name}>{props.titulo}</label>
      <input type={props.type} placeholder={props.place} name={props.name}/>
    </div>
  )
}

export default Inputcontato
