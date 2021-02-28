
# Svelte Web/Mobile UI Demo

This is a demonstration of a native-esque sidebar flyout and mobile UI built using Svelte (a web framework). There are differences, but this has a similar UX while having zero dependencies and relying solely on built in browser features. This means it has a miniscule impact on app size and is super easy to work with. Although this sample uses Svelte, the core principle can be done with vanilla HTML/CSS/JS and translates easily to other frameworks.

## How does it work?

A bottom navigation bar that uses hash routing is included to demonstrate multiple pages in an app. The sidebar is global, and makes use of browser scroll properties (scroll-snap, and scroll-behavior) to open. Main content is set to 100% width and scripting is used to shift the page's scroll on initial load. The impact of this is small since the page is only loaded once (being an SPA) and can be reduced if using other optimization techniques like hydration.

## What benefits does this method have?

As the sidebar uses scroll to show and hide itself, trackpad and touch gestures work out of the box. Only one line of JS is needed to alter the state by setting the scroll X position of the container. This can be wrapped into an event/state management system if desired, but it's extremely lightweight and can make use of the browser's built in smooth scrolling. It's (theoretically) an ideal solution for an uncomplicated flyout sidebars for PWAs or other web apps.

This demo has been tested on Webkit, Blink, and Gecko browsers but because this is an idea that I threw together really fast, it might have issues I didn't catch. You have been warned! 👻

## Try it Yourself

[![https://maintained.cc/SDBagel/svelte-web-mobile-ui/1](https://maintained.cc/SDBagel/svelte-web-mobile-ui/1)](https://sdbagel.com/svelte-web-mobile-ui/)