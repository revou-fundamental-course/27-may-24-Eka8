//ini masih minggu depan pembahasannya\\

function formValidation() {
    let nameInput = document.getElementById('name-input').value;
    if (nameInput == null || nameInput == ''){
        alert('Belum Diisi');
    } else {
    console.log(nameInput);
    }
}

let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n);
}
function showBanner() {
    let listImage = document.getElementsByClassName('banner-img');
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    //document.getElementsByClassName('banner-img')[0].style.display='flex';\\
}

