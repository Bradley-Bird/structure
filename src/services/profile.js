import { client } from './client';

export async function getProfile(id) {
  const resp = await client.from('profile').match({ id }).single();
  return resp;
}
