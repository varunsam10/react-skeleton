var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredient = [{"id":1,"text":"MacBook Air"},{"id":2,"text":"MacBook Pro"},{"id":3,"text":"MacBook"}];

var List = React.createClass({
    render: function () {
        var ListItem = ingredients.map(function (item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

         return (<ul>{listitems}</ul>);
    }
});

module.exports = List;
