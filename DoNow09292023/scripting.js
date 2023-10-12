function createParagraph() {
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const para4 = document.createElement('p');
    para.textContent="I once felt uninspired";
    para1.textContent="But my brain go rewired";
    para2.textContent="And now I am inspired";
    para3.textContent="I do my work everyday";
    para4.textContent="I love doing work";
    document.body.appendChild(para);
    document.body.appendChild(para1);
    document.body.appendChild(para2);
    document.body.appendChild(para3);
    document.body.appendChild(para4);
}
const buttons=document.querySelectorAll('button');
for(const button of buttons){
    button.addEventListener("click",createParagraph);
}

//Kevin Zhu Period 9&10 9/29/2023