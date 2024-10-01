import { css } from '@emotion/react';

export const RepositoryItemCss = {
  containerItemCss: css({
    background: 'linear-gradient(to right, #111729, #1D1B48)',
    borderRadius: '0.8rem',
    maxWidth: '600px',
  }),
  listRepo: css({
    padding: '1.4rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    textDecoration: 'none',
  }),
  info: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  }),
  name: css({
    color: '#CDD5E0',
    fontSize: '1.25rem',
  }),
  description: css({
    color: '#4A5567',
  }),
  statistics: css({
    display: 'flex',
    color: '#4A5567',
    gap: '0.5rem',
  }),
  field: css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
  }),
  icon: css({
    width: '1.5rem',
  }),
  value: css({
    fontSize: '0.75rem',
  }),
};
