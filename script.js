AOS.init();

var headerMenu = document.getElementById('header-menu-mobile');

function openMenu() {
  headerMenu.setAttribute('class', 'bloom-mobile-header nav-visible');
}
function closeMenu() {
  headerMenu.removeAttribute('class', ' bloom-mobile-header nav-visible');
  headerMenu.setAttribute('class', ' bloom-mobile-header');
}
openNavButton.addEventListener("click", function (event) {
    openMenu();
  })
  
  closeNavButton.addEventListener("click", function (event) {
    closeMenu();
  })

  var navLinks = document.querySelectorAll('.nav .header-link, .nav a:not(.header-link)');
  navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          closeMenu();
      });
  });
  
  const element = document.getElementById('circle-progress-bars');
  const circle1 = document.querySelector(".circular-progress-1");
  const circle2 = document.querySelector(".circular-progress-2");
  const circle3 = document.querySelector(".circular-progress-3");
  const circle4 = document.querySelector(".circular-progress-4");
  const className1 = 'animateBar1';
  const className2 = 'animateBar2';
  const className3 = 'animateBar3';
  const className4 = 'animateBar4';

//   tabs
function showPanel() {
    const panels = document.querySelectorAll('.panel');
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');

    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    if (option1.checked) {
        document.getElementById('panel1').style.display = 'flex';
    } else if (option2.checked) {
        document.getElementById('panel2').style.display = 'flex';
        circle1.classList.add(className1);
        circle2.classList.add(className2);
        circle3.classList.add(className3);
        circle4.classList.add(className4);
    } else if (option3.checked) {
        document.getElementById('panel3').style.display = 'flex';
       
    }
}

document.querySelectorAll('input[name="options"]').forEach(input => {
    input.addEventListener('change', showPanel);
});

showPanel();


