import { ApolloError, gql, useQuery } from '@apollo/client';
import { IBook } from '@Contexts/index';

export const BOOK = gql`
  query GetBook {
    getBook {
      _id
      title
    }
  }
`;

const BOOKS = gql`
  query GetBooks {
    getBooks {
      _id
      title
    }
  }
`;

export const useBooksQuery = (): {
  books: IBook[];
  loadingBooks: boolean;
  booksError?: ApolloError;
} => {
  const { data, loading, error } = useQuery(BOOKS);

  return {
    books: data?.getBooks,
    loadingBooks: loading,
    booksError: error,
  };
};

export const useBookQuery = (): {
  book: IBook;
  loadingBook: boolean;
  bookError?: ApolloError;
} => {
  const { data, loading, error } = useQuery(BOOK);

  return {
    book: data?.getBook,
    loadingBook: loading,
    bookError: error,
  };
};
