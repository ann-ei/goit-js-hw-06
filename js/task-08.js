const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if(email.value === '' || password.value === '') {
        return alert('все поля должны быть заполнены');
    }
    
    const onFormResult = {};
    const formData = new FormData(event.currentTarget);
    console.log(formData);


    formData.forEach((value, name) => {
    onFormResult[name] = value;
    });
    console.log(onFormResult);
    form.reset();
}

// const loginFormEl = document.querySelector("form.login-form");

// loginFormEl.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   // .preventDefault() - не дает форме перезагружаться
//   event.preventDefault();
//   //   console.log("Это сабмит формы");

//   // ссылка на все элемнты
//   const formElements = event.currentTarget.elements;

//   // ссылки на значения элементов
//   const mail = formElements.email.value;
//   const password = formElements.password.value;
//   //   console.log(mail, password);

//   // проверяем, что все поля заполнены
//   if (mail === "" || password === "") {
//     return alert(`Заполните все поля!`);
//   }
//   const onFormResult = {};
//   const formData = new FormData(event.currentTarget);
//   console.log(formData);
//   formData.forEach((value, name) => {
//     onFormResult[name] = value;
//   });
//   console.log(onFormResult);
//   loginFormEl.reset();
// }
