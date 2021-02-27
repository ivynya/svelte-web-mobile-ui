
<nav>
  <a href="#/">H</a>
  <a href="#/B">B</a>
  <a href="#/C">C</a>
</nav>

<style lang="scss">
  nav {
    box-shadow: #555 5px 5px 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;

    a {
      color: #ff3e00;
      flex: 1 1;
      font-size: 1.2rem;
      font-weight: 500;
		  padding: 1em;
      text-decoration: none;
      transition-duration: 0.2s;

      &:hover {
        background-color: #ddd;
      }
    }
  }
</style>