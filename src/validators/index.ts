const maxLength = (max: number): Function => (value: string): string =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const minLength = (min: number): Function => (value: string): string =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const required = (value: string): string =>
  value ? undefined : 'Required';

export const maxLength15 = maxLength(15);

export const minLength8 = minLength(8);

export const email = (value: string): string =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const alphaNumeric = (value: string): string =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
