const allImages = document.querySelectorAll('.image');
const allImageWrappers = document.querySelectorAll('.image-wrapper');

allImages.forEach((image,index)=>{
    image.onload=()=>{
        allImageWrappers[index].style.filter='blur(0)';
    }
    setTimeout(()=>{
        allImageWrappers[index].style.filter='none';
    },2000);
})