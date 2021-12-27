import { useQuery } from '@apollo/client';
import { myRepos } from '../model';

const PortfolioWorks = () => {
  const { loading, data } = useQuery(myRepos, {
    variables: {
      login: 'busygraybird',
      count: 10,
    },
  });

  return (
    <div>
      {loading && <span>loading...</span>}
      {data &&
        data.user.repositories.nodes?.map((repo) => (
          <div key={repo.id}>
            <div>{repo.name}</div>
            {repo?.description && repo.descriptionHTML}
            {new Date(repo.createdAt).toLocaleDateString('ru-Lath', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
            <div>
              {repo.languages.nodes?.map((lang) => (
                <span key={lang.id} style={{ color: lang.color }}>
                  {lang.name}
                </span>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default PortfolioWorks;
