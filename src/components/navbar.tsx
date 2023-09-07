const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0">
      <div className="container px-1">
        <a className="navbar-brand font-weight-bolder ms-lg-0 " href="/astro-ecommerce/landing/">Global Insulation</a>
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
              <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="/astro-ecommerce/">
                All Components
              </a>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 " aria-current="page" id="pagesExample" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesExample">
                <li><a className="dropdown-item" href="/astro-ecommerce/landing/">Home</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/product/">Product Page</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/shopping-cart/">Shopping Cart</a></li>
              </ul>
            </li> */}
            <li className="nav-item dropdown">
              <a className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 " aria-current="page" id="pagesExample" data-bs-toggle="dropdown" aria-expanded="false">
                Brands
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesExample">
                <li><a className="dropdown-item" href="/astro-ecommerce/ametalin/">Ametalin</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/csrbradford/">CSR Bradford</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/knaufearthwool/">Knauf Earthwool</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/fletcherpinkbatts/">Fletcher Pink Batts</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/foilboard/">Foilboard</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/jameshardiefire/">James Hardie Fire</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/kingspan/">Kingspan</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/sisalation/">Sisalation</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/polyestersolutions/">Polyester Solutions</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/pirmax/">PirMax</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/ecowool/">EcoWool</a></li>
                {/* <li><a className="dropdown-item" href="/astro-ecommerce/shopping-cart/">Shopping Cart</a></li> */}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="/astro-ecommerce/about-us/">
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
