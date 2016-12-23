# retina-detect
When script starts, it detects user's display pixel density and assign appropriate class (**retina** or **noretina**) to the **body**.

## How-to-use:

Load background images with parent selector **.retina** or **.noretina**.

### Example:

.noretina .element {background: image.jpg;}

.retina .element {background: image-2x.jpg;}

#### Tip:

For best performance, run script after *onload* event.
