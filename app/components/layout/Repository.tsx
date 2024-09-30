import { UserRepository } from '~/helpers/user-interface';
import { RepositoryItem } from '../common/RepositoryItem';
import { css } from '@emotion/react';

const RepositoryCss = {
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
interface RepositoryProps {
  dataRepository: UserRepository[] | [];
  repositoryLimit: number;
  setRepositoryLimit: (e) => void;
}
export const Repository = ({
  dataRepository,
  repositoryLimit,
  setRepositoryLimit,
}: RepositoryProps) => {
  const handleToggleLimit = () => {
    if (repositoryLimit === 4) {
      setRepositoryLimit(dataRepository.length);
    } else {
      setRepositoryLimit(4);
    }
  };
  return (
    <>
      <div css={RepositoryCss.containerItemCss}>
        {dataRepository
          ?.slice(0, repositoryLimit)
          .map((item) => (
            <RepositoryItem
              key={item.id}
              name={item.name}
              description={item.description}
              forks={item.forks}
              watchers={item.watchers}
              license={item.license}
              htmlUrl={item.html_url}
              updateAt={item.updated_at}
            />
          ))}
      </div>
      {dataRepository.length > 0 && (
        <div css={RepositoryCss.btn}>
          <button onClick={handleToggleLimit} css={RepositoryCss.seeAllButton}>
            {repositoryLimit === 4
              ? 'View all Repositories'
              : 'View fewer Repositories'}
          </button>
        </div>
      )}
    </>
  );
};
