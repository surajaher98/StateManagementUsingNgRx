import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './user.reducer'

const getUserFetureState = createFeatureSelector<State>('usersState');

export const getUser = createSelector(
    getUserFetureState,
    state => state.users
)

export const getError = createSelector(
    getUserFetureState,
    state => state.error
)

