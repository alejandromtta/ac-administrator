import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import '../page.css';

export default withPageAuthRequired(
  async function SSRPage(route) {
    const { id } = route.params;
    const { data } = await axios.get(`https://ac-backend.vercel.app/api/client/${id}`);
    console.log(data);
    return (
      <>
        <div className="mb-5" data-testid="ssr">
          <h1 data-testid="ssr-title">ADMINISTRACION DE USUARIOS Y CERTIFICADOS /DETALLE</h1>
          <div data-testid="ssr-text">
            <p>
              Nombre: {data?.name}<br/>
              CC: {data?.document_number}
            </p>
          </div>
        </div>
        <table className="justify-center w-full overflow-hidden overflow-x-scroll align-middle main">
    <thead>
        <tr >
            <th>Id</th>
            <th>Id_local</th>
            <th>Nivel</th>
            <th>Fecha</th>
            <th>Certificado</th>
            <th>Empresa</th>
            <th>Link</th>
            <th>Accion</th>
        </tr>
    </thead>
    <tbody>
      {data?.certified?.map(item=> (
         <tr>
         <td><a href="#">{item?.id}</a></td>
         <td>{item?.id_local}</td>
         <td>{item?.level}</td>
         <td>{item?.date}</td>
         <td>{item?.name_certificate}</td>
         <td>{item?.company_name}</td>
         <td>N/A</td>
         <td className="flex flex-col md:flex-row space-y-[18px] items-center justify-center align-middle text-red-400 md:space-y-0 md:space-x-[18px]">
             <button>Eliminar</button>
             <button><Link href={`/edit-certified/${item?.id}`}>Editar</Link></button>
         </td>
     </tr>
      ))}
       
        </tbody>
    </table>
      </>
    );
  },
  { returnTo: '/ssr' }
);
