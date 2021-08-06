class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <div class="topnav">
                    <a href="/index.html">Home</a>
                    <a href="/blog/index.html">Blog</a>
                    <a href="/publications/index.html">Publications</a>
                    <div class="dropdown">
                        <button class="dropbtn"> Extras
                            <i class="fa fa-caret-down"></i>
                        </button>    
                        <div class="dropdown-content">
                            <a href="/recommendations/index.html">Recommendations</a>
                            <a href="/quotes/index.html">Quotes / Wisdoms</a>
                        </div>
                    </div>
                    <a href="/contact/index.html">Contact</a>
                </div>
            </nav>
        </header>
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            © 2021 Milo Grillo
        </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)