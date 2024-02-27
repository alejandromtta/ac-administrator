"use client"
import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
export default function ContentTable({data, id}) {
        const [currentData, setCurrentData] = useState({name: '', document_number: ''})

     useEffect(() => {
       setCurrentData({id_local: data?.id_local, date: data?.date, level: data?.level, name_certificate: data?.name_certificate, company_name: data?.company_name, link: data?.link})
    }, [data])
    console.log(currentData)
  return (
    <>
    <div className="mb-5" data-testid="ssr">
    <h1 data-testid="ssr-title">ADMINISTRACION DE USUARIOS Y CERTIFICADOS /Editar</h1>
      <div data-testid="ssr-text">
        <p>
           Edicion de usuario, edite la informacion necesaria y presione el boton guardar.
        </p>
      </div>
    </div>
              <table className="justify-center w-full align-middle main">
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
<tbody  className="text-center">
     <tr>
     <td><a href="#">{data?.id}</a></td>
     <td><input type="text" name="id_local" value={currentData?.id_local} onChange={(e)=>{setCurrentData({...currentData, id_local: e.target.value})}}/></td>
     <td> <input type="text" name="level" value={currentData?.level} onChange={(e)=>{setCurrentData({...currentData, level: e.target.value})}}/></td>
     <td> <input type="text" name="date" value={currentData?.date} onChange={(e)=>{setCurrentData({...currentData, date: e.target.value})}}/></td>
     <td> <input type="text" name="name_certificate" value={currentData?.name_certificate} onChange={(e)=>{setCurrentData({...currentData, name_certificate: e.target.value})}}/></td>
     <td> <input type="text" name="company_name" value={currentData?.company_name} onChange={(e)=>{setCurrentData({...currentData, company_name: e.target.value})}}/></td>
     <td> <input type="text" name="link" value={currentData?.link} onChange={(e)=>{setCurrentData({...currentData, link: e.target.value})}}/></td>
     <td className="flex flex-col md:flex-row space-y-[18px] items-center justify-center align-middle text-red-400 md:space-y-0 md:space-x-[18px]">
         <button onClick={()=>axios({method: 'put', url:`https://ac-backend.vercel.app/api/certified/${id}`, data: currentData})}>Guardar</button>

     </td>
    
 </tr>
   
    </tbody>
</table>
</>
  )
}
