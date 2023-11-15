
export function checkEmail(email:string) {
  if(email.includes('a')) {
    // do stuff
  }
}

function checkData(data: any): boolean {
  if (data) {
      if (data.user) {
          if (data.user.id) {
              // ... more nested conditions ...
              return true;
          }
      }
  }
  return false;
}

