# Show Environment In Editor

Contributors: joppuyo
Tested up to: 6.6
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Donate link: https://github.com/sponsors/joppuyo
Stable tag: 1.0.9

Show the current server environment in the Gutenberg editor screen.

## Description

WordPress 5.5 [introduced](https://make.wordpress.org/core/2020/07/24/new-wp_get_environment_type-function-in-wordpress-5-5/) the `WP_ENVIRONMENT_TYPE` constant, which allows you to define the current environment where WordPress is running, either **production**, **staging**, **local**, or **development**. You can use the [Display Environment Type](https://wordpress.org/plugins/display-environment-type/) plugin to show this information in the admin bar.

However, in new WordPress versions, the admin bar is hidden in the post editor and site editor. This plugin adds a new icon in the block editor toolbar to display the environment type. You can think of this as a complimentary plugin to [Display Environment Type](https://wordpress.org/plugins/display-environment-type/) because it's highly recommended that you use both plugins at the same time.

### Support the plugin

Maintaining a WordPress plugin is a lot of work. If you like the plugin, please consider rating it on [WordPress.org](https://wordpress.org/support/plugin/show-environment-in-editor/reviews/#new-post). You can also support me on [GitHub sponsors](https://github.com/sponsors/joppuyo). Thank you!

If you are interested, you can also check out my other WordPress plugins:

* [Disable Media Pages](https://wordpress.org/plugins/disable-media-pages/)
* [Disable Customizer](https://wordpress.org/plugins/customizer-disabler/)
* [Disable Drop Cap](https://wordpress.org/plugins/disable-drop-cap/)
* [ACF Image Aspect Ratio Crop](https://wordpress.org/plugins/acf-image-aspect-ratio-crop/)

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

 

### Can I find this plugin on GitHub?

Yes, check out the [GitHub repository.](https://github.com/joppuyo/show-environment-in-editor)

## Screenshots

1. Production environment
2. Staging environment
3. Local environment
4. Development environment

## Changelog

### 1.0.9 (2024-07-17)
* Fix: Update tested up to version 6.6

### 1.0.8 (2024-04-04)
* Fix: Update tested up to version 6.5

### 1.0.7
* Update readme

### 1.0.6
* Remove some more unnecessary files from the release zip

### 1.0.5
* Remove unnecessary files

### 1.0.4
* Fix deployment

### 1.0.3
* Release in the plugin directory

### 1.0.2
* Prevent direct access

### 1.0.1
* Update text domain
* Update tested up to version 6.4

### 1.0.0
* Initial release