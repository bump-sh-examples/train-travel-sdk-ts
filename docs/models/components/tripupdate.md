# TripUpdate

A live status update for a trip.

## Example Usage

```typescript
import { TripUpdate } from "train-travel-sdk/models/components";

let value: TripUpdate = {
  type: "arrived",
  tripId: "ea399ba1-6d95-433f-92d1-83f67b775594",
  occurredAt: new Date("2024-02-01T09:12:00Z"),
  minutes: 12,
  reason: "Signal failure near Hannover",
  platform: "7",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.Type](../../models/components/type.md)                                            | :heavy_check_mark:                                                                            | The kind of update.                                                                           |                                                                                               |
| `tripId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the trip this update belongs to.                                                | ea399ba1-6d95-433f-92d1-83f67b775594                                                          |
| `occurredAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the update occurred.                                                                     | 2024-02-01T09:12:00Z                                                                          |
| `minutes`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | Delay in minutes. Present when `type` is `delay`.                                             | 12                                                                                            |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human-readable reason for the update.                                                         | Signal failure near Hannover                                                                  |
| `platform`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Assigned platform. Present when `type` is `platform`.                                         | 7                                                                                             |