# GetBookingResponse

## Example Usage

```typescript
import { GetBookingResponse } from "train-travel-sdk/models/operations";

let value: GetBookingResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: new TextEncoder().encode("0xFe9d06e6d9"),
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `headers`                             | Record<string, *string*[]>            | :heavy_check_mark:                    | N/A                                   |
| `result`                              | *operations.GetBookingResponseResult* | :heavy_check_mark:                    | N/A                                   |