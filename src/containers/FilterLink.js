// import { setVisibilityFilter } from '../actions'
// import Link from '../components/Link'
// import { connect } from 'react-redux';

// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.VisibilityFilters
// })

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link);

import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({filter, children}) => (
  <NavLink
    to={filter === 'SHOW_ALL' ? '/': `/${ filter }`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;

