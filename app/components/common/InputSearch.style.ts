import { css } from '@emotion/react';

export const inputSearchCss = {
  searchContainer: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2rem',
    maxWidth: '500px',
    margin: '0 auto',
  }),
  search: css({
    width: '100%',
    position: 'relative',
  }),
  textInput: css({
    padding: '1.5rem 0 1.5rem 4rem',
    border: 'none',
    borderRadius: '0.8rem',
    width: '100%',
    outline: 'none',
    color: '#fff',
    backgroundColor: '#20293A',
  }),
  logo: css({
    width: '2rem',
    position: 'absolute',
    top: '15px',
    left: '20px',
  }),
};
