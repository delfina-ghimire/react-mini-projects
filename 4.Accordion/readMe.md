## Joke Accordion

This is a simple React application that displays a list of jokes in an accordion format. Each joke consists of a title and a text. When a joke is clicked, it expands to reveal the text. Clicking again collapses the joke.


### Usage

The `App` component is the entry point of the application. It renders the `Accordion` component, passing the `jokesArray` as data.

The `Accordion` component receives the `data` prop, which is an array of joke objects. It maps over the `data` array to render each joke as an `AccordionItem`. The `AccordionItem` component receives props such as `currOpen`, `onOpen`, `title`, and `children` (the joke text). It manages the state of each item's open/closed state using the `currOpen` state variable and the `handleToggle` function.

The `styles.css` file contains the styles for the accordion and its components.

### Jokes Data

The `jokesArray` is an array of joke objects. Each joke object has two properties: `title` and `text`. You can add or modify jokes in this array to customize the content displayed in the accordion.


Feel free to explore and modify the code to suit your needs. Enjoy the jokes!
