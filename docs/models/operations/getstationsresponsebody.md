# GetStationsResponseBody

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).

## Example Usage

```typescript
import { GetStationsResponseBody } from "train-travel-sdk/models/operations";

let value: GetStationsResponseBody = {
  data: [
    {
      id: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      name: "Paris Gare du Nord",
      address: "18 Rue de Dunkerque 75010 Paris, France",
      countryCode: "DE",
      timezone: "Europe/Paris",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Station](../../models/components/station.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
| `links`                                                    | [operations.Links](../../models/operations/links.md)       | :heavy_minus_sign:                                         | N/A                                                        |