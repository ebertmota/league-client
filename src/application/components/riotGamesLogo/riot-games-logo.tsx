import React from 'react';
import { Image } from './riot-games-logo-styles';
import riotGamesLogoImage from '@/../assets/riot-games-logo.png';

export const RiotGamesLogo: React.FC = () => {
  return <Image src={riotGamesLogoImage} alt="Riot Games"/>
}