import { POST__COPY_CHARACTER_KEY } from '../static/constant';

function createTextElements(text) {
    const elements = [];
    for (let x = 0; x < text.length; x++) {
        const element = document.createElement('span');
        element.style.top = 0;
        // element.style.left = 0;
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
    });
}

function insertNode(parentNode, node) {
    // parentNode.insertAdjacentHTML('beforeend', node);
    parentNode.insertAdjacentHTML('afterbegin', node);
}

function getXYaxisById(element) {
    return element.getBoundingClientRect();
}


async function transitionElement(element, elementFromPosition, translateToPosition) {
    element.style.position = 'absolute';
    let isDown = false;
    let topEnd = translateToPosition.top - 50;
    let topDone = false;
    let top = 0;
    const interval = setInterval(() => {
        top += 10;

        if (top >= translateToPosition.top) {
            top = translateToPosition.top;
            clearInterval(interval);
        }
        element.style.top = top + 'px';
        element.style.left = translateToPosition.left + 'px';
    }, 50);
    // element.style.top = translateToPosition.top + 'px';
    // element.style.left = translateToPosition.left + 'px';
}

// positionTo is the position of an object where the animation to be done 
async function animateNode(targetContainer, createdCharactersIds, targetContainerPosition) {
    let lastElementPosition = null;
    for (let x = createdCharactersIds.length - 1; x >= 0; x--) {
        const element = document.querySelector(`#${createdCharactersIds[x]}`);
        const elementPosition = getXYaxisById(element);
        if (x === createdCharactersIds.length - 1) {
            lastElementPosition = elementPosition;
        }
        const top = targetContainerPosition.top - elementPosition.top;
        const left = elementPosition.left - targetContainerPosition.left;
        const translateToPosition = { top, left };

        await delayByMS(20);
        transitionElement(element, elementPosition, translateToPosition);

        console.log(element);
        // debugger;
    }
}
function addLeftPositionToElements(createdCharactersIds) {
    createdCharactersIds.forEach((id) => {
        const element = document.querySelector(`#${id}`);
        const position = getXYaxisById(element);
        // element.style.transition = 'top 5s, left 5s';
        element.style.left = position.left;
        element.style.top = '-50px';
        // debugger;
    });
}
export function animatePost(animatedContainerId, inputText, targetContainerId) {
    return new Promise((resolve, reject) => {
        const createdCharactersIds = createElementsForText(animatedContainerId, inputText);
        const targetContainer = document.querySelector(`#${targetContainerId}`);
        const targetContainerPosition = getXYaxisById(targetContainer);
        // console.log("position", position);
        // addLeftPositionToElements(createdCharactersIds);
        animateNode(targetContainer, createdCharactersIds, targetContainerPosition);
        console.log('createdCharactersIds', createdCharactersIds);
    });
}