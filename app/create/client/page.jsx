import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import '../page.css';
import ContentTable from './components/content-table/ContentTable.jsx';

export default withPageAuthRequired(
  async function SSRPage() {
    return (
      <div className="w-[80%] overflow-x-scroll">
    <ContentTable/>
    </div>
    );
  },
  { returnTo: '/view' }
);
