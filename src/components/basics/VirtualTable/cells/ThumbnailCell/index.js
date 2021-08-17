import React, { memo, useState } from 'react';
import _first from 'lodash/first';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from '../../../../groups/Attachments/Image';
import Window from '../../../Window';
import { FontIcon } from '../../../Icon';
import { useWindowState } from '../../../../../hooks/useWindowState';
import useStyles from './styles';

const ThumbnailCell = memo(function ThumbnailCell({ data, dataKey }) {
  const styles = useStyles();
  const [isHovered, setHover] = useState(false);
  const popup = useWindowState();

  const documents = Array.isArray(data[dataKey])
    ? data[dataKey]
    : [data[dataKey]];
  const firstDocument = _first(documents);
  if (!firstDocument) {
    return <div className={styles.thumbnailCell} />;
  }

  const isFile = firstDocument.thumbnail instanceof File;
  const src = isFile
    ? URL.createObjectURL(firstDocument.thumbnail)
    : firstDocument.thumbnail;

  return (
    <div 
      className={styles.thumbnailCell}
      onClick={() => popup.open({ documents }, true)}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    >
      <div className={isHovered && styles.opacity}>
        <Image
          className={classNames(styles.thumbnail, isHovered && styles.opacity)}
          src={src}
          onUnload={() => isFile && URL.revokeObjectURL(src)}
        />
        {isHovered && (
          <FontIcon
            name="icon-view1"
            size={16}
            className={classNames(styles.viewIcon)}
          />
        )}
      </div>
      {popup.props.open && (
        <Window
          path="/overview"
          window_id="overview"
          features={`width=${window.innerWidth / 2}, left=${window.screenX + (window.innerWidth / 2)}`}
          {...popup.props}
        />
      )}
    </div>
  );
});

ThumbnailCell.propTypes = {
  data: PropTypes.object.isRequired
};

export default ThumbnailCell;
