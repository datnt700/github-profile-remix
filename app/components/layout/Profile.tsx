import { css } from '@emotion/react';
import { ProfileDetail } from '../common/ProfileDetail';

const profileCss = {
  containerProfile: css({
    display: 'none',
    gap: '1rem',
    marginTop: '0.8rem',
  }),
  infoActive: css({
    display: 'flex',
  }),
  general: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  }),
  avatar: css({
    width: '5rem',
    height: '5rem',
    padding: '0.3rem',
    backgroundColor: '#20293a',
    borderRadius: '0.5rem',
    position: 'relative',
    top: '-2rem',
    '@media (min-width: 1024px)': {
      width: '8rem',
      height: '8rem',
    },
  }),
  mainTitle: css({
    fontSize: '2rem',
    color: '#CDD5E0',
  }),
  bio: css({
    fontSize: '1rem',
    color: '#4A5567',
  }),
  listProfile: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    '@media (min-width: 1024px)': {
      flexDirection: 'row',
      gap: '1.5rem',
      height: '3rem',
    },
  }),
};

interface ProfileProps {
  follower: number;
  following: number;
  location: string;
  avatarUrl: string;
  infoActive: boolean;
  name: string;
  bio: string;
}

export const Profile = ({
  follower,
  following,
  location,
  avatarUrl,
  infoActive,
  name,
  bio,
}: ProfileProps) => {
  return (
    <div
      css={css`
        ${profileCss.containerProfile};
        ${infoActive && profileCss.infoActive};
      `}
    >
      <div css={profileCss.general}>
        <img src={avatarUrl} alt={'avatar'} css={profileCss.avatar} />
        <h2 css={profileCss.mainTitle}>{name}</h2>
        <p css={profileCss.bio}>{bio}</p>
      </div>

      <div css={profileCss.listProfile} data-testid="list-profile">
        <ProfileDetail label="Follower" value={follower} />
        <ProfileDetail label="Following" value={following} />
        <ProfileDetail label="Location" value={location} />
      </div>
    </div>
  );
};
