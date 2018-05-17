<?php
/*
Plugin Name: Contact Form 7 Prevent Multi-Submits
Plugin URI: https://github.com/wayanwirka/cf7-no-double-submit
Description: Prevent double clicks when Contact Form 7 is still submitting the form that causing the multiple same submissions coming through.
Version: 1.0
Author: I Wayan Wirka
Author URI: https://duststone.com
License: GNU General Public License v3
*/

# Register script
function cf7_no_double_submit_enqueue_scripts() {
  wp_enqueue_script( 'cf7-no-double-submit', plugins_url( '/js/functions.js', __FILE__ ), array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'cf7_no_double_submit_enqueue_scripts' );
