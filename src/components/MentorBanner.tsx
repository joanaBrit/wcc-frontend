import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import { LandingPageResponse } from '@utils/types';

import theme from '../theme';

interface BannerProps {
  title: string;
  description: string;
  images: LandingPageResponse['fullBannerSection']['images'];
  link: LandingPageResponse['fullBannerSection']['link'];
}

export const MentorBanner: React.FC<BannerProps> = ({
  title,
  description,
  images,
  link,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { alt: desktopAlt, path: desktopPath } = images[0];
  const { alt: mobileAlt, path: mobilePath } = images[1];
  const { title: linkTitle, uri: linkUri, label: linkLabel } = link;

  const image = isMobile ? mobilePath : desktopPath;
  const alt = isMobile ? mobileAlt : desktopAlt;

  return (
    <Box
      aria-label={alt}
      data-testid="mentor-banner"
      sx={{
        display: 'grid',
        justifyItems: 'center',
        alignContent: 'space-evenly',
        padding: '8%',
        height: {
          xs: theme.customBannerHeights.mobile,
          sm: theme.customBannerHeights.tablet,
          md: theme.customBannerHeights.tablet,
          lg: theme.customBannerHeights.desktop,
        },

        width: '100%',
        background: `linear-gradient(rgba(26, 75, 102, 1),rgba(0, 52, 76, 0.7)), url(${image}) no-repeat`,
        backgroundSize: 'cover',
        opacity: '0.8px',
        backgroundPosition: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: '24px',
            sm: '45px',
            md: '45px',
            lg: '45px',
          },
          color: theme.palette.common.white,
          align: 'center',
          height: { xs: '35px', sm: '52px' },
          paddingTop: {
            xs: '3em',
            sm: '1em',
          },
          paddingBottom: { xs: '1.2em', sm: '0.7em' },
          fontWeight: theme.typography.fontWeightBold,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: '16px',
            sm: '24px',
            md: '24px',
            lg: '24px',
          },
        }}
        color={theme.palette.common.white}
        align="center"
        maxWidth={isMobile ? '600px' : '650px'}
        height="30px"
        paddingBottom={isMobile ? '6em' : '3em'}
        fontWeight={theme.typography.fontWeightMedium}
      >
        {description}
      </Typography>

      <Button
        style={{
          backgroundColor: theme.palette.common.white,
          height: '48px',
          width: '163.92px',
          gap: '8px',
          borderRadius: '2em',
          opacity: '0px',
        }}
      >
        <Link
          href={linkUri}
          aria-label={linkLabel}
          style={{
            textDecoration: 'none',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h6"
            color="rgba(34, 100, 136, 1)"
            fontSize="14px"
            textAlign="center"
            fontWeight={theme.typography.fontWeightBold}
            lineHeight="20px"
            letterSpacing="0.1px"
          >
            {linkTitle}
          </Typography>
        </Link>
      </Button>
    </Box>
  );
};
