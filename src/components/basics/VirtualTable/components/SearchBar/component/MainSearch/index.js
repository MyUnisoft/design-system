import React from 'react';
import PropTypes from 'prop-types';
import AutosizeInput from 'react-input-autosize';

import I18n from '../../../../../../../assets/I18n';
import { CODES } from '../../../../../../../constants/keyboard';
import { TRIGGER_KEY } from '../../constants';

/**
 * The global search input
 */
const MainSearch = ({
  isMenuOpen,
  mainInputRef,
  menuRef,
  value = '',
  ...other
}) => {

  function handleKeyDown(e) {
    // Focus the first not disabled MenuItem when the down arrow key is pressed
    if (isMenuOpen && e.code === CODES.ARROW_DOWN && menuRef.current) {
      e.preventDefault();
      if(menuRef.current) {
        menuRef.current.querySelector('[role="menuitem"][tabindex="0"]')?.focus();
      }
    }
  }

  return (
    <AutosizeInput
      {...other}
      ref={mainInputRef}
      onKeyDown={handleKeyDown}
      value={value}
      placeholder={I18n.t('virtualTable.searchBar.placeholder', { trigger: TRIGGER_KEY })}
    />
  );
};

MainSearch.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  mainInputRef: PropTypes.object.isRequired,
  menuRef: PropTypes.object.isRequired,
  value: PropTypes.string
};

export default MainSearch;