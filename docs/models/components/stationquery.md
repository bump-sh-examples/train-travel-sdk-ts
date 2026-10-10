# StationQuery

## Example Usage

```typescript
import { StationQuery } from "train-travel-sdk/models/components";

let value: StationQuery = {
  coordinates: "52.5200,13.4050",
  search: "Milano Centrale",
  country: "IT",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The latitude and longitude of the user's location, to narrow down the search results to sites within a proximity of this location. | 52.5200,13.4050                                                                                                                    |
| `search`                                                                                                                           | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | A search term to filter the list of stations by name or address.                                                                   | Milano Centrale                                                                                                                    |
| `country`                                                                                                                          | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Filter stations by country code                                                                                                    | IT                                                                                                                                 |