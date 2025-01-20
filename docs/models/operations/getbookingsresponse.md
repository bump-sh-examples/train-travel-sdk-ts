# GetBookingsResponse

## Example Usage

```typescript
import { GetBookingsResponse } from "train-travel-sdk/models/operations";

let value: GetBookingsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: new TextEncoder().encode("0x2FaFdA0626"),
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.GetBookingsResponseResult* | :heavy_check_mark:                     | N/A                                    |