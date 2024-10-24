
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    <script>
        var typed = new Typed('#element', {
            strings: ['Web Developer', 'Web Designer', 'Game Developer', 'Video Editor'],
            typeSpeed: 50,
        });
        document.getElementById('resumeButton').addEventListener('click', function () {
            window.open('resume.pdf', '_blank');
        });

    </script>

