# GetBookingsBookingsResponseBody

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).

## Example Usage

```typescript
import { GetBookingsBookingsResponseBody } from "train-travel-sdk/models/operations";

let value: GetBookingsBookingsResponseBody = {
  data: [
    {
      id: "3f3e3e1-c824-4d63-b37a-d8d698862f1d",
      tripId: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
      passengerName: "John Doe",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [components.Booking](../../models/components/booking.md)[]                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `links`                                                                                    | [operations.GetBookingsBookingsLinks](../../models/operations/getbookingsbookingslinks.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |