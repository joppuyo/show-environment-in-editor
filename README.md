# Show Environment In Editor

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/joppuyo/show-environment-in-editor/build.yml?branch=main&logo=github)](https://github.com/joppuyo/show-environment-in-editor/actions?query=workflow%3ABuild)
[![WordPress Plugin Version](https://img.shields.io/wordpress/plugin/v/show-environment-in-editor?logo=wordpress)](https://wordpress.org/plugins/show-environment-in-editor/)
[![WordPress Plugin Required PHP Version](https://img.shields.io/wordpress/plugin/required-php/show-environment-in-editor)](https://wordpress.org/plugins/show-environment-in-editor/)
[![WordPress Plugin: Required WP Version](https://img.shields.io/wordpress/plugin/wp-version/show-environment-in-editor?label=required&logo=wordpress)](https://wordpress.org/plugins/show-environment-in-editor/)
[![WordPress Plugin: Tested WP Version](https://img.shields.io/badge/dynamic/json?label=tested&logo=wordpress&prefix=v&color=green&query=%24.tested&url=https%3A%2F%2Fapi.wordpress.org%2Fplugins%2Finfo%2F1.0%2Fshow-environment-in-editor.json)](https://wordpress.org/plugins/show-environment-in-editor/)
[![Actively Maintained](https://img.shields.io/badge/Maintenance%20Level-Actively%20Maintained-green.svg)](https://gist.github.com/cheerfulstoic/d107229326a01ff0f333a1d3476e068d)

WordPress 5.5 [introduced](https://make.wordpress.org/core/2020/07/24/new-wp_get_environment_type-function-in-wordpress-5-5/) the `WP_ENVIRONMENT_TYPE` constant, which allows you to define the current environment where WordPress is running, either **production**, **staging**, **local**, or **development**. You can use the [Display Environment Type](https://wordpress.org/plugins/display-environment-type/) plugin to show this information in the admin bar.

However, in new WordPress versions, the admin bar is hidden in the post editor and site editor. This plugin adds a new icon in the block editor toolbar to display the environment type. You can think of this as a complimentary plugin to [Display Environment Type](https://wordpress.org/plugins/display-environment-type/) because it's highly recommended that you use both plugins at the same time.

## Requirements

* WordPress 5.5 or later
* PHP 7.2 or later

## Installation

1. Install the plugin from your WordPress dashboard
2. Activate the **Show Environment In Editor** via the plugins admin page

## Frequently Asked Questions

### My environment shows "production". How can I change it?

You can set the environment type in `wp-config.php`. Here are the values you can use.
 

    // Production
    define('WP_ENVIRONMENT_TYPE', 'production');

    // Staging
    define('WP_ENVIRONMENT_TYPE', 'staging');

    // Local
    define('WP_ENVIRONMENT_TYPE', 'local');

    // Development
    define('WP_ENVIRONMENT_TYPE', 'development');

## Support the plugin

Maintaining a WordPress plugin is a lot of work. If you like the plugin, please consider rating it on [WordPress.org](https://wordpress.org/support/plugin/show-environment-in-editor/reviews/#new-post). You can also support me on [GitHub sponsors](https://github.com/sponsors/joppuyo). Thank you!

If you are interested, you can also check out my other WordPress plugins:

* [Disable Media Pages](https://wordpress.org/plugins/disable-media-pages/)
* [Disable Customizer](https://wordpress.org/plugins/customizer-disabler/)
* [Disable Drop Cap](https://wordpress.org/plugins/disable-drop-cap/)
* [ACF Image Aspect Ratio Crop](https://wordpress.org/plugins/acf-image-aspect-ratio-crop/)
