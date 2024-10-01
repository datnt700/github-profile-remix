import { css } from '@emotion/react';

export const headerCss = {
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
