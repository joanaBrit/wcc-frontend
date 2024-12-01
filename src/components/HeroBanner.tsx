import React from 'react';

import { GradientBox } from './GradientBox';

interface HeroBannerProps {
  colors: Array<string>;
  title: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = (props) => {
  return <GradientBox colors={props.colors}>{props.title}</GradientBox>;
};
