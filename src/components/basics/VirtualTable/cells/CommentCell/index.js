import React, { useCallback, useContext, useEffect, useState } from 'react';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';

import I18n from '../../../../../assets/I18n';
import { draftToHtmlHelper } from '../../../../../helpers/textEditor';
import {
  getCommentsApi,
  postComment,
  putComment
} from '../../../../../services/comments';
import Comment from '../../../../groups/Comments/Box/parts/Comment';
import { InlineButton } from '../../../Buttons';
import { FontIcon } from '../../../Icon';
import VirtualTableContext from '../../context';
import useStyles from './styles';
import { commentBoxInitialState, toolbarOptions } from './utils';

const CommentCell = ({ data, dataKey, columnIndex }) => {
  const classes = useStyles();

  const { config } = useContext(VirtualTableContext);
  const { selectableRowKey, idSociety, columns = [] } = config;
  const {
    commentKey = '',
    location = '',
    refreshComment = () => {},
    getComments = false
  } = columns[columnIndex];

  const [isOpen, setIsOpen] = useState(false);
  const [editorTextareaRef, setEditorTextareaRef] = useState(null);
  const [commentBoxState, setCommentBoxState] = useState(
    commentBoxInitialState
  );
  const [editorState, setEditorState] = useState(null);

  const onEditorStateChange = (editorStateChange) => {
    setCommentBoxState({
      ...commentBoxState,
      body: draftToHtmlHelper(editorStateChange)
    });
    setEditorState(editorStateChange);
  };

  useEffect(() => {
    if (editorTextareaRef) {
      editorTextareaRef.focus();
    }
  }, [editorTextareaRef]);

  useEffect(async () => {
    if (getComments) handleGetComment();
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handlePostComment = async () => {
    await postComment(
      {
        location,
        [commentKey]: data[selectableRowKey],
        comment: draftToHtmlHelper(editorState)
      },
      idSociety
    );
    setEditorState(null);
    await handleGetComment();
  };

  const handlePutComment = async (newComment) => {
    await putComment(
      {
        location,
        [commentKey]: data[selectableRowKey],
        comment: draftToHtmlHelper(newComment?.body)
      },
      newComment?.id,
      idSociety
    );
    await handleGetComment();
  };

  const handleGetComment = async () => {
    const comments = await getCommentsApi(
      { [commentKey]: data[selectableRowKey] },
      idSociety
    );
    refreshComment(comments, data[selectableRowKey]);
  };

  const buttons = [
    {
      _type: 'string',
      text: I18n.t('common.send'),
      onClick: handlePostComment,
      size: 'medium',
      color: 'primary',
      variant: 'contained'
    },
    {
      _type: 'string',
      text: I18n.t('common.cancel'),
      onClick: handleClose,
      size: 'medium',
      variant: 'outlined',
      color: 'default'
    }
  ];

  return (
    <>
      <div onClick={setIsOpen.bind(null, true)} className={classes.commentIcon}>
        <FontIcon name="icon-comments" />
        {data[dataKey]?.length > 0 && (
          <span className={classes.badge}>{data[dataKey].length}</span>
        )}
      </div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        classes={{ paper: classes.paper }}
      >
        <DialogTitle>{I18n.t('common.comments')}</DialogTitle>
        <DialogContent classes={{ root: classes.root }}>
          <div className={classes.editor}>
            <Editor
              editorState={editorState}
              wrapperClassName={classes.wrapperContainer}
              toolbarClassName={classes.toolbarContainer}
              editorClassName={classes.editorContainer}
              onEditorStateChange={onEditorStateChange}
              toolbar={toolbarOptions}
              editorRef={setEditorTextareaRef}
            />
          </div>
          <div className={classes.containerComment}>
            {data[dataKey]?.map((comment) => (
              <div key={comment.id} className={classes.separatorComment}>
                <Comment
                  comment={comment}
                  onEdit={handlePutComment}
                  canEdit={false}
                  hasHistory={false}
                />
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <InlineButton buttons={buttons} />
        </DialogActions>
      </Dialog>
    </>
  );
};

CommentCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default CommentCell;
