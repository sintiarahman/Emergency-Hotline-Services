1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById- Finds a single element by its unique ID. Always Returns only one elements. 
        getElementsByClassName- Finds all elements having a specific class. Give a live html collection.
        querySelector- Finds the first element that matches any css selectors.
        querySelectorAll- Finds all elements matching a css selector.

2. How do you create and insert a new element into the DOM?
Answer: Create a new element: const newDiv =document.createElement("div");
        Add content or attributes: newDiv.innerText = "Hello";
        Select the parent element: const parent = document.getElementById("container");
        Insert into the DOM: parent.appendChild(newDiv);

3. What is Event Bubbling and how does it work?
Answer: Event bubbling is when an event starts at the target element and then moves up to parent elements, triggering their listeners automatically. All parent listeners for the same event type will run in order, from child to parent.


4. What is Event Delegation in JavaScript? Why is it useful?
Answer:  Event delegation is a technique in JavaScript where a single event listener is added to a parent element to handle events on its child elements, instead of adding listeners to each child individually.Reduces the number of event listeners, improving performance.Works for dynamically added elements that are not present in the DOM initially.Makes code simpler and easier to maintain.


5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:  preventDefault() Stops the browser’s default action for an event.
Example: Preventing a form from submitting on click.
         stopPropagation() Stops the event from bubbling up to parent elements.
Example: Clicking a child element doesn’t trigger parent’s event listener.
