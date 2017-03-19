var React = require('react');
var PropTypes = React.PropTypes;

var Results = React.createClass({
    render: function(){
        return(
            <div>Results: {puke(this.props)} </div>
        )
    }
});

function puke(object) {
        return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

Results.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    scores: PropTypes.array.isRequired,
    playersInfo: PropTypes.array.isRequired
};

module.exports = Results;