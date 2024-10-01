import { css } from '@emotion/react';

export const RepositoryCss = {
  containerItemCss: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1rem',
    marginTop: '2rem',
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  }),
  btn: css({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  }),
  seeAllButton: css({
    backgroundColor: 'transparent',
    border: 'none',
    color: '#4A5567',
    fontSize: '1rem',
  }),
};
