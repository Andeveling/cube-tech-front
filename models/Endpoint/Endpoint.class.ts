export class Endpoint {
  base: string = '';
  populates: string[] = [];
  query: string = '';
  constructor(base: string, populates: string[]) {
    this.base = base;
    if (populates.length)
      this.query = populates.reduce((finalEndpoint, populate) => finalEndpoint.concat(populate), '');
  }
  populateDeep() {
    this.base.concat(`?populate=deep`);
  }
}
