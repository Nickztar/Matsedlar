import {
  writable,
  readable
} from 'svelte/store';

export const hasSchool = new writable(testForSchool());
export const gotoIndex = new writable(0);
export const todayDate = new readable(getDate());
export const selectedSchool = new writable(getCookie('school'));
export const homeWeek = new readable(skipWeekend());
export const requestedWeek = new writable(skipWeekend());


function getDate() {
  let today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  return today.toUpperCase();
}

function testForSchool() {
  const cookies = getCookie('school');
  if (cookies != "" || cookies == typeof (Object)) {
    return true;
  } else {
    return false;
  }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return JSON.parse(c.substring(name.length, c.length));
    }
  }
  return "";
}
export function skipWeekend(){
  let date = new Date();
  let day = date.getDay();
  if (day > 5 || day < 1){
      return 1;
  }else{
    return 0;
  }
}