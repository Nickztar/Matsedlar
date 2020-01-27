import { writable, readable } from 'svelte/store';

export const hasSchool = new writable(testForSchool());
export const gotoIndex = new writable(0);
export const todayDate = new readable(getDate());
export const selectedSchool = new writable(JSON.parse(getCookie('school')));



function getDate(){
    let today = new Date().toLocaleDateString('en-GB', {
        day : 'numeric',
        month : 'short',
        year : 'numeric'
    });
    return today.toUpperCase();
}
function testForSchool(){
    if(getCookie('school') != ""){
        return true;
    }else{
        return false;
    }
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }