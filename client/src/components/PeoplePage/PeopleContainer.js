import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { addPerson } from "../../actions/people-actions";
import { addPerson } from "../../redux/actions/people";
import PeopleList from "./PeopleList";
import PersonInput from "./PersonInput";

class PeopleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  render() {
    const { people } = this.props;
    return (
      <div>
        <PersonInput addPerson={this.props.addPerson} />
        <PeopleList people={people} />
      </div>
    );
  }
}

PeopleContainer.propTypes = {
  people: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return state.people;
};

const mapDispatchToProps = { addPerson };

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
