const popup = document.querySelector('.popup');
document.addEventListener('mousedown', function(e){
    if(e.target.closest('.popup') === null){
        popup.style.display = 'none';
    }
});
