/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Large Quadcopter Build', // Title for your website.
  disableTitleTagline: true,

  // See https://docusaurus.io/docs/en/publishing#deploying-to-github-pages
  url: 'https://george-hawkins.github.io',
  baseUrl: '/arf-drone/', // You can't omit the trailing slash.
  projectName: 'arf-drone',
  organizationName: 'george-hawkins',

  editUrl: 'https://github.com/george-hawkins/arf-drone/edit/docusaurus/docs/',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [],

  // Path to images for header.
  headerIcon: 'img/header-icon.svg',
  favicon: 'img/favicon.png',

  // Colors for website.
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} George Hawkins`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
      '//code.jquery.com/jquery-3.3.1.min.js',
      '//cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js',
      '/arf-drone/js/config-fancybox.js' // You can't do baseUrl + 'js/...' - see https://stackoverflow.com/q/4616202
  ],

  stylesheets: [
      '//cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css'
  ],

  // On page navigation for the current documentation page.
  // Comment out onPageNav to remove the right-hand sidebar that includes the section heading within the current page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph image.
  ogImage: 'img/og-image.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
