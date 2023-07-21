
// HEADER

        const menuBtnOpen = document.querySelector( ".burger-menu_btn" )
        const menuBurger = document.querySelector( ".menu__burger" )
        const menuBtnAuth = document.querySelector( ".auth_btn.active" )
        const menuAuth = document.querySelector( ".not_authorized__menu" )
            // to open BURGER MENU
            menuBtnOpen.addEventListener( "click", () => {
                menuBurger.classList.toggle( "active" )
                menuBtnOpen.classList.toggle( "menu__toClose" )
            } )

            // to open AUTH_MENU by clicking anonymous-icon
            menuBtnAuth.addEventListener( "click", () => {
                menuAuth.classList.toggle( "active" )
            } )

    // LOGIN_MENU //////REGISTER MENU
        const loginBtn = document.querySelectorAll( ".login_btn" )
        const loginMenu = document.querySelector( ".authorization_form__wrapper" )
        const closeLoginMenuBtn = document.querySelector( ".close-menu_cross.login_menu" )
        const signInBtn = document.querySelectorAll( ".sign_btn" )
        const signMenu = document.querySelector( ".authorization_form__wrapper.sign_menu" )
        const closeSignMenuBtn = document.querySelector( ".close-menu_cross.sign_menu" )
            // To open LOGIN_FORM_MENU
            Array.from( loginBtn ).map( btn => btn.addEventListener( "click", () => {
                loginMenu.classList.add( "active" )
                signMenu.classList.remove( "active" )
            } ) )
            // To close LOGIN_FORM_MENU
            closeLoginMenuBtn.addEventListener( "click", () => {
                loginMenu.classList.remove( "active" )
            } )
            // To open SIGN_FORM_MENU
            Array.from( signInBtn ).map( btn => btn.addEventListener( "click", () => {
                signMenu.classList.add( "active" )
                loginMenu.classList.remove( "active" )
            } ) )
            // To close SIGN_FORM_MENU
            closeSignMenuBtn.addEventListener( "click", () => {
                signMenu.classList.remove( "active" )
            } )

    // To transform auth-menu at the moment of successful authorization and loging out
        const userIconBtn = document.querySelector( ".avatar-icon" )
        const submitLoginBtn = document.querySelector( ".submit_button" )
        const digitalLibraryCard = document.querySelector( ".library_cards__wrapper.active" )
        const userLibraryCard = document.querySelector( ".library_cards__wrapper.for-authorized" )
        const logOutBtn = document.querySelector( ".log-out__btn" )
            // Login
                submitLoginBtn.addEventListener( "click", ( event ) => {
                    event.preventDefault();

                    loginMenu.classList.remove( 'active' )
                    menuBtnAuth.classList.remove( 'active' )
                    userIconBtn.classList.add( 'active' )
                    menuAuth.classList.remove( 'active' )

                    digitalLibraryCard.classList.remove( 'active' )
                    userLibraryCard.classList.add( 'active' )
                } )
            // Logging out
                logOutBtn.addEventListener( "click", () => {
                    menuUserData.classList.remove( 'active' )
                    menuBtnAuth.classList.add( 'active' )
                    userIconBtn.classList.remove( 'active' )
                    menuAuth.classList.add( 'active' )

                    digitalLibraryCard.classList.add( 'active' )
                    userLibraryCard.classList.remove( 'active' )
                } )



    // To copy user-id in clipboard by clicking on copy item
    const copyBtn = document.querySelector( '.copy-btn' );
    const cardNumber = document.querySelector( '.card-number' );
    const copySvg = copyBtn.innerHTML

        copyBtn.addEventListener( 'click', () => {
            const textToCopy = cardNumber.textContent;

            navigator.clipboard.writeText( textToCopy )
                .then( () => {
                    setTimeout( () => {
                        copyBtn.classList.add( 'hidden' )
                        console.log( 'copySvg', copySvg )
                    }, 500 );
                    setTimeout( () => {
                        copyBtn.classList.remove( 'hidden' )
                    }, 1000 );
                } )
                .catch( ( err ) => {
                    console.error( 'Failed to copy text: ', err );
                } );
        } );

    //To open the menu by clicking on user avatar icon when authorized
        const menuBtnUserData = document.querySelector( ".avatar-icon" )
        const menuUserData = document.querySelector( ".authorized__menu" )

        menuBtnUserData.addEventListener( "click", () => {
            menuUserData.classList.toggle( "active" )
        } )

    //To open the user profile data card
        const myProfileBtn = document.querySelector( ".my-profile__btn" )
        const myProfile = document.querySelector( ".my_profile__wrapper" )
        myProfileBtn.addEventListener( "click", () => {
            myProfile.classList.add( "active" )
        } )

    //To close the user profile data card
        const closeMyProfileBtn = document.querySelector( ".close-menu_cross.my_profile" )
        closeMyProfileBtn.addEventListener( "click", () => {
            myProfile.classList.remove( "active" )

        } )


// ABOUT SECTION

    // SWIPER SLIDER
    const swiper = new Swiper( '.swiper', {
        spaceBetween: 20,
        loopedSlides: 3,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 3,
        slidesPerGroup: 1,
        centered: true,
        breakpoints: {
            100: {
                slidesPerView: 1,
            },
            1000: {
                slidesPerView: 2,
            },
            1430: {
                slidesPerView: 3,
            },
        }
    } );


// "Favorites" SECTION

    /// RADIO_BUTTONS MENU CONTENT CHANGE
        window.addEventListener( 'load', function () {
            const radioButtons = document.getElementsByName( 'content' );
            const contentBlocks = document.getElementsByClassName( 'content' );

            for ( let i = 0; i < radioButtons.length; i++ ) {
                radioButtons[i].addEventListener( 'change', function () {
                    for ( let j = 0; j < contentBlocks.length; j++ ) {
                        contentBlocks[j].style.display = 'none';
                    }

                    const selectedBlock = document.getElementById( 'contentBlock' + this.id.substring( 5 ) );
                    if ( selectedBlock ) {
                        selectedBlock.style.display = 'grid';
                    }
                } );
            }
        } );
    // buy-menu
    const openBuyMenuBtn = document.querySelector( ".buy-btn.book_card" )
    const cardFormToBuy = document.querySelector( ".buy_library-card-form__wrapper" )
    const closeBuyMenuBtn = document.querySelector( ".close-cross__btn" )

        // To open the buy-menu
        openBuyMenuBtn.addEventListener( "click", () => {
            cardFormToBuy.classList.add( "open_buy-card" )
        } )

        // To close the buy-menu
        closeBuyMenuBtn.addEventListener( "click", () => {
            cardFormToBuy.classList.remove( "open_buy-card" )
        } )



