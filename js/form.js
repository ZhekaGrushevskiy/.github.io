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
        }

        if ( isNaN(telValue) ) {
            alert('Введите пожалуйста ВАШ ТЕЛЕФОН корректно!');
            telElement.focus();
            return false;
        }
        return true;
    }