const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

    <style>
    .header{
        width: 100%;
        height: 80px;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #07c075;
    }
    .container{
        width: 95%;
        min-width: fit-content;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .logo{
        min-width: 100px;
        height: 60px;
        background-color: white;
    }

    .com-name{
        width: 80%;
        min-width: fit-content;
    }

    .profile{
        min-width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: white;
    }
    </style>

    <div class="header">
        <div class="container">
            <div class="logo">
                
            </div>
            <div class="com-name">
                <h1>LEAD DRIVING SCHOOL</h1>
            </div>
            <div class="profile">

            </div>
        </div>
    </div>

`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);