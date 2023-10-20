const vmLink = document.querySelector(".vm")
const vm = document.querySelector(".vmEl")
const vmEnd =document.querySelector(".vmEnd")

const settingsLink = document.querySelector(".settings")
const settings = document.querySelector(".settingsEl")
const settingsEnd = document.querySelector(".settingsEnd")

const gitLink = document.querySelector(".git")
const github = document.querySelector(".gitEl")
const gitEnd = document.querySelector(".gitEnd")

const settings2Link = document.querySelector(".settings2")
const settings2 = document.querySelector(".settings2El")
const settings2End = document.querySelector(".settings2End")

const cloneLink = document.querySelector(".clone")
const gitClone = document.querySelector(".gitClone")
const cloneEnd = document.querySelector(".cloneEnd")

const apacheLink = document.querySelector(".apache")
const apache = document.querySelector(".apacheEl")
const end = document.querySelector(".end")

const img = document.querySelector("img")
const progress = document.querySelector(".progress")

vmLink.addEventListener("click", (e) => {
    scroll(vm)
    highlight(vm)
})
settingsLink.addEventListener("click", (e) => {
    scroll(settings)
    highlight(settings)
})
gitLink.addEventListener("click", (e) => {
    scroll(github)
    highlight(github)
})
settings2Link.addEventListener("click", (e) => {
    scroll(settings2)
    highlight(settings2)
})
cloneLink.addEventListener("click", (e) => {
    scroll(gitClone)
    highlight(gitClone)
})
apacheLink.addEventListener("click", (e) => {
    scroll(apache)
    highlight(apache)
})

window.addEventListener("scroll", (e) => {
    if (window.scrollY > (end.offsetHeight + end.offsetTop)){
        progress.style.width = "100%"
    }else if (window.scrollY > (cloneEnd.offsetHeight + cloneEnd.offsetTop)){
        progress.style.width = "83%"
    } else if(window.scrollY > (settings2End.offsetHeight + settings2End.offsetTop)){
        progress.style.width = "63%"
    }else if(window.scrollY > (gitEnd.offsetHeight + gitEnd.offsetTop)){
        progress.style.width = "46%"
    }else if(window.scrollY > (settingsEnd.offsetHeight + settingsEnd.offsetTop)){
        progress.style.width = "32%"
    }else if(window.scrollY > (vmEnd.offsetHeight + vmEnd.offsetTop)){
        progress.style.width = "13%"
        progress.style.height = "5px"
        progress.style.marginTop = "5px"
    }else if(window.scrollY < (vmEnd.offsetHeight + vmEnd.offsetTop)){
        progress.style.height = "0px"
        progress.style.marginTop = "0px"
        progress.style.width = "0%"
    } 
})

function highlight(x){
    x.style.transitionDuration = "1s";
    x.style.backgroundColor = "white";
    setTimeout(function(){
        x.style.transitionDuration = "0";
        x.style.backgroundColor = "rgba(0, 0, 0, 0.452)";
    },(500));
}

function scroll(x){
    x.scrollIntoView({ block: "center", behavior: "smooth" })
}