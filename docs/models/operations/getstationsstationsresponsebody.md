# GetStationsStationsResponseBody

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).

## Example Usage

```typescript
import { GetStationsStationsResponseBody } from "train-travel-sdk/models/operations";

let value: GetStationsStationsResponseBody = {
  data: [
    {
      id: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      name: "Paris Gare du Nord",
      address: "18 Rue de Dunkerque 75010 Paris, France",
      countryCode: "DE",
      timezone: "Europe/Paris",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.Station](../../models/components/station.md)[]                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `links`                                                                    | [operations.GetStationsLinks](../../models/operations/getstationslinks.md) | :heavy_minus_sign:                                                         | N/A                                                                        |