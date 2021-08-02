import { gql, MutationTuple, useMutation } from '@apollo/client';

const ADD_USER = gql`
  mutation AddUser($name: String) {
    addUser(name: $name) {
      _id
      name
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($name: String) {
    addUser(name: $name)
  }
`;

export const DELETE_MANY_USERS = gql`
  mutation DeleteManyUsers($name: String) {
    deleteUsers(name: $name)
  }
`;

export const useAddUserMutation = (name: string): MutationTuple<any, any, any, any> => {
  return useMutation(ADD_USER, {
    variables: {
      name: name,
    },
  });
};
