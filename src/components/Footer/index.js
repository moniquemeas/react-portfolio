import {IconContext} from "react-icons";
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';


function Footer() {

    return (
<div className='i-cons my-1'>
    <IconContext.Provider value={{color: 'lightblue', size: 50}}>
        <a href="https://github.com/moniquemeas"  target="_blank">
    <FaGithub /></a>
    <a href="https://www.linkedin.com/in/monique-meas-512a8a62/" target="_blank">
    <FaLinkedin />
    </a>
    <a href="mailto:monique.meas@gmail.com">
    <FaRegEnvelope />
    </a>
    </IconContext.Provider>
</div>
    )
}


export default Footer;