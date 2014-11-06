function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}

function startMove(obj, attr, iTarget,fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var cur = null;
        if (attr == "opacity") {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            //console.info(cur);
        } else {
            cur = parseInt(getStyle(obj, attr));
        }
        obj.speed = (iTarget - cur) / 6;
        obj.speed = obj.speed > 0 ? Math.ceil(obj.speed) : Math.floor(obj.speed);
        if (iTarget == cur) {
            clearInterval(obj.timer);
            if (fnEnd) fnEnd();
        } else {
            if (attr == "opacity") {
                obj.style.filter = "alpha(opacity:" + (cur + obj.speed) + ")";
                obj.style.opacity = (cur + obj.speed) / 100;
            } else {
                obj.style[attr] = cur + obj.speed + "px";
            }
        }
    }, 30);
}



