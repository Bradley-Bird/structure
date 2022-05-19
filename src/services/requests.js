import { client } from './client';

export async function fetchRequests() {
  const resp = await client.from('requests').select();
  return resp;
}
