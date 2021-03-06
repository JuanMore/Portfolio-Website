/*
* Start Bootstrap - SB Forms v0.3.1 (startbootstrap.com)
* Copyright 2013-2021 Start Bootstrap LLC
*/
(()=>{
    "use strict";
    var e = function(e, t, n, s) {
        return new (n || (n = Promise))((function(i, o) {
            function a(e) {
                try {
                    c(s.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function r(e) {
                try {
                    c(s.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, r)
            }
            c((s = s.apply(e, t || [])).next())
        }
        ))
    };
    const t = (e,t=document.body)=>{
        const n = [].slice.call(t.querySelectorAll(e));
        if (0 === n.length)
            throw new Error(`GET_ELEMENTS: ${t.id} -> ${e}`);
        return n
    }
      , n = (e,t=document.body)=>{
        const n = t.querySelector(e);
        if (!n)
            throw new Error(`GET_ELEMENT: ${t.id} -> ${e}`);
        return n
    }
    ;
    var s;
    !function(e) {
        e.required = "required",
        e.email = "email",
        e.length = "length",
        e.checked = "checked"
    }(s || (s = {}));
    class i {
        constructor(e, t, n) {
            this.input = e,
            this.isPure = !0,
            e.addEventListener("blur", (()=>{
                let s = !0;
                this.isPure = !1,
                t.forEach((t=>{
                    s = s && o(e, t)
                }
                )),
                s ? (e.classList.remove("is-invalid"),
                e.dataset.sbCanSubmit = "yes") : (e.classList.add("is-invalid"),
                e.dataset.sbCanSubmit = "no"),
                n()
            }
            )),
            e.addEventListener("input", (()=>{
                let s = !0;
                if (t.forEach((t=>{
                    s = s && o(e, t)
                }
                )),
                s) {
                    if (e.dataset.sbCanSubmit = "yes",
                    this.isPure)
                        return void n();
                    e.classList.remove("is-invalid")
                } else {
                    if (e.dataset.sbCanSubmit = "no",
                    this.isPure)
                        return void n();
                    e.classList.add("is-invalid")
                }
                n()
            }
            )),
            e.addEventListener("click", (()=>{
                if (!t.find((e=>"checked" === e)))
                    return;
                let s = !0;
                if (t.forEach((t=>{
                    s = s && o(e, t)
                }
                )),
                s) {
                    if (e.dataset.sbCanSubmit = "yes",
                    this.isPure)
                        return void n();
                    e.classList.remove("is-invalid")
                } else {
                    if (e.dataset.sbCanSubmit = "no",
                    this.isPure)
                        return void n();
                    e.classList.add("is-invalid")
                }
                n()
            }
            ))
        }
        reset() {
            this.isPure = !0,
            this.input.value = "",
            this.input.classList.remove("is-invalid"),
            this.input.dataset.sbCanSubmit = "no"
        }
    }
    const o = (e,t)=>{
        let n, s = !0;
        if ("object" == typeof t) {
            if (s = t.validate(),
            n = document.querySelectorAll(`[data-sb-feedback="${e.id}:${t.name}"]`),
            !n[0])
                throw new Error(`VALIDATION_NOT_SETUP_FOR: ${e.id}:${t.name}`)
        } else {
            switch (t) {
            case "required":
                e.value || (s = !1);
                break;
            case "email":
                s = a(e.value);
                break;
            case "length":
                s = r(e.value);
                break;
            case "checked":
                s = e.checked
            }
            if (n = document.querySelectorAll(`[data-sb-feedback="${e.id}:${t}"]`),
            !n[0])
                throw new Error(`VALIDATION_NOT_SETUP_FOR: ${e.id}:${t}`)
        }
        return s ? n[0].classList.add("d-none") : n[0].classList.remove("d-none"),
        s
    }
      , a = e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
      , r = e=>e.length > 8;
    (e=>{
        const t = document.createElement("style");
        t.textContent = ".d-none {\n    display: none !important;\n}\n.invalid-feedback {\n    display: none;\n}\n.btn.disabled {\n    pointer-events: none;\n    opacity: 0.65;\n}",
        document.head.append(t)
    }
    )(),
    window.addEventListener("DOMContentLoaded", (()=>{
        t("form[data-sb-form-api-token]").forEach((e=>c(e)))
    }
    ));
    const c = o=>{
        let a = !0;
        const r = ()=>{
            v()
        }
          , c = n("#submitButton", o)
          , h = n("#submitSuccessMessage", o)
          , f = n("#submitErrorMessage", o)
          , b = o.dataset.sbFormApiToken;
        "API_TOKEN" === b && (a = !1,
        console.log(l, u));
        const m = t("input, textarea, select", o);
        m.forEach((e=>{
            const t = e.dataset.sbValidations;
            t ? (e.dataset.sbCanSubmit = "no",
            new i(e,(e=>{
                const t = e.split(",").map((e=>e.trim()));
                return t.forEach((e=>{
                    if (!(e in s))
                        throw new Error(`UNRECOGNIZED_VALIDATION_KEY: ${e}`)
                }
                )),
                t
            }
            )(t),r)) : e.dataset.sbCanSubmit = "yes"
        }
        )),
        c.addEventListener("click", (t=>{
            return n = void 0,
            s = void 0,
            o = function*() {
                t.preventDefault(),
                c.classList.add("d-none");
                try {
                    a ? yield(n = {
                        token: b,
                        submissionObject: d(m)
                    },
                    e(void 0, void 0, void 0, (function*() {
                        const t = yield((t,n)=>e(void 0, void 0, void 0, (function*() {
                            const e = JSON.stringify(n)
                              , s = new Headers({
                                "Content-Type": "application/json"
                            })
                              , i = yield fetch(`https://api.startbootstrap.com${t}`, {
                                method: "POST",
                                mode: "cors",
                                cache: "no-cache",
                                credentials: "same-origin",
                                headers: s,
                                redirect: "follow",
                                referrerPolicy: "no-referrer",
                                body: e
                            });
                            if (!(i.status >= 200 && i.status < 300))
                                throw new Error(`FETCH_RETURNED_STATUS: ${i.status}`);
                            return i
                        }
                        )))("/api/latest/solution/forms", n);
                        return yield t.json()
                    }
                    ))) : (console.log(d(m)),
                    console.log(l, u)),
                    h.classList.remove("d-none"),
                    m.forEach((e=>{
                        e.setAttribute("disabled", "")
                    }
                    ))
                } catch (e) {
                    f.classList.remove("d-none")
                }
                var n
            }
            ,
            new ((i = void 0) || (i = Promise))((function(e, t) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function c(t) {
                    var n;
                    t.done ? e(t.value) : (n = t.value,
                    n instanceof i ? n : new i((function(e) {
                        e(n)
                    }
                    ))).then(a, r)
                }
                c((o = o.apply(n, s || [])).next())
            }
            ));
            var n, s, i, o
        }
        ));
        const v = ()=>{
            m.reduce(((e,t)=>"yes" === t.dataset.sbCanSubmit ? e && !0 : e && !1), !0) ? c.classList.remove("disabled") : c.classList.add("disabled")
        }
    }
      , d = e=>{
        const t = {};
        return e.forEach((e=>{
            "checkbox" !== e.type && "radio" !== e.type ? t[e.id] = e.value : t[e.id] = e.disabled ? "DISABLED" : e.checked.toString()
        }
        )),
        t
    }
      , l = "%c############################# Start Bootstrap Forms #############################\n###                                                                           ###\n###    To enable this form using Start Bootstrap Forms, simply sign up at:    ###\n###                                                                           ###\n###               https://startbootstrap/solution/contact-forms               ###\n###                                                                           ###\n#################################################################################"
      , u = "color: white; font-style: italic; background-color: #dd3d31; padding: 2px;"
}
)();
