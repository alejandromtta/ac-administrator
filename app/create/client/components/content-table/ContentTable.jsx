"use client"
import React from 'react'
import axios from 'axios';
import {useState} from 'react'
export default function ContentTable() {
        const [currentData, setCurrentData] = useState({name: '', document_number: ''})

  return (
    <>
    <div className="mb-5" data-testid="ssr">
    <h1 data-testid="ssr-title">ADMINISTRACION DE USUARIOS Y CERTIFICADOS /Crear</h1>
      <div data-testid="ssr-text">
        <p>
           Cree un usuario brindando la informacion basica y utilizando el boton crear.
        </p>
      </div>
    </div>
              <table className="justify-center w-full align-middle main">
<thead>
    <tr >
        <th>Nombres</th>
        <th>N. documento</th>
        <th>Accion</th>
    </tr>
</thead>
<tbody>
     <tr>
     <td><input type="text" name="name" value={currentData?.name} onChange={(e)=>{setCurrentData({...currentData, name: e.target.value})}}/></td>
     <td> <input type="text" name="document_number" value={currentData?.document_number} onChange={(e)=>{setCurrentData({...currentData, document_number: e.target.value})}}/></td>
     <td className="flex flex-col md:flex-row space-y-[18px] items-center justify-center align-middle text-red-400 md:space-y-0 md:space-x-[18px]">
         <button onClick={()=>axios({method: 'post', url:`https://ac-backend.vercel.app/api/client`, data: currentData})}>CREAR</button>

     </td>
    
 </tr>
   
    </tbody>
</table>
</>
  )
}
