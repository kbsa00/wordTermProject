export class RequestErrorToDigDir extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class FetchError extends Error {
  constructor(message: string) {
    super(message);
  }
}