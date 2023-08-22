import Style from "./styles/boxheader.module.css"

function Boxheader (props){
  return (
    <div className={Style.divmain}>
      <span>HOME</span>
      <span>SERVIÇOS</span>
      <span>SOBRE NÓS</span>
    </div>
  )
}

export default Boxheader
