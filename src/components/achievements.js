import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import portfolio_data from './jsondata/portfolio_data';


export default function Achievements() {
    const { achievements, extraActity } = portfolio_data;

    return (
        <div className="container-fluid achievements-container-fluid">
            <div className="container achievements_container">
                <h3 className="text-white text-center p-4 cutout-title">Achievements & Extra Activity</h3>
                <div className="row">
                    <div className="col-md-10 mx-auto achievements_div">
                        <ul className="achievement-list">
                            {achievements.map((achievements_info, index) => (
                                <li key={index} className="achievement-item">
                                    <FontAwesomeIcon icon={faTrophy} className="golden-trophy" />
                                    <span className="achievement-description" dangerouslySetInnerHTML={{ __html: achievements_info.achievement_description }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="row mt-4 text-center">
                    {extraActity.map((extra_activity_info, index) => (
                        <div className="col-md-4 projects_sec" key={index}>
                            <span className="text-white text-center git_project" dangerouslySetInnerHTML={{ __html: extra_activity_info.title }}></span>
                            <h1 className="text-white text-center project_num">{extra_activity_info.numbers}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
