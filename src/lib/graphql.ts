import { type GraphQLResponse } from "@/lib/types";
import { type TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables>({
  query,
  variables,
  cache,
  next,
  headers,
}: {
  query: TypedDocumentString<TResult, TVariables>;
  cache?: RequestCache;
  headers?: HeadersInit;
  next?: NextFetchRequestConfig | undefined;
} & (TVariables extends { [key: string]: never }
  ? { variables?: never }
  : { variables: TVariables })): Promise<TResult> => {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_URL) {
    throw TypeError("NEXT_PUBLIC_GRAPHQL_URL is not defined");
  }

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    cache,
    next,
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  });

  const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

  if (graphqlResponse.errors) {
    throw TypeError(`GraphQL Error`, {
      cause: graphqlResponse.errors,
    });
  }

  return graphqlResponse.data;
};
