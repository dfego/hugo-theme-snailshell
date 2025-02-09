# Snailshell

Snailshell is a Hugo theme for an artist's website.

## Features

* Bootstrap 5
* Lightbox via PhotoSwipe
* Gallery

## Installation

TODO

## Configuration

### Content

#### Main page

Create a file at `content/_index.md`:

    ---
    draft: false
    params:
    main_text: <YOUR TITLE HERE>
    sub_text: <SUBTITLE HERE>
    ---

### Styling

Place an image file at `static/images/nav-background.jpg` to set the site navigation background image.

Place an image file at `static/images/home-background.jpg` to set the site home image.

### Navigation

Copy `data/site.yaml` from the repository into your site as `data/site.yaml`.
Modify this file to setup the links and navigation.