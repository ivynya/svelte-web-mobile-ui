<div>
  <h1>Home</h1>
  <p>
    A native-esque sidebar built with web features and Svelte. No JS is
    necessary, but a few lines will vastly improve the experience. Try swiping
    left and right to open and close the sidebar.
  </p>
  <h2>How It Works</h2>
  <p>
    This component is built with scroll properties, and so it will work with
    horizontal scrolling and trackpad gestures. This means we can use hash
    fragments and anchors to "open" the sidebar.
    <a href="#sidebar">Ex: Click here to open the sidebar.</a>
    Note that this won't work well with hash routing and may lead to confusion
    during a page refresh. An alternative is using scripting to scroll the 
    content window to the left (such as <code>content.scrollBy(-260, 0)</code>).
    The number is the width of the sidebar, usually hardcoded.
  </p>
  <h2>JS Usage</h2>
  <p>
    On page load, three lines of JS scrolled the content view to the right
    (hiding the sidebar) and added a smooth scroll property (this is optional,
    only recommended if you plan to use hash fragments to open the sidebar).
    Additionally, the <code>.scrollBy(260, 0)</code> function is used to open and close
    the sidebar using JS by scrolling the main view.
  </p>
  <h2>Learn More</h2>
  <p>This example is available on GitHub, built as a minimal Svelte app.</p>
  <p><a href="https://github.com/SDBagel/svelte-web-mobile-ui">GitHub</a></p>
  <p><a href="https://sdbagel.com">Copyright (C) 2021 SDBagel</a></p>
  <br />
</div>

<style lang="scss">
  div {
    margin: 0 auto;
    max-width: 700px;
    padding: 0 20px;
  }

  h1,
  h2 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  h2 {
    font-size: 2rem;
  }

  a {
    color: #ff3e00;
  }

  p {
    font-size: 1.3em;
    line-height: 2.5rem;
  }
</style>
