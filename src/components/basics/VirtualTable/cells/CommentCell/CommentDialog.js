import React, { useEffect, useContext, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import { Editor } from 'react-draft-wysiwyg';

import { draftToHtmlHelper } from '../../../../../helpers/textEditor';
import { postComment, putComment } from '../../../../../services/comments';
import I18n from '../../../../../assets/I18n';
import Comment from '../../../../groups/Comments/Box/parts/Comment';
import { InlineButton } from '../../../Buttons';
import VirtualTableContext from '../../context';

import useStyles from './styles';
import { commentBoxInitialState, toolbarOptions } from './utils';

const CommentDialog = ({
  isOpen,
  handleClose,
  data,
  columnIndex,
  handleGetComment,
  dataKey
}) => {
  const classes = useStyles();
  const { config } = useContext(VirtualTableContext);
  const { selectableRowKey, idSociety, columns = [] } = config;
  const {
    canEdit = false,
    commentKey = '',
    location = ''
  } = columns[columnIndex];
  const [commentBoxState, setCommentBoxState] = useState(
    commentBoxInitialState
  );
  const [editorState, setEditorState] = useState(null);
  const [editorTextareaRef, setEditorTextareaRef] = useState(null);

  useEffect(() => {
    if (editorTextareaRef) {
      editorTextareaRef.focus();
    }
  }, [editorTextareaRef]);

  const onEditorStateChange = (editorStateChange) => {
    setCommentBoxState({
      ...commentBoxState,
      body: draftToHtmlHelper(editorStateChange)
    });
    setEditorState(editorStateChange);
  };

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
        comment: newComment?.body // The TextEditor component already does the conversion
      },
      newComment?.id,
      idSociety
    );
    await handleGetComment();
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
                canEdit={true}
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
  );
};

export default CommentDialog;
