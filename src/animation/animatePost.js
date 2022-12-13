

function createElementsForText(animatedContainer){
    const element = document.createElement('div');
    element.classList.add('Post__animated_text_container');
    document.body.appendChild(element);
}
export function animatePost(animatedContainer){
    createElementsForText(animatedContainer);
}