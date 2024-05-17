import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function linkedin() {
  
  return window.open("https://www.linkedin.com/in/luiz-carlos-miguel-de-oliveira-4b4a00291", '_blank');

}


function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin onClick={linkedin} />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>PulseProjects</span> &copy; 2024
      </p>
    </footer>
  )

}



export default Footer
