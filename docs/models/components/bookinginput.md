# BookingInput

## Example Usage

```typescript
import { BookingInput } from "train-travel-sdk/models/components";

let value: BookingInput = {
  tripId: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
  passengerName: "John Doe",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `tripId`                                       | *string*                                       | :heavy_minus_sign:                             | Identifier of the booked trip                  | 4f4e4e1-c824-4d63-b37a-d8d698862f1d            |
| `passengerName`                                | *string*                                       | :heavy_minus_sign:                             | Name of the passenger                          | John Doe                                       |
| `hasBicycle`                                   | *boolean*                                      | :heavy_minus_sign:                             | Indicates whether the passenger has a bicycle. |                                                |
| `hasDog`                                       | *boolean*                                      | :heavy_minus_sign:                             | Indicates whether the passenger has a dog.     |                                                |