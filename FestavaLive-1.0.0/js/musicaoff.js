const illuzionize = document.querySelector("#illuzionize")
const Vegas = document.querySelector("#Vegas")
const mandagora = document.querySelector("#mandagora")
const video = document.querySelector("#video")
const Alok = document.querySelector("#Alok")
const David_Guetta = document.querySelector("#David-Guetta")

/*Controlar o evento de dar play nas musicas */
mandagora.addEventListener("play", () => {
    illuzionize.pause();
    Vegas.pause();
    Alok.pause();
    David_Guetta.pause();
    video.muted = true;

})
Vegas.addEventListener("play",() => {
    illuzionize.pause();
    mandagora.pause();
    Alok.pause();
    David_Guetta.pause();
    video.muted = true;

})
illuzionize.addEventListener("play",() => {
    Vegas.pause();
    mandagora.pause();
    Alok.pause();
    David_Guetta.pause();
    video.muted = true;

})

Alok.addEventListener("play",() => {
    illuzionize.pause();
    Vegas.pause();
    mandagora.pause();
    David_Guetta.pause();
    video.muted = true;
})

David_Guetta.addEventListener("play",() => {
    illuzionize.pause();
    Vegas.pause();
    mandagora.pause();
    Alok.pause();
    video.muted = true;
})

/*Se todas as musicas estiverem pausada, o audio do video tocara normal. */
mandagora.addEventListener("pause", () => {
    if (Vegas.pause && mandagora.pause && illuzionize.pause && Alok.pause && David_Guetta.pause) {
        video.muted = false;
    }
})
Vegas.addEventListener("pause", () => {
    if (Vegas.pause && mandagora.pause && illuzionize.pause && Alok.pause && David_Guetta.pause) {
        video.muted = false;
    }

})
illuzionize.addEventListener("pause", () => {
    if (Vegas.pause && mandagora.pause && illuzionize.pause && Alok.pause && David_Guetta.pause) {
        video.muted = false;
    }
})

Alok.addEventListener("pause", () => {
    if (Alok.pause && David_Guetta.pause && Vegas.pause && mandagora.pause && illuzionize.pause && David_Guetta.pause) {
        video.muted = false;
    }
})

David_Guetta.addEventListener("pause", () => {
    if(David_Guetta.pause && Alok.pause && Vegas.pause && mandagora.pause && illuzionize.pause && Alok.pause) {
        video.muted = false;
    }
})


