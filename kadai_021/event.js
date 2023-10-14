const addbtn =document.getElementById('btn')
const chgtext =document.getElementById('text')

addbtn.addEventListener('click',()=>{
  setTimeout(()=>{
    chgtext.textContent ="ボタンをクリックしました。"
  },2000);
});