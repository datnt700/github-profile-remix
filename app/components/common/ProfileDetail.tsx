import { profileCss } from './ProfileDetail.style';

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
