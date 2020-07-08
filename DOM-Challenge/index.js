document.addEventListener("DOMContentLoaded", function() {
    console.log('The DOM has loaded');
    count;
    document.getElementById('plus').addEventListener('click', event => buttonEvents(event))
    document.getElementById('minus').addEventListener('click', event => buttonEvents(event))
    document.getElementById('heart').addEventListener('click', event => buttonEvents(event))
    document.getElementById('pause').addEventListener('click', event => buttonEvents(event))
})

const count = setInterval(timer, 1000)

function timer() {
    let counter = document.getElementById('counter')
    counter.innerText = parseInt(counter.innerText) + 1
}

function buttonEvents(event) {
    let counter = document.getElementById('counter')
    let current = event.target.id
    let likeList = document.getElementsByClassName('likes')[0]
    console.log(likeList)

    switch (current) {
        case 'plus':
            counter.innerText = parseInt(counter.innerText) + 1
            break;

        case 'minus':
            counter.innerText = parseInt(counter.innerText) - 1
            break;

            case 'heart':
                console.log(likeList)
                let likedTime = counter.innerText;
                let newLike = document.createElement('li');
                newLike.innerText = `Liked at ${likedTime} second(s)`
                likeList.append(newLike)
            break;

            case 'pause':
                clearInterval(count)
            break;
    
        default:
            break;
    }
}