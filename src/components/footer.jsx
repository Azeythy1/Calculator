import React from 'react';
import versionData from '../../version.json'; // Ajuste o caminho conforme necessário

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Calculadora de Taxas - v{versionData.version}</p>
        <div className="version-tooltip">
          <span>ℹ️</span>
          <div className="changelog">
            <h4>Histórico de Alterações:</h4>
            <ul>
              {versionData.changelog.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;