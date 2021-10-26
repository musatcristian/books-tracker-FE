import { gql, useQuery } from '@apollo/client';

export const VAPID = gql`
  query VapidKeys {
    getPublicKey
  }
`;

export const useVapidQuery = (): string => {
  const { data } = useQuery(VAPID);
  return data?.getPublicKey;
};
