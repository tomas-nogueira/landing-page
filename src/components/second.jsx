import Contate from './contate'
import Portifolio from './portifolio'
import Marceneiro from './marceneiro'
import Style from './styles/second.module.css'

function Second (props){
  return (
    <div className={Style.second}>
      <Contate/>
      <Portifolio/>
      <Marceneiro/>
    </div>
  )
}

export default Second
