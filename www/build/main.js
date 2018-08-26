webpackJsonp([3],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categories_categories__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_account__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__brand_new_brand_new__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, storage, platform) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.searchQuery = "";
        this.categories = "new";
        platform.registerBackButtonAction(function () {
        }, 1);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad', 'HomePage');
    };
    HomePage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { "product": product });
    };
    HomePage.prototype.openCart = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]).present();
    };
    HomePage.prototype.onSearch = function (event) {
        if (this.searchQuery.length > 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */], { "searchQuery": this.searchQuery });
        }
    };
    HomePage.prototype.openShop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__categories_categories__["a" /* CategoriesPage */]);
    };
    HomePage.prototype.openAccount = function () {
        var _this = this;
        this.storage.get("user").then(function (data) {
            if (data != null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__account_account__["a" /* AccountPage */]);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */], { next: __WEBPACK_IMPORTED_MODULE_7__account_account__["a" /* AccountPage */] });
            }
        });
    };
    ;
    HomePage.prototype.opanBrandNew = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__brand_new_brand_new__["a" /* BrandNewPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('productSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], HomePage.prototype, "productSlides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bannerSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], HomePage.prototype, "bannerSlides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle icon-only item-left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openCart()">\n        <ion-icon name="cart" right></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <ion-card no-padding>\n\n    <!-- <ion-slides autoplay="5000" loop="true" speed="500" pager (ionSlideDidChange)="slideChanged()" #bannerSlides> -->\n      <ion-slides autoplay="5000" loop="true" speed="500" pager>\n      <ion-slide>\n        <img src="assets/imgs/belts.jpg" />\n      </ion-slide>\n      <ion-slide>\n        <img src="assets/imgs/belt.jpg" alt="">\n      </ion-slide>\n      <ion-slide>\n        <img src="assets/imgs/cool.jpg" alt="">\n      </ion-slide>\n      <ion-slide>\n        <img src="assets/imgs/bag.jpg" alt="">\n      </ion-slide>\n      <ion-slide>\n        <img src="assets/imgs/light.jpg" alt="">\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n  <ion-card style="box-shadow: none;">\n    <ion-grid style="border-bottom: 1px solid grey">\n      <ion-row class="featured">\n        <ion-col>\n          <h3 class="home-title">THE CITYSHOP EXPERIENCE</h3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card (click)="openShop()">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col>\n          <img src="assets/imgs/soft.jpg" alt="">\n          <div class="text-container">\n            <h2 class="text">Shop Now</h2>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card (click)="openAccount()">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col>\n          <img src="assets/imgs/softer.jpg" alt="">\n          <div class="text-container">\n            <h2 class="text">My Account</h2>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card (click)="opanBrandNew()">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col>\n          <img src="assets/imgs/watch.jpg" alt="">\n          <div class="text-container">\n            <h2 class="text">Brand New</h2>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_checkout__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, storage, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.showEmptyCartMessage = false;
        this.cartItems = [];
        this.total = 0.0;
        this.storage.ready().then(function () {
            _this.storage.get('cart').then(function (cart) {
                if (cart) {
                    _this.cartItems = cart;
                    // console.log(this.cartItems);
                    if (_this.cartItems.length > 0) {
                        _this.cartItems.forEach(function (item, index) {
                            _this.total = _this.total + (item.product.price * item.qty);
                        });
                    }
                    else {
                        _this.showEmptyCartMessage = true;
                    }
                }
                else {
                    _this.showEmptyCartMessage = true;
                }
            });
        });
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.removeFromCart = function (item, i) {
        var _this = this;
        var price = item.product.price;
        var qty = item.qty;
        this.cartItems.splice(i, 1);
        this.storage.set('cart', this.cartItems).then(function () {
            _this.total = _this.total - (price * qty);
        });
        if (this.cartItems.length == 0) {
            this.showEmptyCartMessage = true;
        }
    };
    CartPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CartPage.prototype.checkout = function () {
        // console.log('checking out');
        var _this = this;
        this.storage.get("user").then(function (data) {
            if (data != null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkout_checkout__["a" /* CheckoutPage */]);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */], { next: __WEBPACK_IMPORTED_MODULE_3__checkout_checkout__["a" /* CheckoutPage */] });
            }
        });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cart',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/cart/cart.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-row>\n    <ion-col padding>\n      <h6 class="basket-title">\n        <ion-icon name="cart" item-left></ion-icon>\n        <span>Basket ({{cartItems?.length}} Item)</span>\n      </h6>\n    </ion-col>\n  </ion-row>\n  <ion-card [hidden]="!showEmptyCartMessage">\n    <ion-grid>\n      <ion-row>\n        <ion-col>There are no products in your cart!</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class="basket-card" [hidden]="showEmptyCartMessage">\n    <ion-row *ngFor="let item of cartItems; let i = index" class="basket-row">\n      <ion-col col-5>\n        <img [src]="item.product[\'images\'][0][\'src\']" alt="">\n      </ion-col>\n      <ion-col col-7>\n        <ion-list text-wrap>\n          <ion-row>\n            <ion-col>\n              <h6 style="font-weight: bold;">{{item.product.name}}</h6>\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row>\n            <ion-col>\n              <p>Size: <span>{{item.qty}}</span></p>\n            </ion-col>\n          </ion-row> -->\n          <ion-row>\n            <ion-col>\n              <p style="font-weight: bold;">Quantity:\n                <span style="font-weight: normal;">{{item.qty}}</span>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p style="font-weight: bold;">Item Total:\n                <span style="font-weight: normal;">{{item.qty}} *\n                  <span [innerHTML]="item.product.price_html"></span>\n                </span>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col style="text-align: right">\n              <button ion-button clear item-right color="primary" (click)="removeFromCart(item, i)">\n                Remove\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class="basket-total" style="margin-left: 0; width: 100%;" [hidden]="showEmptyCartMessage">\n    <ion-row padding>\n      <ion-col>\n        <b>Total</b>\n      </ion-col>\n      <ion-col style="text-align: right">\n        <b>&pound; {{total | number : \'1.2-2\'}}</b>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button color="light" block (click)="closeModal()">Continue Shopping</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="primary" block (click)="checkout()" [disabled]="showEmptyCartMessage">Checkout</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, toastCtrl, alertCtrl, viewCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.newUser = {};
        this.loading = false;
        this.states = [];
        this.newUser.billing = {};
        this.newUser.shipping = {};
        this.billing_shipping_same = false;
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://blesscity.com",
            consumerKey: "ck_2acbdb539cac3a9a8cc6c2197d6c4cc7374f054f",
            consumerSecret: "cs_f0157128a4195e62e7295553402b56691d474ef7",
            version: 'wc/v2',
            wpAPI: true,
            queryStringAuth: true,
        });
        this.http.get('assets/states.json').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.states = data;
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.setBillingToShipping = function () {
        this.billing_shipping_same = !this.billing_shipping_same;
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        if (this.billing_shipping_same) {
            this.newUser.shipping = this.newUser.billing;
        }
        if (this.form.valid) {
            var customerData = {
                customer: {}
            };
            customerData.customer = {
                "email": this.newUser.email,
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "username": this.newUser.username,
                "password": this.newUser.password,
                "phone": this.newUser.phone,
                "billing": {
                    "first_name": this.newUser.first_name,
                    "last_name": this.newUser.last_name,
                    "address_1": this.newUser.billing.address_1,
                    "address_2": this.newUser.billing.address_2,
                    "city": this.newUser.billing.city,
                    "state": this.newUser.billing.state,
                    "postcode": this.newUser.billing.postcode,
                    "country": this.newUser.billing.country,
                    "email": this.newUser.email,
                    "phone": this.newUser.phone,
                },
                "shipping": {
                    "first_name": this.newUser.first_name,
                    "last_name": this.newUser.last_name,
                    "address_1": this.newUser.shipping.address_1,
                    "address_2": this.newUser.shipping.address_2,
                    "city": this.newUser.shipping.city,
                    "state": this.newUser.shipping.state,
                    "postcode": this.newUser.shipping.postcode,
                    "country": this.newUser.shipping.country
                }
            };
            // console.log(customerData.customer);
            this.loading = true;
            this.WooCommerce.postAsync('customers', customerData.customer).then(function (data) {
                var res = (JSON.parse(data.body));
                if (res.role === 'customer') {
                    _this.alertCtrl.create({
                        title: 'Account Created',
                        message: 'Your account has been created successfully! Please login to proceed.',
                        buttons: [{
                                text: 'Login',
                                handler: function () {
                                    //TODO
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                                }
                            }]
                    }).present();
                    _this.loading = false;
                }
                else if (res.errors) {
                    _this.toastCtrl.create({
                        message: res.errors[0].message,
                        showCloseButton: true
                    }).present();
                    _this.loading = false;
                }
                else {
                    _this.toastCtrl.create({
                        message: res.message,
                        showCloseButton: true
                    }).present();
                    _this.loading = false;
                }
            });
        }
        ;
    };
    SignupPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    SignupPage.prototype.numbersOnly = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userForm'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "form", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Customer Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n\n    <form #userForm="ngForm">\n      <!--  -->\n      <input type="text" name="username" style="display: none !important">\n      <input type="password" name="password" style="display: none !important">\n      <!--  -->\n\n      <ion-item-divider color="light">Personal Details</ion-item-divider>\n\n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-input type="text" #newUser_first_name="ngModel" name="newUser_first_name" [(ngModel)]="newUser.first_name" minlength="3"\n          required></ion-input>\n      </ion-item>\n      <div *ngIf="newUser_first_name.errors && (newUser_first_name.dirty || newUser_first_name.touched)" class="error-container">\n        <p *ngIf="newUser_first_name.errors?.required" class="error-text">first name is required</p>\n      </div>\n\n      <ion-item>\n        <ion-label>Last Name</ion-label>\n        <ion-input type="text" #newUser_last_name="ngModel" name="newUser_last_name" [(ngModel)]="newUser.last_name" minlength="3"\n          required></ion-input>\n      </ion-item>\n      <div *ngIf="newUser_last_name.errors && (newUser_last_name.dirty || newUser_last_name.touched)" class="error-container">\n        <p *ngIf="newUser_last_name.errors?.required" class="error-text">last name is required</p>\n      </div>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type="text" #newUser_email="ngModel" name="newUser_email" [(ngModel)]="newUser.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"\n          required></ion-input>\n      </ion-item>\n      <div *ngIf="newUser_email.invalid && (newUser_email.dirty || newUser_email.touched)" class="error-container">\n        <p *ngIf="newUser_email.errors?.required" class="error-text">email is required</p>\n        <p *ngIf="newUser_email.errors?.pattern && newUser_email.touched" class="error-text">email is invalid</p>\n      </div>\n\n      <ion-item>\n        <ion-label>Username</ion-label>\n        <ion-input type="text" #newUser_username="ngModel" name="newUser_username" [(ngModel)]="newUser.username" required></ion-input>\n      </ion-item>\n      <div *ngIf="newUser_username.errors && (newUser_username.dirty || newUser_username.touched)" class="error-container">\n        <p *ngIf="newUser_username.errors?.required" class="error-text">username is required</p>\n      </div>\n\n      <ion-item>\n        <ion-label>Password</ion-label>\n        <ion-input type="password" #newUser_password="ngModel" name="newUser_password" [(ngModel)]="newUser.password" minlength="6"\n          required></ion-input>\n      </ion-item>\n      <div *ngIf="newUser_password.invalid && (newUser_password.dirty || newUser_confirm_password.touched)" class="error-container">\n        <p *ngIf="newUser_password.errors?.required" class="error-text">password is required</p>\n        <p *ngIf="newUser_password.invalid" class="error-text">password must be more than 6 characters</p>\n      </div>\n\n      <ion-item>\n        <ion-label>Confirm Password</ion-label>\n        <ion-input type="password" #newUser_confirm_password="ngModel" name="newUser_confirm_password" [(ngModel)]="newUser.confirm_password"\n          required></ion-input>\n      </ion-item>\n      <div *ngIf="(newUser_confirm_password.touched || newUser_confirm_password.dirty) && newUser_password.value != newUser_confirm_password.value"\n        class="error-container">\n        <p class="error-text">password don\'t match</p>\n      </div>\n\n      <ion-item>\n        <ion-label>Phone Number</ion-label>\n        <ion-input type="text" #newUser_phone="ngModel" name="newUser_phone" [(ngModel)]="newUser.phone" minlength="10" (keypress)="numbersOnly($event)"\n          required></ion-input>\n      </ion-item>\n      <div *ngIf="newUser_phone.errors && (newUser_phone.dirty || newUser_phone.touched)" class="error-container">\n        <p *ngIf="newUser_phone.errors?.required" class="error-text">phone is required</p>\n        <p *ngIf="newUser_phone.invalid" class="error-text">phone must be more than 9 characters</p>\n      </div>\n\n      <ion-item-divider color="light">Billing Details</ion-item-divider>\n\n      <ion-item>\n        <ion-label>Address Line 1</ion-label>\n        <ion-input type="text" maxlength="80" #billing_address_1="ngModel" name="billing_address_1" [(ngModel)]="newUser.billing.address_1"\n          required></ion-input>\n      </ion-item>\n      <div *ngIf="billing_address_1.errors && (billing_address_1.dirty || billing_address_1.touched)" class="error-container">\n        <p *ngIf="billing_address_1.errors?.required" class="error-text">billing address is required</p>\n      </div>\n\n      <ion-item>\n        <ion-label>Address Line 2</ion-label>\n        <ion-input type="text" maxlength="80" #billing_address_2="ngModel" name="billing_address_2" [(ngModel)]="newUser.billing.address_2"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Country</ion-label>\n        <ion-select #billing_country="ngModel" name="billing_country" [(ngModel)]="newUser.billing.country" required>\n          <ion-option value="United Kingdom">United Kingdom</ion-option>\n        </ion-select>\n      </ion-item>\n      <div *ngIf="billing_country.errors && (billing_country.dirty || billing_country.touched)" class="error-container">\n        <p *ngIf="billing_country.errors?.required" class="error-text">billing country is required</p>\n      </div>\n\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-select #billing_state="ngModel" name="billing_state" [(ngModel)]="newUser.billing.state" required>\n          <ion-option *ngFor="let state of states" value="{{state.name}}">{{state.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <div *ngIf="billing_state.errors && (billing_state.dirty || billing_state.touched)" class="error-container">\n        <p *ngIf="billing_state.errors?.required" class="error-text">billing state is required</p>\n      </div>\n\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-input type="text" #billing_city="ngModel" name="billing_city" [(ngModel)]="newUser.billing.city" required></ion-input>\n      </ion-item>\n      <div *ngIf="billing_city.errors && (billing_city.dirty || billing_city.touched)" class="error-container">\n        <p *ngIf="billing_city.errors?.required" class="error-text">billing city is required</p>\n      </div>\n\n      <ion-item>\n        <ion-label>Postal Code</ion-label>\n        <ion-input type="text" #billing_postcode="ngModel" name="billing_postcode" [(ngModel)]="newUser.billing.postcode" required></ion-input>\n      </ion-item>\n      <div *ngIf="billing_postcode.errors && (billing_postcode.dirty || billing_postcode.touched)" class="error-container">\n        <p *ngIf="billing_postcode.errors?.required" class="error-text">billing postcode is required</p>\n      </div>\n\n      <ion-item>\n        <ion-label>Phone</ion-label>\n        <ion-input type="text" #billing_phone="ngModel" name="billing_phone" [(ngModel)]="newUser.billing.phone" (keypress)="numbersOnly($event)"\n          minlength="10" required></ion-input>\n      </ion-item>\n      <div *ngIf="billing_phone.errors && (billing_phone.dirty || billing_phone.touched)" class="error-container">\n        <p *ngIf="billing_phone.errors?.required" class="error-text">phone is required</p>\n        <p *ngIf="billing_phone.invalid" class="error-text">phone must be more than 9 characters</p>\n      </div>\n\n      <ion-item>\n        <ion-label>Same Shipping Details</ion-label>\n        <ion-checkbox (ionChange)="setBillingToShipping()"></ion-checkbox>\n      </ion-item>\n\n      <ion-item-divider color="light" *ngIf="!billing_shipping_same">Shipping Details</ion-item-divider>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12 no-padding>\n          <ion-item>\n            <ion-label>Address Line 1</ion-label>\n            <ion-input type="text" maxlength="80" #shipping_address_1="ngModel" name="shipping_address_1" [(ngModel)]="newUser.shipping.address_1"\n              required></ion-input>\n          </ion-item>\n        </ion-col>\n        <div *ngIf="shipping_address_1.errors && (shipping_address_1.dirty || shipping_address_1.touched)" class="error-container">\n          <p *ngIf="shipping_address_1.errors?.required" class="error-text">shipping address is required</p>\n        </div>\n      </ion-row>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12 no-padding>\n          <ion-item>\n            <ion-label>Address Line 2</ion-label>\n            <ion-input type="text" maxlength="80" #shipping_address_2="ngModel" name="shipping_address_2" [(ngModel)]="newUser.shipping.address_2"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12 no-padding>\n          <ion-item>\n            <ion-label>Country</ion-label>\n            <ion-select #shipping_country="ngModel" name="shipping_country" [(ngModel)]="newUser.shipping.country" required>\n              <ion-option value="United Kingdom">United Kingdom</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <div *ngIf="shipping_country.errors && (shipping_country.dirty || shipping_country.touched)" class="error-container">\n          <p *ngIf="shipping_country.errors?.required" class="error-text">shipping country is required</p>\n        </div>\n      </ion-row>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12 no-padding>\n          <ion-item>\n            <ion-label>State</ion-label>\n            <ion-select #shipping_state="ngModel" name="shipping_state" [(ngModel)]="newUser.shipping.state" required>\n              <ion-option *ngFor="let state of states" value="{{state.name}}">{{state.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <div *ngIf="shipping_state.errors && (shipping_state.dirty || shipping_state.touched)" class="error-container">\n          <p *ngIf="shipping_state.errors?.required" class="error-text">shipping state is required</p>\n        </div>\n      </ion-row>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12 no-padding>\n          <ion-item>\n            <ion-label>City</ion-label>\n            <ion-input type="text" #shipping_city="ngModel" name="shipping_city" [(ngModel)]="newUser.shipping.city" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <div *ngIf="shipping_city.errors && (shipping_city.dirty || shipping_city.touched)" class="error-container">\n          <p *ngIf="shipping_city.errors?.required" class="error-text">shipping city is required</p>\n        </div>\n      </ion-row>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12 no-padding>\n          <ion-item>\n            <ion-label>Postal Code</ion-label>\n            <ion-input type="text" #shipping_postcode="ngModel" name="shipping_postcode" [(ngModel)]="newUser.shipping.postcode" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <div *ngIf="shipping_postcode.errors && (shipping_postcode.dirty || shipping_postcode.touched)" class="error-container">\n          <p *ngIf="shipping_postcode.errors?.required" class="error-text">shipping postcode is required</p>\n        </div>\n      </ion-row>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12 no-padding>\n          <ion-item>\n            <ion-label>Phone</ion-label>\n            <ion-input type="text" #shipping_phone="ngModel" name="shipping_phone" [(ngModel)]="newUser.shipping.phone" (keypress)="numbersOnly($event)"\n              minlength="10" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <div *ngIf="shipping_phone.errors && (shipping_phone.dirty || shipping_phone.touched)" class="error-container">\n          <p *ngIf="shipping_phone.errors?.required" class="error-text">phone is required</p>\n          <p *ngIf="shipping_phone.invalid" class="error-text">phone must be more than 9 characters</p>\n        </div>\n      </ion-row>\n\n    </form>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <button ion-button block color="light" (click)="back()">Back</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button block color="primary" (click)="signup()" [disabled]="!userForm.form.valid || loading">Sign Up</button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sub_categories_sub_categories__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, navParams, loadingCtrl, platform, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.http = http;
        this.categories = [];
        platform.registerBackButtonAction(function () {
        }, 1);
        this.loader = this.loadingCtrl.create({
            cssClass: 'transparent',
        });
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://blesscity.com",
            consumerKey: "ck_2acbdb539cac3a9a8cc6c2197d6c4cc7374f054f",
            consumerSecret: "cs_f0157128a4195e62e7295553402b56691d474ef7",
            version: 'wc/v2',
            wpAPI: true,
            queryStringAuth: true,
        });
    }
    CategoriesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CategoriesPage');
        this.loader.present();
        this.WooCommerce.getAsync('products/categories?per_page=100').then(function (data) {
            var temp = JSON.parse(data.body);
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].parent == 0) {
                    _this.categories.push(temp[i]);
                }
                ;
            }
            // console.log(this.categories);
            _this.loader.dismiss();
        }, function (error) {
            console.log(error);
            _this.loader.dismiss();
        });
    };
    CategoriesPage.prototype.ionViewDidLeave = function () {
        this.loader.dismiss();
    };
    CategoriesPage.prototype.openSubCat = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sub_categories_sub_categories__["a" /* SubCategoriesPage */], { 'category': category });
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/categories/categories.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Shop</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-list>\n    <ion-item *ngFor="let category of categories" (click)="openSubCat(category)">\n      <ion-avatar item-start>\n        <img [src]="category[\'image\']?.src" *ngIf="category.image != null">\n        <img src="assets/imgs/shop-icon.png" alt="" *ngIf="category.image === null">\n      </ion-avatar>\n      <h2 [innerHTML]=category.name></h2>\n      <button ion-button icon clear item-end>\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/categories/categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsByCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsByCategoryPage = /** @class */ (function () {
    function ProductsByCategoryPage(navCtrl, navParams, loadingCtrl, toastCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.products = [];
        this._showList = false;
        this._showGrid = true;
        this.showToggle = false;
        platform.registerBackButtonAction(function () {
        }, 1);
        this.loader = this.loadingCtrl.create({
            cssClass: 'transparent',
        });
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.page = 1;
        this.category = this.navParams.get('category');
        // console.log(this.category);
        // console.log(this.page);
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://blesscity.com",
            consumerKey: "ck_2acbdb539cac3a9a8cc6c2197d6c4cc7374f054f",
            consumerSecret: "cs_f0157128a4195e62e7295553402b56691d474ef7",
            version: 'wc/v2',
            wpAPI: true,
            queryStringAuth: true,
        });
    }
    ProductsByCategoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProductsByCategoryPage');
        this.loader.present();
        this.WooCommerce.getAsync('products?category=' + this.category.id).then(function (data) {
            _this.products = JSON.parse(data.body);
            // console.log(this.products);
            _this.loader.dismiss();
            _this.showToggle = true;
            _this.page++;
            // console.log(this.page);
        }, function (error) {
            console.log(error);
        });
    };
    ;
    ProductsByCategoryPage.prototype.ionViewDidLeave = function () {
        this.loader.dismiss();
    };
    ProductsByCategoryPage.prototype.showGrid = function () {
        this._showList = false;
        this._showGrid = true;
    };
    ProductsByCategoryPage.prototype.showList = function () {
        this._showGrid = false;
        this._showList = true;
    };
    ProductsByCategoryPage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { "product": product });
    };
    ProductsByCategoryPage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        // console.log(this.page);
        this.WooCommerce.getAsync('products?category=' + this.category.id + '&page=' + this.page).then(function (data) {
            _this.products = _this.products.concat(JSON.parse(data.body));
            if (JSON.parse(data.body).length < 10) {
                event.enable(false);
                _this.toastCtrl.create({
                    message: 'No more products',
                    duration: 5000
                }).present();
            }
            event.complete();
            _this.page++;
        });
    };
    ProductsByCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-products-by-category',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/products-by-category/products-by-category.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{category.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row align-items-end *ngIf="showToggle">\n      <ion-col col-6 offset-6 class="toggle-container">\n        <button ion-button outline icon-only [ngClass]="{\'active\': _showList}" (click)="showList()">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <button ion-button outline icon-only [ngClass]="{\'active\': _showGrid}" (click)="showGrid()">\n          <ion-icon name="apps"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="_showGrid">\n      <ion-col col-6 *ngFor="let product of products" text-wrap (click)="openProductPage(product)">\n        <ion-card>\n          <img [src]="product[\'images\'][\'0\'].src" alt="">\n          <div class="row">\n            <div class="col">\n              <h4 [innerHTML]="product.name"></h4>\n              <p [innerHTML]="product.price_html"></p>\n              <ion-row>\n                <ion-col>\n                  <p *ngIf="product.in_stock === true" class="green" style="font-weight: normal !important;">\n                    In Stock\n                  </p>\n                </ion-col>\n                <ion-col style="padding-right: 5px; text-align: right">\n                  <ion-icon name="md-heart" item-right></ion-icon>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n    <ion-list *ngIf="_showList">\n      <ion-item *ngFor="let product of products" text-wrap (click)="openProductPage(product)" class="item">\n        <ion-thumbnail item-start>\n          <img [src]="product[\'images\'][\'0\'].src" alt="">\n        </ion-thumbnail>\n        <h4 [innerHTML]="product.name"></h4>\n        <p [innerHTML]="product.price_html"></p>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n\n  <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/products-by-category/products-by-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], ProductsByCategoryPage);
    return ProductsByCategoryPage;
}());

//# sourceMappingURL=products-by-category.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_detail_order_detail__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_details_account_details__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams, platform, loadingCtrl, storage, modalCtrl, zone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.myAccount = "accountSegment";
        this.gettingOrders = false;
        platform.registerBackButtonAction(function () {
        }, 1);
        this.loader = this.loadingCtrl.create({
            cssClass: 'transparent',
        });
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__({
            url: "https://blesscity.com",
            consumerKey: "ck_2acbdb539cac3a9a8cc6c2197d6c4cc7374f054f",
            consumerSecret: "cs_f0157128a4195e62e7295553402b56691d474ef7",
            version: 'wc/v2',
            wpAPI: true,
            queryStringAuth: true,
        });
        this.storage.ready().then(function () {
            _this.storage.get("loggedUser").then(function (user) {
                if (user) {
                    _this.storage.get("orders").then(function (orders) {
                        if (orders) {
                            _this.myOrders = orders;
                            // console.log(this.myOrders);
                        }
                        else {
                            _this.WooCommerce.getAsync('orders?customer_id=' + user.id).then(function (orders) {
                                _this.storage.set("orders", JSON.parse(orders.body));
                                _this.myOrders = JSON.parse(orders.body);
                                // console.log(this.myOrders);
                            });
                        }
                    });
                }
                else if (!user) {
                    _this.storage.get("user").then(function (_user) {
                        if (_user) {
                            _this.WooCommerce.getAsync('customers?email=' + _user.user_email).then(function (data) {
                                _this.storage.set("loggedUser", JSON.parse(data.body));
                                var loggedUser = JSON.parse(data.body);
                                _this.WooCommerce.getAsync('orders?customer_id=' + loggedUser.id).then(function (orders) {
                                    _this.storage.set("orders", JSON.parse(orders.body));
                                    _this.myOrders = JSON.parse(orders.body);
                                    // console.log(this.myOrders);
                                });
                            });
                        }
                    });
                }
            });
        });
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.openOrderDetail = function (order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__order_detail_order_detail__["a" /* OrderDetailPage */], { "order": order });
    };
    AccountPage.prototype.openAccountDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__account_details_account_details__["a" /* AccountDetailsPage */]);
    };
    AccountPage.prototype.segmentChanged = function (event) {
        var _this = this;
        // console.log("Segment clicked! " + event.value, this, event);
        this.zone.run(function () {
            _this.myAccount = event.value;
        });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/account/account.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <ion-segment [(ngModel)]="myAccount" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="accountSegment">\n      My Account\n    </ion-segment-button>\n    <ion-segment-button value="ordersSegment">\n      My Orders\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="myAccount">\n    <ion-list *ngSwitchCase="\'accountSegment\'">\n      <ion-item-divider color="light">ACCOUNT DETAILS</ion-item-divider>\n      <!-- <ion-item>\n            <button ion-button icon clear item-left>\n              <ion-icon name="mail-open"></ion-icon>\n            </button>\n            <h6>My Messages</h6>\n            <button ion-button icon clear item-right>\n              <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n          </ion-item> -->\n\n      <ion-item (click)="openAccountDetails()">\n        <button ion-button icon clear item-left>\n          <ion-icon name="contact"></ion-icon>\n        </button>\n        <h6>My Account Details</h6>\n        <button ion-button icon clear item-right>\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </ion-item>\n\n      <!-- <ion-item>\n            <button ion-button icon clear item-left>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n            <h6>Transaction History</h6>\n            <button ion-button icon clear item-right>\n              <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n          </ion-item> -->\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'ordersSegment\'">\n      <ion-item *ngFor="let order of myOrders">\n        <ion-row>\n          <ion-col col-12 (click)="openOrderDetail(order)">\n            <ion-card class="orderCard">\n              <h4>\n                Order Number:\n                <span>{{order.id}}</span>\n              </h4>\n              <h4>\n                Order Date:\n                <span>{{order.date_created | date: \'medium\'}}</span>\n              </h4>\n              <h4>\n                Status:\n                <span>{{order.status}}</span>\n              </h4>\n              <h4>\n                Quantity:\n                <span>{{order[\'line_items\'].length}}</span>\n              </h4>\n              <h4>\n                Total:\n                <span>{{order.total}}</span>\n              </h4>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_stripe__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_woocommerce_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CardPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardPaymentPage = /** @class */ (function () {
    function CardPaymentPage(navCtrl, navParams, storage, stripe, alertCtrl, fb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.stripe = stripe;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_4_woocommerce_api__({
            url: "https://blesscity.com",
            consumerKey: "ck_2acbdb539cac3a9a8cc6c2197d6c4cc7374f054f",
            consumerSecret: "cs_f0157128a4195e62e7295553402b56691d474ef7",
            version: 'wc/v2',
            wpAPI: true,
            queryStringAuth: true,
        });
        this.storage.get('orderData').then(function (orderData) {
            _this.orderData = orderData;
            // console.log(this.orderData);
        });
        this.storage.get('order').then(function (order) {
            _this.order = order;
            // console.log(this.order);
        });
        this.storage.get('token').then(function (token) {
            _this.card_token = token;
        });
        this.masks = {
            cardnumber: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
            cardmonth: [/\d/, /\d/],
            cardyear: [/\d/, /\d/],
            cardcvv: [/\d/, /\d/, /\d/]
        };
        this.cardPaymentForm = this.fb.group({
            cardNumber: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
            cardMonth: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
            cardYear: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
            cardCVV: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]
        });
    }
    CardPaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardPaymentPage');
        this.stripe.setPublishableKey('pk_test_NPc0NaA0tWA7vPfySW6G14pT');
    };
    CardPaymentPage.prototype.validateCard = function () {
        var _this = this;
        if (this.cardPaymentForm.valid) {
            var card = {
                // number: this.cardNumber,
                // expMonth: this.cardMonth,
                // expYear: this.cardYear,
                // cvc: this.cardCVV
                number: this.cardNumber.replace(/\D+/g, ''),
                expMonth: this.cardMonth.replace(/\D+/g, ''),
                expYear: this.cardYear.replace(/\D+/g, ''),
                cvc: this.cardCVV.replace(/\D+/g, '')
            };
            // console.log(card);
            this.stripe.createCardToken(card)
                .then(function (token) {
                // console.log(token);
                _this.storage.set('token', token);
                var data = {
                    status: 'processing',
                    payment_method: _this.orderData['payment_details'].method_id,
                    payment_method_title: _this.orderData['payment_details'].method_title,
                    transaction_id: token.id,
                };
                var id = _this.order.id;
                // console.log(id);
                _this.WooCommerce.putAsync('orders/' + id, data).then(function (res) {
                    // console.log(res.body);
                    _this.alertCtrl.create({
                        title: 'Processing',
                        message: 'Your order is being processed',
                        buttons: [{
                                text: 'OK',
                                handler: function () {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                                }
                            }]
                    }).present();
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    CardPaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-card-payment',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/card-payment/card-payment.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Pay With Card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <form novalidate [formGroup]="cardPaymentForm">\n      <div class="form-group">\n        <label for="cardNumber">Card Number</label>\n        <input type="tel" placeholder="1234-1234-1234-1234" formControlName="cardNumber" [(ngModel)]="cardNumber" [textMask]="{mask: masks.cardnumber}" required>\n      </div>\n\n      <div class="form-group">\n        <label stacked>Expiration Month</label>\n        <input type="tel" placeholder="MM" formControlName="cardMonth" [(ngModel)]="cardMonth" [textMask]="{mask: masks.cardmonth}" required>\n      </div>\n\n      <div class="form-group">\n        <label stacked>Expiration Year</label>\n        <input type="tel" placeholder="YY" formControlName="cardYear" [(ngModel)]="cardYear" [textMask]="{mask: masks.cardyear}" required>\n      </div>\n\n      <div class="form-group">\n        <label stacked>CVV</label>\n        <input type="tel" placeholder="CVV" formControlName="cardCVV" [(ngModel)]="cardCVV" [textMask]="{mask: masks.cardcvv}" required>\n      </div>\n\n\n      <ion-row>\n        <ion-col style="padding-left: 16px; padding-right: 10px;">\n          <button ion-button block large (click)="validateCard()" [ngClass]="{\'disabled\': !cardPaymentForm.valid}">Add Card</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-list>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/card-payment/card-payment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"]])
    ], CardPaymentPage);
    return CardPaymentPage;
}());

//# sourceMappingURL=card-payment.js.map

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/card-payment/card-payment.module": [
		637,
		2
	],
	"../pages/orders/orders.module": [
		638,
		1
	],
	"../pages/shop/shop.module": [
		639,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_payment_card_payment__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../home/home';

var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, navParams, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.newOrder = {};
        this.newOrder.billing = {};
        this.newOrder.shipping = {};
        this.billing_shipping_same = false;
        this.paymentMethods = [
            { method_id: 'paypal', method_title: 'PayPal' },
            { method_id: 'stripe', method_title: 'Debit Card (Stripe integration)' }
        ];
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://blesscity.com",
            consumerKey: "ck_2acbdb539cac3a9a8cc6c2197d6c4cc7374f054f",
            consumerSecret: "cs_f0157128a4195e62e7295553402b56691d474ef7",
            version: 'wc/v2',
            wpAPI: true,
            queryStringAuth: true,
        });
        this.storage.get('loggedUser').then(function (loggedUser) {
            _this.userInfo = loggedUser;
            // console.log(this.userInfo);
            // this.newOrder = this.userInfo;
            _this.newOrder.first_name = _this.userInfo.first_name;
            _this.newOrder.last_name = _this.userInfo.last_name;
            _this.newOrder.username = _this.userInfo.username;
            _this.newOrder.email = _this.userInfo.email;
            _this.newOrder.billing.address_1 = _this.userInfo['billing'].address_1;
            _this.newOrder.billing.address_2 = _this.userInfo['billing'].address_2;
            _this.newOrder.billing.country = _this.userInfo['billing'].country;
            _this.newOrder.billing.state = _this.userInfo['billing'].state;
            _this.newOrder.billing.city = _this.userInfo['billing'].city;
            _this.newOrder.billing.phone = _this.userInfo['billing'].phone;
            _this.newOrder.billing.postcode = _this.userInfo['billing'].postcode;
            _this.newOrder.shipping.address_1 = _this.userInfo['shipping'].address_1;
            _this.newOrder.shipping.address_2 = _this.userInfo['shipping'].address_2;
            _this.newOrder.shipping.country = _this.userInfo['shipping'].country;
            _this.newOrder.shipping.state = _this.userInfo['shipping'].state;
            _this.newOrder.shipping.city = _this.userInfo['shipping'].city;
            _this.newOrder.shipping.phone = _this.userInfo['shipping'].phone;
            _this.newOrder.shipping.postcode = _this.userInfo['shipping'].postcode;
        });
    }
    CheckoutPage.prototype.setBillingToShipping = function () {
        this.billing_shipping_same = !this.billing_shipping_same;
        if (this.billing_shipping_same) {
            this.newOrder.shipping = this.newOrder.billing;
        }
    };
    CheckoutPage.prototype.placeOrder = function () {
        var _this = this;
        var orderItems = [];
        var data = {};
        var paymentData = {};
        this.paymentMethods.forEach(function (element, index) {
            if (element.method_id == _this.paymentMethod) {
                paymentData = element;
            }
        });
        data = {
            payment_details: {
                method_id: paymentData.method_id,
                method_title: paymentData.method_title,
                paid: true
            },
            billing: this.newOrder.billing,
            shipping: this.newOrder.shipping,
            customer_id: this.userInfo.id || '',
            line_items: orderItems
        };
        // console.log(paymentData);
        // console.log(data);
        if (paymentData.method_id == 'paypal') {
            console.log('Paypal not supported yet');
            //TODO
        }
        else {
            this.storage.get('cart').then(function (cart) {
                cart.forEach(function (element, index) {
                    orderItems.push({
                        product_id: element['product'].id,
                        quantity: parseInt(element.qty),
                        size: element.size,
                        amount: element['product'].amount
                    });
                });
                // console.log(cart);
                data.line_items = orderItems;
                var orderData = {};
                orderData = data;
                // console.log(orderData);
                _this.storage.set('orderData', orderData);
                _this.WooCommerce.postAsync('orders', orderData).then(function (order) {
                    // console.log(JSON.parse(order.body));
                    var response = (JSON.parse(order.body));
                    _this.storage.set('order', response);
                    _this.alertCtrl.create({
                        title: "Order Placed Successfully",
                        message: "Your order has been placed successfully. Your order number is " + response.id,
                        buttons: [{
                                text: 'Proceed To Payment',
                                handler: function () {
                                    // this.navCtrl.setRoot(HomePage);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__card_payment_card_payment__["a" /* CardPaymentPage */]);
                                }
                            }]
                    }).present();
                });
            });
        }
    };
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checkout',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/checkout/checkout.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <form #checkoutForm="ngForm">\n\n      <ion-item-divider color="light">Personal Details</ion-item-divider>\n\n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-input type="text" #newOrder_first_name="ngModel" name="newOrder_first_name" [(ngModel)]="newOrder.first_name" required></ion-input>\n      </ion-item>\n      <ion-item class="form-error-container" no-lines *ngIf="newOrder_first_name.invalid && newOrder_first_name.touched">\n        <span class="form-error">\n          first name cannot be empty\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Last Name</ion-label>\n        <ion-input type="text" #newOrder_last_name="ngModel" name="newOrder_last_name" [(ngModel)]="newOrder.last_name" required></ion-input>\n      </ion-item>\n      <ion-item class="form-error-container" no-lines *ngIf="newOrder_last_name.invalid && newOrder_last_name.touched">\n        <span class="form-error">\n          last name cannot be empty\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type="text" #newOrder_email="ngModel" name="newOrder_email" [(ngModel)]="newOrder.email" required></ion-input>\n      </ion-item>\n      <ion-item class="form-error-container" no-lines *ngIf="newOrder_email.invalid && newOrder_email.touched">\n        <span class="form-error">\n          email cannot be empty\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Username</ion-label>\n        <ion-input type="text" #newOrder_username="ngModel" name="newOrder_username" [(ngModel)]="newOrder.username" required></ion-input>\n      </ion-item>\n      <ion-item class="form-error-container" no-lines *ngIf="newOrder_username.invalid && newOrder_username.touched">\n        <span class="form-error">\n          username cannot be empty\n        </span>\n      </ion-item>\n\n      <ion-item-divider color="light">Billing Details</ion-item-divider>\n\n      <ion-item>\n        <ion-label>Address Line 1</ion-label>\n        <ion-textarea type="text" maxlength="80" #newOrder_billing_address_1="ngModel" name="newOrder_billing_address_1" [(ngModel)]="newOrder.billing.address_1"\n          required></ion-textarea>\n      </ion-item>\n      <ion-item class="form-error-container" no-lines *ngIf="newOrder_billing_address_1.invalid && newOrder_billing_address_1.touched">\n        <span class="form-error">\n          billing address cannot be empty\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Address Line 2</ion-label>\n        <ion-textarea type="text" maxlength="80" #newOrder_billing_address_2="ngModel" name="newOrder_billing_address_2" [(ngModel)]="newOrder.billing.address_2"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Country</ion-label>\n        <ion-select #newOrder_billing_country="ngModel" name="newOrder_billing_country" [(ngModel)]="newOrder.billing.country" required>\n          <ion-option value="United Kingdom">United Kingdom</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item class="form-error-container" no-lines *ngIf="newOrder_billing_country.invalid && newOrder_billing_country.touched">\n        <span class="form-error">\n          billing country cannot be empty\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-select #newOrder_billing_state="ngModel" name="newOrder_billing_state" [(ngModel)]="newOrder.billing.state" required>\n          <ion-option value="Liverpool">Liverpool</ion-option>\n          <ion-option value="North London">North London</ion-option>\n          <ion-option value="Accrington">Accrington</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item class="form-error-container" no-lines *ngIf="newOrder_billing_state.invalid && newOrder_billing_state.touched">\n        <span class="form-error">\n          billing state cannot be empty\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-input type="text" #newOrder_billing_city="ngModel" name="newOrder_billing_city" [(ngModel)]="newOrder.billing.city"\n          required></ion-input>\n      </ion-item>\n      <ion-item class="form-error-container" no-lines *ngIf="newOrder_billing_city.invalid && newOrder_billing_city.touched">\n        <span class="form-error">\n          billing city cannot be empty\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Postal Code</ion-label>\n        <ion-input type="number" #newOrder_billing_postcode="ngModel" name="newOrder_billing_postcode" [(ngModel)]="newOrder.billing.postcode"\n          required></ion-input>\n      </ion-item>\n      <ion-item class="form-error-container" no-lines *ngIf="newOrder_billing_postcode.invalid && newOrder_billing_postcode.touched">\n        <span class="form-error">\n          billing postcode cannot be empty\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Phone</ion-label>\n        <ion-input type="number" #newOrder_billing_phone="ngModel" name="newOrder_billing_phone" [(ngModel)]="newOrder.billing.phone"\n          required></ion-input>\n      </ion-item>\n      <ion-item class="form-error-container" no-lines *ngIf="newOrder_billing_phone.invalid && newOrder_billing_phone.touched">\n        <span class="form-error">\n          billing phone number cannot be empty\n        </span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Same Shipping Details</ion-label>\n        <ion-checkbox (ionChange)="setBillingToShipping()"></ion-checkbox>\n      </ion-item>\n\n      <ion-item-divider color="light" *ngIf="!billing_shipping_same">Shipping Details</ion-item-divider>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12>\n          <ion-item>\n            <ion-label>First Name</ion-label>\n            <ion-input type="text" #newOrder_shipping_first_name="ngModel" name="newOrder_shipping_first_name" [(ngModel)]="newOrder.shipping.first_name"\n              required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item class="form-error-container" no-lines *ngIf="newOrder_shipping_first_name.invalid && newOrder_shipping_first_name.touched">\n            shipping first name cannot be empty\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12>\n          <ion-item>\n            <ion-label>Last Name</ion-label>\n            <ion-input type="text" #newOrder_shipping_last_name="ngModel" name="newOrder_shipping_last_name" [(ngModel)]="newOrder.shipping.last_name"\n              required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item class="form-error-container" no-lines *ngIf="newOrder_shipping_last_name.invalid && newOrder_shipping_last_name.touched">\n            shipping last name cannot be empty\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12>\n          <ion-item>\n            <ion-label>Address Line 1</ion-label>\n            <ion-textarea type="text" maxlength="80" #newOrder_shipping_address_1="ngModel" name="newOrder_shipping_address_1" [(ngModel)]="newOrder.shipping.address_1"\n              required></ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item class="form-error-container" no-lines *ngIf="newOrder_billing_address_1.invalid && newOrder_shipping_address_1.touched">\n            shipping address cannot be empty\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12>\n          <ion-item>\n            <ion-label>Address Line 2</ion-label>\n            <ion-textarea type="text" maxlength="80" #newOrder_shipping_address_2="ngModel" name="newOrder_shipping_address_2" [(ngModel)]="newOrder.shipping.address_2"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12>\n          <ion-item>\n            <ion-label>Country</ion-label>\n            <ion-select #newOrder_shipping_country="ngModel" name="newOrder_shipping_country" [(ngModel)]="newOrder.shipping.country"\n              required>\n              <ion-option value="United Kingdom">United Kingdom</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item class="form-error-container" no-lines *ngIf="newOrder_shipping_country.invalid && newOrder_shipping_country.touched">\n            shipping country cannot be empty\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12>\n          <ion-item>\n            <ion-label>State</ion-label>\n            <ion-select #newOrder_shipping_state="ngModel" name="newOrder_shipping_state" [(ngModel)]="newOrder.shipping.state" required>\n              <ion-option value="United Kingdom">United Kingdom</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item class="form-error-container" no-lines *ngIf="newOrder_shipping_state.invalid && newOrder_shipping_state.touched">\n            shipping state cannot be empty\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12>\n          <ion-item>\n            <ion-label>City</ion-label>\n            <ion-input type="text" #newOrder_shipping_city="ngModel" name="newOrder_shipping_city" [(ngModel)]="newOrder.shipping.city"\n              required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item class="form-error-container" no-lines *ngIf="newOrder_shipping_city.invalid && newOrder_shipping_city.touched">\n            shipping city cannot be empty\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12>\n          <ion-item>\n            <ion-label>Postal Code</ion-label>\n            <ion-input type="text" #newOrder_shipping_postcode="ngModel" name="newOrder_shipping_postcode" [(ngModel)]="newOrder.shipping.postcode"\n              required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item class="form-error-container" no-lines *ngIf="newOrder_shipping_postcode.invalid && newOrder_shipping_postcode.touched">\n            shipping postcode cannot be empty\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row *ngIf="!billing_shipping_same">\n        <ion-col col-12>\n          <ion-item>\n            <ion-label>Phone</ion-label>\n            <ion-input type="number" #newOrder_shipping_phone="ngModel" name="newOrder_shipping_phone" [(ngModel)]="newOrder.shipping.phone"\n              required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item class="form-error-container" no-lines *ngIf="newOrder_shipping_phone.invalid && newOrder_shipping_phone.touched">\n            shipping phone number cannot be empty\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-item-divider color="light">Payment Details</ion-item-divider>\n\n      <ion-row>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label>Payment Method</ion-label>\n            <ion-select #newOrder_paymentMethod="ngModel" name="newOrder_paymentMethod" [(ngModel)]="paymentMethod" required>\n              <ion-option *ngFor="let p of paymentMethods" value="{{p.method_id}}">{{p.method_title}}</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item class="form-error-container" no-lines *ngIf="newOrder_paymentMethod.invalid && newOrder_paymentMethod.touched">\n            payment method cannot be empty\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button full color="primary" (click)="placeOrder()" [disabled]="!checkoutForm.form.valid">Place Order</button>\n</ion-footer>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details_product_details__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.searchQuery = "";
        this.products = [];
        this.page = 2;
        // console.log(this.navParams.get("searchQuery"));
        this.searchQuery = this.navParams.get("searchQuery");
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__({
            url: "https://blesscity.com",
            consumerKey: "ck_2acbdb539cac3a9a8cc6c2197d6c4cc7374f054f",
            consumerSecret: "cs_f0157128a4195e62e7295553402b56691d474ef7",
            version: 'wc/v2',
            wpAPI: true,
            queryStringAuth: true,
        });
        this.WooCommerce.getAsync('products?filter[q]=' + this.searchQuery).then(function (searchData) {
            _this.products = JSON.parse(searchData.body);
        });
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        this.WooCommerce.getAsync('products?filter[q]=' + this.searchQuery + '&page=' + this.page).then(function (searchData) {
            _this.products = _this.products.concat(JSON.parse(searchData.body));
            if (JSON.parse(searchData.body).length < 10) {
                event.enable(false);
                _this.toastCtrl.create({
                    message: 'No more products',
                    duration: 5000
                }).present();
            }
            event.complete();
            _this.page++;
        });
    };
    SearchPage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_details_product_details__["a" /* ProductDetailsPage */], { "product": product });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/search/search.html"*/'<ion-header color="danger">\n\n  <ion-navbar color="danger">\n    <ion-title>Search: {{searchQuery}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let product of products" text-wrap (click)="openProductPage(product)">\n      <ion-thumbnail item-left>\n        <img [src]="product[\'images\'][0][\'src\']" alt="">\n      </ion-thumbnail>\n\n      <h2>{{product.name}}</h2>\n\n      <p>\n        <span [innerHTML]="product.description.substr(0, 25) + \'...\'"></span>\n        <span [innerHTML]="product.price_html"></span>\n      </p>\n\n      <button ion-button icon clear item-right>\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_by_category_products_by_category__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_details_product_details__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubCategoriesPage = /** @class */ (function () {
    function SubCategoriesPage(navCtrl, navParams, loadingCtrl, platform, zone, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.products = [];
        this.subCategories = [];
        this._showList = false;
        this._showGrid = true;
        this.showToggle = false;
        platform.registerBackButtonAction(function () {
        }, 1);
        this.loader = this.loadingCtrl.create({
            cssClass: 'transparent',
        });
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.category = this.navParams.get('category');
        // console.log(this.category);
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://blesscity.com",
            consumerKey: "ck_2acbdb539cac3a9a8cc6c2197d6c4cc7374f054f",
            consumerSecret: "cs_f0157128a4195e62e7295553402b56691d474ef7",
            version: 'wc/v2',
            wpAPI: true,
            queryStringAuth: true,
        });
        this.page = 1;
    }
    SubCategoriesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SubCategoriesPage');
        this.loader.present();
        this.WooCommerce.getAsync('products/categories?per_page=100').then(function (data) {
            var temp = JSON.parse(data.body);
            // console.log(temp);
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].parent === _this.category.id) {
                    _this.subCategories.push(temp[i]);
                }
            }
            // console.log(this.products);
            _this.showToggle = true;
            // console.log(this.subCategories);
            if (_this.subCategories.length < 1) {
                _this.loader.present();
                _this.WooCommerce.getAsync('products?category=' + _this.category.id).then(function (products) {
                    _this.zone.run(function () {
                        _this.products = JSON.parse(products.body);
                    });
                    // console.log(this.products);
                    _this.showToggle = true;
                    _this.page++;
                    _this.loader.dismiss();
                });
            }
            _this.loader.dismiss();
        }, function (err) {
            console.log(err);
            _this.loader.dismiss();
        });
    };
    ;
    SubCategoriesPage.prototype.ionViewDidLeave = function () {
        this.loader.dismiss();
    };
    SubCategoriesPage.prototype.openProdByCat = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_by_category_products_by_category__["a" /* ProductsByCategoryPage */], { 'category': category });
    };
    SubCategoriesPage.prototype.showGrid = function () {
        this._showList = false;
        this._showGrid = true;
    };
    SubCategoriesPage.prototype.showList = function () {
        this._showGrid = false;
        this._showList = true;
    };
    SubCategoriesPage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__product_details_product_details__["a" /* ProductDetailsPage */], { "product": product });
    };
    SubCategoriesPage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        // console.log(this.page);
        this.WooCommerce.getAsync('products?category=' + this.category.id + '&page=' + this.page).then(function (data) {
            _this.products = _this.products.concat(JSON.parse(data.body));
            if (JSON.parse(data.body).length < 10) {
                event.enable(false);
                _this.toastCtrl.create({
                    message: 'No more products',
                    duration: 5000
                }).present();
            }
            event.complete();
            _this.page++;
        });
    };
    SubCategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-categories',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/sub-categories/sub-categories.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{category.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-list *ngIf="subCategories.length != 0">\n    <ion-item *ngFor="let category of subCategories" (click)="openProdByCat(category)">\n      <ion-avatar item-start>\n        <img [src]="category[\'image\']?.src" *ngIf="category.image != null">\n        <img src="assets/imgs/shop-icon.png" alt="" *ngIf="category.image === null">\n      </ion-avatar>\n      <h2 [innerHTML]=category.name></h2>\n      <button ion-button icon clear item-end>\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <!-- <ion-grid *ngIf="subCategories.length == 0 && products.length >= 1"> -->\n  <ion-grid *ngIf="products" class="product-container">\n    <ion-row align-items-end *ngIf="showToggle">\n      <ion-col col-6 offset-6 class="toggle-container">\n        <button ion-button outline icon-only [ngClass]="{\'active\': _showList}" (click)="showList()">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <button ion-button outline icon-only [ngClass]="{\'active\': _showGrid}" (click)="showGrid()">\n          <ion-icon name="apps"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="_showGrid">\n      <ion-col col-6 *ngFor="let product of products" text-wrap (click)="openProductPage(product)">\n        <ion-card>\n          <img [src]="product[\'images\'][\'0\'].src" alt="">\n          <div class="row">\n            <div class="col">\n              <h4 [innerHTML]="product.name"></h4>\n              <p [innerHTML]="product.price_html"></p>\n              <ion-row>\n                <ion-col>\n                  <p *ngIf="product.in_stock === true" class="green" style="font-weight: normal !important;">\n                    In Stock\n                  </p>\n                </ion-col>\n                <ion-col style="padding-right: 5px; text-align: right">\n                  <ion-icon name="md-heart" item-right></ion-icon>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n    <ion-list *ngIf="_showList">\n      <ion-item *ngFor="let product of products" text-wrap (click)="openProductPage(product)" class="item">\n        <ion-thumbnail item-start>\n          <img [src]="product[\'images\'][\'0\'].src" alt="">\n        </ion-thumbnail>\n        <h4 [innerHTML]="product.name"></h4>\n        <p [innerHTML]="product.price_html"></p>\n      </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/sub-categories/sub-categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], SubCategoriesPage);
    return SubCategoriesPage;
}());

//# sourceMappingURL=sub-categories.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderDetailPage = /** @class */ (function () {
    function OrderDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.order = this.navParams.get('order');
        // console.log(this.order);
    }
    OrderDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailPage');
    };
    OrderDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-detail',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/order-detail/order-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Order #{{order.id}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item-group>\n    <ion-item-divider color="light">Order Details</ion-item-divider>\n\n    <ion-item>\n      <h4>Order Number</h4>\n      <p item-end>{{order.id}}</p>\n    </ion-item>\n\n    <ion-item>\n      <h4>Date</h4>\n      <p item-end>{{order.date_created | date: \'medium\'}}</p>\n    </ion-item>\n\n    <ion-item>\n      <h4>Payment Method</h4>\n      <p item-end>{{order.payment_method}}</p>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Product Details</ion-item-divider>\n    <ng-container *ngFor="let item of order[\'line_items\']">\n      <ion-item>\n        <!-- <h4>Product Name</h4> -->\n        <p item-end style="font-weight: bold;">{{item.name}}</p>\n      </ion-item>\n      <ion-item>\n        <h4>Price</h4>\n        <p item-end>&pound;{{item.price}}</p>\n      </ion-item>\n      <ion-item>\n        <h4>Quantity</h4>\n        <p item-end>{{item.quantity}}</p>\n      </ion-item>\n      <ion-item>\n        <h4>SubTotal</h4>\n        <p item-end>&pound;{{item.total}}</p>\n      </ion-item>\n    </ng-container>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Billing Address</ion-item-divider>\n    <ion-item>\n      <p>{{order[\'billing\'].first_name}} {{order[\'billing\'].last_name}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{order[\'billing\'].email}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{order[\'billing\'].phone}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{order[\'billing\'].address_1}}, {{order[\'billing\'].city}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{order[\'billing\'].state}}, {{order[\'billing\'].country}}</p>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Shipping Address</ion-item-divider>\n    <ion-item>\n      <p>{{order[\'shipping\'].first_name}} {{order[\'shipping\'].last_name}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{order[\'shipping\'].email}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{order[\'shipping\'].phone}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{order[\'shipping\'].address_1}}, {{order[\'shipping\'].city}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{order[\'shipping\'].state}}, {{order[\'shipping\'].country}}</p>\n    </ion-item>\n  </ion-item-group>\n\n</ion-content>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/order-detail/order-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OrderDetailPage);
    return OrderDetailPage;
}());

//# sourceMappingURL=order-detail.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountDetailsPage = /** @class */ (function () {
    function AccountDetailsPage(navCtrl, navParams, platform, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        platform.registerBackButtonAction(function () {
        }, 1);
        this.loader = this.loadingCtrl.create({
            cssClass: 'transparent',
        });
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://blesscity.com",
            consumerKey: "ck_2acbdb539cac3a9a8cc6c2197d6c4cc7374f054f",
            consumerSecret: "cs_f0157128a4195e62e7295553402b56691d474ef7",
            version: 'wc/v2',
            wpAPI: true,
            queryStringAuth: true,
        });
        this.storage.ready().then(function () {
            _this.storage.get("loggedUser").then(function (user) {
                _this.user = user[0];
                // console.log(this.user);
            });
        });
    }
    AccountDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountDetailsPage');
    };
    AccountDetailsPage.prototype.ionViewDidEnter = function () {
    };
    AccountDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account-details',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/account-details/account-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Account Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content *ngIf="user">\n  <ion-item-group>\n    <br>\n    <ion-item-divider color="light">User Details</ion-item-divider>\n    <ion-item>\n      <p>{{user.first_name}} {{user.last_name}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{user.username}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{user.email}}</p>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Billing Address</ion-item-divider>\n    <ion-item>\n      <p>{{user[\'billing\'].first_name}} {{user[\'billing\'].last_name}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{user[\'billing\'].email}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{user[\'billing\'].phone}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{user[\'billing\'].address_1}}, {{user[\'billing\'].city}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{user[\'billing\'].state}}, {{user[\'billing\'].country}}</p>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Shipping Address</ion-item-divider>\n    <ion-item>\n      <p>{{user[\'shipping\'].first_name}} {{user[\'shipping\'].last_name}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{user[\'shipping\'].email}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{user[\'shipping\'].phone}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{user[\'shipping\'].address_1}}, {{user[\'shipping\'].city}}</p>\n    </ion-item>\n    <ion-item>\n      <p>{{user[\'shipping\'].state}}, {{user[\'shipping\'].country}}</p>\n    </ion-item>\n  </ion-item-group>\n\n</ion-content>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/account-details/account-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AccountDetailsPage);
    return AccountDetailsPage;
}());

//# sourceMappingURL=account-details.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrandNewPage = /** @class */ (function () {
    function BrandNewPage(navCtrl, navParams, loadingCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.products = [];
        platform.registerBackButtonAction(function () {
        }, 1);
        this.loader = this.loadingCtrl.create({
            cssClass: 'transparent',
        });
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://blesscity.com",
            consumerKey: "ck_2acbdb539cac3a9a8cc6c2197d6c4cc7374f054f",
            consumerSecret: "cs_f0157128a4195e62e7295553402b56691d474ef7",
            version: 'wc/v2',
            wpAPI: true,
            queryStringAuth: true,
        });
    }
    BrandNewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad BrandNewPage');
        this.loader.present();
        this.WooCommerce.getAsync('products').then(function (data) {
            _this.products = JSON.parse(data.body);
            // console.log(this.products);
            _this.loader.dismiss();
        }, function (err) {
            console.log(err);
            _this.loader.dismiss();
        });
    };
    BrandNewPage.prototype.ionViewDidLeave = function () {
        this.loader.dismiss();
    };
    BrandNewPage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { "product": product });
    };
    BrandNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-brand-new',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/brand-new/brand-new.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Brand New</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let product of products" text-wrap (click)="openProductPage(product)">\n        <ion-card>\n          <img [src]="product[\'images\'][\'0\'].src" alt="">\n          <div class="row">\n            <div class="col">\n              <h4 [innerHTML]="product.name"></h4>\n              <p [innerHTML]="product.price_html"></p>\n              <ion-row>\n                <ion-col>\n                  <p *ngIf="product.in_stock === true" class="green" style="font-weight: normal !important;">\n                    In Stock\n                  </p>\n                </ion-col>\n                <ion-col style="padding-right: 5px; text-align: right">\n                  <ion-icon name="md-heart" item-right></ion-icon>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/brand-new/brand-new.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], BrandNewPage);
    return BrandNewPage;
}());

//# sourceMappingURL=brand-new.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_by_category_products_by_category__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categories_categories__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_woocommerce_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__terms_terms__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shipping_shipping__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var Menu = /** @class */ (function () {
    function Menu(navCtrl, navParams, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.categories = [];
        this.homePage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        // this.homePage = LoginPage;
        this.user = {};
        this.userData = {};
        this.categories = [];
        this.menFashion = [];
        this.electronics = [];
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_9_woocommerce_api__({
            url: "https://blesscity.com",
            consumerKey: "ck_2acbdb539cac3a9a8cc6c2197d6c4cc7374f054f",
            consumerSecret: "cs_f0157128a4195e62e7295553402b56691d474ef7",
            version: 'wc/v2',
            wpAPI: true,
            queryStringAuth: true,
        });
    }
    Menu.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
        // this.getUser();
    };
    Menu.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("user").then(function (user) {
                if (user != null) {
                    // console.log(user);
                    // console.log("user logged in");
                    _this.user = user;
                    // console.log(this.user);
                    _this.loggedIn = true;
                    _this.WooCommerce.getAsync('customers?email=' + _this.user.user_email).then(function (res) {
                        _this.userData = (JSON.parse(res.body));
                        // console.log(this.userData[0]);
                        // console.log(this.userData);
                        var loggedUser = _this.userData[0];
                        _this.storage.set('loggedUser', loggedUser);
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    console.log("no user found");
                    _this.user = {};
                    _this.loggedIn = false;
                }
            });
        });
    };
    Menu.prototype.openCategoryPage = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__products_by_category_products_by_category__["a" /* ProductsByCategoryPage */], { 'category': category });
    };
    Menu.prototype.openHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ;
    Menu.prototype.openShop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__categories_categories__["a" /* CategoriesPage */]);
    };
    ;
    Menu.prototype.openAccount = function () {
        var _this = this;
        this.storage.get("user").then(function (data) {
            if (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__account_account__["a" /* AccountPage */]);
            }
            else if (!data) {
                _this.storage.get("loggedUser").then(function (data) {
                    if (data) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__account_account__["a" /* AccountPage */]);
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], { next: __WEBPACK_IMPORTED_MODULE_10__account_account__["a" /* AccountPage */] });
                    }
                });
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], { next: __WEBPACK_IMPORTED_MODULE_10__account_account__["a" /* AccountPage */] });
            }
        });
    };
    ;
    Menu.prototype.openTerms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__terms_terms__["a" /* TermsPage */]);
    };
    Menu.prototype.openShipping = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__shipping_shipping__["a" /* ShippingPage */]);
    };
    Menu.prototype.openPage = function (pageName) {
        if (pageName == "signup") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
        }
        if (pageName == 'login') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
        if (pageName == 'cart') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
            modal.present();
        }
        if (pageName == 'logout') {
            this.storage.remove('user');
            this.storage.remove('cart');
            this.storage.clear();
            this.user = {};
            this.loggedIn = false;
        }
    };
    Menu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/menu/menu.html"*/'<div *ngIf="showSplash" class="splash">\n  <div class="spinner">\n    <div class="double-bounce1"></div>\n    <div class="double-bounce2"></div>\n  </div>\n</div>\n\n<ion-menu [content]="content">\n\n  <ion-content>\n    <ion-card no-padding style="margin: 0; width: 100%; height: 250px;">\n      <img src="assets/imgs/city third.png" alt="">\n    </ion-card>\n\n    <ion-list>\n      <ion-item menuClose (click)="openHome()">\n        <button ion-button icon clear item-left>\n          <ion-icon class="side-icon" name="md-home"></ion-icon>\n        </button>\n        <h2 class="side-title">Home</h2>\n      </ion-item>\n\n      <ion-item menuClose (click)="openShop()">\n        <button ion-button icon clear item-left>\n          <ion-icon class="side-icon" name="ios-briefcase"></ion-icon>\n        </button>\n        <h2 class="side-title">Shop</h2>\n      </ion-item>\n\n      <ion-item menuClose (click)="openAccount()">\n        <button ion-button icon clear item-left>\n          <ion-icon class="side-icon" name="md-person"></ion-icon>\n        </button>\n        <h2 class="side-title">Account</h2>\n      </ion-item>\n      \n      <ion-item menuClose (click)="openTerms()">\n        <button ion-button icon clear item-left>\n          <ion-icon class="side-icon" name="document"></ion-icon>\n        </button>\n        <h2 class="side-title">Terms of Use</h2>\n      </ion-item>\n\n      <ion-item menuClose (click)="openShipping()">\n        <button ion-button icon clear item-left>\n          <ion-icon class="side-icon" name="swap"></ion-icon>\n        </button>\n        <h2 class="side-title">Shipping and Returns</h2>\n      </ion-item>\n\n      <ion-item (click)="openPage(\'logout\')" menuClose *ngIf="loggedIn">\n        <button ion-button icon clear item-left>\n          <ion-icon class="side-icon" name="log-out"></ion-icon>\n        </button>\n        <h2 class="side-title">Logout</h2>\n      </ion-item>\n\n\n      <!-- <ion-item *ngFor="let category of categories" text-wrap menuClose (click)="openCategoryPage(category)">\n        <h2 [innerHTML]=category.name></h2>\n      </ion-item> -->\n\n      <!-- <ion-item-divider color="danger">Account</ion-item-divider> -->\n\n      <!-- <ion-item (click)="openPage(\'signup\')" menuClose *ngIf="!loggedIn">\n        <h2>Sign Up</h2>\n        <p>For a new account</p>\n      </ion-item> -->\n\n      <!-- <ion-item (click)="openPage(\'login\')" menuClose *ngIf="!loggedIn">\n        <h2>Login</h2>\n        <p>Using email and password</p>\n      </ion-item> -->\n\n      <!-- <ion-item (click)="openPage(\'cart\')" menuClose *ngIf="loggedIn">\n        <h2>Your Cart</h2>\n        <p>Check items in your cart</p>\n      </ion-item> -->\n\n      <!-- <ion-item (click)="openPage(\'logout\')" menuClose *ngIf="loggedIn">\n        <h2>Logout</h2>\n        <p>of your Account</p>\n      </ion-item> -->\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="homePage"></ion-nav>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], Menu);
    return Menu;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/terms/terms.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Terms of Use</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p class="title">Terms of Use</p>\n  <p class="text">Last updated: March 16, 2016</p>\n  <p class="text">Terms and Condition</p>\n\n  <p class="text"><b>cityShop</b> It sets out the terms under which we provide you with the downloadable “Paper” Application (the “App” or “Application”), and the terms that apply when you use our “Store” Service – such as when you upload content to the collaborative, online “Store” platform we make available through the App (the “Store”), or when you collaborate with or view the content of other store users. Our “Services” mean the App, Store, <b>cityShop</b> . and any related services or digital tools we offer to you (excluding any physical goods we offer, such as Women’s wear, Men’s wear and Baby, kids toys. Note that orders of products on <b>cityShop</b>. are governed by our Terms of Sale.</p>\n\n  <p class="text">Please read this Agreement, because it’s important. We’ve tried to make it as clear as possible, and to create terms which are fair and beneficial to the community of creators who use our products. If you have concerns or questions about the Terms of Use, please contact us at <em>info@blesscity.com</em>. If you have general support questions, please contact us at <em>info@blesscity.com</em>.</p>\n\n  <p class="text"><b>You must be Eighteen years of age or older to order from our stores. If you are not eighteen years old, do not use or order products from our store.</b></p>\n\n  <p class="sub-title">1. Acceptance of our Terms</p>\n\n  <p class="text">By visiting the website <b>cityShop</b>, viewing, accessing or otherwise using any of the services or information created, collected, compiled or submitted to <b>cityShop</b> you agree to be bound by the following Terms and Conditions of Service. If you do not want to be bound by our Terms your only option is not to visit, view or otherwise use the services of <b>cityShop</b>. You understand, agree and acknowledge that these Terms constitute a legally binding agreement between you and <b>cityShop</b> and that your use of <b>cityShop</b> products shall indicate your conclusive acceptance of this agreement.</p>\n\n  <p class="sub-title">2. Provision of Services</p>\n\n  <p class="text">You agree and acknowledge that <b>cityShop</b> is entitled to modify, improve or discontinue any of its services at its sole discretion and without notice to you even if it may result in you being prevented from accessing any information contained in it. Furthermore, you agree and acknowledge that <b>cityShop</b> is entitled to provide services to you through subsidiaries or affiliated entities.</p>\n\n  <p class="sub-title">3. Proprietary Rights</p>\n\n  <p class="text">You acknowledge and agree that <b>cityShop</b> websites may contain proprietary and confidential information including trademarks, service marks and patents protected by intellectual property laws and international intellectual property treaties. <b>cityShop</b> authorises you to view and make a single copy of portions of its content for offline, personal, non-commercial use.</p>\n\n  <p class="text">Our content may not be sold, reproduced, or distributed without our written permission. Any third-party trademarks, service marks and logos are the property of their respective owners. Any further rights not specifically granted herein are reserved.</p>\n\n  <p class="sub-title">4. Submitted Content</p>\n\n  <p class="text">When you submit content to <b>cityShop</b>  websites you simultaneously grant us an irrevocable, worldwide, royalty free license to publish, display, modify, distribute and syndicate your content worldwide. You confirm and warrant that you have the required authority to grant the above license to <b>cityShop</b></p>\n\n  <p class="sub-title">5. Termination of Agreement</p>\n\n  <p class="text">The Terms of this agreement will continue to apply in perpetuity until terminated by either party without notice at any time for any reason. Terms that are to continue in perpetuity shall be unaffected by the termination of this agreement.</p>\n\n  <p class="sub-title">6. Disclaimer of Warranties</p>\n\n  <p class="text">You understand and agree that your use of <b>cityShop</b> websites is entirely at your own risk and that our services are provided As Is and As Available. <b>cityShop</b>  does not make any express or implied warranties, endorsements or representations whatsoever as to the operation of the websites, information, content, materials, or products. This shall include, but not be limited to, implied warranties of merchantability and fitness for a particular purpose and non-infringement, and warranties that access to or use of the service will be uninterrupted or error-free or that defects in the service will be corrected.</p>\n\n  <p class="text">Since this product is a physical product, you are covered by our refund policy if you did not receive your order on or after 60days. However, full refunds may not apply under these circumstances: If you gave wrong shipping address, not cleared by custom or natural disasters which is beyond <b>cityShop</b> control.</p>\n\n  <p class="sub-title">7. Limitation of Liability</p>\n\n  <p class="text">You understand and agree that <b>cityShop</b>  and any of its subsidiaries or affiliates shall in no event be liable for any direct, indirect, incidental, consequential, or exemplary damages. This shall include, but not be limited to damages for loss of profits, business interruption, business reputation or goodwill, loss of programs or information or other intangible loss arising out of the use of or the inability to use the service, or information, or any permanent or temporary cessation of such service or access to information, or the deletion or corruption of any content or information, or the failure to store any content or information.</p>\n\n  <p class="text">The above limitation shall apply whether or not <b>cityShop</b> has been advised of or should have been aware of the possibility of such damages. In jurisdictions where the exclusion or limitation of liability for consequential or incidental damages is not allowed the liability of <b>cityShop</b> is limited to the greatest extent permitted by law.</p>\n\n  <p class="sub-title">8. External Content</p>\n\n  <p class="text"><b>cityShop</b> websites may include hyperlinks to third-party content, advertising or websites, sell products from third party vendors, or may recruit affiliates to refer buyers. You acknowledge and agree that <b>cityShop</b> is not responsible for and does not endorse any advertising, products or resource available from such resources or websites.</p>\n\n  <p class="sub-title">9. Jurisdiction</p>\n\n  <p class="text">You expressly understand and agree to submit to the personal and exclusive jurisdiction of the courts of the country, state, province or territory determined solely by <b>cityShop</b> to resolve any legal matter arising from this agreement or related to your use of <b>cityShop</b> websites. If the court of law having jurisdiction, rules that any provision of the agreement is invalid, then that provision will be removed from the Terms and the remaining Terms will continue to be valid.</p>\n\n  <p class="sub-title">10. Entire Agreement</p>\n\n  <p class="text">You understand and agree that the above Terms constitute the entire general agreement between you and <b>cityShop</b>. You may be subject to additional Terms and conditions when you use, purchase or access other products,services, affiliate services or third-party content or material.</p>\n\n  <p class="sub-title">11. Changes to the Terms</p>\n\n  <p class="text"><b>cityShop</b> reserves the right to modify these Terms from time to time at our sole discretion and without any notice. Changes to our Terms become effective on the date they are posted and your continued use of  <b>cityShop</b> websites after any changes to Terms will signify your agreement to be bound by them.</p>\n\n  <p class="sub-title">12. Contact.</p>\n\n  <p class="text">You may contact us at the following address: <b>cityShop</b> <em>info@blesscity.com</em></p>\n</ion-content>\n'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShippingPage = /** @class */ (function () {
    function ShippingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShippingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShippingPage');
    };
    ShippingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shipping',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/shipping/shipping.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Shipping and Returns</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3 class="title">Shipping and Return Policies</h3>\n  <p class="text">Thanks for shopping at <b>CityShop</b></p>\n  <p class="text">We believe in our product and value the happiness of our fans and customers.</p>\n  <p class="text">Please email us if you are not happy with any of our products and we will be glad to exceed your expectations. We are reasonable people and will try our best to work something out. If you are not completely happy with your new ordered product from our online store, please send it back to us within 15 days for a full refund.</p>\n  <p class="text">If you are not entirely satisfied with your purchase, we’re here to help.</p>\n\n  <p class="sub-title">Returns</p>\n  <p class="text">You have 15 calendar days to return an item from the date you received it. To be eligible for a return:</p>\n\n  <ul>\n    <li>\n      <p class="text">Your item must be unused and in the same condition that you received it.</p>\n    </li>\n    <li>\n      <p class="text">Your item must be in the original packaging.</p>\n    </li>\n    <li>\n      <p class="text">Your item needs to have the receipt or proof of purchase.</p>\n    </li>\n  </ul>\n\n  <p class="sub-title">Refunds</p>\n  <p class="text">Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</p>\n  <p class="text">If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your credit card issuer’s policies.</p>\n\n  <p class="sub-title">Shipping</p>\n  <p class="text">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>\n\n  <p class="sub-title">No Refunds</p>\n  <p class="text">You will not receive refunds if; You did not receive your orders due to factors caused by you or factors beyond <b>cityShop</b> control, like:</p>\n\n  <ul>\n    <li>\n      <p class="text">Wrong shipping address</p>\n    </li>\n    <li>\n      <p class="text">Not cleared by your local custom</p>\n    </li>\n    <li>\n      <p class="text">Natural disaster which led to the delay</p>\n    </li>\n  </ul>\n  \n  <p class="text">Do send your refund request via email to <em>info@blesscity.com</em> or better still use our contact us page.</p>\n\n</ion-content>\n'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/shipping/shipping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ShippingPage);
    return ShippingPage;
}());

//# sourceMappingURL=shipping.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(381);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__yellowspot_ng_truncate__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_text_mask__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_product_details_product_details__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cart_cart__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_checkout_checkout__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_search_search__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_card_payment_card_payment__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_products_by_category_products_by_category__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_categories_categories__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_register_register__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_account_account__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_confirmation_confirmation__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_brand_new_brand_new__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_sub_categories_sub_categories__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_shipping_shipping__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_terms_terms__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_order_detail_order_detail__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_account_details_account_details__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* Menu */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_card_payment_card_payment__["a" /* CardPaymentPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_products_by_category_products_by_category__["a" /* ProductsByCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_brand_new_brand_new__["a" /* BrandNewPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_sub_categories_sub_categories__["a" /* SubCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_shipping_shipping__["a" /* ShippingPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_account_details_account_details__["a" /* AccountDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/card-payment/card-payment.module#CardPaymentModule', name: 'CardPaymentPage', segment: 'card-payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shop/shop.module#ShopPageModule', name: 'ShopPage', segment: 'shop', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__yellowspot_ng_truncate__["a" /* TruncateModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_text_mask__["TextMaskModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* Menu */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_card_payment_card_payment__["a" /* CardPaymentPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_products_by_category_products_by_category__["a" /* ProductsByCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_brand_new_brand_new__["a" /* BrandNewPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_sub_categories_sub_categories__["a" /* SubCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_shipping_shipping__["a" /* ShippingPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_account_details_account_details__["a" /* AccountDetailsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe__["a" /* Stripe */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    // user_email: string;
    function MyApp(platform, nativeStorage, statusBar, splashScreen) {
        this.platform = platform;
        this.nativeStorage = nativeStorage;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.showSplash = true;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* Menu */];
        this.user = {};
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // let env = this;
            // this.nativeStorage.getItem('user')
            //   .then( function (data) {
            //     env.nav.push(HomePage);
            //     env.splashScreen.hide();
            //   }, function (err) {
            //     env.nav.push(LoginPage);
            //     env.splashScreen.hide();
            //   });
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/app/app.html"*/'<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/register/register.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmationPage = /** @class */ (function () {
    function ConfirmationPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage.get('order').then(function (order) {
            _this.order = order;
            // console.log(this.order);
        });
    }
    ConfirmationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmationPage');
    };
    ConfirmationPage.prototype.continue = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ConfirmationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirmation',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/confirmation/confirmation.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Order Confirmation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-card class="truck-container" padding>\n        <img src="../../assets/imgs/shipped.png" alt="">\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-card class="text-container">\n        <h1>Thank you for your purchase!</h1>\n        <p>Your order is complete, you will receive an email with your order details shortly.</p>\n        <p class="orderNo">Order# <span class="number"> {{order?.number}}</span></p>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button full color="primary" class="continue" (click)="continue()">Continue Shopping</button>\n</ion-footer>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/confirmation/confirmation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ConfirmationPage);
    return ConfirmationPage;
}());

//# sourceMappingURL=confirmation.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(navCtrl, navParams, storage, toastCtrl, modalCtrl, fb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.size = [];
        this.color = [];
        this.limit = 250;
        this.truncating = true;
        this.product = this.navParams.get('product');
        this.productPrice = parseFloat(this.product.price);
        // console.log(this.product);
        if (this.product.attributes) {
            // console.log(this.product.attributes);
            this.product.attributes.forEach(function (item) {
                if (item.name === 'Size') {
                    // console.log(item.options);
                    if (item.options.length > 1) {
                        for (var i = 0; i < item.options.length; i++) {
                            _this.size.push(item.options[i]);
                            // console.log(item.options[i]);
                        }
                        // console.log(this.size);
                    }
                }
                ;
                if (item.name === 'Color') {
                    // console.log(item.options);
                    if (item.options.length > 1) {
                        for (var j = 0; j < item.options.length; j++) {
                            _this.color.push(item.options[j]);
                            // console.log(item.options[j]);
                        }
                        // console.log(this.color);
                    }
                }
            });
        }
        this.productForm = this.fb.group({
            qty: ['1', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            size: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            color: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    ProductDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailsPage');
    };
    ProductDetailsPage.prototype.addToCart = function (product) {
        // console.log(product);
        var _this = this;
        this.storage.get('cart').then(function (data) {
            if (data == null || data == undefined || data.length == 0) {
                data = [];
                data.push({
                    "product": product,
                    "amount": parseFloat(product.price),
                    "qty": parseInt(_this.productForm.controls['qty'].value),
                    "size": _this.productForm.controls['size'].value,
                    "color": _this.productForm.controls['color'].value,
                });
                _this.storage.set("cart", data).then(function () {
                    console.log("cart updated");
                    // console.log(data);
                    _this.toastCtrl.create({
                        message: "Cart Updated",
                        position: 'bottom',
                        duration: 3000,
                    }).present();
                });
            }
            else {
                data.push({
                    "product": product,
                    "amount": parseFloat(product.price),
                    "qty": parseInt(_this.productForm.controls['qty'].value),
                    "size": _this.productForm.controls['size'].value,
                    "color": _this.productForm.controls['color'].value,
                });
                _this.storage.set("cart", data).then(function () {
                    console.log("cart updated");
                    // console.log(data);
                    _this.toastCtrl.create({
                        message: "Cart Updated",
                        position: 'bottom',
                        duration: 3000,
                    }).present();
                });
            }
        });
    };
    ProductDetailsPage.prototype.openCart = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]).present();
    };
    ProductDetailsPage.prototype.getQty = function (value) {
        this.quantity = value;
        this.getPrice();
    };
    ProductDetailsPage.prototype.getPrice = function () {
        this.productPrice = this.quantity * parseFloat(this.product.price);
        // console.log(this.productPrice);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProductDetailsPage.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ProductDetailsPage.prototype, "limit", void 0);
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-details',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/product-details/product-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title [innerHTML]="product.price_html"></ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        <h4 [innerHTML]="product.name"></h4>\n        <p class="tit" [innerHTML]="product.price_html"></p>\n      </ion-card-title>\n\n      <ion-card style="box-shadow: none">\n        <ion-slides autoplay="3000">\n          <ion-slide *ngFor="let image of product.images">\n            <img [src]="image.src" alt="">\n          </ion-slide>\n        </ion-slides>\n      </ion-card>\n\n      <form [formGroup]="productForm" novalidate (ngSubmit)="addToCart(product)">\n        <ion-list>\n          <ion-item *ngIf="size.length > 1">\n            <ion-label>Size</ion-label>\n            <ion-select formControlName="size" id="size">\n              <ion-option *ngFor="let s of size">{{s}}</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item *ngIf="color.length > 1">\n            <ion-label>Color</ion-label>\n            <ion-select formControlName="color" id="color">\n              <ion-option *ngFor="let c of color">{{c}}</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Quantity</ion-label>\n            <ion-select formControlName="qty" id="qty">\n              <ion-option [value]="1" (ionSelect)="getQty($event)">1</ion-option>\n              <ion-option [value]="2" (ionSelect)="getQty($event)">2</ion-option>\n              <ion-option [value]="3" (ionSelect)="getQty($event)">3</ion-option>\n              <ion-option [value]="4" (ionSelect)="getQty($event)">4</ion-option>\n              <ion-option [value]="5" (ionSelect)="getQty($event)">5</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-chip style="width: 100%; text-align: center; background-color: rgba(54, 53, 99, 0.5)">\n            <ion-label color="primary">Payment options are selectable in checkout</ion-label>\n          </ion-chip>\n\n          <ion-row class="price-container">\n            <ion-col>\n              <h4 class="total-text">Total</h4>\n            </ion-col>\n          </ion-row>\n          <ion-row class="price-container">\n            <ion-col>\n              <h4 [innerHTML]="product.price_html" class="total-cost"></h4>\n            </ion-col>\n          </ion-row>\n\n          <button ion-button icon-left block outline color="primary" (click)="addToCart(product)" class="buy-button">\n            <ion-icon name="basket"></ion-icon>\n            Add to cart for &pound;<span [innerHTML]="productPrice | number : \'1.2-2\'"></span>\n            <!-- Add to cart for &nbsp;<span [innerHTML]="product.price_html"></span> -->\n          </button>\n\n          <button ion-button icon-left block clear color="secondary">\n            <ion-icon name="md-heart"></ion-icon>\n            Save for later\n          </button>\n        </ion-list>\n      </form>\n    </ion-card-content>\n\n    <ion-card-content>\n      <ion-card-title>\n        <ion-row>\n          <ion-col>\n            <h4>Description</h4>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngIf="truncating && product.description.length > limit">\n            <p [innerHTML]="product.description | truncate : limit"></p>\n            <button ion-button block color="light" (click)="truncating = false">\n              show more\n            </button>\n          </ion-col>\n          <ion-col *ngIf="!truncating && product.description.length > limit">\n            <p [innerHTML]="product.description"></p>\n            <button ion-button block color="light" (click)="truncating = true">\n              show less\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-card-title>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab right top edge (click)="openCart()">\n    <button ion-fab color="light">\n      <ion-icon name="cart" color="primary"></ion-icon>\n      <!-- <ion-badge>1</ion-badge> -->\n    </button>\n  </ion-fab>\n\n  <!-- <ion-card>\n    <ion-slides autoplay="3000">\n      <ion-slide *ngFor="let image of product.images">\n        <img [src]="image.src" alt="">\n      </ion-slide>\n    </ion-slides>\n\n    <ion-card-content>\n      <ion-card-title>\n        {{product.name}} &nbsp;\n        <ion-chip *ngFor="let cat of product.categories" style="margin-left: 5px;">\n          <ion-label color="danger">{{cat.name}}</ion-label>\n        </ion-chip>\n      </ion-card-title>\n\n      <p [innerHTML]="product.description"></p>\n\n      <button ion-button icon-left block outline color="danger" (click)="addToCart(product)">\n        <ion-icon name="basket"></ion-icon> Add to cart for &pound;{{product.price}}\n      </button>\n\n    </ion-card-content>\n\n  </ion-card> -->\n\n  <!-- <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        Specifications\n      </ion-card-title>\n\n      <ion-grid>\n        <ion-row *ngFor="let att of product.attributes">\n          <ion-col col-4>\n            {{att.name}}\n          </ion-col>\n          <ion-col col-8>\n            <span *ngFor="let option of att.options">{{option}}</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card> -->\n\n</ion-content>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/product-details/product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_woocommerce_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { HomePage } from '../home/home';

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http, toastCtrl, alertCtrl, storage, modalCtrl, fb, facebook, nativeStorage, googlePlus, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.facebook = facebook;
        this.nativeStorage = nativeStorage;
        this.googlePlus = googlePlus;
        this.loadingCtrl = loadingCtrl;
        this.FB_APP_ID = 508513642936137;
        this.submitted = false;
        this.loading = false;
        this.isLoggedIn = false;
        this.errMsg = '';
        this.username = '';
        this.password = '';
        this.loginForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].minLength(6)]]
        });
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_9_woocommerce_api__({
            url: "https://blesscity.com",
            consumerKey: "ck_2acbdb539cac3a9a8cc6c2197d6c4cc7374f054f",
            consumerSecret: "cs_f0157128a4195e62e7295553402b56691d474ef7",
            version: 'wc/v2',
            wpAPI: true,
            queryStringAuth: true,
        });
        this.loader = this.loadingCtrl.create({
            cssClass: 'transparent',
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        if (this.loginForm.valid) {
            this.loading = true;
            this.http.post("https://blesscity.com/wp-json/jwt-auth/v1/token", { username: this.username, password: this.password }).subscribe(function (res) {
                // console.log(res.json());
                _this.storage.set("user", res.json()).then(function (data) {
                    _this.alertCtrl.create({
                        title: "Login Successful",
                        message: "Log in successful",
                        buttons: [{
                                text: "OK",
                                handler: function () {
                                    if (_this.navParams.get("next")) {
                                        _this.navCtrl.push(_this.navParams.get("next"));
                                    }
                                    else {
                                        _this.navCtrl.pop();
                                    }
                                }
                            }]
                    }).present();
                });
                _this.loading = false;
            }, function (err) {
                console.log(err.json());
                _this.errMsg = err.json().message;
                _this.toastCtrl.create({
                    message: err.message,
                    duration: 5000
                }).present();
                _this.loading = false;
            });
        }
    };
    ;
    LoginPage.prototype.openRegister = function () {
        // this.modalCtrl.create(RegisterPage).present();
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]).present();
    };
    LoginPage.prototype.fbLogin = function () {
        var _this = this;
        this.loader.present();
        this.facebook.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.isLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.facebook.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            console.log(res);
            _this.user = res;
            _this.getWooCommerceUser(res.email);
        })
            .catch(function (e) {
            console.log(e);
            _this.loader.dismiss();
        });
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.loader.present();
        this.googlePlus.login({})
            .then(function (res) {
            // console.log(res);
            _this.getWooCommerceUser(res.email);
            _this.isLoggedIn = true;
        })
            .catch(function (err) { return console.error(err); });
    };
    ;
    LoginPage.prototype.getWooCommerceUser = function (email) {
        var _this = this;
        this.WooCommerce.getAsync('customers/?email=' + email).then(function (data) {
            // console.log(data.body);
            _this.woocommerceUser = JSON.parse(data.body);
            // console.log(this.woocommerceUser);
            if (_this.woocommerceUser.length < 1) {
                _this.loader.dismiss();
                _this.toastCtrl.create({
                    message: 'User does not exist',
                    duration: 5000
                }).present();
            }
            else {
                var _loggedUser = _this.woocommerceUser[0];
                _this.storage.set("loggedUser", _loggedUser);
                if (_this.navParams.get("next")) {
                    _this.navCtrl.push(_this.navParams.get("next"));
                }
                else {
                    _this.navCtrl.pop();
                }
                _this.loader.dismiss();
            }
            ;
        });
    };
    ;
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/ce0/Documents/Ionic/CityShop/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="logo-container">\n    <img src="assets/imgs/shop-icon.png" alt="">\n\n    <h4>Login in with social network</h4>\n\n    <ion-grid class="button-group">\n      <ion-row>\n        <ion-col>\n          <button ion-button block color="facebook" (click)="fbLogin()">Facebook</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button block color="google" (click)="googleLogin()">Google+</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <hr style="background-color: #363563; opacity: .7;">\n        </ion-col>\n        <ion-col width-10 style="color: #363563; font-weight: bold; opacity: .8;">\n          OR\n        </ion-col>\n        <ion-col>\n          <hr style="background-color: #363563; opacity: .7;">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class="login-container">\n    <form novalidate [formGroup]="loginForm">\n\n      <!--  -->\n      <input type="text" name="username" style="display: none !important">\n      <input type="password" name="password" style="display: none !important">\n      <!--  -->\n\n      <div *ngIf="errMsg" class="api-error" no-wrap>\n        <p [innerHTML]="errMsg"></p>\n      </div>\n\n      <ion-list>\n\n        <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type="text" [(ngModel)]="username" formControlName="username" required></ion-input>\n        </ion-item>\n        <div *ngIf="submitted && loginForm.controls.username.hasError(\'required\')"\n          class="error-container">\n          <p class="error-text">username is required</p>\n        </div>\n\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="password" formControlName="password"></ion-input>\n        </ion-item>\n        <div *ngIf="submitted && loginForm.controls.password.errors" class="error-container">\n          <p *ngIf="loginForm.controls.password.errors.required" class="error-text">password is required</p>\n          <p *ngIf="loginForm.controls.password.errors.minlength" class="error-text">password must be greater than 6 characters</p>\n        </div>\n\n\n      </ion-list>\n    </form>\n  </div>\n\n  <div class="btn-container">\n    <button ion-button block color="primary" class="btn-login" (click)="login()" [disabled]="loading">Login</button>\n    <button ion-button block clear color="primary" (click)="openRegister()">Click to Register</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/ce0/Documents/Ionic/CityShop/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[360]);
//# sourceMappingURL=main.js.map