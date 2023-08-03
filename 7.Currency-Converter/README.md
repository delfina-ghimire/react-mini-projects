# Currency Converter App

This is a simple currency converter app built using React. It allows you to convert an amount from one currency to another. The app fetches the latest exchange rates from the Frankfurter API.

## Features

- Input field for entering the amount to be converted.
- Two select dropdowns for choosing the source and target currencies.
- Display the converted amount after fetching the latest exchange rates.
- Loading indicator to show when the conversion is in progress.


## Code Explanation

### State Variables

- `amount`: Holds the amount to be converted.
- `fromCurr`: Holds the source currency.
- `toCurr`: Holds the target currency.
- `convertedAmount`: Holds the converted amount.
- `isLoading`: Boolean flag to indicate if the conversion is in progress.

### useEffect Hook

The `useEffect` hook is used to perform the currency conversion when any of the following state variables change: `amount`, `fromCurr`, or `toCurr`.

The function inside `useEffect` executes the `convert` function, which makes an API call to the Frankfurter API with the current values of `amount`, `fromCurr`, and `toCurr`. It then updates the `convertedAmount` state with the received exchange rate.

### Input and Select Elements

- The input element is used to enter the amount to be converted. It is bound to the `amount` state and updates its value through the `setAmount` function.
- The first select element is used to choose the source currency. It is bound to the `fromCurr` state and updates its value through the `setFromCurr` function.
- The second select element is used to choose the target currency. It is bound to the `toCurr` state and updates its value through the `setToCurr` function.

### Disabled State

During the currency conversion process (while `isLoading` is `true`), the input and select elements are disabled to prevent the user from making changes.

## API Endpoint

The app uses the Frankfurter API to fetch the latest exchange rates. The API endpoint used for the conversion is:

```
https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}
```

Please note that this is a free public API, and you should be mindful of rate limits and usage policies.

