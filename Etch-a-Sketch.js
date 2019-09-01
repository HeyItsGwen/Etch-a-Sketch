

for(let i=0; i < 256; i++){
    $('#gridHolder').append('<div class="gridBox"></div>');
    console.log(i);
}

let gridBox = document.getElementById('gridBox');

$('.gridBox').on('mouseenter', () => {
    event.target.style.backgroundColor = 'red';
})

