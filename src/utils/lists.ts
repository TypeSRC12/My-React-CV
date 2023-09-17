import { BsGithub, BsTelegram } from 'react-icons/bs'
import { ICardItem } from '@src/types/CardItemsInterface.ts'
import { IAboutCardItems } from '@src/types/AboutCardItemsInterface.ts'
import { aboutMeText, bioText, workText } from './texts.ts'

export const cardItems: ICardItem[] = [
  {
    id: 1,
    icon: BsTelegram,
    text: 'My Telegram',
    href: '#',
  },
  {
    id: 2,
    icon: BsGithub,
    text: 'My GitHub',
    href: '#',
  },
]

export const aboutCardItems: IAboutCardItems[] = [
  {
    id: 1,
    title: 'About me',
    content: aboutMeText,
  },
  {
    id: 2,
    title: 'Work',
    content: workText,
  },
  {
    id: 3,
    title: 'Bio',
    content: bioText,
  },
]
