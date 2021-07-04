import { gql, useQuery } from '@apollo/client';
import { IUser } from '@Contexts/user.context';
import { UserID } from '@Contexts/books.context';

export const USERS = gql`
  query Users {
    getUsers {
      __typename
      name
      reading {
        title
        currentUsers
      }
    }
  }
`;

const USER = gql`
  query User($userId: String) {
    getUserById(id: $userId) {
      __typename
      name
    }
  }
`;

export const useUserQuery = (userId: UserID): IUser => {
  const { data } = useQuery(USER, {
    variables: {
      userId,
    },
  });

  return data?.getUserById;
};
