import { FC, Fragment } from 'react';

import { AddressTransactionWithTransfersStxTransfers } from '@stacks/blockchain-api-client/src/generated/models';
import { Transaction } from '@stacks/stacks-blockchain-api-types';

import { microToStacksFormatted } from '../../../common/utils/utils';
import { TransferListItem } from './TransferListItem';

interface StxTransfersProps {
  address: string;
  stxTransfers: AddressTransactionWithTransfersStxTransfers[];
  tx: Transaction;
}

export const StxTransfers: FC<StxTransfersProps> = ({ address, stxTransfers, tx }) => (
  <Fragment>
    {stxTransfers.map((stxTransfer, i) => (
      <TransferListItem
        key={`stx-transfer-${i}`}
        title={'BASE transfer'}
        sender={stxTransfer.sender}
        recipient={stxTransfer.recipient}
        amount={`${
          stxTransfer.amount ? microToStacksFormatted(stxTransfer.amount).toString() : '-'
        } BASE`}
        isOriginator={address === stxTransfer.sender}
      />
    ))}
  </Fragment>
);
