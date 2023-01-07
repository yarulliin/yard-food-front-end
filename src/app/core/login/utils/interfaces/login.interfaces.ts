import { ROLES } from '../../../../utils/enums/role.enums';

export interface Credentials {
  login: string;
  password: string;
}

export interface User {
  name: string;
  token: string;
  role: ROLES;
  id: string;
}
