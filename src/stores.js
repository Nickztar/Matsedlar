import { writable, readable } from 'svelte/store';

export const hasSchool = new writable(false);
export const gotoIndex = new writable(0);