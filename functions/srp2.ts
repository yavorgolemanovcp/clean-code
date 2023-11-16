export function checkIfIsInArray(): void {
  if (isInArray()) {
    throw new Error('Refresh token has expired!');
  } else {
    this.updateArray();
  }
}


//parseJson