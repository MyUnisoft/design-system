import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Box } from "@material-ui/core";
import { useMultipleCellStyles } from '../multipleCellStyles';

const ViewMultipleCell = ({ data, arrayData }) => {
  const styles = useMultipleCellStyles();
  return (
    <div className={cx(styles.multipleCell)}>
      {
        Array.isArray(arrayData) ?
          arrayData.map((row, row_index) => (
            <Box
              key={row_index}
              display="flex"
              flexDirection="row"
              css={styles.borderBottom}
            >
              {
                Object.keys(row).map((key, index) => {
                  return (
                    <Box
                      key={index}
                      flex={row[key].size}
                      css={index !== Object.keys(row).length - 1 ? styles.borderRight: {}}
                      pl="4px"
                      pr="4px"
                    >
                      {row[key].label}
                    </Box>
                  );
                })
              }
            </Box>
          ))
          : data?.toString()
      }
    </div>
  );
};

ViewMultipleCell.propTypes = {
  data: PropTypes.string
};

ViewMultipleCell.defaultProps = {
  data: ''
};

export default ViewMultipleCell;
