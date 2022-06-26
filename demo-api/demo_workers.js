let i = 0;

function timedCount() {
    i++;
    postMessage(i);
    setTimeout("timeCount ()", 100);
}

timedCount();