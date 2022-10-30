import {FormControl} from "@angular/forms";

export const nombreapellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerStrider = (control: FormControl) => {
  const val: string = control.value?.trim().toLowerCase();
  if (val == 'strider') {
    return { noStrider: true };
  }
  return null;
}
