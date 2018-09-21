let changeColor = document.getElementById('changeColor');
let darkc, fontc;
let body = document.querySelector("body");

chrome.storage.sync.get(['fontcolor', 'darkcolor'], function (data) {
    changeColor.style.backgroundColor = data.darkcolor;
    changeColor.setAttribute('value', data.darkcolor);
    changeColor.style.color = data.fontcolor;
    changeColor.setAttribute('value', data.fontcolor);
    darkc = data.darkcolor;
    fontc = data.fontcolor;
    // body.style.backgroundColor = data.fontcolor;
    // body.setAttribute('value', data.fontcolor)
});

changeColor.onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code:`
                    let codeBoxes = document.querySelectorAll(".ace_content");
                    let codeArr = document.querySelectorAll("code");
                    document.body.style.backgroundColor = "${darkc}";
                    document.body.style.color="${fontc}"
                    document.body.style.fontFamily="Arial"
                    codeArr.forEach((codeHigh) => {
                        codeHigh.style.color = "#f1d817"
                    })
                    codeBoxes.forEach((codeBox) => {
                        codeBox.style.color = "black";
                        codeBox.style.backgroundColor = "darkgrey";
                    })  
                    `
                });
    });
};