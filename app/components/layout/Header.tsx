import { css } from '@emotion/react';
import { InputSearch } from '../common/InputSearch';
import { ChangeEvent } from 'react';

const headerCss = {
  container: css({
    backgroundImage: `url('/images/hero-image-github-profile.png')`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '15rem',
    padding: '0 1rem',
  }),
  repositoryList: css({
    marginTop: '0.5rem',
    backgroundColor: '#111729',
    borderRadius: '0.8rem',
    display: 'none',
    maxWidth: '500px',
    margin: '0.5rem auto 0',
  }),
  profileActive: css({
    display: 'block',
  }),
  repositoryItem: css({
    width: '100%',
    display: 'flex',
    gap: '1rem',
    padding: '0.5rem',
  }),
  avatar: css({
    width: '4rem',
  }),
  info: css({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  }),
  name: css({
    fontSize: '1rem',
    color: '#CDD5E0',
  }),
  bio: css({
    fontSize: '0.75rem',
    color: '#4A5567',
  }),
};

interface HeaderProps {
  setText: (e) => void;
  avatarUrl: string;
  bio: string;
  name: string;
  profileActive: boolean;
  showProfile: () => void;
}
export const Header = ({
  setText,
  avatarUrl,
  bio,
  name,
  profileActive,
  showProfile,
}: HeaderProps) => {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event?.target.value);
  };

  return (
    <>
      <div css={headerCss.container}>
        <InputSearch handleInput={handleInput} />
        <div
          css={css`
            ${headerCss.repositoryList};
            ${profileActive && headerCss.profileActive};
          `}
          data-active={profileActive ? 'true' : 'false'}
          data-testid="repository-list"
        >
          <div
            css={headerCss.repositoryItem}
            onClick={showProfile}
            data-testid="repository-item"
          >
            <img css={headerCss.avatar} src={avatarUrl} alt={'image'} />
            <div css={headerCss.info}>
              <p css={headerCss.name}>{name}</p>
              <p css={headerCss.bio}>{bio}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
