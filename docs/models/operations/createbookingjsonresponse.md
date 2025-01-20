# CreateBookingJsonResponse

## Example Usage

```typescript
import { CreateBookingJsonResponse } from "train-travel-sdk/models/operations";

let value: CreateBookingJsonResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: new TextEncoder().encode("0x7e2f64c0C0"),
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `headers`                                    | Record<string, *string*[]>                   | :heavy_check_mark:                           | N/A                                          |
| `result`                                     | *operations.CreateBookingJsonResponseResult* | :heavy_check_mark:                           | N/A                                          |