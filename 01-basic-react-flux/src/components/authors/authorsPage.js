"use strict";

const React = require("react");

const AuthorApi = require("../../api/authorApi");

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authors: [] };
    }
    componentDidMount() {
        this.setState({ authors: AuthorApi.getAllAuthors() })
    }

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
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = Authors;
