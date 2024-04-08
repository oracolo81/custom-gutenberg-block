# Custom Gutenberg Block Plugin

Custom Gutenberg Block Plugin is a WordPress Plugin that allows you to create Testimonial Gutenberg blocks for your website.

This version provides a simplified approach, accommodating only one testimonial per post type. However, for enhanced functionality, it's feasible to implement a more robust solution utilizing the "Repeater" field available in ACF Pro. This would enable the rendering of testimonials within a carousel, offering a more dynamic presentation.

## Features

Define block attributes for testimonial data such as name, position, and testimonial content.
Automatically populate the block attributes with data retrieved from the ACF fields within the post.

![](/assets/screenshot-2.png)

## Requirements

1. Install and activate the Advanced Custom Fields (ACF) plugin to use this plugin.
2. The npm Node.js package manager. This is used to install dependencies and run scripts (only for development).

## Installation

1. Download the plugin ZIP file from the [main](https://github.com/oracolo81/custom-gutenberg-block/archive/refs/heads/main.zip)
2. Upload the plugin files to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly.
3. Activate the plugin through the 'Plugins' screen in WordPress.

## Usage

1. Define the block attributes such as name, position, and content using the Advanced Custom Fields (ACF) of the Page/Post visible in the side bar.

![](/assets/screenshot-3.png)

2. Navigate to the Gutenberg editor to start adding the blocks.
3. Integrate a Custom Testimonial Block accessible within the Widgets section of the Gutenberg block editor.

![](/assets/screenshot-1.png)

## Development

1. Install dependencies: `cd custom-gutenberg-block-plugin && npm install`
2. To run the plugin in development mode: `npm start`
3. To create the production code: `npm run build`
4. To run unit test: `npm test`

## Functionality Explanation

The following code implements logic to dynamically populate the Gutenberg block with data fetched from custom fields.

```js
/**
 * This hook enables components to subscribe to changes in the WordPress data store.
 */
import { useSelect } from '@wordpress/data';

// getCurrentPost() is called to retrieve the current post being edited in the block editor, is stored in the post constant.
const post = useSelect(
    ( select ) => select( 'core/editor' ).getCurrentPost(),
    []
);

// Check if post.acf is available and set the attributes.
if (post && post.acf) {
    setAttributes( { name: post.acf.name } );
    setAttributes( { position: post.acf.position } );
    setAttributes( { content: post.acf.content } );
}
```

## Future Improvement

1. An easy improvement can be made by utilizing the unique "Repeater" field feature offered by ACF Pro. With this capability, it becomes possible to generate multiple testimonials for each post type. These testimonials can then be showcased on the page using a carousel layout.
2. Another improvement could involve adding an optional field for images and restricting the content field to raw text only.

## Note

This Plugin was developed using @wordpress/create-block