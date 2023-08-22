import Style from './styles/inputcontato.module.css'

function Inputcontato( props ){
  return (
    <div className={Style.coolinput}>
      <label for={props.name} className={Style.text}>{props.titulo}</label>
      <input type={props.type} placeholder={props.place} name={props.name}/>
    </div>
  )
}

export default Inputcontato
