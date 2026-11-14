# Station

A train station.

## Example Usage

```typescript
import { Station } from "train-travel-sdk/models/components";

let value: Station = {
  id: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  name: "Berlin Hauptbahnhof",
  address: "Invalidenstraße 10557 Berlin, Germany",
  countryCode: "DE",
  timezone: "Europe/Berlin",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Unique identifier for the station.                                                                              | **Example 1:** efdbb9d1-02c2-4bc3-afb7-6788d8782b1e<br/>**Example 2:** b2e783e1-c824-4d63-b37a-d8d698862f1d     |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The name of the station                                                                                         | **Example 1:** Berlin Hauptbahnhof<br/>**Example 2:** Paris Gare du Nord                                        |
| `address`                                                                                                       | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The address of the station.                                                                                     | **Example 1:** Invalidenstraße 10557 Berlin, Germany<br/>**Example 2:** 18 Rue de Dunkerque 75010 Paris, France |
| `countryCode`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The country code of the station.                                                                                | **Example 1:** DE<br/>**Example 2:** FR                                                                         |
| `timezone`                                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones).           | **Example 1:** Europe/Berlin<br/>**Example 2:** Europe/Paris                                                    |