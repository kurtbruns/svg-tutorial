/**
 * 
 * Date: 2020-11-23
 * Author: Kurt Bruns
 */

/*
* When the window finishes loading, initialize state and register an event listener to the scroll event.
*/
window.addEventListener('load', (event) => {

    // Initialize nav elements and get a handle on headings
    let nav = document.querySelectorAll(".aside-li") as unknown as HTMLElement[];
    let headings : HTMLElement[] = [];
    for( let i = 0; i < nav.length; i++) {
        let li= nav[i] as HTMLElement;
        headings.push(document.getElementById(li.dataset["anchor"]));
    }

    let active : HTMLElement = null;
    let margin = 24

    function scrollHandler() {

        // check if we are at the bottom of the page
        if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.scrollHeight) {

            // remove active stylings
            if( active != null ) {
                active.classList.remove('active')
            }

            // highlight the last section
            active = nav[headings.length - 1];
            active.classList.add('active');
            return;
        }

        let i = 0;
        let position = -1;
        let heading = null;
        
        // loop through the headings 
        for( i = 0; i < headings.length; i++ ) {
            heading = headings[i];
            position = heading.getBoundingClientRect().top;
            if( position >= margin ) {
                break;
            }
        }

        // remove active styling
        if( active != null ) {
            active.classList.remove('active')
        }
        
         // check if we are at the top of the document
        if( i <= 0 ) {
            active = undefined;
        } else {
            active = nav[i - 1];
            active.classList.add('active');
        }
    }

    // Register scroll handler
    document.onscroll = () => {
        scrollHandler();
    }

    // Initialize nav
    scrollHandler();
});