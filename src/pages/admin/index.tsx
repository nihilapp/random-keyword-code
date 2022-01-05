import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import {
  CharAdminBlock, NihilAdminBlock, OtherAdminBlock, RandomAdminBlock
} from '@/components/content/AdminBlock';

const AdminPage = () => {
  const AdminPageStyle = css`
    margin-top: 50px;

    & input {
      background-color: #33333330;
      color: #333333;
      border-radius: 5px;
      border: none;
      line-height: 1;
      letter-spacing: -1px;
      width: 100%;
      padding: 10px;
      font-weight: 500;
    }
  `;

  const meta = useSiteMeta({
    title: '관리',
    url: '/admin',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='admin-page' css={AdminPageStyle}>
          <NihilAdminBlock />
          <CharAdminBlock />
          <OtherAdminBlock />
          <RandomAdminBlock />
        </div>
      </AppLayout>
    </>
  );
};

export default AdminPage;
