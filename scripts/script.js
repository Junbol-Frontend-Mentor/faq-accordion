//-------DECLARING VARIABLES -------------

// Select all elements with the specified class name
let accordionBtns = document.getElementsByClassName('accordion-grp__accordion');


// The solution was to create a for loop:..........

// Summary: The solution required a for loop to iterate over multiple accordion buttons and attach an event listener to each one. 
// A normal function wouldn't suffice because we need to add the event listeners dynamically to multiple elements.


for (let i = 0; i < accordionBtns.length; i++) {  // Here I added a click eventListener to the button and used a regular function because I needed to use the 'this'  keyword to refer to the button
  accordionBtns[i].addEventListener('click', function () {
    
    this.classList.toggle('active');// Using the Toggle method on the added 'active' class on the clicked button dynamically

    let panel = this.nextElementSibling;  // Select the next sibling element, which is the panel to be shown or hidden. nextElementSibling is like referring to the "next brother" or "next sibling" in the family of elements under the same parent.
 

    if (panel.style.maxHeight) {  // Check the current max-height of the panel to determine whether it's expanded or collapsed
      // If panel.style.maxHeight is set, the panel is expanded
      // Collapse the panel by setting maxHeight to null
      panel.style.maxHeight = null;
    } else {
   // If panel.style.maxHeight is null, the panel is collapsed
      // Expand the panel by setting maxHeight to its scrollHeight
      panel.style.maxHeight = panel.scrollHeight + 'px';// The scrollHeight property returns the height of the content of an element, including content not visible on the screen due to overflow. It is essentially the full height of the element's content, regardless of whether it is visible.
    }
  });
}


/////// ---- MOTES  -----///////////////////////
/* 
Why Use scrollHeight?
Dynamic Content Height: Using scrollHeight ensures that the panel expands exactly to fit its content, regardless of how much content there is. This is useful for accordion elements where the amount of content can vary.
Smooth Animation: Setting maxHeight to scrollHeight allows for a smooth expansion animation because the transition to the full content height is natural.

scrollHeight in Action
When you use scrollHeight, the browser calculates the height of the content inside the element, ensuring that the panel expands just enough to fit all the content without any overflow. This provides a seamless and flexible way to handle varying content sizes within an accordion.

*/
