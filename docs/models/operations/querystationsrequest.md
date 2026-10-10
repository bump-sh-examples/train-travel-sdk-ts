# QueryStationsRequest

## Example Usage

```typescript
import { QueryStationsRequest } from "train-travel-sdk/models/operations";

let value: QueryStationsRequest = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `page`                                                             | *number*                                                           | :heavy_minus_sign:                                                 | The page number to return                                          | 1                                                                  |
| `limit`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The number of items to return per page                             | 10                                                                 |
| `stationQuery`                                                     | [components.StationQuery](../../models/components/stationquery.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |