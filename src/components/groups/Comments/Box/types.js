import PropTypes from 'prop-types';

export const GeneralCommentType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  avatarImgSrc: PropTypes.string,
  initials: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
});

export const TopCommentType = PropTypes.shape({
  ...GeneralCommentType,
  history: PropTypes.arrayOf(GeneralCommentType)
});

export const CommentsType = PropTypes.arrayOf(TopCommentType);
