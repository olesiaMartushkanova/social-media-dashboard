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
    isIncreased: true,
  },
  {
    id: 'facebook-likes-todayCard-top',
    title: 'Likes',
    icon: IconFacebook,
    interactions: 52,
    percentage: 2,
    isIncreased: false,
  },
  {
    id: 'instagram-likes-todayCard-top',
    title: 'Likes',
    icon: IconInstagram,
    interactions: 5462,
    percentage: 2257,
    isIncreased: true,
  },
  {
    id: 'instagram-views-todayCard-top',
    title: 'Profile Views',
    icon: IconInstagram,
    // TODO: add 'K' here
    interactions: 5462,
    percentage: 2257,
    isIncreased: true,
  },
];

export const TODAY_CARDS_BOTTOM: Array<ITodayCard> = [
  {
    id: 'twitter-retweets-todayCard-bottom',
    title: 'Retweets',
    icon: IconTwitter,
    interactions: 117,
    percentage: 303,
    isIncreased: true,
  },
  {
    id: 'twitter-likes-todayCard-bottom',
    title: 'Likes',
    icon: IconTwitter,
    interactions: 507,
    percentage: 553,
    isIncreased: true,
  },
  {
    id: 'youtube-likes-todayCard-bottom',
    title: 'Likes',
    icon: IconYoutube,
    interactions: 107,
    percentage: 19,
    isIncreased: false,
  },
  {
    id: 'youtube-views-todayCard-bottom',
    title: 'Total Views',
    icon: IconYoutube,
    interactions: 1407,
    percentage: 12,
    isIncreased: false,
  },
];
