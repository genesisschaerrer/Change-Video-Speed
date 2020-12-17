const video = document.querySelector('video')

const fastBtn = document.createElement('button')
      fastBtn.innerHTML = "Fast"
      document.body.appendChild(fastBtn)
      fastBtn.style.marginLeft = "600px"
const normalBtn = document.createElement('button')
      normalBtn.innerHTML = "Normal"
      document.body.appendChild(normalBtn)
const slowBtn = document.createElement('button')
      slowBtn.innerHTML = "Slow"
      document.body.appendChild(slowBtn)
const pauseBtn = document.createElement('button')
      pauseBtn.innerHTML = "Pause"
      document.body.appendChild(pauseBtn)

fastBtn.addEventListener("click", (e)=> {
    console.log('got to fast')
    video.play()
    video.playbackRate = 2.0
})

normalBtn.addEventListener("click", (e) =>{
    console.log('got to normal')
    video.play()
    video.playbackRate = 1.0
})

slowBtn.addEventListener("click", (e) => {
    console.log('got to slow')
    video.play()
    video.playbackRate = 0.5
})

pauseBtn.addEventListener("click", (e) => {
    video.pause()
})