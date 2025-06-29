import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import XIcon from '@mui/icons-material/X';
import { Card, CardContent, Box, Typography, IconButton } from '@mui/material';
import React from 'react';

import { PersonalData } from '../utils/types';

interface CardProps {
  member: PersonalData;
  role: string;
}

const iconMap: Record<string, React.JSX.Element> = {
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
  x: <XIcon />,
  medium: <RssFeedIcon />,
};

export const MemberCard: React.FC<CardProps> = ({ member, role }) => {
  const { fullName, position, images, network } = member;
  const image = images.find((img) => img.type === 'desktop');
  const imageURL = image?.path.replace('export=download', 'export=view');

  // const isMobile = useMediaQuery(theme.breakpoints.down(544));

  return (
    <>
      <Card
        sx={{
          width: 260,
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          border: '1px solid #C1C7CE',
          borderBottom: 0,
          p: '8px 16px',
        }}
      >
        {image?.path && (
          <Box
            component="img"
            src={imageURL}
            alt={image.alt}
            sx={{
              width: 100,
              height: 100,
              objectFit: 'cover',
              borderRadius: '50%',
              mb: 1,
            }}
          />
        )}
        <CardContent sx={{ px: 0, pt: 0, pb: 1 }}>
          <Typography variant="h6" fontWeight="500">
            {fullName}
          </Typography>
          <Typography variant="subtitle1" fontWeight="500">
            {role}
          </Typography>
          <Typography variant="body2">{position}</Typography>
        </CardContent>
      </Card>
      <Card>
        <Box
          display="flex"
          justifyContent="flex-start"
          sx={{
            width: 260,
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
            backgroundColor: '#F4F0EF',
            height: '43px',
            border: '1px solid #C1C7CE',
            alignItems: 'center',
            p: '8px 16px',
          }}
          gap={1}
        >
          {network.map(({ type, link }) => {
            const icon = iconMap[type.toLowerCase()];
            return (
              icon && (
                <IconButton
                  key={type}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#004C6C',
                    width: '20px',
                    height: '20px',
                  }}
                >
                  {icon}
                </IconButton>
              )
            );
          })}
        </Box>
      </Card>
    </>
  );
};
