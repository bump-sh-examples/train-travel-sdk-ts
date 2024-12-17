# GetStationsResponse

## Example Usage

```typescript
import { GetStationsResponse } from "train-travel-sdk/models/operations";

let value: GetStationsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    data: [
      {
        id: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
        name: "Paris Gare du Nord",
        address: "Invalidenstraße 10557 Berlin, Germany",
        countryCode: "DE",
        timezone: "Europe/Paris",
      },
    ],
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.GetStationsResponseResult* | :heavy_check_mark:                     | N/A                                    |