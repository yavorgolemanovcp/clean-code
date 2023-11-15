export function checkEmailOk(email:string) {
  if(!email.includes('@abv.bg')) {
    return;
  }
  // do stuff
}


function checkDataOk(data: any): boolean {
  if (!data || !data.user || !data.user.id) {
      return false;
  }
  // ... further checks or operations ...
  return true;
}