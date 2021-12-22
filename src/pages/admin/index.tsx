import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { NihilAdminBlock } from '@/components/content/AdminBlock';

const AdminPage = () => {
  const AdminPageStyle = css({
    marginTop: '50px',

    '& input': {
      backgroundColor: '#33333330',
      borderRadius: '5px',
      border: 'none',
      lineHeight: '1',
      letterSpacing: '-1px',
      width: '100%',
      padding: '10px',
      color: '#333333',
      fontWeight: '500',
    },
  });

  const meta = useSiteMeta({
    title: '관리',
    url: '/admin',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='admin-page' css={AdminPageStyle}>
          <NihilAdminBlock />
        </div>
      </AppLayout>
    </>
  );
};

export default AdminPage;
