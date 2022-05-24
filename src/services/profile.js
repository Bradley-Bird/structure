import { client, parseData } from './client';

export async function fetchProfileById(id) {
  const resp = await client.from('profile').select().match({ id: id }).single();
  return parseData(resp);
}
