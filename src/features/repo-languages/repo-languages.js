import { RepoLanguage } from './repo-language';

const RepoLanguages = ({ children }) => {
  return (
    <div>
      {children?.length &&
        children.map(({ name, color, id }) => (
          <RepoLanguage key={id} color={color}>
            {name}
          </RepoLanguage>
        ))}
    </div>
  );
};

export default RepoLanguages;
