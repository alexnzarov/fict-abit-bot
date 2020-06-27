export const any = (options: string[]) => (`(${options.join('|')})`);

export const rotate = (a: string, b: string) => {
  return `(${a}${b}|${b}${a})`;
};
