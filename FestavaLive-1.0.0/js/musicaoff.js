const illuzionize = document.querySelector("#illuzionize")
const Vegas = document.querySelector("#Vegas")
const mandagora = document.querySelector("#mandagora")
const video = document.querySelector("#video")

mandagora.addEventListener("play", () =>{
    illuzionize.pause();
    Vegas.pause();
    video.muted = true;

})
Vegas.addEventListener("play",()=>{
    illuzionize.pause();
    mandagora.pause();
    video.muted = true;

})
illuzionize.addEventListener("play",() => {
    Vegas.pause();
    mandagora.pause();
    video.muted = true;

})

mandagora.addEventListener("pause", () =>{
    if (Vegas.pause && mandagora.pause && illuzionize.pause){
        video.muted = false;
    }
})
Vegas.addEventListener("pause",()=>{
    if (Vegas.pause && mandagora.pause && illuzionize.pause){
        video.muted = false;
    }

})
illuzionize.addEventListener("pause",() => {
    if (Vegas.pause && mandagora.pause && illuzionize.pause){
        video.muted = false;
    }
})



