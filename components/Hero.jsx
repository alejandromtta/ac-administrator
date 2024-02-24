import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <h1 className="mb-4" data-testid="hero-title">
      Sistema de Gestion y Administracion Base de Datos
    </h1>

    <p className="lead" data-testid="hero-lead">
        Desde esta plataforma podran ver, editar, eliminar y crear certificados y usuarios que se veran reflejados en <a href="https://www.acalturasyconfinados.com.co/validate-certified">acalturasyconfinados.com.co</a>.
    </p>
  </div>
);

export default Hero;
