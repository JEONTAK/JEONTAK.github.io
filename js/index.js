//main text 타이핑 효과
if (window.location.pathname === "/" ||
    window.location.pathname.endsWith("index.html")) {
    const $txt = document.querySelector(".txt-title");
    const content = "Hello!!\nMy Name Is Jeon Tak :)";
    let contentIndex = 0;
    let typing = function () {
        if (contentIndex < content.length) {
            $txt.innerHTML += content[contentIndex];
            contentIndex++;
            if (content[contentIndex] === "\n") {
                $txt.innerHTML += "<br />";
                contentIndex++;
            }
        } else {
            clearInterval(typingInterval);
        }
    };

    const typingInterval = setInterval(typing, 200);
}


const path = window.location.pathname;
// URL에서 `~~~.html`이 포함된 경우 제거
if (path.endsWith("html")) {
    const newPath = path.replace(".html", "");
    window.history.replaceState(null, "", newPath);
    console.log(newPath);
  }