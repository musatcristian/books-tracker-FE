import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useBooksQuery } from '@GraphQL/queries';

export type BookID = string;
export type UserID = string;

export interface IBook {
  id: BookID;
  title: string;
  currentUsers: UserID[];
  reviews: string[];
}

const enum BooksActions {
  SET_BOOKS = 'SET_BOOKS',
}

export type BooksActionType = {
  type: BooksActions.SET_BOOKS;
  payload: IBook[];
};

const BooksContext = createContext<IBook[]>([]);

const booksReducer = (state: IBook[], action: BooksActionType): IBook[] => {
  const { type, payload } = action;
  switch (type) {
    case BooksActions.SET_BOOKS: {
      return [...payload, ...state];
    }
    default:
      return state;
  }
};

export const BooksProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [state, dispatch] = useReducer(booksReducer, []);

  const { books, loadingBooks, booksError } = useBooksQuery();

  useEffect(() => {
    if (!loadingBooks && !booksError && books) {
      dispatch({
        type: BooksActions.SET_BOOKS,
        payload: books,
      });
    }
  }, [books]);

  return <BooksContext.Provider value={state}>{children}</BooksContext.Provider>;
};

export const useBooksContext = (): IBook[] => {
  const books = useContext<IBook[]>(BooksContext);

  return books;
};
