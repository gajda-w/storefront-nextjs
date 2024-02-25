/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query Categories($first: Int!) {\n  categories(first: $first) {\n    edges {\n      node {\n        ...Category\n      }\n    }\n  }\n}": types.CategoriesDocument,
    "fragment Category on Category {\n  id\n  name\n  slug\n}": types.CategoryFragmentDoc,
    "query CategoryProductsBySlug($first: Int!, $channel: String!, $slug: String!) {\n  category(slug: $slug) {\n    ...Category\n    products(first: $first, channel: $channel) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          ...Product\n        }\n      }\n    }\n  }\n}": types.CategoryProductsBySlugDocument,
    "fragment Collection on Collection {\n  id\n  name\n  slug\n}": types.CollectionFragmentDoc,
    "query CollectionsProductsBySlug($first: Int!, $channel: String!, $slug: String!) {\n  collection(slug: $slug, channel: $channel) {\n    name\n    id\n    slug\n    products(first: $first) {\n      edges {\n        node {\n          ...Product\n        }\n      }\n    }\n  }\n}": types.CollectionsProductsBySlugDocument,
    "query Collections($first: Int!, $channel: String!) {\n  collections(first: $first, channel: $channel) {\n    edges {\n      node {\n        name\n        id\n        slug\n      }\n    }\n  }\n}": types.CollectionsDocument,
    "fragment Product on Product {\n  id\n  slug\n  name\n  description\n  thumbnail {\n    url\n    alt\n  }\n  variants {\n    id\n    name\n    product {\n      name\n    }\n  }\n  defaultVariant {\n    id\n    name\n    pricing {\n      price {\n        gross {\n          amount\n          currency\n        }\n      }\n    }\n  }\n}": types.ProductFragmentDoc,
    "query ProductBySlug($slug: String!, $channel: String!) {\n  product(slug: $slug, channel: $channel) {\n    ...Product\n  }\n}": types.ProductBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Categories($first: Int!) {\n  categories(first: $first) {\n    edges {\n      node {\n        ...Category\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Category on Category {\n  id\n  name\n  slug\n}"): typeof import('./graphql').CategoryFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryProductsBySlug($first: Int!, $channel: String!, $slug: String!) {\n  category(slug: $slug) {\n    ...Category\n    products(first: $first, channel: $channel) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          ...Product\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoryProductsBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Collection on Collection {\n  id\n  name\n  slug\n}"): typeof import('./graphql').CollectionFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsProductsBySlug($first: Int!, $channel: String!, $slug: String!) {\n  collection(slug: $slug, channel: $channel) {\n    name\n    id\n    slug\n    products(first: $first) {\n      edges {\n        node {\n          ...Product\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsProductsBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Collections($first: Int!, $channel: String!) {\n  collections(first: $first, channel: $channel) {\n    edges {\n      node {\n        name\n        id\n        slug\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Product on Product {\n  id\n  slug\n  name\n  description\n  thumbnail {\n    url\n    alt\n  }\n  variants {\n    id\n    name\n    product {\n      name\n    }\n  }\n  defaultVariant {\n    id\n    name\n    pricing {\n      price {\n        gross {\n          amount\n          currency\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductBySlug($slug: String!, $channel: String!) {\n  product(slug: $slug, channel: $channel) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductBySlugDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
