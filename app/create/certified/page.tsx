import React from 'react';
import axios from 'axios';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import './page.css';
import ContentTable from './components/content-table/ContentTable.jsx';

export default withPageAuthRequired(
  async function SSRPage() {
    const { data } = await axios.get(`https://ac-backend.vercel.app/api/client`);
    return (
      <div className="w-[80%] overflow-x-scroll">
    <ContentTable data={data} />
    </div>
    );
  },
  { returnTo: '/view' }
);
