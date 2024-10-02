export class HttpClient {
  response: any;

  async get(url: string) {
    //if (this.response) return this.response;

    this.response = fetch(url);

    return this.response;
  }
}
