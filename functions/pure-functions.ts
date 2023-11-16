
let globalValue = 10;

function addToGlobalValue(value: number): void {
  globalValue += value;
}


function add(a: number, b: number): number {
  return a + b;
}


var a = {};

function mutateObject(a) {
  a.value = 3;
}


function makeUpperCase(string: string) {
  string = string.toUpperCase();
}