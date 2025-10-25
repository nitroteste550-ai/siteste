class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logo { 
          color: white; 
          font-weight: bold; 
          font-size: 1.5rem;
          background: linear-gradient(to right, #ef4444, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        ul { 
          display: flex; 
          gap: 1.5rem; 
          list-style: none; 
          margin: 0; 
          padding: 0; 
        }
        a { 
          color: white; 
          text-decoration: none; 
          transition: all 0.3s;
          font-weight: 500;
          position: relative;
        }
        a:hover { 
          opacity: 0.8;
        }
        a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #ef4444, #22c55e);
          transition: width 0.3s;
        }
        a:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            gap: 1rem;
          }
          ul {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      </style>
      <nav>
        <div class="logo">GRAFITI VR</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/galeria.html">Galeria</a></li>
          <li><a href="/artistas.html">Artistas</a></li>
          <li><a href="/contato.html">Contato</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
