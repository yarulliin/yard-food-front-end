import { environment } from '../../../environments/environment';

const { baseUrl } = environment;

export const urls = {
  auth: `${baseUrl}/auth`,
  catalog: `${baseUrl}/catalog`,
  catalogWithId: (id: string) => `${baseUrl}/catalog/${id}`,
  profileInfo: (id: string) => `${baseUrl}/profile/${id}/info`,
  profileOrders: (id: string) => `${baseUrl}/profile/${id}/orders`,
}
