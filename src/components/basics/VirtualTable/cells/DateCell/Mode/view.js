import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import _isEmpty from 'lodash/isEmpty';
import VirtualTableContext from "../../../context";

function ViewDateCell({ data, columnIndex }) {
  const { config } = useContext(VirtualTableContext);

  const {
    columns = []
  } = config;

  const {
    formatDate = 'DD/MM/YYYY'
  } = columns[columnIndex];

  return (
    <div>
      {!_isEmpty(data) && moment(data, formatDate).format('L')}
    </div>
  );
}

ViewDateCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired
};

export default ViewDateCell;
