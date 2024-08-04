import React from 'react';
import StorePage from '../../../src/container/storePage/StorePage';
import { GetServerSideProps } from 'next';

export interface StoreProps {
  storeId: number;
}

const Store: React.FC<StoreProps> = (props) => {
  return (
    <>
      <StorePage {...props} />
    </>
  );
};

export default Store;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const storeId = Number(context.params?.store);
  return {
    props: {
      storeId,
    },
  };
};
