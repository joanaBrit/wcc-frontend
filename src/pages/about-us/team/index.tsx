// path: about-us/team/leadership

import { Typography } from '@mui/material';
import { GetServerSideProps } from 'next';

import { TeamApiResponse } from '@utils/types';
import { fetchData } from 'lib/api';

import { MemberCard } from '../../../components/CardComponent';

interface TeamPageProps {
  team: TeamApiResponse;
}

const TeamLeadershipPage = ({ team }: TeamPageProps) => {
  const { membersByType } = team;
  const member = membersByType.directors[0];
  return (
    <div>
      {membersByType.directors.map((director) => (
        <span key={director.fullName}>{director.fullName}</span>
      ))}
      <Typography variant="h4">Welcome to the TeamPage</Typography>
      <MemberCard member={member} role="Director" />
    </div>
  );
};

export default TeamLeadershipPage;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetchData('team');
    const props: TeamPageProps = {
      team: response.data,
    };
    return {
      props,
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: error instanceof Error ? error.message : 'An error occurred',
      },
    };
  }
};
