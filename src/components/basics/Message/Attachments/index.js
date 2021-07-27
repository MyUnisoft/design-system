import React, { memo } from 'react';
import PropTypes from 'prop-types';
import prettyBytes from 'pretty-bytes';
import { FontIcon } from '../../Icon';
import styles from './messageAttachments.module.scss';

const MessageAttachments = memo((props) => {
  const {
    attachments,
    onDelete,
    ...others
  } = props;

  return (
    <div className={styles.all} {...others}>
      { attachments.map((item, i) => (
        <div className={styles.item} key={`${item.id}-${i}`}>
          <a
            key={`${item.id}-link`}
            className={styles.button}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontIcon name="icon-attachment" color={null} />
            <span>
              { item.nom_original || item.libelle }
              &nbsp;
              { item.size && `(${prettyBytes(item.size)})` }
            </span>
          </a>

          <button
            key={`${item.id}-close`}
            type="button"
            className={styles.button}
            onClick={() => onDelete(item)}
          >
            {'❌'}
          </button>
        </div>
      ))
      }
    </div>
  );
});

MessageAttachments.propTypes = {
  attachments: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id_document: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        nom_original: PropTypes.string,
        size: PropTypes.number
      }
    )
  ),
  onClick: PropTypes.func,
  onDelete: PropTypes.func
};

MessageAttachments.defaultProps = {
  attachments: [],
  onClick: () => null,
  onDelete: () => null
};


export default MessageAttachments;
