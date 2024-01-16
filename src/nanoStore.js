import { atom } from 'nanostores';

export const count = atom(0);
export const inc = () => count.set(count.get() + 1);
export const dec = () => count.set(count.get() - 1);
export const reset = () => count.set(0);
