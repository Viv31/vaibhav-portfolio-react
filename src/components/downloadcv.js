import { useNavigate } from "react-router-dom";
import { useState } from "react";
import portfolio_data from './jsondata/portfolio_data';

export default function DownloadCV() {
  const { resumeLink } = portfolio_data;
  const [cvDownloadCount, setCVDownloadCount] = useState(0);
  const navigate = useNavigate();

  const handleDownloadedCvCount = (e) => {
    // e.preventDefault();
    // Simulate successful download
    // You may want to replace this with actual logic for downloading the CV
    setTimeout(() => {
      alert("Download successful");
      setCVDownloadCount((prevCount) => prevCount + 1);
    }, 1000); // Assuming it takes 1 second to download, adjust as needed
  };

  return (
    <div className="container-fluid cv-container-fluid">
      <div className="container download_cv_container">
        <div className="row">
          <div className="col-md-4 education_div"></div>
          <div className="col-md-4 download_btn_div">
            <a href={portfolio_data.resumeLink}
              className="btn btn-primary btn-lg download_cv"
              onClick={handleDownloadedCvCount}
              download>
              Download CV({cvDownloadCount})
            </a>
            <span id="no_of_downloaded_cv"></span>
          </div>
          <div className="col-md-4 education_div"></div>
        </div>
      </div>
    </div>
  );
}
