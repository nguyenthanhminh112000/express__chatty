export class Helpers {
  static firstLetterUppercase(str: string) {
    const valueString = str.toLowerCase();

    return valueString
      .split(' ')
      .map((word) => `${word.charAt(0).toLocaleUpperCase()}${word.slice(1)}`)
      .join(' ');
  }

  static lowerCase(str: string): string {
    return str.toLocaleLowerCase(str);
  }

  static generateRandomIntegers(integerLength: number): number {
    const characters = '0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < integerLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return parseInt(result, 10);
  }
}