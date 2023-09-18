const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0">
      <div className="container px-1">
        <a className="navbar-brand font-weight-bolder ms-lg-0 " href="/">Global Insulation</a>
        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item">
              <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="/">
                All Components
              </a>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 " aria-current="page" id="pagesExample" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesExample">
                <li><a className="dropdown-item" href="/landing/">Home</a></li>
                <li><a className="dropdown-item" href="/product/">Product Page</a></li>
                <li><a className="dropdown-item" href="/shopping-cart/">Shopping Cart</a></li>
              </ul>
            </li> */}
            <li className="nav-item dropdown">
              <a className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 " aria-current="page" id="pagesExample" data-bs-toggle="dropdown" aria-expanded="false">
                Brands
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesExample">
                <li><a className="dropdown-item" href="/brands/ametalin/">Ametalin</a></li>
                <li><a className="dropdown-item" href="/brands/csrbradford/">CSR Bradford</a></li>
                <li><a className="dropdown-item" href="/brands/knaufearthwool/">Knauf Earthwool</a></li>
                <li><a className="dropdown-item" href="/brands/fletcherpinkbatts/">Fletcher Pink Batts</a></li>
                <li><a className="dropdown-item" href="/brands/foilboard/">Foilboard</a></li>
                <li><a className="dropdown-item" href="/brands/jameshardiefire/">James Hardie Fire</a></li>
                <li><a className="dropdown-item" href="/brands/kingspan/">Kingspan</a></li>
                <li><a className="dropdown-item" href="/brands/sisalation/">Sisalation</a></li>
                <li><a className="dropdown-item" href="/brands/polyestersolutions/">Polyester Solutions</a></li>
                <li><a className="dropdown-item" href="/brands/pirmax/">PirMax</a></li>
                <li><a className="dropdown-item" href="/brands/ecowool/">EcoWool</a></li>
                {/* <li><a className="dropdown-item" href="/shopping-cart/">Shopping Cart</a></li> */}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="/about-us/">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" target="_blank" href="https://www.instagram.com/globalinsulationaus/">
                <i className="fab text-lg fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" target="_blank"  href="https://www.tiktok.com/@globalinsulation" rel="nofollow">
                <i className="fab text-lg fa-tiktok"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" target="_blank"  href="https://www.facebook.com/Globalinsulationaus/" rel="nofollow">
                <i className="fab text-lg fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
