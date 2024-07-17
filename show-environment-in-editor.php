<?php

/*
 * Plugin name: Show Environment In Editor
 * Plugin URI: https://github.com/joppuyo/show-environment-in-editor
 * Description: Show the current server environment in the Gutenberg editor screen
 * Version: 1.0.9
 * Requires at least: 5.5
 * Requires PHP: 7.2
 * Author: Johannes Siipola
 * Author URI: https://siipo.la
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: show-environment-in-editor
 */

if (!defined('ABSPATH')) {
    exit;
}

function seie_init_register_block()
{
    $plugin_data = get_plugin_data(__FILE__);
    $version = $plugin_data['Version'];

    global $wp_version;

    $dependencies = ['wp-blocks', 'wp-element', 'wp-editor', 'wp-plugins', 'wp-edit-post'];

    if (version_compare($wp_version, '5.9', '>=')) {
        array_push($dependencies, 'wp-edit-site');
    }

    wp_enqueue_script(
        'seie-script',
        plugins_url('build/index.js', __FILE__),
        $dependencies,
        (defined('WP_DEBUG') && WP_DEBUG) ? @md5_file(plugin_dir_path(__FILE__) . 'build/index.js') : $version,
    );

    $environment_type = 'production';
    $environment_type_string = __('Production', 'show-environment-in-editor');

    if (function_exists('wp_get_environment_type')) {
        $environment_type = wp_get_environment_type();
    }

    if ($environment_type === 'staging') {
        $environment_type_string = __('Staging', 'show-environment-in-editor');
    }
    if ($environment_type === 'development') {
        $environment_type_string = __('Development', 'show-environment-in-editor');
    }
    if ($environment_type === 'local') {
        $environment_type_string = __('Local', 'show-environment-in-editor');
    }

    $environment_description = __("The current environment is <strong>%s</strong>.", "show-environment-in-editor");
    $environment_description = sprintf($environment_description, $environment_type_string);
    $environment_description = wp_kses($environment_description, 'post');

    wp_localize_script('seie-script', 'seie_vars',
        [
            'environment' => $environment_type,
            'environment_title' => __('Environment', 'show-environment-in-editor'),
            'environment_string' => $environment_type_string,
            'environment_description' => $environment_description,
        ]
    );

}

function seie_init()
{
    add_action('admin_enqueue_scripts', 'seie_init_register_block');
}

add_action('init', 'seie_init');
