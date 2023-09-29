const vmLink = document.querySelector(".vm")
const vm = document.querySelector(".vmEl")

const settingsLink = document.querySelector(".settings")
const settings = document.querySelector(".settingsEl")

const gitLink = document.querySelector(".git")
const github = document.querySelector(".gitEl")

vmLink.addEventListener("click", (e) => {
    vm.scrollIntoView("smooth")
})

settingsLink.addEventListener("click", (e) => {
    settings.scrollIntoView()
})

gitLink.addEventListener("click", (e) => {
    github.scrollIntoView()
})

