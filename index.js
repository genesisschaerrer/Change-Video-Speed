const video = document.querySelector('video')

let stylefunc = (btn) => {
  btn.style.background = "#454b47"
  btn.style.padding = "14px 20px"
  btn.style.fontSize = "1.5em"
  btn.style.color = "#42C473"
  btn.style.textTransform = "uppercase"
  btn.style.fontWeight = "bold"
  btn.style.letterSpacing = "2px"
  btn.style.textContent = "center"
}

       

const speedBtnWrapper = document.createElement('div')
      speedBtnWrapper.classList.add('speed-btn-wrapper')
      document.body.appendChild(speedBtnWrapper)
const fastBtn = document.createElement('button')
      fastBtn.innerHTML = "Fast"
      fastBtn.classList.add('speed-buttons')
      document.body.appendChild(fastBtn)
      stylefunc(fastBtn)
      fastBtn.style.marginLeft = "23em"
const normalBtn = document.createElement('button')
      normalBtn.innerHTML = "Normal"
      normalBtn.classList.add('speed-buttons')
      document.body.appendChild(normalBtn)
      stylefunc(normalBtn)
      normalBtn.style.marginLeft = '1.5em'
const slowBtn = document.createElement('button')
      slowBtn.innerHTML = "Slow"
      slowBtn.classList.add('speed-buttons')
      document.body.appendChild(slowBtn)
      stylefunc(slowBtn)
      slowBtn.style.marginLeft = '1.5em'
const pauseBtn = document.createElement('button')
      pauseBtn.innerHTML = "Pause"
      pauseBtn.classList.add('speed-buttons')
      document.body.appendChild(pauseBtn)
      stylefunc(pauseBtn)
      pauseBtn.style.marginLeft = '1.5em'

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