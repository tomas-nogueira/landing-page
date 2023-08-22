import Style from "./styles/boxheader.module.css"

function Boxheader (props){
  return (
    <div className={Style.divmain}>
      <span>HOME</span>
      <span>SERVIÇOS</span>
      <span>SOBRE NÓS</span>
      <span className={Style.orcamento}>ORÇAMENTO</span>
    </div>
  )
}

export default Boxheader
