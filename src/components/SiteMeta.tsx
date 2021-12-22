import React from 'react';
import Head from 'next/head';
import { ISiteMetaProps } from '@/types';
import { siteData } from '@/data/site.data';

export const SiteMeta = ({ meta, }: ISiteMetaProps) => {
  const {
    title, url, description, keywords, type,
  } = meta;

  const siteTitle = `${title} - ${siteData.siteTitle}`;
  const siteDescription = description || siteData.siteDescription;
  const siteURL = `${siteData.siteUrl}${url}`;
  const siteKeywords = keywords || siteData.siteKeywords;
  const siteImage = `${siteData.siteUrl}${siteData.siteImage}`;
  const siteType = type || siteData.siteType;

  const author = 'NIHILncunia';

  return (
    <>
      <Head>
        {/* 기본 정보 */}
        <meta name='description' content={siteDescription} />
        <meta name='keywords' content={siteKeywords} />
        <meta name='author' content={author} />
        <meta name='generator' content='Visual Studio Code' />
        <link rel='canonical' href={siteURL} />

        {/* 오픈그래프 */}
        <meta property='og:site_name' content={siteData.siteTitle} />
        <meta property='og:type' content={siteType} />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:image' content={siteImage} />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:url' content={siteURL} />

        {/* 트위터 카드 */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={`@${author}`} />
        <meta name='twitter:title' content={siteTitle} />
        <meta name='twitter:creator' content={`@${author}`} />
        <meta name='twitter:description' content={siteDescription} />
        <meta name='twitter:image' content={siteImage} />

        <title>{siteTitle}</title>
      </Head>
    </>
  );
};
