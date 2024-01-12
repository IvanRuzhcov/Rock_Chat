import { promises } from 'dns';
import { RegisterData } from './type/RegisterData';
import { User } from './type/User';

export const registerFetch = async (obj: RegisterData)=> {
  console.log('--->', obj);
  const res = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};
