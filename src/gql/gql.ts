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
    "fragment CartFragment on Checkout {\n  id\n  lines {\n    ...CartLine\n  }\n}": types.CartFragmentFragmentDoc,
    "mutation CartAddProduct($id: ID!, $lines: [CheckoutLineUpdateInput!]!) {\n  checkoutLinesUpdate(id: $id, lines: $lines) {\n    errors {\n      field\n      message\n    }\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate($lines: [CheckoutLineInput!]!, $channel: String!) {\n  checkoutCreate(input: {lines: $lines, channel: $channel}) {\n    checkout {\n      ...CartFragment\n    }\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  checkout(id: $id) {\n    ...CartFragment\n  }\n}": types.CartGetByIdDocument,
    "fragment CartLine on CheckoutLine {\n  id\n  quantity\n  variant {\n    id\n    name\n    product {\n      id\n      name\n      thumbnail {\n        url\n      }\n    }\n    pricing {\n      price {\n        net {\n          amount\n        }\n      }\n    }\n  }\n}": types.CartLineFragmentDoc,
    "query Categories($first: Int!) {\n  categories(first: $first) {\n    edges {\n      node {\n        ...Category\n      }\n    }\n  }\n}": types.CategoriesDocument,
    "fragment Category on Category {\n  id\n  name\n  slug\n}": types.CategoryFragmentDoc,
    "query CategoryProductsBySlug($first: Int!, $after: String, $channel: String!, $slug: String!) {\n  category(slug: $slug) {\n    ...Category\n    products(first: $first, after: $after, channel: $channel) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n      }\n      edges {\n        node {\n          ...Product\n        }\n      }\n    }\n  }\n}": types.CategoryProductsBySlugDocument,
    "fragment Collection on Collection {\n  id\n  name\n  slug\n}": types.CollectionFragmentDoc,
    "query CollectionsProductsBySlug($first: Int!, $channel: String!, $slug: String!) {\n  collection(slug: $slug, channel: $channel) {\n    name\n    id\n    slug\n    products(first: $first) {\n      edges {\n        node {\n          ...Product\n        }\n      }\n    }\n  }\n}": types.CollectionsProductsBySlugDocument,
    "query Collections($first: Int!, $channel: String!) {\n  collections(first: $first, channel: $channel) {\n    edges {\n      node {\n        name\n        id\n        slug\n      }\n    }\n  }\n}": types.CollectionsDocument,
    "fragment Money on Money {\n  amount\n  currency\n}": types.MoneyFragmentDoc,
    "fragment Product on Product {\n  id\n  slug\n  name\n  description\n  pricing {\n    priceRange {\n      start {\n        gross {\n          ...Money\n        }\n      }\n    }\n  }\n  media {\n    id\n    url\n    alt\n  }\n  thumbnail {\n    url\n    alt\n  }\n  variants {\n    ...Variant\n  }\n  defaultVariant {\n    ...Variant\n  }\n}": types.ProductFragmentDoc,
    "query ProductBySlug($slug: String!, $channel: String!) {\n  product(slug: $slug, channel: $channel) {\n    ...Product\n  }\n}": types.ProductBySlugDocument,
    "query ProductsSearch($channel: String!, $first: Int!, $search: String!) {\n  products(channel: $channel, first: $first, search: $search) {\n    edges {\n      node {\n        ...Product\n      }\n    }\n  }\n}": types.ProductsSearchDocument,
    "fragment Variant on ProductVariant {\n  id\n  name\n  pricing {\n    priceUndiscounted {\n      gross {\n        ...Money\n      }\n    }\n    price {\n      gross {\n        ...Money\n      }\n    }\n  }\n}": types.VariantFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartFragment on Checkout {\n  id\n  lines {\n    ...CartLine\n  }\n}"): typeof import('./graphql').CartFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($id: ID!, $lines: [CheckoutLineUpdateInput!]!) {\n  checkoutLinesUpdate(id: $id, lines: $lines) {\n    errors {\n      field\n      message\n    }\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($lines: [CheckoutLineInput!]!, $channel: String!) {\n  checkoutCreate(input: {lines: $lines, channel: $channel}) {\n    checkout {\n      ...CartFragment\n    }\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  checkout(id: $id) {\n    ...CartFragment\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartLine on CheckoutLine {\n  id\n  quantity\n  variant {\n    id\n    name\n    product {\n      id\n      name\n      thumbnail {\n        url\n      }\n    }\n    pricing {\n      price {\n        net {\n          amount\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartLineFragmentDoc;
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
export function graphql(source: "query CategoryProductsBySlug($first: Int!, $after: String, $channel: String!, $slug: String!) {\n  category(slug: $slug) {\n    ...Category\n    products(first: $first, after: $after, channel: $channel) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n      }\n      edges {\n        node {\n          ...Product\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoryProductsBySlugDocument;
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
export function graphql(source: "fragment Money on Money {\n  amount\n  currency\n}"): typeof import('./graphql').MoneyFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Product on Product {\n  id\n  slug\n  name\n  description\n  pricing {\n    priceRange {\n      start {\n        gross {\n          ...Money\n        }\n      }\n    }\n  }\n  media {\n    id\n    url\n    alt\n  }\n  thumbnail {\n    url\n    alt\n  }\n  variants {\n    ...Variant\n  }\n  defaultVariant {\n    ...Variant\n  }\n}"): typeof import('./graphql').ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductBySlug($slug: String!, $channel: String!) {\n  product(slug: $slug, channel: $channel) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearch($channel: String!, $first: Int!, $search: String!) {\n  products(channel: $channel, first: $first, search: $search) {\n    edges {\n      node {\n        ...Product\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsSearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Variant on ProductVariant {\n  id\n  name\n  pricing {\n    priceUndiscounted {\n      gross {\n        ...Money\n      }\n    }\n    price {\n      gross {\n        ...Money\n      }\n    }\n  }\n}"): typeof import('./graphql').VariantFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
