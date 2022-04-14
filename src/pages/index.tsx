import React from 'react';
import { v4 as uuid } from 'uuid';
import { css } from '@emotion/react';
import { RiContactsBookFill } from 'react-icons/ri';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import {
  Box, BoxHeader, ExternalLink, GoogleAd, LinkBox, P
} from '@/components/content';
import { pathList } from '@/data/path.data';

const IndexPage = () => {
  const filteredPathList = pathList
    .filter((item) => item.label !== '홈')
    .filter((item) => item.label !== '니힐 전용');

  const indexPageStyle = css`
    margin-top: 50px;
  `;

  const meta = useSiteMeta({
    title: '홈',
    url: '/',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='index-page' css={indexPageStyle}>
          <Box mb={30}>
            <P mt={0} align='justify'>지금 보고 계신 랜덤 키워드 사이트는 창작자분들을 대상으로 만들어졌습니다. 그림쟁이 분들이나 글쟁이 분들이 보다 편하고 쉽게 영감을 찾을 수 있도록 도와주는 사이트입니다. 본래는 제가 사용하려고 시작한 프로젝트지만 저만 사용하기에는 아까워 이렇게 공개하고 있습니다.</P>

            <P align='justify'>사용법은 간단합니다. 아래의 링크 혹은 상단의 메뉴 중에서 원하는 페이지로 들어가 버튼만 클릭하면 됩니다. 버튼 하나를 클릭하는 것으로 무작위 키워드를 얻을 수 있습니다. 여러가지 테마가 준비되어 있고 앞으로도 계속 추가될 예정입니다. 니힐 전용은 제가 사용하기 위해 만들어둔 페이지입니다.</P>

            <P mb={0} align='justify'><strong>주의사항: 모든 결과는 랜덤이기 때문에 키워드들이 조합되는 버튼의 경우, 조합이 매끄럽지 못할 수 있습니다.</strong></P>
          </Box>
          <GoogleAd />
          <Box mb={0}>
            <BoxHeader mt={0} mb={30}><RiContactsBookFill />연락처</BoxHeader>

            <P align='justify' mb={50}>
              {'건의사항이나 기능의 개선 같은 경우 '}
              <ExternalLink href='https://github.com/NIHILncunia' label='깃허브' />
              {'나 '}
              <ExternalLink href='https://www.instagram.com/nihil_illust/' label='인스타' />
              로 연락주시면 됩니다.
            </P>

            {filteredPathList.map((item) => (
              <LinkBox key={uuid()} href={item.href}>{item.icon}{item.label}</LinkBox>
            ))}
          </Box>
        </div>
      </AppLayout>
    </>
  );
};

export default IndexPage;
