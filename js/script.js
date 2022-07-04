function btnworkexperience() {
  const x = document.querySelector('.workexperiencesection');
  x.classList.toggle("hidden");
}


function btneducationqualification() {
    const x = document.querySelector('.educationdetailssection');
    x.classList.toggle("hidden");
  }


  function btnprojectdetails(){
    const x = document.querySelector('.projectdetailssection');
    x.classList.toggle("hidden");
  }



  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function showMyImage() {
    var img = document.getElementById('image-holder');
    img.src = "https://www.kalpatarucoe.com/";
    img.style.display = 'block';
  }


        function contactmefacebookopen()
         {
            window.open("https://www.facebook.com/mohanr.manu/", "_blank");
        }

        function contactmeinstagramopen()
         {
            window.open("https://www.instagram.com/mohan93__/", "_blank");
        }

        function contactmetwitteropen()
         {
            window.open("https://twitter.com/mohanr2593", "_blank");
        }

        function sslcopen()
         {
            window.open("https://www.indiainfo.net/place/dvpbhs-deshiya-vidya-peeta-boys-high-school-5216564", "_blank");
        }
        function pucopen()
         {
            window.open("https://www.kalpatarucoe.com/", "_blank");
        }
        function degreeopen()
         {
            window.open("https://www.vidyavahini.edu.in/", "_blank");
        }
