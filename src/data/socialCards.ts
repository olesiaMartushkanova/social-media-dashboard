import { ISocialCard } from '../components/SocialCard/SocialCard';
import IconFacebook from '../images/icon-facebook.svg';
import IconTwitter from '../images/icon-twitter.svg';
import IconInstagram from '../images/icon-instagram.svg';
import IconYoutube from '../images/icon-youtube.svg';

export const SOCIAL_CARDS: Array<ISocialCard> = [
  {
    id: 'facebook-social-card',
    iconTitle: '@nathanf',
    interactions: 1987,
    todayStatistic: 12,
    icon: IconFacebook,
    isFollowers: true,
  },
  {
    id: 'twitter-social-card',
    iconTitle: '@nathanf',
    interactions: 1044,
    todayStatistic: 99,
    icon: IconTwitter,
    isFollowers: true,
  },
  {
    id: 'instagram-social-card',
    iconTitle: '@realnathanf',
    interactions: 11000,
    todayStatistic: 99,
    icon: IconInstagram,
    isFollowers: true,
  },
  {
    id: 'youtube-social-card',
    iconTitle: 'Nathan F.',
    interactions: 8239,
    todayStatistic: 144,
    icon: IconYoutube,
    isFollowers: false,
  },
];
