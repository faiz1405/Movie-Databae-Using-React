const Header = (props) => {
  return (
    <header className="text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1 className="display-1">Odlox Movie Database</h1>
            <h3 className="lead mb-0 d-none d-md-block">Top Best Movie</h3>
          </div>
          <div className="col-4 m-auto">
            <form className="d-flex" onSubmit={props.onHandleForm}>
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
                value={props.search}
                onChange={props.onSearchChange}
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
