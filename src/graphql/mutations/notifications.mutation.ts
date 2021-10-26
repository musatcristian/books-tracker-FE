import { gql, MutationTuple, useMutation } from '@apollo/client';

const ADD_SUBSCRIPTION = gql`
  mutation AddSubscription($subscription: String) {
    addSubscription(subscription: $subscription) {
      _id
    }
  }
`;

export const useAddUserSubscription = (subscription: string): MutationTuple<any, any, any, any> => {
  return useMutation(ADD_SUBSCRIPTION, {
    variables: {
      subscription: subscription,
    },
  });
};
