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
    topLineColor: 'hsl(208, 92%, 53%)',
    isIncreasedActivity: true,
  },
  {
    id: 'twitter-social-card',
    iconTitle: '@nathanf',
    interactions: 1044,
    todayStatistic: 99,
    icon: IconTwitter,
    isFollowers: true,
    topLineColor: 'hsl(203, 89%, 53%)',
    isIncreasedActivity: true,
  },
  {
    id: 'instagram-social-card',
    iconTitle: '@realnathanf',
    interactions: 11000,
    todayStatistic: 99,
    icon: IconInstagram,
    isFollowers: true,
    topLineColor:
      'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
    isIncreasedActivity: true,
  },
  {
    id: 'youtube-social-card',
    iconTitle: 'Nathan F.',
    interactions: 8239,
    todayStatistic: 144,
    icon: IconYoutube,
    isFollowers: false,
    topLineColor: 'hsl(348, 97%, 39%)',
    isIncreasedActivity: false,
  },
];
