import React from 'react';

// TodayCard includes all the basic styles for light mode
// TodayCard includes all the basic styles for dark mode
// TodayCard is reusable component

// TODO:
// 1. Create interface to handle all the props:
//  - card title
//  - create type for card title: page views, likes, retweets, profile views, total views
//  - card number of interactions
//  - icon
//  - percentage
//  - increased or decreased icon

const TodayCard = () => {
  return (
    <div>
      Today card
      <div>Page views</div>
      <div>Icon here</div>
      <div>87</div>
      <div>3%</div>
    </div>
  );
};

export default TodayCard;
