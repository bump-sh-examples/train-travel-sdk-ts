# Source

The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.


## Supported Types

### `components.Card`

```typescript
const value: components.Card = {
  name: "Francis Bourgeois",
  number: "4242424242424242",
  cvc: "123",
  expMonth: 12,
  expYear: 2025,
  addressCountry: "<value>",
};
```

### `components.BankAccount`

```typescript
const value: components.BankAccount = {
  name: "<value>",
  number: "<value>",
  accountType: "individual",
  bankName: "Starling Bank",
  country: "Bahrain",
};
```

