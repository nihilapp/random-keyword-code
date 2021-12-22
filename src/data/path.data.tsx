import { AiFillHome } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';
import { IoEllipsisHorizontalCircleSharp, IoPeopleCircle } from 'react-icons/io5';
import { IoMdColorPalette } from 'react-icons/io';
import { GiRollingDices } from 'react-icons/gi';
import React from 'react';
import { IPathData } from '@/types';

export const pathList: IPathData[] = [
  {
    href: '/',
    label: '홈',
    icon: <AiFillHome />,
  },
  {
    href: '/nihil',
    label: '니힐 전용',
    icon: <RiAdminFill />,
  },
  {
    href: '/character',
    label: '캐릭터',
    icon: <IoPeopleCircle />,
  },
  {
    href: '/other',
    label: '기타',
    icon: <IoEllipsisHorizontalCircleSharp />,
  },
  {
    href: '/color',
    label: '색상',
    icon: <IoMdColorPalette />,
  },
  {
    href: '/random',
    label: '랜덤',
    icon: <GiRollingDices />,
  },
];
