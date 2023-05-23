import produce, { Draft } from 'immer';
import jwtDecode from 'jwt-decode';
import { Reducer } from 'react';

export const USER_KEY = '@auth/user';
export const PERMISSION_KEY = '@auth/permissions';
export const ACCESS_TOKEN_KEY = '@auth/accessToken';
export const IMAGE_BASE_URL = 'http://192.168.155.235:82';

// #region State

export type AuthUserProps =
    | {
          firstName: string;
          lastName: string;
          fullName: string;
          email: string;
          userId: string;
          permissions: string[];
          role: string;
      }
    | undefined;

export type AuthState = {
    authDialogOpen: boolean;
    user: AuthUserProps;
    isLoggedIn: boolean;
    email?: string;
    selectedTab: number;
};

export const INITIAL_AUTH_STATE: AuthState = {
    authDialogOpen: false,
    user: undefined,
    isLoggedIn: true,
    email: undefined,
    selectedTab: 0,
};
// #endregion

// #region Sync Actions
type AuthLoadedAction = { type: 'AUTH_LOADED' };
type LoggedInAction = { type: 'LOGGED_IN'; accessToken: string };
type LoggedOutAction = { type: 'LOGGED_OUT' };
type AuthDialogOpenAction = { type: 'AUTH_DIALOG_OPENED'; email?: string; tab?: number };
type AuthDialogClosedAction = { type: 'AUTH_DIALOG_CLOSED' };
type SelectTabAction = { type: 'SELECT_TAB'; tab: number };
type ChangeUserNameAction = { type: 'CHANGE_USER_NAME'; firstName: string; lastName: string };
type SocialLoggedInAction = { type: 'SOCIAL_LOGGED_IN'; accessToken: string };

export type AuthAction =
    | AuthLoadedAction
    | LoggedInAction
    | LoggedOutAction
    | AuthDialogOpenAction
    | AuthDialogClosedAction
    | SelectTabAction
    | ChangeUserNameAction
    | SocialLoggedInAction;

const authLoaded = (draft: Draft<AuthState>) => {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
        draft.user = JSON.parse(user);
        draft.isLoggedIn = true;
        draft.email = JSON.parse(user).email;
    } else {
        draft.isLoggedIn = false;
    }
};

const loggedIn = (draft: Draft<AuthState>, accessToken) => {
    const user = jwtDecode(accessToken);
    const fullName = user.unique_name + ' ' + user.family_name;
    const normalizedUser: AuthUserProps = {
        firstName: user.unique_name,
        lastName: user.family_name,
        fullName,
        email: user.email,
        permissions: user['affa/permission'],
        userId: user.nameid,
        role: user.role,
    };
    draft.user = normalizedUser;
    draft.email = user.email;
    draft.isLoggedIn = true;
    localStorage.setItem(USER_KEY, JSON.stringify(normalizedUser));
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

const logIn = (draft: Draft<AuthState>, action: LoggedInAction) => {
    loggedIn(draft, action.accessToken);
};

const socialLogin = (draft: Draft<AuthState>, action: SocialLoggedInAction) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, action.accessToken);
    draft.authDialogOpen = true;
    draft.selectedTab = 2;
};

const logOut = (draft: Draft<AuthState>) => {
    draft.user = undefined;
    draft.isLoggedIn = false;
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(PERMISSION_KEY);
};

const openModal = (draft: Draft<AuthState>, action: AuthDialogOpenAction) => {
    draft.authDialogOpen = true;
    draft.email = action.email;
    if (action.tab !== undefined) {
        draft.selectedTab = action.tab;
    }
};
const closeModal = (draft: Draft<AuthState>) => {
    draft.authDialogOpen = false;
    draft.email = undefined;
};
const selectTab = (draft: Draft<AuthState>, action: SelectTabAction) => {
    draft.selectedTab = action.tab;
};
const changeUserName = (draft: Draft<AuthState>, action: ChangeUserNameAction) => {
    if (draft.user) {
        const user: AuthUserProps = {
            ...draft.user,
            firstName: action.firstName,
            lastName: action.lastName,
            fullName: action?.firstName + action?.lastName,
        };

        draft.user = user;
    }
};

export const reducer: Reducer<AuthState, AuthAction> = produce((draft: Draft<AuthState>, action: AuthAction): void => {
    switch (action.type) {
        case 'AUTH_LOADED':
            authLoaded(draft);
            break;
        case 'LOGGED_IN':
            logIn(draft, action);
            break;
        case 'LOGGED_OUT':
            logOut(draft);
            break;
        case 'AUTH_DIALOG_OPENED':
            openModal(draft, action);
            break;
        case 'AUTH_DIALOG_CLOSED':
            closeModal(draft);
            break;
        case 'SELECT_TAB':
            selectTab(draft, action);
            break;
        case 'CHANGE_USER_NAME':
            changeUserName(draft, action);
            break;
        case 'SOCIAL_LOGGED_IN':
            socialLogin(draft, action);
            break;
        default:
            break;
    }
});
