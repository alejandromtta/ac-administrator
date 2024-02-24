"use client"
import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
export default function ContentTable({data, id}) {
        const [currentData, setCurrentData] = useState({name: '', document_number: ''})

     useEffect(() => {
       setCurrentData({name: data?.name, document_number: data?.document_number})
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
        <th>id</th>
        <th>Nombres</th>
        <th>N. documento</th>
        <th>certificados</th>
        <th>Accion</th>
    </tr>
</thead>
<tbody>
     <tr>
     <td><a href="#">{data?.id}</a></td>
     <td><input type="text" name="name" value={currentData?.name} onChange={(e)=>{setCurrentData({...currentData, name: e.target.value})}}/></td>
     <td> <input type="text" name="document_number" value={currentData?.document_number} onChange={(e)=>{setCurrentData({...currentData, document_number: e.target.value})}}/></td>
     <td>{data?.certified.length}</td>
     <td className="flex flex-col md:flex-row space-y-[18px] items-center justify-center align-middle text-red-400 md:space-y-0 md:space-x-[18px]">
         <button onClick={()=>axios({method: 'put', url:`https://ac-backend.vercel.app/api/client/${id}`, data: currentData})}>Guardar</button>

     </td>
    
 </tr>
   
    </tbody>
</table>
</>
  )
}
