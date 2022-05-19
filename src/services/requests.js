import { client, parseData } from './client';

export async function fetchRequests() {
  const resp = await client.from('requests').select();
  return resp;
}

export async function postRequests(request) {
  const resp = await client.from('requests').insert(request);
  return parseData(resp);
}
