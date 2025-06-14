import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; 2025 CareerConnect | Developed by Team CareerConnect using MERN Stack.</div>
<div>
  <Link to={'https://github.com/tiwariji3534'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://www.linkedin.com/in/chandan-tiwari-4635a617b '} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link to={'https://www.instagram.com/___tiwari__jii/?next=%2F'} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer