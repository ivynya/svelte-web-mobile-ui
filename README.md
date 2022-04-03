
# Svelte Web/Mobile UI Demo

This is a demonstration of a native-like sidebar flyout and mobile UI built using CSS scroll-snap. It primarily has the benefit of allowing users to use touch or trackpad gestures to open the sidebar like they would on a native app. The sidebar mechanism has zero dependencies, minimal JS presence and works on all major browsers. Although this template uses Svelte, the core principle can easily be done with vanilla HTML/CSS/JS and translates to other frameworks with miniscule impact on app size.

## This template contains:

- [x] Trackpad and touch-compatible sidebar
- [x] Native-esque bottom navigation
- [x] [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router)
- [ ] PWA support out-of-box (Needs icons, webmanifest, and service worker)

## How does it work?

The sidebar is added globally through Svelte's layout page, with the main content placed alongside it horizontally. Both the main content and sidebar have [CSS scroll-snap](https://css-tricks.com/practical-css-scroll-snapping/) enabled so the user can use touch or trackpad scroll gestures to show and hide the sidebar.

The main content is set to 100% of the view width, to ensure that when the sidebar is closed, it behaves like a completely normal page. In this demo, the sidebar is set to a fixed width of 260 pixels, but could theoretically be changed to either take up the entire screen when opened (100%) or another fixed width.

Because the browser will load the layout with the sidebar open, 1-3 lines of scripting is used to instantaneously "close" the sidebar on page load. The impact of this is small compute-wise and on many browsers this will not cause layout shift.

## What benefits does this method have?

- As the sidebar uses scroll to show and hide itself, trackpad and touch gestures work out of the box.
- JavaScript `scrollBy` can be used to toggle the sidebar & element scroll properties can be used to check open/closed state.
- No external animations are needed (CSS or JS), relies on browser smooth scrolling behavior.
- It's an ideal solution for an uncomplicated flyout sidebars for PWAs or other mobile web apps.
- The simplicity of using scroll-snap and native browser features means this can be easily expanded upon if desired.

This demo has been tested on WebKit, Blink, and Gecko browsers but because this is an idea that I threw together really fast, it might have issues I didn't catch. You have been warned! 👻

## Try it Yourself

[![https://maintained.cc/SDBagel/svelte-web-mobile-ui/1](https://maintained.cc/SDBagel/svelte-web-mobile-ui/1)](https://sdbagel.com/svelte-web-mobile-ui/)
