import * as React from 'react';

import {
  CoinbaseTransaction,
  MempoolCoinbaseTransaction,
} from '@stacks/stacks-blockchain-api-types';

import { Section } from '../../../../common/components/Section';
import { Box } from '../../../../ui/Box';
import { Flex } from '../../../../ui/Flex';
import { BlockHash } from '../TxDetails/BlockHash';
import { BlockHeight } from '../TxDetails/BlockHeight';
import { Fees } from '../TxDetails/Fees';
import { ID } from '../TxDetails/ID';
import { NonCanonical } from '../TxDetails/NonCanonical';
import { Nonce } from '../TxDetails/Nonce';
import { Sender } from '../TxDetails/Sender';

interface TxDetailsProps {
  tx: CoinbaseTransaction | MempoolCoinbaseTransaction;
}

export const TxDetails: React.FC<TxDetailsProps> = ({ tx }) => {
  return (
    <Section title="Summary">
      <Flex width="100%" flexDirection={['column', 'column', 'row']}>
        <Box width={['100%']}>
          <ID tx={tx} />
          <Sender tx={tx} />
          <Fees tx={tx} />
          <Nonce tx={tx} />
          <BlockHeight tx={tx} />
          <BlockHash tx={tx} />
          <NonCanonical tx={tx} />
        </Box>
      </Flex>
    </Section>
  );
};
