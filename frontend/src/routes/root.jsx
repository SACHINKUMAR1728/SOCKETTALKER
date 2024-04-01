export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Users</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/user/1`}>user1</a>
              </li>
              <li>
                <a href={`/user/2`}>user2</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }