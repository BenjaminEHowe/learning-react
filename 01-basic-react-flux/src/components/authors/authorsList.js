"use strict";

const React = require("react");
const PropTypes = require("prop-types");

class AuthorsList extends React.Component {
    render() {
        let createAuthorRow = (author) => {
            return (
                <tr key={author.id}>
                    <td><a href={`#authors/${author.id}`}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        }

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}
AuthorsList.propTypes = {
    authors: PropTypes.array
};

module.exports = AuthorsList;
