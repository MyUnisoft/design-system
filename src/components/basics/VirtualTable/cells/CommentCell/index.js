import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  Fragment
} from 'react';

import PropTypes from 'prop-types';
import _last from 'lodash/last';

import { getCommentsApi } from '../../../../../services/comments';
import { FontIcon } from '../../../Icon';
import TooltipWrapper from '../../components/TooltipWrapper';
import VirtualTableContext from '../../context';
import useStyles from './styles';
import CommentDialog from './CommentDialog';

const CommentCell = ({ data, dataKey, columnIndex }) => {
  const classes = useStyles();

  const { config } = useContext(VirtualTableContext);
  const { selectableRowKey, idSociety, columns = [] } = config;
  const {
    commentKey = '',
    refreshComment = () => {},
    getComments = false,
    showLastComment
  } = columns[columnIndex];

  const [isOpen, setIsOpen] = useState(true);

  useEffect(async () => {
    if (getComments) handleGetComment();
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleGetComment = async () => {
    const comments = await getCommentsApi(
      { [commentKey]: data[selectableRowKey] },
      idSociety
    );
    refreshComment(comments, data[selectableRowKey]);
  };

  const hasComment = _last(data[dataKey]);
  const tooltipProps = { htmlContent: true };

  const Wrapper = hasComment && showLastComment ? TooltipWrapper : Fragment;
  const WrapperProps = hasComment
    ? {
        titleInfoBulle: hasComment.body,
        ...tooltipProps
      }
    : {};

  return (
    <>
      <Wrapper {...WrapperProps}>
        <div
          onClick={setIsOpen.bind(null, true)}
          className={classes.commentIcon}
        >
          <FontIcon name="icon-comments" />
          {data[dataKey]?.length > 0 && (
            <span className={classes.badge}>{data[dataKey].length}</span>
          )}
        </div>
      </Wrapper>
      <CommentDialog
        isOpen={isOpen}
        handleClose={handleClose}
        handleGetComment={handleGetComment}
        data={data}
        columnIndex={columnIndex}
        dataKey={dataKey}
      />
    </>
  );
};

CommentCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default CommentCell;
