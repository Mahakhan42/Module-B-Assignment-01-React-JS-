const First_Component = () => {
    return <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <h2><b>Logo</b></h2>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="btn btn-primary" type="submit">Sign Up</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
} 
const Second_Component = () => {
    return <>
   <div class="banner">
   <br /><br /> <h2><b>Generate more leads with a <br/> professional landing page!</b></h2><br />
    <form class="search-bar d-flex">
        <input class="form-control me-2" type="search" placeholder="Email Address" aria-label="Search"/>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
 <br /><br /></div>
    </>
  

}
export {First_Component, Second_Component};