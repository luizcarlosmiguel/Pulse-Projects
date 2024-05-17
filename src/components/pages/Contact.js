import styles from "./Contact.module.css"
import logoLinkedin from "../../img/linkedin.jpg"
import logoGitHub from "../../img/github.png"

function Contact() {
  return (
    <section className={styles.container}>
      <div onClick={toLinkedin} className={styles.linkedin}>
        <b>
          <h2>Linkedin</h2>
        </b>
       
        <img src={logoLinkedin} alt="LinkedIn" />
        
      </div>

      <hr/>

      <div onClick={toGithub} className={styles.github}>
        <b>
          <h2>GitHub</h2>
        </b>
        
        <img src={logoGitHub} alt="GitHub" />
        
      </div>
    </section>
  );
}

function toLinkedin (){

  return window.open("https://www.linkedin.com/in/luiz-carlos-miguel-de-oliveira-4b4a00291", '_blank');

}

function toGithub (){

  return window.open("https://github.com/luizcarlosmiguel", '_blank');

}

export default Contact;
