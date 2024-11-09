
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    <script>
        var typed = new Typed('#element', {
            strings: ['Web Developer', 'Web Designer', 'Game Developer', 'Video Editor'],
            typeSpeed: 50,
        });
// Select the body to append symbols
const body = document.querySelector('body');

// Characters to display
const symbols = [':', '>', '<', '{', '}', '[', ']', '(', ')', ';', '=', '+', '*', '#'];

// Create multiple floating symbols
for (let i = 0; i < 50; i++) {
    const symbol = document.createElement('div');
    symbol.classList.add('symbol');
    symbol.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    
    // Randomize position and delay
    symbol.style.left = `${Math.random() * 100}vw`;
    symbol.style.animationDelay = `${Math.random() * 5}s`;
    symbol.style.fontSize = `${Math.random() * 24 + 16}px`;

    // Add symbol to the body
    body.appendChild(symbol);
}

    </script>

