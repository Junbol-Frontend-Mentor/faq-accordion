//-------DECLARING VARIABLES -------------

// Select all elements with the specified class name
let accordionBtns = document.getElementsByClassName('accordion-grp__accordion');
//let accordionPanel = document.getElementsByClassName('accordion-grp__panel');//❌ wrong way better using 'this'  let panel = this.nextElementSibling;

//------- DEFINING FUNCTIONS    -------------
//First try
// Iterate over each element in the collection

/* for (let i = 0; i < accordionBtns.length; i++) {
  // Attach an event listener to the element at index i
  accordionBtns[i].addEventListener('click', () => {
    if ( nextElementSibling.style.display = none) {
      nextElementSibling.style.display = block;
    }
    else {
      nextElementSibling.style.display = none
    }
   
  });
}
 */

//Second try
// Iterate over each element in the collection

/* 
for (let i = 0; i < accordionBtns.length; i++) {
  // Attach an event listener to the element at index i
  accordionBtns[i].nextElementSibling.addEventListener('click', () => {
    if (style.display === none) {
      style.display === block;
    }
    else {
      style.display = none
    }
  });
}
 */

//Third try
// Iterate over each element in the collection

/* for (let i = 0; i < accordionBtns.length; i++) {
  // Attach an event listener to the element at index i
  accordionBtns[i].addEventListener('click', () => {//❌ I can't use arrow function when using "this" 
    this.classList.toggle("active"); // to add the 'active" class dynamically to the button
    this.nextElementSibling.style.display("block")//❌
  });
} */

//Fourth try
// 1. Iterate over each button
// 2. Add and click eventListener to each button
// 2. Toggle the button display property value by adding a active class dynamically using a Regular Funcction instead

/* for (let i = 0; i < accordionBtns.length; i++) {
  // Attach an event listener to the element at index i
  accordionBtns[i].addEventListener('click', function ()  {//✅ to use the "this" keyword I need to use a Regular Function instead
    this.classList.toggle("active"); // ✅ to add the 'active" class dynamically to the button
    this.nextElementSibling.style.display("block")//✅ to add the block display property dynamically use nextElementSibling to refer to the panel
    if (this.style.display === none) {//❌ 'this' is still the clicked button not the panel
      this.style.display === block;//❌ I need to use the assign symbol and strings & t
    }
    else {
      this.style.display === none//❌ I need to use the assign symbol and strings and 'this' is always the clicked button not the panel
    }
  });
} */

//Fifth try
// 1. Iterate over each button
// 2. Add and click eventListener to each button
// 3. Toggle the button display property value by adding a active class dynamically using a Regular Function instead
// 4. Instead of using 'this' access the panel with DOM and save it in a variable

/* for (let i = 0; i < accordionBtns.length; i++) {
  // Attach an event listener to the element at index i
  accordionBtns[i].addEventListener('click', function ()  {//✅ to use the "this" keyword I need to use a Regular Function instead
    accordionPanel.classList.toggle("active"); // ✅ to add the 'active" class dynamically to the button
    accordionPanel.nextElementSibling.style.display("block")//❌ wrong value and to display property dynamically use nextElementSibling to refer to the panel
    if (accordion-grp__panel.style.display === 'none') {//❌ wrong way better using 'this'  let panel = this.nextElementSibling; 
      accordionPanel.style.display = 'block';//❌ wrong way better using 'this'  let panel = this.nextElementSibling; 
    }
    else {
      accordionPanel.style.display = 'none';//❌ wrong way better using 'this'  let panel = this.nextElementSibling; 
    }
  };
} */

//Sixth try
// 1. Iterate over each button
// 2. Add and click eventListener to each button
// 3. Toggle the button display property value by adding a active class dynamically using a Regular Function instead
// 4. Instead of using 'this' access the panel with DOM and save it in a variable

/* 
for (let i = 0; i < accordionBtns.length; i++) {
  // Attach an event listener to the element at index i
  accordionBtns[i].addEventListener('click', function ()  {//✅ to use the "this" keyword I need to use a Regular Function instead
   this.classList.toggle("active"); // ✅ to add the 'active" class dynamically to the button
    this.nextElementSibling.style.display("none")//❌ this statement is not needed
        // Reference the panel using 'this.nextElementSibling'
        let panel = this.nextElementSibling; 

    if ( panel.style.display === 'none') {//✅ 
      panel.style.display = 'block';//✅ 
    }
    else {
      panel.style.display = 'none';//✅ 
    }
});
}; */

//Seventh try

for (let i = 0; i < accordionBtns.length; i++) {
  accordionBtns[i].addEventListener('click', function () {
    this.classList.toggle('active');

    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

/////// ---- PSEUDO CODE -----///////////////////////
/*



*/

/