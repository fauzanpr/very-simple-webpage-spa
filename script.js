const linkHome = document.getElementById('link-home');
const linkAbout = document.getElementById('link-about');
const root = document.getElementById('root');

function HomeScreen() {
    const input = document.createElement('input');
    input.placeholder = 'Enter your name';

    const textPreview = document.createElement('p');

    input.oninput = function (event) {
        textPreview.textContent  = event.target.value;
    }

    const div = document.createElement('div');
    div.append(input);
    div.append(textPreview);

    return div;
}

function AboutScreen() {
    const text = document.createElement('p');
    text.textContent = 'Welcome to About';

    return text;
}

linkHome.onclick = function (event) {
    event.preventDefault();
    const homeScreen = HomeScreen();
    root.innerHTML = '';
    root.append(homeScreen);
    history.pushState(null, '', event.target.href);
};

linkAbout.onclick = function (event) {
    event.preventDefault();
    history.pushState(null, '', event.target.href);
    const aboutScreen = AboutScreen();
    root.innerHTML = '';
    root.append(aboutScreen);
}

if (location.hash === '#about') {
    const aboutScreen = AboutScreen();
    root.innerHTML = '';
    root.append(aboutScreen);
} else if (location.hash === '#home') {
    const homeScreen = HomeScreen();
    root.innerHTML = '';
    root.append(homeScreen);
}