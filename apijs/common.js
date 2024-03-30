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