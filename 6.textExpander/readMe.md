# Text Expander Component

This is a React component called `TextExpander` that allows you to show and hide text content with an expandable/collapsible feature. It can be used to display lengthy text passages in a compact form, providing users with the option to reveal more content if they choose to. The component also allows customization of the expand/collapse button text and color.


## Props

The `TextExpander` component accepts the following props:

- `collapsedNumWords` (optional, default: 10): The number of words to display in the collapsed state before truncating the text and showing the "Show more" button.
- `expandButtonText` (optional, default: "Show more"): The text to display on the expand button when the text is collapsed and can be expanded.
- `collapseButtonText` (optional, default: "Show less"): The text to display on the collapse button when the text is expanded and can be collapsed.
- `buttonColor` (optional, default: "#1f09cd"): The color of the expand/collapse button.
- `expanded` (optional, default: false): A boolean flag to determine if the text is initially expanded (`true`) or collapsed (`false`).
- `className` (optional): A custom class name to apply to the containing `div` element for additional styling.

## How it Works

The `TextExpander` component uses the `useState` hook to manage the `isExpanded` state, which determines whether the text should be shown in its full form or truncated. When the component is first rendered, the text is either displayed in a collapsed state or expanded based on the `expanded` prop.

If the text is collapsed, only the first `collapsedNumWords` words are displayed, and an expand button is shown. Clicking the expand button toggles the `isExpanded` state, causing the text to show its full content or return to the collapsed form.
