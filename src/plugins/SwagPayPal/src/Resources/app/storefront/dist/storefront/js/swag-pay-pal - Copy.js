/*! For license information please see swag-pay-pal.js.LICENSE.txt */
"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    ["swag-pay-pal"],
    {
        9659: (t, e, r) => {
            var o = r(8254),
                i = r(3206),
                n = r(4690),
                s = r(6285);
            function a(t) {
                var e = "";
                return (
                    Object.keys(t).forEach(function (r) {
                        0 !== e.length && (e += "&"), (e += r + "=" + t[r]);
                    }),
                    e
                );
            }
            function l(t, e) {
                void 0 === e && (e = {});
                var r = document.createElement("script");
                return (
                    (r.src = t),
                    Object.keys(e).forEach(function (t) {
                        r.setAttribute(t, e[t]), "data-csp-nonce" === t && r.setAttribute("nonce", e["data-csp-nonce"]);
                    }),
                    r
                );
            }
            function c(t, e) {
                if ((void 0 === e && (e = Promise), u(t, e), "undefined" == typeof document)) return e.resolve(null);
                var r = (function (t) {
                        var e = "https://www.paypal.com/sdk/js";
                        t.sdkBaseUrl && ((e = t.sdkBaseUrl), delete t.sdkBaseUrl);
                        var r = t,
                            o = Object.keys(r)
                                .filter(function (t) {
                                    return void 0 !== r[t] && null !== r[t] && "" !== r[t];
                                })
                                .reduce(
                                    function (t, e) {
                                        var o,
                                            i = r[e].toString();
                                        return (
                                            (o = function (t, e) {
                                                return (e ? "-" : "") + t.toLowerCase();
                                            }),
                                            "data" === (e = e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, o)).substring(0, 4) || "crossorigin" === e ? (t.attributes[e] = i) : (t.queryParams[e] = i),
                                            t
                                        );
                                    },
                                    { queryParams: {}, attributes: {} }
                                ),
                            i = o.queryParams,
                            n = o.attributes;
                        return i["merchant-id"] && -1 !== i["merchant-id"].indexOf(",") && ((n["data-merchant-id"] = i["merchant-id"]), (i["merchant-id"] = "*")), { url: "".concat(e, "?").concat(a(i)), attributes: n };
                    })(t),
                    o = r.url,
                    i = r.attributes,
                    n = i["data-namespace"] || "paypal",
                    s = d(n);
                return (function (t, e) {
                    var r = document.querySelector('script[src="'.concat(t, '"]'));
                    if (null === r) return null;
                    var o = l(t, e),
                        i = r.cloneNode();
                    if ((delete i.dataset.uidAuto, Object.keys(i.dataset).length !== Object.keys(o.dataset).length)) return null;
                    var n = !0;
                    return (
                        Object.keys(i.dataset).forEach(function (t) {
                            i.dataset[t] !== o.dataset[t] && (n = !1);
                        }),
                        n ? r : null
                    );
                })(o, i) && s
                    ? e.resolve(s)
                    : (function (t, e) {
                          void 0 === e && (e = Promise);
                          u(t, e);
                          var r = t.url,
                              o = t.attributes;
                          if ("string" != typeof r || 0 === r.length) throw new Error("Invalid url.");
                          if (void 0 !== o && "object" != typeof o) throw new Error("Expected attributes to be an object.");
                          return new e(function (t, e) {
                              if ("undefined" == typeof document) return t();
                              !(function (t) {
                                  var e = t.url,
                                      r = t.attributes,
                                      o = t.onSuccess,
                                      i = t.onError,
                                      n = l(e, r);
                                  (n.onerror = i), (n.onload = o), document.head.insertBefore(n, document.head.firstElementChild);
                              })({
                                  url: r,
                                  attributes: o,
                                  onSuccess: function () {
                                      return t();
                                  },
                                  onError: function () {
                                      var t = new Error('The script "'.concat(r, '" failed to load. Check the HTTP status code and response body in DevTools to learn more.'));
                                      return e(t);
                                  },
                              });
                          });
                      })({ url: o, attributes: i }, e).then(function () {
                          var t = d(n);
                          if (t) return t;
                          throw new Error("The window.".concat(n, " global variable is not available."));
                      });
            }
            function d(t) {
                return window[t];
            }
            function u(t, e) {
                if ("object" != typeof t || null === t) throw new Error("Expected an options object.");
                if (void 0 !== e && "function" != typeof e) throw new Error("Expected PromisePonyfill to be a function.");
            }
            function p(t, e, r) {
                return (
                    (e = (function (t) {
                        var e = (function (t, e) {
                            if ("object" != typeof t || null === t) return t;
                            var r = t[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var o = r.call(t, e || "default");
                                if ("object" != typeof o) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" == typeof e ? e : String(e);
                    })(e)) in t
                        ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                        : (t[e] = r),
                    t
                );
            }
            class h {
                constructor() {
                    p(this, "loadingScript", !1), p(this, "paypal", null), p(this, "callbacks", []);
                }
            }
            const f = ["card", "bancontact", "blik", "eps", "giropay", "ideal", "mybank", "p24", "sepa", "sofort", "venmo"];
            class m extends s.Z {
                createScript(t) {
                    null === this.constructor.scriptLoading.paypal
                        ? (this.constructor.scriptLoading.callbacks.push(t),
                          this.constructor.scriptLoading.loadingScript || ((this.constructor.scriptLoading.loadingScript = !0), c(this.getScriptOptions()).then(this.callCallbacks.bind(this))))
                        : t.call(this, this.constructor.scriptLoading.paypal);
                }
                callCallbacks() {
                    null === this.constructor.scriptLoading.paypal && ((this.constructor.scriptLoading.paypal = window.paypal), delete window.paypal),
                        this.constructor.scriptLoading.callbacks.forEach((t) => {
                            t.call(this, this.constructor.scriptLoading.paypal);
                        });
                }
                getScriptOptions() {
                    const t = {
                        components: "buttons,messages,card-fields,funding-eligibility",
                        "client-id": this.options.clientId,
                        commit: !!this.options.commit,
                        locale: this.options.languageIso,
                        currency: this.options.currency,
                        intent: this.options.intent,
                        "enable-funding": "paylater,venmo",
                    };
                    return (
                        (this.options.disablePayLater || !1 === this.options.showPayLater) && (t["enable-funding"] = "venmo"),
                        !1 === this.options.useAlternativePaymentMethods
                            ? (t["disable-funding"] = f.join(","))
                            : Array.isArray(this.options.disabledAlternativePaymentMethods) && (t["disable-funding"] = this.options.disabledAlternativePaymentMethods.join(",")),
                        this.options.merchantPayerId && (t["merchant-id"] = this.options.merchantPayerId),
                        this.options.clientToken && (t["data-client-token"] = this.options.clientToken),
                        this.options.userIdToken && (t["data-user-id-token"] = this.options.userIdToken),
                        this.options.partnerAttributionId && (t["data-partner-attribution-id"] = this.options.partnerAttributionId),
                        t
                    );
                }
                createError(t, e, r = "") {
                    const o = this.options.addErrorUrl;
                    this.options.accountOrderEditCancelledUrl && this.options.accountOrderEditFailedUrl
                        ? (window.location = "cancel" === t ? this.options.accountOrderEditCancelledUrl : this.options.accountOrderEditFailedUrl)
                        : (e && "string" != typeof e && (e = String(e)),
                          this._client.post(o, JSON.stringify({ error: e, type: t }), () => {
                              r
                                  ? (window.location = r)
                                  : ((window.onbeforeunload = () => {
                                        window.scrollTo(0, 0);
                                    }),
                                    window.location.reload());
                          }));
                }
            }
            var b, y, g;
            function v(t, e, r) {
                return (
                    (e = (function (t) {
                        var e = (function (t, e) {
                            if ("object" != typeof t || null === t) return t;
                            var r = t[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var o = r.call(t, e || "default");
                                if ("object" != typeof o) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" == typeof e ? e : String(e);
                    })(e)) in t
                        ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                        : (t[e] = r),
                    t
                );
            }
            (b = m),
                (y = "scriptLoading"),
                (g = new h()),
                (y = (function (t) {
                    var e = (function (t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(t, e || "default");
                            if ("object" != typeof o) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : String(e);
                })(y)) in b
                    ? Object.defineProperty(b, y, { value: g, enumerable: !0, configurable: !0, writable: !0 })
                    : (b[y] = g);
            class S extends m {
                init() {
                    (this._client = new o.Z()), this.createButton();
                }
                createButton() {
                    this.createScript((t) => {
                        this.renderButton(t);
                    });
                }
                renderButton(t) {
                    return t.Buttons(this.getButtonConfig()).render(this.el);
                }
                getBuyButtonState() {
                    if (!this.options.addProductToCart) return { element: null, disabled: !1 };
                    const t = i.Z.querySelector(this.el.closest("form"), this.options.buyButtonSelector);
                    return { element: t, disabled: t.disabled };
                }
                observeBuyButton(t, e, r, o = { attributes: !0 }) {
                    const i = new MutationObserver((t) => {
                        t.forEach((t) => {
                            if ("disabled" === t.attributeName) {
                                const { disabled: t } = this.getBuyButtonState();
                                if (t) return void r();
                                e();
                            }
                        });
                    });
                    return i.observe(t, o), i;
                }
                getButtonConfig() {
                    const t = this.el,
                        { element: e, disabled: r } = this.getBuyButtonState();
                    return {
                        onInit: (o, i) => {
                            if (!this.options.addProductToCart) return;
                            const n = () => {
                                    i.enable(), t.classList.remove(this.options.disabledClass);
                                },
                                s = () => {
                                    i.disable(), t.classList.add(this.options.disabledClass);
                                };
                            this.observeBuyButton(e, n, s), r ? s() : n();
                        },
                        style: { size: this.options.buttonSize, shape: this.options.buttonShape, color: this.options.buttonColor, tagline: this.options.tagline, layout: "vertical", label: "checkout", height: 40 },
                        createOrder: this.createOrder.bind(this),
                        onApprove: this.onApprove.bind(this),
                        onCancel: this.onCancel.bind(this),
                        onError: this.onError.bind(this),
                    };
                }
                createOrder() {
                    const t = { paymentMethodId: this.options.payPalPaymentMethodId, deleteCart: this.options.addProductToCart };
                    return new Promise((e, r) => {
                        this._client.post(
                            this.options.contextSwitchUrl,
                            JSON.stringify(t),
                            (t, o) => (
                                o.status >= 400 && r(t),
                                Promise.resolve()
                                    .then(() => (this.options.addProductToCart ? this.addProductToCart() : Promise.resolve()))
                                    .then(() => this._createOrder())
                                    .then((t) => {
                                        e(t);
                                    })
                                    .catch((t) => {
                                        r(t);
                                    })
                            )
                        );
                    });
                }
                _createOrder() {
                    return new Promise((t, e) => {
                        this._client.post(this.options.createOrderUrl, new FormData(), (r, o) => {
                            o.status >= 400 && e(r);
                            try {
                                const e = JSON.parse(r);
                                t(e.token);
                            } catch (t) {
                                e(t);
                            }
                        });
                    });
                }
                addProductToCart() {
                    const t = this.el.closest("form"),
                        e = i.Z.querySelector(t, this.options.buyButtonSelector),
                        r = window.PluginManager.getPluginInstanceFromElement(t, "AddToCart");
                    return new Promise((t) => {
                        r.$emitter.subscribe("openOffCanvasCart", () => {
                            t();
                        }),
                            e.click();
                    });
                }
                onApprove(t, e) {
                    const r = { token: t.orderID };
                    n.Z.create(document.body),
                        this._client.post(this.options.prepareCheckoutUrl, JSON.stringify(r), (t, r) => (r.status < 400 ? e.redirect(this.options.checkoutConfirmUrl) : this.createError("error", t, this.options.cancelRedirectUrl)));
                }
                onError(t) {
                    this.createError("error", t);
                }
                onCancel(t) {
                    this.createError("cancel", t, this.options.cancelRedirectUrl);
                }
            }
            v(S, "scriptLoading", new h()),
                v(S, "options", {
                    disabledClass: "is-disabled",
                    buyButtonSelector: ".btn-buy",
                    buttonColor: "gold",
                    buttonShape: "rect",
                    buttonSize: "small",
                    languageIso: "en_GB",
                    clientId: "",
                    merchantPayerId: "",
                    currency: "EUR",
                    intent: "capture",
                    commit: !1,
                    tagline: !1,
                    addProductToCart: !1,
                    contextSwitchUrl: "",
                    payPalPaymentMethodId: "",
                    createOrderUrl: "",
                    deleteCartUrl: "",
                    prepareCheckoutUrl: "",
                    checkoutConfirmUrl: "",
                    addErrorUrl: "",
                    cancelRedirectUrl: "",
                    showPayLater: !0,
                    useAlternativePaymentMethods: !1,
                });
            var O = r(207),
                P = r(5659);
            class w extends m {
                init() {
                    (this._client = new o.Z()), this.createButton();
                }
                createButton() {
                    this.createScript((t) => {
                        this.renderButton(t);
                    });
                }
                renderButton(t) {
                    return (
                        (this.confirmOrderForm = i.Z.querySelector(document, this.options.confirmOrderFormSelector)),
                        i.Z.querySelector(this.confirmOrderForm, this.options.confirmOrderButtonSelector).classList.add("d-none"),
                        t.Buttons(this.getButtonConfig()).render(this.el)
                    );
                }
                getButtonConfig() {
                    return {
                        style: { size: this.options.buttonSize, shape: this.options.buttonShape, color: this.options.buttonColor, label: "checkout" },
                        createOrder: this.createOrder.bind(this),
                        onApprove: this.onApprove.bind(this),
                        onCancel: this.onCancel.bind(this),
                        onClick: this.onClick.bind(this),
                        onError: this.onError.bind(this),
                    };
                }
                createOrder() {
                    if (!this.confirmOrderForm.checkValidity()) throw new Error("Checkout form not valid");
                    const t = O.Z.serialize(this.confirmOrderForm);
                    t.set("product", "spb");
                    const e = this.options.orderId;
                    return (
                        null !== e && t.set("orderId", e),
                        new Promise((e, r) => {
                            this._client.post(this.options.createOrderUrl, t, (t, o) => {
                                o.status >= 400 && r(t);
                                try {
                                    const r = JSON.parse(t);
                                    e(r.token);
                                } catch (t) {
                                    r(t);
                                }
                            });
                        })
                    );
                }
                onApprove(t) {
                    P.Z.create();
                    const e = document.createElement("input");
                    e.setAttribute("type", "hidden"), e.setAttribute("name", "paypalOrderId"), e.setAttribute("value", t.orderID), this.confirmOrderForm.appendChild(e), this.confirmOrderForm.submit();
                }
                onCancel() {
                    this.createError("cancel");
                }
                onClick(t, e) {
                    return this.confirmOrderForm.checkValidity() ? e.resolve() : e.reject();
                }
                onError(t) {
                    this.createError("error", t);
                }
            }
            !(function (t, e, r) {
                (e = (function (t) {
                    var e = (function (t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(t, e || "default");
                            if ("object" != typeof o) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : String(e);
                })(e)) in t
                    ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                    : (t[e] = r);
            })(w, "options", {
                buttonColor: "gold",
                buttonShape: "rect",
                buttonSize: "small",
                languageIso: "en_GB",
                clientId: "",
                merchantPayerId: "",
                currency: "EUR",
                intent: "capture",
                commit: !0,
                useAlternativePaymentMethods: !0,
                disabledAlternativePaymentMethods: [],
                showPayLater: !0,
                createOrderUrl: "",
                orderId: null,
                accountOrderEditFailedUrl: "",
                accountOrderEditCancelledUrl: "",
                confirmOrderFormSelector: "#confirmOrderForm",
                confirmOrderButtonSelector: 'button[type="submit"]',
                addErrorUrl: "",
                userIdToken: null,
            });
            class F extends s.Z {
                init() {
                    i.Z.querySelector(document, this.options.confirmOrderFormSelector).addEventListener("submit", this.onConfirmCheckout.bind(this)), this.createPaymentWall();
                }
                createPaymentWall() {
                    (this.paypal = window.PAYPAL),
                        this.paypal.apps.PPP({
                            placeholder: this.options.placeholder,
                            approvalUrl: this.options.approvalUrl,
                            mode: this.options.mode,
                            country: this.options.customerCountryIso,
                            buttonLocation: this.options.buttonLocation,
                            language: this.options.customerSelectedLanguage,
                            useraction: this.options.userAction,
                            surcharging: this.options.surcharging,
                            showLoadingIndicator: this.options.showLoadingIndicator,
                            showPuiOnSandbox: this.options.showPuiOnSandbox,
                            onLoad: this.onPaymentSelectionLoad,
                        });
                }
                onConfirmCheckout(t) {
                    t.preventDefault();
                    const e = t.target;
                    if (!e.checkValidity()) return;
                    this._client = new o.Z();
                    const r = O.Z.serialize(e);
                    n.Z.create(document.body);
                    const i = this.options.orderId;
                    null !== i && r.set("orderId", i), this._client.post(this.options.handlePaymentUrl, r, this.afterPayOrder.bind(this));
                }
                afterPayOrder(t) {
                    const e = JSON.parse(t);
                    "plusPatched" === e.redirectUrl ? this.paypal.apps.PPP.doCheckout() : (window.location.href = e.redirectUrl);
                }
                onPaymentSelectionLoad() {
                    document.$emitter.publish("paypalPlusSelectionLoaded");
                }
            }
            !(function (t, e, r) {
                (e = (function (t) {
                    var e = (function (t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(t, e || "default");
                            if ("object" != typeof o) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : String(e);
                })(e)) in t
                    ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                    : (t[e] = r);
            })(F, "options", {
                placeholder: "ppplus",
                approvalUrl: "",
                paypalPaymentId: "",
                paypalToken: "",
                customerCountryIso: "",
                mode: "live",
                buttonLocation: "outside",
                preSelection: "paypal",
                userAction: "commit",
                customerSelectedLanguage: "en_GB",
                surcharging: !1,
                showLoadingIndicator: !0,
                showPuiOnSandbox: !0,
                handlePaymentUrl: "",
                isEnabledParameterName: "isPayPalPlusCheckout",
                languageId: null,
                orderId: null,
                confirmOrderFormSelector: "#confirmOrderForm",
            });
            class E extends m {
                init() {
                    this.createInstallmentBanner();
                }
                createInstallmentBanner() {
                    this.createScript((t) => {
                        t.Messages(this.getBannerConfig()).render(this.el);
                    });
                }
                getBannerConfig() {
                    var t;
                    return {
                        amount: this.options.amount,
                        buyerCountry: null !== (t = this.options.crossBorderBuyerCountry) && void 0 !== t ? t : void 0,
                        currency: this.options.currency,
                        style: { layout: this.options.layout, color: this.options.color, ratio: this.options.ratio, logo: { type: this.options.logoType }, text: { color: this.options.textColor } },
                    };
                }
            }
            !(function (t, e, r) {
                (e = (function (t) {
                    var e = (function (t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(t, e || "default");
                            if ("object" != typeof o) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : String(e);
                })(e)) in t
                    ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                    : (t[e] = r);
            })(E, "options", {
                clientId: "",
                merchantPayerId: "",
                commit: !0,
                crossBorderBuyerCountry: void 0,
                amount: 0,
                currency: "EUR",
                layout: "text",
                color: "blue",
                ratio: "8x1",
                logoType: "primary",
                textColor: "black",
                partnerAttributionId: "",
            });
            var C = r(1110);
            function I(t, e, r) {
                return (
                    (e = (function (t) {
                        var e = (function (t, e) {
                            if ("object" != typeof t || null === t) return t;
                            var r = t[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var o = r.call(t, e || "default");
                                if ("object" != typeof o) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" == typeof e ? e : String(e);
                    })(e)) in t
                        ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                        : (t[e] = r),
                    t
                );
            }
            class j extends m {
                init() {
                    //alert("init");
                    (this.confirmOrderForm = i.Z.querySelector(document, this.options.confirmOrderFormSelector)),
                        this.options.preventErrorReload
                            ? (i.Z.querySelector(this.confirmOrderForm, this.options.confirmOrderButtonSelector).disabled = "disabled")
                            : (i.Z.querySelector(this.confirmOrderForm, this.options.confirmOrderButtonSelector).classList.add("d-none"),
                              (this._client = new o.Z()),
                              this.createScript((t) => {
                                  this.render(t);
                              }));
                }
                render(t) {
                    //alert("in here");
                    this.cardFieldForm = i.Z.querySelector(document, this.options.cardFieldFormSelector);
                    const e = t.CardFields(this.getFieldConfig());
                    console.log("e", e);
                    if (e.isEligible()) this.cardFieldForm.classList.remove("d-none"), this.renderIndividualFields(e), this.bindFieldActions(e);
                    else {
                        const e = t.Buttons(this.getButtonConfig(t.FUNDING.CARD));
                        e.isEligible() || this.onError("Neither hosted fields nor standalone buttons are eligible"), e.render(this.el);
                    }
                }
                getFieldConfig() {
                    return { createOrder: this.createOrder.bind(this, "acdc"), onError: this.onError.bind(this), onApprove: this.onApprove.bind(this), style: this.options.cardFieldStyleConfig };
                }
                renderIndividualFields(t) {
                    (this.fields = {}),
                        (this.fields.cardNameField = t.NameField({ placeholder: i.Z.querySelector(this.cardFieldForm, this.options.cardNameFieldSelector).dataset.placeholder })),
                        this.fields.cardNameField.render(this.options.cardNameFieldSelector),
                        (this.fields.cardNumberField = t.NumberField({ placeholder: i.Z.querySelector(this.cardFieldForm, this.options.cardNumberFieldSelector).dataset.placeholder })),
                        this.fields.cardNumberField.render(this.options.cardNumberFieldSelector),
                        (this.fields.cardCvvField = t.CVVField({ placeholder: i.Z.querySelector(this.cardFieldForm, this.options.cardCvvFieldSelector).dataset.placeholder })),
                        this.fields.cardCvvField.render(this.options.cardCvvFieldSelector),
                        (this.fields.cardExpiryField = t.ExpiryField({ placeholder: i.Z.querySelector(this.cardFieldForm, this.options.cardExpiryFieldSelector).dataset.placeholder })),
                        this.fields.cardExpiryField.render(this.options.cardExpiryFieldSelector);
                }
                getButtonConfig(t) {
                    return {
                        fundingSource: t,
                        style: { size: this.options.buttonSize, shape: this.options.buttonShape, color: this.options.buttonColor, label: "checkout" },
                        createOrder: this.createOrder.bind(this, "spb"),
                        onApprove: this.onApprove.bind(this),
                        onCancel: this.onCancel.bind(this),
                        onClick: this.onClick.bind(this),
                        onError: this.onError.bind(this),
                    };
                }
                bindFieldActions(t) {
                    i.Z.querySelector(this.confirmOrderForm, this.options.confirmOrderButtonSelector).classList.remove("d-none"),
                        this.confirmOrderForm.addEventListener("submit", this.onFieldSubmit.bind(this, t)),
                        (window.PluginManager.getPluginInstanceFromElement(this.confirmOrderForm, "FormAddHistory").options.entries = []);
                }
                createOrder(t) {
                    const e = O.Z.serialize(this.confirmOrderForm);
                    e.set("product", t);
                    const r = this.options.orderId;
                    return (
                        null !== r && e.set("orderId", r),
                        new Promise((t, r) => {
                            this._client.post(this.options.createOrderUrl, e, (e, o) => {
                                o.status >= 400 && r(e);
                                try {
                                    const r = JSON.parse(e);
                                    t(r.token);
                                } catch (t) {
                                    r(t);
                                }
                            });
                        })
                    );
                }
                onFieldSubmit(t, e) {
                    O.Z.serialize(this.confirmOrderForm).has("paypalOrderId") ||
                        (this.confirmOrderForm.checkValidity() &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            t.getState().then((e) => {
                                var r;
                                if (e.isFormValid) return void t.submit();
                                new C.Z(i.Z.querySelector(this.confirmOrderForm, this.options.confirmOrderButtonSelector)).remove();
                                const o = Object.keys(e.fields).find((t) => !e.fields[t].isValid);
                                null === (r = this.fields[o]) || void 0 === r || r.focus(), window.scrollTo({ top: this.getScrollOffset(i.Z.querySelector(this.cardFieldForm, this.options[o + "Selector"])), behavior: "smooth" });
                            })));
                }
                onApprove(t) {
                    P.Z.create();
                    const e = document.createElement("input");
                    e.setAttribute("type", "hidden"),
                        e.setAttribute("name", "paypalOrderId"),
                        e.setAttribute("value", Object.prototype.hasOwnProperty.call(t, "orderId") ? t.orderId : t.orderID),
                        this.confirmOrderForm.appendChild(e),
                        this.confirmOrderForm.submit();
                }
                onCancel() {
                    this.createError("cancel");
                }
                onClick(t, e) {
                    return this.confirmOrderForm.checkValidity() ? e.resolve() : e.reject();
                }
                onError(t) {
                    this.createError("error", t);
                }
                getScrollOffset(t) {
                    let e = t.getBoundingClientRect().top + window.scrollY - this.options.scrollOffset;
                    const r = i.Z.querySelector(document, this.options.fixedHeaderSelector, !1);
                    if (r) {
                        e -= r.getBoundingClientRect().height;
                    }
                    return e;
                }
            }
            I(j, "scriptLoading", new h()),
                I(j, "options", {
                    clientId: "",
                    merchantPayerId: "",
                    clientToken: "",
                    currency: "EUR",
                    intent: "capture",
                    commit: !0,
                    languageIso: "en_GB",
                    buttonColor: "black",
                    buttonShape: "rect",
                    buttonSize: "small",
                    createOrderUrl: "",
                    orderId: null,
                    accountOrderEditFailedUrl: "",
                    accountOrderEditCancelledUrl: "",
                    confirmOrderFormSelector: "#confirmOrderForm",
                    cardFieldFormSelector: "#swag-paypal-acdc-form",
                    cardNumberFieldSelector: "#swag-paypal-acdc-form-cardnumber",
                    cardExpiryFieldSelector: "#swag-paypal-acdc-form-expiration",
                    cardCvvFieldSelector: "#swag-paypal-acdc-form-cvv",
                    cardNameFieldSelector: "#swag-paypal-acdc-form-cardholder",
                    confirmOrderButtonSelector: 'button[type="submit"]',
                    scrollOffset: 15,
                    fixedHeaderSelector: "header.fixed-top",
                    validatedStyleClass: "was-validated",
                    cardFieldStyleConfig: {
                        input: { "font-family": '"Inter", sans-serif', "font-size": "0.875rem", "font-weight": 300, "letter-spacing": "0.03rem", padding: "0.5625rem" },
                        "input::placeholder": { color: "#c3c3c3", opacity: 1 },
                        body: { padding: 0 },
                        "input.card-field-number.display-icon": { "padding-left": "calc(2rem + 40px) !important" },
                    },
                    preventErrorReload: !1,
                });
            var k = r(7906);
            class B extends s.Z {
                init() {
                    new k.Z(this.el).create(), (this._client = new o.Z()), this.poll();
                }
                poll() {
                    this._client.get(this.options.pollingUrl, this.onPollingResult.bind(this));
                }
                onPollingResult(t, e) {
                    417 !== e.status ? (e.status >= 400 ? (window.location = this.options.errorUrl) : (window.location = this.options.successUrl)) : this.retryPolling();
                }
                retryPolling() {
                    setTimeout(this.poll.bind(this), this.options.pollingInterval);
                }
            }
            function U(t, e, r) {
                return (
                    (e = (function (t) {
                        var e = (function (t, e) {
                            if ("object" != typeof t || null === t) return t;
                            var r = t[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var o = r.call(t, e || "default");
                                if ("object" != typeof o) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" == typeof e ? e : String(e);
                    })(e)) in t
                        ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                        : (t[e] = r),
                    t
                );
            }
            !(function (t, e, r) {
                (e = (function (t) {
                    var e = (function (t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(t, e || "default");
                            if ("object" != typeof o) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : String(e);
                })(e)) in t
                    ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                    : (t[e] = r);
            })(B, "options", { pollingUrl: "", successUrl: "", errorUrl: "", paymentInstructions: null, pollingInterval: 2e3 });
            class A extends m {
                init() {
                    (this.confirmOrderForm = i.Z.querySelector(document, this.options.confirmOrderFormSelector)),
                        this.options.preventErrorReload
                            ? (i.Z.querySelector(this.confirmOrderForm, this.options.confirmOrderButtonSelector).disabled = "disabled")
                            : (i.Z.querySelector(this.confirmOrderForm, this.options.confirmOrderButtonSelector).classList.add("d-none"),
                              (this._client = new o.Z()),
                              this.createScript((t) => {
                                  this.render(t);
                              }));
                }
                render(t) {
                    const e = t.Buttons(this.getButtonConfig(this.getFundingSource(t)));
                    e.isEligible() || this.onError(`Funding for PayPal button is not eligible (${this.getFundingSource(t)})`), e.render(this.el);
                }
                getFundingSource(t) {
                    return t.FUNDING.PAYPAL;
                }
                getButtonConfig(t) {
                    return {
                        fundingSource: t,
                        style: { size: this.options.buttonSize, shape: this.options.buttonShape, color: this.options.buttonColor, label: "checkout" },
                        createOrder: this.createOrder.bind(this),
                        onApprove: this.onApprove.bind(this),
                        onCancel: this.onCancel.bind(this),
                        onClick: this.onClick.bind(this),
                        onError: this.onError.bind(this),
                    };
                }
                createOrder(t) {
                    const e = O.Z.serialize(this.confirmOrderForm);
                    e.set("product", t);
                    const r = this.options.orderId;
                    return (
                        null !== r && e.set("orderId", r),
                        new Promise((t, r) => {
                            this._client.post(this.options.createOrderUrl, e, (e, o) => {
                                o.status >= 400 && r(e);
                                try {
                                    const r = JSON.parse(e);
                                    t(r.token);
                                } catch (t) {
                                    r(t);
                                }
                            });
                        })
                    );
                }
                onApprove(t) {
                    P.Z.create();
                    const e = document.createElement("input");
                    e.setAttribute("type", "hidden"),
                        e.setAttribute("name", "paypalOrderId"),
                        e.setAttribute("value", Object.prototype.hasOwnProperty.call(t, "orderId") ? t.orderId : t.orderID),
                        this.confirmOrderForm.appendChild(e),
                        i.Z.querySelector(this.confirmOrderForm, this.options.confirmOrderButtonSelector).click();
                }
                onClick(t, e) {
                    return this.confirmOrderForm.checkValidity() ? e.resolve() : e.reject();
                }
                onError(t) {
                    this.createError("error", t);
                }
                onCancel() {
                    this.createError("cancel");
                }
            }
            function N() {
                return (
                    (N =
                        "undefined" != typeof Reflect && Reflect.get
                            ? Reflect.get.bind()
                            : function (t, e, r) {
                                  var o = Z(t, e);
                                  if (o) {
                                      var i = Object.getOwnPropertyDescriptor(o, e);
                                      return i.get ? i.get.call(arguments.length < 3 ? t : r) : i.value;
                                  }
                              }),
                    N.apply(this, arguments)
                );
            }
            function Z(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = L(t)); );
                return t;
            }
            function L(t) {
                return (
                    (L = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    L(t)
                );
            }
            U(A, "scriptLoading", new h()),
                U(A, "options", {
                    clientId: "",
                    merchantPayerId: "",
                    clientToken: "",
                    currency: "EUR",
                    intent: "capture",
                    commit: !0,
                    languageIso: "en_GB",
                    buttonColor: null,
                    buttonShape: "rect",
                    buttonSize: "small",
                    createOrderUrl: "",
                    orderId: null,
                    accountOrderEditFailedUrl: "",
                    accountOrderEditCancelledUrl: "",
                    confirmOrderFormSelector: "#confirmOrderForm",
                    confirmOrderButtonSelector: 'button[type="submit"]',
                    preventErrorReload: !1,
                });
            class T extends A {
                getFundingSource(t) {
                    return t.FUNDING.SEPA;
                }
            }
            function x() {
                return (
                    (x =
                        "undefined" != typeof Reflect && Reflect.get
                            ? Reflect.get.bind()
                            : function (t, e, r) {
                                  var o = _(t, e);
                                  if (o) {
                                      var i = Object.getOwnPropertyDescriptor(o, e);
                                      return i.get ? i.get.call(arguments.length < 3 ? t : r) : i.value;
                                  }
                              }),
                    x.apply(this, arguments)
                );
            }
            function _(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = R(t)); );
                return t;
            }
            function R(t) {
                return (
                    (R = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    R(t)
                );
            }
            !(function (t, e, r) {
                (e = (function (t) {
                    var e = (function (t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(t, e || "default");
                            if ("object" != typeof o) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : String(e);
                })(e)) in t
                    ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                    : (t[e] = r);
            })(T, "options", { ...N(L(T), "options", T), buttonColor: "silver" });
            class q extends A {
                getFundingSource(t) {
                    return t.FUNDING.VENMO;
                }
            }
            function M() {
                return (
                    (M =
                        "undefined" != typeof Reflect && Reflect.get
                            ? Reflect.get.bind()
                            : function (t, e, r) {
                                  var o = z(t, e);
                                  if (o) {
                                      var i = Object.getOwnPropertyDescriptor(o, e);
                                      return i.get ? i.get.call(arguments.length < 3 ? t : r) : i.value;
                                  }
                              }),
                    M.apply(this, arguments)
                );
            }
            function z(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = D(t)); );
                return t;
            }
            function D(t) {
                return (
                    (D = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    D(t)
                );
            }
            !(function (t, e, r) {
                (e = (function (t) {
                    var e = (function (t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(t, e || "default");
                            if ("object" != typeof o) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : String(e);
                })(e)) in t
                    ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                    : (t[e] = r);
            })(q, "options", { ...x(R(q), "options", q), buttonColor: "blue" });
            class V extends A {
                getFundingSource(t) {
                    return t.FUNDING.PAYLATER;
                }
            }
            function G(t, e, r) {
                return (
                    (e = (function (t) {
                        var e = (function (t, e) {
                            if ("object" != typeof t || null === t) return t;
                            var r = t[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var o = r.call(t, e || "default");
                                if ("object" != typeof o) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" == typeof e ? e : String(e);
                    })(e)) in t
                        ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                        : (t[e] = r),
                    t
                );
            }
            !(function (t, e, r) {
                (e = (function (t) {
                    var e = (function (t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(t, e || "default");
                            if ("object" != typeof o) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : String(e);
                })(e)) in t
                    ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                    : (t[e] = r);
            })(V, "options", { ...M(D(V), "options", V), buttonColor: "gold" });
            class J extends m {
                init() {
                    (this._client = new o.Z()),
                        this.createScript((t) => {
                            this.checkFunding(t);
                        });
                }
                checkFunding(t) {
                    const e = this.constructor.fundingSources.filter((e) => !t.isFundingEligible(t.FUNDING[e]));
                    e.sort().join(",") !== this.options.filteredPaymentMethods.sort().join(",") && this.updateMethodEligibility(e);
                }
                updateMethodEligibility(t) {
                    this._client.post(this.options.methodEligibilityUrl, JSON.stringify({ paymentMethods: t }), () => {
                        this.options.filteredPaymentMethods = t;
                    });
                }
            }
            G(J, "fundingSources", ["CARD", "SEPA", "VENMO", "PAYLATER"]),
                G(J, "options", { clientId: "", merchantPayerId: "", languageIso: "en_GB", currency: "EUR", intent: "capture", commit: !0, filteredPaymentMethods: [], methodEligibilityUrl: "" });
            const Y = window.PluginManager;
            //alert("register");
            Y.register("SwagPayPalExpressButton", S, "[data-swag-paypal-express-button]"),
                Y.register("SwagPayPalSmartPaymentButtons", w, "[data-swag-paypal-smart-payment-buttons]"),
                Y.register("SwagPaypalAcdcFields", j, "[data-swag-paypal-acdc-fields]"),
                Y.register("SwagPayPalPlusPaymentWall", F, "[data-swag-paypal-payment-wall]"),
                Y.register("SwagPayPalInstallmentBanner", E, "[data-swag-paypal-installment-banner]"),
                Y.register("SwagPaypalPuiPolling", B, "[data-swag-paypal-pui-polling]"),
                Y.register("SwagPaypalSepa", T, "[data-swag-paypal-sepa]"),
                Y.register("SwagPaypalVenmo", q, "[data-swag-paypal-venmo]"),
                Y.register("SwagPaypalPayLater", V, "[data-swag-paypal-pay-later]"),
                Y.register("SwagPaypalFundingEligibility", J, "[data-swag-paypal-funding-eligibility]");
        },
    },
    (t) => {
        t.O(0, ["vendor-node", "vendor-shared"], () => {
            return (e = 9659), t((t.s = e));
            var e;
        });
        t.O();
    },
]);