import { headerCss } from './Header-Style';
import { css } from '@emotion/react';
import { InputSearch } from '../common/InputSearch';
import { ChangeEvent } from 'react';

interface HeaderProps {
  setText: (e: string) => void;
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
