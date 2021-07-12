
let productSliderThumbs;
let productSlider;



window.addEventListener('DOMContentLoaded', function() {

	'use strict';

	if (window.getSelection().rangeCount >= 1) {var r = window.getSelection().getRangeAt(0);
}

	//БАННЕР РЕКЛАМНЫЙ
		if(document.querySelector('.js_banner_top')) {

			let bannerTop = document.querySelector('.js_banner_top');//баннер
			let bannerTopClose = document.querySelector('.js_banner_top_close');//кнопка закрытия
			let popupCity = document.querySelector('.popup-city');//popup выбор города
			
			bannerTopClose.addEventListener('click', () => {
				bannerTop.classList.remove('active');
				popupCity.classList.remove('lower');

			});

		}

	//слайдер ДОПОЛНИТЬ ЗАКАЗ инициализация
		if(document.querySelector('.basket-slider__slider')) {
			let basketSlider = new Swiper('.basket-slider__slider', {
				// Optional parameters
				direction: 'horizontal',
				

				breakpoints: {
					320: {
						slidesPerView: 2,
						spaceBetween: 10,
					  },

					550: {
						slidesPerView: 3,
						spaceBetween: 20,
					  },

					900: {
					  slidesPerView: 4,
					  spaceBetween: 20,
					},

					1200: {
						slidesPerView: 4,
						spaceBetween: 0,
					}
				},
			  
				pagination: {
				  el: '.swiper-pagination',
				  clickable: true,
				  renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + "</span>";
				  },
				},
			  
				navigation: {
				  nextEl: '.swiper-button-next',
				  prevEl: '.swiper-button-prev',
				},
			});
		}

	//инициализация слайдера РЕКОМЕНДАЦИИ	
		let productRecommendSlider = new Swiper(".product-recommend__slider", {
			direction: 'horizontal',
			
			

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 10,
					loop: true,
				},

				550: {
					slidesPerView: 3,
					spaceBetween: 20,
				},

				900: {
				slidesPerView: 4,
				spaceBetween: 20,
				},

				1200: {
				slidesPerView: 3,
				}
			},



			navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
			},
		});
		
	//COOKIE 
		if(document.querySelector('.js_cookie_block')) {
			let cookieBlock = document.querySelector('.js_cookie_block');//блок с cookie
			let cookieBlockClose = document.querySelector('.js_cookie_block_close');//кнопка закрыть Х

			// закрыть блок с куки
				cookieBlockClose.addEventListener('click', () => {
					cookieBlock.classList.remove('active');
				});
		}
	
	// HEADER
		if(document.querySelector('.header')) {

			let header = document.querySelector('.header');//header
			let menu = document.querySelector('.menu');//menu

			// событие скролла на странице и уменьшение высоты 
				window.addEventListener('scroll', () => {

					//определяет высоту прокрутки
					if(window.pageYOffset > 80) {
						header.classList.add('floating');
						menu.classList.add('scroll');
					} else {
						header.classList.remove('floating');
						menu.classList.remove('scroll');
					}
					// console.log(window.pageYOffset);
				});


			let headerBottomButtonUp = document.querySelector('.js_header_bottom_button_up');//кнопка вверх
			headerBottomButtonUp.addEventListener('click', () => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			});

			// открыть popup СТАТУС ЗАКАЗА
				let buttonInfoStatus = document.querySelectorAll('.js_bottom_info_status');//кнопка статус заказа
				let popupStatusOrder = document.querySelector('.js_popup_status_order');//popup СТАТУС ЗАКАЗА

				// открыть popup СТАТУС ЗАКАЗА
				buttonInfoStatus.forEach(elem => {
					elem.addEventListener('click', () => {
						popupStatusOrder.classList.add('active');
						bodyFixPosition();
					});
				});

			// открыть popup ПОИСК
				let headerBottomInfoSearch = document.querySelectorAll('.js_header_bottom_info_search');//кнопка поиск в header
				let popupSearch = document.querySelector('.js_popup_search');//popup ПОИСК

				headerBottomInfoSearch.forEach(elem => {
					elem.addEventListener('click', (e) => {
						e.preventDefault();
						popupSearch.classList.add('active');
						// bodyFixPosition();
					});
				});

			// открыть попап ПРОФИЛЬ
				let headerBottomInfoProfile = document.querySelector('.js_header_bottom_info_profile');//иконка избранное
				let headerBottomInfoProfilePopup = document.querySelector('js_header_bottom_info_profile_popup');//popup избранное
				let body = document.querySelector('body');//body

				// открыть/закрыть popup избранное
					body.addEventListener('click', () => {
						if(headerBottomInfoProfile.classList.contains('active')) {
							headerBottomInfoProfile.classList.remove('active');
						}						
					}); 

					headerBottomInfoProfile.addEventListener('click', (e) => {
						e.stopPropagation();
						headerBottomInfoProfile.classList.toggle('active');
					});		

			// открыть попап ИЗБРАННОЕ/КОМПАНИЯ/ВОПРОС И ОТВЕТ
				let headerTopButtonsItem = document.querySelectorAll('.js_header_top_buttons_item');// кнопки
				
				// при клике на кнопку открывется попап
					headerTopButtonsItem.forEach(elem => {					
						
						// elem.addEventListener('click', (e) => {
						// 	e.stopPropagation();
						// 	if(elem.classList.contains('active')) {
						// 		elem.classList.remove('active');
						// 	} else {
						// 		headerTopButtonsItem.forEach(elem => {					
						// 			elem.classList.remove('active');					
						// 		});
						// 		elem.classList.add('active');
						// 	}						
						// });

						elem.addEventListener('mouseenter', () => {
							headerTopButtonsItem.forEach(elem => {					
								elem.classList.remove('active');					
							});
							elem.classList.add('active');
						});

						elem.addEventListener('mouseleave', () => {				
							elem.classList.remove('active');					
							
						});


					});
				
				// при клике на body закрывать попап
					body.addEventListener('click', () => {
						headerTopButtonsItem.forEach(elem => {
							if(elem.classList.contains('active')) {
								elem.classList.remove('active');
							} 					
					
						});
					});
		}

	//FOOTER
		if(document.querySelector('.footer')) {

			let footerLinkListItemSublist = document.querySelectorAll('.js_footer_link_list_item.sublist');//пункты в footer'e с подменю

			// ОТКРЫТИЕ/ЗАКРЫТИЕ ПОДМЕНЮ
				footerLinkListItemSublist.forEach(elem => {
					elem.addEventListener('click', () => {
						elem.classList.toggle('active');
					});
				});
				
			let footerSubscriptionForm = document.querySelector('.js_footer_subscription_form');//форма с емэйлом
			let footerSubscriptionFormInput = footerSubscriptionForm.querySelector('.js_footer_subscription_form_input');//input
			let footerSubscriptionFormButton = footerSubscriptionForm.querySelector('.js_footer_subscription_form_button');//button
			
			// проверка, если есть текст в input
				footerSubscriptionFormInput.addEventListener('input', () => {
					if(footerSubscriptionFormInput.value.length > 0) {
						footerSubscriptionFormInput.classList.add('filled')
						footerSubscriptionFormButton.removeAttribute('disabled');
					} else {
						footerSubscriptionFormInput.classList.remove('filled');
						footerSubscriptionFormInput.classList.remove('valid');
						footerSubscriptionFormButton.setAttribute("disabled", "true");
					}
				});


			// проверка формы на валидность
				function checkFieldValidity(evt) {
					var target = evt.target;
					var isValid = target.validity.valid;
			
					if (isValid === false) {
						target.classList.add('invalid');	
											
					} else {
						
						target.classList.remove('invalid');
						target.classList.add('valid');
					}
		
				};

				footerSubscriptionFormButton.addEventListener('click', () => {
					footerSubscriptionFormInput.classList.remove('filled');
					footerSubscriptionFormInput.blur();
					footerSubscriptionForm.addEventListener('invalid', checkFieldValidity, true);
					footerSubscriptionForm.addEventListener('input', checkFieldValidity, true);

					
				});

			// при клике на "ОТПРАВИТЬ" 
				footerSubscriptionForm.addEventListener('submit', function (evt) {

					var curTarget = evt.currentTarget;				
					var isValid = curTarget.checkValidity();
					
					evt.preventDefault();		

					// если форма заполнена правильно то:
					if (isValid) {
						// popupAutorizForgot.classList.remove('active');
						footerSubscriptionFormInput.classList.remove('valid');
						footerSubscriptionFormInput.classList.remove('filled');
						popupAutorizOrderGuestTwoFormButton.setAttribute("disabled", "true");
					} 
				});
			
		}

	//MENU
		if(document.querySelector('.js_menu')) {

			let menuDropdownListItem = document.querySelectorAll('.js_menu_dropdown_list_item');//пункты меню 
			let menuDropdownSublist = document.querySelectorAll('.js_menu_dropdown_sublist');//выпадающий список подменю

			menuDropdownListItem[0].classList.add('active');
			menuDropdownSublist[0].classList.add('active');
			
			// при наведении показывает список в каталоге для десктоп
			menuDropdownListItem.forEach((elem, index) => {
				elem.addEventListener('mouseenter', () => {
					// делает активным пункты меню
					menuDropdownListItem.forEach(elem => {
						elem.classList.remove('active');
					});
					//делает активным подпункты
					menuDropdownSublist.forEach(elem => {
						elem.classList.remove('active');
					});

					elem.classList.add('active');
					menuDropdownSublist[index].classList.add('active');
				});

				

			});

			let menuButton = document.querySelector('.js_menu_button');//кнопка открыть каталог
			let menuDropdown = document.querySelector('.js_menu_dropdown');//выпадающее меню для десктопа
			let menuDropdownMobile = document.querySelector('.js_menu_dropdown_mobile');//выпадающий список подменю для мобильных

			if(window.innerWidth > 1200) {
				// открыть список каталогов для десктопных при клике на КАТАЛОГ ТОВАРОВ
				menuButton.addEventListener('click', () => {
					menuDropdown.classList.toggle('active');
					menuButton.classList.toggle('active');
				});
			} else { 
				// открыть список каталогов для мобильных при клике на КАТАЛОГ ТОВАРОВ
				menuButton.addEventListener('click', () => {
					menuDropdownMobile.classList.toggle('active');
					menuButton.classList.toggle('active');
				});
			}
		}
	
	//БОНУС
		if(document.querySelector('.js_card_product_descr_bonus')) {
			let cardProductDescrBonus = document.querySelectorAll('.js_card_product_descr_bonus');

			cardProductDescrBonus.forEach(elem => {
				elem.addEventListener('click', () => {
					elem.classList.toggle('active');
				});
			});
		}

	//кнопка СЕРДЕЧКО/ДОБАВИТЬ В ИЗБРАННОЕ
		if(document.querySelector('.js_card_product_info_heart')) {

			let heartAddFavorites = document.querySelectorAll('.js_card_product_info_heart');//сердце

			//делает активными сердечко
			heartAddFavorites.forEach(elem => {
				elem.addEventListener('click', () => {
					elem.classList.toggle('active');
				});
			});
			
		}

	// таб ВЫБОР ПОЛА
		if(document.querySelector('.js_cabinet_personal_data_form_gender')) {
			let cabinetPersonalDataFormGender = document.querySelectorAll('.js_cabinet_personal_data_form_gender');//таб выбора пола

			// console.log(cabinetPersonalDataFormGender);

			cabinetPersonalDataFormGender.forEach(elem => {
				// выбор пола
				let cabinetPersonalDataFormGenderItem = elem.querySelectorAll('.js_cabinet_personal_data_form_gender_item');//выбор пола
				cabinetPersonalDataFormGenderItem.forEach(elem => {

					elem.addEventListener('mouseenter', () => {
						if(!elem.classList.contains('active')) {
							elem.classList.add('hover');
						}							
					});

					elem.addEventListener('mouseleave', () => {
						elem.classList.remove('hover');
					});

					elem.addEventListener('click', () => {
						cabinetPersonalDataFormGenderItem.forEach(elem => {
							elem.classList.remove('hover');
							elem.classList.remove('default');
							elem.classList.remove('active');
							
						});

						elem.classList.add('active');
					});


				});
			});
		}

	//ГЛАВНАЯ СТРАНИЦА
		if(document.querySelector('.main')) {

			// СЛАЙДЕР БАННЕР
			let mainBannerSlider = new Swiper('.main-banner-slider', {
				// Optional parameters
				direction: 'horizontal',
				loop: true,
				slidesPerView: 1,
      			spaceBetween: 0,
			  
				pagination: {
				  el: '.swiper-pagination',
				  clickable: true,
				},
			  
				navigation: {
				  nextEl: '.swiper-button-next',
				  prevEl: '.swiper-button-prev',
				},
			});

			// СЛАЙДЕР АКЦИИ инициализируется на мобильных

			if(window.innerWidth < 1200) { 
				let mainActionSlider = new Swiper('.main-action-slider', {
					// Optional parameters
					direction: 'horizontal',
					loop: true,
					// slidesPerView: 3,
					// spaceBetween: 30,
					breakpoints: {
						// when window width is >= 320px
						320: {
						  slidesPerView: 2,
						  spaceBetween: 10,
						},
						500: {
							slidesPerView: 3,
							spaceBetween: 10,
						},

						880: {
							slidesPerView: 4,
							spaceBetween: 10,
						},
					},
				  
					// If we need pagination
					pagination: {
					  el: '.swiper-pagination',
					  clickable: true,
					  renderBullet: function (index, className) {
						return '<span class="' + className + '">' + (index + 1) + "</span>";
					  },
					},
				  
					// Navigation arrows
					navigation: {
					  nextEl: '.swiper-button-next',
					  prevEl: '.swiper-button-prev',
					},
				});
			}

			//блок ЛУЧШИЕ ПРЕДЛОЖЕНИЯ слайдер

			if(document.querySelector('.main-popular__slider')) {
				let mainPopularSlider = new Swiper('.main-popular__slider', {
					// Optional parameters
					direction: 'horizontal',
					loop: true,
					// slidesPerView: 3,
					// spaceBetween: 30,
					breakpoints: {
						// when window width is >= 320px
						320: {
						  slidesPerView: 2,
						  spaceBetween: 20,
						},
						500: {
							slidesPerView: 3,
							spaceBetween: 20,
						},

						880: {
							slidesPerView: 4,
							spaceBetween: 20,
						},

						1200: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
					},
				  
					// If we need pagination
					pagination: {
					  el: '.swiper-pagination',
					  clickable: true,
					  renderBullet: function (index, className) {
						return '<span class="' + className + '">' + (index + 1) + "</span>";
					  },
					},
				  
					// Navigation arrows
					navigation: {
					  nextEl: '.swiper-button-next',
					  prevEl: '.swiper-button-prev',
					},
				});
			}

		}

	//страница КАТАЛОГ
		if(document.querySelector('.catalog')) {

			// СЛАЙДЕР КАТЕГОРИИ
				let catalogCategorySlider = new Swiper('.catalog-content__category-slider', {

					direction: 'horizontal',
					slidesPerView: 'auto',
					spaceBetween: 16,

					navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					},
				});

			// СЛАЙДЕР БАННЕР на странице КАТАЛОГ КАТЕГОРИИ
			let catalogCategoryBannerSlider = new Swiper('.catalog-category-banner-slider', {

				direction: 'horizontal',
				slidesPerView: 5,
				spaceBetween: 53,

				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: 'auto',
						spaceBetween: 10,
					},
					// when window width is >= 1200px
					1200: {
						slidesPerView: 5,
						spaceBetween: 53,
					},
				},

				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},


			});

			// СОРТИРОВКА
				if(document.querySelector('.js_catalog_content_sort')) {
					let catalogContentSort = document.querySelector('.js_catalog_content_sort');//блок с сортировкой
					let catalogContentSortItem = catalogContentSort.querySelectorAll('.js_catalog_content_sort_item');//пункт сортировки

					// выбор сортировки
					catalogContentSortItem.forEach(elem => {
						elem.addEventListener('click', () => {
							catalogContentSortItem.forEach(elem => {
								elem.classList.remove('active');
							});
							elem.classList.add('active');
						});
					});

				}
					

			// СЛАЙДЕР ПОПУЛЯРНЫЕ БРЕНДЫ
				let catalogPopularBrandSlider = new Swiper('.catalog-content__brands-slider', {

					direction: 'horizontal',
					
					breakpoints: {
						// when window width is >= 320px
						320: {
							slidesPerView: 'auto',
							spaceBetween: 10,
						},
						// when window width is >= 1200px
						1200: {
							slidesPerView: 4,
							spaceBetween: 16,
							loop: true,
						},
					},

					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					  },

					navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					},

				});

			// БЛОК С ФИЛЬТРОМ
				let catalogFiltresItem = document.querySelectorAll('.js_catalog_filtres_item');//блоки с фильтром

				catalogFiltresItem.forEach(elem => {

					let catalogFiltresTitle = elem.querySelector('.js_catalog_filtres_title');//заголовки в фильтрах
					let catalogFiltresContent = elem.querySelector('.js_catalog_filtres_content');//контентная часть
					let catalogFiltresContentShowCheckbox = elem.querySelector('.js_catalog_filtres_content_show_checkbox');//кнопка ПОКАЗАТЬ ВСЕ 
					
					// скрыть/показать контентную часть
					catalogFiltresTitle.addEventListener('click', () => {
						catalogFiltresContent.classList.toggle('hide');
						catalogFiltresTitle.classList.toggle('hide');
					});

					if(catalogFiltresContentShowCheckbox) {
						//при клике на показать все
						catalogFiltresContentShowCheckbox.addEventListener('click', () => {
							catalogFiltresContent.classList.toggle('height-slim');
						});

					}

					

				});

			// показать фильтр в мобильной версии
				let catalogContentSortMobile = document.querySelector('.js_catalog_content_sort_mobile');//кнопка сортировки
				let catalogFiltres = document.querySelector('.catalog-filtres');//блок с сортировкой
				let catalogFiltresMobileTitleClose = document.querySelector('.js_catalog_filtres_mobile_title_close');//закрыть фильтр

				if(catalogContentSortMobile) {
					catalogContentSortMobile.addEventListener('click', () => {
						catalogFiltres.classList.add('active');
						bodyFixPosition();
					});
				}
				
				if(catalogFiltresMobileTitleClose) {
					catalogFiltresMobileTitleClose.addEventListener('click', () => {
						catalogFiltres.classList.remove('active');
						bodyUnfixPosition();
					});
				}

			// при клике на СОРТИРОВКУ в мобильной версии
				let catalogContentSortItemMobile = document.querySelector('.js_catalog_content_sort_item_mobile');//кнопка сортировка
				let catalogContentSortItemMobileText = document.querySelector('.js_catalog_content_sort_item_mobile span ');//кнопка сортировка
				let catalogContentSortItemMobileItem = document.querySelectorAll('.js_catalog_content_sort_item_mobile li');//пункт попапа

				//открыть/закрыть попап

					if(catalogContentSortItemMobile) {
						catalogContentSortItemMobile.addEventListener('click', () => {
							catalogContentSortItemMobile.classList.toggle('active');
						});
					}
					
				
				//при клике на пункты popup
					catalogContentSortItemMobileItem.forEach(elem => {
						elem.addEventListener('click', () => {

							let contentTitle = catalogContentSortItemMobileText.textContent;//текущий текст в заголовке попапа

							if(elem.textContent.length > 12) {
								catalogContentSortItemMobileText.textContent = (elem.textContent.substr(0, 12) + '.');
								elem.textContent = contentTitle;

							} else {
								catalogContentSortItemMobileText.textContent = elem.textContent;
								elem.textContent = contentTitle;
							}
							
							
						});
					});






			// range Slider
				// <div id="slider"></div>
				let rangeSlider = document.getElementById('range-slider');

				//Виталий попросил закомментировать 25/05/2021
				/*
				if(rangeSlider) {
					noUiSlider.create(rangeSlider, {
						start: [10, 38500],
						connect: true,
						step: 10,
						range: {
							'min': [0],
							'max': [38500]
						}
					});

					const input0 = document.getElementById('input-price-min');
					const input1 = document.getElementById('input-price-max');
					const inputs = [input0, input1];

					rangeSlider.noUiSlider.on('update', (values, handle) => {
						inputs[handle].value = Math.round(values[handle]);
					});

					const setRangeSlider = (i, value) => {
						let arr = [null, null];
						arr[i] = value;
						rangeSlider.noUiSlider.set(arr);
					};

					inputs.forEach((elem, index) => {
						elem.addEventListener('change', (e) => {
							setRangeSlider(index, e.currentTarget.value);
						});
					});
				}

				*/
					
		}

	//КАРТОЧКА ПРОДУКТА маленькая
		if(document.querySelector('.card-product')) {
			let cardProduct = document.querySelectorAll('.card-product');//карточка продукта

			cardProduct.forEach(elem => {
				
				let cardProductFavorites = elem.querySelector('.card-product__favorites');//кнопка избранное

				cardProductFavorites.addEventListener('click', () => {
					cardProductFavorites.classList.toggle('active');
				});
			});
		}

	//страница КАРТОЧКА ТОВАРА
		if(document.querySelector('.product')) {
			//инициализация слайдера с товаром
				productSliderThumbs = new Swiper(".product-slider__thumbs", {
					spaceBetween: 10,
					// slidesPerView: 8,
					freeMode: true,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,

					breakpoints: {
						// when window width is >= 320px
						320: {
						  slidesPerView: 'auto',
						},
						// when window width is >= 480px
						1200: {
						  slidesPerView: 8,
						}
					}
				});

				productSlider = new Swiper(".product-slider__main", {
					spaceBetween: 10,
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					},
					thumbs: {
						swiper: productSliderThumbs,
					},
				});

			//открыть POPUP ПРОСМОТР ФОТО
				let openPopupViewerPhoto = document.querySelectorAll('.js_open_popup_viewer_photo');//открыть просмотр фото
				let popupViewer = document.querySelector('.js_popup_viewer');//popup просмотр фото

				let productSliderMainSlide = document.querySelectorAll('.product-slider__main .swiper-slide');//слайдер фотки
				let productSliderThumbsSlide = document.querySelectorAll('.product-slider__thumbs .swiper-slide');//слайдер кнопки

				openPopupViewerPhoto.forEach(elem => {

					elem.addEventListener('click', () => {				
						popupViewer.classList.add('active');
						popupViewrSliderInit();
						bodyFixPosition();			
					});
				});
				
				// открыть попап просмотра для мобильной версии
				if(window.innerWidth < 1200) {

					productSliderThumbsSlide.forEach(elem => {
						elem.addEventListener('click', () => {
							popupViewer.classList.add('active');
							popupViewrSliderInit();
							bodyFixPosition();
						});
					});
	
					productSliderMainSlide.forEach(elem => {
						elem.addEventListener('click', () => {
							popupViewer.classList.add('active');
							popupViewrSliderInit();
							bodyFixPosition();
						});
					});
	
				}
				

			

			//при клике на кнопку В КОРЗИНУ
				let productPriceButtonBusket = document.querySelector('.js_product_price_button_busket');

				productPriceButtonBusket.addEventListener('click', () => {
					productPriceButtonBusket.classList.toggle('active');
				});

			//при клике на написать отзыв показывает форму для заполнения отзыва
				let productReviewHeader = document.querySelector('.js_product_review_header');//блок с отзывом
				let productReviewHeaderAddReview = document.querySelector('.js_product_review_header_add_review');//кнопка ОСТАВИТЬ ОТЗЫВ
				let productReviewAddReviewCancel = document.querySelector('.js_product_review_add_review_cancel');//кнолпка ОТМЕНИТЬ ОТЗЫВ

				// показать форму отправки отзыва
				productReviewHeaderAddReview.addEventListener('click', () => {
					productReviewHeader.classList.add('add-review');
				});

				// закрыть форму отправки отзыва
				productReviewAddReviewCancel.addEventListener('click', () => {
					event.preventDefault();
					productReviewHeader.classList.remove('add-review');
				});

			//при написании отзыва отмечает рейтинг данного товара
				let productReviewAddReviewRaiting = document.querySelector('.js_product_review_add_review_raiting');//блок ваша оценка товара
				let productReviewRaitingStar = productReviewAddReviewRaiting.querySelectorAll('.js_product_review_raiting_star');//input звездочки
				
				productReviewRaitingStar.forEach((elem, index) => {
					elem.addEventListener('click', () => {
						productReviewRaitingStar.forEach(elem => {
							elem.classList.remove('active');
						});
						elem.classList.add('active');

						for(let i = 0; i < index; i++) {
							productReviewRaitingStar[i].classList.add('active');
						}
					});
				});

			//проверка валидации формы
				let productReviewAddReviewForm = document.querySelector('.js_product_review_add_review_form');//форма отправки отзыва
				let productReviewAddReviewInput = productReviewAddReviewForm.querySelectorAll('.js_product_review_add_review_input');//input'ы в форме
				let productReviewAddReviewSend = productReviewAddReviewForm.querySelector('.js_product_review_add_review_send');//кнопка отправить отзыв
				
				// проверка при заполнении, но еще не было проверки на валидность
					productReviewAddReviewInput.forEach(elem => {
						elem.addEventListener('change', () => {
							// если поле заполнено
							if(elem.value.length > 0) {
								elem.classList.add('filled');
							} else {
								elem.classList.remove('filled');
							}
						});
					});

				//проверка валидации при клике на отпправить отзыв
					productReviewAddReviewForm.addEventListener('submit', (e) => {
						e.preventDefault();
						console.log(productReviewAddReviewForm.validate);					
					});

		}

	//страница КОРЗИНА
		if(document.querySelector('.basket')) {

			// функционал для товара в корзине
			let basketListItem = document.querySelectorAll('.js_basket_list_item');//позиция товара

			basketListItem.forEach(elem => {

				let basketListItemChecked = elem.querySelector('.js_basket_list_item_checked');//чекбокс
				let basketListItemQuantityMinus = elem.querySelector('.js_basket_list_item_quantity_minus')//кнопка -
				let basketListItemQuantityPlus = elem.querySelector('.js_basket_list_item_quantity_plus')//кнопка +
				let basketListItemQuantityInput = elem.querySelector('.js_basket_list_item_quantity_input')//поле ввода количества товара
				let basketListItemControlDel = elem.querySelector('.js_basket_list_item_control_del');//кнопка корзина, удалить товар
				let basketListItemLayerDel = elem.querySelector('.js_basket_list_item_layer_del');//кнопка вернуть в корзину
				
				// изменяет количество товара
				basketListItemQuantityPlus.addEventListener('click', () => {
					basketListItemQuantityInput.value = Number(basketListItemQuantityInput.value) + 1;
/*
					var evt = document.createElement("HTMLEvents");
					evt.initEvent("change", true, true);

					basketListItemQuantityInput.dispatchEvent(evt);
*/
					$('.js_basket_list_item_quantity_input').trigger('change');

				});
				basketListItemQuantityMinus.addEventListener('click', () => {
					basketListItemQuantityInput.value = Number(basketListItemQuantityInput.value) - 1;
					if(basketListItemQuantityInput.value < 1) {
						elem.classList.add('delete');
						basketListItemQuantityInput.value = "1";
					}
/*
					var evt = document.createElement("HTMLEvents");
					evt.initEvent("change", true, true);

					basketListItemQuantityInput.dispatchEvent(evt);
*/
					$('.js_basket_list_item_quantity_input').trigger('change');


				});

				//удаляет товар
				basketListItemControlDel.addEventListener('click', () => {
					elem.classList.add('delete');
					basketListItemChecked.checked = false;

				});

				//вернуть товар в корзину
				basketListItemLayerDel.addEventListener('click', () => {
					elem.classList.remove('delete');
				});

			});

			// отметка чекьоксов для товаров в корзине
			let basketList = document.querySelector('.js_basket_list');//блок с товарами
			if(basketList)
			{
				let basketListCheckAll = basketList.querySelector('.js_basket_list_check_all');//чекбокс ОТМЕТИТЬ ВСЕ
				let basketListItemChecked = basketList.querySelectorAll('.js_basket_list_item_checked');//чекбоксы каждого товара
				
				// при клике на отметить все
				basketListCheckAll.addEventListener('change', () => {
					if(basketListCheckAll.checked == true) {
						basketListItemChecked.forEach(elem => {
							elem.checked = true;
						});
					} else {
						basketListItemChecked.forEach(elem => {
							elem.checked = false;
						});
					}
				});

				// при клике на чекбокс проверяет, если все отмечены, то отмечается Отметить все
				basketListItemChecked.forEach(elem => {
					let checkedInput = 0;

					elem.addEventListener('change', () => {					
						basketListItemChecked.forEach(elem => {
							if(elem.checked == true) {
								checkedInput = checkedInput + 1;
							}
						});

						if(checkedInput == basketListItemChecked.length) {
							basketListCheckAll.checked = true;
						} else {
							basketListCheckAll.checked = false;
						}
						
					});

				});
			}

			//ввод данных бонусная карточка
				let basketDescrBonusInput = document.querySelector('.js_basket_descr_bonus_input');//поле ввода номера карты
				let basketDescrBonusReset = document.querySelector('.js_basket_descr_bonus_reset');//кнопка обнулить текст

				// при вводе показывет крестик
				if(basketDescrBonusInput)
				{
					basketDescrBonusInput.addEventListener('input', () => {
						if(basketDescrBonusInput.value.length > 0) {
							basketDescrBonusReset.classList.add('active');
						} else {
							basketDescrBonusReset.classList.remove('active');
						}
						
					});

					basketDescrBonusInput.addEventListener("input", maskNumberCard, false);
					// basketDescrBonusInput.addEventListener("focus", maskNumberCard, false);
					// basketDescrBonusInput.addEventListener("blur", maskNumberCard, false);
					
				}

			// обнулить поле с номером карты
				if(basketDescrBonusReset)
					basketDescrBonusReset.addEventListener('click', () => {
						basketDescrBonusInput.value = '';
						basketDescrBonusReset.classList.remove('active');
					});

			//при нажатии на enter в input промокод
				let basketDescrCode = document.querySelector('.js_basket_descr_code');//блок с формой для промокода
				let basketPromoCode = document.querySelector('.js_basket_promo_code');//форма промокода
				let basketPromoCodeInput = document.querySelector('.js_basket_promo_code_input');//input промокод

				// для формы отключил обновление страницы
				/*
				if(basketPromoCode)
				basketPromoCode.addEventListener('submit', (e) => {
					e.preventDefault();
					if(basketPromoCodeInput.value.length > 1) {
						basketDescrCode.classList.add('submit');
						basketPromoCodeInput.value = '';
					}
								});
			*/





		}

	//страница ОФОРМЛЕНИЕ ЗАКАЗА
		if(document.querySelector('.order')) {
			let header = document.querySelector('header');//хедер
			let menu = document.querySelector('.js_menu');//меню
			let footer = document.querySelector('.footer');//footer

			header.classList.add('event-none');
			menu.classList.add('event-none');

			if(window.innerWidth < 1200) {
				header.classList.add('hide-block');
				menu.classList.add('hide-block');
				footer.classList.add('hide-block');
			}

			window.addEventListener('resize', () => {
				if(window.innerWidth < 1200) {
					header.classList.add('hide-block');
					menu.classList.add('hide-block');
					footer.classList.add('hide-block');
				} else {
					header.classList.remove('hide-block');
					menu.classList.remove('hide-block');
					footer.classList.remove('hide-block');
				}
			});
		}

	//страница ОФОРМЛЕНИЕ ЗАКАЗА - ПОЛУЧЕНИЕ
		if(document.querySelector('.order-getting')) {

			// блок  с выбором города
			let orderContentGettingSelectInput = document.querySelector('.js_order_content_getting_select_input');//поле ввода города
			let orderContentGettingExample = document.querySelector('.js_order_content_getting_example');//блок с примерами городов
			let orderContentGettingExampleItem = orderContentGettingExample.querySelectorAll('.js_order_content_getting_example_item');//города в примере
			let orderContentGettingSelectReset = document.querySelector('.js_order_content_getting_select_reset');//кнопка Х очистить поле с городом

			// выбор городоа из примера
			orderContentGettingExampleItem.forEach(elem => {
				elem.addEventListener('click', () => {
					orderContentGettingSelectInput.value = elem.textContent;
				});
			});
			
			// очистить поле с городом
			orderContentGettingSelectReset.addEventListener('click', () => {
				orderContentGettingSelectInput.value = "";
			});
		}

	//страница ОФОРМЛЕНИЕ ЗАКАЗА - ПОЛУЧАТЕЛЬ
		if(document.querySelector('.order-recipient')) {
			let orderContentAuthorizationForm = document.querySelector('.js_order_content_authorization_form');//форма отправки данных

			let orderContentAuthorizationInput = orderContentAuthorizationForm.querySelectorAll('.js_order_content_authorization_input');//input'ы поля ввода данных
			let authorizationInputTel = document.getElementById('authorization-input-tel');

			// если есть какие-то символы в input, добавляется активный класс
			orderContentAuthorizationInput.forEach(elem => {
				elem.addEventListener('change', () => {

					if(elem.value.length > 0) {
						elem.classList.add('filled');
					} else {
						elem.classList.remove('filled');
					}
				
				});
				
			});

			// маска номера телефона
			authorizationInputTel.addEventListener("input", mask, false);
			authorizationInputTel.addEventListener("focus", mask, false);
			authorizationInputTel.addEventListener("blur", mask, false); 

		}	

	//страница ЛИЧНЫЙ КАБИНЕТ
		if(document.querySelector('.cabinet')) {

			// меняется активный раздел + ХК
				let cabinetSectionItem = document.querySelectorAll('.js_cabinet_section_item');//разделы страницы
				let breadcrumbsNamePage = document.querySelector('.js_breadcrumbs_name_page');//название страницы в ХК
				let cabinetContentBlock = document.querySelectorAll('.js_cabinet_content_block');//блоки с контентом
				let popupKidsMessage = document.querySelector('.js_popup_kids_message');//весь попап 

				//блок МОИ ДЕТИ
				let cabinetKids = document.querySelector('.js_cabinet_kids');//блок мои дети
				let cardKids = cabinetKids.querySelectorAll('.js_card_kids');//карточки с детьми

				//перекдючение табов
				cabinetSectionItem.forEach((elem, index) => {
					elem.addEventListener('click', () => {
						cabinetSectionItem.forEach(elem => {
							elem.classList.remove('active');
						});
						elem.classList.add('active');
						// Виталий попросил закоментить (25/05/2021)git
						// breadcrumbsNamePage.textContent = elem.textContent;
						cabinetContentBlock.forEach(elem => {
							elem.classList.remove('active');
						});
						cabinetContentBlock[index].classList.add('active');

						// при клике на раздел ДЕТИ
						if(index == 3) {
							//если в разделе ДЕТИ нет ни одной карточки ребенка, то появляется попап добавьте ребенка
							if(cardKids.length == 0) {
								popupKidsMessage.classList.add('active');
								bodyFixPosition();
							}
						}						
					});
				});

			//блок ЛИЧНЫЕ ДАННЫЕ
				let cabinetPersonalDataForm = document.querySelector('.js_cabinet_personal_data_form');//форма с input'ами
				let cabinetPersonalDataFormInput = cabinetPersonalDataForm.querySelectorAll('.js_cabinet_personal_data_form_input');//input
				

				// активные формы если есть текст
					cabinetPersonalDataFormInput.forEach(elem => {
						checkInput(elem);
					});

				// маска для номера телефона
					cabinetPersonalDataFormInput[1].addEventListener("input", mask, false);
					cabinetPersonalDataFormInput[1].addEventListener("focus", mask, false);
					cabinetPersonalDataFormInput[1].addEventListener("blur", mask, false); 

				// маска для ДР
					cabinetPersonalDataFormInput[3].addEventListener("input", maskDate, false);
					cabinetPersonalDataFormInput[3].addEventListener("focus", maskDate, false);
					cabinetPersonalDataFormInput[3].addEventListener("blur", maskDate, false); 

				// валидация формы

					let checkFieldValidity = function (evt) {
						var target = evt.target;
						var isValid = target.validity.valid;
				
						if (isValid === false) {
							target.classList.add('invalid');						
						} else {
							
							target.classList.remove('invalid');
							target.classList.add('valid');
						}
			
					};

					cabinetPersonalDataForm.addEventListener('invalid', checkFieldValidity, true);
					cabinetPersonalDataForm.addEventListener('input', checkFieldValidity, true);

					// при клике на "ОТПРАВИТЬ" 
					/*
					cabinetPersonalDataForm.addEventListener('submit', function (evt) {

						var curTarget = evt.currentTarget;				
						var isValid = curTarget.checkValidity();
						
						evt.preventDefault();					
						
						// если форма заполнена правильно то:
						if (isValid) {
							bodyUnfixPosition();
							cabinetPersonalDataFormInput.forEach(elem => {
								elem.value = "";
								elem.classList.remove('valid');
								elem.classList.remove('filled');

							});
						} 

					});
					*/


				// input новый пароль
					let cabinetPersonalMailingPasswordInput = document.querySelectorAll('.js_cabinet_personal_mailing_password_input');

					cabinetPersonalMailingPasswordInput.forEach(elem => {
						checkInput(elem);
					});
			
			//блок МОИ ЗАКАЗЫ
				let cabinetOrder = document.querySelector('.js_cabinet_order');//блок мои заказы
				let cabinetOrderFilter = cabinetOrder.querySelectorAll('.js_cabinet_order_filter li');//пункты табов статуса заказа
				let cabinetOrderListItem = cabinetOrder.querySelectorAll('.js_cabinet_order_list_item');//блоки со статусом заказа
				let cabinetOrderCancel = cabinetOrder.querySelectorAll('.js_cabinet_order_cancel');//кнопка отменить заказ
				let cabinetOrderListItemCancelButton = cabinetOrder.querySelectorAll('.js_cabinet_order_list_item_cancel_button');//кнопка вернуть заказ в обработку
				let cabinetOrderListButton = cabinetOrder.querySelector('.js_cabinet_order_list_button');//кнопка показать
				let cabinetOrderListNotstatus = cabinetOrder.querySelector('.js_cabinet_order_list_notstatus');//текст что с таким статусом не найдено
				
				// при клике на табы
					cabinetOrderFilter.forEach(elem => {
						elem.addEventListener('click', () => {
							cabinetOrderFilter.forEach(elem => {
								elem.classList.remove('active');
							});
							elem.classList.add('active');
							cabinetOrderListNotstatus.classList.remove('active');
							cabinetOrderListButton.classList.add('active');
							let elemStatus = elem.dataset.status;
							let quantity = 0;//количество заказов с данным статусом
							let elemAll = false;//если элемент с аттрибутом all

							// определяет статус заказов и их показывает
							cabinetOrderListItem.forEach(elem => {								
								elem.classList.remove('active');
								if( elemStatus == elem.dataset.status) {
									elem.classList.add('active');
									quantity = quantity + 1;

									// если нет заказов с таким статусом
									
								} else if(elemStatus == 'all') {
									cabinetOrderListItem.forEach(elem => {
										elem.classList.add('active');						elemAll = true;		
									});
								}

								
							});

							if(quantity == 0 && elemAll == false) {
								cabinetOrderListNotstatus.classList.add('active');
								cabinetOrderListButton.classList.remove('active');
							}
							
							

						});
					});

				//при клике на кнопку ОТМЕНИТЬ ЗАКАЗ
					cabinetOrderCancel.forEach(elem => {
						elem.addEventListener('click', () =>{
							elem.parentNode.classList.add('cancel');
						});
					});
				
				//при клике на кнопку Вернуть заказ в обработку		
					cabinetOrderListItemCancelButton.forEach(elem => {
						elem.addEventListener('click', () => {
							elem.parentNode.parentNode.classList.remove('cancel');
						});
					});

				


		}

	// МОИ ЗАКАЗЫ - ДЕТАЛИ ЗАКАЗА
		if(document.querySelector('.cabinet-order__detail')) {

			let header = document.querySelector('header');
			let menu = document.querySelector('.js_menu');
			let footer = document.querySelector('footer');
			let breadcrumbs = document.querySelector('.breadcrumbs');
			let cabinetSection = document.querySelector('.cabinet__section');
			let contentWrapperTitle = document.querySelector('.content-wrapper h1');

			if(window.innerWidth < 1200) {
				header.classList.add('hidden');
				menu.classList.add('hidden');
				footer.classList.add('hidden');
				breadcrumbs.classList.add('hidden');
				cabinetSection.classList.add('hidden');
				contentWrapperTitle.classList.add('hidden')
			}

		}

	//страница НОВОСТИ
		if(document.querySelector('.news')) {

			let newsTitle = document.querySelector('.js_news_title');//заголовок
			let newsTabs = document.querySelectorAll('.js_news_tabs li');//пункты табов
			let newsContentItem = document.querySelectorAll('.js_news_content_item');//блоки с контентом
  
			// делает активными табы переключения + меняется заголовок + показывает нужный блок
				newsTabs.forEach(elem => {
					elem.addEventListener('click', () => {
						newsTabs.forEach(elem => {
							elem.classList.remove('active');
						});

						newsContentItem.forEach(elem => {
							elem.classList.remove('active');
						});

						elem.classList.add('active');
						newsTitle.textContent = elem.textContent;
						let tabName = elem.dataset.name;
						
						// делает активнойконтентную часть
						newsContentItem.forEach(elem => {
							if(elem.dataset.name == tabName)
							elem.classList.add('active');
						});
					});
				});

			//блок БЛОГИ
				
				let newsBlogsFilterItem = document.querySelectorAll('.js_news_blogs_filter li');//пункты фильтра
				let newsBlogsItem = document.querySelectorAll('.js_news_blogs_wrap .news-item');//пункты блогов

				// при клике на пункты фильтра
					newsBlogsFilterItem.forEach(elem => {
						
						elem.addEventListener('click', () => {
							// убирает активный класс со всех пунктов
							newsBlogsFilterItem.forEach(elem => {
								elem.classList.remove('active');							
							});
							//показывает тот пункт на который кликнули
							elem.classList.add('active');

							let nameCategory = elem.dataset.category;//категория у активного пункта
							
							// если кликнули на пункт ВСЕ в фильтре
							if(nameCategory == "all") {
								newsBlogsItem.forEach(elem => {
									elem.classList.remove('hide');
								});

							} else {
								//если на другой пункт
								newsBlogsItem.forEach(elem => {
									elem.classList.add('hide');
									if(elem.dataset.category == nameCategory) {
										elem.classList.remove('hide');
									}
								});


							}


						});

					});

		}

	//СТРАНИЦА СО СПИСКОМ МОДАЛЬНЫХ ОКОН
		if(document.querySelector('.popup-list')) {

			let popupStatusOrder = document.querySelector('.js_popup_status_order');//popup СТАТУС ЗАКАЗА
			let linkPopupStatusOrder = document.querySelector('.js_link_popup_status_order');//строка открытия popup СТАТУС ЗАКАЗА
			

			// открыть popup СТАТУС ЗАКАЗА
				linkPopupStatusOrder.addEventListener('click', () => {
					popupStatusOrder.classList.add('active');
					bodyFixPosition();
				});

			let popupSearch = document.querySelector('.js_popup_search');//popup ПОИСК
			let linkPopupSearch = document.querySelector('.js_link_popup_search');//строка открытие popup ПОИСК

			// открть popup ПОИСК
				linkPopupSearch.addEventListener('click', () => {
					popupSearch.classList.add('active');
					bodyFixPosition();
				});

			//открыть POPUP ПРОСМОТР ФОТО
				let openPopupViewerPhoto = document.querySelector('.js_open_popup_viewer_photo');//открыть просмотр фото
				let popupViewer = document.querySelector('.js_popup_viewer');//popup просмотр фото

				openPopupViewerPhoto.addEventListener('click', () => {				
					popupViewer.classList.add('active');
					popupViewrSliderInit();				
					bodyFixPosition();
				});

			//открыть POPUP МОИ ДЕТИ - ИНФ. СООБЩЕНИЕ

				let openPopupKidsMessage = document.querySelector('.js_open_popup_kids_message');//
				let popupKidsMessage = document.querySelector('.js_popup_kids_message');//

				openPopupKidsMessage.addEventListener('click', () => {				
					popupKidsMessage.classList.add('active');
					popupViewrSliderInit();				
					bodyFixPosition();
				});


		}


	//POPUP МОДАЛЬНЫЕ ОКНА--------------------------------->

		//popup СТАТУС ЗАКАЗА
			if(document.querySelector('.js_popup_status_order')) {

				let popupStatusOrder = document.querySelector('.js_popup_status_order');//popup СТАТУС ЗАКАЗА
				let popupStatusOrderContent = document.querySelector('.js_popup_status_order_content');//контентная часть 
				let popupStatusOrderClose = document.querySelector('.js_popup_status_order_close');//кнопка Х закрытия popup
				let popupStatusOrderContentInput = document.querySelector('.js_popup_status_order_content_input');
				let popupStatusOrderContentSwitching = document.querySelector('.js_popup_status_order_content_switching');//кнопка переключения формы номер заказ/номер телефона

				// закрыть окно при клике на Х
					popupStatusOrderClose.addEventListener('click', () => {
						popupStatusOrder.classList.remove('active');
						bodyUnfixPosition();
					});

				//закрыть окно при клике на пространство вокруг окна
					popupStatusOrder.addEventListener('click', () => {
						popupStatusOrder.classList.remove('active');
						bodyUnfixPosition();
					});

				//запретить закрывать окно при клике на контентную часть
					popupStatusOrderContent.addEventListener('click', (e) => {
						e.stopPropagation();
					});

				//отследить input
					checkInput(popupStatusOrderContentInput)
					
				
				//переключение номер заказа/номер телефона
					popupStatusOrderContentSwitching.addEventListener('click', () => {

						if(popupStatusOrder.classList.contains('telephone')) {
							popupStatusOrder.classList.remove('telephone');
							popupStatusOrderContentSwitching.textContent = "По номеру телефона";
							popupStatusOrderContentInput.placeholder = 'Введите номер заказа';
						} else {
							popupStatusOrder.classList.add('telephone');
							popupStatusOrderContentSwitching.textContent = "По номеру заказа";
							popupStatusOrderContentInput.placeholder = 'Введите номер телефона';
						}

					});

			}

		//popup ПОИСК
			if(document.querySelector('.js_popup_search')) {

				let popupSearch = document.querySelector('.js_popup_search');//popup поиск
				let popupSearchForm = document.querySelector('.popup-search__form');//контентная часть
				let popupSearchClose = document.querySelector('.js_popup_search_close');//кнопка Х
				let popupSearchInput = document.querySelector('.js_popup_search_input');//input
				let popupSearchButton = document.querySelector('.js_popup_search_button');//кнопка ПОИСК


				//закрыть при клике на фон
				popupSearch.addEventListener('click', () => {
					popupSearch.classList.remove('active');
					popupSearchInput.value = '';
					popupSearchInput.placeholder = 'Я хочу купить...';
					bodyUnfixPosition();
				});

				popupSearchForm.addEventListener('click', (e) => {
					e.stopPropagation();
				});

				//закрыть при клике на Х
				popupSearchClose.addEventListener('click', (e) => {
					e.preventDefault();
					popupSearch.classList.remove('active');
					popupSearchInput.value = '';
					popupSearchInput.placeholder = 'Я хочу купить...';
					bodyUnfixPosition();
				});

/*
				//при клике на кнопку ПОИСК
				popupSearchButton.addEventListener('click', (e) => {
					e.preventDefault();
					if(popupSearchButton.value.length > 2) {
						// popupSearch.classList.remove('active');
						bodyUnfixPosition();
					}
				});

*/
			}
		
		//popup ПРОСМОТР ФОТО
			function popupViewrSliderInit() {

				//инициализация слайдера с товаром
				let popupViewerSliderThumbs = new Swiper(".popup-viewer__slider-thumbs", {
					spaceBetween: 10,
					slidesPerView: 10,
					freeMode: true,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
				});
				var popupViewerSlider = new Swiper(".popup-viewer__slider", {
					spaceBetween: 10,
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					},
					thumbs: {
						swiper: popupViewerSliderThumbs,
					},
				});

				let popupViewer = document.querySelector('.js_popup_viewer');//слайдер
				let popupViewerClose = document.querySelector('.js_popup_viewer_close');//кнопка закрыть слайдер 
				
				// закрыть слайдер
				popupViewerClose.addEventListener('click', () => {
					popupViewer.classList.remove('active');
					bodyUnfixPosition();
				});

			}

		//popup КУРЬЕРСКАЯ ДОСТАВКА
			if(document.querySelector('.js_popup_courier')) {

				let popupCourierOpen = document.querySelectorAll('.js_open_popup_courier');//открыть popup
				let popupCourier = document.querySelector('.js_popup_courier');//popup КУРЬЕРСКАЯ ДОСТАВКА
				let popupCourierContent = popupCourier.querySelector('.js_popup_courier_content');//контентная часть
				let popupCourierClose = popupCourier.querySelectorAll('.js_popup_courier_close');//кнопка закрыть попап Х
				let popupCourierForm = popupCourier.querySelector('.js_popup_courier_form');//форма с input
				let popupCourierFormLabel = popupCourier.querySelectorAll('.js_popup_courier_form_label');//label
				let popupCourierInputs = popupCourier.querySelectorAll('input');//inputs
				let popupCourierTextarea = popupCourier.querySelector('textarea');//textarea
				let popupCourierFormQuantitySymbol = popupCourier.querySelector('.js_popup_courier_form_quantity_symbol');
				let popupCourierFormButton = popupCourier.querySelector('.js_popup_courier_form_button');//кнопка продолжить оформление

				//открыть попап
					popupCourierOpen.forEach(elem => {
						elem.addEventListener('click', () => {
							popupCourier.classList.add('active');
							bodyFixPosition();
						});
					});
				
				//закрыть попап
					popupCourierClose.forEach(elem => {
						elem.addEventListener('click', () => {
							popupCourier.classList.remove('active');
							bodyUnfixPosition();
							popupCourierTextarea.classList.remove('invalid');
							popupCourierTextarea.classList.remove('valid');
							popupCourierTextarea.classList.remove('filled');
							popupCourierInputs.forEach(elem => {
								elem.value = "";
								elem.classList.remove('invalid');
								elem.classList.remove('valid');
								elem.classList.remove('filled');
							});
						});
					});

					popupCourierContent.addEventListener('click', (e) => {
						e.stopPropagation();
					});

				//при вводе текста Подъезд/Этаж/Квартира
					popupCourierFormLabel.forEach(elem => {
						let input = elem.querySelector('input');//input

						input.addEventListener('input', () => {
							if(input.value.length > 0) {
								elem.classList.add('signature');
							} else {
								elem.classList.remove('signature');
							}
						});
					});

				//количество знаков в textarea
					popupCourierTextarea.addEventListener('input', () => {
						popupCourierFormQuantitySymbol.textContent = popupCourierTextarea.value.length + " ";
					});

				//после снятия фокуса с полей input/textarea
					popupCourierInputs.forEach(elem => {
						elem.addEventListener('change', () => {
							if(elem.value.length > 0) {
								elem.classList.add('filled');
							} else {
								elem.classList.remove('filled');
							}
						});
					});

					popupCourierTextarea.addEventListener('change', () => {
						if(elem.value.length > 0) {
							elem.classList.add('filled');
						} else {
							elem.classList.remove('filled');
						}
					});

				// проверка валидации формы---------------------->

					let checkFieldValidity = function (evt) {
						var target = evt.target;
						var isValid = target.validity.valid;
				
						if (isValid === false) {
							target.classList.add('invalid');						
						} else {
							
							target.classList.remove('invalid');
							target.classList.add('valid');
						}
			
					};

					popupCourierFormButton.addEventListener('click', () => {
						popupCourierForm.addEventListener('invalid', checkFieldValidity, true);
						popupCourierForm.addEventListener('input', checkFieldValidity, true);
					});

				// если в фокусе поле улица показать список
				
					let popupCourierWrap = popupCourier.querySelectorAll('.js_popup_courier_form_wrap');//input's
					let popupListPrompt = popupCourier.querySelectorAll('.js_popup_list_prompt');//подсказки с городами

					popupCourierWrap.forEach(elem => {						

						let popupCourierInput = elem.querySelector('input');
						let popupCourierPopupPrompt = elem.querySelector('.js_popup_list_prompt');
						let popupCourierPopupPromptItem = elem.querySelectorAll('.js_popup_list_prompt_item');// строчка в списке городов

						popupCourierInput.addEventListener('focus', (e) => {
							e.stopPropagation();
							popupListPrompt.forEach(elem => {
								elem.classList.remove('active');
							});
							popupCourierPopupPrompt.classList.add('active');
						});

						popupCourierPopupPromptItem.forEach(element => {
							element.addEventListener('mousedown', (e) => {
								e.stopPropagation();
								console.log(element.textContent);
								popupCourierInput.focus();
								popupCourierInput.value = element.textContent;
								popupCourierPopupPrompt.classList.remove('active');
							});
						});

						popupCourierInput.addEventListener('blur', () => {
							popupCourierPopupPrompt.classList.remove('active');
						});

					});



				// при клике на "ОТПРАВИТЬ" проверяется валидация формы------------
					popupCourierForm.addEventListener('submit', function (evt) {

						var curTarget = evt.currentTarget;				
						var isValid = curTarget.checkValidity();
						
						evt.preventDefault();					
						
						// если форма заполнена правильно то:
						if (isValid) {
							popupCourier.classList.remove('active');
							bodyUnfixPosition();
							popupCourierTextarea.value = "";
							popupCourierInputs.forEach(elem => {
								elem.value = "";
								elem.classList.remove('valid');
								elem.classList.remove('filled');

							});
						} 

					});
			}

		//popup СПИСОК МАГАЗИНОВ - ЗАБРАТЬ В МАГАЗИНЕ
			if(document.querySelector('.popup-address-shop')) {
				
				let openPopupAddressShop = document.querySelectorAll('.js_open_popup_address_shop');//класс для открытия попап
				let popupAddressShop = document.querySelector('.js_popup_address_shop');//popup забрать в магазине - список магазинов
				let popupAddressShopContent = popupAddressShop.querySelector('.js_popup_address_shop_content');//контентная часть
				let popupAddressShopClose = popupAddressShop.querySelectorAll('.js_popup_address_shop_close');//кнопка закрыть Х
				let popupAddressShopListSearchInput = popupAddressShop.querySelector('.js_popup_address_shop_list_search_input');//input
				let popupAddressShopListSearchReset = popupAddressShop.querySelector('.js_popup_address_shop_list_search_reset');//сбросить текст в input X
				let popupAddressShopMapButton = popupAddressShop.querySelector('.js_popup_address_shop_map_button');//кнопка переключения карты
				let popupAddressShopWrap = popupAddressShop.querySelector('.popup-address-shop__wrap');//обертка

				openClosePopup(openPopupAddressShop, popupAddressShop, popupAddressShopClose, popupAddressShopContent);

				//стили для input с текстом 
					popupAddressShopListSearchInput.addEventListener('change', () => {
						
						if(popupAddressShopListSearchInput.value.length > 0) {
							popupAddressShopListSearchInput.classList.add('filled');
						} else {
							popupAddressShopListSearchInput.classList.remove('filled');
						}
					});

				// очистить инпут
					popupAddressShopListSearchReset.addEventListener('click', () => {
						popupAddressShopListSearchInput.value = "";
						popupAddressShopListSearchInput.classList.remove('filled');
					});

				// переключение карты для мобильных
					popupAddressShopMapButton.addEventListener('click', () => {
						if(popupAddressShopWrap.classList.contains('full')) {
							popupAddressShopWrap.classList.remove('full');
							popupAddressShopMapButton.textContent = 'На большую карту';
						} else {
							popupAddressShopWrap.classList.add('full');
							popupAddressShopMapButton.textContent = 'Магазины списком';
						}
					});
					


				// инициализация яндекс.карты

					// яндекс карта сделал к у Виталия
					ymaps.ready(function () {
						myMap = new ymaps.Map('map', {
								center: [55.753665, 37.619856],
								zoom: 11
							}, {
								searchControlProvider: 'yandex#search'
							});
					
							var pm = {};
							$('.get-stores-item').each(function(i){
								
								var c = $(this).attr('data-c').split('/');
								
								pm[i] = new ymaps.Placemark([c[0], c[1]], {
									
									balloonContent:$(this).attr('data-name'),
								}, {
									preset: 'islands#governmentCircleIcon',
									iconColor: '#3b5998'
								});
								myMap.geoObjects.add(pm[i]);
								if(!i)
									myMap.setCenter([c[0], c[1]]);
							});

						myMap2 = new ymaps.Map('map-two', {
								center: [55.862684, 37.435005],
								zoom: 15
							}, {
								searchControlProvider: 'yandex#search'
							});

					});

				
					/*
					ymaps.ready(function () {
						var myMap = new ymaps.Map('map', {
								center: [55.753665, 37.619856],
								zoom: 11
							}, {
								searchControlProvider: 'yandex#search'
							}),
					
							// Создаём макет содержимого.
							MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
								'<a href="https://html5book.ru/css3-flexbox/" style="bacground: red; color: #FFFFFF;font-weight: bold;">$[properties.iconContent]</a>'
							),
					
							myPlacemarkWithContent1 = new ymaps.Placemark([55.661574, 37.573856], {
								
								iconContent: '10'
							}, {
								// Опции.
								// Необходимо указать данный тип макета.
								iconLayout: 'default#imageWithContent',
								// Своё изображение иконки метки.
								iconImageHref: 'img/logo-for-maps.svg',
								// Размеры метки.
								iconImageSize: [49, 49],
								// Смещение левого верхнего угла иконки относительно
								// её "ножки" (точки привязки).
								iconImageOffset: [-24, -24],
								// Смещение слоя с содержимым относительно слоя с картинкой.
								iconContentOffset: [0, 0],
								// Макет содержимого.
								iconContentLayout: MyIconContentLayout
							}),

							myPlacemarkWithContent2 = new ymaps.Placemark([55.834384, 37.573870], {
								
								iconContent: '10'
							}, {
								// Опции.
								// Необходимо указать данный тип макета.
								iconLayout: 'default#imageWithContent',
								// Своё изображение иконки метки.
								iconImageHref: 'img/logo-for-maps.svg',
								// Размеры метки.
								iconImageSize: [49, 49],
								// Смещение левого верхнего угла иконки относительно
								// её "ножки" (точки привязки).
								iconImageOffset: [-24, -24],
								// Смещение слоя с содержимым относительно слоя с картинкой.
								iconContentOffset: [0, 0],
								// Макет содержимого.
								iconContentLayout: MyIconContentLayout
							}),

							myPlacemarkWithContent3 = new ymaps.Placemark([55.613556, 37.743798], {
								
								iconContent: '10'
							}, {
								// Опции.
								// Необходимо указать данный тип макета.
								iconLayout: 'default#imageWithContent',
								// Своё изображение иконки метки.
								iconImageHref: 'img/logo-for-maps.svg',
								// Размеры метки.
								iconImageSize: [49, 49],
								// Смещение левого верхнего угла иконки относительно
								// её "ножки" (точки привязки).
								iconImageOffset: [-24, -24],
								// Смещение слоя с содержимым относительно слоя с картинкой.
								iconContentOffset: [0, 0],
								// Макет содержимого.
								iconContentLayout: MyIconContentLayout
							}),
							
							myPlacemarkWithContent4 = new ymaps.Placemark([55.754375, 37.633587], {
								
								iconContent: '10'
							}, {
								// Опции.
								// Необходимо указать данный тип макета.
								iconLayout: 'default#imageWithContent',
								// Своё изображение иконки метки.
								iconImageHref: 'img/logo-for-maps.svg',
								// Размеры метки.
								iconImageSize: [49, 49],
								// Смещение левого верхнего угла иконки относительно
								// её "ножки" (точки привязки).
								iconImageOffset: [-24, -24],
								// Смещение слоя с содержимым относительно слоя с картинкой.
								iconContentOffset: [0, 0],
								// Макет содержимого.
								iconContentLayout: MyIconContentLayout
							});
					
						myMap.geoObjects
							.add(myPlacemarkWithContent1)
							.add(myPlacemarkWithContent2)
							.add(myPlacemarkWithContent3)
							.add(myPlacemarkWithContent4);
					});

					*/

				

			}

		//popup АДРЕС КОНКРЕТНОГО МАГАЗИНА - ЗАБРАТЬ В МАГАЗИНЕ
			
			if(document.querySelector('.popup-address-shop-item')) {

				let openPopupAddressShopItem = document.querySelectorAll('.js_open_popup_address_shop_item');//открыть попап конкретного адреса
				let popupAddressShopItem = document.querySelector('.js_popup_address_shop_item');//попап адрес конкретного магазина
				let popupAddressShopItemContent = popupAddressShopItem.querySelector('.js_popup_address_shop_item_content');//основной контент попапа
				let popupAddressShopItemClose = popupAddressShopItem.querySelectorAll('.js_popup_address_shop_item_close');//закрыть попап Х
				let popupAddressShopItemDescrBack = popupAddressShopItem.querySelector('.js_popup_address_shop_item_descr_back');//кнопка вернуться назад

				openClosePopup(openPopupAddressShopItem, popupAddressShopItem, popupAddressShopItemClose, popupAddressShopItemContent);

				// закрыть попап
					popupAddressShopItemDescrBack.addEventListener('click', () => {
						popupAddressShopItem.classList.remove('active');
					});
					/*
				// инициализация яндекс.карты
					ymaps.ready(function () {
						var myMap = new ymaps.Map('map-two', {
								center: [55.862684, 37.435005],
								zoom: 15
							}, {
								searchControlProvider: 'yandex#search'
							}),
					
							// Создаём макет содержимого.
							MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
								'<a href="https://html5book.ru/css3-flexbox/" style="bacground: red; color: #FFFFFF;font-weight: bold;">$[properties.iconContent]</a>'
							),
					
							myPlacemarkWithContent1 = new ymaps.Placemark([55.862684, 37.435005], {
								
								iconContent: '10'
							}, {
								// Опции.
								// Необходимо указать данный тип макета.
								iconLayout: 'default#imageWithContent',
								// Своё изображение иконки метки.
								iconImageHref: 'img/logo-for-maps.svg',
								// Размеры метки.
								iconImageSize: [49, 49],
								// Смещение левого верхнего угла иконки относительно
								// её "ножки" (точки привязки).
								iconImageOffset: [-24, -24],
								// Смещение слоя с содержимым относительно слоя с картинкой.
								iconContentOffset: [0, 0],
								// Макет содержимого.
								iconContentLayout: MyIconContentLayout
							});
					
						myMap.geoObjects
							.add(myPlacemarkWithContent1);
					});
					*/	
			}

		//popup ДОБАВИТЬ БОНУСКНУЮ КАРТУ
			if(document.querySelector('.js_popup_add_card')) {

				let openPopupAddCard = document.querySelectorAll('.js_open_popup_add_card');//класс для открытия popup
				let popupAddCard = document.querySelector('.js_popup_add_card');//popup добавить бонусную карту
				let popupAddCardContent = popupAddCard.querySelector('.js_popup_add_card_content');//контентная часть
				let popupAddCardClose = popupAddCard.querySelectorAll('.js_popup_add_card_close');//кнопка закрыть Х
				let popupAddCardFormInput = popupAddCard.querySelector('.js_popup_add_card_form_input');//input ввода карты
				let popupAddCardFormButtonAdd = popupAddCard.querySelector('.js_popup_add_card_form_button_add');//кнопка добавить карту
				let popupAddCardFormButtonDelete = popupAddCard.querySelector('.js_popup_add_card_form_button_delete');//кнопка удалить

				openClosePopup(openPopupAddCard, popupAddCard, popupAddCardClose, popupAddCardContent);
				checkInput(popupAddCardFormInput);

				
				// очистить форму
					popupAddCardFormButtonDelete.addEventListener('click', (e) => {
						e.preventDefault();
						popupAddCardFormInput.value = "";
						popupAddCardFormInput.classList.remove('filled');
					});

				//маска для номера карты
					popupAddCardFormInput.addEventListener("input", maskNumberCard, false);
					popupAddCardFormInput.addEventListener("focus", maskNumberCard, false);
					popupAddCardFormInput.addEventListener("blur", maskNumberCard, false); 

				
			}

		//popup МОИ ДЕТИ - ИНФ. СООБЩЕНИЕ
			if(document.querySelector('.js_popup_kids_message')) {	
				
				let popupKidsMessage = document.querySelector('.js_popup_kids_message');//весь попап
				let popupKidsMessageContent = popupKidsMessage.querySelector('.js_popup_kids_message_content');//основной контент
				let popupKidsMessageClose = popupKidsMessage.querySelector('.js_popup_kids_message_close');//кнопка закрыть Х
				let popupKidsMessageButton = popupKidsMessage.querySelector('.js_popup_kids_message_button');//кнопка ОК

				// закрытие попап
					popupKidsMessage.addEventListener('click', () => {
						popupKidsMessage.classList.remove('active');
						bodyUnfixPosition()
					});

					popupKidsMessageClose.addEventListener('click', () => {
						popupKidsMessage.classList.remove('active');
						bodyUnfixPosition()
					});

					popupKidsMessageContent.addEventListener('click', (e) => {
						e.stopPropagation();
					});

					popupKidsMessageButton.addEventListener('click', () => {
						popupKidsMessage.classList.remove('active');
						bodyUnfixPosition()
					});
			}

		//popup МОИ ДЕТИ - ДОБАВИТЬ/РЕДАКТИРОВАТЬ ДАННЫЕ РЕБЕНКА
			if(document.querySelector('.js_popup_add_kids')) {

				let openPopupAddKids = document.querySelectorAll('.js_open_popup_add_kids');//открыть popup добавить ребенка
				let popupAddKids = document.querySelector('.js_popup_add_kids');//popup добавить/редактировать данные ребенка
				let popupAddKidsContent = popupAddKids.querySelector('.js_popup_add_kids_content');//контентная часть
				let popupAddKidsClose = popupAddKids.querySelectorAll('.js_popup_add_kids_close');//закрыть попап Х

				let popupAddKidsForm = popupAddKids.querySelector('.js_popup_add_kids_form');//form
				let popupAddKidsFormInputName = popupAddKids.querySelector('.js_popup_add_kids_form_input_name');// input имя
				let popupAddKidsFormInputDate = popupAddKids.querySelector('.js_popup_add_kids_form_input_date');// input дата
				let popupAddKidsFormButtonSave = popupAddKids.querySelector('.js_popup_add_kids_form_button_save');//кнопка сохранить
				let popupAddKidsFormButtonDelete = popupAddKids.querySelector('.js_popup_add_kids_form_button_delete');//кнопка удалить

				openClosePopup(openPopupAddKids, popupAddKids, popupAddKidsClose, popupAddKidsContent);

				checkInput(popupAddKidsFormInputName);
				checkInput(popupAddKidsFormInputDate);
				popupAddKidsFormInputDate.addEventListener("input", maskDate, false);
				popupAddKidsFormInputDate.addEventListener("focus", maskDate, false);
				popupAddKidsFormInputDate.addEventListener("blur", maskDate, false); 

				// валидация формы

					function checkFieldValidity(evt) {
						var target = evt.target;
						var isValid = target.validity.valid;
				
						if (isValid === false) {
							target.classList.add('invalid');						
						} else {
							
							target.classList.remove('invalid');
							target.classList.add('valid');
						}
			
					};

					popupAddKidsForm.addEventListener('invalid', checkFieldValidity, true);
					popupAddKidsForm.addEventListener('input', checkFieldValidity, true);

				// при клике на "ОТПРАВИТЬ" 
					popupAddKidsForm.addEventListener('submit', function (evt) {

						var curTarget = evt.currentTarget;				
						var isValid = curTarget.checkValidity();
						
						evt.preventDefault();				
						
						// если форма заполнена правильно то:
						if (isValid) {
							bodyUnfixPosition();
							popupAddKids.classList.remove('active');
							popupAddKidsFormInputDate.value = "";
							popupAddKidsFormInputDate.classList.remove('valid');
							popupAddKidsFormInputDate.classList.remove('filled');
						} 

					});

				//при клике на кнопки
					
					popupAddKidsFormButtonSave.addEventListener('click', () => {
						popupAddKids.classList.remove('active');
					});

					popupAddKidsFormButtonDelete.addEventListener('click', () => {
						popupAddKids.classList.remove('active');
					});

			}

		//popup МОИ ДЕТИ - УДАЛИТЬ КАРТОЧКУ РЕБЕНКА
			if(document.querySelector('.js_popup_delete_kids')) {
				
				let openPopupDeleteKids = document.querySelectorAll('.js_open_popup_delete_kids');//класс для открытия попап
				let popupDeleteKids = document.querySelector('.js_popup_delete_kids');//popup удалить карточку ребенка
				let popupDeleteKidsContent = popupDeleteKids.querySelector('.js_popup_delete_kids_content');//контентная часть
				let popupDeleteKidsClose = popupDeleteKids.querySelectorAll('.js_popup_delete_kids_close');//закрыть попап Х

				let popupDeleteKidsButtonDel = popupDeleteKids.querySelector('.js_popup_delete_kids_button_del');//кнопка удалить
				let popupDeleteKidsButtonCancel = popupDeleteKids.querySelector('.js_popup_delete_kids_button_cancel');//кнопка отменить

				openClosePopup(openPopupDeleteKids, popupDeleteKids, popupDeleteKidsClose, popupDeleteKidsContent);

				//при клике на кнопки
					popupDeleteKidsButtonDel.addEventListener('click', () => {
						popupDeleteKids.classList.remove('active');
					});
					popupDeleteKidsButtonCancel.addEventListener('click', () => {
						popupDeleteKids.classList.remove('active');
					});



			}

		//popup АДРЕСА ДОСТАВКИ - ДОБАВИТЬ АДРЕС
			

		//popup АДРЕСА ДОСТАВКИ - УДАЛЕНИЕ АДРЕСА
			if(document.querySelector('.js_popup_delete_address')) {
					
				let openPopupDeleteAddress = document.querySelectorAll('.js_open_popup_delete_address');//класс для открытия попап
				let popupDeleteAddress = document.querySelector('.js_popup_delete_address');//popup удалить карточку ребенка
				let popupDeleteAddressContent = popupDeleteAddress.querySelector('.js_popup_delete_address_content');//контентная часть
				let popupDeleteAddressClose = popupDeleteAddress.querySelectorAll('.js_popup_delete_address_close');//закрыть попап Х

				let popupDeleteAddressButtonDel = popupDeleteAddress.querySelector('.js_popup_delete_address_button_del');//кнопка удалить
				let popupDeleteAddressButtonCancel = popupDeleteAddress.querySelector('.js_popup_delete_address_button_cancel');//кнопка отменить

				openClosePopup(openPopupDeleteAddress, popupDeleteAddress, popupDeleteAddressClose, popupDeleteAddressContent);

				//при клике на кнопки
					popupDeleteAddressButtonDel.addEventListener('click', () => {
						popupDeleteAddress.classList.remove('active');
					});
					popupDeleteAddressButtonCancel.addEventListener('click', () => {
						popupDeleteAddress.classList.remove('active');
					});



			}

		//popup ДОБАВИТЬ АДРЕС
			if(document.querySelector('.js_popup_add_address')) {

				let popupAddAddressOpen = document.querySelectorAll('.js_open_popup_add_address');//открыть popup
				let popupAddAddress = document.querySelector('.js_popup_add_address');//popup КУРЬЕРСКАЯ ДОСТАВКА
				let popupAddAddressContent = popupAddAddress.querySelector('.js_popup_add_address_content');//контентная часть
				let popupAddAddressClose = popupAddAddress.querySelector('.js_popup_add_address_close');//кнопка закрыть попап Х
				let popupAddAddressForm = popupAddAddress.querySelector('.js_popup_add_address_form');//форма с input
				let popupCourierFormLabel = popupAddAddress.querySelectorAll('.js_popup_courier_form_label');//label
				let popupAddAddressInputs = popupAddAddress.querySelectorAll('input');//inputs
				let popupAddAddressTextarea = popupAddAddress.querySelector('textarea');//textarea	
				let popupAddAddressFormQuantitySymbol = popupAddAddress.querySelector('.js_popup_add_address_form_quantity_symbol');
				let popupAddAddressFormButton = popupAddAddress.querySelector('.js_popup_add_address_form_button');//кнопка сохранить данные
				let popupAddAddressFormButtonDelete = popupAddAddress.querySelector('.js_popup_add_address_form_button_delete');//кнопка удалить

				
				//открыть попап
					popupAddAddressOpen.forEach(elem => {
						elem.addEventListener('click', () => {
							popupAddAddress.classList.add('active');
							bodyFixPosition();
				
						});
					});
				
				//закрыть попап
					popupAddAddress.addEventListener('click', () => {
						popupAddAddress.classList.remove('active');
						bodyUnfixPosition();
						popupAddAddressTextarea.classList.remove('invalid');
						popupAddAddressTextarea.classList.remove('valid');
						popupAddAddressTextarea.classList.remove('filled');
						popupAddAddressInputs.forEach(elem => {
							elem.value = "";
							elem.classList.remove('invalid');
							elem.classList.remove('valid');
							elem.classList.remove('filled');
						});
					});

					popupAddAddressClose.addEventListener('click', () => {
						popupAddAddress.classList.remove('active');
						bodyUnfixPosition();
						popupAddAddressTextarea.value = "";
						popupAddAddressTextarea.classList.remove('invalid');
						popupAddAddressTextarea.classList.remove('valid');
						popupAddAddressTextarea.classList.remove('filled');
						popupAddAddressInputs.forEach(elem => {
							elem.value = "";
							elem.classList.remove('invalid');
							elem.classList.remove('valid');
							elem.classList.remove('filled');
						});
					});

					popupAddAddressContent.addEventListener('click', (e) => {
						e.stopPropagation();
					});

				//при вводе текста Подъезд/Этаж/Квартира
					popupCourierFormLabel.forEach(elem => {
						let input = elem.querySelector('input');//input

						input.addEventListener('input', () => {
							if(input.value.length > 0) {
								elem.classList.add('signature');
							} else {
								elem.classList.remove('signature');
							}
						});
					});

				//количество знаков в textarea
					popupAddAddressTextarea.addEventListener('input', () => {
						popupAddAddressFormQuantitySymbol.textContent = popupAddAddressTextarea.value.length + " ";
					});

				//после снятия фокуса с полей input/textarea
					popupAddAddressInputs.forEach(elem => {
						elem.addEventListener('change', () => {
							if(elem.value.length > 0) {
								elem.classList.add('filled');
							} else {
								elem.classList.remove('filled');
							}
						});
					});

					popupAddAddressTextarea.addEventListener('change', () => {
						if(elem.value.length > 0) {
							elem.classList.add('filled');
						} else {
							elem.classList.remove('filled');
						}
					});

				// проверка валидации формы---------------------->

					let checkFieldValidity = function (evt) {
						var target = evt.target;
						var isValid = target.validity.valid;
				
						if (isValid === false) {
							target.classList.add('invalid');						
						} else {
							
							target.classList.remove('invalid');
							target.classList.add('valid');
						}
			
					};

					popupAddAddressFormButton.addEventListener('click', () => {
						popupAddAddressForm.addEventListener('invalid', checkFieldValidity, true);
						popupAddAddressForm.addEventListener('input', checkFieldValidity, true);
					});

					// если в фокусе поле улица показать список
					
				let popupCourierWrap = popupAddAddress.querySelectorAll('.js_popup_courier_form_wrap');//input's
				let popupListPrompt = popupAddAddress.querySelectorAll('.js_popup_list_prompt');//подсказки с городами

				popupCourierWrap.forEach(elem => {						

					let popupCourierInput = elem.querySelector('input');
					let popupCourierPopupPrompt = elem.querySelector('.js_popup_list_prompt');
					let popupCourierPopupPromptItem = elem.querySelectorAll('.js_popup_list_prompt li');// строчка в списке городов

					popupCourierInput.addEventListener('focus', (e) => {
						e.stopPropagation();
						popupListPrompt.forEach(elem => {
							elem.classList.remove('active');
						});
						popupCourierPopupPrompt.classList.add('active');
					});

					popupCourierPopupPromptItem.forEach(element => {
						element.addEventListener('mousedown', (e) => {
							e.stopPropagation();
							popupCourierInput.focus();
							popupCourierInput.value = element.textContent;
							popupCourierPopupPrompt.classList.remove('active');
						});
					});

					popupCourierInput.addEventListener('blur', () => {
						popupCourierPopupPrompt.classList.remove('active');
					});

				});


				// при клике на "ОТПРАВИТЬ" проверяется валидация формы------------
					popupAddAddressForm.addEventListener('submit', function (evt) {

						var curTarget = evt.currentTarget;				
						var isValid = curTarget.checkValidity();
						
						evt.preventDefault();					
						
						// если форма заполнена правильно то:
						if (isValid) {
							popupAddAddress.classList.remove('active');
							bodyUnfixPosition();
							popupAddAddressTextarea.value = "";
							popupAddAddressInputs.forEach(elem => {
								elem.value = "";
								elem.classList.remove('valid');
								elem.classList.remove('filled');
							});
						} 

					});

				// при клике на кнопки					

					popupAddAddressFormButtonDelete.addEventListener('click', (e) => {
						e.preventDefault();
						popupAddAddress.classList.remove('active');
						bodyUnfixPosition();
						popupAddAddressTextarea.value = "";
						popupAddAddressTextarea.classList.remove('invalid');
						popupAddAddressTextarea.classList.remove('valid');
						popupAddAddressTextarea.classList.remove('filled');
						popupAddAddressInputs.forEach(elem => {
							elem.value = "";
							elem.classList.remove('invalid');
							elem.classList.remove('valid');
							elem.classList.remove('filled');
						});
					});
				
			}

		//popup АВТОРИЗАЦИЯ - БАЗОВАЯ РАЗМЕТКА
			if(document.querySelector('.js_popup_autorization')) {
 
				let popupAutorization = document.querySelectorAll('.js_popup_autorization');//попап

				popupAutorization.forEach(elem => {

					let popupAutorizationContent = elem.querySelector('.js_popup_autorization_content');//контентная часть
					let popupAutorizationClose = elem.querySelectorAll('.js_popup_autorization_close');//кнопка закрыть Х

					elem.addEventListener('mousedown', () => {
						elem.classList.remove('active');
					});

					popupAutorizationContent.addEventListener('mousedown', (e) => {
						e.stopPropagation();
					});

					popupAutorizationClose.forEach(element => {
						element.addEventListener('mousedown', () => {
							elem.classList.remove('active');
						});
					});

					

				})

			}

		//popup АВТОРИЗАЦИЯ - ВХОД
			if(document.querySelector('.js_popup_autorization_enter')) {

				let openPopupAutorizationEnter = document.querySelectorAll('.js_open_popup_autorization_enter');//класс для открытия попап

				let popupAutorizationEnter = document.querySelector('.js_popup_autorization_enter');// попап
				let popupAutorizationEnterInputBlock = popupAutorizationEnter.querySelector('.popup-autorization__enter-input-block');//блок и input
				let popupAutorizationEnterInput = popupAutorizationEnter.querySelector('.js_popup_autorization_enter_input');// input
				let popupAutorizationEnterButton = popupAutorizationEnter.querySelector('.js_popup_autorization_enter_button');//button

				let popupAutorizationEnterPromptOpen = popupAutorizationEnter.querySelector('.popup-autorization__enter-prompt-open');//кнопка открыть подсказку
				let popupAutorizationEnterPrompt = popupAutorizationEnter.querySelector('.popup-autorization__enter-prompt');//подсказка
				

				//открыть окно авторизации
					popupAutorizationEnterPromptOpen.addEventListener('click', (e) => {
						e.stopPropagation();
						popupAutorizationEnterPrompt.classList.add('active');
					});

				//открытие попап
					openPopupAutorizationEnter.forEach(elem => {
						elem.addEventListener('click', () => {
							popupAutorizationEnter.classList.add('active');
						});
					});

				//если есть текст в input, то кнопка активна
					popupAutorizationEnterInput.addEventListener('input', () => {

						if(popupAutorizationEnterInput.value.length > 0) {
							popupAutorizationEnterButton.removeAttribute("disabled");
							popupAutorizationEnterInputBlock.classList.add('filled');
						} else {						
							popupAutorizationEnterInputBlock.classList.remove('filled');
							popupAutorizationEnterButton.setAttribute("disabled", "true");
						}
						
					});

					popupAutorizationEnterInput.addEventListener('focus', () => {
						popupAutorizationEnterInputBlock.classList.add('focus');
					});
					popupAutorizationEnterInput.addEventListener('blur', () => {
						popupAutorizationEnterInputBlock.classList.remove('focus');
					});

			}

		//popup АВТОРИЗАЦИЯ - ПОЛУЧИТЬ КОД
			if(document.querySelector('.js_popup_autoriz_receive_code')) {

				let openPopupAutorizReceiveCode = document.querySelectorAll('.js_open_popup_autoriz_receive_code');//класс для открытия попап
				let popupAutorizReceiveCode = document.querySelector('.js_popup_autoriz_receive_code');//попап
				let inputItem = popupAutorizReceiveCode.querySelectorAll('.js_popup_autoriz_receive_code_inputs > input');
				let popupAutorizReceiveCodeTimerTime = popupAutorizReceiveCode.querySelector('.js_popup_autoriz_receive_code_timer > span');//время назад
				let popupAutorizReceiveCodeTimerLink  = popupAutorizReceiveCode.querySelector('.js_popup_autoriz_receive_code_timer > a');//ссылка


				//открытие попап
					openPopupAutorizReceiveCode.forEach(elem => {
						elem.addEventListener('click', () => {
							popupAutorizReceiveCode.classList.add('active');

							//функция отсчета времени

							function startTimer(duration, display) {
								var timer = duration, minutes, seconds;
								setInterval(function () {
									minutes = parseInt(timer / 60, 10);
									seconds = parseInt(timer % 60, 10);
							
									minutes = minutes < 10 ? "0" + minutes : minutes;
									seconds = seconds < 10 ? "0" + seconds : seconds;
							
									display.textContent = minutes + ":" + seconds;
							
									if (--timer < 0) {
										// timer = duration;
										popupAutorizReceiveCodeTimerTime.classList.remove('active');
										popupAutorizReceiveCodeTimerLink.classList.add('active');
									}
								}, 1000);
							}
							var fiveMinutes = 60;
							startTimer(fiveMinutes, popupAutorizReceiveCodeTimerTime);
								});
							});

				//input'ы ввода кода смс
					inputItem.forEach((elem, index) => {
						elem.addEventListener('change', () => {
							if(elem.value.length > 0) {
								elem.classList.add('filled');
							} else {
								elem.classList.remove('filled');
							}
						}); 

						elem.addEventListener('input', () => {

							if(elem.value.length > 0) {
								inputItem[index + 1].focus() = "true";
							} else {
								inputItem[index - 1].focus() = "true";
							}
						});

					});

				
					

			}

		//popup АВТОРИЗАЦИЯ - НЕКОРРЕКТНЫЙ КОД
			if(document.querySelector('.js_popup_autoriz_receive_code.incorrect')) {
				let openPopupAutorizIncorrectCode = document.querySelectorAll('.js_open_popup_autoriz_incorrect_code');//открыть попап
				let popupAutorizReceiveCodeIncorrect = document.querySelector('.js_popup_autoriz_receive_code.incorrect');//

				openPopupAutorizIncorrectCode.forEach(elem => {
					elem.addEventListener('click', () => {
						popupAutorizReceiveCodeIncorrect.classList.add('active');
					});
				});
			}

		//popup АВТОРИЗАЦИЯ - ВОЙТИ С ПАРОЛЕМ
			if(document.querySelector('.js_popup_autoriz_login_password')) {

				let openPopupAutorizLoginPassword = document.querySelectorAll('.js_open_popup_autoriz_login_password');//класс для открытия попап
				let popupAutorizLoginPassword = document.querySelector('.js_popup_autoriz_login_password');//попап
				let popupAutorizLoginPasswordInput = popupAutorizLoginPassword.querySelectorAll('.js_popup_autoriz_login_password_form > input');//inputs
				let popupAutorizLoginPasswordButton = popupAutorizLoginPassword.querySelector('.js_popup_autoriz_login_password_form > button');//button

				// открыть попап
					openPopupAutorizLoginPassword.forEach(elem => {
						elem.addEventListener('click', () => {
							popupAutorizLoginPassword.classList.add('active');
						});
					});

				// проверка input
					popupAutorizLoginPasswordInput.forEach(elem => {
						elem.addEventListener('change', () => {
							if(elem.value.length > 0) {
								elem.classList.add('filled');
							} else {
								elem.classList.remove('filled');
							}
						});

						elem.addEventListener('input', () => {
							if(popupAutorizLoginPasswordInput[0].value.length > 3 && popupAutorizLoginPasswordInput[1].value.length > 3) {
								popupAutorizLoginPasswordButton.removeAttribute("disabled");
							} else {
								popupAutorizLoginPasswordButton.setAttribute("disabled", "true");
							}
						});
					});	
			}

		//popup АВТОРИЗАЦИЯ - ЗАБЫЛИ ПАРОЛЬ
			if(document.querySelector('.js_popup_autoriz_forgot')) {
				
				let openPopupAutorizForgot = document.querySelectorAll('.js_open_popup_autoriz_forgot');//класс для открытия попап
				let popupAutorizForgot = document.querySelector('.js_popup_autoriz_forgot');//попап
				let popupAutorizForgotForm = popupAutorizForgot.querySelector('.js_popup_autoriz_forgot_form');//форма
				let popupAutorizForgotFormInput = popupAutorizForgot.querySelector('.js_popup_autoriz_forgot_form > input');//input
				let popupAutorizForgotFormButton = popupAutorizForgot.querySelector('.js_popup_autoriz_forgot_form_button');//button

				//открыть попа
					openPopupAutorizForgot.forEach(elem => {
						elem.addEventListener('click', () => {
							popupAutorizForgot.classList.add('active');
						});
					});
				
				//проверка на наличие текста
					// checkInput(popupAutorizForgotFormInput);
					
					popupAutorizForgotFormInput.addEventListener('input', () => {
						if(popupAutorizForgotFormInput.value.length > 0) {
							popupAutorizForgotFormButton.removeAttribute("disabled");
						} else {						
						
							popupAutorizForgotFormButton.setAttribute("disabled", "true");
						}
					});

					// проверка формы на валидность
						function checkFieldValidity(evt) {
							var target = evt.target;
							var isValid = target.validity.valid;
					
							if (isValid === false) {
								target.classList.add('invalid');						
							} else {
								
								target.classList.remove('invalid');
								target.classList.add('valid');
							}
				
						};

						popupAutorizForgotFormButton.addEventListener('click', () => {
							popupAutorizForgotForm.addEventListener('invalid', checkFieldValidity, true);
							popupAutorizForgotForm.addEventListener('input', checkFieldValidity, true);
						});

					// при клике на "ОТПРАВИТЬ" 
						popupAutorizForgotForm.addEventListener('submit', function (evt) {

							var curTarget = evt.currentTarget;				
							var isValid = curTarget.checkValidity();
							
							evt.preventDefault();		

							// если форма заполнена правильно то:
							if (isValid) {
								bodyUnfixPosition();
								// popupAutorizForgot.classList.remove('active');
								popupAutorizForgotFormInput.value = "";
								popupAutorizForgotFormInput.classList.remove('valid');
								popupAutorizForgotFormInput.classList.remove('filled');
								popupAutorizForgotFormButton.setAttribute("disabled", "true");
							} 

						});
					
				
			}

		//popup АВТОРИЗАЦИЯ - КОД ОТПРАВЛЕН
			if(document.querySelector('.popup-autoriz-code-sent')) {

				let openPopupAutorizCodeSent = document.querySelectorAll('.js_open_popup_autoriz_code_sent');//класс для открытия попап
				let popupAutorizCodeSent = document.querySelector('.popup-autoriz-code-sent');//popup
				let popupAutorizCodeSentButton = popupAutorizCodeSent.querySelector('.popup-autoriz-code-sent__button');//кнопка ок

				// открыть попап
					openPopupAutorizCodeSent.forEach(elem => {
						elem.addEventListener('click', () => {
							popupAutorizCodeSent.classList.add('active');
						});
					});

				//при клике на кнопку закрыть попап
					popupAutorizCodeSentButton.addEventListener('click', () => {
						popupAutorizCodeSent.classList.remove('active');
					});
			}

		//popup АВТОРИЗАЦИЯ - ОФОРМИТЬ КАК ГОСТЬ #1
			if(document.querySelector('.js_popup_autoriz_order_guest_one')) {

				let openPopupAutorizOrderGuestOne = document.querySelectorAll('.js_open_popup_autoriz_order_guest_one');//класс для открытия попап
				let popupAutorizOrderGuestOne = document.querySelector('.js_popup_autoriz_order_guest_one');//попап
 
				let popupAutorizOrderGuestOneInput = popupAutorizOrderGuestOne.querySelector('.js_popup_autoriz_order_guest_one_form > input');//input
				let popupAutorizOrderGuestOneButton = popupAutorizOrderGuestOne.querySelector('.js_popup_autoriz_order_guest_one_form > button');//button

				//открытие попап
					openPopupAutorizOrderGuestOne.forEach(elem => {
						elem.addEventListener('click', () => {
							popupAutorizOrderGuestOne.classList.add('active');
						});
					});
				

				//при вводе текста кнопка активная становится
					popupAutorizOrderGuestOneInput.addEventListener('input', () => {
						if(popupAutorizOrderGuestOneInput.value.length > 3) {
							popupAutorizOrderGuestOneButton.removeAttribute("disabled");
						} else {
							popupAutorizOrderGuestOneButton.setAttribute("disabled", "true");
						}
					});

					checkInput(popupAutorizOrderGuestOneInput);


			}

		//popup АВТОРИЗАЦИЯ - ОФОРМИТЬ КАК ГОСТЬ #2
			if(document.querySelector('.js_popup_autoriz_order_guest_two')) {

				let openPopupAutorizOrderGuestTwo = document.querySelectorAll('.js_open_popup_autoriz_order_guest_two');//класс для открытия попап
				let popupAutorizOrderGuestTwo = document.querySelector('.js_popup_autoriz_order_guest_two');//попап

				let popupAutorizOrderGuestTwoForm = popupAutorizOrderGuestTwo.querySelector('.js_popup_autoriz_order_guest_two__form');//форма
				let popupAutorizOrderGuestTwoFormInput = popupAutorizOrderGuestTwo.querySelectorAll('.js_popup_autoriz_order_guest_two__form input');//input's
				let popupAutorizOrderGuestTwoFormButton = popupAutorizOrderGuestTwo.querySelector('.js_popup_autoriz_order_guest_two__form button');//button

				//открытие попап
					openPopupAutorizOrderGuestTwo.forEach(elem => {
						elem.addEventListener('click', () => {
							popupAutorizOrderGuestTwo.classList.add('active');
						});
					});
				
				// проверка input на наличие текста
					popupAutorizOrderGuestTwoFormInput.forEach(elem => {
						checkInput(elem);
					});

				// маска ввода номера телефона
					popupAutorizOrderGuestTwoFormInput[1].addEventListener("input", mask, false);
					popupAutorizOrderGuestTwoFormInput[1].addEventListener("focus", mask, false);
					popupAutorizOrderGuestTwoFormInput[1].addEventListener("blur", mask, false); 
					
	
				// проверка формы на валидность
					function checkFieldValidity(evt) {
						var target = evt.target;
						var isValid = target.validity.valid;
				
						if (isValid === false) {
							target.classList.add('invalid');						
						} else {
							
							target.classList.remove('invalid');
							target.classList.add('valid');
						}
			
					};

					popupAutorizOrderGuestTwoFormButton.addEventListener('click', () => {
						popupAutorizOrderGuestTwoForm.addEventListener('invalid', checkFieldValidity, true);
						popupAutorizOrderGuestTwoForm.addEventListener('input', checkFieldValidity, true);
					});

				// при клике на "ОТПРАВИТЬ" 
					popupAutorizOrderGuestTwoForm.addEventListener('submit', function (evt) {

						var curTarget = evt.currentTarget;				
						var isValid = curTarget.checkValidity();
						
						evt.preventDefault();		

						// если форма заполнена правильно то:
						if (isValid) {
							bodyUnfixPosition();
							// popupAutorizForgot.classList.remove('active');
							popupAutorizOrderGuestTwoFormInput.forEach(elem => {
								elem.value = "";
								elem.classList.remove('valid');
								elem.classList.remove('filled');
								popupAutorizOrderGuestTwoFormButton.setAttribute("disabled", "true");
							})
						} 
					});
			}

		//popup НАПИШИТЕ НАМ
			if(document.querySelector('.popup-write-to-us')) {

				let openPopupWriteToUs = document.querySelectorAll('.js_open_popup_write_to_us');//класс для открытия попапа
				let popupWriteToUs = document.querySelector('.js_popup_write_to_us');//popup
				let popupWriteToUsContent = popupWriteToUs.querySelector('.js_popup_write_to_us_content');//контентная часть
				let popupWriteToUsClose = popupWriteToUs.querySelectorAll('.js_popup_write_to_us_close');//кнопка закрыть Х

				openClosePopup(openPopupWriteToUs, popupWriteToUs, popupWriteToUsClose, popupWriteToUsContent);

			}

		//popup ВЫБОР ГОРОДА
			if(document.querySelector('.popup-city')) {

				let openPopupCity = document.querySelectorAll('.open-popup-city');//открытие попап
				let popupCity = document.querySelector('.popup-city');//popup
				let popupCityClose = popupCity.querySelector('.popup-city__content-close');//закрыть
				let popupCityItem = popupCity.querySelectorAll('.popup-city__content-wrap a');//город
				let headerTopCity = document.querySelector('.js_header_top_city span');//название города
				let popupCityContentTitleInput = popupCity.querySelector('.js_popup_city_content_title_input');//input

				checkInput(popupCityContentTitleInput);
				

				// открыть попап
					openPopupCity.forEach(elem => {
						elem.addEventListener('click', () => {

							if(document.querySelector('.js_banner_top')) {

								if(document.querySelector('.js_banner_top').classList.contains('active')) {
									popupCity.classList.add('lower');
								} else {
									popupCity.classList.remove('lower');
								}
							}
							popupCity.classList.add('active');
						});
					});
				
				// закрыть попап
					popupCityClose.addEventListener('click', () => {
						popupCity.classList.remove('active');
					});

				// при клике на название города
					popupCityItem.forEach(elem => {
						elem.addEventListener('click', (e) => {
							// e.preventDefault();
							// popupCity.classList.remove('active');
							headerTopCity.textContent = elem.textContent;

						});
					});

			}

		// popup ВЫБОР ГОРОДА - НАБОР
			if(document.querySelector('.popup-city-typing')) {

				let openPopupCityTyping = document.querySelectorAll('.open-popup-city-typing');//открытие попап
				let popupCityTypingContent = document.querySelector('.popup-city-typing__content');//content
				let popupCityTyping = document.querySelector('.popup-city-typing');//popup
				let popupCityTypingClose = popupCityTyping.querySelector('.popup-city-typing__content-close');//закрыть
				let popupCityContentTitleInput = popupCityTyping.querySelector('.js_popup_city_content_title_input');//input

				checkInput(popupCityContentTitleInput);

				// открыть попап
					openClosePopup(openPopupCityTyping, popupCityTyping, popupCityTypingClose, popupCityTypingContent)
			}
			
	// ФУНКЦИИ-------------------------------------------------->
	// 1. Фиксация <body>
		function bodyFixPosition() {

			setTimeout( function() {
			/* Ставим необходимую задержку, чтобы не было «конфликта» в случае, если функция фиксации вызывается сразу после расфиксации (расфиксация отменяет действия расфиксации из-за одновременного действия) */
		
			if ( !document.body.hasAttribute('data-body-scroll-fix') ) {
		
				// Получаем позицию прокрутки
				let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
		
				// Ставим нужные стили
				document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
				document.body.style.overflow = 'hidden';
				document.body.style.position = 'fixed';
				document.body.style.top = '-' + scrollPosition + 'px';
				document.body.style.left = '0';
				document.body.style.width = '100%';
		
			}
		
			}, 15 ); /* Можно задержку ещё меньше, но у меня работало хорошо именно с этим значением на всех устройствах и браузерах */
		
		}
  
	// 2. Расфиксация <body>
		function bodyUnfixPosition() {
		
			if ( document.body.hasAttribute('data-body-scroll-fix') ) {
		
			// Получаем позицию прокрутки из атрибута
			let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
		
			// Удаляем атрибут
			document.body.removeAttribute('data-body-scroll-fix');
		
			// Удаляем ненужные стили
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.left = '';
			document.body.style.width = '';
		
			// Прокручиваем страницу на полученное из атрибута значение
			window.scroll(0, scrollPosition);
		
			}
		
		}

	// открытие закрытие попап
		function openClosePopup(openPopup, popup, popupClose, popupContent) {
			// открытие попап
			openPopup.forEach(elem => {
				elem.addEventListener('click', () => {
					popup.classList.add('active');
					bodyFixPosition();
				});
			});

			// закрытие попап
			popup.addEventListener('click', () => {
				popup.classList.remove('active');
				bodyUnfixPosition();
			});



			popupClose.forEach(elem => {
				elem.addEventListener('click', () => {
					popup.classList.remove('active');
					bodyUnfixPosition();
				});
			});
			

			

			popupContent.addEventListener('click', (e) => {
				e.stopPropagation();
			});
		}

	// проверка input на наличие текста
		function checkInput(input) {
			input.addEventListener('change', () => {
				if(input.value.length > 0) {
					input.classList.add('filled')
				} else {
					input.classList.remove('filled')
				}
			});
		}
	
	// маска для ввода номера телфона
		function setCursorPosition(pos, elem) {
			elem.focus();
			if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
			else if (elem.createTextRange) {
				var range = elem.createTextRange();
				range.collapse(true);
				range.moveEnd("character", pos);
				range.moveStart("character", pos);
				range.select()
			}
		}
		
		function mask(event) {
			var matrix = "+7 (___) ___ ____",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			if (def.length >= val.length) val = def;
			this.value = matrix.replace(/./g, function(a) {
				return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
			});
			if (event.type == "blur") {
				if (this.value.length == 2) this.value = ""
			} else setCursorPosition(this.value.length, this)
		};

		function maskDate(event) {
			var matrix = "__.__.__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			if (def.length >= val.length) val = def;
			this.value = matrix.replace(/./g, function(a) {
				return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
			});
			if (event.type == "blur") {
				if (this.value.length == 2) this.value = ""
			} else setCursorPosition(this.value.length, this)
		};

		function maskNumberCard(event) {
			var matrix = "____ ____ ____ ____",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			if (def.length >= val.length) val = def;
			this.value = matrix.replace(/./g, function(a) {
				return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
			});
			if (event.type == "blur") {
				if (this.value.length == 2) this.value = ""
			} else setCursorPosition(this.value.length, this)
		};

		// var input = document.querySelector("#news-tel-user");

		// if (input) {
		// 	input.addEventListener("input", mask, false);
		// 	input.addEventListener("focus", mask, false);
		// 	input.addEventListener("blur", mask, false); 
		// }


		

		

});





