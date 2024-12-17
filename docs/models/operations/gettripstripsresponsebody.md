# GetTripsTripsResponseBody

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).

## Example Usage

```typescript
import { GetTripsTripsResponseBody } from "train-travel-sdk/models/operations";

let value: GetTripsTripsResponseBody = {
  data: [
    {
      id: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
      origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      destination: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      departureTime: new Date("2024-02-01T10:00:00Z"),
      arrivalTime: new Date("2024-02-01T16:00:00Z"),
      operator: "Deutsche Bahn",
      price: 50,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [components.Trip](../../models/components/trip.md)[]                           | :heavy_minus_sign:                                                             | N/A                                                                            |
| `links`                                                                        | [operations.GetTripsTripsLinks](../../models/operations/gettripstripslinks.md) | :heavy_minus_sign:                                                             | N/A                                                                            |