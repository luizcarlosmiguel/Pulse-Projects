import styles from './Company.module.css'

function Company() {
  return (
    <section className={styles.company} >
        <h1>Pulse Projects</h1>
        <div className={styles.container}>
          <div className={styles.contIncont}>
            <b>
            <p>
              Empresa <p2>fictícia</p2> dedicada ao gerenciamento eficiente de projetos. Oferecemos serviços de planejamento, execução e monitoramento próprio para clientes de diversos setores. Criada exlusivamente a fins de estudos.
            </p>
            </b>
            <ul>
              <li>- Equipe especializada em metodologias ágeis e tradicionais.</li>
              <li>- Desenvolvimento de cronogramas e alocação de recursos.</li>
              <li>- Monitoramento de marcos e riscos.</li>
            </ul>
          </div>
        </div>
      </section>
  );
}

export default Company;
