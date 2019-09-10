# Products Grid Finished!

I've finished a products grid using only hooks!

## Features

- products are displayed in a grid.
- give the user an option to sort the products in ascending order. Can sort by "size", "price" or "id". The products list should be reloaded when a new sorting option is chosen.
- each product has :
  - a "size" field, which is the font-size (in pixels). We should display the faces in their correct size, to give customers a realistic impression of what they're buying.
  - a "price" field, in cents. This should be formatted as dollars like `$3.51`.
  - a "date" field, which is the date the product was added to the catalog. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed.
- the product grid should automatically load more items as you scroll down.
- display an animated "loading..." message while the user waits for the data to load.
- to improve the user's experience, we should always pre-emptively fetch the next batch of results in advance, making use of idle-time. But they still should not be displayed until the user has scrolled to the bottom of the product grid.
- when the user reaches the end and there are no more products to display, show the message "~ end of catalogue ~".

## What's next

- Create a version in React Native

## What I've learned

- Hooks? Gud. Anyway, I've done hooks here. Extensively using useEffect and getting it's quirks. Also useRef is good!
- Intersection observer might have been one of the hardest things here. Once you dip your foot in it though, you can get how it works!
- Can't use @media in .css? I am not sure yet but I had a problem awhile ago (September 10, 2:02 PM) with it!

## How to run

Run `yarn develop`
