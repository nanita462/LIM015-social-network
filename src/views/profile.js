/* eslint-disable */

const perfilView = ((userData) => {
  //document.createElement('section');
  //perfilView.className += "containerPro";
  //perfilView.innerHTML =
  `
    <section class='profileContent'>
      <section class='infoPro'>
          <section class='pageCover'>
            <h1 class="tittleProfile">EcoPunto</h1>
          </section>
                
            <form class="formProfile" id="idProfile">
            <section class="profileImage">
            <img class="photo" src="#" >
             </section>
               <section class="profilePhoto">
               <input type = "select-photo-profile" value = "upload" id = "btnUploadPhoto">
               <p class="selPhoProfile"><span class="phoProfile">Selecciona tu foto de Perfil</span></span>
               </section>
             <section class="profileName">
               <input class="inputName" type="text" id="idName" placeholder="Ingresa tu Nombre" required>
             </section>
             <section class="profileNumberMovil">
               <input class="inputNumberMOvil" type="number" id="idNumberMovil" placeholder="Ingresa tu número de telefono" required>
             </section>
             <section class="profileProducts">
               <input class="inputProfileProducts" type="text" id="idProfileProducts" placeholder="Ingresa tus productos" required>
             </section>
             <section class="profileAddress">
               <input class="inputProfileAddress" type="text" id="idProfileAddress" placeholder="Ingresa tu Dirección" required>
             </section>
            </form>
    
          <!-- Botón submit - cargar -->
          <input class="inputUpload" type="submit" id="idUpload" value="Upload">
    
         
      </section>
    </section>
    `
  const register = document.getElementById('mainContainer');
  register.innerHTML = '';
  register.innerHTML = perfilView;

  const selectPhotoProfile = document.querySelector('#select-photo-profile');
  selectPhotoProfile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const refPath = `imgProfile/${userId}/${file.name}`;
    const uploadTask = sendImgToStorage(refPath, file);
    //const messageProgress = document.querySelector('#messageProgress');
    //const modalProgress = document.querySelector('.modal-progress');
    //const uploader = document.querySelector('#uploader');
    uploadTask.on('state_changed', (snapshot) => {
      // Handle progress
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // modalProgress.classList.add('showModal');
      //messageProgress.textContent = 'Loading';
      uploader.value = progress;
    }, () => {
      // Handle successful uploads on complete
      uploadTask.snapshot.ref.getDownloadURL()
        .then((downloadURL) => {
          updatePhotoProfile(userId, downloadURL)
            .then(() => {
              //modalProgress.classList.remove('showModal');
              // selectPhotoProfile.reset();
              window.location.reload();
              updateCurrentUserPhoto(downloadURL);
            });
        });
    });
  });

  //const imagePrev = document.querySelector("imagePrev")
  //const fileInput = document.querySelector("#fileInput")

  //fileInput.addEventListener('change', (e) => {
  //const file = e.target.file[0];
  //const reader = new FileReader();
  //reader.readAsDataURL(file);
  //const refPath = `profilePhotoFile/${file.name}`;
  //addFileToStorage(refPath, file).then((data) => {
  //getFileFromStorage(data.metadata.fullPath).then((url) => {
  //imageInput.setAttribute('src', url);
  //});
  //});

  //})
  //return imagePrev;s
});

export {
  perfilView
};