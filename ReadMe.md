# Derek Limited - Social Media Content Services Website

## Project Overview

This repository contains the website files for Derek Limited, a company offering platform-optimized social media content services. The site was mirrored from [onlineghostwriter.com](https://www.onlineghostwriter.com/) using `wget` and rebranded.

## Description

The Derek Limited website showcases the company's social media content creation services for multiple platforms including Instagram, Facebook, LinkedIn, Twitter, and TikTok. The site highlights the benefits of platform-optimized content for improving engagement metrics and maintaining brand voice across different social channels.

## Tech Stack

-   HTML5
-   CSS3
-   JavaScript
-   jQuery (v1.12.4)
-   Bootstrap
-   Owl Carousel
-   Font Awesome
-   Themify Icons
-   WOW.js (animations)
-   Magnific Popup

## Project Structure

```
derek-site/
├── index.html              # Main landing page
├── navigate.js             # Custom navigation script
├── ReadMe.md               # This file
├── assets/                 # All static assets
│   ├── bootstrap/          # Bootstrap framework files
│   ├── css/                # Stylesheets
│   ├── fonts/              # Icon fonts and typography
│   ├── img/                # Images and graphics
│   ├── js/                 # JavaScript files
│   └── owlcarousel/        # Carousel plugin files
```

## Features

-   Responsive design for all device sizes
-   Animated headline elements
-   Testimonials carousel
-   Pricing tables
-   FAQ accordion section
-   Navigation system
-   Modal iframe loader (in navigate.js)

## Installation and Setup

1. Clone the repository:

    ```
    git clone https://github.com/username/derek-site.git
    ```

2. No build process is required as this is a static website.

3. Install Node.js `http-server` globally (if not already installed):

    ```
    npm install -g http-server
    ```

4. Navigate to the project directory and start the server:

    ```
    cd derek-site
    npx http-server . -c-1 -p 8080
    ```

5. Visit `http://localhost:8080` in your browser to view the site.

## Notes

-   The website uses a static structure with no backend requirements
-   The checkout functionality points to external URLs
-   Some features like the testimonials section are hidden with CSS classes (d-none)
