/* eslint-disable no-throw-literal */
import { ErrorRepository } from './ErrorRepository';
// eslint-disable-next-line import/prefer-default-export
export class Team {
  constructor() {
    this.members = new Set();
    this.er = new ErrorRepository();
  }

  add(name) {
    if (!this.members.has(name)) {
      this.members.add(name);
    } else {
      throw (`001 - ${this.er.translate('001')}: ${name.name}`);
    }
  }

  addAll(...names) {
    names.forEach(name => this.add(name));
  }

  delete(name) {
    if (this.members.has(name)) {
      this.members.delete(name);
    } else {
      throw (`002 - ${this.er.translate('002')}: ${name.name}`);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
