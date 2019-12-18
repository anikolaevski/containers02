import {
  ErrorRepository,
} from '../src/js/ErrorRepository';

test('Test translate 001', () => {
  const er = new ErrorRepository();
  expect(er.translate('001')).toBe('Объект уже существует');
});

test('Test translate 002', () => {
  const er = new ErrorRepository();
  expect(er.translate('002')).toBe('Объект отсутствует');
});

test('Test translate unknown', () => {
  const er = new ErrorRepository();
  expect(er.translate('007')).toBe('007 - Описание ошибки отсутствует');
});
