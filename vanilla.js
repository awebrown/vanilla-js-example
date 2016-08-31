'use strict';

 //On page load attach scroll function to window for ie and moz and hide scroll animated elements
 window.addEventListener('scroll', scrollFunction);

 function loaded() {
     document.getElementById('nav-bar').classList.add('loaded');
     document.getElementById('responsibilities-list').classList.add('hidden-opacity');
     document.getElementById('members-names').classList.add('hidden-opacity');
     document.getElementById('contact-form').classList.add('hidden-opacity');
     var navLink = document.getElementsByTagName('a');
     navLink[5].removeAttribute('href');
     navLink[6].removeAttribute('href');
     navLink[7].removeAttribute('href');
     navLink[8].removeAttribute('href');
     navLink[62].removeAttribute('href');
 }

 //Scroll animations
 function scrollFunction() {

     var returnTop = document.getElementById('fade-in');
     var y = document.documentElement.scrollTop; // Internet Explorer and Firefox
     var altY = document.getElementById('board-of-corrections').scrollTop; // Safari and Chrome

     if (y > 350 || altY > 350) {
         returnTop.classList.add('fade-in-op');
         returnTop.classList.remove('fade-out', 'hidden');

     } else {
         returnTop.classList.add('fade-out');
         returnTop.classList.remove('fade-in-op');
         setTimeout(function() {
             returnTop.classList.add('hidden');
         }, 500);
         clearTimeout();
     }
     if (y > 535 || altY > 535) {
         document.getElementById('responsibilities-list').classList.add('loaded');
     }
     if (y > 1710 || altY > 1710) {
         document.getElementById('meeting-lists').classList.add('loaded');
         document.getElementById('meeting-tabs').classList.add('loaded');
     }
     if (y > 2415 || altY > 2415) {
         document.getElementById('members-names').classList.add('loaded');
     }
     if (y > 2865 || altY > 2865) {
         document.getElementById('contact-form').classList.add('loaded');
     }
     //console.log(altY); // Uncomment to see Y scroll position in console
 }

 //Meeting tabs
 openTab("meetings-year1");

 function openTab(activeTab) {
     var i;
     var x = document.getElementsByClassName('active-tab');
     for (i = 0; i < x.length; i++) {
         x[i].style.display = 'none';
         x[i].classList.remove('fade-in');
     }
     document.getElementById(activeTab).classList.add('fade-in');
 }

 //Set current active tab
 function setCurrent(elem) {
     var a = document.getElementsByTagName('a')
     for (i = 0; i < a.length; i++) {
         a[i].classList.remove('current-tab');
     }
     elem.classList.add('current-tab');
 }

 //Meetings accordion < 960px
 var acc = document.getElementsByClassName('accordion');
 var i;

 for (i = 0; i < acc.length; i++) {
     acc[i].onclick = function() {
         this.classList.toggle('active');
         this.nextElementSibling.classList.toggle('show');
     }
 }

 //Contact form validation
 var robot = document.getElementById('contact-robot');
 var robotValue = "river";

 function formValidate() {
     var contactForm = document.getElementById('contact-form');
     var name = document.getElementById('contact-name');
     var email = document.getElementById('contact-email');
     var phone = document.getElementById('contact-phone');
     var message = document.getElementById('contact-message');

     if (nameValidate(name) && emailValidate(email) && phoneValidate(phone) && messageValidate(message)) {
         contactForm.reset();
         alert("Thank you for contacting us!");
         return true;
     }
     return false;
 }

 //Contact name input validation rules
 function nameValidate(name) {
     var nameValue = document.getElementById('contact-name').value;
     var nameRegex = /^[a-zA-Z \-\']+(?:\s[a-zA-Z]+)*$/.test(nameValue);
     var inputErr = document.getElementsByTagName('input')[1];

     if (nameValue == null || nameValue == "") {
         document.getElementById('name-err').innerHTML = "This field is required.";
         inputErr.setAttribute('class', 'input-err');
         document.getElementById('name-err').style.display = 'block';
         return false;
     } else if (!nameRegex) {
         document.getElementById('name-err').innerHTML = "Alphabet characters only.";
         inputErr.setAttribute('class', 'input-err');
         document.getElementById('name-err').style.display = 'block';
         return false;
     } else if (nameRegex) {
         var inputValid = document.getElementsByTagName('input')[1];
         inputValid.setAttribute('class', 'input-valid');
         document.getElementById('name-err').style.display = 'none';
         return true;
     }
 }

 //Contact email input validation rules
 function emailValidate(email) {
     var emailValue = document.getElementById('contact-email').value;
     var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
     var inputErr = document.getElementsByTagName('input')[2];

     if (emailValue == null || emailValue == "") {
         document.getElementById('email-err').innerHTML = "This field is required.";
         inputErr.setAttribute('class', 'input-err');
         document.getElementById('email-err').style.display = 'block';
         return false;
     } else if (!emailRegex) {
         document.getElementById('email-err').innerHTML = "Please enter a valid email address.";
         inputErr.setAttribute('class', 'input-err');
         document.getElementById('email-err').style.display = 'block';
         return false;
     } else if (emailRegex) {
         var inputValid = document.getElementsByTagName('input')[2];
         inputValid.setAttribute('class', 'input-valid');
         document.getElementById('email-err').style.display = 'none';
         return true;
     }
 }

 //Contact phone input validation rules
 function phoneValidate(phone) {
     var phoneValue = document.getElementById('contact-phone').value;
     var phoneRegex = /^(\d+-?)+\d+$/.test(phoneValue);
     var inputErr = document.getElementsByTagName('input')[3];

     if (phoneValue == null || phoneValue == "") {
         document.getElementById('phone-err').innerHTML = "This field is required.";
         inputErr.setAttribute('class', 'input-err');
         document.getElementById('phone-err').style.display = 'block';
         return false;
     } else if (!phoneRegex) {
         document.getElementById('phone-err').innerHTML = "Numeric characters only.";
         inputErr.setAttribute('class', 'input-err');
         document.getElementById('phone-err').style.display = 'block';
         return false;
     } else if (phoneRegex) {
         var inputValid = document.getElementsByTagName('input')[3];
         inputValid.setAttribute('class', 'input-valid');
         document.getElementById('phone-err').style.display = 'none';
         return true;
     }
 }

 //Phone mask
 function phoneMask() {
     var phoneInput = document.getElementById('contact-phone');

     if ((phoneInput.value.length == 3) || (phoneInput.value.length == 7)) {
         phoneInput.value += "-";
         return;
     }
 }

 //Contact message input validation rules
 function messageValidate(message) {
     var messageValue = document.getElementById('contact-message').value;
     var messageRegex = /^[A-Za-z0-9,\.\!\?\$ ]+$/.test(messageValue);
     var inputErr = document.getElementsByTagName('textarea')[0];

     if (messageValue == null || messageValue == "") {
         document.getElementById('message-err').innerHTML = "This field is required.";
         inputErr.setAttribute('class', 'input-err');
         document.getElementById('message-err').style.display = 'block';
         return false;
     } else if (!messageRegex) {
         document.getElementById('message-err').innerHTML = "No special characters.";
         inputErr.setAttribute('class', 'input-err');
         document.getElementById('message-err').style.display = 'block';
         return false;
     } else if (messageRegex) {
         var inputValid = document.getElementsByTagName('textarea')[0]
         inputValid.setAttribute('class', 'input-valid');
         document.getElementById('message-err').style.display = 'none';
         return true;
     }
 }

 //Clear all fields after successful submit
 function clearFields() {
     var nameClearField = document.getElementsByTagName('input')[1];
     var emailClearField = document.getElementsByTagName('input')[2];
     var phoneClearField = document.getElementsByTagName('input')[3];
     var messageClearField = document.getElementsByTagName('textarea')[0];

     nameClearField.setAttribute('class', 'input-clear');
     emailClearField.setAttribute('class', 'input-clear');
     phoneClearField.setAttribute('class', 'input-clear');
     messageClearField.setAttribute('class', 'input-clear');
 }

 //Footer Read More Toggle
 function footerToggle() {
     var slider = document.getElementById('slider');
     var fade = document.getElementById('fade-wrapper');
     var footerToggle = document.getElementById('footer-toggle');
     if (footerToggle.innerHTML === 'Read More (+)') {
         footerToggle.innerHTML = 'Read Less (-)';
         fade.classList.toggle('footer-toggle-hidden');
     } else {
         footerToggle.innerHTML = 'Read More (+)';
         fade.classList.toggle('footer-toggle-hidden');
     }
     //Close footer toggle if open on window resize
     window.onresize = function() {
         footerToggle.innerHTML = 'Read More (+)';
         fade.classList.add('footer-toggle-hidden');
         document.getElementById('slider').classList.remove('open');
     }
     slider.classList.toggle('open');
     fade.classList.toggle('footer-toggle');
 }

 //Smooth scroll
 var smoothScr = {
     documentVerticalScrollPosition: function() {
         if (self.pageYOffset) return self.pageYOffset; // Firefox, Chrome, Opera, Safari
         if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; // Internet Explorer 6
         if (document.body.scrollTop) return document.body.scrollTop; // Internet Explorer 6, 7 and 8
         return 0; // None of the above
     },
     viewportHeight: function() {
         return (document.compatMode === "CSS1Compat") ? document.documentElement.clientHeight : document.body.clientHeight;
     },
     documentHeight: function() {
         return (document.height !== undefined) ? document.height : document.body.offsetHeight;
     },
     documentMaximumScrollPosition: function() {
         return this.documentHeight() - this.viewportHeight();
     },
     elementVerticalClientPositionById: function(id) {
         var element = document.getElementById(id);
         var rectangle = element.getBoundingClientRect();
         return rectangle.top;
     },
     //Animation
     scrollVerticalTickToPosition: function(currentPosition, targetPosition) {
         var filter = 0.2;
         var fps = 60;
         var difference = parseFloat(targetPosition) - parseFloat(currentPosition);
         var arrived = (Math.abs(difference) <= 0.5);
         if (arrived) {
             scrollTo(0.0, targetPosition);
             return;
         }

         currentPosition = (parseFloat(currentPosition) * (1.0 - filter)) + (parseFloat(targetPosition) * filter);
         scrollTo(0.0, Math.round(currentPosition));
         setTimeout("smoothScr.scrollVerticalTickToPosition(" + currentPosition + ", " + targetPosition + ")", (1000 / fps));
     },
     toId: function(id, padding) {
         var element = document.getElementById(id);
         if (element == null) {
             //console.warn('Cannot find element with id \''+id+'\'.');
             return;
         }
         var targetPosition = this.documentVerticalScrollPosition() + this.elementVerticalClientPositionById(id) - padding;
         var currentPosition = this.documentVerticalScrollPosition();
         var maximumScrollPosition = this.documentMaximumScrollPosition();
         if (targetPosition > maximumScrollPosition) targetPosition = maximumScrollPosition;
         this.scrollVerticalTickToPosition(currentPosition, targetPosition);
     }
 };

 //Close nav drawer if nav drawer item or return to top btn clicked 
 function closeDrawer() {
     document.getElementById('nav-trigger').checked = false;
 }