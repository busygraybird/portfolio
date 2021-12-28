const RepoDescription = ({ children }) => (
  <div dangerouslySetInnerHTML={{ __html: children }} />
);

export default RepoDescription;
