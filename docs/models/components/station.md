# Station

## Example Usage

```typescript
import { Station } from "train-travel-sdk/models/components";

let value: Station = {
  id: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  name: "Paris Gare du Nord",
  address: "18 Rue de Dunkerque 75010 Paris, France",
  countryCode: "FR",
  timezone: "Europe/Berlin",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | Unique identifier for the station.                                                                    | efdbb9d1-02c2-4bc3-afb7-6788d8782b1e                                                                  |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | The name of the station                                                                               | Berlin Hauptbahnhof                                                                                   |
| `address`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | The address of the station.                                                                           | Invalidenstraße 10557 Berlin, Germany                                                                 |
| `countryCode`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | The country code of the station.                                                                      | DE                                                                                                    |
| `timezone`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones). | Europe/Berlin                                                                                         |