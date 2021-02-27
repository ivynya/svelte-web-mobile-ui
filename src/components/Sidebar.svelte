
<div class="sidebar">
  <h2>Sidebar</h2>
  <p><b>Sidebar Group 1</b></p>
  <p>Sidebar Item 1</p>
  <p>Sidebar Item 2</p>
  <p>Sidebar Item 3</p>
  <hr>
  <p><b>Sidebar Group 2</b></p>
  <p>Sidebar Item 1</p>
  <p>Sidebar Item 2</p>
  <p>Sidebar Item 3</p>
</div>

<style lang="scss">
  .sidebar {
    background-color: #eee;
    min-width: 200px;
    padding: 0 30px;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    text-align: left;
  }

	h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

  hr {
    margin: 30px 0;
  }
</style>