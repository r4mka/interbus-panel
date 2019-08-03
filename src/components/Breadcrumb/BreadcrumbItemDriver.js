import { connect } from 'react-redux';
import { Map } from 'immutable';
import BreadcrumbItem from './BreadcrumbItem';

const getDriverName = (driver = Map()) => `${driver.get('firstname')} ${driver.get('lastname')}`;

export default connect((state, { match: { params: { id } } }) => ({
  name: getDriverName(state.getIn(['entities', 'drivers', id])),
}))(BreadcrumbItem);
