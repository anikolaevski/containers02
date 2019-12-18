/* eslint-disable import/prefer-default-export */
export class ErrorRepository {

  constructor() {
    this.dict = new Map();
    this.dict.set('001', 'Объект уже существует' );
    this.dict.set('002', 'Объект отсутствует' );
  }

  translate(code) {
    if (this.dict.has(code)) {
      return this.dict.get(code);
    }
    return `${code} - Описание ошибки отсутствует`;
  }

}