# CreateBookingPaymentRequest

## Example Usage

```typescript
import { CreateBookingPaymentRequest } from "train-travel-sdk/models/operations";

let value: CreateBookingPaymentRequest = {
  bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  bookingPayment: {
    amount: 49.99,
    source: {
      name: "Francis Bourgeois",
      number: "4242424242424242",
      cvc: "123",
      expMonth: 12,
      expYear: 2025,
      addressCountry: "<value>",
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `bookingId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | The ID of the booking to pay for.                                      | 1725ff48-ab45-4bb5-9d02-88745177dedb                                   |
| `bookingPayment`                                                       | [components.BookingPayment](../../models/components/bookingpayment.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |