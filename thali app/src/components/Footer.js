import React from 'react'

const Footer = () => {
  return (
    <div>
         <div>
    <footer className="bg-dark text-white pt-3  pb-2">
     <div className="container text-center text-md-left">
       <div className="row text-md-left text-md-left ">
         <div className="col-lg-4 ">
           
            <p style={{fontFamily:'cursive',fontSize:'45px'}} 
                    className="navbar-brand" ><span style={{color:'red',
                fontSize:'45px',
                fontFamily:'cursive'}}>Mehfil The Cafe</span></p>
          <p className="fs-4"><br/>
            Here you can enjoy lots of diffrent types  of Foods . 
            and diffrent types of combos and snacks.
         </p>
         
         </div>
         
       <div className="col-lg-4 mb-4">
        <h5 className="text-uppercase fw-bold mb-4">
          For you
        </h5>
        <p>Privacy</p>
        <p>Term</p>
        <p>Security</p>
        <p>Site-Map</p>
      </div>
      <div className="col-lg-4 mb-4">
        <h5 className="text-uppercase fw-bold mb-4">
          contact
        </h5>
        <p><i className="fas fa-home me-3"></i>15 Shanti Arcade, Ramdas Colony,
                  M.J.College Road, Below Golds Gym
                  Jalgaon, Maharashtra 425001
                  India</p>
        <p>
          <i className="fas fa-envelope me-3"></i>
          info@example.com
        </p>
        <p><i className="fas fa-phone me-3"></i> 91-6753876987</p>
        <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
      </div>
      <div class="col-md-5 col-lg-4 ml-lg-0">

<div class="text-center text-md-right">
  <ul class="list-unstyled list-inline">
    <li class="list-inline-item">
      <a class="btn-floating btn-sm rgba-white-slight mx-1">
        <i class="fab fa-facebook-f"></i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-sm rgba-white-slight mx-1">
        <i class="fab fa-twitter"></i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-sm rgba-white-slight mx-1">
        <i class="fab fa-google-plus-g"></i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-sm rgba-white-slight mx-1">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </li>
  </ul>
</div>

</div>
      <div className="text-center p-4 fs-4">
          2022© FoodCorner Copyright All Right Reserved
      </div>
     </div>
     </div>
    </footer>
    </div>
    </div>
  )
}

export default Footer