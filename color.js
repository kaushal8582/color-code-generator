const genreateBtn = document.querySelector('.generate')
const colorBox = document.querySelector('.color-box')
const colorText = document.querySelector('.color-code-box h3')
const copyText= document.querySelector('.copy')


function copy(){
   
    navigator.clipboard.writeText(colorText.innerText)

}

function getcode(){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#"+randomNumber.toString(16);
    colorBox.style.backgroundColor = randomCode
    colorText.innerText=randomCode
   
}
copyText.addEventListener('click',()=>{
    copy()
})

genreateBtn.addEventListener('click',()=>{
  getcode()
})

getcode()