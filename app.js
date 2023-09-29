const vmLink = document.querySelector(".vm")
const vm = document.querySelector(".vmEl")

const settingsLink = document.querySelector(".settings")
const settings = document.querySelector(".settingsEl")

const gitLink = document.querySelector(".git")
const github = document.querySelector(".gitEl")

const settings2Link = document.querySelector(".settings2")
const settings2 = document.querySelector(".settings2El")

const cloneLink = document.querySelector(".clone")
const gitClone = document.querySelector(".gitClone")

const apacheLink = document.querySelector(".apache")
const apache = document.querySelector(".apacheEl")

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




function highlight(x){
    x.style.transitionDuration = "1s";
    x.style.backgroundColor = "white";
    let t = setTimeout(function(){
        x.style.transitionDuration = "0";
        x.style.backgroundColor = "rgba(0, 0, 0, 0.452)";
    },(500));
}