# Custom Gutenberg Block Plugin

Custom Gutenberg Block Plugin is a WordPress Plugin that allows you to create Testimonial Gutenberg blocks for your website.

## Features

Define block attributes for testimonial data such as name, position, and testimonial content.

![](/assets/screenshot-2.png)

## Requirements

1. The npm Node.js package manager. This is used to install dependencies and run scripts.
2. Install and activate the Advanced Custom Fields (ACF) plugin to use this plugin.

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
