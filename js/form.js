var formElement=document.forms.INFO;
    formElement.onsubmit=validateInfoForm;

    function validateInfoForm() {

        var nameElement=formElement.elements.name;
        var telElement=formElement.elements.tel;
    
        

        var nameValue=nameElement.value;
        var telValue=telElement.value;
       

        if ( nameValue.length>15 ) {
            alert('Введите пожалуйста ВАШЕ ИМЯ не длиннее 15 символов!');
            nameElement.focus();
            return false;
        }else  if( isNaN(telValue) ) {
            alert('Введите пожалуйста ВАШ ТЕЛЕФОН корректно!');
            telElement.focus();
            return false;
        } else {
            alert('Спасибо за сообщение!');        }
        return true;
    }



    let inputs = document.querySelectorAll('input[data-rule]');

    for (let input of inputs){
    input.addEventListener('blur',function(){
    let rule = this.dataset.rule;
    let value = this.value;
    let check;
      switch(rule){
        case 'text':
          let length = value.length;
          let from = +this.dataset.from;
          let to = +this.dataset.to;
          check = length >= from && length<=to;
        break;

        case 'number':
        check = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/.test(value);
        break;
        
      }
      this.classList.remove('invalid');
      this.classList.remove('valid');
      if(check){
        this.classList.add('valid');
      }else{
        this.classList.add('invalid');
      }
  });
}

