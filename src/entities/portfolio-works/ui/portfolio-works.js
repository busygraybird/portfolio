import { reposCursorState, useMyReposQuery } from '../model';
import { getLongDate } from '../../../shared/helpers/date';
import RepoDescription from '../../../features/repo-description';
import RepoLanguages from '../../../features/repo-languages/repo-languages';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

const PortfolioWorks = () => {
  const [nextReposCursor, setNextReposCursor] = useState();
  const [prevReposCursor, setPrevReposCursor] = useState();
  const [hasNextPage, setHasNextPage] = useState();
  const [hasPrevPage, setHasPrevPage] = useState();

  const [reposCursor, setReposCursor] = useRecoilState(reposCursorState);

  const { loading, data } = useMyReposQuery({ cursor: reposCursor });

  useEffect(() => {
    if (data) {
      // set new end of repos page
      const cursor = data.user?.repositories.pageInfo.endCursor;
      const cursorPrev = data.user?.repositories.pageInfo.startCursor;
      const hasNext = data.user?.repositories.pageInfo.hasNextPage;
      const hasPrev = data.user?.repositories.pageInfo.hasPreviousPage;

      setHasNextPage(hasNext);
      setHasPrevPage(hasPrev);

      cursor && hasNext && setNextReposCursor(cursor);
      // это работает как-то не так
      cursorPrev && hasPrev && setPrevReposCursor(cursor);
    }
  }, [data]);

  const handlePageNext = () => setReposCursor(nextReposCursor);
  const handlePagePrev = () => setReposCursor(prevReposCursor);

  return (
    <div>
      {loading && <span>loading...</span>}
      {data &&
        data.user.repositories.nodes?.map((repo, index) => (
          <>
            <pre key={index}>
              {'\t'}
              {index + 1}
            </pre>
            <div key={repo.id}>
              <div>{repo.name}</div>
              {repo?.description && (
                <RepoDescription>{repo.node?.descriptionHTML}</RepoDescription>
              )}
              {getLongDate(repo.createdAt)}
              <RepoLanguages>{repo.languages?.nodes}</RepoLanguages>
              <hr />
            </div>
          </>
        ))}
      {hasNextPage && <div onClick={handlePageNext}>next</div>}
      {hasPrevPage && <div onClick={handlePagePrev}>prev</div>}
    </div>
  );
};

export default PortfolioWorks;
