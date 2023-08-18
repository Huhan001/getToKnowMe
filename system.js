const githubButton = document.querySelector('#github');

const resumeButton = document.querySelector('#resume');
const liveToast = document.querySelector('#liveToast');

if (resumeButton) {
    resumeButton.addEventListener('click', () => {
        liveToast.classList.add('show');
    });
} else {
    console.error('The resume button does not exist.');
}


const gotoGighub = () => {
    location.href = "https://github.com/Huhan001";
}



githubButton.addEventListener('click',gotoGighub)