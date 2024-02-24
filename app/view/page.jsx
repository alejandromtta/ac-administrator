import React from 'react';
import axios from 'axios';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import './page.css';
import Link from 'next/link';

export default withPageAuthRequired(
  async function SSRPage() {
    const {data} = await axios.get('https://ac-backend.vercel.app/api/client/') || {};
    return (
      <>
        <div className="mb-5" data-testid="ssr">
        <h1 data-testid="ssr-title">ADMINISTRACION DE USUARIOS Y CERTIFICADOS /VER</h1>
          <div data-testid="ssr-text">
            <p>
               Desde esta pantalla podra visualizar los usuarios registrados en la base de datos asi como sus certificados asociados.
            </p>
          </div>
        </div>
                  <table className="justify-center w-full align-middle main">
    <thead>
        <tr >
            <th>id</th>
            <th>Nombres</th>
            <th>N. documento</th>
            <th>certificados</th>
            <th>Accion</th>
        </tr>
    </thead>
    <tbody>
      {data?.map(item=> (
         <tr>
         <td><a href="#">{item?.id}</a></td>
         <td>{item?.name}</td>
         <td>{item?.document_number}</td>
         <td>{item?.certified.length}</td>
         <td className="flex flex-col md:flex-row space-y-[18px] items-center justify-center align-middle text-red-400 md:space-y-0 md:space-x-[18px]">
             <button>Eliminar</button>
             <button><Link href={`edit/${item?.document_number}`}>Editar</Link></button>
             <button><Link href={`view/${item?.document_number}`}>Detalles</Link></button>
         </td>
        
     </tr>
      ))}
       
        </tbody>
    </table>
      </>
    );
  },
  { returnTo: '/view' }
);
