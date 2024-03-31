const _localUrl = 'http://localhost:8080'

HTMLElement.prototype.addClass = function(className) {
    this.classList.add(className);
};


HTMLElement.prototype.remClass = function(className) {
    this.classList.remove(className);
};


HTMLElement.prototype.addClassList = function(classNames) {
    if (typeof classNames === 'string') {
        classNames = classNames.split(/\s+/);
    }
    this.classList.add(...classNames);
};

HTMLElement.prototype.remClassList = function(classNames) {
    if (typeof classNames === 'string') {
        classNames = classNames.split(/\s+/);
    }
    this.classList.remove(...classNames);
};


function randomString(){
    const rand = Math.random().toString(16).substr(2, 16); 
    return rand;
}