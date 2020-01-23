import { writable, readable } from 'svelte/store';

export const hasSchool = new writable(false);
export const gotoIndex = new writable(0);
export const todayDate = new readable(getDate())



function getDate(){
    let today = new Date().toLocaleDateString('en-GB', {
        day : 'numeric',
        month : 'short',
        year : 'numeric'
    });
    return today.toUpperCase();
}