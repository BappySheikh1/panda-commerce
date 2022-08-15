//Q-2 h2 tag color change start
const colorChanges=document.getElementsByTagName('h2');
for(const color of colorChanges){
color.style.color='lightblue'
}
// h2 tag color change end

//Q-3 changeBackgroundColor change start
const backgroundColor =document.getElementById('backPack-area');
    backgroundColor.style.backgroundColor='tomato';
    
// changeBackgroundColor change end

//Q-4 card borderRaduis start


// card borderRaduis end

//Q-5 function click handler start
function clickHandler(){
    console.log('ami notun notun javaScript shikhtechi')
}
// function click handler end

// Q-6 start
 document.getElementById('btn-buyNow').addEventListener('click', function(){
    const removeDisplay = document.getElementById('remove-content')
    removeDisplay.style.display='none';
 })
 
 document.getElementById('btn-buyNow1').addEventListener('click', function(){
    const removeDisplay = document.getElementById('remove-content1')
    removeDisplay.style.display='none';
 })

 document.getElementById('btn-buyNow2').addEventListener('click', function(){
    const removeDisplay = document.getElementById('remove-content2')
    removeDisplay.style.display='none';
 })
//  backpack
document.getElementById('buy-now1').addEventListener('click', function(){
    const removeDisplay = document.getElementById('backPack-buy1')
    removeDisplay.style.display='none';
 })

document.getElementById('buy-now2').addEventListener('click', function(){
    const removeDisplay = document.getElementById('backPack-buy2')
    removeDisplay.style.display='none';
 })

document.getElementById('buy-now3').addEventListener('click', function(){
    const removeDisplay = document.getElementById('backPack-buy3')
    removeDisplay.style.display='none';
 })

  // Q-6 end

// Q-7 email type button enable start
document.getElementById('send-button').addEventListener('click', function(){
    const removeDisplay = document.getElementById('form-delete')
    removeDisplay.style.display='none';
 })


document.getElementById('enable-button').addEventListener('keyup', function(event){
    const text =event.target.value;
    const enableButton =document.getElementById('send-button');
    if(text === 'email'){
        enableButton.removeAttribute('disabled')
    }else{
        enableButton.setAttribute('disabled',true)
    }
})
//  email type button enable end

// Q-9 dbclick color change start
document.getElementById('panda-bg-js').addEventListener('dblclick', function(){
    const changeBackgroundColor=document.getElementById('panda-bg-js');
    changeBackgroundColor.classList.add('background-color');
})
// dbclick color change end
