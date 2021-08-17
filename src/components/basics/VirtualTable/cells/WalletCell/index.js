import React from 'react';

import PropTypes from 'prop-types';
import _get from 'lodash/get';
import _head from 'lodash/head';
import I18n from 'i18next';
import Tooltip from '@material-ui/core/Tooltip';

import useStyles from './styles';

function WalletCell({ data, dataKey }) {
  const classes = useStyles();

  const { count = 0, array = [] } = _get(data, dataKey, {});

  if (count === 0 ) {
    return <div />;
  }

  if ( count === 1 ) {
    return (<div>{ _head(array)?.id }</div>); 
  }

  function renderListWallet() {
    return array.map((wallet, index) => <li key={index}>{wallet.id}</li>);
  }

  return (
    <Tooltip
      title={renderListWallet()}
    >
      <div >
        {I18n.t('dashboard.ba.linkTo')}
        <span className={classes.count}>{count}</span>
        {I18n.t('dashboard.ba.wallets')}
      </div>
    </Tooltip>
    
  );
}

WalletCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default WalletCell;