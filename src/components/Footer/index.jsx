import "./Footer.css"

const Footer = () => {
    return   <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.aluracursos.com/" target="_blank" >
                <img src="/img/facebook.png" alt="Facebook"/>
            </a>
            <a href="https://www.aluracursos.com/" target="_blank" >
                <img src="/img/twitter.png" alt="Twitter"/>
            </a>
            <a href="https://www.aluracursos.com/" target="_blank">
                <img src="/img/instagram.png" alt="Instagram"/>
            </a>
        </div>
        <img src="/img/Logo.png" alt="Org" />
        <strong>Desarrollado por <br /> Julián Andrés Montes García</strong>
    </footer>
}

export default Footer