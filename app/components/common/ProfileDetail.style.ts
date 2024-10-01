import { css } from '@emotion/react';

export const profileCss = {
  profile: css({
    padding: '0.6rem 1.2rem',
    backgroundColor: '#111729',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  }),
  title: css({
    fontSize: '1rem',
    color: '#4A5567',
  }),
  line: css({
    borderRight: '1px solid #4A5567',
    height: '2rem',
  }),
  value: css({
    fontSize: '1rem',
    color: '#CDD5E0',
  }),
};
