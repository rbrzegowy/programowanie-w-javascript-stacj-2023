import { applyFilters } from "./webworker-camera-filters.js"

document.addEventListener('DOMContentLoaded', appStart)

let video, sourceCanvas, targetCanvas, sourceCtx, targetCtx
let worker, useWorker

function appStart() {
    watchWithWorkerSwatch()
    getElementsFromHtml()
    setupCanvas()
    setupUserCamera()
    createAndWatchWorker()
}

function setupCanvas() {
    sourceCtx = sourceCanvas.getContext('2d')
    targetCtx = targetCanvas.getContext('2d')
}

function getElementsFromHtml() {
    video = document.querySelector('video')
    sourceCanvas = document.querySelector('canvas#source')
    targetCanvas = document.querySelector('canvas#target')
}

function setupUserCamera() {
    let media = {
        video: true
    }
    navigator.mediaDevices.getUserMedia(media)
        .then(mediaOk)
        .catch(mediaFail)
}

function createAndWatchWorker() {
    worker = new Worker('webworker-camera-worker.js', { type: "module" })
    worker.addEventListener('message', onWorkerMessage())
}

function onWorkerMessage() {
    return (e) => {
        targetCtx.putImageData(e.data, 0, 0)
    }
}

function watchWithWorkerSwatch() {
    document.querySelector('#with-worker').addEventListener('change', (e) => {
        useWorker = e.target.checked
    })
}
function mediaOk(stream) {
    video.srcObject = stream
    video.play()
    requestAnimationFrame(drawCanvas)
}
function drawCanvas() {
    sourceCtx.drawImage(video, 0, 0)
    const imgData = sourceCtx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height)
    if (useWorker) {
        worker.postMessage(imgData)
    } else {
        applyFilters(imgData)
        targetCtx.putImageData(imgData, 0, 0)
    }
    requestAnimationFrame(drawCanvas)
}

function mediaFail(err) {
    console.log(err);
}