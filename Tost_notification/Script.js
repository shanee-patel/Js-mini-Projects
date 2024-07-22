let toastBox = document.getElementById('toastBox')
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted'
let errorMsg = '<i class="fa-solid fa-xmark"></i> Please fix the error'
let invalidMsg = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid input, cheack again'

function showToast(msg){
    let toast = document.createElement('div')
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
    toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('Invalid');
        }

        setTimeout(()=>{
            toast.remove();
        },5000)
}