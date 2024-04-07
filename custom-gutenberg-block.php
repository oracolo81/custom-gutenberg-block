<?php
/**
 * Plugin Name:       Custom Gutenberg Block
 * Description:       Define block for testimonials.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Carmelo Cutrera
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-gutenberg-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! defined( 'CGB_PATH' ) ) {
	define( 'CGB_PATH', __DIR__ );
}

/**
 * Check if ACF plugin is installed and activated
 * 
 * @return bool True if ACF plugin is installed and activated, false otherwise
 */
function is_acf_active() {
    if ( ! function_exists( 'is_plugin_active' ) ) {
        include_once ABSPATH . 'wp-admin/includes/plugin.php';
    }
    
    return is_plugin_active( 'advanced-custom-fields/acf.php' ); // Adjust the plugin file path as needed
}

/**
 * Display notice if ACF is not activate.
 */
function display_acf_notice() {
	$class = "notice notice-error is-dismissible";
	$message = __( "Please install and activate the Advanced Custom Fields (ACF) plugin to use this feature.", "custom-gutenberg-block" );
	printf('<div class="%1$s"><p>%2$s</p></div>', $class, $message);
}

if ( is_acf_active() ) {
    // ACF is active
	require_once CGB_PATH . '/includes/acf.php';
} else {
    add_action( 'admin_notices', 'display_acf_notice' );
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_custom_gutenberg_block_block_init() {
	register_block_type( CGB_PATH . '/build' );
}
add_action( 'init', 'create_block_custom_gutenberg_block_block_init' );
