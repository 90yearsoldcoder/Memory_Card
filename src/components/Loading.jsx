import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/loading.css";

const Loading = ({ poolSize, fetchedAPI }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const p = fetchedAPI / poolSize;
    setProgress(p);
    //console.log(progress);
  }, [poolSize, fetchedAPI]);

  return (
    <div className="loading-bar-container">
      <div className="loading-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

Loading.propTypes = {
  poolSize: PropTypes.number.isRequired,
  fetchedAPI: PropTypes.number.isRequired,
};

export default Loading;
