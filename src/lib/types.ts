export type Maybe<T> = T | null | undefined;

export type GraphQLResponse<T> =
  | { data?: undefined; errors: { message: string }[] }
  | { data: T; errors?: undefined };
