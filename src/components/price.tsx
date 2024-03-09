import { type MoneyFragment } from "@/gql/graphql";
import { type Maybe } from "@/lib/types";

type PriceProps = {
  price: Maybe<MoneyFragment>;
  priceUndiscounted?: Maybe<MoneyFragment>;
};

// TODO: add correct price format depending on currency/region etc.

export const Price = ({ price, priceUndiscounted }: PriceProps) => {
  return (
    <div>
      <p className="text-xl text-green-900">{`${price?.amount} ${price?.currency}`}</p>
      {!!priceUndiscounted && (
        <p className="text-red-900 line-through">{`${priceUndiscounted.amount} ${priceUndiscounted.currency}`}</p>
      )}
    </div>
  );
};

Price.displayName = "Price";
