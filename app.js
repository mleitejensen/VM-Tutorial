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
    vm.scrollIntoView({ block: "center", behavior: "smooth" })
    highlight(vm)
})

settingsLink.addEventListener("click", (e) => {
    settings.scrollIntoView({ block: "center", behavior: "smooth" })
    highlight(settings)
})

gitLink.addEventListener("click", (e) => {
    github.scrollIntoView({ block: "center", behavior: "smooth" })
    highlight(github)
})

settings2Link.addEventListener("click", (e) => {
    settings2.scrollIntoView({ block: "center", behavior: "smooth" })
    highlight(settings2)
})

cloneLink.addEventListener("click", (e) => {
    gitClone.scrollIntoView({ block: "center", behavior: "smooth" })
    highlight(gitClone)
})

apacheLink.addEventListener("click", (e) => {
    apache.scrollIntoView({ block: "center", behavior: "smooth" })
    highlight(apache)
})

window.addEventListener("scroll", (e) => {
    if (window.scrollY > (end.offsetHeight + end.offsetTop)){
        progress.style.width = "100%"
    }else if (window.scrollY > (cloneEnd.offsetHeight + cloneEnd.offsetTop)){
        progress.style.padding = "5px"
        progress.style.width = "83%"
    } else if(window.scrollY > (settings2End.offsetHeight + settings2End.offsetTop)){
        progress.style.padding = "5px"
        progress.style.width = "63%"
    }else if(window.scrollY > (gitEnd.offsetHeight + gitEnd.offsetTop)){
        progress.style.padding = "5px"
        progress.style.width = "46%"
    }else if(window.scrollY > (settingsEnd.offsetHeight + settingsEnd.offsetTop)){
        progress.style.padding = "5px"
        progress.style.width = "32%"
    }else if(window.scrollY >(vmEnd.offsetHeight + vmEnd.offsetTop)){
        progress.style.padding = "5px"
        progress.style.width = "13%"
    }else if(window.scrollY < (vmEnd.offsetHeight + vmEnd.offsetTop)){
        progress.style.width = "0%"
        progress.style.padding = "0"
    }
})

const bilde = document.querySelector(".bilde")

if(bilde.classList.contains("small")){
    bilde.addEventListener("click", (e) => {
        bilde.style.position = "fixed"
        bilde.style.top = "5%"
        bilde.style.left = "5%"
        bilde.style.maxWidth = "90%"
        bilde.classList.add("big")
        bilde.classList.remove("small")
    })
}

if(bilde.classList.contains("big")){
    bilde.addEventListener("click", (e) => {
        console.log("e")
        bilde.style.position = "relative"
        bilde.style.top = "0"
        bilde.style.left = "0"
        bilde.style.maxWidth = "80%"
        bilde.classList.remove("big")
        bilde.classList.add("small")
    })
}






function highlight(x){
    x.style.transitionDuration = "1s";
    x.style.backgroundColor = "white";
    let t = setTimeout(function(){
        x.style.transitionDuration = "0";
        x.style.backgroundColor = "rgba(0, 0, 0, 0.452)";
    },(500));
}