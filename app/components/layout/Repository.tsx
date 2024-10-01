import { UserRepository } from '~/types/user-interface';
import { RepositoryItem } from '../common/RepositoryItem';
import { RepositoryCss } from './Repository.style';

interface RepositoryProps {
  dataRepository: UserRepository[] | [];
  repositoryLimit: number;
  setRepositoryLimit: (e: number) => void;
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
