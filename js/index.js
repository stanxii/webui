
var HeaderRight = React.createClass({
	render:function(){
		return(
			<nav className="mdl-navigation">
				<FindJob />
				<SignIn />
				<PostJobButton/>
			</nav>
		);
	}
});

var FindJob = React.createClass({
	render:function(){
		return(
			<a className="mdl-navigation__link header-link" href=""><img className="sprite mr5" src='http://www.shstatics.com/static/base/img/saved-search.png'/>Find Jobs</a>
		);
	}
});

var SignIn = React.createClass({
	render:function(){
		return(
			<a className="mdl-navigation__link header-link" href=""><img className="sprite mr5" src='http://www.shstatics.com/static/base/img/account.png'/>Sign In</a>
		);
	}
});

var PostJobButton = React.createClass({
	render:function(){
		return(
			<a className="mdl-navigation__link" href="">
	        	<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored header-bt">
				    <img className="sprite mr5" src="http://www.shstatics.com/static/base/img/icon-post-white.png"/>Post a Job
				</button>
	        </a>
		);
	}
});

ReactDOM.render(
  <HeaderRight />,
  document.getElementById('header-right')
);