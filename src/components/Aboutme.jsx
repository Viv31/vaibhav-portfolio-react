import React, { Component } from 'react';
class Aboutme extends React.Component{
render(){
	return <div className="container-fluid" id="about-us">
  <div className="container">
  <div className="row">
  <div className="col-md-12">
    <h2 className="text-white text-center" >Know About Me</h2>
  </div>
  <hr/>
  <div className="col-md-4 mt-3">
      <img src="./vaibhav_gangrade.jpg" className="rounded-circle img-fluid" height="350" width="350"/>
  </div>
  <div className="col-md-8"  id="about_info_section">
  <p className="about-text text-white p-4 pt-4">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <h5 className="desc-name-text"><span className="text-white"><b>Vaibhav Gangrade </b></span></h5>
</p>
  </div>
  </div>
  </div>
</div>
}

}
export default Aboutme;