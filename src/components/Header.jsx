import React, { Component } from 'react';
class Header extends React.Component {
  render(){
    return <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vaibhav Gangrade</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
      <li class="nav-item">
          <img src="./vaibhav_gangrade.jpg" height="50" width="50"/>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Skills</a>
        </li>    
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link" href="#">Hobbies</a>
        </li>  
        <li class="nav-item">
          <a class="nav-link" href="#">Achievements</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link" href="#">Contact me</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link" href="#">Contact me</a>
        </li>     
        <li class="nav-item">
          <a class="nav-link" href="#">Download</a>
        </li>  
      </ul>
    </div>
  </div>
</nav>;
  }
}

export default Header;

 
