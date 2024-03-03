var b = 0;
let a = 0;

     document.addEventListener('DOMContentLoaded', () => {
    // Select the h1 element inside the element with the id 'idtocheck'
    var h1Element = document.querySelector('#idtocheck h1');
    // Select the h2 element inside the element with the id 'idtocheck'
    var h2Element = document.querySelector('#idtocheck h2');

    // Define the new text that will appear on hover
    var newText = 'EMPOWERING MINDS | WHERE MINDS GET POWER';

    // Add event listener for the 'mouseenter' event to change the text of h2
    h1Element.addEventListener('mouseenter', function() {
        
        if (a==1)
{
   
    h2Element.innerHTML = newText;
}
else
{
   
    h2Element.innerHTML = newText;
}

a++;
       
    });

    // Optional: Add event listener for 'mouseleave' to change the text back on mouse leave
    h1Element.addEventListener('mouseleave', function() {
        h2Element.innerHTML = 'A Podcaster/Interviewer<br>=I encapsulate years in a 30 minutes session';
    });
});

     
       
     