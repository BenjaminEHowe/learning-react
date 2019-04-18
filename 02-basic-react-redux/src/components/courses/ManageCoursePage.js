import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadAuthors } from "../../redux/actions/authorActions";
import { loadCourses } from "../../redux/actions/courseActions";

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors } = this.props;

    if (courses.length === 0) {
      this.props.loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      this.props.loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    authors: state.authors,
    courses: state.courses
  };
}

const mapDispatchToProps = {
  loadAuthors,
  loadCourses
};

const connectedStateAndProps = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default connectedStateAndProps(ManageCoursePage);
