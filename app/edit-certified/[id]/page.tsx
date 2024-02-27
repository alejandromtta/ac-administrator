import React from 'react';
import axios from 'axios';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import './page.css';
import ContentTable from '../components/content-table/ContentTable.jsx';

export default withPageAuthRequired(
  async function SSRPage(route) {
    const { id } = route.params;
    const { data } = await axios.get(`https://ac-backend.vercel.app/api/certified/${id}`);
    return (
    <ContentTable data={data} id={id}/>
    );
  },
  { returnTo: '/view' }
);
