/* eslint-disable no-prototype-builtins */
import React, {
  useState, useEffect, useMemo
} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import I18n from '../../../assets/I18n';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ColorPicker from '../../basics/ColorPicker';
import Loader from '../../basics/Loader';
import {
  htmlToDraftHelper,
  draftToHtmlHelper
} from '../../../helpers/textEditor';
import AttachToNotes from '../../../containers/groups/TextEditor/AttachToNotes';
import { useDispatch } from 'react-redux';
import {
  AttachTo,
  CommentBoxButtons
} from './parts';
import styles from './TextEditor.module.scss';

const toolbarOptions = {
  options: ['inline', 'list', 'colorPicker', 'link', 'emoji', 'history'],
  inline: {
    options: ['bold', 'italic', 'underline']
  },
  list: {
    options: ['unordered']
  },
  colorPicker: {
    component: ColorPicker
  }
};

const commentBoxInitialState = {
  body: '',
  attachTo: {}
};

const TextEditor = ({
  className,
  onSubmit,
  onCancelCustom,
  hideOptions,
  body,
  isLoading,
  openConfirmationDialog,
  closeDialog,
  createMode,
  toolbarHidden,
  confirmCancel,
  canSave
}) => {
  const [editorState, setEditorState] = useState(htmlToDraftHelper(body));
  const [commentBoxState, setCommentBoxState] = useState(commentBoxInitialState);
  const [editorTextareaRef, setEditorTextareaRef] = useState(null);
  const dispatch = useDispatch();

  const onEditorStateChange = (editorState) => {
    setCommentBoxState({
      ...commentBoxState,
      body: draftToHtmlHelper(editorState)
    });
    setEditorState(editorState);
  };

  const canSaveInternal = useMemo(
    () => canSave(commentBoxState.body),
    [commentBoxState]
  );

  useEffect(() => {
    onEditorStateChange(htmlToDraftHelper(body));
  }, [body]);

  useEffect(() => {
    if (editorTextareaRef) {
      editorTextareaRef.focus();
    }
  }, [editorTextareaRef]);

  const discardState = () => {
    if (onCancelCustom) {
      onCancelCustom();
    }

    setEditorState(EditorState.createEmpty());
    setCommentBoxState(commentBoxInitialState);
    closeDialog();
  };

  const onCancel = () => {
    if (confirmCancel && commentBoxState.body !== body) {
      openConfirmationDialog({
        title: I18n.t('notifications.warning'),
        body: I18n.t('notifications.canLoseChanges'),
        buttons: [
          {
            _type: 'string',
            text: I18n.t('notifications.yes'),
            onClick: discardState,
            color: 'error',
            variant: 'outlined'
          },
          {
            _type: 'string',
            text: I18n.t('notifications.no'),
            color: 'default',
            variant: 'outlined'
          }
        ]
      });
    } else {
      discardState();
    }
  };

  const handleOnSubmit = async () => {
    // save the comment
    await onSubmit({
      body: commentBoxState.body,
      attachTo: commentBoxState.attachTo
    });

    setEditorState(EditorState.createEmpty());
    setCommentBoxState(commentBoxInitialState);

    if (createMode) closeDialog();
  };

  const onAttachToStateChange = (key, value) => {
    const newCommentBoxState = {
      ...commentBoxState,
      attachTo: {
        ...commentBoxState.attachTo,
        [key]: {}
      }
    };
    if (!value) {
      delete newCommentBoxState.attachTo[key];
    }

    setCommentBoxState(newCommentBoxState);
  };

  const setNotesInfo = (value) => {
    const newCommentBoxState = {
      ...commentBoxState,
      attachTo: {
        ...commentBoxState.attachTo,
        attachToNotes: value
      }
    };
    setCommentBoxState(newCommentBoxState);
  };

  const renderAttachToNotes = attachTo => (
    attachTo.hasOwnProperty('attachToNotes') && (
      <AttachToNotes
        setNotesInfo={setNotesInfo}
        notesInfo={commentBoxState.attachTo.attachToNotes}
      />
    )
  );

  return (
    <div className={classnames(styles.textEditorWrapper, className)}>
      <Editor
        editorState={editorState}
        wrapperClassName={styles.wrapperContainer}
        toolbarClassName={styles.toolbarContainer}
        editorClassName={styles.editorContainer}
        onEditorStateChange={onEditorStateChange}
        toolbar={toolbarOptions}
        toolbarHidden={toolbarHidden}
        editorRef={setEditorTextareaRef}
      />
      {!hideOptions && (
        <React.Fragment>
          <br />
          <AttachTo
            onChange={onAttachToStateChange}
            state={commentBoxState.attachTo}
          />
          {renderAttachToNotes(commentBoxState.attachTo)}
        </React.Fragment>
      )}
      <CommentBoxButtons
        disabled={(
          commentBoxState.body === body
            || !commentBoxState.body
            || !canSaveInternal
        )}
        onSubmit={handleOnSubmit}
        onCancel={onCancel}
      />
      {isLoading && (
        <div className={styles.editorOverlay}>
          <Loader />
        </div>
      )}
    </div>
  );
};

TextEditor.defaultProps = {
  className: '',
  onCancelCustom: undefined,
  hideOptions: false,
  body: '',
  createMode: false,
  toolbarHidden: false,
  confirmCancel: true,
  canSave: () => true
};

TextEditor.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onCancelCustom: PropTypes.func,
  hideOptions: PropTypes.bool,
  body: PropTypes.string,
  openConfirmationDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  createMode: PropTypes.bool,
  toolbarHidden: PropTypes.bool,
  confirmCancel: PropTypes.bool,
  canSave: PropTypes.func
};

export default TextEditor;
