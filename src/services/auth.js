import { client, parseData } from './client';

export function getUser() {
  return client.auth.user();
}
export function getSession() {
  return client.auth.session();
}

export async function signUp({ email, password }) {
  const resp = await client.auth.signUp({ email, password });
  console.log('resp', resp);
  return resp;
}

export async function postProfileName(first, last, id) {
  const resp = await client
    .from('profile')
    .update({ firstName: first, lastName: last })
    .match({ id });
  return parseData(resp);
}

export async function signIn({ email, password }) {
  const resp = await client.auth.signIn({ email, password });
  return parseData(resp);
}

export async function signOut() {
  return client.auth.signOut();
}
