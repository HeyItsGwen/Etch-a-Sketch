let gridSize;

const random = () => {

};

const reset = () =>{
    $('#gridHolder').empty();

    let num = window.prompt('How many pixels on each side of the grid?');

    gridSize = num * num;

    let gridWidth = 100/num;

    let gridString = gridWidth + '%';
    
    for(let i=0; i < gridSize; i++){
        $('#gridHolder').append('<div class="gridBox"></div>');
        console.log(i);
    }

    $('.gridBox').css('width',gridString);

    $('.gridBox').on('mouseenter', () => {
        let color = $('.pickAColor').val();

        event.target.style.backgroundColor = color;
    })
}

for(let i=0; i < 256; i++){
    $('#gridHolder').append('<div class="gridBox"></div>');
}
 
$('.gridBox').on('mouseenter', () => {
    let color = $('.pickAColor').val();

    event.target.style.backgroundColor = color;
})

