export function beforeStart(options, extensions) {
    console.log("beforeStart");

    var element = document.createElement('script');
    element.src = "/test1.js";
    document.head.appendChild(element);
}

export function afterStarted(blazor) {
    console.log("afterStarted");

    var element = document.createElement('script');
    element.src = "/test2.js";
    document.head.appendChild(element);
}