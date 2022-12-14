import { POST__COPY_CHARACTER_KEY } from '../static/constant';

function createTextElements(text) {
    const elements = [];
    for (let x = 0; x < text.length; x++) {
        const element = document.createElement('span');
        element.textContent = text[x];
        elements.push(element);
    }
    return elements;
}
function addNodesInsideAnotherNode(node, nodes) {
    const createdCharactersId = [];
    nodes.forEach((n, i) => {
        let id = `${POST__COPY_CHARACTER_KEY}${i + 1}`;
        n.setAttribute('id', id);
        createdCharactersId.push(id);
        node.appendChild(n);
    });
    return createdCharactersId;
}
function createElementsForText(animatedContainerId, inputText) {
    const element = document.createElement('div');
    const container = document.getElementById(animatedContainerId);
    const spanElements = createTextElements(inputText);
    element.classList.add('Post__animated_text_container');
    const elementWithSpanText = addNodesInsideAnotherNode(container, spanElements);
    return elementWithSpanText;
}
function delayByMS(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}
async function animateNode(createdCharactersIds) {
    for (let x = 0; x < createdCharactersIds.length; x++) {
        const element = document.querySelector(`#${createdCharactersIds[x]}`);
        await delayByMS(200);
        element.style.color = 'yellow';

    }
}

function getXYaxisById(element) {
    return element.getBoundingClientRect();
}
export function animatePost(animatedContainerId, inputText, targetContainerId) {
    const createdCharactersIds = createElementsForText(animatedContainerId, inputText);
    const targetContainer = document.querySelector(`#${targetContainerId}`);
    const postion = getXYaxisById(targetContainer);
    console.log("postion", postion);
    animateNode(createdCharactersIds);
    // console.log('createdCharactersIds', createdCharactersIds);
}