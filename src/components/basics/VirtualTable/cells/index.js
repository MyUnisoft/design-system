import React from 'react';
import PropTypes from 'prop-types';
import { TYPE_CELL } from '../../../../constants/typeCell';
import AmountCell from './AmountCell';
import StringCell from './StringCell';
import CheckBoxCell from './CheckBoxCell';
import SelectVTCell from './SelectCell';
import NumberCell from './NumberCell';
import MultipleCell from "./MultipleCell";
import DateCell from "./DateCell";
import BadgeStatusCell from "./BadgeStatusCell";
import CommentCell from "./CommentCell";
import StatusCell from "./StatusCell";
import ThumbnailCell from './ThumbnailCell';
import AttachmentCell from './AttachmentCell';
import ChipCell from './ChipCell';
import ButtonCell from "./ButtonCell";
import WalletCell from "./WalletCell";
import AutocompleteCell from './AutocompleteCell';
import SwitchBadgeStatusCell from './SwitchBadgeStatusCell';

const CellRender = React.memo(({
  type, subtype, data, dataKey, columnIndex, renderComponent, spaceBetween
}) => {

  function switchCell() {
    switch (type) {
    case TYPE_CELL.ATTACHMENT:
      return (<AttachmentCell subtype={subtype} data={data} dataKey={dataKey} />);
    case TYPE_CELL.THUMBNAIL:
      return (<ThumbnailCell data={data} dataKey={dataKey} />);
    case TYPE_CELL.CHECKBOX:
      return (<CheckBoxCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.DATE:
      return (<DateCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.SELECT:
      return (<SelectVTCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.AMOUNT:
      return (<AmountCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.NUMBER:
      return (<NumberCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.BADGE_STATUS:
      return (<BadgeStatusCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.SWITCH_BADGE_STATUS:
      return (<SwitchBadgeStatusCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.COMMENT:
      return (<CommentCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.STATUS:
      return (<StatusCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.BUTTON:
      return (<ButtonCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.MULTIPLE_INPUTS:
      return (<MultipleCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.WALLET:
      return (<WalletCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.CHIP:
      return (<ChipCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.AUTOCOMPLETE:
      return (<AutocompleteCell data={data} dataKey={dataKey} columnIndex={columnIndex} />);
    case TYPE_CELL.COMPONENT:
      return (renderComponent({ data, dataKey, columnIndex }));
    case TYPE_CELL.STRING:
    default:
      return (<StringCell data={data} dataKey={dataKey} columnIndex={columnIndex} />); 
    }
  }

  if([TYPE_CELL.CHECKBOX].includes(type)) {
    return switchCell();
  }

  return (
    <div style={{ margin: `0 ${spaceBetween / 2}px`, height: 'inherit' }}>
      {switchCell()}
    </div>
  );

});

CellRender.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object.isRequired,
  dataKey: PropTypes.string.isRequired,
  columnIndex: PropTypes.number.isRequired
};

CellRender.defaultProps = {
  type: TYPE_CELL.STRING
};

export default CellRender;
