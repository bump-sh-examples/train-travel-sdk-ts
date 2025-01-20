# BookingPayment

## Example Usage

```typescript
import { BookingPayment } from "train-travel-sdk/models/components";

let value: BookingPayment = {
  amount: 49.99,
  source: {
    name: "<value>",
    number: "<value>",
    accountType: "individual",
    bankName: "Starling Bank",
    country: "Puerto Rico",
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                                   | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | Amount intended to be collected by this payment. A positive decimal figure describing the amount to be collected.                                          | 49.99                                                                                                                                                      |
| `currency`                                                                                                                                                 | [components.Currency](../../models/components/currency.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                         | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.                                                          |                                                                                                                                                            |
| `source`                                                                                                                                                   | *components.Source*                                                                                                                                        | :heavy_minus_sign:                                                                                                                                         | The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking. |                                                                                                                                                            |