import PropTypes from 'prop-types';

const userShape = PropTypes.shape({
  fName: PropTypes.string.isRequired,
  lName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export default { userShape };
