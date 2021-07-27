import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { getEmojiHtml } from '../../../../helpers/emoji';
import CommentBoxStepper from '../../../../containers/groups/Headers/CommentBoxStepper';
import TextEditor from '../../../../containers/groups/TextEditor';

import Comments from './parts/Comments';
import PreformattedCommentSelector from './parts/PreformattedCommentSelector';
import { CommentsType } from './types';

import styles from './CommentBox.module.scss';

const CommentBox = ({
  getComments,
  createMode,
  onSubmit,
  onEdit,
  comments,
  defaultBody,
  isNotEditor,
  customCommentTitle
}) => {
  const [stateComments, setStateComments] = useState([]);
  const [areCommentsLoading, setCommentsLoading] = useState(true);
  const [templateComment, setTemplateComment] = useState(undefined);
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const _isMounted = useRef(true);

  const handleSubmit = async (data) => {
    setIsLoading(true);
    const stringWithNormalizedEmojis = [...data.body].map((value) => {
      if (value.match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/)) {
        return getEmojiHtml(value);
      }
      return value;
    }).join('');
    await onSubmit({ body: stringWithNormalizedEmojis, attachTo: data.attachTo });
    setIsLoading(false);
  };

  const updateComments = async () => {
    const data = await getComments();
    if (_isMounted.current) {
      setStateComments(data);
      setCommentsLoading(false);
    }
  };

  useEffect(() => {
    if (!createMode) {
      updateComments();
    }

    return () => {
      _isMounted.current = false;
    };
  }, []);

  const onTemplateChange = (value) => {
    setTemplateComment(value);
  };

  return (
    <div className={styles.container}>
      <CommentBoxStepper onClick={setActiveTab} activeTab={activeTab} customCommentTitle={customCommentTitle} />
      <PreformattedCommentSelector
        isVisible={activeTab === 1}
        onChange={onTemplateChange}
      />
      {!isNotEditor && (
        <TextEditor
          body={templateComment || defaultBody}
          isLoading={isLoading}
          onSubmit={handleSubmit}
          createMode={createMode}
        />
      )}
      {!createMode && (
        <Comments
          commentsLoading={areCommentsLoading}
          onEdit={onEdit}
          comments={comments || stateComments}
        />
      )}
    </div>
  );
};

CommentBox.defaultProps = {
  comments: undefined,
  createMode: false,
  defaultBody: '<p></p>',
  isNotEditor: false,
  customCommentTitle: null
};

CommentBox.propTypes = {
  comments: CommentsType,
  getComments: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  createMode: PropTypes.bool,
  defaultBody: PropTypes.string,
  isNotEditor: PropTypes.bool,
  customCommentTitle: PropTypes.string
};

export default CommentBox;
