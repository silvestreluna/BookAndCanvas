import React from 'react';
import globalHook from 'use-global-hook';

const initialState = {
  user: null,
};

const actions = {
  setUser: (store, user) => {
    store.setState({ user: { ...user } });
  },
};

const useGlobalState = globalHook(React, initialState, actions);

export default useGlobalState;
