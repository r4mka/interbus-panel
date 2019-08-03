import { connect } from 'react-redux';
import BreadcrumbItem from './BreadcrumbItem';

export default connect((state, { match: { params: { id } } }) => ({
  name: state.getIn(['entities', 'cars', id, 'plate']),
}))(BreadcrumbItem);
