import { css } from '@emotion/react';

export const profileCss = {
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
