//your JS code here. If required.
// Write your code here.
const toastsDiv = document.getElementById("toasts"); const message = document.getElementById("message-content");
const duration = document.getElementById("duration");
const cancelable = document.getElementById("cancelable"); const error = document.getElementById("error");
const addBtn = document.getElementById("add-button");
const clearBtn = document.getElementById("clear-button");
let numOfToasts = 0;
const getDuration = () => {
if(duration.value) {
const numVal = Number(duration.value);
if(!isNaN(numVal) && numVal >= 500) {
return numVal;
}
}
return 500;
};
const removeToastById =(id) => {
    
    const filteredChildren = Array.from(toastsDiv.children).filter(item => item.id !== String(id)); toastsDiv.replaceChildren(...filteredChildren); };
    const createToast = (id, content, isError, isCancelable, duration) => { const div = document.createElement("div");
    div.setAttribute("id", id);
    div.classList.add("toast");
    if(isError) {
    div.classList.add("error-toast");
    } else {
    div.classList.add("success-toast");
    }
    const p = document.createElement("p");
    p.classList.add("message");
    p.textContent = content? content : isError? "Error." : "Success!";
    div.appendChild(p);
    if(isCancelable) {
        const btn = document.createElement("button");
        btn.classList.add("cancel-button");
        btn.textContent = "X";
        btn.addEventListener("click", () => { removeToastById(id);
        });
        div.appendChild(btn);
        }
        toastsDiv.prepend(div);
        setTimeout(() => {removeToastById(id);}, duration);
        };
        addBtn.addEventListener("click", () => {
        const id = numOfToasts;
        const content = message.value;
        const isError = error.checked;
        const isCancelable = cancelable.checked;
        const durationVal = getDuration(); createToast(id, content, isError, isCancelable, durationVal); numOfToasts += 1;
});
clearBtn.addEventListener("click", () => { toastsDiv.textContent = "";
});