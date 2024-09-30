import { css } from '@emotion/react';

const profileCss = {
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

export const ProfileDetail = ({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) => (
  <div css={profileCss.profile}>
    <h3 css={profileCss.title}>{label}</h3>
    <div css={profileCss.line}></div>
    <span css={profileCss.value}>{value}</span>
  </div>
);
