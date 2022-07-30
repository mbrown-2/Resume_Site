// The custom class for the web component extends HTMLElement
class ButtonCount extends HTMLElement {

    constructor() {

        // Calling super brings in all of the global 'goodies' from HTMLElement
        // (ie. attribute access such as title/class/id)
        super();

        let btn = document.createElement('button');
        btn.innerHTML = 'Times Clicked : ';

        // Add the count attribute to btn
        let count = document.createElement('output');
        count.textContent = 0;
        btn.append(count);

        // Then add the slot attribute
        let slot = document.createElement('slot');
        btn.append(slot);

        // Create an event listener that increments the count
        btn.addEventListener('click', () => {
            let currVal = Number(count.textContent);
            count.textContent = currVal + 1;
        });

        // Use the Shadow DOM to tuck our custom element within
        // (its own, protected sub-tree that is scoped from the public/Light DOM)
        this.attachShadow({mode: 'open'});
        this.shadowRoot.append(btn);
    }
}

// With the class established, we now define the custom element
// We link the name of the custom tag to the constructor defined above
customElements.define('button-count', ButtonCount);