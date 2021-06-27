import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useUserQuery } from '@GraphQL/queries';
import { BookID, IBook, UserID } from './books.context';

export interface IUser {
  id: UserID;
  name: string;
  books: BookID[];
  reading: IBook[];
}

const enum UserActions {
  SET_USER = 'SET_USER',
}

export type UserActionType = {
  type: UserActions.SET_USER;
  payload: IUser;
};

const UserContext = createContext<IUser | null>(null);

const userReducer = (state: IUser | null, action: UserActionType): IUser | null => {
  const { type, payload } = action;
  switch (type) {
    case UserActions.SET_USER: {
      return payload;
    }
    default:
      return state;
  }
};

export const UserProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [state, dispatch] = useReducer(userReducer, null);

  const user = useUserQuery('607a8557fc7e23509da60a07');

  useEffect(() => {
    if (user) {
      dispatch({
        type: UserActions.SET_USER,
        payload: user,
      });
    }
  }, [user]);

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export const useUserContext = (): IUser | null => {
  const user = useContext<IUser | null>(UserContext);

  return user;
};
