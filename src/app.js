function renderComponent(component) {
    const container = document.createElement('div');
    container.innerHTML = component();
    return container.firstChild;
}

function addComponentToBody(component) {
    document.body.appendChild(renderComponent(component));
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-function]").forEach(element => {
        const func = new Function('target', element.getAttribute("data-function"));
        const targetSelector = element.getAttribute("data-function-target");
        const targetElement = document.querySelector(targetSelector);
        element.onclick = function () {
            func.call(targetElement, targetElement);
        };
    });
});

function start() {
    return `<div class="box">
            <h1 id="HelloWorlder">Hello, WVO!</h1>
            <img id="TriFrame" src="pic/WVO.svg">
        
        <div class="about">
            <span id="about_1">
                <h1 data-function-target="#index" data-function="this.innerText = parseInt(this.innerText) + 1">Click me!</h1>
                <h2 id="index">0</h2>
            </span>
            <span id="about_2">
                <pre>
                    &lth1
                      data-function-target="#index"
                      data-function="
                       <b>this.innerText = 
                       parseInt(this.innerText) + 1</b>"&gt
                      Click me!&lt/h1&gt
                    &ltp&gt id="index">0&lt/p&gt
                </pre>
            </span>
        </div>
    </div>`;
}
//

addComponentToBody(start);
