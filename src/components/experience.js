import React from 'react';
import { useNavigate } from "react-router-dom";
import portfolio_data from './jsondata/portfolio_data';

export default function Experience(){
  const { workExperienceData } = portfolio_data;
	return (
    
		<section className="wor_ex_section">
  <div className="container py-5">
    <div className="main-timeline-2">
       {workExperienceData.map((expdetails,index)=>(
          <a href={expdetails.companyLink} target="_blank">
          <div className={`timeline-2 ${expdetails.cardAlignmentClass}`} key={index}>
          <div className="card">
            <img src={expdetails.companyImg} className="card-img-top" alt="Responsive image"/>
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">{expdetails.companyname}</h4>
              <h6 className="fw-bold mb-4">{expdetails.desigNation}</h6>
              <p className="text-white mb-4"><i className="far fa-clock" aria-hidden="true"></i>{expdetails.WorkDuration}</p>
              <p className="mb-0">{expdetails.WorkDescription}</p>
            </div>
          </div>
        </div>
        </a>
         ))
       }
      
    </div>
  </div>
</section>
	)
}