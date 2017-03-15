var USER_DATA = {
  name:  'Odair',
  username: 'odairsk8',
  image: 'https://avatars1.githubusercontent.com/u/1385634?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./config/routes');

var ProfilePic = React.createClass({
  render: function(){
    return(
      <img src={this.props.imageUrl} style={{width:100 ,height:100 }} />
    )
  }
});

var Link = React.createClass({
  changeUrl: function () {
    window.location.replace(this.props.href);
  },
  render: function(){
    return(
      <span style={{color: 'blue', cursor:'pointer'}} onClick={this.changeUrl}>
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return(
      <div>
        <Link href={"https://github.com/" + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return(
      <div>
          {this.props.name}
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function(){
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});


  var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Program 1234!</div>
    )
  }
});

//ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));

ReactDOM.render(Routes, document.getElementById('app'));