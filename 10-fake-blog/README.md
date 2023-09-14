# Fake Blog App

This project primarily showcases the use of Context API along with various components and features that can be useful in a blog application, including dark mode, post search, post addition, and post archive.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [State Management with Context API](#state-management-with-context-api)
- [Dark Mode](#dark-mode)
- [Search Posts](#search-posts)
- [Adding Posts](#adding-posts)
- [Post Archive](#post-archive)
- [Footer](#footer)

## Installation

To run this application, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone 
   ```

2. Change to the project directory:

   ```
   cd fake-blog-app
   ```

3. Install the necessary dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

The Fake Blog App is a simple blog application where you can view, search, add, and archive posts. Below are details about the various components and features.

## Components

### Header

- Displays the blog title and a search bar.
- Allows clearing all posts.

### Main

- Contains the form for adding new posts and the list of existing posts.

### Posts

- Displays the list of blog posts.

### FormAddPost

- Allows adding a new post by providing a title and body.

### List

- Lists the blog posts with their titles and bodies.

### Archive

- Displays a list of archived posts.
- Allows adding archived posts as new posts.

### Footer

- Displays the blog's footer.

## State Management with Context API

This project utilizes the **Context API** for state management. The Context API is a powerful feature in React that allows you to share state between components without having to pass props manually through every level of the component tree. In this project, the Context API is used for managing the state of blog posts.

**Importance of Context API:**

- **Centralized State Management:** The Context API allows you to create a central store of data that can be accessed by any component within the application. In this project, the `PostProvider` component wraps the entire application, providing access to post data to all child components.

- **Avoids Prop Drilling:** Without the Context API, you would typically need to pass state and state update functions as props through multiple levels of components, which can become unwieldy and lead to "prop drilling." Context API eliminates the need for this by allowing components to access context directly.

- **Simplifies Component Composition:** The Context API makes it easier to compose components and build complex UIs. Components like `Header`, `Main`, `Posts`, `FormAddPost`, and `Archive` can seamlessly access and update post data through the context.

- **Improved Code Maintainability:** By centralizing state management with the Context API, code becomes more maintainable and easier to understand. Developers can focus on building individual components without worrying about passing data up and down the component tree.

- **Efficient Updates:** Context API components re-render only when their specific piece of context data changes, optimizing performance.

- **Scalability:** As your application grows, the Context API scales gracefully, making it suitable for managing more complex state and data sharing scenarios.

By using the Context API for state management in this project, we ensure that the state of blog posts is accessible and modifiable by all relevant components, promoting a clean and efficient architecture.

## Dark Mode

- Toggle between light and dark mode using the sun and moon buttons.
- Adds the `fake-dark-mode` class to the HTML element to apply dark mode styles.

## Search Posts

- Use the search bar in the header to filter posts based on keywords.
- Results show the number of matching posts.

## Adding Posts

- Use the "Add post" form to create and add new blog posts.

## Post Archive

- Click the "Show archive posts" button in the archive section to reveal a list of archived posts.
- Click "Add as new post" to add archived posts as new blog posts.

## Footer

- Displays the copyright information for the blog.

Feel free to explore and modify this application to suit your needs. Enjoy blogging!

**Note:** The blog posts are randomly generated and may contain nonsensical content as they are generated using the `faker` library.

