(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(787);
        },
      ]);
    },
    787: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return P;
          },
        });
      var s = a(5893),
        n = a(9008),
        r = a.n(n),
        l = a(7294),
        i = function () {
          var e = (0, l.useState)(0),
            t = e[0],
            a = e[1],
            s = function () {
              return a(window.scrollY);
            };
          return (
            (0, l.useEffect)(function () {
              return (
                window.addEventListener("scroll", s),
                s(),
                function () {
                  return window.removeEventListener("scroll", s);
                }
              );
            }, []),
            [t]
          );
        };
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
        return s;
      }
      function c(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != a) {
              var s,
                n,
                r = [],
                l = !0,
                i = !1;
              try {
                for (
                  a = a.call(e);
                  !(l = (s = a.next()).done) &&
                  (r.push(s.value), !t || r.length !== t);
                  l = !0
                );
              } catch (o) {
                (i = !0), (n = o);
              } finally {
                try {
                  l || null == a.return || a.return();
                } finally {
                  if (i) throw n;
                }
              }
              return r;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return o(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === a && e.constructor && (a = e.constructor.name);
            if ("Map" === a || "Set" === a) return Array.from(a);
            if (
              "Arguments" === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return o(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var d = function () {
          var e = c(i(), 1)[0];
          return (0, s.jsxs)("section", {
            className: "w-screen h-[80vh] relative overflow-hidden z-[1]",
            children: [
              (0, s.jsx)("div", {
                className:
                  "w-full p-8 flex flex-col justify-end items-center absolute inset-0 z-[3]",
                children: (0, s.jsxs)("div", {
                  style: {
                    transform: "translateY(-".concat((e / 2).toFixed(2), "px)"),
                  },
                  className:
                    "w-full h-[90%] flex flex-col justify-between items-start overflow-hidden transition-bezier duration-75",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "w-full h-1/2 flex flex-col justify-end items-start overflow-hidden",
                      children: (0, s.jsx)("h2", {
                        className:
                          "flex flex-col justify-start items-start text-left tracking-[-1.2px] text-neutral-200 text-5xl font-aeonik_medium",
                        children: (0, s.jsx)("span", {
                          className: "translate-y-full animate-showTopText",
                          children: "Ofrecemos soluciones a tu medida en",
                        }),
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "w-full h-1 bg-neutral-200 -translate-x-full animate-entryDivider",
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "w-full h-1/2 flex flex-col justify-start items-start overflow-hidden",
                      children: (0, s.jsx)("h2", {
                        className:
                          "flex flex-col justify-start items-start text-left tracking-[-1.2px] text-neutral-200 text-5xl font-aeonik_medium",
                        children: (0, s.jsx)("span", {
                          className: "-translate-y-full animate-showBottomText",
                          children: "nuestras distintas divisiones",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className: "bg-regal-blue bg-opacity-60 absolute inset-0 z-[2]",
              }),
              (0, s.jsx)("div", {
                className: "w-full h-full relative z-[0]",
                children: (0, s.jsx)("img", {
                  src: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2236&q=80",
                  alt: "Imagen Grupo Vasquez",
                  className: "w-full h-full object-cover",
                }),
              }),
            ],
          });
        },
        u = function (e) {
          var t = (0, l.useState)(!1),
            a = t[0],
            s = t[1],
            n = function (e, t) {
              e.filter(function (e) {
                return e.isIntersecting;
              }).forEach(function (e) {
                s(!0), t.disconnect();
              });
            };
          return (
            (0, l.useEffect)(
              function () {
                null !== e.current &&
                  new IntersectionObserver(n, { threshold: 0.5 }).observe(
                    e.current
                  );
              },
              [e]
            ),
            a
          );
        },
        f = function () {
          return (0, s.jsxs)("p", {
            className:
              "p-8 text-sky-800 text-xl leading-7 transition-bezier duration-150",
            children: [
              (0, s.jsx)("strong", {
                children: "Con 24 a\xf1os de experiencia",
              }),
              " en la compra-venta de",
              " ",
              (0, s.jsx)("strong", {
                children: "Material para Construcci\xf3n",
              }),
              " de Obra Negra, Acabados, Iluminaci\xf3n, manejando los mejores productos del pa\xeds, logrando distribuir a todo el estado de ",
              (0, s.jsx)("strong", { children: "Veracruz" }),
              ". Con los mejores Productos de los Mejores Proveedores.",
            ],
          });
        },
        x = "/grupo-vasquez-web/_next/static/media/materiales.d222443d.png",
        m = function (e) {
          var t = e.refElement,
            a = e.isOnScreen;
          return (0, s.jsxs)("div", {
            className:
              "w-full min-h-[95vh] mb-24 p-2 pb-0 flex flex-col justify-start items-start relative border-[1px] border-sky-800 border-opacity-40",
            children: [
              (0, s.jsxs)("h2", {
                ref: t,
                className:
                  "text-left tracking-[-1.2px] text-sky-800 text-4xl font-aeonik_medium translate-y-4 relative z-[1] opacity-0 ".concat(
                    a && "animate-fadeInLeft"
                  ),
                children: [
                  "MATERIALES V\xc1SQUEZ HNOS ",
                  (0, s.jsx)("br", {}),
                  " SA DE CV",
                ],
              }),
              (0, s.jsx)("img", {
                src: x,
                alt: "Logotipo de MATERIALES V\xc1SQUEZ HNOS SA DE CV",
                className: "w-1/2 mt-4 mx-auto",
              }),
              (0, s.jsxs)("div", {
                className: "mt-8 text-sky-800",
                children: [
                  (0, s.jsx)("h4", {
                    className: "text-left text-lg font-sans font-bold",
                    children: "MANEJAMOS PRODUCTOS EN",
                  }),
                  (0, s.jsxs)("ul", {
                    children: [
                      (0, s.jsx)("li", {
                        className: "my-2 text-base font-sans",
                        children: (0, s.jsx)("strong", {
                          className: "font-semibold",
                          children: "FERRETERIA",
                        }),
                      }),
                      (0, s.jsx)("li", {
                        className: "my-2 text-base font-sans",
                        children: (0, s.jsx)("strong", {
                          className: "font-semibold",
                          children: "OBRA NEGRA",
                        }),
                      }),
                      (0, s.jsx)("li", {
                        className: "my-2 text-base font-sans",
                        children: (0, s.jsx)("strong", {
                          className: "font-semibold",
                          children: "MUEBLES",
                        }),
                      }),
                      (0, s.jsx)("li", {
                        className: "my-2 text-base font-sans",
                        children: (0, s.jsx)("strong", {
                          className: "font-semibold",
                          children: "ACABADOS",
                        }),
                      }),
                      (0, s.jsx)("li", {
                        className: "my-2 text-base font-sans",
                        children: (0, s.jsx)("strong", {
                          className: "font-semibold",
                          children: "HOGAR",
                        }),
                      }),
                      (0, s.jsx)("li", {
                        className: "my-2 text-base font-sans",
                        children: (0, s.jsx)("strong", {
                          className: "font-semibold",
                          children: "AGREGADOS",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-[70%] flex justify-center items-center absolute bottom-0 -right-20 z-[0]",
                children: [
                  (0, s.jsx)("h4", {
                    className:
                      "tracking-[-1.2px] text-sky-800 text-base font-aeonik_medium capitalize underline z-[1] -rotate-90 absolute origin-left bottom-0 -left-4",
                    children: "SUCURSAL LAZARO CARDENAS".toLocaleLowerCase(),
                  }),
                  (0, s.jsx)("img", {
                    src: "https://images.unsplash.com/photo-1653203187698-530a34a80ba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                    alt: "Imagen Grupo Vasquez",
                    className: "w-full object-contain shadow-xl relative z-[0]",
                  }),
                ],
              }),
            ],
          });
        },
        h = a(8352),
        p = a(1911),
        b =
          (a(1082),
          a(1669),
          [
            {
              url: "https://images.unsplash.com/photo-1602251223517-734aa9a8bd41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
              alt: "Imagen de SUCURSAL HOME CENTER",
              name: "SUCURSAL HOME CENTER",
              address:
                "AV. LAZARO CARDENAS #410, COL. BADILLO, C.P. 91180, XALAPA, VER.",
            },
            {
              url: "https://images.unsplash.com/photo-1580651202259-7674e27e522a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
              alt: "Imagen de SUCURSAL BANDERILLA",
              name: "SUCURSAL BANDERILLA",
              address:
                "Carretera nacional xalapa-banderilla s/n km. 2, col. centro, banderilla, ver.",
            },
            {
              url: "https://images.unsplash.com/photo-1580654842783-4f4cbcd3ae82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
              alt: "Imagen de SUCURSAL LAZARO CARDENAS",
              name: "SUCURSAL LAZARO CARDENAS",
              address:
                "Av. lazaro cardenas #274. col. encinal, c.p. 91180, xalapa, ver.",
            },
            {
              url: "https://images.unsplash.com/photo-1541474846910-67332bd2498d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
              alt: "Imagen de SUCURSAL MARGARITA OLIVO",
              name: "SUCURSAL MARGARITA OLIVO",
              address:
                "Carretera xalapa-castillo #201, col. la tranca, c.p. 91165, xalapa, ver.",
            },
            {
              url: "https://images.unsplash.com/photo-1542581509-7e87190743b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
              alt: "Imagen de SUCURSAL CASTILLO",
              name: "SUCURSAL CASTILLO",
              address:
                "Carretera xalapa-castillo #201, col. la tranca, c.p. 91165, xalapa, ver.",
            },
            {
              url: "https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80",
              alt: "Imagen de SUCURSAL ATENAS",
              name: "SUCURSAL ATENAS",
              address:
                "AV. ATENAS VERACRUZANA #1906, COL. REVOLUCI\xd3N, C.P. 91110, XALAPA, VER.",
            },
            {
              url: "https://images.unsplash.com/photo-1482350325005-eda5e677279b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
              alt: "Imagen de SUCURSAL ALTO LUCERO",
              name: "SUCURSAL ALTO LUCERO",
              address:
                "AV. CONGRESO #18, COL. CENTRO, C.P. 91460, ALTO LUCERO, VER.",
            },
          ]),
        j = function () {
          var e = {
            clickable: !0,
            renderBullet: function (e, t) {
              return '<span class="'
                .concat(t, '">')
                .concat(String(e + 1).padStart(2, "0"), "-")
                .concat(String(b.length).padStart(2, "0"), "</span>");
            },
          };
          return (0, s.jsx)("div", {
            className: "w-full flex justify-center items-center",
            children: (0, s.jsx)("div", {
              className: "w-[90%] ml-auto flex justify-center items-center",
              children: (0, s.jsx)(h.tq, {
                slidesPerView: "auto",
                spaceBetween: 20,
                keyboard: { enabled: !0 },
                loop: !1,
                pagination: e,
                modules: [p.Gk, p.N1, p.W_, p.tl],
                className: "mySwiper",
                children: b.map(function (e) {
                  var t = e.url,
                    a = e.alt,
                    n = e.name;
                  e.address;
                  return (0,
                  s.jsx)(h.o5, { children: (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("h4", { className: "mb-2 tracking-[1.2px] text-sky-800 text-left text-xl font-aeonik_medium capitalize underline z-[1]", children: n.toLocaleLowerCase() }), (0, s.jsx)("div", { className: "h-96", children: (0, s.jsx)("img", { src: t, alt: a, className: "w-full h-full object-cover shadow-xl" }) })] }) }, t);
                }),
              }),
            }),
          });
        },
        g = a(6365),
        N = function (e) {
          var t = e.phone,
            a = e.web,
            n = e.textColor,
            r = void 0 === n ? "text-neutral-200" : n,
            l = e.addStyles,
            i = void 0 === l ? "p-8 pr-1" : l;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className: "w-full ".concat(
                  i,
                  " flex flex-col justify-start items-start"
                ),
                children: [
                  "" !== t &&
                    (0, s.jsxs)("div", {
                      className: "w-full flex justify-start items-center",
                      children: [
                        (0, s.jsx)("p", {
                          className: "mb-2 tracking-[1.2px] ".concat(
                            r,
                            " text-left text-xl font-aeonik_medium capitalize underline"
                          ),
                          children: "TELEFONO:".toLocaleLowerCase(),
                        }),
                        (0, s.jsx)("a", {
                          className: "ml-4 tracking-[1.2px] ".concat(
                            r,
                            " text-left text-base font-aeonik_medium cursor-pointer"
                          ),
                          href: "tel:".concat(t.replace(/ /g, "")),
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: t,
                        }),
                      ],
                    }),
                  !!a &&
                    (0, s.jsxs)("div", {
                      className: "w-full mt-4 flex justify-start items-center",
                      children: [
                        (0, s.jsx)("a", {
                          className: "tracking-[1.2px] ".concat(
                            r,
                            " text-left text-base font-aeonik_medium cursor-pointer"
                          ),
                          href: "https://".concat(a, "/"),
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: a,
                        }),
                        (0, s.jsx)(g.Z, {
                          className: "h-4 w-4 ml-2 ".concat(
                            r.replace("text", "stroke")
                          ),
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                ],
              }),
              (0, s.jsx)(g.Z, {
                className: "h-4 w-4 ml-2 stroke-sky-800 hidden",
                "aria-hidden": "true",
              }),
              (0, s.jsx)(g.Z, {
                className: "h-4 w-4 ml-2 stroke-neutral-200 hidden",
                "aria-hidden": "true",
              }),
              (0, s.jsx)(g.Z, {
                className: "h-4 w-4 ml-2 stroke-blue-900 hidden",
                "aria-hidden": "true",
              }),
            ],
          });
        },
        w = function () {
          var e = (0, l.useRef)(null),
            t = u(e);
          return (0, s.jsxs)("section", {
            className: "w-full pb-8 bg-zinc-200 z-[1] relative",
            id: "Materiales",
            children: [
              (0, s.jsx)(f, {}),
              (0, s.jsx)("div", {
                className: "w-full p-8 flex overflow-x-hidden",
                children: (0, s.jsx)(m, { refElement: e, isOnScreen: t }),
              }),
              (0, s.jsx)(j, {}),
              (0, s.jsx)(N, {
                phone: "228 840 1919",
                web: "www.materialesvasquezhnos.com.mx",
                textColor: "text-sky-800",
              }),
            ],
          });
        },
        v =
          "/grupo-vasquez-web/_next/static/media/bg-trasnportes.3bb4a0f0.jpeg";
      function A(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
        return s;
      }
      function y(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != a) {
              var s,
                n,
                r = [],
                l = !0,
                i = !1;
              try {
                for (
                  a = a.call(e);
                  !(l = (s = a.next()).done) &&
                  (r.push(s.value), !t || r.length !== t);
                  l = !0
                );
              } catch (o) {
                (i = !0), (n = o);
              } finally {
                try {
                  l || null == a.return || a.return();
                } finally {
                  if (i) throw n;
                }
              }
              return r;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return A(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === a && e.constructor && (a = e.constructor.name);
            if ("Map" === a || "Set" === a) return Array.from(a);
            if (
              "Arguments" === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return A(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var S = function () {
          var e = (0, l.useRef)(null),
            t = u(e),
            a = y(i(), 1)[0],
            n = (0, l.useState)("0px"),
            r = n[0],
            o = n[1];
          return (
            (0, l.useEffect)(
              function () {
                if (t) {
                  var e = window.outerHeight,
                    s = 2;
                  e <= 896 && (s = 2.08),
                    o(
                      "-".concat(
                        (10 * (a / 100 - (e / 100) * s)).toFixed(2),
                        "px"
                      )
                    );
                }
              },
              [t, a]
            ),
            (0, s.jsxs)("div", {
              className: "w-full h-72",
              children: [
                (0, s.jsxs)("h2", {
                  style: t ? { transform: "translateY(".concat(r, ")") } : {},
                  ref: e,
                  className:
                    "text-right tracking-[-1.2px] text-neutral-200 text-3xl font-aeonik_medium relative z-[1] transition-bezier duration-100",
                  children: [
                    "TRANSPORTES VASQUEZ ",
                    (0, s.jsx)("br", {}),
                    " SA DE CV",
                  ],
                }),
                (0, s.jsx)("img", {
                  src: v,
                  alt: "Fotografia de caminoes de TRANSPORTES VASQUEZ",
                  className: "w-full absolute top-40 left-0 z-0 opacity-80",
                }),
              ],
            })
          );
        },
        E = function () {
          var e = (0, l.useRef)(null),
            t = u(e);
          return (0, s.jsxs)("div", {
            ref: e,
            className: "w-full my-6 flex justify-between items-center",
            children: [
              (0, s.jsx)("p", {
                style: t
                  ? { animation: "fadeInRight 1s ease-in 0s 1 normal forwards" }
                  : {},
                className:
                  "w-fit font-sans text-neutral-200 text-lg opacity-0 ".concat(
                    t && "animate-fadeInRight"
                  ),
                children: (0, s.jsx)("strong", { children: "SERVICIO" }),
              }),
              (0, s.jsx)("p", {
                style: t
                  ? {
                      animation:
                        "fadeInRight 1s ease-in 0.5s 1 normal forwards",
                    }
                  : {},
                className:
                  "w-fit font-sans text-neutral-200 text-lg opacity-0 ".concat(
                    t && "animate-fadeInRight"
                  ),
                children: (0, s.jsx)("strong", { children: "EXPERIENCIA" }),
              }),
              (0, s.jsx)("p", {
                style: t
                  ? { animation: "fadeInRight 1s ease-in 1s 1 normal forwards" }
                  : {},
                className:
                  "w-fit font-sans text-neutral-200 text-lg opacity-0 ".concat(
                    t && "animate-fadeInRight"
                  ),
                children: (0, s.jsx)("strong", { children: "SEGURIDAD" }),
              }),
            ],
          });
        },
        R = function () {
          var e = (0, l.useRef)(null),
            t = u(e);
          return (0, s.jsxs)("div", {
            className: "w-full mt-56 flex flex-col justify-start items-start",
            children: [
              (0, s.jsx)("p", {
                className:
                  "mt-4 font-sans font-semibold text-white text-xl underline",
                children: "MISI\xd3N",
              }),
              (0, s.jsxs)("p", {
                className: "font-sans text-neutral-200 text-base",
                children: [
                  "Formar un equipo de calidad porque estamos convencidos que solo gente profesional pueden ofrecer un servicio adecuado, soportando nuestro desarrollo en un proceso de mejora continua con el objetivo de brindar",
                  (0, s.jsx)("strong", {
                    className: "font-normal",
                    children: " EL MEJOR SERVICIO de carga",
                  }),
                  " a nivel nacional equilibrando una justa rentabilidad para garantizar un crecimiento solid\xf3 y continuo.",
                ],
              }),
              (0, s.jsx)("p", {
                ref: e,
                className:
                  "mt-4 font-sans font-semibold text-white text-xl underline",
                children: "VISI\xd3N",
              }),
              (0, s.jsx)("p", {
                className: "font-sans text-neutral-200 text-base",
                children:
                  "Siendo el transporte de carga una necesidad fundamental de la sociedad requiere integrarse al cambio y crecimiento tecnol\xf3gico a fin de brindar al cliente un servicio que proporcione:",
              }),
              (0, s.jsxs)("ul", {
                children: [
                  (0, s.jsxs)("li", {
                    className:
                      "font-sans text-neutral-200 text-base list-disc opacity-0 ".concat(
                        t && "animate-fadeInRight"
                      ),
                    children: [
                      (0, s.jsx)("strong", { children: "Seguridad:" }),
                      " su mercanc\xeda tiene un valor econ\xf3mico y moral que pudiera representar su sostenimiento",
                    ],
                  }),
                  (0, s.jsxs)("li", {
                    className:
                      "font-sans text-neutral-200 text-base list-disc opacity-0 ".concat(
                        t && "animate-fadeInRight"
                      ),
                    children: [
                      (0, s.jsx)("strong", { children: "Arraigo:" }),
                      " Un cliente satisfecho, siempre ser\xe1 un cliente permanente",
                    ],
                  }),
                  " ",
                  (0, s.jsxs)("li", {
                    className:
                      "font-sans text-neutral-200 text-base list-disc opacity-0 ".concat(
                        t && "animate-fadeInRight"
                      ),
                    children: [
                      (0, s.jsx)("strong", { children: "Oportunidad:" }),
                      " brindar un servicio en el que la carga transportada llegue a su destino en el tiempo establecido",
                    ],
                  }),
                  (0, s.jsxs)("li", {
                    className:
                      "font-sans text-neutral-200 text-base list-disc opacity-0 ".concat(
                        t && "animate-fadeInRight"
                      ),
                    children: [
                      (0, s.jsx)("strong", { children: "Cambio:" }),
                      " involucrar a nuestros clientes en nuestro crecimiento y desarrollo brind\xe1ndoles la oportunidad de orientarlos en nuestros sistemas actuales de trabajo.",
                    ],
                  }),
                  (0, s.jsxs)("li", {
                    className:
                      "font-sans text-neutral-200 text-base list-disc opacity-0 ".concat(
                        t && "animate-fadeInRight"
                      ),
                    children: [
                      (0, s.jsx)("strong", { children: "Precio Justo:" }),
                      " El valor de un servicio lo rige el precio justo garantizando la confiabilidad y rentabilidad.",
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        O = "/grupo-vasquez-web/_next/static/media/transportes-1.abd848c6.png",
        C = "/grupo-vasquez-web/_next/static/media/transportes-2.5ca0fb04.png",
        L =
          "/grupo-vasquez-web/_next/static/media/trasnportes-grupo-vasquez.03518164.png",
        I = function () {
          return (0, s.jsxs)("div", {
            className:
              "w-full py-4 grid grid-cols-2 grid-rows-2 gap-0 place-items-center bg-zinc-200 absolute left-0",
            children: [
              (0, s.jsx)("img", {
                src: O,
                alt: "Logotipo de TRANSPORTES VASQUEZ SA de CV",
                className: "col-span-2 w-full mx-auto",
              }),
              (0, s.jsx)("img", {
                src: C,
                alt: "Logotipo de TRANSPORTES VASQUEZ SA de CV",
                className: "h-20 mx-auto",
              }),
              (0, s.jsx)("img", {
                src: L,
                alt: "Logotipo de TRANSPORTES GRUPO VASQUEZ SA de CV",
                className: "h-20 mx-auto",
              }),
            ],
          });
        },
        U = [
          {
            name: "Cargill",
            url: "/grupo-vasquez-web/_next/static/media/cargill.677ca550.png",
          },
          {
            name: "Chedraui",
            url: "/grupo-vasquez-web/_next/static/media/chedraui.9c59c60a.png",
          },
          {
            name: "Femsa",
            url: "/grupo-vasquez-web/_next/static/media/femsa.2d37d21e.png",
          },
          {
            name: "Ingenio la Gloria",
            url: "/grupo-vasquez-web/_next/static/media/ingenio-la-gloria.2899b7c1.jpg",
          },
          {
            name: "Jals",
            url: "/grupo-vasquez-web/_next/static/media/jals.0aa09f84.png",
          },
          {
            name: "Zucarmex",
            url: "/grupo-vasquez-web/_next/static/media/zucarmex.1cfcfbbf.png",
          },
        ],
        k = function () {
          return (0, s.jsx)("div", {
            className: "w-full mt-16 flex justify-center items-center bg-white",
            id: "SwiperClients",
            children: (0, s.jsx)(h.tq, {
              slidesPerView: 3,
              spaceBetween: 20,
              keyboard: { enabled: !0 },
              pagination: {
                clickable: !0,
                renderBullet: function (e, t) {
                  return '<span class="'.concat(t, '"></span>');
                },
              },
              loop: !0,
              modules: [p.N1, p.W_, p.Rv, p.tl],
              className: "mySwiper",
              children: U.map(function (e) {
                var t = e.url,
                  a = e.name;
                return (0,
                s.jsx)(h.o5, { children: (0, s.jsx)("img", { src: t, alt: "Logotipo de ".concat(a), className: "h-28 object-contain" }) }, t);
              }),
            }),
          });
        },
        T = function () {
          return (0, s.jsxs)("div", {
            className: "w-full mt-32",
            children: [
              (0, s.jsx)("h2", {
                className:
                  "pb-2 text-left tracking-[-1.2px] text-neutral-200 text-3xl font-aeonik_medium border-b-2 border-neutral-200 relative z-[1] transition-bezier duration-100",
                children: "ALGUNOS DE NUESTROS CLIENTES",
              }),
              (0, s.jsx)(k, {}),
            ],
          });
        },
        z = function () {
          return (0, s.jsxs)("section", {
            className: "w-full p-8 pt-32 bg-regal-blue z-[1] relative",
            id: "Transportes",
            children: [
              (0, s.jsx)(S, {}),
              (0, s.jsx)(E, {}),
              (0, s.jsx)(I, {}),
              (0, s.jsx)(R, {}),
              (0, s.jsx)(T, {}),
              (0, s.jsx)(N, {
                phone: "228 155 0849",
                textColor: "text-neutral-200",
                addStyles: "px-0 py-4",
              }),
              (0, s.jsx)("div", {
                className:
                  "w-full h-80 absolute bottom-0 right-0 z-[-1] branch-svg-curved-lines opacity-50",
              }),
            ],
          });
        },
        M = "/grupo-vasquez-web/_next/static/media/civsa.accdf06a.png",
        D = "/grupo-vasquez-web/_next/static/media/amy.5d42a5bc.png",
        V = function () {
          return (0, s.jsxs)("div", {
            className:
              "w-full p-4 mb-8 grid grid-cols-2 gap-4 place-items-center",
            children: [
              (0, s.jsx)("img", {
                src: M,
                alt: "Logotipo de TRANSPORTES VASQUEZ SA de CV",
                className: "h-20 mx-auto",
              }),
              (0, s.jsx)("img", {
                src: D,
                alt: "Logotipo de TRANSPORTES GRUPO VASQUEZ SA de CV",
                className: "h-20 mx-auto",
              }),
            ],
          });
        },
        _ = function () {
          var e = (0, l.useRef)(null),
            t = (0, l.useRef)(null),
            a = (0, l.useState)(!1),
            n = a[0],
            r = a[1],
            i = function (e, t) {
              e.forEach(function (e) {
                e.intersectionRatio > 0.5 ? r(!0) : r(!1);
              });
            };
          return (
            (0, l.useEffect)(
              function () {
                t.current &&
                  new IntersectionObserver(i, { threshold: 0.5 }).observe(
                    t.current
                  );
              },
              [t]
            ),
            (0, l.useEffect)(
              function () {
                t.current && (n ? t.current.play() : t.current.pause());
              },
              [t, n]
            ),
            (0, s.jsxs)("div", {
              ref: e,
              className:
                "w-full aspect-video flex justify-center items-center bg-neutral-200 relative",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "flex justify-center items-center bg-blue-900 bg-opacity-50 absolute inset-0 z-[1]",
                  children: (0, s.jsx)("h2", {
                    className:
                      "text-center tracking-[-1.2px] text-neutral-200 text-3xl font-aeonik_medium relative z-[2] transition-bezier duration-100",
                    children: "CONTRUCTORA E INMOBILIARIA VASQUEZ",
                  }),
                }),
                (0, s.jsx)("video", {
                  ref: t,
                  className: "w-full relabsolute top-0 left-0 z-0",
                  src: "https://res.cloudinary.com/duibtuerj/video/upload/v1656958493/vasquez-inmobiliaria/video/l8ex8bttrwk0bh3ucx5t.mp4",
                  muted: !0,
                  loop: !0,
                }),
              ],
            })
          );
        },
        G = function () {
          return (0, s.jsxs)("div", {
            className: "mt-8 p-8",
            children: [
              (0, s.jsx)("h4", {
                className: "mt-4 font-sans font-semibold text-xl",
                children: "SOMOS ESPECIALISTAS EN:",
              }),
              (0, s.jsxs)("ul", {
                children: [
                  (0, s.jsx)("li", {
                    className: "my-2 text-base font-sans uppercase list-disc",
                    children: (0, s.jsx)("strong", {
                      className: "font-semibold",
                      children: "Urbanizaci\xf3n",
                    }),
                  }),
                  (0, s.jsx)("li", {
                    className: "my-2 text-base font-sans uppercase list-disc",
                    children: (0, s.jsx)("strong", {
                      className: "font-semibold",
                      children: "Construcci\xf3n Residencial",
                    }),
                  }),
                  (0, s.jsx)("li", {
                    className: "my-2 text-base font-sans uppercase list-disc",
                    children: (0, s.jsx)("strong", {
                      className: "font-semibold",
                      children: "Movimiento de Tierras",
                    }),
                  }),
                  (0, s.jsx)("li", {
                    className: "my-2 text-base font-sans uppercase list-disc",
                    children: (0, s.jsx)("strong", {
                      className: "font-semibold",
                      children:
                        "Pavimentaci\xf3n concreto Asfaltico e Hidr\xe1ulico",
                    }),
                  }),
                  (0, s.jsx)("li", {
                    className: "my-2 text-base font-sans uppercase list-disc",
                    children: (0, s.jsx)("strong", {
                      className: "font-semibold",
                      children: "L\xedneas de Conducci\xf3n de Agua",
                    }),
                  }),
                  (0, s.jsx)("li", {
                    className: "my-2 text-base font-sans uppercase list-disc",
                    children: (0, s.jsx)("strong", {
                      className: "font-semibold",
                      children: "Tanques Elevados",
                    }),
                  }),
                  (0, s.jsx)("li", {
                    className: "my-2 text-base font-sans uppercase list-disc",
                    children: (0, s.jsx)("strong", {
                      className: "font-semibold",
                      children: "Drenaje Sanitario",
                    }),
                  }),
                  (0, s.jsx)("li", {
                    className: "my-2 text-base font-sans uppercase list-disc",
                    children: (0, s.jsx)("strong", {
                      className: "font-semibold",
                      children: "Drenaje Pluvial",
                    }),
                  }),
                  (0, s.jsx)("li", {
                    className: "my-2 text-base font-sans uppercase list-disc",
                    children: (0, s.jsx)("strong", {
                      className: "font-semibold",
                      children: "Remodelaci\xf3n Casa Habitaci\xf3n",
                    }),
                  }),
                  (0, s.jsx)("li", {
                    className: "my-2 text-base font-sans uppercase list-disc",
                    children: (0, s.jsx)("strong", {
                      className: "font-semibold",
                      children: "Mantenimiento Centros de Salud",
                    }),
                  }),
                  (0, s.jsx)("li", {
                    className: "my-2 text-base font-sans uppercase list-disc",
                    children: (0, s.jsx)("strong", {
                      className: "font-semibold",
                      children: "Puentes",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        H = function (e) {
          var t = e.label,
            a = e.url,
            n = (0, l.useRef)(null),
            r = (0, l.useState)(!1),
            i = r[0],
            o = r[1],
            c = function (e) {
              e.preventDefault(),
                o(!0),
                setTimeout(function () {
                  o(!1), window.open(a, "_blank");
                }, 500);
            };
          return (
            (0, l.useEffect)(
              function () {
                if (n.current) {
                  var e = n.current;
                  return (
                    e.addEventListener("click", c),
                    function () {
                      e.removeEventListener("click", c);
                    }
                  );
                }
              },
              [n]
            ),
            (0, s.jsx)(s.Fragment, {
              children: (0, s.jsxs)("a", {
                ref: n,
                href: a,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "my-4 py-3 px-8 flex justify-center items-center text-neutral-200 tracking-widest bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl relative overflow-hidden",
                children: [
                  t,
                  i &&
                    (0, s.jsx)("span", {
                      className:
                        "w-screen aspect-square absolute left-0 bg-white bg-opacity-30 pointer-events-none rounded-full z-50 origin-center animate-ripples",
                    }),
                ],
              }),
            })
          );
        },
        q = function () {
          return (0, s.jsxs)("div", {
            className: "w-full p-8 flex justify-center items-start flex-wrap",
            children: [
              (0, s.jsxs)("h2", {
                className:
                  "w-full pb-2 text-left tracking-[-1.2px] text-3xl text-blue-900 font-aeonik_medium border-b-2 border-blue-900 relative z-[1] transition-bezier duration-100",
                children: [
                  "CONOCE NUESTROS NOVEDOSOS PROYECTOS; ",
                  (0, s.jsx)("br", {}),
                  " ",
                  (0, s.jsx)("span", {
                    className: "text-lg",
                    children: "SIN DUDA CONTAMOS CON UNO A TU MEDIDA",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-1/2 m-4 mx-auto flex flex-col justify-start items-center",
                children: [
                  (0, s.jsx)("a", {
                    href: "https://www.inmobiliariavasquez.mx/fraccionamiento/61c377063b886a7285c2a692",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label":
                      "Enlace a inmobiliariavasquez al fraccionamiento OJO DE AGUA",
                    className:
                      "w-full aspect-square flex flex-col justify-center items-center",
                    children: (0, s.jsx)("div", {
                      className: "w-full h-full bg-slate-400 rounded-lg",
                    }),
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "w-full text-xl text-center font-sans font-semibold",
                    children: "OJO DE AGUA",
                  }),
                  (0, s.jsx)("p", {
                    className: "w-full text-base text-center",
                    children: "Lleg\xf3 el momento, eleva tu estilo de vida",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "w-full my-8",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "w-full text-2xl text-center text-blue-900 font-sans font-semibold underline",
                    children: "\xbfDeseas vender tu casa o terreno?",
                  }),
                  (0, s.jsx)(H, {
                    label: "HAZLO DESDE AQU\xcd",
                    url: "https://www.inmobiliariavasquez.mx/vende-tu-propiedad",
                  }),
                ],
              }),
            ],
          });
        },
        B = function () {
          return (0, s.jsxs)("section", {
            className:
              "w-full pt-16 bg-neutral-100 z-[1] relative overflow-hidden",
            id: "Constructora",
            children: [
              (0, s.jsx)(V, {}),
              (0, s.jsx)(_, {}),
              (0, s.jsx)(G, {}),
              (0, s.jsx)(q, {}),
              (0, s.jsx)(N, {
                phone: "228 290 3272",
                web: "www.inmobiliariavasquez.mx",
                textColor: "text-blue-900",
              }),
            ],
          });
        },
        P = function () {
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(r(), {
                children: [
                  (0, s.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                  }),
                  (0, s.jsx)("title", { children: "Grupo Vaquez" }),
                  (0, s.jsx)("link", {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                  }),
                  (0, s.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                ],
              }),
              (0, s.jsx)(d, {}),
              (0, s.jsx)("div", {
                className:
                  "w-full h-80 fixed top-0 left-0 z-[1] branch-svg-lines",
              }),
              (0, s.jsx)(w, {}),
              (0, s.jsx)(z, {}),
              (0, s.jsx)(B, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [859, 774, 888, 179], function () {
      return (t = 8312), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
