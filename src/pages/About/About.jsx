import { Link } from "react-router-dom"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Life<span>Dev</span></h2>
      <p>Projeto criado para servir como base para a aprendizagem de React, no 3º semestre do curso de Desenvovimento de Software Multiplataforma da Fatec Matão - Luiz Marchesan. Desenvolvido pelo aluno Miguel Morandini.</p>
      <Link to="/posts/create" className="btn">Criar Post</Link>
    </div>
  )
}

export default About
