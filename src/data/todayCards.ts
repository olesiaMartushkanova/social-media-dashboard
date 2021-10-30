import { ITodayCard } from '../components/TodayCard/TodayCard';
import IconFacebook from '../images/icon-facebook.svg';
import IconTwitter from '../images/icon-twitter.svg';
import IconInstagram from '../images/icon-instagram.svg';
import IconYoutube from '../images/icon-youtube.svg';

export const TODAY_CARDS_TOP: Array<ITodayCard> = [
  {
    id: 'facebook-views-todayCard-top',
    title: 'Page Views',
    icon: IconFacebook,
    interactions: 87,
    percentage: 3,
    isIncreasedActivity: true,
  },
  {
    id: 'facebook-likes-todayCard-top',
    title: 'Likes',
    icon: IconFacebook,
    interactions: 52,
    percentage: 2,
    isIncreasedActivity: false,
  },
  {
    id: 'instagram-likes-todayCard-top',
    title: 'Likes',
    icon: IconInstagram,
    interactions: 5462,
    percentage: 2257,
    isIncreasedActivity: true,
  },
  {
    id: 'instagram-views-todayCard-top',
    title: 'Profile Views',
    icon: IconInstagram,
    interactions: 52000,
    percentage: 1375,
    isIncreasedActivity: true,
  },
];

export const TODAY_CARDS_BOTTOM: Array<ITodayCard> = [
  {
    id: 'twitter-retweets-todayCard-bottom',
    title: 'Retweets',
    icon: IconTwitter,
    interactions: 117,
    percentage: 303,
    isIncreasedActivity: true,
  },
  {
    id: 'twitter-likes-todayCard-bottom',
    title: 'Likes',
    icon: IconTwitter,
    interactions: 507,
    percentage: 553,
    isIncreasedActivity: true,
  },
  {
    id: 'youtube-likes-todayCard-bottom',
    title: 'Likes',
    icon: IconYoutube,
    interactions: 107,
    percentage: 19,
    isIncreasedActivity: false,
  },
  {
    id: 'youtube-views-todayCard-bottom',
    title: 'Total Views',
    icon: IconYoutube,
    interactions: 1407,
    percentage: 12,
    isIncreasedActivity: false,
  },
];
