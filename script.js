const btn = document.getElementById("btn")
const messageList = document.getElementsByClassName("success-message") 
const confirmBtn = document.getElementById("confirm")
const cancelList = document.getElementsByClassName("cancel")
const invoice = document.getElementsByClassName("invoice")
const main = document.getElementsByClassName("main")
const takeMeBack = document.getElementById("take-me-back")
btn.addEventListener("click", ()=>{
    main[0].classList.remove("center")
    cancelList[0].classList.add("hide-message")
})
takeMeBack.addEventListener("click", ()=>{
    main[0].classList.add("center")
    cancelList[0].classList.remove("hide-message")
})

confirmBtn.addEventListener("click", ()=>{
    messageList[0].classList.add("hide-message")
    cancelList[0].classList.remove("hide-message")
    setTimeout(()=>{
        invoice[0].classList.add("hide-invoice")
    },2000)
})
