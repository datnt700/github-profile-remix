import { css } from '@emotion/react';

interface RepositoryItemProps {
  name: string;
  description: string;
  forks: number;
  watchers: number;
  license: { name: string | null };
  htmlUrl: string | undefined;
  updateAt: string;
}

const RepositoryItemCss = {
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
export const RepositoryItem = ({
  name,
  description,
  forks,
  watchers,
  license,
  htmlUrl,
  updateAt,
}: RepositoryItemProps) => {
  function getLastUpdated(date: string) {
    const now = new Date();
    const updatedAt = new Date(date);
    const differenceInMilliseconds = now.getTime() - updatedAt.getTime();
    const millisecondsInOneDay = 24 * 60 * 60 * 1000;
    const differenceInDays = Math.floor(
      differenceInMilliseconds / millisecondsInOneDay
    );

    return differenceInDays > 1
      ? `${differenceInDays} days ago`
      : `${differenceInDays} day ago`;
  }
  return (
    <div css={RepositoryItemCss.containerItemCss}>
      <div css={RepositoryItemCss.listRepo}>
        <div css={RepositoryItemCss.info}>
          <a href={htmlUrl}>
            <h4 css={RepositoryItemCss.name}>{name}</h4>
          </a>
          <p css={RepositoryItemCss.description}>{description}</p>
        </div>
        <div css={RepositoryItemCss.statistics}>
          <div css={RepositoryItemCss.field}>
            <img
              src={'./images/Chield_alt.svg'}
              alt={'icon'}
              css={RepositoryItemCss.icon}
            />
            <span css={RepositoryItemCss.value}>
              {license ? license.name : ''}
            </span>
          </div>
          <div css={RepositoryItemCss.field}>
            <img
              src={'./images/Nesting.svg'}
              alt={'icon'}
              css={RepositoryItemCss.icon}
            />
            <span>{forks}</span>
          </div>
          <div css={RepositoryItemCss.field}>
            <img
              src={'./images/Star.svg'}
              alt={'icon'}
              css={RepositoryItemCss.icon}
            />
            <span>{watchers}</span>
          </div>
          <div css={RepositoryItemCss.field}>
            <span data-testid="updateAt">{getLastUpdated(updateAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
