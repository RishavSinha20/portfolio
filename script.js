const phrases = [
    "scalable backend systems",
    "distributed infrastructure",
    "event-driven architectures",
    "high performance services"
];

const typingElement =
    document.getElementById("typing");

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    const currentPhrase =
        phrases[phraseIndex];

    if (!deleting) {

        typingElement.textContent =
            currentPhrase.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (
            charIndex ===
            currentPhrase.length
        ) {

            deleting = true;

            setTimeout(type, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentPhrase.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            phraseIndex =
                (phraseIndex + 1) %
                phrases.length;
        }
    }

    setTimeout(
        type,
        deleting ? 50 : 100
    );
}

type();