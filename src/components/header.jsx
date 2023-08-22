import Logo from "./logo"
import Boxheader from "./boxheader"
import Style from "./styles/header.module.css"

function Header ( props ){
  return (
    <div>
        <header>
          <div className={Style.teste}>
            <Logo/><Boxheader/>
          </div>
        </header>
    </div>
  )
}

export default Header
