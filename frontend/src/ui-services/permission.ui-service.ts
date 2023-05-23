import { USER_KEY } from 'context/auth/reducer';

export const hasPermission = (permission): boolean => {
    const permissions = JSON.parse(localStorage.getItem(USER_KEY) as string).permissions || [];

    return permissions.some((per) => per === permission);
};
