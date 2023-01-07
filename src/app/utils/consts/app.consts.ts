import { ROUTES } from '../enums/app.enums';

export const TOKEN_BLACKLIST_ROUTES: string[] = [ROUTES.AUTH];
export const tokenTemplate = (token: string) => `Bearer_${token}`;
