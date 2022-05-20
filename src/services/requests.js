import { client, parseData } from './client';

export async function fetchRequests() {
  const resp = await client.from('requests').select();
  return resp;
}

export async function postRequests(id, request) {
  const resp = await client
    .from('requests')
    .insert({ user_id: id, request: request })
    .single();
  return parseData(resp);
}

export async function fetchRequestById(id) {
  const resp = await client.from('requests').select().match({ id }).single();
  return resp;
}
