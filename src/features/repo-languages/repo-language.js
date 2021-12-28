import styles from './repo-languages.module.scss';
import classNames from 'classnames';

export const RepoLanguage = ({ color, children }) => {
  const cubeStyle = {
    backgroundColor: color,
  };

  return (
    <span>
      {/*<div className={styles.cubeContainer}>
        <div className={styles.cube}>
          <div
            style={cubeStyle}
            className={classNames(styles.cubeSide, styles.cubeSideLeft)}
          />
          <div
            style={cubeStyle}
            className={classNames(styles.cubeSide, styles.cubeSideTop)}
          />
          <div
            style={cubeStyle}
            className={classNames(styles.cubeSide, styles.cubeSideBack)}
          />
          <div
            style={cubeStyle}
            className={classNames(styles.cubeSide, styles.cubeSideBottom)}
          />
          <div
            style={cubeStyle}
            className={classNames(styles.cubeSide, styles.cubeSideRight)}
          />
          <div
            style={cubeStyle}
            className={classNames(styles.cubeSide, styles.cubeSideFront)}
          />
        </div>
      </div>*/}
      {children}
    </span>
  );
};

export default RepoLanguage;
