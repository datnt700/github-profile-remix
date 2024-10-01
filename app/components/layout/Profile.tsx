import { css } from '@emotion/react';
import { profileCss } from './Profile-Style';
import { ProfileDetail } from '../common/ProfileDetail';

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
