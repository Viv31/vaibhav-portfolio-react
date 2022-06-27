import React, { Component } from 'react';
class Education extends React.Component{
	render(){
		return <div className="container-fluid" id="education-section">
<div className="container">
<div className="row">
<div className="col-md-12 mt-4 ">
<h2 className="text-white text-center">Education</h2>
</div>
<div className="col-md-3 education-card">
<div className="card-header">
<span className="text-center">BE (Informstion Technology)</span>
</div>
<h3>College: </h3><span>MIT Ujjain </span>
<h3>Percentage:</h3><span>8.04 CGPA</span>
</div>
<div className="col-md-1"></div>
<div className="col-md-3 education-card">
<div className="card-header">
<span className="text-center">Higher Secondary</span>

</div>
<h3>School: </h3><span>SVM Shujalpur </span>
<h3>Percentage:</h3><span>77%</span>
</div>
<div className="col-md-1"></div>
<div className="col-md-3 education-card">
<div className="card-header">
<span className="text-center">High School</span>

</div>
<h3>School: </h3><span>SVM Shujalpur</span>
<h3>Percentage:</h3><span>82.5%</span>
</div>

</div>
</div>
</div>
	}

}
export default Education;