class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 2.5rem 1rem;
          text-align: center;
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-links a {
          color: white;
          text-decoration: none;
          transition: opacity 0.3s;
        }
        .footer-links a:hover {
          opacity: 0.7;
        }
        .copyright {
          opacity: 0.7;
          font-size: 0.9rem;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="#">Termos de Serviço</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">FAQ</a>
            <a href="#">Patrocínios</a>
          </div>
          <div class="copyright">
            &copy; ${new Date().getFullYear()} Grafiti VerdeVermelho. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
