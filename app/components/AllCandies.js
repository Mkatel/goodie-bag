const React = require('react');

function AllCandies (props) {
    return (
        <ul>
        {
            props.candies.map(el => {
            return <li key = {el.id}>{el.name} - {el.description}</li>
        })}
        </ul>
    )
}

export default AllCandies
