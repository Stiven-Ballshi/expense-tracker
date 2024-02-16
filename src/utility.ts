export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // Check is user agent is safari

export function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const period = hours < 12 ? 'AM' : 'PM';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zero for single-digit minutes
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  // Create the formatted time string
  const formattedTime = `${hours}:${formattedMinutes}${period}`;

  return formattedTime;
}

export const shuffleArray = (array: any[]) => {
  let counter = array.length;
  
  while(counter > 0) {
    let index = Math.floor(Math.random() * counter);
    
    counter--;

    let lastVal = array[counter] // last value

    array[counter] = array[index]; //switch last value with the current value to mix up
    array[index] = lastVal
  }

  return array;
}



export const timestampConverter = (dateNumber: number) => {
  const options = {  
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
  };

   const date = new Date(dateNumber) 
   const formattedDate = date.toLocaleTimeString('en-US', options as any)
   return formattedDate;
}