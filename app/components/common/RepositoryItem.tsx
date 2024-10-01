import { RepositoryItemCss } from './RepositoryItem-Style';

interface RepositoryItemProps {
  name: string;
  description: string;
  forks: number;
  watchers: number;
  license: { name: string | null };
  htmlUrl: string | undefined;
  updateAt: string;
}

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
