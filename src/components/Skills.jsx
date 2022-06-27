import React,{Component} from 'react'; 
class Skills extends React.Component{
	render(){
		return <div className="container-fluid" id="skills_section">
<div className="container">
<div className="row">
<div className="col-md-12">
<h2 className="text-white text-center">Skills</h2>
<hr/>
</div>
<div className="col-md-6 mb-4">
<div className="progress">
  <div className="progress-bar progress-bar-striped progress-bar-animated php_skill ">PHP(80%)</div>
</div>
<div className="progress">
  <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated wp_skill ">WP(85%)</div>
</div>
<div className="progress">
  <div className="progress-bar bg-success progress-bar-striped progress-bar-animated skill_html ">HTML(80%)</div>
</div>
<div className="progress">
  <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated skill_css ">CSS(80%)</div>
</div>
<div className="progress">
  <div className="progress-bar bg-dark progress-bar-striped progress-bar-animated skill_bs ">Bootstrap(80%)</div>
</div>
<div className="progress">
  <div className="progress-bar bg-dark progress-bar-striped progress-bar-animated skill_seo ">SEO(60%)</div>
</div>
<div className="progress">
  <div className="progress-bar bg-dark progress-bar-striped progress-bar-animated skill_ci ">CI(50%)</div>
</div>
</div>
<div className="col-md-6 mb-4">
<div className="progress">
  <div className="progress-bar progress-bar-striped progress-bar-animated skill_js ">Javascript(80%)</div>
</div>
<div className="progress">
  <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated skill_jquery ">Jquery(80%)</div>
</div>
<div className="progress">
  <div className="progress-bar bg-success progress-bar-striped progress-bar-animated skill_ajax ">AJAX(75%)</div>
</div>
<div className="progress">
  <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated skill_angular ">Angular(50%)</div>
</div>
<div className="progress">
  <div className="progress-bar bg-dark progress-bar-striped progress-bar-animated skill_dotnet ">MVC .NET(60%)</div>
</div>
<div className="progress">
  <div className="progress-bar bg-dark progress-bar-striped progress-bar-animated skill_laravel ">Laravel(40%)</div>
</div>
</div>
</div>
</div>
</div>
	}

}
export default Skills;