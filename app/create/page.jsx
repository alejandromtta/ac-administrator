import React from 'react';
import Link from 'next/link';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import './page.css';


export default withPageAuthRequired(
  async function SSRPage() {
    return (
      <div className="w-[80%] overflow-x-scroll">
        <div className="mb-5 " data-testid="ssr">
        <h1 data-testid="ssr-title">ADMINISTRACION DE USUARIOS Y CERTIFICADOS /Crear</h1>
          <div data-testid="ssr-text">
            <p>
               Desde esta pantalla podra crear clientes/estudiantes y certificados, recuerde que para crear un certificado debe haberse creado el cliente primero.
            </p>
          </div>
        </div>
                  <table className="justify-center w-full align-middle main">
    <thead>
        <tr >
            <th>Cliente</th>
            <th>Certificado</th>

        </tr>
    </thead>
    <tbody>
         <tr>
         <td className="flex flex-col md:flex-row space-y-[18px] items-center justify-center align-middle text-red-400 md:space-y-0 md:space-x-[18px]">
             <button><Link href={`create/client/`}>CREAR</Link></button>
         </td>
         <td>
         <button><Link href={`create/certified/`}>CREAR</Link></button>
         </td>
        
     </tr>
       
        </tbody>
    </table>
      </div>
    );
  },
  { returnTo: '/view' }
);
