import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import Button from "../../../Buttons/Button";
import VirtualTableContext from "../../context";
import useStyles from './styles';
import I18n from "../../../../../assets/I18n";

const ButtonCell = ( { data, dataKey, columnIndex } ) => {

  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { config: { columns = [] } } = useContext(VirtualTableContext);
  const { showCellButton = true, handleClick = () => {}, label = '', isDisabled = false } = columns[columnIndex];

  async function onClick() {
    try {
      setLoading(true);
      await handleClick(data, dataKey);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }

  if (loading) {
    return (<div>{ I18n.t('common.loading') }</div>);
  }

  return (
    showCellButton && (
      <Button
        className={classes.cellButton}
        size="small"
        color="primary"
        variant="contained"
        onClick={onClick}
        disabled={isDisabled}
      >
        { label }
      </Button>
    )
  );
};

ButtonCell.propTypes = {
  columnIndex: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  dataKey: PropTypes.string.isRequired
};


export default ButtonCell;
