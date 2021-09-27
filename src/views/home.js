/* eslint-disable eol-last */
import {
  signOut,
  userInfo,
} from '../firebase/auth.js';

import {
  createNewPost,
  readAllPosts,
  updateLike,
  // updatePost,
} from '../firebase/firestore.js';

import {
  uploadImage,
} from '../firebase/storage.js';

// Cerrar Sesión
const logOut = (document) => {
  const idOut = document.querySelector('#idOut');
  idOut.addEventListener('click', () => {
    signOut();
    console.log(signOut());
    alert('Cerrando sesión. :(');
  });
};

const createPost = (document) => {
  const idButtonPublish = document.querySelector('#idButtonPublish');
  const idPublishBox = document.querySelector('#idPublishBox');
  const user = userInfo();

  idButtonPublish.addEventListener('click', (e) => {
    e.preventDefault();

    const postContent = document.querySelector('#idPublishBoxText').value;
    const msgErrorPublish = document.querySelector('.errorPublish');

    if (postContent.charAt(0) === ' ' || postContent === '') {
      msgErrorPublish.textContent = 'Por favor rellena el campo antes de publicar.';
    } else {
      const fileImg = document.querySelector('#fileImg');
      const image = fileImg.files[0];
      if (image) {
        const uploadImg = uploadImage(image, 'photos');
        uploadImg.on( // Cargando imagen de pc
          'state_changed',
          (snapshot) => {
            const loadingImg = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${loadingImg}% done`);
          },
          (error) => {
            console.error(error);
          },
          () => {
            uploadImg.snapshot.ref.getDownloadURL().then((postImgUrl) => {
              createNewPost(user.photo, user.name, user.id, postContent, [], postImgUrl)
                .then(() => {
                  msgErrorPublish.classList.add('hide');
                  idPublishBox.reset();
                }).catch((error) => console.log(error));
            });
          },
        );
      } else {
        createNewPost(user.photo, user.name, user.id, postContent, [], '')
          .then(() => {
            msgErrorPublish.classList.add('hide');
            idPublishBox.reset();
          })
          .catch((error) => console.log(error));
      }
    }
  });
};

// EDITAR Y BORRAR POST
// const postFunctions = (post, user) => {
//   const menuPost = post.querySelector('.show'); // verificar
//   const secUserSelect = post.querySelector('.secUserSelect'); // verificar
//   const section = document.createElement('section');
//   section.classList.add('hide');
//   menuPost.addEventListener('click', (e) => {
//     e.preventDefault();

//     // Modal para editar/ elim post
//     const modal = `<ul class="modalMenu">
//           <li idpost="${user.idPost}" class="editPost">editar</li>
//           <strong>|</strong>
//           <li class="liDeletePost" >borrar</li>
//           </ul>`;
//     section.innerHTML = modal;
//     secUserSelect.appendChild(section);
//     section.classList.toggle('hide');

//     // eliminar post
//     const deleteBtn = post.querySelector('.liDeletePost');
//     deleteBtn.addEventListener('click', () => {
//       const modalMenu = post.querySelector('.modalMenu');
//       modalMenu.classList.add('hide');
//       const newModal = `
//             <ul class="deleteMenu">
//             <p>Borrar post?</p>
//             <section>
//               <li id="idYes">Si</li>
//               <strong>|</strong>
//               <li id="idNo">No</li>
//             </section>`;
//       section.innerHTML = '';
//       section.innerHTML = newModal;
//       const idYes = post.querySelector('#idYes');
//       const idNo = post.querySelector('#idNo');
//       idYes.addEventListener('click', () => deletePost(user.idPost)
//         .then((resp) => resp)
//         .catch((err) => console.error(err)));
//       idNo.addEventListener('click', () => section.classList.add('hide'));
//     });

//     // editar post
//     const editPost = post.querySelector('.editPost');
//     const saveIcon = post.querySelector('.saveIcon');
//     editPost.addEventListener('click', () => {
//       const publishedText = post.querySelector('.publishedText');
//       publishedText.contentEditable = 'true'; // mét. para editar
//       publishedText.focus();
//       saveIcon.classList.remove('hide');
//     });
//     saveIcon.addEventListener('click', () => {
//       const publishedText = post.querySelector('.publishedText');
//       const idPosts = editPost.getAttribute('idpost');
//       const textPostEdited = publishedText.innerText.trim();
//       if (textPostEdited !== '') {
//         publishedText.contentEditable = 'false';
//         saveIcon.classList.add('hide');
//         section.classList.toggle('hide');
//         updatePost(idPosts, textPostEdited);
//       }
//     });
//   });
// };
// Funcion contar likes
const countLikesPost = (secElement, elem, user) => {
  const startLike = secElement.querySelector('.fa-heart');
  startLike.addEventListener('click', () => {
    let counter = elem.counterLikes;
    if (!counter.includes(user.id)) {
      startLike.classList.replace('far', 'fas');
      counter.push(user.id);
      updateLike(elem.idPost, counter);
    } else if (counter.includes(user.id)) {
      startLike.classList.replace('fas', 'far');
      counter = counter.filter((i) => i !== user.id);
      updateLike(elem.idPost, counter);
    }
  });
};

// TEMPLATE DE POST PUBLICADO
const postView = (elem, user) => {
  // eslint-disable-next-line spaced-comment
  const view = /*html*/ `
  <section class="secHeadPost">
    <section class="secInfoUserPost">
      <img class="imgUserPost" src=${elem.photo} alt="userImage">
      <section class="nameAndDatePost">
        <h2 class="userNamePost">${elem.name}</h2>
        <p class="datePost">${elem.date}</p>
      </section>
    </section>

    <!--VERIFICAR ***-->
     <!--<section class="secUserSelect" >
        <button class="buttonMenu ${elem.id === user.id ? 'show' : 'hide'}"></button>
    </section>-->

  </section>

  <section class="secMainPost">
    <section class="secDescriptionPost">
      <section>
        <p id="${elem.idPost}" class="publishedText">${elem.content}</p>
        <span idSaveIcon="${elem.idPost}" class="saveIcon hide"></span>
      </section>
      ${elem.postImgUrl ? `<img  class="postImg" src=${elem.postImgUrl} alt="postImg">` : ''}
    </section>

    <!-- SECCION LIKES ***-->
    
  <section class="secInteractionPost">
  <section id= "iconLike" class="iconPost">
  <span class = "iconColor">
  <i class="${elem.counterLikes.includes(user.id) ? 'fas' : 'far'} fa-heart"></i></span>
  <p>${elem.counterLikes.length ? elem.counterLikes.length : ''} </p>
  </section>
    <section class="iconPost">
    <span class="iconify" data-icon="emojione-v1:lower-left-pencil" data-width="18" data-height="18"></span>
    </section>
    <section class="iconPost">
    <span class="iconify" data-icon="noto:wastebasket"></span>
    </section>
    <section class="iconPost">
     <span class="iconify" data-icon="ci:share" data-width="18" data-height="18">
    </section>
  </section>

    <form class="createComment hide" id="idFormCreateComment"
        idCommentPost1="${elem.idPost}" userId="${user.id}" userName="${user.name}" >
        <img class="imgUserPostComment" alt="userimage1" src="${user.photo}">
        <textarea id="descriptionComment" class="textComment" placeholder="Dejame un comentario..."></textarea>
        <i idCommentPost="${elem.idPost}"></i>
    </form>

    <div class="errorComment error"></div>
    <div class="comments-container hide "></div>
  </section>
      `;
  return view;
};

// HOME
export const homeView = (user) => {
  // eslint-disable-next-line spaced-comment
  const view = /*html*/ `
  <header class="secHeader" id="idHeader">

    <section class="secLogoText" id="idNavList">
      <a class="logoText" href='#/home'>EcoPunto</a>
    </section>

    <section class="navbar" id="idNavList">
      <a href="#/home">
        <span data-width="25"class="iconify" data-icon="bx:bxs-home-heart"></span>Inicio</a>
      <a href="#/profile">
        <span data-width="25" class="iconify" data-icon="mdi:account-circle"></span>Mi perfil</a>
      <a id="idOut" href="#/">
        <span data-width="25" class="iconify" data-icon="ic:outline-log-in"></span>Cerrar sesión</a>
    </section>
  </header>

  <section class="secHome">

    <section class="secUserInfo">

      <section class="secImgProfile">
        <img class="imgProfile" src="${user.photo}" alt="ImgProfile" style= border-radius: 90px;>
      </section>

      <section class="secTextInfo">
        <h2 class="nameUser">${user.name}</h2>
        <p class="nameUser1">999 876 543</p>
        <p class="nameUser1">Botellas de plástico, papel reciclado.</p>
        <p class="nameUser1">Lima</p>
      </section>

    </section>

    <section class="secHomePublish">

      <form class="secPublishBox" id="idPublishBox">

        <textarea class="boxText" name="" id="idPublishBoxText" 
        placeholder="¿Qué quieres compartir?"></textarea>
        <!-- Mensaje de error -->
        <section class="errorPublish"></section>

        <section class="secBtnBoxText" id="idBoxText">
          <figure class="imgFile">
            <span id= "iconFile" class="iconify" data-icon="noto-v1:framed-picture"
            data-width="25" data-height="25"></span>
            <input type="file" id="fileImg" accept="image/png, image/jpg, image/jpeg"/>

            <!--verificar***-->
            <section class="hoverPhoto"></section>
          </figure>
          <!--<button class="inputShare"  id="idButtonDelete" type="button">Borrar</button>-->
          <button class="inputShare"  id="idButtonPublish" type="button">Publicar</button>
        </section>

        <section class="timelinePosts"></section>

      </form>

      <section class="secHomePost"></section>
  </section>

  <!--<footer class="secFooter" id="idSecFooter">
  ©2021 Developed by <a href="https://github.com/nanita462" target="_blank">Ana Aguilera </a>
  and<a href="https://github.com/Mariperu" target="_blank"> Maritza Rodriguez</a>
  </footer>-->
  `;

  const mainHome = document.getElementById('mainContainer');
  mainHome.innerHTML = '';
  mainHome.innerHTML = view;

  createPost(mainHome);
  logOut(mainHome);

  readAllPosts((posts) => {
    const secHomePost = mainHome.querySelector('.secHomePost');
    secHomePost.innerHTML = '';
    posts.forEach((post) => {
      const secElem = document.createElement('section');
      secElem.classList.add('newPost');
      secElem.innerHTML = postView(post, user);

      // if (post.id === user.id) {
      //   postFunctions(secElem, post);
      // }
      countLikesPost(secElem, post, user);
      // createPostComments(divElem);
      // readComments(divElem, user);
      secHomePost.appendChild(secElem);
    });
  });

  return mainHome;
};

// POST
/* <section class="secPost">
      <section class="secPostName">
        Aqui va nombre de quien publica
      </section>
      <section class="secPostDate">
        Aqui va fecha de publicación
      </section>

      <section class="secPostImg">
        Aqui va imagen posteada
      </section>

      <section class="secPostText">
        Aqui va el texto de post
      </section>

      <section class="secBtnPost">
        <button class="buttonShare" id="idButtonShare" type="button">Compartir</button>
        <button class="buttonLike" id="idButtonImg" type="button">Me gusta</button>
        <button class="buttonDelete" id="idButtonShare" type="button">Eliminar</button>
        <!--<button class="buttonEdit" id="idButtonEdit" type="button">Editar</button>-->

      </section>
    </section> */