import React, { memo } from 'react';
import PropTypes from 'prop-types';
import I18n from '../../../../assets/I18n';
import DOMPurify from 'dompurify';
import {
  Box, Typography, Button, makeStyles
} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  container: {
    border: '1px solid',
    borderColor: theme.palette.common.grey,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  }
}));


const JistyMessageBody = ({ message }) => {
  const classes = useStyle();
  const { body, name } = message;
  const config = { KEEP_CONTENT: false, ADD_ATTR: ['target'], RETURN_DOM: true };
  const clean = DOMPurify.sanitize(body, config);
  const { href } = clean.getElementsByTagName('a')[0];
  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h4">{I18n.t('discussions.jistyMessage.name', { who: name }) }</Typography>
      <Button color="primary" variant="contained" onClick={handleClick}>Join</Button>
    </Box>
  );
};

// Props
JistyMessageBody.propTypes = {
  message: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};


export default memo(JistyMessageBody);
