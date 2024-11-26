(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
	new MutationObserver((a) => {
		for (const s of a)
			if (s.type === "childList")
				for (const i of s.addedNodes)
					i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(a) {
		const s = {};
		return (
			a.integrity && (s.integrity = a.integrity),
			a.referrerPolicy && (s.referrerPolicy = a.referrerPolicy),
			a.crossOrigin === "use-credentials"
				? (s.credentials = "include")
				: a.crossOrigin === "anonymous"
				? (s.credentials = "omit")
				: (s.credentials = "same-origin"),
			s
		);
	}
	function r(a) {
		if (a.ep) return;
		a.ep = !0;
		const s = n(a);
		fetch(a.href, s);
	}
})();
var $m =
	typeof globalThis < "u"
		? globalThis
		: typeof window < "u"
		? window
		: typeof global < "u"
		? global
		: typeof self < "u"
		? self
		: {};
function xl(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var vf = { exports: {} },
	wl = {},
	yf = { exports: {} },
	re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wa = Symbol.for("react.element"),
	Hm = Symbol.for("react.portal"),
	Vm = Symbol.for("react.fragment"),
	Wm = Symbol.for("react.strict_mode"),
	qm = Symbol.for("react.profiler"),
	Km = Symbol.for("react.provider"),
	Qm = Symbol.for("react.context"),
	Jm = Symbol.for("react.forward_ref"),
	Ym = Symbol.for("react.suspense"),
	Gm = Symbol.for("react.memo"),
	Xm = Symbol.for("react.lazy"),
	Sc = Symbol.iterator;
function Zm(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Sc && e[Sc]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var xf = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	wf = Object.assign,
	jf = {};
function Hr(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = jf),
		(this.updater = n || xf);
}
Hr.prototype.isReactComponent = {};
Hr.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
Hr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nf() {}
Nf.prototype = Hr.prototype;
function qo(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = jf),
		(this.updater = n || xf);
}
var Ko = (qo.prototype = new Nf());
Ko.constructor = qo;
wf(Ko, Hr.prototype);
Ko.isPureReactComponent = !0;
var Cc = Array.isArray,
	Sf = Object.prototype.hasOwnProperty,
	Qo = { current: null },
	Cf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ef(e, t, n) {
	var r,
		a = {},
		s = null,
		i = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (i = t.ref),
		t.key !== void 0 && (s = "" + t.key),
		t))
			Sf.call(t, r) && !Cf.hasOwnProperty(r) && (a[r] = t[r]);
	var o = arguments.length - 2;
	if (o === 1) a.children = n;
	else if (1 < o) {
		for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
		a.children = u;
	}
	if (e && e.defaultProps)
		for (r in ((o = e.defaultProps), o)) a[r] === void 0 && (a[r] = o[r]);
	return {
		$$typeof: Wa,
		type: e,
		key: s,
		ref: i,
		props: a,
		_owner: Qo.current,
	};
}
function eg(e, t) {
	return {
		$$typeof: Wa,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function Jo(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Wa;
}
function tg(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Ec = /\/+/g;
function Ql(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? tg("" + e.key)
		: t.toString(36);
}
function ks(e, t, n, r, a) {
	var s = typeof e;
	(s === "undefined" || s === "boolean") && (e = null);
	var i = !1;
	if (e === null) i = !0;
	else
		switch (s) {
			case "string":
			case "number":
				i = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case Wa:
					case Hm:
						i = !0;
				}
		}
	if (i)
		return (
			(i = e),
			(a = a(i)),
			(e = r === "" ? "." + Ql(i, 0) : r),
			Cc(a)
				? ((n = ""),
				  e != null && (n = e.replace(Ec, "$&/") + "/"),
				  ks(a, t, n, "", function (c) {
						return c;
				  }))
				: a != null &&
				  (Jo(a) &&
						(a = eg(
							a,
							n +
								(!a.key || (i && i.key === a.key)
									? ""
									: ("" + a.key).replace(Ec, "$&/") + "/") +
								e,
						)),
				  t.push(a)),
			1
		);
	if (((i = 0), (r = r === "" ? "." : r + ":"), Cc(e)))
		for (var o = 0; o < e.length; o++) {
			s = e[o];
			var u = r + Ql(s, o);
			i += ks(s, t, n, u, a);
		}
	else if (((u = Zm(e)), typeof u == "function"))
		for (e = u.call(e), o = 0; !(s = e.next()).done; )
			(s = s.value), (u = r + Ql(s, o++)), (i += ks(s, t, n, u, a));
	else if (s === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead.",
			))
		);
	return i;
}
function is(e, t, n) {
	if (e == null) return e;
	var r = [],
		a = 0;
	return (
		ks(e, r, "", "", function (s) {
			return t.call(n, s, a++);
		}),
		r
	);
}
function ng(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				},
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var at = { current: null },
	bs = { transition: null },
	rg = {
		ReactCurrentDispatcher: at,
		ReactCurrentBatchConfig: bs,
		ReactCurrentOwner: Qo,
	};
function kf() {
	throw Error("act(...) is not supported in production builds of React.");
}
re.Children = {
	map: is,
	forEach: function (e, t, n) {
		is(
			e,
			function () {
				t.apply(this, arguments);
			},
			n,
		);
	},
	count: function (e) {
		var t = 0;
		return (
			is(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			is(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Jo(e))
			throw Error(
				"React.Children.only expected to receive a single React element child.",
			);
		return e;
	},
};
re.Component = Hr;
re.Fragment = Vm;
re.Profiler = qm;
re.PureComponent = qo;
re.StrictMode = Wm;
re.Suspense = Ym;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rg;
re.act = kf;
re.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				".",
		);
	var r = wf({}, e.props),
		a = e.key,
		s = e.ref,
		i = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((s = t.ref), (i = Qo.current)),
			t.key !== void 0 && (a = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var o = e.type.defaultProps;
		for (u in t)
			Sf.call(t, u) &&
				!Cf.hasOwnProperty(u) &&
				(r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		o = Array(u);
		for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
		r.children = o;
	}
	return { $$typeof: Wa, type: e.type, key: a, ref: s, props: r, _owner: i };
};
re.createContext = function (e) {
	return (
		(e = {
			$$typeof: Qm,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Km, _context: e }),
		(e.Consumer = e)
	);
};
re.createElement = Ef;
re.createFactory = function (e) {
	var t = Ef.bind(null, e);
	return (t.type = e), t;
};
re.createRef = function () {
	return { current: null };
};
re.forwardRef = function (e) {
	return { $$typeof: Jm, render: e };
};
re.isValidElement = Jo;
re.lazy = function (e) {
	return { $$typeof: Xm, _payload: { _status: -1, _result: e }, _init: ng };
};
re.memo = function (e, t) {
	return { $$typeof: Gm, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
	var t = bs.transition;
	bs.transition = {};
	try {
		e();
	} finally {
		bs.transition = t;
	}
};
re.unstable_act = kf;
re.useCallback = function (e, t) {
	return at.current.useCallback(e, t);
};
re.useContext = function (e) {
	return at.current.useContext(e);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (e) {
	return at.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
	return at.current.useEffect(e, t);
};
re.useId = function () {
	return at.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
	return at.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
	return at.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
	return at.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
	return at.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
	return at.current.useReducer(e, t, n);
};
re.useRef = function (e) {
	return at.current.useRef(e);
};
re.useState = function (e) {
	return at.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
	return at.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
	return at.current.useTransition();
};
re.version = "18.3.1";
yf.exports = re;
var h = yf.exports;
const ae = xl(h);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ag = h,
	sg = Symbol.for("react.element"),
	lg = Symbol.for("react.fragment"),
	ig = Object.prototype.hasOwnProperty,
	og = ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	ug = { key: !0, ref: !0, __self: !0, __source: !0 };
function bf(e, t, n) {
	var r,
		a = {},
		s = null,
		i = null;
	n !== void 0 && (s = "" + n),
		t.key !== void 0 && (s = "" + t.key),
		t.ref !== void 0 && (i = t.ref);
	for (r in t) ig.call(t, r) && !ug.hasOwnProperty(r) && (a[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) a[r] === void 0 && (a[r] = t[r]);
	return {
		$$typeof: sg,
		type: e,
		key: s,
		ref: i,
		props: a,
		_owner: og.current,
	};
}
wl.Fragment = lg;
wl.jsx = bf;
wl.jsxs = bf;
vf.exports = wl;
var l = vf.exports,
	Ri = {},
	Pf = { exports: {} },
	Nt = {},
	Rf = { exports: {} },
	_f = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(A, O) {
		var b = A.length;
		A.push(O);
		e: for (; 0 < b; ) {
			var K = (b - 1) >>> 1,
				F = A[K];
			if (0 < a(F, O)) (A[K] = O), (A[b] = F), (b = K);
			else break e;
		}
	}
	function n(A) {
		return A.length === 0 ? null : A[0];
	}
	function r(A) {
		if (A.length === 0) return null;
		var O = A[0],
			b = A.pop();
		if (b !== O) {
			A[0] = b;
			e: for (var K = 0, F = A.length, Q = F >>> 1; K < Q; ) {
				var X = 2 * (K + 1) - 1,
					oe = A[X],
					pe = X + 1,
					Ie = A[pe];
				if (0 > a(oe, b))
					pe < F && 0 > a(Ie, oe)
						? ((A[K] = Ie), (A[pe] = b), (K = pe))
						: ((A[K] = oe), (A[X] = b), (K = X));
				else if (pe < F && 0 > a(Ie, b)) (A[K] = Ie), (A[pe] = b), (K = pe);
				else break e;
			}
		}
		return O;
	}
	function a(A, O) {
		var b = A.sortIndex - O.sortIndex;
		return b !== 0 ? b : A.id - O.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var s = performance;
		e.unstable_now = function () {
			return s.now();
		};
	} else {
		var i = Date,
			o = i.now();
		e.unstable_now = function () {
			return i.now() - o;
		};
	}
	var u = [],
		c = [],
		d = 1,
		p = null,
		m = 3,
		y = !1,
		j = !1,
		g = !1,
		S = typeof setTimeout == "function" ? setTimeout : null,
		v = typeof clearTimeout == "function" ? clearTimeout : null,
		f = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function x(A) {
		for (var O = n(c); O !== null; ) {
			if (O.callback === null) r(c);
			else if (O.startTime <= A)
				r(c), (O.sortIndex = O.expirationTime), t(u, O);
			else break;
			O = n(c);
		}
	}
	function E(A) {
		if (((g = !1), x(A), !j))
			if (n(u) !== null) (j = !0), Ve(w);
			else {
				var O = n(c);
				O !== null && ze(E, O.startTime - A);
			}
	}
	function w(A, O) {
		(j = !1), g && ((g = !1), v(k), (k = -1)), (y = !0);
		var b = m;
		try {
			for (
				x(O), p = n(u);
				p !== null && (!(p.expirationTime > O) || (A && !de()));

			) {
				var K = p.callback;
				if (typeof K == "function") {
					(p.callback = null), (m = p.priorityLevel);
					var F = K(p.expirationTime <= O);
					(O = e.unstable_now()),
						typeof F == "function" ? (p.callback = F) : p === n(u) && r(u),
						x(O);
				} else r(u);
				p = n(u);
			}
			if (p !== null) var Q = !0;
			else {
				var X = n(c);
				X !== null && ze(E, X.startTime - O), (Q = !1);
			}
			return Q;
		} finally {
			(p = null), (m = b), (y = !1);
		}
	}
	var P = !1,
		L = null,
		k = -1,
		M = 5,
		$ = -1;
	function de() {
		return !(e.unstable_now() - $ < M);
	}
	function I() {
		if (L !== null) {
			var A = e.unstable_now();
			$ = A;
			var O = !0;
			try {
				O = L(!0, A);
			} finally {
				O ? H() : ((P = !1), (L = null));
			}
		} else P = !1;
	}
	var H;
	if (typeof f == "function")
		H = function () {
			f(I);
		};
	else if (typeof MessageChannel < "u") {
		var te = new MessageChannel(),
			Y = te.port2;
		(te.port1.onmessage = I),
			(H = function () {
				Y.postMessage(null);
			});
	} else
		H = function () {
			S(I, 0);
		};
	function Ve(A) {
		(L = A), P || ((P = !0), H());
	}
	function ze(A, O) {
		k = S(function () {
			A(e.unstable_now());
		}, O);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (A) {
			A.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			j || y || ((j = !0), Ve(w));
		}),
		(e.unstable_forceFrameRate = function (A) {
			0 > A || 125 < A
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
				  )
				: (M = 0 < A ? Math.floor(1e3 / A) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return m;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(u);
		}),
		(e.unstable_next = function (A) {
			switch (m) {
				case 1:
				case 2:
				case 3:
					var O = 3;
					break;
				default:
					O = m;
			}
			var b = m;
			m = O;
			try {
				return A();
			} finally {
				m = b;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (A, O) {
			switch (A) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					A = 3;
			}
			var b = m;
			m = A;
			try {
				return O();
			} finally {
				m = b;
			}
		}),
		(e.unstable_scheduleCallback = function (A, O, b) {
			var K = e.unstable_now();
			switch (
				(typeof b == "object" && b !== null
					? ((b = b.delay), (b = typeof b == "number" && 0 < b ? K + b : K))
					: (b = K),
				A)
			) {
				case 1:
					var F = -1;
					break;
				case 2:
					F = 250;
					break;
				case 5:
					F = 1073741823;
					break;
				case 4:
					F = 1e4;
					break;
				default:
					F = 5e3;
			}
			return (
				(F = b + F),
				(A = {
					id: d++,
					callback: O,
					priorityLevel: A,
					startTime: b,
					expirationTime: F,
					sortIndex: -1,
				}),
				b > K
					? ((A.sortIndex = b),
					  t(c, A),
					  n(u) === null &&
							A === n(c) &&
							(g ? (v(k), (k = -1)) : (g = !0), ze(E, b - K)))
					: ((A.sortIndex = F), t(u, A), j || y || ((j = !0), Ve(w))),
				A
			);
		}),
		(e.unstable_shouldYield = de),
		(e.unstable_wrapCallback = function (A) {
			var O = m;
			return function () {
				var b = m;
				m = O;
				try {
					return A.apply(this, arguments);
				} finally {
					m = b;
				}
			};
		});
})(_f);
Rf.exports = _f;
var cg = Rf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dg = h,
	wt = cg;
function D(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var Lf = new Set(),
	ka = {};
function cr(e, t) {
	Fr(e, t), Fr(e + "Capture", t);
}
function Fr(e, t) {
	for (ka[e] = t, e = 0; e < t.length; e++) Lf.add(t[e]);
}
var un = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	_i = Object.prototype.hasOwnProperty,
	fg =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	kc = {},
	bc = {};
function hg(e) {
	return _i.call(bc, e)
		? !0
		: _i.call(kc, e)
		? !1
		: fg.test(e)
		? (bc[e] = !0)
		: ((kc[e] = !0), !1);
}
function pg(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function mg(e, t, n, r) {
	if (t === null || typeof t > "u" || pg(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function st(e, t, n, r, a, s, i) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = a),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = s),
		(this.removeEmptyString = i);
}
var He = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		He[e] = new st(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	He[t] = new st(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	He[e] = new st(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	He[e] = new st(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		He[e] = new st(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	He[e] = new st(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	He[e] = new st(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	He[e] = new st(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	He[e] = new st(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yo = /[\-:]([a-z])/g;
function Go(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Yo, Go);
		He[t] = new st(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Yo, Go);
		He[t] = new st(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(Yo, Go);
	He[t] = new st(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	He[e] = new st(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
He.xlinkHref = new st(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
	He[e] = new st(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xo(e, t, n, r) {
	var a = He.hasOwnProperty(t) ? He[t] : null;
	(a !== null
		? a.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(mg(t, n, a, r) && (n = null),
		r || a === null
			? hg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: a.mustUseProperty
			? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : "") : n)
			: ((t = a.attributeName),
			  (r = a.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((a = a.type),
					  (n = a === 3 || (a === 4 && n === !0) ? "" : "" + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var hn = dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	os = Symbol.for("react.element"),
	yr = Symbol.for("react.portal"),
	xr = Symbol.for("react.fragment"),
	Zo = Symbol.for("react.strict_mode"),
	Li = Symbol.for("react.profiler"),
	Of = Symbol.for("react.provider"),
	Tf = Symbol.for("react.context"),
	eu = Symbol.for("react.forward_ref"),
	Oi = Symbol.for("react.suspense"),
	Ti = Symbol.for("react.suspense_list"),
	tu = Symbol.for("react.memo"),
	jn = Symbol.for("react.lazy"),
	Df = Symbol.for("react.offscreen"),
	Pc = Symbol.iterator;
function ea(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Pc && e[Pc]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var Ee = Object.assign,
	Jl;
function fa(e) {
	if (Jl === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Jl = (t && t[1]) || "";
		}
	return (
		`
` +
		Jl +
		e
	);
}
var Yl = !1;
function Gl(e, t) {
	if (!e || Yl) return "";
	Yl = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (c) {
					var r = c;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (c) {
					r = c;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (c) {
				r = c;
			}
			e();
		}
	} catch (c) {
		if (c && r && typeof c.stack == "string") {
			for (
				var a = c.stack.split(`
`),
					s = r.stack.split(`
`),
					i = a.length - 1,
					o = s.length - 1;
				1 <= i && 0 <= o && a[i] !== s[o];

			)
				o--;
			for (; 1 <= i && 0 <= o; i--, o--)
				if (a[i] !== s[o]) {
					if (i !== 1 || o !== 1)
						do
							if ((i--, o--, 0 > o || a[i] !== s[o])) {
								var u =
									`
` + a[i].replace(" at new ", " at ");
								return (
									e.displayName &&
										u.includes("<anonymous>") &&
										(u = u.replace("<anonymous>", e.displayName)),
									u
								);
							}
						while (1 <= i && 0 <= o);
					break;
				}
		}
	} finally {
		(Yl = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? fa(e) : "";
}
function gg(e) {
	switch (e.tag) {
		case 5:
			return fa(e.type);
		case 16:
			return fa("Lazy");
		case 13:
			return fa("Suspense");
		case 19:
			return fa("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = Gl(e.type, !1)), e;
		case 11:
			return (e = Gl(e.type.render, !1)), e;
		case 1:
			return (e = Gl(e.type, !0)), e;
		default:
			return "";
	}
}
function Di(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case xr:
			return "Fragment";
		case yr:
			return "Portal";
		case Li:
			return "Profiler";
		case Zo:
			return "StrictMode";
		case Oi:
			return "Suspense";
		case Ti:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case Tf:
				return (e.displayName || "Context") + ".Consumer";
			case Of:
				return (e._context.displayName || "Context") + ".Provider";
			case eu:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case tu:
				return (
					(t = e.displayName || null), t !== null ? t : Di(e.type) || "Memo"
				);
			case jn:
				(t = e._payload), (e = e._init);
				try {
					return Di(e(t));
				} catch {}
		}
	return null;
}
function vg(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return Di(t);
		case 8:
			return t === Zo ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function Fn(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function Af(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function yg(e) {
	var t = Af(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var a = n.get,
			s = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return a.call(this);
				},
				set: function (i) {
					(r = "" + i), s.call(this, i);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (i) {
					r = "" + i;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function us(e) {
	e._valueTracker || (e._valueTracker = yg(e));
}
function Ff(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = Af(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Hs(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Ai(e, t) {
	var n = t.checked;
	return Ee({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Rc(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Fn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function Mf(e, t) {
	(t = t.checked), t != null && Xo(e, "checked", t, !1);
}
function Fi(e, t) {
	Mf(e, t);
	var n = Fn(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? Mi(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && Mi(e, t.type, Fn(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function _c(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function Mi(e, t, n) {
	(t !== "number" || Hs(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ha = Array.isArray;
function _r(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
		for (n = 0; n < e.length; n++)
			(a = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== a && (e[n].selected = a),
				a && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + Fn(n), t = null, a = 0; a < e.length; a++) {
			if (e[a].value === n) {
				(e[a].selected = !0), r && (e[a].defaultSelected = !0);
				return;
			}
			t !== null || e[a].disabled || (t = e[a]);
		}
		t !== null && (t.selected = !0);
	}
}
function zi(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
	return Ee({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function Lc(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(D(92));
			if (ha(n)) {
				if (1 < n.length) throw Error(D(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: Fn(n) };
}
function zf(e, t) {
	var n = Fn(t.value),
		r = Fn(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function Oc(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function If(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function Ii(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? If(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var cs,
	Uf = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, a) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, a);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				cs = cs || document.createElement("div"),
					cs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = cs.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function ba(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var va = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	xg = ["Webkit", "ms", "Moz", "O"];
Object.keys(va).forEach(function (e) {
	xg.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (va[t] = va[e]);
	});
});
function Bf(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (va.hasOwnProperty(e) && va[e])
		? ("" + t).trim()
		: t + "px";
}
function $f(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				a = Bf(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
		}
}
var wg = Ee(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	},
);
function Ui(e, t) {
	if (t) {
		if (wg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(D(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(D(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(D(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(D(62));
	}
}
function Bi(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var $i = null;
function nu(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Hi = null,
	Lr = null,
	Or = null;
function Tc(e) {
	if ((e = Qa(e))) {
		if (typeof Hi != "function") throw Error(D(280));
		var t = e.stateNode;
		t && ((t = El(t)), Hi(e.stateNode, e.type, t));
	}
}
function Hf(e) {
	Lr ? (Or ? Or.push(e) : (Or = [e])) : (Lr = e);
}
function Vf() {
	if (Lr) {
		var e = Lr,
			t = Or;
		if (((Or = Lr = null), Tc(e), t)) for (e = 0; e < t.length; e++) Tc(t[e]);
	}
}
function Wf(e, t) {
	return e(t);
}
function qf() {}
var Xl = !1;
function Kf(e, t, n) {
	if (Xl) return e(t, n);
	Xl = !0;
	try {
		return Wf(e, t, n);
	} finally {
		(Xl = !1), (Lr !== null || Or !== null) && (qf(), Vf());
	}
}
function Pa(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = El(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(D(231, t, typeof n));
	return n;
}
var Vi = !1;
if (un)
	try {
		var ta = {};
		Object.defineProperty(ta, "passive", {
			get: function () {
				Vi = !0;
			},
		}),
			window.addEventListener("test", ta, ta),
			window.removeEventListener("test", ta, ta);
	} catch {
		Vi = !1;
	}
function jg(e, t, n, r, a, s, i, o, u) {
	var c = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, c);
	} catch (d) {
		this.onError(d);
	}
}
var ya = !1,
	Vs = null,
	Ws = !1,
	Wi = null,
	Ng = {
		onError: function (e) {
			(ya = !0), (Vs = e);
		},
	};
function Sg(e, t, n, r, a, s, i, o, u) {
	(ya = !1), (Vs = null), jg.apply(Ng, arguments);
}
function Cg(e, t, n, r, a, s, i, o, u) {
	if ((Sg.apply(this, arguments), ya)) {
		if (ya) {
			var c = Vs;
			(ya = !1), (Vs = null);
		} else throw Error(D(198));
		Ws || ((Ws = !0), (Wi = c));
	}
}
function dr(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function Qf(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function Dc(e) {
	if (dr(e) !== e) throw Error(D(188));
}
function Eg(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = dr(e)), t === null)) throw Error(D(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var a = n.return;
		if (a === null) break;
		var s = a.alternate;
		if (s === null) {
			if (((r = a.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (a.child === s.child) {
			for (s = a.child; s; ) {
				if (s === n) return Dc(a), e;
				if (s === r) return Dc(a), t;
				s = s.sibling;
			}
			throw Error(D(188));
		}
		if (n.return !== r.return) (n = a), (r = s);
		else {
			for (var i = !1, o = a.child; o; ) {
				if (o === n) {
					(i = !0), (n = a), (r = s);
					break;
				}
				if (o === r) {
					(i = !0), (r = a), (n = s);
					break;
				}
				o = o.sibling;
			}
			if (!i) {
				for (o = s.child; o; ) {
					if (o === n) {
						(i = !0), (n = s), (r = a);
						break;
					}
					if (o === r) {
						(i = !0), (r = s), (n = a);
						break;
					}
					o = o.sibling;
				}
				if (!i) throw Error(D(189));
			}
		}
		if (n.alternate !== r) throw Error(D(190));
	}
	if (n.tag !== 3) throw Error(D(188));
	return n.stateNode.current === n ? e : t;
}
function Jf(e) {
	return (e = Eg(e)), e !== null ? Yf(e) : null;
}
function Yf(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Yf(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Gf = wt.unstable_scheduleCallback,
	Ac = wt.unstable_cancelCallback,
	kg = wt.unstable_shouldYield,
	bg = wt.unstable_requestPaint,
	Re = wt.unstable_now,
	Pg = wt.unstable_getCurrentPriorityLevel,
	ru = wt.unstable_ImmediatePriority,
	Xf = wt.unstable_UserBlockingPriority,
	qs = wt.unstable_NormalPriority,
	Rg = wt.unstable_LowPriority,
	Zf = wt.unstable_IdlePriority,
	jl = null,
	Yt = null;
function _g(e) {
	if (Yt && typeof Yt.onCommitFiberRoot == "function")
		try {
			Yt.onCommitFiberRoot(jl, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Mt = Math.clz32 ? Math.clz32 : Tg,
	Lg = Math.log,
	Og = Math.LN2;
function Tg(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Lg(e) / Og) | 0)) | 0;
}
var ds = 64,
	fs = 4194304;
function pa(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Ks(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		a = e.suspendedLanes,
		s = e.pingedLanes,
		i = n & 268435455;
	if (i !== 0) {
		var o = i & ~a;
		o !== 0 ? (r = pa(o)) : ((s &= i), s !== 0 && (r = pa(s)));
	} else (i = n & ~a), i !== 0 ? (r = pa(i)) : s !== 0 && (r = pa(s));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & a) &&
		((a = r & -r), (s = t & -t), a >= s || (a === 16 && (s & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Mt(t)), (a = 1 << n), (r |= e[n]), (t &= ~a);
	return r;
}
function Dg(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function Ag(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			a = e.expirationTimes,
			s = e.pendingLanes;
		0 < s;

	) {
		var i = 31 - Mt(s),
			o = 1 << i,
			u = a[i];
		u === -1
			? (!(o & n) || o & r) && (a[i] = Dg(o, t))
			: u <= t && (e.expiredLanes |= o),
			(s &= ~o);
	}
}
function qi(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function eh() {
	var e = ds;
	return (ds <<= 1), !(ds & 4194240) && (ds = 64), e;
}
function Zl(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function qa(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Mt(t)),
		(e[t] = n);
}
function Fg(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var a = 31 - Mt(n),
			s = 1 << a;
		(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~s);
	}
}
function au(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Mt(n),
			a = 1 << r;
		(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
	}
}
var ue = 0;
function th(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var nh,
	su,
	rh,
	ah,
	sh,
	Ki = !1,
	hs = [],
	Pn = null,
	Rn = null,
	_n = null,
	Ra = new Map(),
	_a = new Map(),
	Sn = [],
	Mg =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" ",
		);
function Fc(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Pn = null;
			break;
		case "dragenter":
		case "dragleave":
			Rn = null;
			break;
		case "mouseover":
		case "mouseout":
			_n = null;
			break;
		case "pointerover":
		case "pointerout":
			Ra.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			_a.delete(t.pointerId);
	}
}
function na(e, t, n, r, a, s) {
	return e === null || e.nativeEvent !== s
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: s,
				targetContainers: [a],
		  }),
		  t !== null && ((t = Qa(t)), t !== null && su(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  a !== null && t.indexOf(a) === -1 && t.push(a),
		  e);
}
function zg(e, t, n, r, a) {
	switch (t) {
		case "focusin":
			return (Pn = na(Pn, e, t, n, r, a)), !0;
		case "dragenter":
			return (Rn = na(Rn, e, t, n, r, a)), !0;
		case "mouseover":
			return (_n = na(_n, e, t, n, r, a)), !0;
		case "pointerover":
			var s = a.pointerId;
			return Ra.set(s, na(Ra.get(s) || null, e, t, n, r, a)), !0;
		case "gotpointercapture":
			return (
				(s = a.pointerId), _a.set(s, na(_a.get(s) || null, e, t, n, r, a)), !0
			);
	}
	return !1;
}
function lh(e) {
	var t = Jn(e.target);
	if (t !== null) {
		var n = dr(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Qf(n)), t !== null)) {
					(e.blockedOn = t),
						sh(e.priority, function () {
							rh(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Ps(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Qi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			($i = r), n.target.dispatchEvent(r), ($i = null);
		} else return (t = Qa(n)), t !== null && su(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Mc(e, t, n) {
	Ps(e) && n.delete(t);
}
function Ig() {
	(Ki = !1),
		Pn !== null && Ps(Pn) && (Pn = null),
		Rn !== null && Ps(Rn) && (Rn = null),
		_n !== null && Ps(_n) && (_n = null),
		Ra.forEach(Mc),
		_a.forEach(Mc);
}
function ra(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Ki ||
			((Ki = !0),
			wt.unstable_scheduleCallback(wt.unstable_NormalPriority, Ig)));
}
function La(e) {
	function t(a) {
		return ra(a, e);
	}
	if (0 < hs.length) {
		ra(hs[0], e);
		for (var n = 1; n < hs.length; n++) {
			var r = hs[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Pn !== null && ra(Pn, e),
			Rn !== null && ra(Rn, e),
			_n !== null && ra(_n, e),
			Ra.forEach(t),
			_a.forEach(t),
			n = 0;
		n < Sn.length;
		n++
	)
		(r = Sn[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Sn.length && ((n = Sn[0]), n.blockedOn === null); )
		lh(n), n.blockedOn === null && Sn.shift();
}
var Tr = hn.ReactCurrentBatchConfig,
	Qs = !0;
function Ug(e, t, n, r) {
	var a = ue,
		s = Tr.transition;
	Tr.transition = null;
	try {
		(ue = 1), lu(e, t, n, r);
	} finally {
		(ue = a), (Tr.transition = s);
	}
}
function Bg(e, t, n, r) {
	var a = ue,
		s = Tr.transition;
	Tr.transition = null;
	try {
		(ue = 4), lu(e, t, n, r);
	} finally {
		(ue = a), (Tr.transition = s);
	}
}
function lu(e, t, n, r) {
	if (Qs) {
		var a = Qi(e, t, n, r);
		if (a === null) ui(e, t, r, Js, n), Fc(e, r);
		else if (zg(a, e, t, n, r)) r.stopPropagation();
		else if ((Fc(e, r), t & 4 && -1 < Mg.indexOf(e))) {
			for (; a !== null; ) {
				var s = Qa(a);
				if (
					(s !== null && nh(s),
					(s = Qi(e, t, n, r)),
					s === null && ui(e, t, r, Js, n),
					s === a)
				)
					break;
				a = s;
			}
			a !== null && r.stopPropagation();
		} else ui(e, t, r, null, n);
	}
}
var Js = null;
function Qi(e, t, n, r) {
	if (((Js = null), (e = nu(r)), (e = Jn(e)), e !== null))
		if (((t = dr(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Qf(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Js = e), null;
}
function ih(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (Pg()) {
				case ru:
					return 1;
				case Xf:
					return 4;
				case qs:
				case Rg:
					return 16;
				case Zf:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var kn = null,
	iu = null,
	Rs = null;
function oh() {
	if (Rs) return Rs;
	var e,
		t = iu,
		n = t.length,
		r,
		a = "value" in kn ? kn.value : kn.textContent,
		s = a.length;
	for (e = 0; e < n && t[e] === a[e]; e++);
	var i = n - e;
	for (r = 1; r <= i && t[n - r] === a[s - r]; r++);
	return (Rs = a.slice(e, 1 < r ? 1 - r : void 0));
}
function _s(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function ps() {
	return !0;
}
function zc() {
	return !1;
}
function St(e) {
	function t(n, r, a, s, i) {
		(this._reactName = n),
			(this._targetInst = a),
			(this.type = r),
			(this.nativeEvent = s),
			(this.target = i),
			(this.currentTarget = null);
		for (var o in e)
			e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(s) : s[o]));
		return (
			(this.isDefaultPrevented = (
				s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
			)
				? ps
				: zc),
			(this.isPropagationStopped = zc),
			this
		);
	}
	return (
		Ee(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = ps));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = ps));
			},
			persist: function () {},
			isPersistent: ps,
		}),
		t
	);
}
var Vr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	ou = St(Vr),
	Ka = Ee({}, Vr, { view: 0, detail: 0 }),
	$g = St(Ka),
	ei,
	ti,
	aa,
	Nl = Ee({}, Ka, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: uu,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== aa &&
						(aa && e.type === "mousemove"
							? ((ei = e.screenX - aa.screenX), (ti = e.screenY - aa.screenY))
							: (ti = ei = 0),
						(aa = e)),
				  ei);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : ti;
		},
	}),
	Ic = St(Nl),
	Hg = Ee({}, Nl, { dataTransfer: 0 }),
	Vg = St(Hg),
	Wg = Ee({}, Ka, { relatedTarget: 0 }),
	ni = St(Wg),
	qg = Ee({}, Vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Kg = St(qg),
	Qg = Ee({}, Vr, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Jg = St(Qg),
	Yg = Ee({}, Vr, { data: 0 }),
	Uc = St(Yg),
	Gg = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	Xg = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	Zg = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function ev(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Zg[e]) ? !!t[e] : !1;
}
function uu() {
	return ev;
}
var tv = Ee({}, Ka, {
		key: function (e) {
			if (e.key) {
				var t = Gg[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = _s(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? Xg[e.keyCode] || "Unidentified"
				: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: uu,
		charCode: function (e) {
			return e.type === "keypress" ? _s(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? _s(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	nv = St(tv),
	rv = Ee({}, Nl, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	Bc = St(rv),
	av = Ee({}, Ka, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: uu,
	}),
	sv = St(av),
	lv = Ee({}, Vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	iv = St(lv),
	ov = Ee({}, Nl, {
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
				? -e.wheelDeltaY
				: "wheelDelta" in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	uv = St(ov),
	cv = [9, 13, 27, 32],
	cu = un && "CompositionEvent" in window,
	xa = null;
un && "documentMode" in document && (xa = document.documentMode);
var dv = un && "TextEvent" in window && !xa,
	uh = un && (!cu || (xa && 8 < xa && 11 >= xa)),
	$c = " ",
	Hc = !1;
function ch(e, t) {
	switch (e) {
		case "keyup":
			return cv.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function dh(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var wr = !1;
function fv(e, t) {
	switch (e) {
		case "compositionend":
			return dh(t);
		case "keypress":
			return t.which !== 32 ? null : ((Hc = !0), $c);
		case "textInput":
			return (e = t.data), e === $c && Hc ? null : e;
		default:
			return null;
	}
}
function hv(e, t) {
	if (wr)
		return e === "compositionend" || (!cu && ch(e, t))
			? ((e = oh()), (Rs = iu = kn = null), (wr = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return uh && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var pv = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function Vc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!pv[e.type] : t === "textarea";
}
function fh(e, t, n, r) {
	Hf(r),
		(t = Ys(t, "onChange")),
		0 < t.length &&
			((n = new ou("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var wa = null,
	Oa = null;
function mv(e) {
	Sh(e, 0);
}
function Sl(e) {
	var t = Sr(e);
	if (Ff(t)) return e;
}
function gv(e, t) {
	if (e === "change") return t;
}
var hh = !1;
if (un) {
	var ri;
	if (un) {
		var ai = "oninput" in document;
		if (!ai) {
			var Wc = document.createElement("div");
			Wc.setAttribute("oninput", "return;"),
				(ai = typeof Wc.oninput == "function");
		}
		ri = ai;
	} else ri = !1;
	hh = ri && (!document.documentMode || 9 < document.documentMode);
}
function qc() {
	wa && (wa.detachEvent("onpropertychange", ph), (Oa = wa = null));
}
function ph(e) {
	if (e.propertyName === "value" && Sl(Oa)) {
		var t = [];
		fh(t, Oa, e, nu(e)), Kf(mv, t);
	}
}
function vv(e, t, n) {
	e === "focusin"
		? (qc(), (wa = t), (Oa = n), wa.attachEvent("onpropertychange", ph))
		: e === "focusout" && qc();
}
function yv(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return Sl(Oa);
}
function xv(e, t) {
	if (e === "click") return Sl(t);
}
function wv(e, t) {
	if (e === "input" || e === "change") return Sl(t);
}
function jv(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var It = typeof Object.is == "function" ? Object.is : jv;
function Ta(e, t) {
	if (It(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var a = n[r];
		if (!_i.call(t, a) || !It(e[a], t[a])) return !1;
	}
	return !0;
}
function Kc(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Qc(e, t) {
	var n = Kc(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = Kc(n);
	}
}
function mh(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? mh(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function gh() {
	for (var e = window, t = Hs(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Hs(e.document);
	}
	return t;
}
function du(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function Nv(e) {
	var t = gh(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		mh(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && du(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var a = n.textContent.length,
					s = Math.min(r.start, a);
				(r = r.end === void 0 ? s : Math.min(r.end, a)),
					!e.extend && s > r && ((a = r), (r = s), (s = a)),
					(a = Qc(n, s));
				var i = Qc(n, r);
				a &&
					i &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== a.node ||
						e.anchorOffset !== a.offset ||
						e.focusNode !== i.node ||
						e.focusOffset !== i.offset) &&
					((t = t.createRange()),
					t.setStart(a.node, a.offset),
					e.removeAllRanges(),
					s > r
						? (e.addRange(t), e.extend(i.node, i.offset))
						: (t.setEnd(i.node, i.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var Sv = un && "documentMode" in document && 11 >= document.documentMode,
	jr = null,
	Ji = null,
	ja = null,
	Yi = !1;
function Jc(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Yi ||
		jr == null ||
		jr !== Hs(r) ||
		((r = jr),
		"selectionStart" in r && du(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(ja && Ta(ja, r)) ||
			((ja = r),
			(r = Ys(Ji, "onSelect")),
			0 < r.length &&
				((t = new ou("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = jr))));
}
function ms(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var Nr = {
		animationend: ms("Animation", "AnimationEnd"),
		animationiteration: ms("Animation", "AnimationIteration"),
		animationstart: ms("Animation", "AnimationStart"),
		transitionend: ms("Transition", "TransitionEnd"),
	},
	si = {},
	vh = {};
un &&
	((vh = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete Nr.animationend.animation,
		delete Nr.animationiteration.animation,
		delete Nr.animationstart.animation),
	"TransitionEvent" in window || delete Nr.transitionend.transition);
function Cl(e) {
	if (si[e]) return si[e];
	if (!Nr[e]) return e;
	var t = Nr[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in vh) return (si[e] = t[n]);
	return e;
}
var yh = Cl("animationend"),
	xh = Cl("animationiteration"),
	wh = Cl("animationstart"),
	jh = Cl("transitionend"),
	Nh = new Map(),
	Yc =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" ",
		);
function Un(e, t) {
	Nh.set(e, t), cr(t, [e]);
}
for (var li = 0; li < Yc.length; li++) {
	var ii = Yc[li],
		Cv = ii.toLowerCase(),
		Ev = ii[0].toUpperCase() + ii.slice(1);
	Un(Cv, "on" + Ev);
}
Un(yh, "onAnimationEnd");
Un(xh, "onAnimationIteration");
Un(wh, "onAnimationStart");
Un("dblclick", "onDoubleClick");
Un("focusin", "onFocus");
Un("focusout", "onBlur");
Un(jh, "onTransitionEnd");
Fr("onMouseEnter", ["mouseout", "mouseover"]);
Fr("onMouseLeave", ["mouseout", "mouseover"]);
Fr("onPointerEnter", ["pointerout", "pointerover"]);
Fr("onPointerLeave", ["pointerout", "pointerover"]);
cr(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" ",
	),
);
cr(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" ",
	),
);
cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cr(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" "),
);
cr(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
cr(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ma =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" ",
		),
	kv = new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));
function Gc(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), Cg(r, t, void 0, e), (e.currentTarget = null);
}
function Sh(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			a = r.event;
		r = r.listeners;
		e: {
			var s = void 0;
			if (t)
				for (var i = r.length - 1; 0 <= i; i--) {
					var o = r[i],
						u = o.instance,
						c = o.currentTarget;
					if (((o = o.listener), u !== s && a.isPropagationStopped())) break e;
					Gc(a, o, c), (s = u);
				}
			else
				for (i = 0; i < r.length; i++) {
					if (
						((o = r[i]),
						(u = o.instance),
						(c = o.currentTarget),
						(o = o.listener),
						u !== s && a.isPropagationStopped())
					)
						break e;
					Gc(a, o, c), (s = u);
				}
		}
	}
	if (Ws) throw ((e = Wi), (Ws = !1), (Wi = null), e);
}
function ge(e, t) {
	var n = t[to];
	n === void 0 && (n = t[to] = new Set());
	var r = e + "__bubble";
	n.has(r) || (Ch(t, e, 2, !1), n.add(r));
}
function oi(e, t, n) {
	var r = 0;
	t && (r |= 4), Ch(n, e, r, t);
}
var gs = "_reactListening" + Math.random().toString(36).slice(2);
function Da(e) {
	if (!e[gs]) {
		(e[gs] = !0),
			Lf.forEach(function (n) {
				n !== "selectionchange" && (kv.has(n) || oi(n, !1, e), oi(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[gs] || ((t[gs] = !0), oi("selectionchange", !1, t));
	}
}
function Ch(e, t, n, r) {
	switch (ih(t)) {
		case 1:
			var a = Ug;
			break;
		case 4:
			a = Bg;
			break;
		default:
			a = lu;
	}
	(n = a.bind(null, t, n, e)),
		(a = void 0),
		!Vi ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(a = !0),
		r
			? a !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: a })
				: e.addEventListener(t, n, !0)
			: a !== void 0
			? e.addEventListener(t, n, { passive: a })
			: e.addEventListener(t, n, !1);
}
function ui(e, t, n, r, a) {
	var s = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var i = r.tag;
			if (i === 3 || i === 4) {
				var o = r.stateNode.containerInfo;
				if (o === a || (o.nodeType === 8 && o.parentNode === a)) break;
				if (i === 4)
					for (i = r.return; i !== null; ) {
						var u = i.tag;
						if (
							(u === 3 || u === 4) &&
							((u = i.stateNode.containerInfo),
							u === a || (u.nodeType === 8 && u.parentNode === a))
						)
							return;
						i = i.return;
					}
				for (; o !== null; ) {
					if (((i = Jn(o)), i === null)) return;
					if (((u = i.tag), u === 5 || u === 6)) {
						r = s = i;
						continue e;
					}
					o = o.parentNode;
				}
			}
			r = r.return;
		}
	Kf(function () {
		var c = s,
			d = nu(n),
			p = [];
		e: {
			var m = Nh.get(e);
			if (m !== void 0) {
				var y = ou,
					j = e;
				switch (e) {
					case "keypress":
						if (_s(n) === 0) break e;
					case "keydown":
					case "keyup":
						y = nv;
						break;
					case "focusin":
						(j = "focus"), (y = ni);
						break;
					case "focusout":
						(j = "blur"), (y = ni);
						break;
					case "beforeblur":
					case "afterblur":
						y = ni;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						y = Ic;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						y = Vg;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						y = sv;
						break;
					case yh:
					case xh:
					case wh:
						y = Kg;
						break;
					case jh:
						y = iv;
						break;
					case "scroll":
						y = $g;
						break;
					case "wheel":
						y = uv;
						break;
					case "copy":
					case "cut":
					case "paste":
						y = Jg;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						y = Bc;
				}
				var g = (t & 4) !== 0,
					S = !g && e === "scroll",
					v = g ? (m !== null ? m + "Capture" : null) : m;
				g = [];
				for (var f = c, x; f !== null; ) {
					x = f;
					var E = x.stateNode;
					if (
						(x.tag === 5 &&
							E !== null &&
							((x = E),
							v !== null && ((E = Pa(f, v)), E != null && g.push(Aa(f, E, x)))),
						S)
					)
						break;
					f = f.return;
				}
				0 < g.length &&
					((m = new y(m, j, null, n, d)), p.push({ event: m, listeners: g }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((m = e === "mouseover" || e === "pointerover"),
					(y = e === "mouseout" || e === "pointerout"),
					m &&
						n !== $i &&
						(j = n.relatedTarget || n.fromElement) &&
						(Jn(j) || j[cn]))
				)
					break e;
				if (
					(y || m) &&
					((m =
						d.window === d
							? d
							: (m = d.ownerDocument)
							? m.defaultView || m.parentWindow
							: window),
					y
						? ((j = n.relatedTarget || n.toElement),
						  (y = c),
						  (j = j ? Jn(j) : null),
						  j !== null &&
								((S = dr(j)), j !== S || (j.tag !== 5 && j.tag !== 6)) &&
								(j = null))
						: ((y = null), (j = c)),
					y !== j)
				) {
					if (
						((g = Ic),
						(E = "onMouseLeave"),
						(v = "onMouseEnter"),
						(f = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((g = Bc),
							(E = "onPointerLeave"),
							(v = "onPointerEnter"),
							(f = "pointer")),
						(S = y == null ? m : Sr(y)),
						(x = j == null ? m : Sr(j)),
						(m = new g(E, f + "leave", y, n, d)),
						(m.target = S),
						(m.relatedTarget = x),
						(E = null),
						Jn(d) === c &&
							((g = new g(v, f + "enter", j, n, d)),
							(g.target = x),
							(g.relatedTarget = S),
							(E = g)),
						(S = E),
						y && j)
					)
						t: {
							for (g = y, v = j, f = 0, x = g; x; x = gr(x)) f++;
							for (x = 0, E = v; E; E = gr(E)) x++;
							for (; 0 < f - x; ) (g = gr(g)), f--;
							for (; 0 < x - f; ) (v = gr(v)), x--;
							for (; f--; ) {
								if (g === v || (v !== null && g === v.alternate)) break t;
								(g = gr(g)), (v = gr(v));
							}
							g = null;
						}
					else g = null;
					y !== null && Xc(p, m, y, g, !1),
						j !== null && S !== null && Xc(p, S, j, g, !0);
				}
			}
			e: {
				if (
					((m = c ? Sr(c) : window),
					(y = m.nodeName && m.nodeName.toLowerCase()),
					y === "select" || (y === "input" && m.type === "file"))
				)
					var w = gv;
				else if (Vc(m))
					if (hh) w = wv;
					else {
						w = yv;
						var P = vv;
					}
				else
					(y = m.nodeName) &&
						y.toLowerCase() === "input" &&
						(m.type === "checkbox" || m.type === "radio") &&
						(w = xv);
				if (w && (w = w(e, c))) {
					fh(p, w, n, d);
					break e;
				}
				P && P(e, m, c),
					e === "focusout" &&
						(P = m._wrapperState) &&
						P.controlled &&
						m.type === "number" &&
						Mi(m, "number", m.value);
			}
			switch (((P = c ? Sr(c) : window), e)) {
				case "focusin":
					(Vc(P) || P.contentEditable === "true") &&
						((jr = P), (Ji = c), (ja = null));
					break;
				case "focusout":
					ja = Ji = jr = null;
					break;
				case "mousedown":
					Yi = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(Yi = !1), Jc(p, n, d);
					break;
				case "selectionchange":
					if (Sv) break;
				case "keydown":
				case "keyup":
					Jc(p, n, d);
			}
			var L;
			if (cu)
				e: {
					switch (e) {
						case "compositionstart":
							var k = "onCompositionStart";
							break e;
						case "compositionend":
							k = "onCompositionEnd";
							break e;
						case "compositionupdate":
							k = "onCompositionUpdate";
							break e;
					}
					k = void 0;
				}
			else
				wr
					? ch(e, n) && (k = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
			k &&
				(uh &&
					n.locale !== "ko" &&
					(wr || k !== "onCompositionStart"
						? k === "onCompositionEnd" && wr && (L = oh())
						: ((kn = d),
						  (iu = "value" in kn ? kn.value : kn.textContent),
						  (wr = !0))),
				(P = Ys(c, k)),
				0 < P.length &&
					((k = new Uc(k, e, null, n, d)),
					p.push({ event: k, listeners: P }),
					L ? (k.data = L) : ((L = dh(n)), L !== null && (k.data = L)))),
				(L = dv ? fv(e, n) : hv(e, n)) &&
					((c = Ys(c, "onBeforeInput")),
					0 < c.length &&
						((d = new Uc("onBeforeInput", "beforeinput", null, n, d)),
						p.push({ event: d, listeners: c }),
						(d.data = L)));
		}
		Sh(p, t);
	});
}
function Aa(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Ys(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var a = e,
			s = a.stateNode;
		a.tag === 5 &&
			s !== null &&
			((a = s),
			(s = Pa(e, n)),
			s != null && r.unshift(Aa(e, s, a)),
			(s = Pa(e, t)),
			s != null && r.push(Aa(e, s, a))),
			(e = e.return);
	}
	return r;
}
function gr(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Xc(e, t, n, r, a) {
	for (var s = t._reactName, i = []; n !== null && n !== r; ) {
		var o = n,
			u = o.alternate,
			c = o.stateNode;
		if (u !== null && u === r) break;
		o.tag === 5 &&
			c !== null &&
			((o = c),
			a
				? ((u = Pa(n, s)), u != null && i.unshift(Aa(n, u, o)))
				: a || ((u = Pa(n, s)), u != null && i.push(Aa(n, u, o)))),
			(n = n.return);
	}
	i.length !== 0 && e.push({ event: t, listeners: i });
}
var bv = /\r\n?/g,
	Pv = /\u0000|\uFFFD/g;
function Zc(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			bv,
			`
`,
		)
		.replace(Pv, "");
}
function vs(e, t, n) {
	if (((t = Zc(t)), Zc(e) !== t && n)) throw Error(D(425));
}
function Gs() {}
var Gi = null,
	Xi = null;
function Zi(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var eo = typeof setTimeout == "function" ? setTimeout : void 0,
	Rv = typeof clearTimeout == "function" ? clearTimeout : void 0,
	ed = typeof Promise == "function" ? Promise : void 0,
	_v =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof ed < "u"
			? function (e) {
					return ed.resolve(null).then(e).catch(Lv);
			  }
			: eo;
function Lv(e) {
	setTimeout(function () {
		throw e;
	});
}
function ci(e, t) {
	var n = t,
		r = 0;
	do {
		var a = n.nextSibling;
		if ((e.removeChild(n), a && a.nodeType === 8))
			if (((n = a.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(a), La(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = a;
	} while (n);
	La(t);
}
function Ln(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function td(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Wr = Math.random().toString(36).slice(2),
	Jt = "__reactFiber$" + Wr,
	Fa = "__reactProps$" + Wr,
	cn = "__reactContainer$" + Wr,
	to = "__reactEvents$" + Wr,
	Ov = "__reactListeners$" + Wr,
	Tv = "__reactHandles$" + Wr;
function Jn(e) {
	var t = e[Jt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[cn] || n[Jt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = td(e); e !== null; ) {
					if ((n = e[Jt])) return n;
					e = td(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function Qa(e) {
	return (
		(e = e[Jt] || e[cn]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Sr(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(D(33));
}
function El(e) {
	return e[Fa] || null;
}
var no = [],
	Cr = -1;
function Bn(e) {
	return { current: e };
}
function ve(e) {
	0 > Cr || ((e.current = no[Cr]), (no[Cr] = null), Cr--);
}
function he(e, t) {
	Cr++, (no[Cr] = e.current), (e.current = t);
}
var Mn = {},
	Ge = Bn(Mn),
	ct = Bn(!1),
	rr = Mn;
function Mr(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Mn;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var a = {},
		s;
	for (s in n) a[s] = t[s];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = a)),
		a
	);
}
function dt(e) {
	return (e = e.childContextTypes), e != null;
}
function Xs() {
	ve(ct), ve(Ge);
}
function nd(e, t, n) {
	if (Ge.current !== Mn) throw Error(D(168));
	he(Ge, t), he(ct, n);
}
function Eh(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var a in r) if (!(a in t)) throw Error(D(108, vg(e) || "Unknown", a));
	return Ee({}, n, r);
}
function Zs(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mn),
		(rr = Ge.current),
		he(Ge, e),
		he(ct, ct.current),
		!0
	);
}
function rd(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(D(169));
	n
		? ((e = Eh(e, t, rr)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  ve(ct),
		  ve(Ge),
		  he(Ge, e))
		: ve(ct),
		he(ct, n);
}
var an = null,
	kl = !1,
	di = !1;
function kh(e) {
	an === null ? (an = [e]) : an.push(e);
}
function Dv(e) {
	(kl = !0), kh(e);
}
function $n() {
	if (!di && an !== null) {
		di = !0;
		var e = 0,
			t = ue;
		try {
			var n = an;
			for (ue = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(an = null), (kl = !1);
		} catch (a) {
			throw (an !== null && (an = an.slice(e + 1)), Gf(ru, $n), a);
		} finally {
			(ue = t), (di = !1);
		}
	}
	return null;
}
var Er = [],
	kr = 0,
	el = null,
	tl = 0,
	Et = [],
	kt = 0,
	ar = null,
	sn = 1,
	ln = "";
function qn(e, t) {
	(Er[kr++] = tl), (Er[kr++] = el), (el = e), (tl = t);
}
function bh(e, t, n) {
	(Et[kt++] = sn), (Et[kt++] = ln), (Et[kt++] = ar), (ar = e);
	var r = sn;
	e = ln;
	var a = 32 - Mt(r) - 1;
	(r &= ~(1 << a)), (n += 1);
	var s = 32 - Mt(t) + a;
	if (30 < s) {
		var i = a - (a % 5);
		(s = (r & ((1 << i) - 1)).toString(32)),
			(r >>= i),
			(a -= i),
			(sn = (1 << (32 - Mt(t) + a)) | (n << a) | r),
			(ln = s + e);
	} else (sn = (1 << s) | (n << a) | r), (ln = e);
}
function fu(e) {
	e.return !== null && (qn(e, 1), bh(e, 1, 0));
}
function hu(e) {
	for (; e === el; )
		(el = Er[--kr]), (Er[kr] = null), (tl = Er[--kr]), (Er[kr] = null);
	for (; e === ar; )
		(ar = Et[--kt]),
			(Et[kt] = null),
			(ln = Et[--kt]),
			(Et[kt] = null),
			(sn = Et[--kt]),
			(Et[kt] = null);
}
var yt = null,
	vt = null,
	xe = !1,
	Ft = null;
function Ph(e, t) {
	var n = bt(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ad(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (yt = e), (vt = Ln(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (yt = e), (vt = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = ar !== null ? { id: sn, overflow: ln } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = bt(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (yt = e),
					  (vt = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function ro(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ao(e) {
	if (xe) {
		var t = vt;
		if (t) {
			var n = t;
			if (!ad(e, t)) {
				if (ro(e)) throw Error(D(418));
				t = Ln(n.nextSibling);
				var r = yt;
				t && ad(e, t)
					? Ph(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (xe = !1), (yt = e));
			}
		} else {
			if (ro(e)) throw Error(D(418));
			(e.flags = (e.flags & -4097) | 2), (xe = !1), (yt = e);
		}
	}
}
function sd(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	yt = e;
}
function ys(e) {
	if (e !== yt) return !1;
	if (!xe) return sd(e), (xe = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !Zi(e.type, e.memoizedProps))),
		t && (t = vt))
	) {
		if (ro(e)) throw (Rh(), Error(D(418)));
		for (; t; ) Ph(e, t), (t = Ln(t.nextSibling));
	}
	if ((sd(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(D(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							vt = Ln(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			vt = null;
		}
	} else vt = yt ? Ln(e.stateNode.nextSibling) : null;
	return !0;
}
function Rh() {
	for (var e = vt; e; ) e = Ln(e.nextSibling);
}
function zr() {
	(vt = yt = null), (xe = !1);
}
function pu(e) {
	Ft === null ? (Ft = [e]) : Ft.push(e);
}
var Av = hn.ReactCurrentBatchConfig;
function sa(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(D(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(D(147, e));
			var a = r,
				s = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === s
				? t.ref
				: ((t = function (i) {
						var o = a.refs;
						i === null ? delete o[s] : (o[s] = i);
				  }),
				  (t._stringRef = s),
				  t);
		}
		if (typeof e != "string") throw Error(D(284));
		if (!n._owner) throw Error(D(290, e));
	}
	return e;
}
function xs(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			D(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e,
			),
		))
	);
}
function ld(e) {
	var t = e._init;
	return t(e._payload);
}
function _h(e) {
	function t(v, f) {
		if (e) {
			var x = v.deletions;
			x === null ? ((v.deletions = [f]), (v.flags |= 16)) : x.push(f);
		}
	}
	function n(v, f) {
		if (!e) return null;
		for (; f !== null; ) t(v, f), (f = f.sibling);
		return null;
	}
	function r(v, f) {
		for (v = new Map(); f !== null; )
			f.key !== null ? v.set(f.key, f) : v.set(f.index, f), (f = f.sibling);
		return v;
	}
	function a(v, f) {
		return (v = An(v, f)), (v.index = 0), (v.sibling = null), v;
	}
	function s(v, f, x) {
		return (
			(v.index = x),
			e
				? ((x = v.alternate),
				  x !== null
						? ((x = x.index), x < f ? ((v.flags |= 2), f) : x)
						: ((v.flags |= 2), f))
				: ((v.flags |= 1048576), f)
		);
	}
	function i(v) {
		return e && v.alternate === null && (v.flags |= 2), v;
	}
	function o(v, f, x, E) {
		return f === null || f.tag !== 6
			? ((f = yi(x, v.mode, E)), (f.return = v), f)
			: ((f = a(f, x)), (f.return = v), f);
	}
	function u(v, f, x, E) {
		var w = x.type;
		return w === xr
			? d(v, f, x.props.children, E, x.key)
			: f !== null &&
			  (f.elementType === w ||
					(typeof w == "object" &&
						w !== null &&
						w.$$typeof === jn &&
						ld(w) === f.type))
			? ((E = a(f, x.props)), (E.ref = sa(v, f, x)), (E.return = v), E)
			: ((E = Ms(x.type, x.key, x.props, null, v.mode, E)),
			  (E.ref = sa(v, f, x)),
			  (E.return = v),
			  E);
	}
	function c(v, f, x, E) {
		return f === null ||
			f.tag !== 4 ||
			f.stateNode.containerInfo !== x.containerInfo ||
			f.stateNode.implementation !== x.implementation
			? ((f = xi(x, v.mode, E)), (f.return = v), f)
			: ((f = a(f, x.children || [])), (f.return = v), f);
	}
	function d(v, f, x, E, w) {
		return f === null || f.tag !== 7
			? ((f = tr(x, v.mode, E, w)), (f.return = v), f)
			: ((f = a(f, x)), (f.return = v), f);
	}
	function p(v, f, x) {
		if ((typeof f == "string" && f !== "") || typeof f == "number")
			return (f = yi("" + f, v.mode, x)), (f.return = v), f;
		if (typeof f == "object" && f !== null) {
			switch (f.$$typeof) {
				case os:
					return (
						(x = Ms(f.type, f.key, f.props, null, v.mode, x)),
						(x.ref = sa(v, null, f)),
						(x.return = v),
						x
					);
				case yr:
					return (f = xi(f, v.mode, x)), (f.return = v), f;
				case jn:
					var E = f._init;
					return p(v, E(f._payload), x);
			}
			if (ha(f) || ea(f))
				return (f = tr(f, v.mode, x, null)), (f.return = v), f;
			xs(v, f);
		}
		return null;
	}
	function m(v, f, x, E) {
		var w = f !== null ? f.key : null;
		if ((typeof x == "string" && x !== "") || typeof x == "number")
			return w !== null ? null : o(v, f, "" + x, E);
		if (typeof x == "object" && x !== null) {
			switch (x.$$typeof) {
				case os:
					return x.key === w ? u(v, f, x, E) : null;
				case yr:
					return x.key === w ? c(v, f, x, E) : null;
				case jn:
					return (w = x._init), m(v, f, w(x._payload), E);
			}
			if (ha(x) || ea(x)) return w !== null ? null : d(v, f, x, E, null);
			xs(v, x);
		}
		return null;
	}
	function y(v, f, x, E, w) {
		if ((typeof E == "string" && E !== "") || typeof E == "number")
			return (v = v.get(x) || null), o(f, v, "" + E, w);
		if (typeof E == "object" && E !== null) {
			switch (E.$$typeof) {
				case os:
					return (v = v.get(E.key === null ? x : E.key) || null), u(f, v, E, w);
				case yr:
					return (v = v.get(E.key === null ? x : E.key) || null), c(f, v, E, w);
				case jn:
					var P = E._init;
					return y(v, f, x, P(E._payload), w);
			}
			if (ha(E) || ea(E)) return (v = v.get(x) || null), d(f, v, E, w, null);
			xs(f, E);
		}
		return null;
	}
	function j(v, f, x, E) {
		for (
			var w = null, P = null, L = f, k = (f = 0), M = null;
			L !== null && k < x.length;
			k++
		) {
			L.index > k ? ((M = L), (L = null)) : (M = L.sibling);
			var $ = m(v, L, x[k], E);
			if ($ === null) {
				L === null && (L = M);
				break;
			}
			e && L && $.alternate === null && t(v, L),
				(f = s($, f, k)),
				P === null ? (w = $) : (P.sibling = $),
				(P = $),
				(L = M);
		}
		if (k === x.length) return n(v, L), xe && qn(v, k), w;
		if (L === null) {
			for (; k < x.length; k++)
				(L = p(v, x[k], E)),
					L !== null &&
						((f = s(L, f, k)), P === null ? (w = L) : (P.sibling = L), (P = L));
			return xe && qn(v, k), w;
		}
		for (L = r(v, L); k < x.length; k++)
			(M = y(L, v, k, x[k], E)),
				M !== null &&
					(e && M.alternate !== null && L.delete(M.key === null ? k : M.key),
					(f = s(M, f, k)),
					P === null ? (w = M) : (P.sibling = M),
					(P = M));
		return (
			e &&
				L.forEach(function (de) {
					return t(v, de);
				}),
			xe && qn(v, k),
			w
		);
	}
	function g(v, f, x, E) {
		var w = ea(x);
		if (typeof w != "function") throw Error(D(150));
		if (((x = w.call(x)), x == null)) throw Error(D(151));
		for (
			var P = (w = null), L = f, k = (f = 0), M = null, $ = x.next();
			L !== null && !$.done;
			k++, $ = x.next()
		) {
			L.index > k ? ((M = L), (L = null)) : (M = L.sibling);
			var de = m(v, L, $.value, E);
			if (de === null) {
				L === null && (L = M);
				break;
			}
			e && L && de.alternate === null && t(v, L),
				(f = s(de, f, k)),
				P === null ? (w = de) : (P.sibling = de),
				(P = de),
				(L = M);
		}
		if ($.done) return n(v, L), xe && qn(v, k), w;
		if (L === null) {
			for (; !$.done; k++, $ = x.next())
				($ = p(v, $.value, E)),
					$ !== null &&
						((f = s($, f, k)), P === null ? (w = $) : (P.sibling = $), (P = $));
			return xe && qn(v, k), w;
		}
		for (L = r(v, L); !$.done; k++, $ = x.next())
			($ = y(L, v, k, $.value, E)),
				$ !== null &&
					(e && $.alternate !== null && L.delete($.key === null ? k : $.key),
					(f = s($, f, k)),
					P === null ? (w = $) : (P.sibling = $),
					(P = $));
		return (
			e &&
				L.forEach(function (I) {
					return t(v, I);
				}),
			xe && qn(v, k),
			w
		);
	}
	function S(v, f, x, E) {
		if (
			(typeof x == "object" &&
				x !== null &&
				x.type === xr &&
				x.key === null &&
				(x = x.props.children),
			typeof x == "object" && x !== null)
		) {
			switch (x.$$typeof) {
				case os:
					e: {
						for (var w = x.key, P = f; P !== null; ) {
							if (P.key === w) {
								if (((w = x.type), w === xr)) {
									if (P.tag === 7) {
										n(v, P.sibling),
											(f = a(P, x.props.children)),
											(f.return = v),
											(v = f);
										break e;
									}
								} else if (
									P.elementType === w ||
									(typeof w == "object" &&
										w !== null &&
										w.$$typeof === jn &&
										ld(w) === P.type)
								) {
									n(v, P.sibling),
										(f = a(P, x.props)),
										(f.ref = sa(v, P, x)),
										(f.return = v),
										(v = f);
									break e;
								}
								n(v, P);
								break;
							} else t(v, P);
							P = P.sibling;
						}
						x.type === xr
							? ((f = tr(x.props.children, v.mode, E, x.key)),
							  (f.return = v),
							  (v = f))
							: ((E = Ms(x.type, x.key, x.props, null, v.mode, E)),
							  (E.ref = sa(v, f, x)),
							  (E.return = v),
							  (v = E));
					}
					return i(v);
				case yr:
					e: {
						for (P = x.key; f !== null; ) {
							if (f.key === P)
								if (
									f.tag === 4 &&
									f.stateNode.containerInfo === x.containerInfo &&
									f.stateNode.implementation === x.implementation
								) {
									n(v, f.sibling),
										(f = a(f, x.children || [])),
										(f.return = v),
										(v = f);
									break e;
								} else {
									n(v, f);
									break;
								}
							else t(v, f);
							f = f.sibling;
						}
						(f = xi(x, v.mode, E)), (f.return = v), (v = f);
					}
					return i(v);
				case jn:
					return (P = x._init), S(v, f, P(x._payload), E);
			}
			if (ha(x)) return j(v, f, x, E);
			if (ea(x)) return g(v, f, x, E);
			xs(v, x);
		}
		return (typeof x == "string" && x !== "") || typeof x == "number"
			? ((x = "" + x),
			  f !== null && f.tag === 6
					? (n(v, f.sibling), (f = a(f, x)), (f.return = v), (v = f))
					: (n(v, f), (f = yi(x, v.mode, E)), (f.return = v), (v = f)),
			  i(v))
			: n(v, f);
	}
	return S;
}
var Ir = _h(!0),
	Lh = _h(!1),
	nl = Bn(null),
	rl = null,
	br = null,
	mu = null;
function gu() {
	mu = br = rl = null;
}
function vu(e) {
	var t = nl.current;
	ve(nl), (e._currentValue = t);
}
function so(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function Dr(e, t) {
	(rl = e),
		(mu = br = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (ut = !0), (e.firstContext = null));
}
function Rt(e) {
	var t = e._currentValue;
	if (mu !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), br === null)) {
			if (rl === null) throw Error(D(308));
			(br = e), (rl.dependencies = { lanes: 0, firstContext: e });
		} else br = br.next = e;
	return t;
}
var Yn = null;
function yu(e) {
	Yn === null ? (Yn = [e]) : Yn.push(e);
}
function Oh(e, t, n, r) {
	var a = t.interleaved;
	return (
		a === null ? ((n.next = n), yu(t)) : ((n.next = a.next), (a.next = n)),
		(t.interleaved = n),
		dn(e, r)
	);
}
function dn(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var Nn = !1;
function xu(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Th(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function on(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function On(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), le & 2)) {
		var a = r.pending;
		return (
			a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
			(r.pending = t),
			dn(e, n)
		);
	}
	return (
		(a = r.interleaved),
		a === null ? ((t.next = t), yu(r)) : ((t.next = a.next), (a.next = t)),
		(r.interleaved = t),
		dn(e, n)
	);
}
function Ls(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), au(e, n);
	}
}
function id(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var a = null,
			s = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var i = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				s === null ? (a = s = i) : (s = s.next = i), (n = n.next);
			} while (n !== null);
			s === null ? (a = s = t) : (s = s.next = t);
		} else a = s = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: a,
			lastBaseUpdate: s,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function al(e, t, n, r) {
	var a = e.updateQueue;
	Nn = !1;
	var s = a.firstBaseUpdate,
		i = a.lastBaseUpdate,
		o = a.shared.pending;
	if (o !== null) {
		a.shared.pending = null;
		var u = o,
			c = u.next;
		(u.next = null), i === null ? (s = c) : (i.next = c), (i = u);
		var d = e.alternate;
		d !== null &&
			((d = d.updateQueue),
			(o = d.lastBaseUpdate),
			o !== i &&
				(o === null ? (d.firstBaseUpdate = c) : (o.next = c),
				(d.lastBaseUpdate = u)));
	}
	if (s !== null) {
		var p = a.baseState;
		(i = 0), (d = c = u = null), (o = s);
		do {
			var m = o.lane,
				y = o.eventTime;
			if ((r & m) === m) {
				d !== null &&
					(d = d.next =
						{
							eventTime: y,
							lane: 0,
							tag: o.tag,
							payload: o.payload,
							callback: o.callback,
							next: null,
						});
				e: {
					var j = e,
						g = o;
					switch (((m = t), (y = n), g.tag)) {
						case 1:
							if (((j = g.payload), typeof j == "function")) {
								p = j.call(y, p, m);
								break e;
							}
							p = j;
							break e;
						case 3:
							j.flags = (j.flags & -65537) | 128;
						case 0:
							if (
								((j = g.payload),
								(m = typeof j == "function" ? j.call(y, p, m) : j),
								m == null)
							)
								break e;
							p = Ee({}, p, m);
							break e;
						case 2:
							Nn = !0;
					}
				}
				o.callback !== null &&
					o.lane !== 0 &&
					((e.flags |= 64),
					(m = a.effects),
					m === null ? (a.effects = [o]) : m.push(o));
			} else
				(y = {
					eventTime: y,
					lane: m,
					tag: o.tag,
					payload: o.payload,
					callback: o.callback,
					next: null,
				}),
					d === null ? ((c = d = y), (u = p)) : (d = d.next = y),
					(i |= m);
			if (((o = o.next), o === null)) {
				if (((o = a.shared.pending), o === null)) break;
				(m = o),
					(o = m.next),
					(m.next = null),
					(a.lastBaseUpdate = m),
					(a.shared.pending = null);
			}
		} while (!0);
		if (
			(d === null && (u = p),
			(a.baseState = u),
			(a.firstBaseUpdate = c),
			(a.lastBaseUpdate = d),
			(t = a.shared.interleaved),
			t !== null)
		) {
			a = t;
			do (i |= a.lane), (a = a.next);
			while (a !== t);
		} else s === null && (a.shared.lanes = 0);
		(lr |= i), (e.lanes = i), (e.memoizedState = p);
	}
}
function od(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				a = r.callback;
			if (a !== null) {
				if (((r.callback = null), (r = n), typeof a != "function"))
					throw Error(D(191, a));
				a.call(r);
			}
		}
}
var Ja = {},
	Gt = Bn(Ja),
	Ma = Bn(Ja),
	za = Bn(Ja);
function Gn(e) {
	if (e === Ja) throw Error(D(174));
	return e;
}
function wu(e, t) {
	switch ((he(za, t), he(Ma, e), he(Gt, Ja), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Ii(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Ii(t, e));
	}
	ve(Gt), he(Gt, t);
}
function Ur() {
	ve(Gt), ve(Ma), ve(za);
}
function Dh(e) {
	Gn(za.current);
	var t = Gn(Gt.current),
		n = Ii(t, e.type);
	t !== n && (he(Ma, e), he(Gt, n));
}
function ju(e) {
	Ma.current === e && (ve(Gt), ve(Ma));
}
var Se = Bn(0);
function sl(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var fi = [];
function Nu() {
	for (var e = 0; e < fi.length; e++)
		fi[e]._workInProgressVersionPrimary = null;
	fi.length = 0;
}
var Os = hn.ReactCurrentDispatcher,
	hi = hn.ReactCurrentBatchConfig,
	sr = 0,
	Ce = null,
	De = null,
	Fe = null,
	ll = !1,
	Na = !1,
	Ia = 0,
	Fv = 0;
function Qe() {
	throw Error(D(321));
}
function Su(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!It(e[n], t[n])) return !1;
	return !0;
}
function Cu(e, t, n, r, a, s) {
	if (
		((sr = s),
		(Ce = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Os.current = e === null || e.memoizedState === null ? Uv : Bv),
		(e = n(r, a)),
		Na)
	) {
		s = 0;
		do {
			if (((Na = !1), (Ia = 0), 25 <= s)) throw Error(D(301));
			(s += 1),
				(Fe = De = null),
				(t.updateQueue = null),
				(Os.current = $v),
				(e = n(r, a));
		} while (Na);
	}
	if (
		((Os.current = il),
		(t = De !== null && De.next !== null),
		(sr = 0),
		(Fe = De = Ce = null),
		(ll = !1),
		t)
	)
		throw Error(D(300));
	return e;
}
function Eu() {
	var e = Ia !== 0;
	return (Ia = 0), e;
}
function Qt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return Fe === null ? (Ce.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe;
}
function _t() {
	if (De === null) {
		var e = Ce.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = De.next;
	var t = Fe === null ? Ce.memoizedState : Fe.next;
	if (t !== null) (Fe = t), (De = e);
	else {
		if (e === null) throw Error(D(310));
		(De = e),
			(e = {
				memoizedState: De.memoizedState,
				baseState: De.baseState,
				baseQueue: De.baseQueue,
				queue: De.queue,
				next: null,
			}),
			Fe === null ? (Ce.memoizedState = Fe = e) : (Fe = Fe.next = e);
	}
	return Fe;
}
function Ua(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function pi(e) {
	var t = _t(),
		n = t.queue;
	if (n === null) throw Error(D(311));
	n.lastRenderedReducer = e;
	var r = De,
		a = r.baseQueue,
		s = n.pending;
	if (s !== null) {
		if (a !== null) {
			var i = a.next;
			(a.next = s.next), (s.next = i);
		}
		(r.baseQueue = a = s), (n.pending = null);
	}
	if (a !== null) {
		(s = a.next), (r = r.baseState);
		var o = (i = null),
			u = null,
			c = s;
		do {
			var d = c.lane;
			if ((sr & d) === d)
				u !== null &&
					(u = u.next =
						{
							lane: 0,
							action: c.action,
							hasEagerState: c.hasEagerState,
							eagerState: c.eagerState,
							next: null,
						}),
					(r = c.hasEagerState ? c.eagerState : e(r, c.action));
			else {
				var p = {
					lane: d,
					action: c.action,
					hasEagerState: c.hasEagerState,
					eagerState: c.eagerState,
					next: null,
				};
				u === null ? ((o = u = p), (i = r)) : (u = u.next = p),
					(Ce.lanes |= d),
					(lr |= d);
			}
			c = c.next;
		} while (c !== null && c !== s);
		u === null ? (i = r) : (u.next = o),
			It(r, t.memoizedState) || (ut = !0),
			(t.memoizedState = r),
			(t.baseState = i),
			(t.baseQueue = u),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		a = e;
		do (s = a.lane), (Ce.lanes |= s), (lr |= s), (a = a.next);
		while (a !== e);
	} else a === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function mi(e) {
	var t = _t(),
		n = t.queue;
	if (n === null) throw Error(D(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		a = n.pending,
		s = t.memoizedState;
	if (a !== null) {
		n.pending = null;
		var i = (a = a.next);
		do (s = e(s, i.action)), (i = i.next);
		while (i !== a);
		It(s, t.memoizedState) || (ut = !0),
			(t.memoizedState = s),
			t.baseQueue === null && (t.baseState = s),
			(n.lastRenderedState = s);
	}
	return [s, r];
}
function Ah() {}
function Fh(e, t) {
	var n = Ce,
		r = _t(),
		a = t(),
		s = !It(r.memoizedState, a);
	if (
		(s && ((r.memoizedState = a), (ut = !0)),
		(r = r.queue),
		ku(Ih.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || s || (Fe !== null && Fe.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Ba(9, zh.bind(null, n, r, a, t), void 0, null),
			Me === null)
		)
			throw Error(D(349));
		sr & 30 || Mh(n, t, a);
	}
	return a;
}
function Mh(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Ce.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Ce.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zh(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Uh(t) && Bh(e);
}
function Ih(e, t, n) {
	return n(function () {
		Uh(t) && Bh(e);
	});
}
function Uh(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !It(e, n);
	} catch {
		return !0;
	}
}
function Bh(e) {
	var t = dn(e, 1);
	t !== null && zt(t, e, 1, -1);
}
function ud(e) {
	var t = Qt();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ua,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = Iv.bind(null, Ce, e)),
		[t.memoizedState, e]
	);
}
function Ba(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Ce.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Ce.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function $h() {
	return _t().memoizedState;
}
function Ts(e, t, n, r) {
	var a = Qt();
	(Ce.flags |= e),
		(a.memoizedState = Ba(1 | t, n, void 0, r === void 0 ? null : r));
}
function bl(e, t, n, r) {
	var a = _t();
	r = r === void 0 ? null : r;
	var s = void 0;
	if (De !== null) {
		var i = De.memoizedState;
		if (((s = i.destroy), r !== null && Su(r, i.deps))) {
			a.memoizedState = Ba(t, n, s, r);
			return;
		}
	}
	(Ce.flags |= e), (a.memoizedState = Ba(1 | t, n, s, r));
}
function cd(e, t) {
	return Ts(8390656, 8, e, t);
}
function ku(e, t) {
	return bl(2048, 8, e, t);
}
function Hh(e, t) {
	return bl(4, 2, e, t);
}
function Vh(e, t) {
	return bl(4, 4, e, t);
}
function Wh(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function qh(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), bl(4, 4, Wh.bind(null, t, e), n)
	);
}
function bu() {}
function Kh(e, t) {
	var n = _t();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Su(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Qh(e, t) {
	var n = _t();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Su(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Jh(e, t, n) {
	return sr & 21
		? (It(n, t) || ((n = eh()), (Ce.lanes |= n), (lr |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = n));
}
function Mv(e, t) {
	var n = ue;
	(ue = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = hi.transition;
	hi.transition = {};
	try {
		e(!1), t();
	} finally {
		(ue = n), (hi.transition = r);
	}
}
function Yh() {
	return _t().memoizedState;
}
function zv(e, t, n) {
	var r = Dn(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Gh(e))
	)
		Xh(t, n);
	else if (((n = Oh(e, t, n, r)), n !== null)) {
		var a = rt();
		zt(n, e, r, a), Zh(n, t, r);
	}
}
function Iv(e, t, n) {
	var r = Dn(e),
		a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Gh(e)) Xh(t, a);
	else {
		var s = e.alternate;
		if (
			e.lanes === 0 &&
			(s === null || s.lanes === 0) &&
			((s = t.lastRenderedReducer), s !== null)
		)
			try {
				var i = t.lastRenderedState,
					o = s(i, n);
				if (((a.hasEagerState = !0), (a.eagerState = o), It(o, i))) {
					var u = t.interleaved;
					u === null
						? ((a.next = a), yu(t))
						: ((a.next = u.next), (u.next = a)),
						(t.interleaved = a);
					return;
				}
			} catch {
			} finally {
			}
		(n = Oh(e, t, a, r)),
			n !== null && ((a = rt()), zt(n, e, r, a), Zh(n, t, r));
	}
}
function Gh(e) {
	var t = e.alternate;
	return e === Ce || (t !== null && t === Ce);
}
function Xh(e, t) {
	Na = ll = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function Zh(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), au(e, n);
	}
}
var il = {
		readContext: Rt,
		useCallback: Qe,
		useContext: Qe,
		useEffect: Qe,
		useImperativeHandle: Qe,
		useInsertionEffect: Qe,
		useLayoutEffect: Qe,
		useMemo: Qe,
		useReducer: Qe,
		useRef: Qe,
		useState: Qe,
		useDebugValue: Qe,
		useDeferredValue: Qe,
		useTransition: Qe,
		useMutableSource: Qe,
		useSyncExternalStore: Qe,
		useId: Qe,
		unstable_isNewReconciler: !1,
	},
	Uv = {
		readContext: Rt,
		useCallback: function (e, t) {
			return (Qt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Rt,
		useEffect: cd,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Ts(4194308, 4, Wh.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Ts(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Ts(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Qt();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = Qt();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = zv.bind(null, Ce, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Qt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: ud,
		useDebugValue: bu,
		useDeferredValue: function (e) {
			return (Qt().memoizedState = e);
		},
		useTransition: function () {
			var e = ud(!1),
				t = e[0];
			return (e = Mv.bind(null, e[1])), (Qt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Ce,
				a = Qt();
			if (xe) {
				if (n === void 0) throw Error(D(407));
				n = n();
			} else {
				if (((n = t()), Me === null)) throw Error(D(349));
				sr & 30 || Mh(r, t, n);
			}
			a.memoizedState = n;
			var s = { value: n, getSnapshot: t };
			return (
				(a.queue = s),
				cd(Ih.bind(null, r, s, e), [e]),
				(r.flags |= 2048),
				Ba(9, zh.bind(null, r, s, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Qt(),
				t = Me.identifierPrefix;
			if (xe) {
				var n = ln,
					r = sn;
				(n = (r & ~(1 << (32 - Mt(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Ia++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = Fv++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	Bv = {
		readContext: Rt,
		useCallback: Kh,
		useContext: Rt,
		useEffect: ku,
		useImperativeHandle: qh,
		useInsertionEffect: Hh,
		useLayoutEffect: Vh,
		useMemo: Qh,
		useReducer: pi,
		useRef: $h,
		useState: function () {
			return pi(Ua);
		},
		useDebugValue: bu,
		useDeferredValue: function (e) {
			var t = _t();
			return Jh(t, De.memoizedState, e);
		},
		useTransition: function () {
			var e = pi(Ua)[0],
				t = _t().memoizedState;
			return [e, t];
		},
		useMutableSource: Ah,
		useSyncExternalStore: Fh,
		useId: Yh,
		unstable_isNewReconciler: !1,
	},
	$v = {
		readContext: Rt,
		useCallback: Kh,
		useContext: Rt,
		useEffect: ku,
		useImperativeHandle: qh,
		useInsertionEffect: Hh,
		useLayoutEffect: Vh,
		useMemo: Qh,
		useReducer: mi,
		useRef: $h,
		useState: function () {
			return mi(Ua);
		},
		useDebugValue: bu,
		useDeferredValue: function (e) {
			var t = _t();
			return De === null ? (t.memoizedState = e) : Jh(t, De.memoizedState, e);
		},
		useTransition: function () {
			var e = mi(Ua)[0],
				t = _t().memoizedState;
			return [e, t];
		},
		useMutableSource: Ah,
		useSyncExternalStore: Fh,
		useId: Yh,
		unstable_isNewReconciler: !1,
	};
function Tt(e, t) {
	if (e && e.defaultProps) {
		(t = Ee({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
function lo(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : Ee({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pl = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? dr(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = rt(),
			a = Dn(e),
			s = on(r, a);
		(s.payload = t),
			n != null && (s.callback = n),
			(t = On(e, s, a)),
			t !== null && (zt(t, e, a, r), Ls(t, e, a));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = rt(),
			a = Dn(e),
			s = on(r, a);
		(s.tag = 1),
			(s.payload = t),
			n != null && (s.callback = n),
			(t = On(e, s, a)),
			t !== null && (zt(t, e, a, r), Ls(t, e, a));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = rt(),
			r = Dn(e),
			a = on(n, r);
		(a.tag = 2),
			t != null && (a.callback = t),
			(t = On(e, a, r)),
			t !== null && (zt(t, e, r, n), Ls(t, e, r));
	},
};
function dd(e, t, n, r, a, s, i) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, s, i)
			: t.prototype && t.prototype.isPureReactComponent
			? !Ta(n, r) || !Ta(a, s)
			: !0
	);
}
function ep(e, t, n) {
	var r = !1,
		a = Mn,
		s = t.contextType;
	return (
		typeof s == "object" && s !== null
			? (s = Rt(s))
			: ((a = dt(t) ? rr : Ge.current),
			  (r = t.contextTypes),
			  (s = (r = r != null) ? Mr(e, a) : Mn)),
		(t = new t(n, s)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Pl),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = a),
			(e.__reactInternalMemoizedMaskedChildContext = s)),
		t
	);
}
function fd(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
}
function io(e, t, n, r) {
	var a = e.stateNode;
	(a.props = n), (a.state = e.memoizedState), (a.refs = {}), xu(e);
	var s = t.contextType;
	typeof s == "object" && s !== null
		? (a.context = Rt(s))
		: ((s = dt(t) ? rr : Ge.current), (a.context = Mr(e, s))),
		(a.state = e.memoizedState),
		(s = t.getDerivedStateFromProps),
		typeof s == "function" && (lo(e, t, s, n), (a.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof a.getSnapshotBeforeUpdate == "function" ||
			(typeof a.UNSAFE_componentWillMount != "function" &&
				typeof a.componentWillMount != "function") ||
			((t = a.state),
			typeof a.componentWillMount == "function" && a.componentWillMount(),
			typeof a.UNSAFE_componentWillMount == "function" &&
				a.UNSAFE_componentWillMount(),
			t !== a.state && Pl.enqueueReplaceState(a, a.state, null),
			al(e, n, a, r),
			(a.state = e.memoizedState)),
		typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Br(e, t) {
	try {
		var n = "",
			r = t;
		do (n += gg(r)), (r = r.return);
		while (r);
		var a = n;
	} catch (s) {
		a =
			`
Error generating stack: ` +
			s.message +
			`
` +
			s.stack;
	}
	return { value: e, source: t, stack: a, digest: null };
}
function gi(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function oo(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Hv = typeof WeakMap == "function" ? WeakMap : Map;
function tp(e, t, n) {
	(n = on(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			ul || ((ul = !0), (xo = r)), oo(e, t);
		}),
		n
	);
}
function np(e, t, n) {
	(n = on(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var a = t.value;
		(n.payload = function () {
			return r(a);
		}),
			(n.callback = function () {
				oo(e, t);
			});
	}
	var s = e.stateNode;
	return (
		s !== null &&
			typeof s.componentDidCatch == "function" &&
			(n.callback = function () {
				oo(e, t),
					typeof r != "function" &&
						(Tn === null ? (Tn = new Set([this])) : Tn.add(this));
				var i = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: i !== null ? i : "",
				});
			}),
		n
	);
}
function hd(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Hv();
		var a = new Set();
		r.set(t, a);
	} else (a = r.get(t)), a === void 0 && ((a = new Set()), r.set(t, a));
	a.has(n) || (a.add(n), (e = ry.bind(null, e, t, n)), t.then(e, e));
}
function pd(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function md(e, t, n, r, a) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = a), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = on(-1, 1)), (t.tag = 2), On(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var Vv = hn.ReactCurrentOwner,
	ut = !1;
function nt(e, t, n, r) {
	t.child = e === null ? Lh(t, null, n, r) : Ir(t, e.child, n, r);
}
function gd(e, t, n, r, a) {
	n = n.render;
	var s = t.ref;
	return (
		Dr(t, a),
		(r = Cu(e, t, n, r, s, a)),
		(n = Eu()),
		e !== null && !ut
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~a),
			  fn(e, t, a))
			: (xe && n && fu(t), (t.flags |= 1), nt(e, t, r, a), t.child)
	);
}
function vd(e, t, n, r, a) {
	if (e === null) {
		var s = n.type;
		return typeof s == "function" &&
			!Au(s) &&
			s.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = s), rp(e, t, s, r, a))
			: ((e = Ms(n.type, null, r, t, t.mode, a)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((s = e.child), !(e.lanes & a))) {
		var i = s.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Ta), n(i, r) && e.ref === t.ref)
		)
			return fn(e, t, a);
	}
	return (
		(t.flags |= 1),
		(e = An(s, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function rp(e, t, n, r, a) {
	if (e !== null) {
		var s = e.memoizedProps;
		if (Ta(s, r) && e.ref === t.ref)
			if (((ut = !1), (t.pendingProps = r = s), (e.lanes & a) !== 0))
				e.flags & 131072 && (ut = !0);
			else return (t.lanes = e.lanes), fn(e, t, a);
	}
	return uo(e, t, n, r, a);
}
function ap(e, t, n) {
	var r = t.pendingProps,
		a = r.children,
		s = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				he(Rr, mt),
				(mt |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = s !== null ? s.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					he(Rr, mt),
					(mt |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = s !== null ? s.baseLanes : n),
				he(Rr, mt),
				(mt |= r);
		}
	else
		s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
			he(Rr, mt),
			(mt |= r);
	return nt(e, t, a, n), t.child;
}
function sp(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function uo(e, t, n, r, a) {
	var s = dt(n) ? rr : Ge.current;
	return (
		(s = Mr(t, s)),
		Dr(t, a),
		(n = Cu(e, t, n, r, s, a)),
		(r = Eu()),
		e !== null && !ut
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~a),
			  fn(e, t, a))
			: (xe && r && fu(t), (t.flags |= 1), nt(e, t, n, a), t.child)
	);
}
function yd(e, t, n, r, a) {
	if (dt(n)) {
		var s = !0;
		Zs(t);
	} else s = !1;
	if ((Dr(t, a), t.stateNode === null))
		Ds(e, t), ep(t, n, r), io(t, n, r, a), (r = !0);
	else if (e === null) {
		var i = t.stateNode,
			o = t.memoizedProps;
		i.props = o;
		var u = i.context,
			c = n.contextType;
		typeof c == "object" && c !== null
			? (c = Rt(c))
			: ((c = dt(n) ? rr : Ge.current), (c = Mr(t, c)));
		var d = n.getDerivedStateFromProps,
			p =
				typeof d == "function" ||
				typeof i.getSnapshotBeforeUpdate == "function";
		p ||
			(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
				typeof i.componentWillReceiveProps != "function") ||
			((o !== r || u !== c) && fd(t, i, r, c)),
			(Nn = !1);
		var m = t.memoizedState;
		(i.state = m),
			al(t, r, i, a),
			(u = t.memoizedState),
			o !== r || m !== u || ct.current || Nn
				? (typeof d == "function" && (lo(t, n, d, r), (u = t.memoizedState)),
				  (o = Nn || dd(t, n, o, r, m, u, c))
						? (p ||
								(typeof i.UNSAFE_componentWillMount != "function" &&
									typeof i.componentWillMount != "function") ||
								(typeof i.componentWillMount == "function" &&
									i.componentWillMount(),
								typeof i.UNSAFE_componentWillMount == "function" &&
									i.UNSAFE_componentWillMount()),
						  typeof i.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = u)),
				  (i.props = r),
				  (i.state = u),
				  (i.context = c),
				  (r = o))
				: (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(i = t.stateNode),
			Th(e, t),
			(o = t.memoizedProps),
			(c = t.type === t.elementType ? o : Tt(t.type, o)),
			(i.props = c),
			(p = t.pendingProps),
			(m = i.context),
			(u = n.contextType),
			typeof u == "object" && u !== null
				? (u = Rt(u))
				: ((u = dt(n) ? rr : Ge.current), (u = Mr(t, u)));
		var y = n.getDerivedStateFromProps;
		(d =
			typeof y == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function") ||
			(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
				typeof i.componentWillReceiveProps != "function") ||
			((o !== p || m !== u) && fd(t, i, r, u)),
			(Nn = !1),
			(m = t.memoizedState),
			(i.state = m),
			al(t, r, i, a);
		var j = t.memoizedState;
		o !== p || m !== j || ct.current || Nn
			? (typeof y == "function" && (lo(t, n, y, r), (j = t.memoizedState)),
			  (c = Nn || dd(t, n, c, r, m, j, u) || !1)
					? (d ||
							(typeof i.UNSAFE_componentWillUpdate != "function" &&
								typeof i.componentWillUpdate != "function") ||
							(typeof i.componentWillUpdate == "function" &&
								i.componentWillUpdate(r, j, u),
							typeof i.UNSAFE_componentWillUpdate == "function" &&
								i.UNSAFE_componentWillUpdate(r, j, u)),
					  typeof i.componentDidUpdate == "function" && (t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof i.componentDidUpdate != "function" ||
							(o === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate != "function" ||
							(o === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = j)),
			  (i.props = r),
			  (i.state = j),
			  (i.context = u),
			  (r = c))
			: (typeof i.componentDidUpdate != "function" ||
					(o === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 4),
			  typeof i.getSnapshotBeforeUpdate != "function" ||
					(o === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return co(e, t, n, r, s, a);
}
function co(e, t, n, r, a, s) {
	sp(e, t);
	var i = (t.flags & 128) !== 0;
	if (!r && !i) return a && rd(t, n, !1), fn(e, t, s);
	(r = t.stateNode), (Vv.current = t);
	var o =
		i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && i
			? ((t.child = Ir(t, e.child, null, s)), (t.child = Ir(t, null, o, s)))
			: nt(e, t, o, s),
		(t.memoizedState = r.state),
		a && rd(t, n, !0),
		t.child
	);
}
function lp(e) {
	var t = e.stateNode;
	t.pendingContext
		? nd(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && nd(e, t.context, !1),
		wu(e, t.containerInfo);
}
function xd(e, t, n, r, a) {
	return zr(), pu(a), (t.flags |= 256), nt(e, t, n, r), t.child;
}
var fo = { dehydrated: null, treeContext: null, retryLane: 0 };
function ho(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function ip(e, t, n) {
	var r = t.pendingProps,
		a = Se.current,
		s = !1,
		i = (t.flags & 128) !== 0,
		o;
	if (
		((o = i) ||
			(o = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
		o
			? ((s = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (a |= 1),
		he(Se, a & 1),
		e === null)
	)
		return (
			ao(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((i = r.children),
				  (e = r.fallback),
				  s
						? ((r = t.mode),
						  (s = t.child),
						  (i = { mode: "hidden", children: i }),
						  !(r & 1) && s !== null
								? ((s.childLanes = 0), (s.pendingProps = i))
								: (s = Ll(i, r, 0, null)),
						  (e = tr(e, r, n, null)),
						  (s.return = t),
						  (e.return = t),
						  (s.sibling = e),
						  (t.child = s),
						  (t.child.memoizedState = ho(n)),
						  (t.memoizedState = fo),
						  e)
						: Pu(t, i))
		);
	if (((a = e.memoizedState), a !== null && ((o = a.dehydrated), o !== null)))
		return Wv(e, t, i, r, o, a, n);
	if (s) {
		(s = r.fallback), (i = t.mode), (a = e.child), (o = a.sibling);
		var u = { mode: "hidden", children: r.children };
		return (
			!(i & 1) && t.child !== a
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = u),
				  (t.deletions = null))
				: ((r = An(a, u)), (r.subtreeFlags = a.subtreeFlags & 14680064)),
			o !== null ? (s = An(o, s)) : ((s = tr(s, i, n, null)), (s.flags |= 2)),
			(s.return = t),
			(r.return = t),
			(r.sibling = s),
			(t.child = r),
			(r = s),
			(s = t.child),
			(i = e.child.memoizedState),
			(i =
				i === null
					? ho(n)
					: {
							baseLanes: i.baseLanes | n,
							cachePool: null,
							transitions: i.transitions,
					  }),
			(s.memoizedState = i),
			(s.childLanes = e.childLanes & ~n),
			(t.memoizedState = fo),
			r
		);
	}
	return (
		(s = e.child),
		(e = s.sibling),
		(r = An(s, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Pu(e, t) {
	return (
		(t = Ll({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function ws(e, t, n, r) {
	return (
		r !== null && pu(r),
		Ir(t, e.child, null, n),
		(e = Pu(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function Wv(e, t, n, r, a, s, i) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = gi(Error(D(422)))), ws(e, t, i, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((s = r.fallback),
			  (a = t.mode),
			  (r = Ll({ mode: "visible", children: r.children }, a, 0, null)),
			  (s = tr(s, a, i, null)),
			  (s.flags |= 2),
			  (r.return = t),
			  (s.return = t),
			  (r.sibling = s),
			  (t.child = r),
			  t.mode & 1 && Ir(t, e.child, null, i),
			  (t.child.memoizedState = ho(i)),
			  (t.memoizedState = fo),
			  s);
	if (!(t.mode & 1)) return ws(e, t, i, null);
	if (a.data === "$!") {
		if (((r = a.nextSibling && a.nextSibling.dataset), r)) var o = r.dgst;
		return (r = o), (s = Error(D(419))), (r = gi(s, r, void 0)), ws(e, t, i, r);
	}
	if (((o = (i & e.childLanes) !== 0), ut || o)) {
		if (((r = Me), r !== null)) {
			switch (i & -i) {
				case 4:
					a = 2;
					break;
				case 16:
					a = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					a = 32;
					break;
				case 536870912:
					a = 268435456;
					break;
				default:
					a = 0;
			}
			(a = a & (r.suspendedLanes | i) ? 0 : a),
				a !== 0 &&
					a !== s.retryLane &&
					((s.retryLane = a), dn(e, a), zt(r, e, a, -1));
		}
		return Du(), (r = gi(Error(D(421)))), ws(e, t, i, r);
	}
	return a.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = ay.bind(null, e)),
		  (a._reactRetry = t),
		  null)
		: ((e = s.treeContext),
		  (vt = Ln(a.nextSibling)),
		  (yt = t),
		  (xe = !0),
		  (Ft = null),
		  e !== null &&
				((Et[kt++] = sn),
				(Et[kt++] = ln),
				(Et[kt++] = ar),
				(sn = e.id),
				(ln = e.overflow),
				(ar = t)),
		  (t = Pu(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function wd(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), so(e.return, t, n);
}
function vi(e, t, n, r, a) {
	var s = e.memoizedState;
	s === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: a,
		  })
		: ((s.isBackwards = t),
		  (s.rendering = null),
		  (s.renderingStartTime = 0),
		  (s.last = r),
		  (s.tail = n),
		  (s.tailMode = a));
}
function op(e, t, n) {
	var r = t.pendingProps,
		a = r.revealOrder,
		s = r.tail;
	if ((nt(e, t, r.children, n), (r = Se.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && wd(e, n, t);
				else if (e.tag === 19) wd(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((he(Se, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (a) {
			case "forwards":
				for (n = t.child, a = null; n !== null; )
					(e = n.alternate),
						e !== null && sl(e) === null && (a = n),
						(n = n.sibling);
				(n = a),
					n === null
						? ((a = t.child), (t.child = null))
						: ((a = n.sibling), (n.sibling = null)),
					vi(t, !1, a, n, s);
				break;
			case "backwards":
				for (n = null, a = t.child, t.child = null; a !== null; ) {
					if (((e = a.alternate), e !== null && sl(e) === null)) {
						t.child = a;
						break;
					}
					(e = a.sibling), (a.sibling = n), (n = a), (a = e);
				}
				vi(t, !0, n, null, s);
				break;
			case "together":
				vi(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Ds(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function fn(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(lr |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(D(153));
	if (t.child !== null) {
		for (
			e = t.child, n = An(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = An(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function qv(e, t, n) {
	switch (t.tag) {
		case 3:
			lp(t), zr();
			break;
		case 5:
			Dh(t);
			break;
		case 1:
			dt(t.type) && Zs(t);
			break;
		case 4:
			wu(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				a = t.memoizedProps.value;
			he(nl, r._currentValue), (r._currentValue = a);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (he(Se, Se.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? ip(e, t, n)
					: (he(Se, Se.current & 1),
					  (e = fn(e, t, n)),
					  e !== null ? e.sibling : null);
			he(Se, Se.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return op(e, t, n);
				t.flags |= 128;
			}
			if (
				((a = t.memoizedState),
				a !== null &&
					((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
				he(Se, Se.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), ap(e, t, n);
	}
	return fn(e, t, n);
}
var up, po, cp, dp;
up = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
po = function () {};
cp = function (e, t, n, r) {
	var a = e.memoizedProps;
	if (a !== r) {
		(e = t.stateNode), Gn(Gt.current);
		var s = null;
		switch (n) {
			case "input":
				(a = Ai(e, a)), (r = Ai(e, r)), (s = []);
				break;
			case "select":
				(a = Ee({}, a, { value: void 0 })),
					(r = Ee({}, r, { value: void 0 })),
					(s = []);
				break;
			case "textarea":
				(a = zi(e, a)), (r = zi(e, r)), (s = []);
				break;
			default:
				typeof a.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = Gs);
		}
		Ui(n, r);
		var i;
		n = null;
		for (c in a)
			if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && a[c] != null)
				if (c === "style") {
					var o = a[c];
					for (i in o) o.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
				} else
					c !== "dangerouslySetInnerHTML" &&
						c !== "children" &&
						c !== "suppressContentEditableWarning" &&
						c !== "suppressHydrationWarning" &&
						c !== "autoFocus" &&
						(ka.hasOwnProperty(c)
							? s || (s = [])
							: (s = s || []).push(c, null));
		for (c in r) {
			var u = r[c];
			if (
				((o = a != null ? a[c] : void 0),
				r.hasOwnProperty(c) && u !== o && (u != null || o != null))
			)
				if (c === "style")
					if (o) {
						for (i in o)
							!o.hasOwnProperty(i) ||
								(u && u.hasOwnProperty(i)) ||
								(n || (n = {}), (n[i] = ""));
						for (i in u)
							u.hasOwnProperty(i) &&
								o[i] !== u[i] &&
								(n || (n = {}), (n[i] = u[i]));
					} else n || (s || (s = []), s.push(c, n)), (n = u);
				else
					c === "dangerouslySetInnerHTML"
						? ((u = u ? u.__html : void 0),
						  (o = o ? o.__html : void 0),
						  u != null && o !== u && (s = s || []).push(c, u))
						: c === "children"
						? (typeof u != "string" && typeof u != "number") ||
						  (s = s || []).push(c, "" + u)
						: c !== "suppressContentEditableWarning" &&
						  c !== "suppressHydrationWarning" &&
						  (ka.hasOwnProperty(c)
								? (u != null && c === "onScroll" && ge("scroll", e),
								  s || o === u || (s = []))
								: (s = s || []).push(c, u));
		}
		n && (s = s || []).push("style", n);
		var c = s;
		(t.updateQueue = c) && (t.flags |= 4);
	}
};
dp = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function la(e, t) {
	if (!xe)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function Je(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var a = e.child; a !== null; )
			(n |= a.lanes | a.childLanes),
				(r |= a.subtreeFlags & 14680064),
				(r |= a.flags & 14680064),
				(a.return = e),
				(a = a.sibling);
	else
		for (a = e.child; a !== null; )
			(n |= a.lanes | a.childLanes),
				(r |= a.subtreeFlags),
				(r |= a.flags),
				(a.return = e),
				(a = a.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Kv(e, t, n) {
	var r = t.pendingProps;
	switch ((hu(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Je(t), null;
		case 1:
			return dt(t.type) && Xs(), Je(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Ur(),
				ve(ct),
				ve(Ge),
				Nu(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(ys(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Ft !== null && (No(Ft), (Ft = null)))),
				po(e, t),
				Je(t),
				null
			);
		case 5:
			ju(t);
			var a = Gn(za.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				cp(e, t, n, r, a),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(D(166));
					return Je(t), null;
				}
				if (((e = Gn(Gt.current)), ys(t))) {
					(r = t.stateNode), (n = t.type);
					var s = t.memoizedProps;
					switch (((r[Jt] = t), (r[Fa] = s), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							ge("cancel", r), ge("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							ge("load", r);
							break;
						case "video":
						case "audio":
							for (a = 0; a < ma.length; a++) ge(ma[a], r);
							break;
						case "source":
							ge("error", r);
							break;
						case "img":
						case "image":
						case "link":
							ge("error", r), ge("load", r);
							break;
						case "details":
							ge("toggle", r);
							break;
						case "input":
							Rc(r, s), ge("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!s.multiple }),
								ge("invalid", r);
							break;
						case "textarea":
							Lc(r, s), ge("invalid", r);
					}
					Ui(n, s), (a = null);
					for (var i in s)
						if (s.hasOwnProperty(i)) {
							var o = s[i];
							i === "children"
								? typeof o == "string"
									? r.textContent !== o &&
									  (s.suppressHydrationWarning !== !0 &&
											vs(r.textContent, o, e),
									  (a = ["children", o]))
									: typeof o == "number" &&
									  r.textContent !== "" + o &&
									  (s.suppressHydrationWarning !== !0 &&
											vs(r.textContent, o, e),
									  (a = ["children", "" + o]))
								: ka.hasOwnProperty(i) &&
								  o != null &&
								  i === "onScroll" &&
								  ge("scroll", r);
						}
					switch (n) {
						case "input":
							us(r), _c(r, s, !0);
							break;
						case "textarea":
							us(r), Oc(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof s.onClick == "function" && (r.onclick = Gs);
					}
					(r = a), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(i = a.nodeType === 9 ? a : a.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = If(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = i.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = i.createElement(n, { is: r.is }))
								: ((e = i.createElement(n)),
								  n === "select" &&
										((i = e),
										r.multiple
											? (i.multiple = !0)
											: r.size && (i.size = r.size)))
							: (e = i.createElementNS(e, n)),
						(e[Jt] = t),
						(e[Fa] = r),
						up(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((i = Bi(n, r)), n)) {
							case "dialog":
								ge("cancel", e), ge("close", e), (a = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								ge("load", e), (a = r);
								break;
							case "video":
							case "audio":
								for (a = 0; a < ma.length; a++) ge(ma[a], e);
								a = r;
								break;
							case "source":
								ge("error", e), (a = r);
								break;
							case "img":
							case "image":
							case "link":
								ge("error", e), ge("load", e), (a = r);
								break;
							case "details":
								ge("toggle", e), (a = r);
								break;
							case "input":
								Rc(e, r), (a = Ai(e, r)), ge("invalid", e);
								break;
							case "option":
								a = r;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(a = Ee({}, r, { value: void 0 })),
									ge("invalid", e);
								break;
							case "textarea":
								Lc(e, r), (a = zi(e, r)), ge("invalid", e);
								break;
							default:
								a = r;
						}
						Ui(n, a), (o = a);
						for (s in o)
							if (o.hasOwnProperty(s)) {
								var u = o[s];
								s === "style"
									? $f(e, u)
									: s === "dangerouslySetInnerHTML"
									? ((u = u ? u.__html : void 0), u != null && Uf(e, u))
									: s === "children"
									? typeof u == "string"
										? (n !== "textarea" || u !== "") && ba(e, u)
										: typeof u == "number" && ba(e, "" + u)
									: s !== "suppressContentEditableWarning" &&
									  s !== "suppressHydrationWarning" &&
									  s !== "autoFocus" &&
									  (ka.hasOwnProperty(s)
											? u != null && s === "onScroll" && ge("scroll", e)
											: u != null && Xo(e, s, u, i));
							}
						switch (n) {
							case "input":
								us(e), _c(e, r, !1);
								break;
							case "textarea":
								us(e), Oc(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + Fn(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(s = r.value),
									s != null
										? _r(e, !!r.multiple, s, !1)
										: r.defaultValue != null &&
										  _r(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof a.onClick == "function" && (e.onclick = Gs);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return Je(t), null;
		case 6:
			if (e && t.stateNode != null) dp(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
				if (((n = Gn(za.current)), Gn(Gt.current), ys(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Jt] = t),
						(s = r.nodeValue !== n) && ((e = yt), e !== null))
					)
						switch (e.tag) {
							case 3:
								vs(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									vs(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					s && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Jt] = t),
						(t.stateNode = r);
			}
			return Je(t), null;
		case 13:
			if (
				(ve(Se),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (xe && vt !== null && t.mode & 1 && !(t.flags & 128))
					Rh(), zr(), (t.flags |= 98560), (s = !1);
				else if (((s = ys(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!s) throw Error(D(318));
						if (
							((s = t.memoizedState),
							(s = s !== null ? s.dehydrated : null),
							!s)
						)
							throw Error(D(317));
						s[Jt] = t;
					} else
						zr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					Je(t), (s = !1);
				} else Ft !== null && (No(Ft), (Ft = null)), (s = !0);
				if (!s) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || Se.current & 1 ? Ae === 0 && (Ae = 3) : Du())),
				  t.updateQueue !== null && (t.flags |= 4),
				  Je(t),
				  null);
		case 4:
			return (
				Ur(), po(e, t), e === null && Da(t.stateNode.containerInfo), Je(t), null
			);
		case 10:
			return vu(t.type._context), Je(t), null;
		case 17:
			return dt(t.type) && Xs(), Je(t), null;
		case 19:
			if ((ve(Se), (s = t.memoizedState), s === null)) return Je(t), null;
			if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
				if (r) la(s, !1);
				else {
					if (Ae !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((i = sl(e)), i !== null)) {
								for (
									t.flags |= 128,
										la(s, !1),
										r = i.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(s = n),
										(e = r),
										(s.flags &= 14680066),
										(i = s.alternate),
										i === null
											? ((s.childLanes = 0),
											  (s.lanes = e),
											  (s.child = null),
											  (s.subtreeFlags = 0),
											  (s.memoizedProps = null),
											  (s.memoizedState = null),
											  (s.updateQueue = null),
											  (s.dependencies = null),
											  (s.stateNode = null))
											: ((s.childLanes = i.childLanes),
											  (s.lanes = i.lanes),
											  (s.child = i.child),
											  (s.subtreeFlags = 0),
											  (s.deletions = null),
											  (s.memoizedProps = i.memoizedProps),
											  (s.memoizedState = i.memoizedState),
											  (s.updateQueue = i.updateQueue),
											  (s.type = i.type),
											  (e = i.dependencies),
											  (s.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return he(Se, (Se.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					s.tail !== null &&
						Re() > $r &&
						((t.flags |= 128), (r = !0), la(s, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = sl(i)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							la(s, !0),
							s.tail === null && s.tailMode === "hidden" && !i.alternate && !xe)
						)
							return Je(t), null;
					} else
						2 * Re() - s.renderingStartTime > $r &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), la(s, !1), (t.lanes = 4194304));
				s.isBackwards
					? ((i.sibling = t.child), (t.child = i))
					: ((n = s.last),
					  n !== null ? (n.sibling = i) : (t.child = i),
					  (s.last = i));
			}
			return s.tail !== null
				? ((t = s.tail),
				  (s.rendering = t),
				  (s.tail = t.sibling),
				  (s.renderingStartTime = Re()),
				  (t.sibling = null),
				  (n = Se.current),
				  he(Se, r ? (n & 1) | 2 : n & 1),
				  t)
				: (Je(t), null);
		case 22:
		case 23:
			return (
				Tu(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? mt & 1073741824 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Je(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(D(156, t.tag));
}
function Qv(e, t) {
	switch ((hu(t), t.tag)) {
		case 1:
			return (
				dt(t.type) && Xs(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Ur(),
				ve(ct),
				ve(Ge),
				Nu(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return ju(t), null;
		case 13:
			if (
				(ve(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(D(340));
				zr();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return ve(Se), null;
		case 4:
			return Ur(), null;
		case 10:
			return vu(t.type._context), null;
		case 22:
		case 23:
			return Tu(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var js = !1,
	Ye = !1,
	Jv = typeof WeakSet == "function" ? WeakSet : Set,
	B = null;
function Pr(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				ke(e, t, r);
			}
		else n.current = null;
}
function mo(e, t, n) {
	try {
		n();
	} catch (r) {
		ke(e, t, r);
	}
}
var jd = !1;
function Yv(e, t) {
	if (((Gi = Qs), (e = gh()), du(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var a = r.anchorOffset,
						s = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, s.nodeType;
					} catch {
						n = null;
						break e;
					}
					var i = 0,
						o = -1,
						u = -1,
						c = 0,
						d = 0,
						p = e,
						m = null;
					t: for (;;) {
						for (
							var y;
							p !== n || (a !== 0 && p.nodeType !== 3) || (o = i + a),
								p !== s || (r !== 0 && p.nodeType !== 3) || (u = i + r),
								p.nodeType === 3 && (i += p.nodeValue.length),
								(y = p.firstChild) !== null;

						)
							(m = p), (p = y);
						for (;;) {
							if (p === e) break t;
							if (
								(m === n && ++c === a && (o = i),
								m === s && ++d === r && (u = i),
								(y = p.nextSibling) !== null)
							)
								break;
							(p = m), (m = p.parentNode);
						}
						p = y;
					}
					n = o === -1 || u === -1 ? null : { start: o, end: u };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Xi = { focusedElem: e, selectionRange: n }, Qs = !1, B = t; B !== null; )
		if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (B = e);
		else
			for (; B !== null; ) {
				t = B;
				try {
					var j = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (j !== null) {
									var g = j.memoizedProps,
										S = j.memoizedState,
										v = t.stateNode,
										f = v.getSnapshotBeforeUpdate(
											t.elementType === t.type ? g : Tt(t.type, g),
											S,
										);
									v.__reactInternalSnapshotBeforeUpdate = f;
								}
								break;
							case 3:
								var x = t.stateNode.containerInfo;
								x.nodeType === 1
									? (x.textContent = "")
									: x.nodeType === 9 &&
									  x.documentElement &&
									  x.removeChild(x.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(D(163));
						}
				} catch (E) {
					ke(t, t.return, E);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (B = e);
					break;
				}
				B = t.return;
			}
	return (j = jd), (jd = !1), j;
}
function Sa(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var a = (r = r.next);
		do {
			if ((a.tag & e) === e) {
				var s = a.destroy;
				(a.destroy = void 0), s !== void 0 && mo(t, n, s);
			}
			a = a.next;
		} while (a !== r);
	}
}
function Rl(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function go(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function fp(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), fp(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Jt], delete t[Fa], delete t[to], delete t[Ov], delete t[Tv])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function hp(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Nd(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || hp(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function vo(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = Gs));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (vo(e, t, n), e = e.sibling; e !== null; ) vo(e, t, n), (e = e.sibling);
}
function yo(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (yo(e, t, n), e = e.sibling; e !== null; ) yo(e, t, n), (e = e.sibling);
}
var Be = null,
	Dt = !1;
function yn(e, t, n) {
	for (n = n.child; n !== null; ) pp(e, t, n), (n = n.sibling);
}
function pp(e, t, n) {
	if (Yt && typeof Yt.onCommitFiberUnmount == "function")
		try {
			Yt.onCommitFiberUnmount(jl, n);
		} catch {}
	switch (n.tag) {
		case 5:
			Ye || Pr(n, t);
		case 6:
			var r = Be,
				a = Dt;
			(Be = null),
				yn(e, t, n),
				(Be = r),
				(Dt = a),
				Be !== null &&
					(Dt
						? ((e = Be),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: Be.removeChild(n.stateNode));
			break;
		case 18:
			Be !== null &&
				(Dt
					? ((e = Be),
					  (n = n.stateNode),
					  e.nodeType === 8
							? ci(e.parentNode, n)
							: e.nodeType === 1 && ci(e, n),
					  La(e))
					: ci(Be, n.stateNode));
			break;
		case 4:
			(r = Be),
				(a = Dt),
				(Be = n.stateNode.containerInfo),
				(Dt = !0),
				yn(e, t, n),
				(Be = r),
				(Dt = a);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!Ye &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				a = r = r.next;
				do {
					var s = a,
						i = s.destroy;
					(s = s.tag),
						i !== void 0 && (s & 2 || s & 4) && mo(n, t, i),
						(a = a.next);
				} while (a !== r);
			}
			yn(e, t, n);
			break;
		case 1:
			if (
				!Ye &&
				(Pr(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (o) {
					ke(n, t, o);
				}
			yn(e, t, n);
			break;
		case 21:
			yn(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((Ye = (r = Ye) || n.memoizedState !== null), yn(e, t, n), (Ye = r))
				: yn(e, t, n);
			break;
		default:
			yn(e, t, n);
	}
}
function Sd(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Jv()),
			t.forEach(function (r) {
				var a = sy.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(a, a));
			});
	}
}
function Ot(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var a = n[r];
			try {
				var s = e,
					i = t,
					o = i;
				e: for (; o !== null; ) {
					switch (o.tag) {
						case 5:
							(Be = o.stateNode), (Dt = !1);
							break e;
						case 3:
							(Be = o.stateNode.containerInfo), (Dt = !0);
							break e;
						case 4:
							(Be = o.stateNode.containerInfo), (Dt = !0);
							break e;
					}
					o = o.return;
				}
				if (Be === null) throw Error(D(160));
				pp(s, i, a), (Be = null), (Dt = !1);
				var u = a.alternate;
				u !== null && (u.return = null), (a.return = null);
			} catch (c) {
				ke(a, t, c);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) mp(t, e), (t = t.sibling);
}
function mp(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Ot(t, e), Kt(e), r & 4)) {
				try {
					Sa(3, e, e.return), Rl(3, e);
				} catch (g) {
					ke(e, e.return, g);
				}
				try {
					Sa(5, e, e.return);
				} catch (g) {
					ke(e, e.return, g);
				}
			}
			break;
		case 1:
			Ot(t, e), Kt(e), r & 512 && n !== null && Pr(n, n.return);
			break;
		case 5:
			if (
				(Ot(t, e),
				Kt(e),
				r & 512 && n !== null && Pr(n, n.return),
				e.flags & 32)
			) {
				var a = e.stateNode;
				try {
					ba(a, "");
				} catch (g) {
					ke(e, e.return, g);
				}
			}
			if (r & 4 && ((a = e.stateNode), a != null)) {
				var s = e.memoizedProps,
					i = n !== null ? n.memoizedProps : s,
					o = e.type,
					u = e.updateQueue;
				if (((e.updateQueue = null), u !== null))
					try {
						o === "input" && s.type === "radio" && s.name != null && Mf(a, s),
							Bi(o, i);
						var c = Bi(o, s);
						for (i = 0; i < u.length; i += 2) {
							var d = u[i],
								p = u[i + 1];
							d === "style"
								? $f(a, p)
								: d === "dangerouslySetInnerHTML"
								? Uf(a, p)
								: d === "children"
								? ba(a, p)
								: Xo(a, d, p, c);
						}
						switch (o) {
							case "input":
								Fi(a, s);
								break;
							case "textarea":
								zf(a, s);
								break;
							case "select":
								var m = a._wrapperState.wasMultiple;
								a._wrapperState.wasMultiple = !!s.multiple;
								var y = s.value;
								y != null
									? _r(a, !!s.multiple, y, !1)
									: m !== !!s.multiple &&
									  (s.defaultValue != null
											? _r(a, !!s.multiple, s.defaultValue, !0)
											: _r(a, !!s.multiple, s.multiple ? [] : "", !1));
						}
						a[Fa] = s;
					} catch (g) {
						ke(e, e.return, g);
					}
			}
			break;
		case 6:
			if ((Ot(t, e), Kt(e), r & 4)) {
				if (e.stateNode === null) throw Error(D(162));
				(a = e.stateNode), (s = e.memoizedProps);
				try {
					a.nodeValue = s;
				} catch (g) {
					ke(e, e.return, g);
				}
			}
			break;
		case 3:
			if (
				(Ot(t, e), Kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					La(t.containerInfo);
				} catch (g) {
					ke(e, e.return, g);
				}
			break;
		case 4:
			Ot(t, e), Kt(e);
			break;
		case 13:
			Ot(t, e),
				Kt(e),
				(a = e.child),
				a.flags & 8192 &&
					((s = a.memoizedState !== null),
					(a.stateNode.isHidden = s),
					!s ||
						(a.alternate !== null && a.alternate.memoizedState !== null) ||
						(Lu = Re())),
				r & 4 && Sd(e);
			break;
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((Ye = (c = Ye) || d), Ot(t, e), (Ye = c)) : Ot(t, e),
				Kt(e),
				r & 8192)
			) {
				if (
					((c = e.memoizedState !== null),
					(e.stateNode.isHidden = c) && !d && e.mode & 1)
				)
					for (B = e, d = e.child; d !== null; ) {
						for (p = B = d; B !== null; ) {
							switch (((m = B), (y = m.child), m.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Sa(4, m, m.return);
									break;
								case 1:
									Pr(m, m.return);
									var j = m.stateNode;
									if (typeof j.componentWillUnmount == "function") {
										(r = m), (n = m.return);
										try {
											(t = r),
												(j.props = t.memoizedProps),
												(j.state = t.memoizedState),
												j.componentWillUnmount();
										} catch (g) {
											ke(r, n, g);
										}
									}
									break;
								case 5:
									Pr(m, m.return);
									break;
								case 22:
									if (m.memoizedState !== null) {
										Ed(p);
										continue;
									}
							}
							y !== null ? ((y.return = m), (B = y)) : Ed(p);
						}
						d = d.sibling;
					}
				e: for (d = null, p = e; ; ) {
					if (p.tag === 5) {
						if (d === null) {
							d = p;
							try {
								(a = p.stateNode),
									c
										? ((s = a.style),
										  typeof s.setProperty == "function"
												? s.setProperty("display", "none", "important")
												: (s.display = "none"))
										: ((o = p.stateNode),
										  (u = p.memoizedProps.style),
										  (i =
												u != null && u.hasOwnProperty("display")
													? u.display
													: null),
										  (o.style.display = Bf("display", i)));
							} catch (g) {
								ke(e, e.return, g);
							}
						}
					} else if (p.tag === 6) {
						if (d === null)
							try {
								p.stateNode.nodeValue = c ? "" : p.memoizedProps;
							} catch (g) {
								ke(e, e.return, g);
							}
					} else if (
						((p.tag !== 22 && p.tag !== 23) ||
							p.memoizedState === null ||
							p === e) &&
						p.child !== null
					) {
						(p.child.return = p), (p = p.child);
						continue;
					}
					if (p === e) break e;
					for (; p.sibling === null; ) {
						if (p.return === null || p.return === e) break e;
						d === p && (d = null), (p = p.return);
					}
					d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
				}
			}
			break;
		case 19:
			Ot(t, e), Kt(e), r & 4 && Sd(e);
			break;
		case 21:
			break;
		default:
			Ot(t, e), Kt(e);
	}
}
function Kt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (hp(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(D(160));
			}
			switch (r.tag) {
				case 5:
					var a = r.stateNode;
					r.flags & 32 && (ba(a, ""), (r.flags &= -33));
					var s = Nd(e);
					yo(e, s, a);
					break;
				case 3:
				case 4:
					var i = r.stateNode.containerInfo,
						o = Nd(e);
					vo(e, o, i);
					break;
				default:
					throw Error(D(161));
			}
		} catch (u) {
			ke(e, e.return, u);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Gv(e, t, n) {
	(B = e), gp(e);
}
function gp(e, t, n) {
	for (var r = (e.mode & 1) !== 0; B !== null; ) {
		var a = B,
			s = a.child;
		if (a.tag === 22 && r) {
			var i = a.memoizedState !== null || js;
			if (!i) {
				var o = a.alternate,
					u = (o !== null && o.memoizedState !== null) || Ye;
				o = js;
				var c = Ye;
				if (((js = i), (Ye = u) && !c))
					for (B = a; B !== null; )
						(i = B),
							(u = i.child),
							i.tag === 22 && i.memoizedState !== null
								? kd(a)
								: u !== null
								? ((u.return = i), (B = u))
								: kd(a);
				for (; s !== null; ) (B = s), gp(s), (s = s.sibling);
				(B = a), (js = o), (Ye = c);
			}
			Cd(e);
		} else
			a.subtreeFlags & 8772 && s !== null ? ((s.return = a), (B = s)) : Cd(e);
	}
}
function Cd(e) {
	for (; B !== null; ) {
		var t = B;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							Ye || Rl(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !Ye)
								if (n === null) r.componentDidMount();
								else {
									var a =
										t.elementType === t.type
											? n.memoizedProps
											: Tt(t.type, n.memoizedProps);
									r.componentDidUpdate(
										a,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate,
									);
								}
							var s = t.updateQueue;
							s !== null && od(t, s, r);
							break;
						case 3:
							var i = t.updateQueue;
							if (i !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								od(t, i, n);
							}
							break;
						case 5:
							var o = t.stateNode;
							if (n === null && t.flags & 4) {
								n = o;
								var u = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										u.autoFocus && n.focus();
										break;
									case "img":
										u.src && (n.src = u.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var c = t.alternate;
								if (c !== null) {
									var d = c.memoizedState;
									if (d !== null) {
										var p = d.dehydrated;
										p !== null && La(p);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(D(163));
					}
				Ye || (t.flags & 512 && go(t));
			} catch (m) {
				ke(t, t.return, m);
			}
		}
		if (t === e) {
			B = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (B = n);
			break;
		}
		B = t.return;
	}
}
function Ed(e) {
	for (; B !== null; ) {
		var t = B;
		if (t === e) {
			B = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (B = n);
			break;
		}
		B = t.return;
	}
}
function kd(e) {
	for (; B !== null; ) {
		var t = B;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Rl(4, t);
					} catch (u) {
						ke(t, n, u);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var a = t.return;
						try {
							r.componentDidMount();
						} catch (u) {
							ke(t, a, u);
						}
					}
					var s = t.return;
					try {
						go(t);
					} catch (u) {
						ke(t, s, u);
					}
					break;
				case 5:
					var i = t.return;
					try {
						go(t);
					} catch (u) {
						ke(t, i, u);
					}
			}
		} catch (u) {
			ke(t, t.return, u);
		}
		if (t === e) {
			B = null;
			break;
		}
		var o = t.sibling;
		if (o !== null) {
			(o.return = t.return), (B = o);
			break;
		}
		B = t.return;
	}
}
var Xv = Math.ceil,
	ol = hn.ReactCurrentDispatcher,
	Ru = hn.ReactCurrentOwner,
	Pt = hn.ReactCurrentBatchConfig,
	le = 0,
	Me = null,
	Oe = null,
	$e = 0,
	mt = 0,
	Rr = Bn(0),
	Ae = 0,
	$a = null,
	lr = 0,
	_l = 0,
	_u = 0,
	Ca = null,
	ot = null,
	Lu = 0,
	$r = 1 / 0,
	rn = null,
	ul = !1,
	xo = null,
	Tn = null,
	Ns = !1,
	bn = null,
	cl = 0,
	Ea = 0,
	wo = null,
	As = -1,
	Fs = 0;
function rt() {
	return le & 6 ? Re() : As !== -1 ? As : (As = Re());
}
function Dn(e) {
	return e.mode & 1
		? le & 2 && $e !== 0
			? $e & -$e
			: Av.transition !== null
			? (Fs === 0 && (Fs = eh()), Fs)
			: ((e = ue),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ih(e.type))),
			  e)
		: 1;
}
function zt(e, t, n, r) {
	if (50 < Ea) throw ((Ea = 0), (wo = null), Error(D(185)));
	qa(e, n, r),
		(!(le & 2) || e !== Me) &&
			(e === Me && (!(le & 2) && (_l |= n), Ae === 4 && Cn(e, $e)),
			ft(e, r),
			n === 1 && le === 0 && !(t.mode & 1) && (($r = Re() + 500), kl && $n()));
}
function ft(e, t) {
	var n = e.callbackNode;
	Ag(e, t);
	var r = Ks(e, e === Me ? $e : 0);
	if (r === 0)
		n !== null && Ac(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Ac(n), t === 1))
			e.tag === 0 ? Dv(bd.bind(null, e)) : kh(bd.bind(null, e)),
				_v(function () {
					!(le & 6) && $n();
				}),
				(n = null);
		else {
			switch (th(r)) {
				case 1:
					n = ru;
					break;
				case 4:
					n = Xf;
					break;
				case 16:
					n = qs;
					break;
				case 536870912:
					n = Zf;
					break;
				default:
					n = qs;
			}
			n = Cp(n, vp.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function vp(e, t) {
	if (((As = -1), (Fs = 0), le & 6)) throw Error(D(327));
	var n = e.callbackNode;
	if (Ar() && e.callbackNode !== n) return null;
	var r = Ks(e, e === Me ? $e : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = dl(e, r);
	else {
		t = r;
		var a = le;
		le |= 2;
		var s = xp();
		(Me !== e || $e !== t) && ((rn = null), ($r = Re() + 500), er(e, t));
		do
			try {
				ty();
				break;
			} catch (o) {
				yp(e, o);
			}
		while (!0);
		gu(),
			(ol.current = s),
			(le = a),
			Oe !== null ? (t = 0) : ((Me = null), ($e = 0), (t = Ae));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((a = qi(e)), a !== 0 && ((r = a), (t = jo(e, a)))), t === 1)
		)
			throw ((n = $a), er(e, 0), Cn(e, r), ft(e, Re()), n);
		if (t === 6) Cn(e, r);
		else {
			if (
				((a = e.current.alternate),
				!(r & 30) &&
					!Zv(a) &&
					((t = dl(e, r)),
					t === 2 && ((s = qi(e)), s !== 0 && ((r = s), (t = jo(e, s)))),
					t === 1))
			)
				throw ((n = $a), er(e, 0), Cn(e, r), ft(e, Re()), n);
			switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(D(345));
				case 2:
					Kn(e, ot, rn);
					break;
				case 3:
					if (
						(Cn(e, r), (r & 130023424) === r && ((t = Lu + 500 - Re()), 10 < t))
					) {
						if (Ks(e, 0) !== 0) break;
						if (((a = e.suspendedLanes), (a & r) !== r)) {
							rt(), (e.pingedLanes |= e.suspendedLanes & a);
							break;
						}
						e.timeoutHandle = eo(Kn.bind(null, e, ot, rn), t);
						break;
					}
					Kn(e, ot, rn);
					break;
				case 4:
					if ((Cn(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, a = -1; 0 < r; ) {
						var i = 31 - Mt(r);
						(s = 1 << i), (i = t[i]), i > a && (a = i), (r &= ~s);
					}
					if (
						((r = a),
						(r = Re() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * Xv(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = eo(Kn.bind(null, e, ot, rn), r);
						break;
					}
					Kn(e, ot, rn);
					break;
				case 5:
					Kn(e, ot, rn);
					break;
				default:
					throw Error(D(329));
			}
		}
	}
	return ft(e, Re()), e.callbackNode === n ? vp.bind(null, e) : null;
}
function jo(e, t) {
	var n = Ca;
	return (
		e.current.memoizedState.isDehydrated && (er(e, t).flags |= 256),
		(e = dl(e, t)),
		e !== 2 && ((t = ot), (ot = n), t !== null && No(t)),
		e
	);
}
function No(e) {
	ot === null ? (ot = e) : ot.push.apply(ot, e);
}
function Zv(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var a = n[r],
						s = a.getSnapshot;
					a = a.value;
					try {
						if (!It(s(), a)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function Cn(e, t) {
	for (
		t &= ~_u,
			t &= ~_l,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Mt(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function bd(e) {
	if (le & 6) throw Error(D(327));
	Ar();
	var t = Ks(e, 0);
	if (!(t & 1)) return ft(e, Re()), null;
	var n = dl(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = qi(e);
		r !== 0 && ((t = r), (n = jo(e, r)));
	}
	if (n === 1) throw ((n = $a), er(e, 0), Cn(e, t), ft(e, Re()), n);
	if (n === 6) throw Error(D(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Kn(e, ot, rn),
		ft(e, Re()),
		null
	);
}
function Ou(e, t) {
	var n = le;
	le |= 1;
	try {
		return e(t);
	} finally {
		(le = n), le === 0 && (($r = Re() + 500), kl && $n());
	}
}
function ir(e) {
	bn !== null && bn.tag === 0 && !(le & 6) && Ar();
	var t = le;
	le |= 1;
	var n = Pt.transition,
		r = ue;
	try {
		if (((Pt.transition = null), (ue = 1), e)) return e();
	} finally {
		(ue = r), (Pt.transition = n), (le = t), !(le & 6) && $n();
	}
}
function Tu() {
	(mt = Rr.current), ve(Rr);
}
function er(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), Rv(n)), Oe !== null))
		for (n = Oe.return; n !== null; ) {
			var r = n;
			switch ((hu(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Xs();
					break;
				case 3:
					Ur(), ve(ct), ve(Ge), Nu();
					break;
				case 5:
					ju(r);
					break;
				case 4:
					Ur();
					break;
				case 13:
					ve(Se);
					break;
				case 19:
					ve(Se);
					break;
				case 10:
					vu(r.type._context);
					break;
				case 22:
				case 23:
					Tu();
			}
			n = n.return;
		}
	if (
		((Me = e),
		(Oe = e = An(e.current, null)),
		($e = mt = t),
		(Ae = 0),
		($a = null),
		(_u = _l = lr = 0),
		(ot = Ca = null),
		Yn !== null)
	) {
		for (t = 0; t < Yn.length; t++)
			if (((n = Yn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var a = r.next,
					s = n.pending;
				if (s !== null) {
					var i = s.next;
					(s.next = a), (r.next = i);
				}
				n.pending = r;
			}
		Yn = null;
	}
	return e;
}
function yp(e, t) {
	do {
		var n = Oe;
		try {
			if ((gu(), (Os.current = il), ll)) {
				for (var r = Ce.memoizedState; r !== null; ) {
					var a = r.queue;
					a !== null && (a.pending = null), (r = r.next);
				}
				ll = !1;
			}
			if (
				((sr = 0),
				(Fe = De = Ce = null),
				(Na = !1),
				(Ia = 0),
				(Ru.current = null),
				n === null || n.return === null)
			) {
				(Ae = 1), ($a = t), (Oe = null);
				break;
			}
			e: {
				var s = e,
					i = n.return,
					o = n,
					u = t;
				if (
					((t = $e),
					(o.flags |= 32768),
					u !== null && typeof u == "object" && typeof u.then == "function")
				) {
					var c = u,
						d = o,
						p = d.tag;
					if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
						var m = d.alternate;
						m
							? ((d.updateQueue = m.updateQueue),
							  (d.memoizedState = m.memoizedState),
							  (d.lanes = m.lanes))
							: ((d.updateQueue = null), (d.memoizedState = null));
					}
					var y = pd(i);
					if (y !== null) {
						(y.flags &= -257),
							md(y, i, o, s, t),
							y.mode & 1 && hd(s, c, t),
							(t = y),
							(u = c);
						var j = t.updateQueue;
						if (j === null) {
							var g = new Set();
							g.add(u), (t.updateQueue = g);
						} else j.add(u);
						break e;
					} else {
						if (!(t & 1)) {
							hd(s, c, t), Du();
							break e;
						}
						u = Error(D(426));
					}
				} else if (xe && o.mode & 1) {
					var S = pd(i);
					if (S !== null) {
						!(S.flags & 65536) && (S.flags |= 256),
							md(S, i, o, s, t),
							pu(Br(u, o));
						break e;
					}
				}
				(s = u = Br(u, o)),
					Ae !== 4 && (Ae = 2),
					Ca === null ? (Ca = [s]) : Ca.push(s),
					(s = i);
				do {
					switch (s.tag) {
						case 3:
							(s.flags |= 65536), (t &= -t), (s.lanes |= t);
							var v = tp(s, u, t);
							id(s, v);
							break e;
						case 1:
							o = u;
							var f = s.type,
								x = s.stateNode;
							if (
								!(s.flags & 128) &&
								(typeof f.getDerivedStateFromError == "function" ||
									(x !== null &&
										typeof x.componentDidCatch == "function" &&
										(Tn === null || !Tn.has(x))))
							) {
								(s.flags |= 65536), (t &= -t), (s.lanes |= t);
								var E = np(s, o, t);
								id(s, E);
								break e;
							}
					}
					s = s.return;
				} while (s !== null);
			}
			jp(n);
		} catch (w) {
			(t = w), Oe === n && n !== null && (Oe = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function xp() {
	var e = ol.current;
	return (ol.current = il), e === null ? il : e;
}
function Du() {
	(Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
		Me === null || (!(lr & 268435455) && !(_l & 268435455)) || Cn(Me, $e);
}
function dl(e, t) {
	var n = le;
	le |= 2;
	var r = xp();
	(Me !== e || $e !== t) && ((rn = null), er(e, t));
	do
		try {
			ey();
			break;
		} catch (a) {
			yp(e, a);
		}
	while (!0);
	if ((gu(), (le = n), (ol.current = r), Oe !== null)) throw Error(D(261));
	return (Me = null), ($e = 0), Ae;
}
function ey() {
	for (; Oe !== null; ) wp(Oe);
}
function ty() {
	for (; Oe !== null && !kg(); ) wp(Oe);
}
function wp(e) {
	var t = Sp(e.alternate, e, mt);
	(e.memoizedProps = e.pendingProps),
		t === null ? jp(e) : (Oe = t),
		(Ru.current = null);
}
function jp(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Qv(n, t)), n !== null)) {
				(n.flags &= 32767), (Oe = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Ae = 6), (Oe = null);
				return;
			}
		} else if (((n = Kv(n, t, mt)), n !== null)) {
			Oe = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Oe = t;
			return;
		}
		Oe = t = e;
	} while (t !== null);
	Ae === 0 && (Ae = 5);
}
function Kn(e, t, n) {
	var r = ue,
		a = Pt.transition;
	try {
		(Pt.transition = null), (ue = 1), ny(e, t, n, r);
	} finally {
		(Pt.transition = a), (ue = r);
	}
	return null;
}
function ny(e, t, n, r) {
	do Ar();
	while (bn !== null);
	if (le & 6) throw Error(D(327));
	n = e.finishedWork;
	var a = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(D(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var s = n.lanes | n.childLanes;
	if (
		(Fg(e, s),
		e === Me && ((Oe = Me = null), ($e = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Ns ||
			((Ns = !0),
			Cp(qs, function () {
				return Ar(), null;
			})),
		(s = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || s)
	) {
		(s = Pt.transition), (Pt.transition = null);
		var i = ue;
		ue = 1;
		var o = le;
		(le |= 4),
			(Ru.current = null),
			Yv(e, n),
			mp(n, e),
			Nv(Xi),
			(Qs = !!Gi),
			(Xi = Gi = null),
			(e.current = n),
			Gv(n),
			bg(),
			(le = o),
			(ue = i),
			(Pt.transition = s);
	} else e.current = n;
	if (
		(Ns && ((Ns = !1), (bn = e), (cl = a)),
		(s = e.pendingLanes),
		s === 0 && (Tn = null),
		_g(n.stateNode),
		ft(e, Re()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
	if (ul) throw ((ul = !1), (e = xo), (xo = null), e);
	return (
		cl & 1 && e.tag !== 0 && Ar(),
		(s = e.pendingLanes),
		s & 1 ? (e === wo ? Ea++ : ((Ea = 0), (wo = e))) : (Ea = 0),
		$n(),
		null
	);
}
function Ar() {
	if (bn !== null) {
		var e = th(cl),
			t = Pt.transition,
			n = ue;
		try {
			if (((Pt.transition = null), (ue = 16 > e ? 16 : e), bn === null))
				var r = !1;
			else {
				if (((e = bn), (bn = null), (cl = 0), le & 6)) throw Error(D(331));
				var a = le;
				for (le |= 4, B = e.current; B !== null; ) {
					var s = B,
						i = s.child;
					if (B.flags & 16) {
						var o = s.deletions;
						if (o !== null) {
							for (var u = 0; u < o.length; u++) {
								var c = o[u];
								for (B = c; B !== null; ) {
									var d = B;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											Sa(8, d, s);
									}
									var p = d.child;
									if (p !== null) (p.return = d), (B = p);
									else
										for (; B !== null; ) {
											d = B;
											var m = d.sibling,
												y = d.return;
											if ((fp(d), d === c)) {
												B = null;
												break;
											}
											if (m !== null) {
												(m.return = y), (B = m);
												break;
											}
											B = y;
										}
								}
							}
							var j = s.alternate;
							if (j !== null) {
								var g = j.child;
								if (g !== null) {
									j.child = null;
									do {
										var S = g.sibling;
										(g.sibling = null), (g = S);
									} while (g !== null);
								}
							}
							B = s;
						}
					}
					if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (B = i);
					else
						e: for (; B !== null; ) {
							if (((s = B), s.flags & 2048))
								switch (s.tag) {
									case 0:
									case 11:
									case 15:
										Sa(9, s, s.return);
								}
							var v = s.sibling;
							if (v !== null) {
								(v.return = s.return), (B = v);
								break e;
							}
							B = s.return;
						}
				}
				var f = e.current;
				for (B = f; B !== null; ) {
					i = B;
					var x = i.child;
					if (i.subtreeFlags & 2064 && x !== null) (x.return = i), (B = x);
					else
						e: for (i = f; B !== null; ) {
							if (((o = B), o.flags & 2048))
								try {
									switch (o.tag) {
										case 0:
										case 11:
										case 15:
											Rl(9, o);
									}
								} catch (w) {
									ke(o, o.return, w);
								}
							if (o === i) {
								B = null;
								break e;
							}
							var E = o.sibling;
							if (E !== null) {
								(E.return = o.return), (B = E);
								break e;
							}
							B = o.return;
						}
				}
				if (
					((le = a), $n(), Yt && typeof Yt.onPostCommitFiberRoot == "function")
				)
					try {
						Yt.onPostCommitFiberRoot(jl, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(ue = n), (Pt.transition = t);
		}
	}
	return !1;
}
function Pd(e, t, n) {
	(t = Br(n, t)),
		(t = tp(e, t, 1)),
		(e = On(e, t, 1)),
		(t = rt()),
		e !== null && (qa(e, 1, t), ft(e, t));
}
function ke(e, t, n) {
	if (e.tag === 3) Pd(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Pd(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(Tn === null || !Tn.has(r)))
				) {
					(e = Br(n, e)),
						(e = np(t, e, 1)),
						(t = On(t, e, 1)),
						(e = rt()),
						t !== null && (qa(t, 1, e), ft(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function ry(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = rt()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Me === e &&
			($e & n) === n &&
			(Ae === 4 || (Ae === 3 && ($e & 130023424) === $e && 500 > Re() - Lu)
				? er(e, 0)
				: (_u |= n)),
		ft(e, t);
}
function Np(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = fs), (fs <<= 1), !(fs & 130023424) && (fs = 4194304))
			: (t = 1));
	var n = rt();
	(e = dn(e, t)), e !== null && (qa(e, t, n), ft(e, n));
}
function ay(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Np(e, n);
}
function sy(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				a = e.memoizedState;
			a !== null && (n = a.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(D(314));
	}
	r !== null && r.delete(t), Np(e, n);
}
var Sp;
Sp = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || ct.current) ut = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (ut = !1), qv(e, t, n);
			ut = !!(e.flags & 131072);
		}
	else (ut = !1), xe && t.flags & 1048576 && bh(t, tl, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Ds(e, t), (e = t.pendingProps);
			var a = Mr(t, Ge.current);
			Dr(t, n), (a = Cu(null, t, r, e, a, n));
			var s = Eu();
			return (
				(t.flags |= 1),
				typeof a == "object" &&
				a !== null &&
				typeof a.render == "function" &&
				a.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  dt(r) ? ((s = !0), Zs(t)) : (s = !1),
					  (t.memoizedState =
							a.state !== null && a.state !== void 0 ? a.state : null),
					  xu(t),
					  (a.updater = Pl),
					  (t.stateNode = a),
					  (a._reactInternals = t),
					  io(t, r, e, n),
					  (t = co(null, t, r, !0, s, n)))
					: ((t.tag = 0), xe && s && fu(t), nt(null, t, a, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Ds(e, t),
					(e = t.pendingProps),
					(a = r._init),
					(r = a(r._payload)),
					(t.type = r),
					(a = t.tag = iy(r)),
					(e = Tt(r, e)),
					a)
				) {
					case 0:
						t = uo(null, t, r, e, n);
						break e;
					case 1:
						t = yd(null, t, r, e, n);
						break e;
					case 11:
						t = gd(null, t, r, e, n);
						break e;
					case 14:
						t = vd(null, t, r, Tt(r.type, e), n);
						break e;
				}
				throw Error(D(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(a = t.pendingProps),
				(a = t.elementType === r ? a : Tt(r, a)),
				uo(e, t, r, a, n)
			);
		case 1:
			return (
				(r = t.type),
				(a = t.pendingProps),
				(a = t.elementType === r ? a : Tt(r, a)),
				yd(e, t, r, a, n)
			);
		case 3:
			e: {
				if ((lp(t), e === null)) throw Error(D(387));
				(r = t.pendingProps),
					(s = t.memoizedState),
					(a = s.element),
					Th(e, t),
					al(t, r, null, n);
				var i = t.memoizedState;
				if (((r = i.element), s.isDehydrated))
					if (
						((s = {
							element: r,
							isDehydrated: !1,
							cache: i.cache,
							pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
							transitions: i.transitions,
						}),
						(t.updateQueue.baseState = s),
						(t.memoizedState = s),
						t.flags & 256)
					) {
						(a = Br(Error(D(423)), t)), (t = xd(e, t, r, n, a));
						break e;
					} else if (r !== a) {
						(a = Br(Error(D(424)), t)), (t = xd(e, t, r, n, a));
						break e;
					} else
						for (
							vt = Ln(t.stateNode.containerInfo.firstChild),
								yt = t,
								xe = !0,
								Ft = null,
								n = Lh(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((zr(), r === a)) {
						t = fn(e, t, n);
						break e;
					}
					nt(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Dh(t),
				e === null && ao(t),
				(r = t.type),
				(a = t.pendingProps),
				(s = e !== null ? e.memoizedProps : null),
				(i = a.children),
				Zi(r, a) ? (i = null) : s !== null && Zi(r, s) && (t.flags |= 32),
				sp(e, t),
				nt(e, t, i, n),
				t.child
			);
		case 6:
			return e === null && ao(t), null;
		case 13:
			return ip(e, t, n);
		case 4:
			return (
				wu(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Ir(t, null, r, n)) : nt(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(a = t.pendingProps),
				(a = t.elementType === r ? a : Tt(r, a)),
				gd(e, t, r, a, n)
			);
		case 7:
			return nt(e, t, t.pendingProps, n), t.child;
		case 8:
			return nt(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return nt(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(a = t.pendingProps),
					(s = t.memoizedProps),
					(i = a.value),
					he(nl, r._currentValue),
					(r._currentValue = i),
					s !== null)
				)
					if (It(s.value, i)) {
						if (s.children === a.children && !ct.current) {
							t = fn(e, t, n);
							break e;
						}
					} else
						for (s = t.child, s !== null && (s.return = t); s !== null; ) {
							var o = s.dependencies;
							if (o !== null) {
								i = s.child;
								for (var u = o.firstContext; u !== null; ) {
									if (u.context === r) {
										if (s.tag === 1) {
											(u = on(-1, n & -n)), (u.tag = 2);
											var c = s.updateQueue;
											if (c !== null) {
												c = c.shared;
												var d = c.pending;
												d === null
													? (u.next = u)
													: ((u.next = d.next), (d.next = u)),
													(c.pending = u);
											}
										}
										(s.lanes |= n),
											(u = s.alternate),
											u !== null && (u.lanes |= n),
											so(s.return, n, t),
											(o.lanes |= n);
										break;
									}
									u = u.next;
								}
							} else if (s.tag === 10) i = s.type === t.type ? null : s.child;
							else if (s.tag === 18) {
								if (((i = s.return), i === null)) throw Error(D(341));
								(i.lanes |= n),
									(o = i.alternate),
									o !== null && (o.lanes |= n),
									so(i, n, t),
									(i = s.sibling);
							} else i = s.child;
							if (i !== null) i.return = s;
							else
								for (i = s; i !== null; ) {
									if (i === t) {
										i = null;
										break;
									}
									if (((s = i.sibling), s !== null)) {
										(s.return = i.return), (i = s);
										break;
									}
									i = i.return;
								}
							s = i;
						}
				nt(e, t, a.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(a = t.type),
				(r = t.pendingProps.children),
				Dr(t, n),
				(a = Rt(a)),
				(r = r(a)),
				(t.flags |= 1),
				nt(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(a = Tt(r, t.pendingProps)),
				(a = Tt(r.type, a)),
				vd(e, t, r, a, n)
			);
		case 15:
			return rp(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(a = t.pendingProps),
				(a = t.elementType === r ? a : Tt(r, a)),
				Ds(e, t),
				(t.tag = 1),
				dt(r) ? ((e = !0), Zs(t)) : (e = !1),
				Dr(t, n),
				ep(t, r, a),
				io(t, r, a, n),
				co(null, t, r, !0, e, n)
			);
		case 19:
			return op(e, t, n);
		case 22:
			return ap(e, t, n);
	}
	throw Error(D(156, t.tag));
};
function Cp(e, t) {
	return Gf(e, t);
}
function ly(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function bt(e, t, n, r) {
	return new ly(e, t, n, r);
}
function Au(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function iy(e) {
	if (typeof e == "function") return Au(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === eu)) return 11;
		if (e === tu) return 14;
	}
	return 2;
}
function An(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = bt(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Ms(e, t, n, r, a, s) {
	var i = 2;
	if (((r = e), typeof e == "function")) Au(e) && (i = 1);
	else if (typeof e == "string") i = 5;
	else
		e: switch (e) {
			case xr:
				return tr(n.children, a, s, t);
			case Zo:
				(i = 8), (a |= 8);
				break;
			case Li:
				return (
					(e = bt(12, n, t, a | 2)), (e.elementType = Li), (e.lanes = s), e
				);
			case Oi:
				return (e = bt(13, n, t, a)), (e.elementType = Oi), (e.lanes = s), e;
			case Ti:
				return (e = bt(19, n, t, a)), (e.elementType = Ti), (e.lanes = s), e;
			case Df:
				return Ll(n, a, s, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case Of:
							i = 10;
							break e;
						case Tf:
							i = 9;
							break e;
						case eu:
							i = 11;
							break e;
						case tu:
							i = 14;
							break e;
						case jn:
							(i = 16), (r = null);
							break e;
					}
				throw Error(D(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = bt(i, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = s), t
	);
}
function tr(e, t, n, r) {
	return (e = bt(7, e, r, t)), (e.lanes = n), e;
}
function Ll(e, t, n, r) {
	return (
		(e = bt(22, e, r, t)),
		(e.elementType = Df),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function yi(e, t, n) {
	return (e = bt(6, e, null, t)), (e.lanes = n), e;
}
function xi(e, t, n) {
	return (
		(t = bt(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function oy(e, t, n, r, a) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Zl(0)),
		(this.expirationTimes = Zl(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Zl(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = a),
		(this.mutableSourceEagerHydrationData = null);
}
function Fu(e, t, n, r, a, s, i, o, u) {
	return (
		(e = new oy(e, t, n, o, u)),
		t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
		(s = bt(3, null, null, t)),
		(e.current = s),
		(s.stateNode = e),
		(s.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		xu(s),
		e
	);
}
function uy(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: yr,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function Ep(e) {
	if (!e) return Mn;
	e = e._reactInternals;
	e: {
		if (dr(e) !== e || e.tag !== 1) throw Error(D(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (dt(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(D(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (dt(n)) return Eh(e, n, t);
	}
	return t;
}
function kp(e, t, n, r, a, s, i, o, u) {
	return (
		(e = Fu(n, r, !0, e, a, s, i, o, u)),
		(e.context = Ep(null)),
		(n = e.current),
		(r = rt()),
		(a = Dn(n)),
		(s = on(r, a)),
		(s.callback = t ?? null),
		On(n, s, a),
		(e.current.lanes = a),
		qa(e, a, r),
		ft(e, r),
		e
	);
}
function Ol(e, t, n, r) {
	var a = t.current,
		s = rt(),
		i = Dn(a);
	return (
		(n = Ep(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = on(s, i)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = On(a, t, i)),
		e !== null && (zt(e, a, i, s), Ls(e, a, i)),
		i
	);
}
function fl(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Rd(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Mu(e, t) {
	Rd(e, t), (e = e.alternate) && Rd(e, t);
}
function cy() {
	return null;
}
var bp =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function zu(e) {
	this._internalRoot = e;
}
Tl.prototype.render = zu.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(D(409));
	Ol(e, t, null, null);
};
Tl.prototype.unmount = zu.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		ir(function () {
			Ol(null, e, null, null);
		}),
			(t[cn] = null);
	}
};
function Tl(e) {
	this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = ah();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Sn.length && t !== 0 && t < Sn[n].priority; n++);
		Sn.splice(n, 0, e), n === 0 && lh(e);
	}
};
function Iu(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Dl(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function _d() {}
function dy(e, t, n, r, a) {
	if (a) {
		if (typeof r == "function") {
			var s = r;
			r = function () {
				var c = fl(i);
				s.call(c);
			};
		}
		var i = kp(t, r, e, 0, null, !1, !1, "", _d);
		return (
			(e._reactRootContainer = i),
			(e[cn] = i.current),
			Da(e.nodeType === 8 ? e.parentNode : e),
			ir(),
			i
		);
	}
	for (; (a = e.lastChild); ) e.removeChild(a);
	if (typeof r == "function") {
		var o = r;
		r = function () {
			var c = fl(u);
			o.call(c);
		};
	}
	var u = Fu(e, 0, !1, null, null, !1, !1, "", _d);
	return (
		(e._reactRootContainer = u),
		(e[cn] = u.current),
		Da(e.nodeType === 8 ? e.parentNode : e),
		ir(function () {
			Ol(t, u, n, r);
		}),
		u
	);
}
function Al(e, t, n, r, a) {
	var s = n._reactRootContainer;
	if (s) {
		var i = s;
		if (typeof a == "function") {
			var o = a;
			a = function () {
				var u = fl(i);
				o.call(u);
			};
		}
		Ol(t, i, e, a);
	} else i = dy(n, t, e, a, r);
	return fl(i);
}
nh = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = pa(t.pendingLanes);
				n !== 0 &&
					(au(t, n | 1), ft(t, Re()), !(le & 6) && (($r = Re() + 500), $n()));
			}
			break;
		case 13:
			ir(function () {
				var r = dn(e, 1);
				if (r !== null) {
					var a = rt();
					zt(r, e, 1, a);
				}
			}),
				Mu(e, 1);
	}
};
su = function (e) {
	if (e.tag === 13) {
		var t = dn(e, 134217728);
		if (t !== null) {
			var n = rt();
			zt(t, e, 134217728, n);
		}
		Mu(e, 134217728);
	}
};
rh = function (e) {
	if (e.tag === 13) {
		var t = Dn(e),
			n = dn(e, t);
		if (n !== null) {
			var r = rt();
			zt(n, e, t, r);
		}
		Mu(e, t);
	}
};
ah = function () {
	return ue;
};
sh = function (e, t) {
	var n = ue;
	try {
		return (ue = e), t();
	} finally {
		ue = n;
	}
};
Hi = function (e, t, n) {
	switch (t) {
		case "input":
			if ((Fi(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" + JSON.stringify("" + t) + '][type="radio"]',
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var a = El(r);
						if (!a) throw Error(D(90));
						Ff(r), Fi(r, a);
					}
				}
			}
			break;
		case "textarea":
			zf(e, n);
			break;
		case "select":
			(t = n.value), t != null && _r(e, !!n.multiple, t, !1);
	}
};
Wf = Ou;
qf = ir;
var fy = { usingClientEntryPoint: !1, Events: [Qa, Sr, El, Hf, Vf, Ou] },
	ia = {
		findFiberByHostInstance: Jn,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom",
	},
	hy = {
		bundleType: ia.bundleType,
		version: ia.version,
		rendererPackageName: ia.rendererPackageName,
		rendererConfig: ia.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: hn.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Jf(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: ia.findFiberByHostInstance || cy,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Ss.isDisabled && Ss.supportsFiber)
		try {
			(jl = Ss.inject(hy)), (Yt = Ss);
		} catch {}
}
Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fy;
Nt.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Iu(t)) throw Error(D(200));
	return uy(e, t, null, n);
};
Nt.createRoot = function (e, t) {
	if (!Iu(e)) throw Error(D(299));
	var n = !1,
		r = "",
		a = bp;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
		(t = Fu(e, 1, !1, null, null, n, !1, r, a)),
		(e[cn] = t.current),
		Da(e.nodeType === 8 ? e.parentNode : e),
		new zu(t)
	);
};
Nt.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(D(188))
			: ((e = Object.keys(e).join(",")), Error(D(268, e)));
	return (e = Jf(t)), (e = e === null ? null : e.stateNode), e;
};
Nt.flushSync = function (e) {
	return ir(e);
};
Nt.hydrate = function (e, t, n) {
	if (!Dl(t)) throw Error(D(200));
	return Al(null, e, t, !0, n);
};
Nt.hydrateRoot = function (e, t, n) {
	if (!Iu(e)) throw Error(D(405));
	var r = (n != null && n.hydratedSources) || null,
		a = !1,
		s = "",
		i = bp;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (a = !0),
			n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
		(t = kp(t, null, e, 1, n ?? null, a, !1, s, i)),
		(e[cn] = t.current),
		Da(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(a = n._getVersion),
				(a = a(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, a])
					: t.mutableSourceEagerHydrationData.push(n, a);
	return new Tl(t);
};
Nt.render = function (e, t, n) {
	if (!Dl(t)) throw Error(D(200));
	return Al(null, e, t, !1, n);
};
Nt.unmountComponentAtNode = function (e) {
	if (!Dl(e)) throw Error(D(40));
	return e._reactRootContainer
		? (ir(function () {
				Al(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[cn] = null);
				});
		  }),
		  !0)
		: !1;
};
Nt.unstable_batchedUpdates = Ou;
Nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Dl(n)) throw Error(D(200));
	if (e == null || e._reactInternals === void 0) throw Error(D(38));
	return Al(e, t, n, !1, r);
};
Nt.version = "18.3.1-next-f1338f8080-20240426";
function Pp() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pp);
		} catch (e) {
			console.error(e);
		}
}
Pp(), (Pf.exports = Nt);
var Rp = Pf.exports,
	Ld = Rp;
(Ri.createRoot = Ld.createRoot), (Ri.hydrateRoot = Ld.hydrateRoot);
var Uu = {};
Object.defineProperty(Uu, "__esModule", { value: !0 });
Uu.parse = wy;
Uu.serialize = jy;
const py = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
	my = /^[\u0021-\u003A\u003C-\u007E]*$/,
	gy =
		/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
	vy = /^[\u0020-\u003A\u003D-\u007E]*$/,
	yy = Object.prototype.toString,
	xy = (() => {
		const e = function () {};
		return (e.prototype = Object.create(null)), e;
	})();
function wy(e, t) {
	const n = new xy(),
		r = e.length;
	if (r < 2) return n;
	const a = (t == null ? void 0 : t.decode) || Ny;
	let s = 0;
	do {
		const i = e.indexOf("=", s);
		if (i === -1) break;
		const o = e.indexOf(";", s),
			u = o === -1 ? r : o;
		if (i > u) {
			s = e.lastIndexOf(";", i - 1) + 1;
			continue;
		}
		const c = Od(e, s, i),
			d = Td(e, i, c),
			p = e.slice(c, d);
		if (n[p] === void 0) {
			let m = Od(e, i + 1, u),
				y = Td(e, u, m);
			const j = a(e.slice(m, y));
			n[p] = j;
		}
		s = u + 1;
	} while (s < r);
	return n;
}
function Od(e, t, n) {
	do {
		const r = e.charCodeAt(t);
		if (r !== 32 && r !== 9) return t;
	} while (++t < n);
	return n;
}
function Td(e, t, n) {
	for (; t > n; ) {
		const r = e.charCodeAt(--t);
		if (r !== 32 && r !== 9) return t + 1;
	}
	return n;
}
function jy(e, t, n) {
	const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
	if (!py.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
	const a = r(t);
	if (!my.test(a)) throw new TypeError(`argument val is invalid: ${t}`);
	let s = e + "=" + a;
	if (!n) return s;
	if (n.maxAge !== void 0) {
		if (!Number.isInteger(n.maxAge))
			throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
		s += "; Max-Age=" + n.maxAge;
	}
	if (n.domain) {
		if (!gy.test(n.domain))
			throw new TypeError(`option domain is invalid: ${n.domain}`);
		s += "; Domain=" + n.domain;
	}
	if (n.path) {
		if (!vy.test(n.path))
			throw new TypeError(`option path is invalid: ${n.path}`);
		s += "; Path=" + n.path;
	}
	if (n.expires) {
		if (!Sy(n.expires) || !Number.isFinite(n.expires.valueOf()))
			throw new TypeError(`option expires is invalid: ${n.expires}`);
		s += "; Expires=" + n.expires.toUTCString();
	}
	if (
		(n.httpOnly && (s += "; HttpOnly"),
		n.secure && (s += "; Secure"),
		n.partitioned && (s += "; Partitioned"),
		n.priority)
	)
		switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
			case "low":
				s += "; Priority=Low";
				break;
			case "medium":
				s += "; Priority=Medium";
				break;
			case "high":
				s += "; Priority=High";
				break;
			default:
				throw new TypeError(`option priority is invalid: ${n.priority}`);
		}
	if (n.sameSite)
		switch (
			typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite
		) {
			case !0:
			case "strict":
				s += "; SameSite=Strict";
				break;
			case "lax":
				s += "; SameSite=Lax";
				break;
			case "none":
				s += "; SameSite=None";
				break;
			default:
				throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
		}
	return s;
}
function Ny(e) {
	if (e.indexOf("%") === -1) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}
function Sy(e) {
	return yy.call(e) === "[object Date]";
}
/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Dd = "popstate";
function Cy(e = {}) {
	function t(r, a) {
		let { pathname: s, search: i, hash: o } = r.location;
		return Ha(
			"",
			{ pathname: s, search: i, hash: o },
			(a.state && a.state.usr) || null,
			(a.state && a.state.key) || "default",
		);
	}
	function n(r, a) {
		return typeof a == "string" ? a : zn(a);
	}
	return ky(t, n, null, e);
}
function se(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function jt(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Ey() {
	return Math.random().toString(36).substring(2, 10);
}
function Ad(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Ha(e, t, n = null, r) {
	return {
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: "",
		...(typeof t == "string" ? Hn(t) : t),
		state: n,
		key: (t && t.key) || r || Ey(),
	};
}
function zn({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return (
		t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
		n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
		e
	);
}
function Hn(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
		let r = e.indexOf("?");
		r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function ky(e, t, n, r = {}) {
	let { window: a = document.defaultView, v5Compat: s = !1 } = r,
		i = a.history,
		o = "POP",
		u = null,
		c = d();
	c == null && ((c = 0), i.replaceState({ ...i.state, idx: c }, ""));
	function d() {
		return (i.state || { idx: null }).idx;
	}
	function p() {
		o = "POP";
		let S = d(),
			v = S == null ? null : S - c;
		(c = S), u && u({ action: o, location: g.location, delta: v });
	}
	function m(S, v) {
		o = "PUSH";
		let f = Ha(g.location, S, v);
		c = d() + 1;
		let x = Ad(f, c),
			E = g.createHref(f);
		try {
			i.pushState(x, "", E);
		} catch (w) {
			if (w instanceof DOMException && w.name === "DataCloneError") throw w;
			a.location.assign(E);
		}
		s && u && u({ action: o, location: g.location, delta: 1 });
	}
	function y(S, v) {
		o = "REPLACE";
		let f = Ha(g.location, S, v);
		c = d();
		let x = Ad(f, c),
			E = g.createHref(f);
		i.replaceState(x, "", E),
			s && u && u({ action: o, location: g.location, delta: 0 });
	}
	function j(S) {
		let v = a.location.origin !== "null" ? a.location.origin : a.location.href,
			f = typeof S == "string" ? S : zn(S);
		return (
			(f = f.replace(/ $/, "%20")),
			se(
				v,
				`No window.location.(origin|href) available to create URL for href: ${f}`,
			),
			new URL(f, v)
		);
	}
	let g = {
		get action() {
			return o;
		},
		get location() {
			return e(a, i);
		},
		listen(S) {
			if (u) throw new Error("A history only accepts one active listener");
			return (
				a.addEventListener(Dd, p),
				(u = S),
				() => {
					a.removeEventListener(Dd, p), (u = null);
				}
			);
		},
		createHref(S) {
			return t(a, S);
		},
		createURL: j,
		encodeLocation(S) {
			let v = j(S);
			return { pathname: v.pathname, search: v.search, hash: v.hash };
		},
		push: m,
		replace: y,
		go(S) {
			return i.go(S);
		},
	};
	return g;
}
var by = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Py(e) {
	return e.index === !0;
}
function hl(e, t, n = [], r = {}) {
	return e.map((a, s) => {
		let i = [...n, String(s)],
			o = typeof a.id == "string" ? a.id : i.join("-");
		if (
			(se(
				a.index !== !0 || !a.children,
				"Cannot specify children on an index route",
			),
			se(
				!r[o],
				`Found a route id collision on id "${o}".  Route id's must be globally unique within Data Router usages`,
			),
			Py(a))
		) {
			let u = { ...a, ...t(a), id: o };
			return (r[o] = u), u;
		} else {
			let u = { ...a, ...t(a), id: o, children: void 0 };
			return (
				(r[o] = u), a.children && (u.children = hl(a.children, t, i, r)), u
			);
		}
	});
}
function En(e, t, n = "/") {
	return zs(e, t, n, !1);
}
function zs(e, t, n, r) {
	let a = typeof t == "string" ? Hn(t) : t,
		s = Ut(a.pathname || "/", n);
	if (s == null) return null;
	let i = _p(e);
	_y(i);
	let o = null;
	for (let u = 0; o == null && u < i.length; ++u) {
		let c = By(s);
		o = Iy(i[u], c, r);
	}
	return o;
}
function Ry(e, t) {
	let { route: n, pathname: r, params: a } = e;
	return { id: n.id, pathname: r, params: a, data: t[n.id], handle: n.handle };
}
function _p(e, t = [], n = [], r = "") {
	let a = (s, i, o) => {
		let u = {
			relativePath: o === void 0 ? s.path || "" : o,
			caseSensitive: s.caseSensitive === !0,
			childrenIndex: i,
			route: s,
		};
		u.relativePath.startsWith("/") &&
			(se(
				u.relativePath.startsWith(r),
				`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
			),
			(u.relativePath = u.relativePath.slice(r.length)));
		let c = Xt([r, u.relativePath]),
			d = n.concat(u);
		s.children &&
			s.children.length > 0 &&
			(se(
				s.index !== !0,
				`Index routes must not have child routes. Please remove all child routes from route path "${c}".`,
			),
			_p(s.children, t, d, c)),
			!(s.path == null && !s.index) &&
				t.push({ path: c, score: My(c, s.index), routesMeta: d });
	};
	return (
		e.forEach((s, i) => {
			var o;
			if (s.path === "" || !((o = s.path) != null && o.includes("?"))) a(s, i);
			else for (let u of Lp(s.path)) a(s, i, u);
		}),
		t
	);
}
function Lp(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		a = n.endsWith("?"),
		s = n.replace(/\?$/, "");
	if (r.length === 0) return a ? [s, ""] : [s];
	let i = Lp(r.join("/")),
		o = [];
	return (
		o.push(...i.map((u) => (u === "" ? s : [s, u].join("/")))),
		a && o.push(...i),
		o.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
	);
}
function _y(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: zy(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex),
			  ),
	);
}
var Ly = /^:[\w-]+$/,
	Oy = 3,
	Ty = 2,
	Dy = 1,
	Ay = 10,
	Fy = -2,
	Fd = (e) => e === "*";
function My(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Fd) && (r += Fy),
		t && (r += Ty),
		n
			.filter((a) => !Fd(a))
			.reduce((a, s) => a + (Ly.test(s) ? Oy : s === "" ? Dy : Ay), r)
	);
}
function zy(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, a) => r === t[a])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function Iy(e, t, n = !1) {
	let { routesMeta: r } = e,
		a = {},
		s = "/",
		i = [];
	for (let o = 0; o < r.length; ++o) {
		let u = r[o],
			c = o === r.length - 1,
			d = s === "/" ? t : t.slice(s.length) || "/",
			p = pl(
				{ path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
				d,
			),
			m = u.route;
		if (
			(!p &&
				c &&
				n &&
				!r[r.length - 1].route.index &&
				(p = pl(
					{ path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
					d,
				)),
			!p)
		)
			return null;
		Object.assign(a, p.params),
			i.push({
				params: a,
				pathname: Xt([s, p.pathname]),
				pathnameBase: Vy(Xt([s, p.pathnameBase])),
				route: m,
			}),
			p.pathnameBase !== "/" && (s = Xt([s, p.pathnameBase]));
	}
	return i;
}
function pl(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = Uy(e.path, e.caseSensitive, e.end),
		a = t.match(n);
	if (!a) return null;
	let s = a[0],
		i = s.replace(/(.)\/+$/, "$1"),
		o = a.slice(1);
	return {
		params: r.reduce((c, { paramName: d, isOptional: p }, m) => {
			if (d === "*") {
				let j = o[m] || "";
				i = s.slice(0, s.length - j.length).replace(/(.)\/+$/, "$1");
			}
			const y = o[m];
			return (
				p && !y ? (c[d] = void 0) : (c[d] = (y || "").replace(/%2F/g, "/")), c
			);
		}, {}),
		pathname: s,
		pathnameBase: i,
		pattern: e,
	};
}
function Uy(e, t = !1, n = !0) {
	jt(
		e === "*" || !e.endsWith("*") || e.endsWith("/*"),
		`Route path "${e}" will be treated as if it were "${e.replace(
			/\*$/,
			"/*",
		)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
			/\*$/,
			"/*",
		)}".`,
	);
	let r = [],
		a =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(i, o, u) => (
						r.push({ paramName: o, isOptional: u != null }),
						u ? "/?([^\\/]+)?" : "/([^\\/]+)"
					),
				);
	return (
		e.endsWith("*")
			? (r.push({ paramName: "*" }),
			  (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
			? (a += "\\/*$")
			: e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
		[new RegExp(a, t ? void 0 : "i"), r]
	);
}
function By(e) {
	try {
		return e
			.split("/")
			.map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
			.join("/");
	} catch (t) {
		return (
			jt(
				!1,
				`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
			),
			e
		);
	}
}
function Ut(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function $y(e, t = "/") {
	let {
		pathname: n,
		search: r = "",
		hash: a = "",
	} = typeof e == "string" ? Hn(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : Hy(n, t)) : t,
		search: Wy(r),
		hash: qy(a),
	};
}
function Hy(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((a) => {
			a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function wi(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
		r,
	)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Op(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
	);
}
function Bu(e) {
	let t = Op(e);
	return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function $u(e, t, n, r = !1) {
	let a;
	typeof e == "string"
		? (a = Hn(e))
		: ((a = { ...e }),
		  se(
				!a.pathname || !a.pathname.includes("?"),
				wi("?", "pathname", "search", a),
		  ),
		  se(
				!a.pathname || !a.pathname.includes("#"),
				wi("#", "pathname", "hash", a),
		  ),
		  se(!a.search || !a.search.includes("#"), wi("#", "search", "hash", a)));
	let s = e === "" || a.pathname === "",
		i = s ? "/" : a.pathname,
		o;
	if (i == null) o = n;
	else {
		let p = t.length - 1;
		if (!r && i.startsWith("..")) {
			let m = i.split("/");
			for (; m[0] === ".."; ) m.shift(), (p -= 1);
			a.pathname = m.join("/");
		}
		o = p >= 0 ? t[p] : "/";
	}
	let u = $y(a, o),
		c = i && i !== "/" && i.endsWith("/"),
		d = (s || i === ".") && n.endsWith("/");
	return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u;
}
var Xt = (e) => e.join("/").replace(/\/\/+/g, "/"),
	Vy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	Wy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	qy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
	ml = class {
		constructor(e, t, n, r = !1) {
			(this.status = e),
				(this.statusText = t || ""),
				(this.internal = r),
				n instanceof Error
					? ((this.data = n.toString()), (this.error = n))
					: (this.data = n);
		}
	};
function Fl(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
var Tp = ["POST", "PUT", "PATCH", "DELETE"],
	Ky = new Set(Tp),
	Qy = ["GET", ...Tp],
	Jy = new Set(Qy),
	Yy = new Set([301, 302, 303, 307, 308]),
	Gy = new Set([307, 308]),
	ji = {
		state: "idle",
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	Xy = {
		state: "idle",
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	oa = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
	Hu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Zy = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
	Dp = "remix-router-transitions",
	Ap = Symbol("ResetLoaderData");
function e0(e) {
	const t = e.window ? e.window : typeof window < "u" ? window : void 0,
		n =
			typeof t < "u" &&
			typeof t.document < "u" &&
			typeof t.document.createElement < "u";
	se(
		e.routes.length > 0,
		"You must provide a non-empty routes array to createRouter",
	);
	let r = e.mapRouteProperties || Zy,
		a = {},
		s = hl(e.routes, r, void 0, a),
		i,
		o = e.basename || "/",
		u = e.dataStrategy || s0,
		c = e.patchRoutesOnNavigation,
		d = { ...e.future },
		p = null,
		m = new Set(),
		y = null,
		j = null,
		g = null,
		S = e.hydrationData != null,
		v = En(s, e.history.location, o),
		f = null;
	if (v == null && !c) {
		let N = Ct(404, { pathname: e.history.location.pathname }),
			{ matches: C, route: R } = Kd(s);
		(v = C), (f = { [R.id]: N });
	}
	v &&
		!e.hydrationData &&
		ns(v, s, e.history.location.pathname).active &&
		(v = null);
	let x;
	if (v)
		if (v.some((N) => N.route.lazy)) x = !1;
		else if (!v.some((N) => N.route.loader)) x = !0;
		else {
			let N = e.hydrationData ? e.hydrationData.loaderData : null,
				C = e.hydrationData ? e.hydrationData.errors : null;
			if (C) {
				let R = v.findIndex((T) => C[T.route.id] !== void 0);
				x = v.slice(0, R + 1).every((T) => !Co(T.route, N, C));
			} else x = v.every((R) => !Co(R.route, N, C));
		}
	else {
		(x = !1), (v = []);
		let N = ns(null, s, e.history.location.pathname);
		N.active && N.matches && (v = N.matches);
	}
	let E,
		w = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: v,
			initialized: x,
			navigation: ji,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: "idle",
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || f,
			fetchers: new Map(),
			blockers: new Map(),
		},
		P = "POP",
		L = !1,
		k,
		M = !1,
		$ = new Map(),
		de = null,
		I = !1,
		H = !1,
		te = new Set(),
		Y = new Map(),
		Ve = 0,
		ze = -1,
		A = new Map(),
		O = new Set(),
		b = new Map(),
		K = new Map(),
		F = new Set(),
		Q = new Map(),
		X,
		oe = null;
	function pe() {
		if (
			((p = e.history.listen(({ action: N, location: C, delta: R }) => {
				if (X) {
					X(), (X = void 0);
					return;
				}
				jt(
					Q.size === 0 || R != null,
					"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
				);
				let T = xc({
					currentLocation: w.location,
					nextLocation: C,
					historyAction: N,
				});
				if (T && R != null) {
					let V = new Promise((J) => {
						X = J;
					});
					e.history.go(R * -1),
						ts(T, {
							state: "blocked",
							location: C,
							proceed() {
								ts(T, {
									state: "proceeding",
									proceed: void 0,
									reset: void 0,
									location: C,
								}),
									V.then(() => e.history.go(R));
							},
							reset() {
								let J = new Map(w.blockers);
								J.set(T, oa), be({ blockers: J });
							},
						});
					return;
				}
				return We(N, C);
			})),
			n)
		) {
			g0(t, $);
			let N = () => v0(t, $);
			t.addEventListener("pagehide", N),
				(de = () => t.removeEventListener("pagehide", N));
		}
		return w.initialized || We("POP", w.location, { initialHydration: !0 }), E;
	}
	function Ie() {
		p && p(),
			de && de(),
			m.clear(),
			k && k.abort(),
			w.fetchers.forEach((N, C) => Wl(C)),
			w.blockers.forEach((N, C) => yc(C));
	}
	function mn(N) {
		return m.add(N), () => m.delete(N);
	}
	function be(N, C = {}) {
		w = { ...w, ...N };
		let R = [],
			T = [];
		w.fetchers.forEach((V, J) => {
			V.state === "idle" && (F.has(J) ? R.push(J) : T.push(J));
		}),
			[...m].forEach((V) =>
				V(w, {
					deletedFetchers: R,
					viewTransitionOpts: C.viewTransitionOpts,
					flushSync: C.flushSync === !0,
				}),
			),
			R.forEach((V) => Wl(V)),
			T.forEach((V) => w.fetchers.delete(V));
	}
	function lt(N, C, { flushSync: R } = {}) {
		var z, Z;
		let T =
				w.actionData != null &&
				w.navigation.formMethod != null &&
				At(w.navigation.formMethod) &&
				w.navigation.state === "loading" &&
				((z = N.state) == null ? void 0 : z._isRedirect) !== !0,
			V;
		C.actionData
			? Object.keys(C.actionData).length > 0
				? (V = C.actionData)
				: (V = null)
			: T
			? (V = w.actionData)
			: (V = null);
		let J = C.loaderData
				? Wd(w.loaderData, C.loaderData, C.matches || [], C.errors)
				: w.loaderData,
			G = w.blockers;
		G.size > 0 && ((G = new Map(G)), G.forEach((ne, ye) => G.set(ye, oa)));
		let W =
			L === !0 ||
			(w.navigation.formMethod != null &&
				At(w.navigation.formMethod) &&
				((Z = N.state) == null ? void 0 : Z._isRedirect) !== !0);
		i && ((s = i), (i = void 0)),
			I ||
				P === "POP" ||
				(P === "PUSH"
					? e.history.push(N, N.state)
					: P === "REPLACE" && e.history.replace(N, N.state));
		let q;
		if (P === "POP") {
			let ne = $.get(w.location.pathname);
			ne && ne.has(N.pathname)
				? (q = { currentLocation: w.location, nextLocation: N })
				: $.has(N.pathname) &&
				  (q = { currentLocation: N, nextLocation: w.location });
		} else if (M) {
			let ne = $.get(w.location.pathname);
			ne
				? ne.add(N.pathname)
				: ((ne = new Set([N.pathname])), $.set(w.location.pathname, ne)),
				(q = { currentLocation: w.location, nextLocation: N });
		}
		be(
			{
				...C,
				actionData: V,
				loaderData: J,
				historyAction: P,
				location: N,
				initialized: !0,
				navigation: ji,
				revalidation: "idle",
				restoreScrollPosition: jc(N, C.matches || w.matches),
				preventScrollReset: W,
				blockers: G,
			},
			{ viewTransitionOpts: q, flushSync: R === !0 },
		),
			(P = "POP"),
			(L = !1),
			(M = !1),
			(I = !1),
			(H = !1),
			oe == null || oe.resolve(),
			(oe = null);
	}
	async function Xe(N, C) {
		if (typeof N == "number") {
			e.history.go(N);
			return;
		}
		let R = So(
				w.location,
				w.matches,
				o,
				N,
				C == null ? void 0 : C.fromRouteId,
				C == null ? void 0 : C.relative,
			),
			{ path: T, submission: V, error: J } = Md(!1, R, C),
			G = w.location,
			W = Ha(w.location, T, C && C.state);
		W = { ...W, ...e.history.encodeLocation(W) };
		let q = C && C.replace != null ? C.replace : void 0,
			z = "PUSH";
		q === !0
			? (z = "REPLACE")
			: q === !1 ||
			  (V != null &&
					At(V.formMethod) &&
					V.formAction === w.location.pathname + w.location.search &&
					(z = "REPLACE"));
		let Z =
				C && "preventScrollReset" in C ? C.preventScrollReset === !0 : void 0,
			ne = (C && C.flushSync) === !0,
			ye = xc({ currentLocation: G, nextLocation: W, historyAction: z });
		if (ye) {
			ts(ye, {
				state: "blocked",
				location: W,
				proceed() {
					ts(ye, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: W,
					}),
						Xe(N, C);
				},
				reset() {
					let Ue = new Map(w.blockers);
					Ue.set(ye, oa), be({ blockers: Ue });
				},
			});
			return;
		}
		await We(z, W, {
			submission: V,
			pendingError: J,
			preventScrollReset: Z,
			replace: C && C.replace,
			enableViewTransition: C && C.viewTransition,
			flushSync: ne,
		});
	}
	function Vt() {
		oe || (oe = y0()), Yr(), be({ revalidation: "loading" });
		let N = oe.promise;
		return w.navigation.state === "submitting"
			? N
			: w.navigation.state === "idle"
			? (We(w.historyAction, w.location, {
					startUninterruptedRevalidation: !0,
			  }),
			  N)
			: (We(P || w.historyAction, w.navigation.location, {
					overrideNavigation: w.navigation,
					enableViewTransition: M === !0,
			  }),
			  N);
	}
	async function We(N, C, R) {
		k && k.abort(),
			(k = null),
			(P = N),
			(I = (R && R.startUninterruptedRevalidation) === !0),
			zm(w.location, w.matches),
			(L = (R && R.preventScrollReset) === !0),
			(M = (R && R.enableViewTransition) === !0);
		let T = i || s,
			V = R && R.overrideNavigation,
			J = En(T, C, o),
			G = (R && R.flushSync) === !0,
			W = ns(J, T, C.pathname);
		if ((W.active && W.matches && (J = W.matches), !J)) {
			let { error: Ne, notFoundMatches: me, route: Te } = ql(C.pathname);
			lt(
				C,
				{ matches: me, loaderData: {}, errors: { [Te.id]: Ne } },
				{ flushSync: G },
			);
			return;
		}
		if (
			w.initialized &&
			!H &&
			d0(w.location, C) &&
			!(R && R.submission && At(R.submission.formMethod))
		) {
			lt(C, { matches: J }, { flushSync: G });
			return;
		}
		k = new AbortController();
		let q = vr(e.history, C, k.signal, R && R.submission),
			z;
		if (R && R.pendingError)
			z = [Qn(J).route.id, { type: "error", error: R.pendingError }];
		else if (R && R.submission && At(R.submission.formMethod)) {
			let Ne = await Wt(q, C, R.submission, J, W.active, {
				replace: R.replace,
				flushSync: G,
			});
			if (Ne.shortCircuited) return;
			if (Ne.pendingActionResult) {
				let [me, Te] = Ne.pendingActionResult;
				if (gt(Te) && Fl(Te.error) && Te.error.status === 404) {
					(k = null),
						lt(C, {
							matches: Ne.matches,
							loaderData: {},
							errors: { [me]: Te.error },
						});
					return;
				}
			}
			(J = Ne.matches || J),
				(z = Ne.pendingActionResult),
				(V = Ni(C, R.submission)),
				(G = !1),
				(W.active = !1),
				(q = vr(e.history, q.url, q.signal));
		}
		let {
			shortCircuited: Z,
			matches: ne,
			loaderData: ye,
			errors: Ue,
		} = await je(
			q,
			C,
			J,
			W.active,
			V,
			R && R.submission,
			R && R.fetcherSubmission,
			R && R.replace,
			R && R.initialHydration === !0,
			G,
			z,
		);
		Z ||
			((k = null),
			lt(C, { matches: ne || J, ...qd(z), loaderData: ye, errors: Ue }));
	}
	async function Wt(N, C, R, T, V, J = {}) {
		Yr();
		let G = p0(C, R);
		if ((be({ navigation: G }, { flushSync: J.flushSync === !0 }), V)) {
			let z = await rs(T, C.pathname, N.signal);
			if (z.type === "aborted") return { shortCircuited: !0 };
			if (z.type === "error") {
				let Z = Qn(z.partialMatches).route.id;
				return {
					matches: z.partialMatches,
					pendingActionResult: [Z, { type: "error", error: z.error }],
				};
			} else if (z.matches) T = z.matches;
			else {
				let { notFoundMatches: Z, error: ne, route: ye } = ql(C.pathname);
				return {
					matches: Z,
					pendingActionResult: [ye.id, { type: "error", error: ne }],
				};
			}
		}
		let W,
			q = ga(T, C);
		if (!q.route.action && !q.route.lazy)
			W = {
				type: "error",
				error: Ct(405, {
					method: N.method,
					pathname: C.pathname,
					routeId: q.route.id,
				}),
			};
		else if (
			((W = (await it("action", w, N, [q], T, null))[q.route.id]),
			N.signal.aborted)
		)
			return { shortCircuited: !0 };
		if (Xn(W)) {
			let z;
			return (
				J && J.replace != null
					? (z = J.replace)
					: (z =
							$d(W.response.headers.get("Location"), new URL(N.url), o) ===
							w.location.pathname + w.location.search),
				await qe(N, W, !0, { submission: R, replace: z }),
				{ shortCircuited: !0 }
			);
		}
		if (gt(W)) {
			let z = Qn(T, q.route.id);
			return (
				(J && J.replace) !== !0 && (P = "PUSH"),
				{ matches: T, pendingActionResult: [z.route.id, W] }
			);
		}
		return { matches: T, pendingActionResult: [q.route.id, W] };
	}
	async function je(N, C, R, T, V, J, G, W, q, z, Z) {
		let ne = V || Ni(C, J),
			ye = J || G || Jd(ne),
			Ue = !I && !q;
		if (T) {
			if (Ue) {
				let Ke = Ze(Z);
				be(
					{ navigation: ne, ...(Ke !== void 0 ? { actionData: Ke } : {}) },
					{ flushSync: z },
				);
			}
			let fe = await rs(R, C.pathname, N.signal);
			if (fe.type === "aborted") return { shortCircuited: !0 };
			if (fe.type === "error") {
				let Ke = Qn(fe.partialMatches).route.id;
				return {
					matches: fe.partialMatches,
					loaderData: {},
					errors: { [Ke]: fe.error },
				};
			} else if (fe.matches) R = fe.matches;
			else {
				let { error: Ke, notFoundMatches: ls, route: Zr } = ql(C.pathname);
				return { matches: ls, loaderData: {}, errors: { [Zr.id]: Ke } };
			}
		}
		let Ne = i || s,
			[me, Te] = Id(e.history, w, R, ye, C, q === !0, H, te, F, b, O, Ne, o, Z);
		if (((ze = ++Ve), me.length === 0 && Te.length === 0)) {
			let fe = gc();
			return (
				lt(
					C,
					{
						matches: R,
						loaderData: {},
						errors: Z && gt(Z[1]) ? { [Z[0]]: Z[1].error } : null,
						...qd(Z),
						...(fe ? { fetchers: new Map(w.fetchers) } : {}),
					},
					{ flushSync: z },
				),
				{ shortCircuited: !0 }
			);
		}
		if (Ue) {
			let fe = {};
			if (!T) {
				fe.navigation = ne;
				let Ke = Ze(Z);
				Ke !== void 0 && (fe.actionData = Ke);
			}
			Te.length > 0 && (fe.fetchers = et(Te)), be(fe, { flushSync: z });
		}
		Te.forEach((fe) => {
			vn(fe.key), fe.controller && Y.set(fe.key, fe.controller);
		});
		let pr = () => Te.forEach((fe) => vn(fe.key));
		k && k.signal.addEventListener("abort", pr);
		let { loaderResults: Gr, fetcherResults: nn } = await Vn(w, R, me, Te, N);
		if (N.signal.aborted) return { shortCircuited: !0 };
		k && k.signal.removeEventListener("abort", pr),
			Te.forEach((fe) => Y.delete(fe.key));
		let qt = Cs(Gr);
		if (qt)
			return await qe(N, qt.result, !0, { replace: W }), { shortCircuited: !0 };
		if (((qt = Cs(nn)), qt))
			return (
				O.add(qt.key),
				await qe(N, qt.result, !0, { replace: W }),
				{ shortCircuited: !0 }
			);
		let { loaderData: Kl, errors: Xr } = Vd(w, R, Gr, Z, Te, nn);
		q && w.errors && (Xr = { ...w.errors, ...Xr });
		let Wn = gc(),
			as = vc(ze),
			ss = Wn || as || Te.length > 0;
		return {
			matches: R,
			loaderData: Kl,
			errors: Xr,
			...(ss ? { fetchers: new Map(w.fetchers) } : {}),
		};
	}
	function Ze(N) {
		if (N && !gt(N[1])) return { [N[0]]: N[1].data };
		if (w.actionData)
			return Object.keys(w.actionData).length === 0 ? null : w.actionData;
	}
	function et(N) {
		return (
			N.forEach((C) => {
				let R = w.fetchers.get(C.key),
					T = ua(void 0, R ? R.data : void 0);
				w.fetchers.set(C.key, T);
			}),
			new Map(w.fetchers)
		);
	}
	async function Pe(N, C, R, T) {
		vn(N);
		let V = (T && T.flushSync) === !0,
			J = i || s,
			G = So(w.location, w.matches, o, R, C, T == null ? void 0 : T.relative),
			W = En(J, G, o),
			q = ns(W, J, G);
		if ((q.active && q.matches && (W = q.matches), !W)) {
			tn(N, C, Ct(404, { pathname: G }), { flushSync: V });
			return;
		}
		let { path: z, submission: Z, error: ne } = Md(!0, G, T);
		if (ne) {
			tn(N, C, ne, { flushSync: V });
			return;
		}
		let ye = ga(W, z),
			Ue = (T && T.preventScrollReset) === !0;
		if (Z && At(Z.formMethod)) {
			await hr(N, C, z, ye, W, q.active, V, Ue, Z);
			return;
		}
		b.set(N, { routeId: C, path: z }),
			await Jr(N, C, z, ye, W, q.active, V, Ue, Z);
	}
	async function hr(N, C, R, T, V, J, G, W, q) {
		Yr(), b.delete(N);
		function z(Le) {
			if (!Le.route.action && !Le.route.lazy) {
				let mr = Ct(405, { method: q.formMethod, pathname: R, routeId: C });
				return tn(N, C, mr, { flushSync: G }), !0;
			}
			return !1;
		}
		if (!J && z(T)) return;
		let Z = w.fetchers.get(N);
		gn(N, m0(q, Z), { flushSync: G });
		let ne = new AbortController(),
			ye = vr(e.history, R, ne.signal, q);
		if (J) {
			let Le = await rs(V, R, ye.signal);
			if (Le.type === "aborted") return;
			if (Le.type === "error") {
				tn(N, C, Le.error, { flushSync: G });
				return;
			} else if (Le.matches) {
				if (((V = Le.matches), (T = ga(V, R)), z(T))) return;
			} else {
				tn(N, C, Ct(404, { pathname: R }), { flushSync: G });
				return;
			}
		}
		Y.set(N, ne);
		let Ue = Ve,
			me = (await it("action", w, ye, [T], V, N))[T.route.id];
		if (ye.signal.aborted) {
			Y.get(N) === ne && Y.delete(N);
			return;
		}
		if (F.has(N)) {
			if (Xn(me) || gt(me)) {
				gn(N, wn(void 0));
				return;
			}
		} else {
			if (Xn(me))
				if ((Y.delete(N), ze > Ue)) {
					gn(N, wn(void 0));
					return;
				} else
					return (
						O.add(N),
						gn(N, ua(q)),
						qe(ye, me, !1, { fetcherSubmission: q, preventScrollReset: W })
					);
			if (gt(me)) {
				tn(N, C, me.error);
				return;
			}
		}
		let Te = w.navigation.location || w.location,
			pr = vr(e.history, Te, ne.signal),
			Gr = i || s,
			nn =
				w.navigation.state !== "idle"
					? En(Gr, w.navigation.location, o)
					: w.matches;
		se(nn, "Didn't find any matches after fetcher action");
		let qt = ++Ve;
		A.set(N, qt);
		let Kl = ua(q, me.data);
		w.fetchers.set(N, Kl);
		let [Xr, Wn] = Id(e.history, w, nn, q, Te, !1, H, te, F, b, O, Gr, o, [
			T.route.id,
			me,
		]);
		Wn.filter((Le) => Le.key !== N).forEach((Le) => {
			let mr = Le.key,
				Nc = w.fetchers.get(mr),
				Bm = ua(void 0, Nc ? Nc.data : void 0);
			w.fetchers.set(mr, Bm), vn(mr), Le.controller && Y.set(mr, Le.controller);
		}),
			be({ fetchers: new Map(w.fetchers) });
		let as = () => Wn.forEach((Le) => vn(Le.key));
		ne.signal.addEventListener("abort", as);
		let { loaderResults: ss, fetcherResults: fe } = await Vn(w, nn, Xr, Wn, pr);
		if (ne.signal.aborted) return;
		ne.signal.removeEventListener("abort", as),
			A.delete(N),
			Y.delete(N),
			Wn.forEach((Le) => Y.delete(Le.key));
		let Ke = Cs(ss);
		if (Ke) return qe(pr, Ke.result, !1, { preventScrollReset: W });
		if (((Ke = Cs(fe)), Ke))
			return O.add(Ke.key), qe(pr, Ke.result, !1, { preventScrollReset: W });
		let { loaderData: ls, errors: Zr } = Vd(w, nn, ss, void 0, Wn, fe);
		if (w.fetchers.has(N)) {
			let Le = wn(me.data);
			w.fetchers.set(N, Le);
		}
		vc(qt),
			w.navigation.state === "loading" && qt > ze
				? (se(P, "Expected pending action"),
				  k && k.abort(),
				  lt(w.navigation.location, {
						matches: nn,
						loaderData: ls,
						errors: Zr,
						fetchers: new Map(w.fetchers),
				  }))
				: (be({
						errors: Zr,
						loaderData: Wd(w.loaderData, ls, nn, Zr),
						fetchers: new Map(w.fetchers),
				  }),
				  (H = !1));
	}
	async function Jr(N, C, R, T, V, J, G, W, q) {
		let z = w.fetchers.get(N);
		gn(N, ua(q, z ? z.data : void 0), { flushSync: G });
		let Z = new AbortController(),
			ne = vr(e.history, R, Z.signal);
		if (J) {
			let me = await rs(V, R, ne.signal);
			if (me.type === "aborted") return;
			if (me.type === "error") {
				tn(N, C, me.error, { flushSync: G });
				return;
			} else if (me.matches) (V = me.matches), (T = ga(V, R));
			else {
				tn(N, C, Ct(404, { pathname: R }), { flushSync: G });
				return;
			}
		}
		Y.set(N, Z);
		let ye = Ve,
			Ne = (await it("loader", w, ne, [T], V, N))[T.route.id];
		if ((Y.get(N) === Z && Y.delete(N), !ne.signal.aborted)) {
			if (F.has(N)) {
				gn(N, wn(void 0));
				return;
			}
			if (Xn(Ne))
				if (ze > ye) {
					gn(N, wn(void 0));
					return;
				} else {
					O.add(N), await qe(ne, Ne, !1, { preventScrollReset: W });
					return;
				}
			if (gt(Ne)) {
				tn(N, C, Ne.error);
				return;
			}
			gn(N, wn(Ne.data));
		}
	}
	async function qe(
		N,
		C,
		R,
		{
			submission: T,
			fetcherSubmission: V,
			preventScrollReset: J,
			replace: G,
		} = {},
	) {
		C.response.headers.has("X-Remix-Revalidate") && (H = !0);
		let W = C.response.headers.get("Location");
		se(W, "Expected a Location header on the redirect Response"),
			(W = $d(W, new URL(N.url), o));
		let q = Ha(w.location, W, { _isRedirect: !0 });
		if (n) {
			let Ne = !1;
			if (C.response.headers.has("X-Remix-Reload-Document")) Ne = !0;
			else if (Hu.test(W)) {
				const me = e.history.createURL(W);
				Ne = me.origin !== t.location.origin || Ut(me.pathname, o) == null;
			}
			if (Ne) {
				G ? t.location.replace(W) : t.location.assign(W);
				return;
			}
		}
		k = null;
		let z =
				G === !0 || C.response.headers.has("X-Remix-Replace")
					? "REPLACE"
					: "PUSH",
			{ formMethod: Z, formAction: ne, formEncType: ye } = w.navigation;
		!T && !V && Z && ne && ye && (T = Jd(w.navigation));
		let Ue = T || V;
		if (Gy.has(C.response.status) && Ue && At(Ue.formMethod))
			await We(z, q, {
				submission: { ...Ue, formAction: W },
				preventScrollReset: J || L,
				enableViewTransition: R ? M : void 0,
			});
		else {
			let Ne = Ni(q, T);
			await We(z, q, {
				overrideNavigation: Ne,
				fetcherSubmission: V,
				preventScrollReset: J || L,
				enableViewTransition: R ? M : void 0,
			});
		}
	}
	async function it(N, C, R, T, V, J) {
		let G,
			W = {};
		try {
			G = await l0(u, N, C, R, T, V, J, a, r);
		} catch (q) {
			return (
				T.forEach((z) => {
					W[z.route.id] = { type: "error", error: q };
				}),
				W
			);
		}
		for (let [q, z] of Object.entries(G))
			if (f0(z)) {
				let Z = z.result;
				W[q] = { type: "redirect", response: u0(Z, R, q, V, o) };
			} else W[q] = await o0(z);
		return W;
	}
	async function Vn(N, C, R, T, V) {
		let J = it("loader", N, V, R, C, null),
			G = Promise.all(
				T.map(async (z) => {
					if (z.matches && z.match && z.controller) {
						let ne = (
							await it(
								"loader",
								N,
								vr(e.history, z.path, z.controller.signal),
								[z.match],
								z.matches,
								z.key,
							)
						)[z.match.route.id];
						return { [z.key]: ne };
					} else
						return Promise.resolve({
							[z.key]: { type: "error", error: Ct(404, { pathname: z.path }) },
						});
				}),
			),
			W = await J,
			q = (await G).reduce((z, Z) => Object.assign(z, Z), {});
		return { loaderResults: W, fetcherResults: q };
	}
	function Yr() {
		(H = !0),
			b.forEach((N, C) => {
				Y.has(C) && te.add(C), vn(C);
			});
	}
	function gn(N, C, R = {}) {
		w.fetchers.set(N, C),
			be(
				{ fetchers: new Map(w.fetchers) },
				{ flushSync: (R && R.flushSync) === !0 },
			);
	}
	function tn(N, C, R, T = {}) {
		let V = Qn(w.matches, C);
		Wl(N),
			be(
				{ errors: { [V.route.id]: R }, fetchers: new Map(w.fetchers) },
				{ flushSync: (T && T.flushSync) === !0 },
			);
	}
	function pc(N) {
		return (
			K.set(N, (K.get(N) || 0) + 1),
			F.has(N) && F.delete(N),
			w.fetchers.get(N) || Xy
		);
	}
	function Wl(N) {
		let C = w.fetchers.get(N);
		Y.has(N) && !(C && C.state === "loading" && A.has(N)) && vn(N),
			b.delete(N),
			A.delete(N),
			O.delete(N),
			F.delete(N),
			te.delete(N),
			w.fetchers.delete(N);
	}
	function Am(N) {
		let C = (K.get(N) || 0) - 1;
		C <= 0 ? (K.delete(N), F.add(N)) : K.set(N, C),
			be({ fetchers: new Map(w.fetchers) });
	}
	function vn(N) {
		let C = Y.get(N);
		C && (C.abort(), Y.delete(N));
	}
	function mc(N) {
		for (let C of N) {
			let R = pc(C),
				T = wn(R.data);
			w.fetchers.set(C, T);
		}
	}
	function gc() {
		let N = [],
			C = !1;
		for (let R of O) {
			let T = w.fetchers.get(R);
			se(T, `Expected fetcher: ${R}`),
				T.state === "loading" && (O.delete(R), N.push(R), (C = !0));
		}
		return mc(N), C;
	}
	function vc(N) {
		let C = [];
		for (let [R, T] of A)
			if (T < N) {
				let V = w.fetchers.get(R);
				se(V, `Expected fetcher: ${R}`),
					V.state === "loading" && (vn(R), A.delete(R), C.push(R));
			}
		return mc(C), C.length > 0;
	}
	function Fm(N, C) {
		let R = w.blockers.get(N) || oa;
		return Q.get(N) !== C && Q.set(N, C), R;
	}
	function yc(N) {
		w.blockers.delete(N), Q.delete(N);
	}
	function ts(N, C) {
		let R = w.blockers.get(N) || oa;
		se(
			(R.state === "unblocked" && C.state === "blocked") ||
				(R.state === "blocked" && C.state === "blocked") ||
				(R.state === "blocked" && C.state === "proceeding") ||
				(R.state === "blocked" && C.state === "unblocked") ||
				(R.state === "proceeding" && C.state === "unblocked"),
			`Invalid blocker state transition: ${R.state} -> ${C.state}`,
		);
		let T = new Map(w.blockers);
		T.set(N, C), be({ blockers: T });
	}
	function xc({ currentLocation: N, nextLocation: C, historyAction: R }) {
		if (Q.size === 0) return;
		Q.size > 1 && jt(!1, "A router only supports one blocker at a time");
		let T = Array.from(Q.entries()),
			[V, J] = T[T.length - 1],
			G = w.blockers.get(V);
		if (
			!(G && G.state === "proceeding") &&
			J({ currentLocation: N, nextLocation: C, historyAction: R })
		)
			return V;
	}
	function ql(N) {
		let C = Ct(404, { pathname: N }),
			R = i || s,
			{ matches: T, route: V } = Kd(R);
		return { notFoundMatches: T, route: V, error: C };
	}
	function Mm(N, C, R) {
		if (((y = N), (g = C), (j = R || null), !S && w.navigation === ji)) {
			S = !0;
			let T = jc(w.location, w.matches);
			T != null && be({ restoreScrollPosition: T });
		}
		return () => {
			(y = null), (g = null), (j = null);
		};
	}
	function wc(N, C) {
		return (
			(j &&
				j(
					N,
					C.map((T) => Ry(T, w.loaderData)),
				)) ||
			N.key
		);
	}
	function zm(N, C) {
		if (y && g) {
			let R = wc(N, C);
			y[R] = g();
		}
	}
	function jc(N, C) {
		if (y) {
			let R = wc(N, C),
				T = y[R];
			if (typeof T == "number") return T;
		}
		return null;
	}
	function ns(N, C, R) {
		if (c)
			if (N) {
				if (Object.keys(N[0].params).length > 0)
					return { active: !0, matches: zs(C, R, o, !0) };
			} else return { active: !0, matches: zs(C, R, o, !0) || [] };
		return { active: !1, matches: null };
	}
	async function rs(N, C, R) {
		if (!c) return { type: "success", matches: N };
		let T = N;
		for (;;) {
			let V = i == null,
				J = i || s,
				G = a;
			try {
				await c({
					path: C,
					matches: T,
					patch: (z, Z) => {
						R.aborted || Bd(z, Z, J, G, r);
					},
				});
			} catch (z) {
				return { type: "error", error: z, partialMatches: T };
			} finally {
				V && !R.aborted && (s = [...s]);
			}
			if (R.aborted) return { type: "aborted" };
			let W = En(J, C, o);
			if (W) return { type: "success", matches: W };
			let q = zs(J, C, o, !0);
			if (
				!q ||
				(T.length === q.length &&
					T.every((z, Z) => z.route.id === q[Z].route.id))
			)
				return { type: "success", matches: null };
			T = q;
		}
	}
	function Im(N) {
		(a = {}), (i = hl(N, r, void 0, a));
	}
	function Um(N, C) {
		let R = i == null;
		Bd(N, C, i || s, a, r), R && ((s = [...s]), be({}));
	}
	return (
		(E = {
			get basename() {
				return o;
			},
			get future() {
				return d;
			},
			get state() {
				return w;
			},
			get routes() {
				return s;
			},
			get window() {
				return t;
			},
			initialize: pe,
			subscribe: mn,
			enableScrollRestoration: Mm,
			navigate: Xe,
			fetch: Pe,
			revalidate: Vt,
			createHref: (N) => e.history.createHref(N),
			encodeLocation: (N) => e.history.encodeLocation(N),
			getFetcher: pc,
			deleteFetcher: Am,
			dispose: Ie,
			getBlocker: Fm,
			deleteBlocker: yc,
			patchRoutes: Um,
			_internalFetchControllers: Y,
			_internalSetRoutes: Im,
		}),
		E
	);
}
function t0(e) {
	return (
		e != null &&
		(("formData" in e && e.formData != null) ||
			("body" in e && e.body !== void 0))
	);
}
function So(e, t, n, r, a, s) {
	let i, o;
	if (a) {
		i = [];
		for (let c of t)
			if ((i.push(c), c.route.id === a)) {
				o = c;
				break;
			}
	} else (i = t), (o = t[t.length - 1]);
	let u = $u(r || ".", Bu(i), Ut(e.pathname, n) || e.pathname, s === "path");
	if (
		(r == null && ((u.search = e.search), (u.hash = e.hash)),
		(r == null || r === "" || r === ".") && o)
	) {
		let c = Vu(u.search);
		if (o.route.index && !c)
			u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index";
		else if (!o.route.index && c) {
			let d = new URLSearchParams(u.search),
				p = d.getAll("index");
			d.delete("index"),
				p.filter((y) => y).forEach((y) => d.append("index", y));
			let m = d.toString();
			u.search = m ? `?${m}` : "";
		}
	}
	return (
		n !== "/" && (u.pathname = u.pathname === "/" ? n : Xt([n, u.pathname])),
		zn(u)
	);
}
function Md(e, t, n) {
	if (!n || !t0(n)) return { path: t };
	if (n.formMethod && !h0(n.formMethod))
		return { path: t, error: Ct(405, { method: n.formMethod }) };
	let r = () => ({ path: t, error: Ct(400, { type: "invalid-body" }) }),
		s = (n.formMethod || "get").toUpperCase(),
		i = Mp(t);
	if (n.body !== void 0) {
		if (n.formEncType === "text/plain") {
			if (!At(s)) return r();
			let p =
				typeof n.body == "string"
					? n.body
					: n.body instanceof FormData || n.body instanceof URLSearchParams
					? Array.from(n.body.entries()).reduce(
							(m, [y, j]) => `${m}${y}=${j}
`,
							"",
					  )
					: String(n.body);
			return {
				path: t,
				submission: {
					formMethod: s,
					formAction: i,
					formEncType: n.formEncType,
					formData: void 0,
					json: void 0,
					text: p,
				},
			};
		} else if (n.formEncType === "application/json") {
			if (!At(s)) return r();
			try {
				let p = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
				return {
					path: t,
					submission: {
						formMethod: s,
						formAction: i,
						formEncType: n.formEncType,
						formData: void 0,
						json: p,
						text: void 0,
					},
				};
			} catch {
				return r();
			}
		}
	}
	se(
		typeof FormData == "function",
		"FormData is not available in this environment",
	);
	let o, u;
	if (n.formData) (o = Eo(n.formData)), (u = n.formData);
	else if (n.body instanceof FormData) (o = Eo(n.body)), (u = n.body);
	else if (n.body instanceof URLSearchParams) (o = n.body), (u = Hd(o));
	else if (n.body == null) (o = new URLSearchParams()), (u = new FormData());
	else
		try {
			(o = new URLSearchParams(n.body)), (u = Hd(o));
		} catch {
			return r();
		}
	let c = {
		formMethod: s,
		formAction: i,
		formEncType: (n && n.formEncType) || "application/x-www-form-urlencoded",
		formData: u,
		json: void 0,
		text: void 0,
	};
	if (At(c.formMethod)) return { path: t, submission: c };
	let d = Hn(t);
	return (
		e && d.search && Vu(d.search) && o.append("index", ""),
		(d.search = `?${o}`),
		{ path: zn(d), submission: c }
	);
}
function zd(e, t, n = !1) {
	let r = e.findIndex((a) => a.route.id === t);
	return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function Id(e, t, n, r, a, s, i, o, u, c, d, p, m, y) {
	let j = y ? (gt(y[1]) ? y[1].error : y[1].data) : void 0,
		g = e.createURL(t.location),
		S = e.createURL(a),
		v = n;
	s && t.errors
		? (v = zd(n, Object.keys(t.errors)[0], !0))
		: y && gt(y[1]) && (v = zd(n, y[0]));
	let f = y ? y[1].statusCode : void 0,
		x = f && f >= 400,
		E = v.filter((P, L) => {
			let { route: k } = P;
			if (k.lazy) return !0;
			if (k.loader == null) return !1;
			if (s) return Co(k, t.loaderData, t.errors);
			if (n0(t.loaderData, t.matches[L], P)) return !0;
			let M = t.matches[L],
				$ = P;
			return Ud(P, {
				currentUrl: g,
				currentParams: M.params,
				nextUrl: S,
				nextParams: $.params,
				...r,
				actionResult: j,
				actionStatus: f,
				defaultShouldRevalidate: x
					? !1
					: i ||
					  g.pathname + g.search === S.pathname + S.search ||
					  g.search !== S.search ||
					  r0(M, $),
			});
		}),
		w = [];
	return (
		c.forEach((P, L) => {
			if (s || !n.some((I) => I.route.id === P.routeId) || u.has(L)) return;
			let k = En(p, P.path, m);
			if (!k) {
				w.push({
					key: L,
					routeId: P.routeId,
					path: P.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let M = t.fetchers.get(L),
				$ = ga(k, P.path),
				de = !1;
			d.has(L)
				? (de = !1)
				: o.has(L)
				? (o.delete(L), (de = !0))
				: M && M.state !== "idle" && M.data === void 0
				? (de = i)
				: (de = Ud($, {
						currentUrl: g,
						currentParams: t.matches[t.matches.length - 1].params,
						nextUrl: S,
						nextParams: n[n.length - 1].params,
						...r,
						actionResult: j,
						actionStatus: f,
						defaultShouldRevalidate: x ? !1 : i,
				  })),
				de &&
					w.push({
						key: L,
						routeId: P.routeId,
						path: P.path,
						matches: k,
						match: $,
						controller: new AbortController(),
					});
		}),
		[E, w]
	);
}
function Co(e, t, n) {
	if (e.lazy) return !0;
	if (!e.loader) return !1;
	let r = t != null && t[e.id] !== void 0,
		a = n != null && n[e.id] !== void 0;
	return !r && a
		? !1
		: typeof e.loader == "function" && e.loader.hydrate === !0
		? !0
		: !r && !a;
}
function n0(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		a = !e.hasOwnProperty(n.route.id);
	return r || a;
}
function r0(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname ||
		(n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
	);
}
function Ud(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
function Bd(e, t, n, r, a) {
	let s;
	if (e) {
		let u = r[e];
		se(u, `No route found to patch children into: routeId = ${e}`),
			u.children || (u.children = []),
			(s = u.children);
	} else s = n;
	let i = t.filter((u) => !s.some((c) => Fp(u, c))),
		o = hl(
			i,
			a,
			[e || "_", "patch", String((s == null ? void 0 : s.length) || "0")],
			r,
		);
	s.push(...o);
}
function Fp(e, t) {
	return "id" in e && "id" in t && e.id === t.id
		? !0
		: e.index === t.index &&
		  e.path === t.path &&
		  e.caseSensitive === t.caseSensitive
		? (!e.children || e.children.length === 0) &&
		  (!t.children || t.children.length === 0)
			? !0
			: e.children.every((n, r) => {
					var a;
					return (a = t.children) == null ? void 0 : a.some((s) => Fp(n, s));
			  })
		: !1;
}
async function a0(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let a = n[e.id];
	se(a, "No route found in manifest");
	let s = {};
	for (let i in r) {
		let u = a[i] !== void 0 && i !== "hasErrorBoundary";
		jt(
			!u,
			`Route "${a.id}" has a static property "${i}" defined but its lazy function is also returning a value for this property. The lazy route property "${i}" will be ignored.`,
		),
			!u && !by.has(i) && (s[i] = r[i]);
	}
	Object.assign(a, s), Object.assign(a, { ...t(a), lazy: void 0 });
}
async function s0({ matches: e }) {
	let t = e.filter((r) => r.shouldLoad);
	return (await Promise.all(t.map((r) => r.resolve()))).reduce(
		(r, a, s) => Object.assign(r, { [t[s].route.id]: a }),
		{},
	);
}
async function l0(e, t, n, r, a, s, i, o, u, c) {
	let d = s.map((y) => (y.route.lazy ? a0(y.route, u, o) : void 0)),
		p = s.map((y, j) => {
			let g = d[j],
				S = a.some((f) => f.route.id === y.route.id);
			return {
				...y,
				shouldLoad: S,
				resolve: async (f) => (
					f &&
						r.method === "GET" &&
						(y.route.lazy || y.route.loader) &&
						(S = !0),
					S
						? i0(t, r, y, g, f, c)
						: Promise.resolve({ type: "data", result: void 0 })
				),
			};
		}),
		m = await e({
			matches: p,
			request: r,
			params: s[0].params,
			fetcherKey: i,
			context: c,
		});
	try {
		await Promise.all(d);
	} catch {}
	return m;
}
async function i0(e, t, n, r, a, s) {
	let i,
		o,
		u = (c) => {
			let d,
				p = new Promise((j, g) => (d = g));
			(o = () => d()), t.signal.addEventListener("abort", o);
			let m = (j) =>
					typeof c != "function"
						? Promise.reject(
								new Error(
									`You cannot call the handler for a route which defines a boolean "${e}" [routeId: ${n.route.id}]`,
								),
						  )
						: c(
								{ request: t, params: n.params, context: s },
								...(j !== void 0 ? [j] : []),
						  ),
				y = (async () => {
					try {
						return { type: "data", result: await (a ? a((g) => m(g)) : m()) };
					} catch (j) {
						return { type: "error", result: j };
					}
				})();
			return Promise.race([y, p]);
		};
	try {
		let c = n.route[e];
		if (r)
			if (c) {
				let d,
					[p] = await Promise.all([
						u(c).catch((m) => {
							d = m;
						}),
						r,
					]);
				if (d !== void 0) throw d;
				i = p;
			} else if ((await r, (c = n.route[e]), c)) i = await u(c);
			else if (e === "action") {
				let d = new URL(t.url),
					p = d.pathname + d.search;
				throw Ct(405, { method: t.method, pathname: p, routeId: n.route.id });
			} else return { type: "data", result: void 0 };
		else if (c) i = await u(c);
		else {
			let d = new URL(t.url),
				p = d.pathname + d.search;
			throw Ct(404, { pathname: p });
		}
	} catch (c) {
		return { type: "error", result: c };
	} finally {
		o && t.signal.removeEventListener("abort", o);
	}
	return i;
}
async function o0(e) {
	var r, a, s, i;
	let { result: t, type: n } = e;
	if (zp(t)) {
		let o;
		try {
			let u = t.headers.get("Content-Type");
			u && /\bapplication\/json\b/.test(u)
				? t.body == null
					? (o = null)
					: (o = await t.json())
				: (o = await t.text());
		} catch (u) {
			return { type: "error", error: u };
		}
		return n === "error"
			? {
					type: "error",
					error: new ml(t.status, t.statusText, o),
					statusCode: t.status,
					headers: t.headers,
			  }
			: { type: "data", data: o, statusCode: t.status, headers: t.headers };
	}
	if (n === "error") {
		if (Qd(t)) {
			if (t.data instanceof Error)
				return {
					type: "error",
					error: t.data,
					statusCode: (r = t.init) == null ? void 0 : r.status,
				};
			t = new ml(
				((a = t.init) == null ? void 0 : a.status) || 500,
				void 0,
				t.data,
			);
		}
		return { type: "error", error: t, statusCode: Fl(t) ? t.status : void 0 };
	}
	return Qd(t)
		? {
				type: "data",
				data: t.data,
				statusCode: (s = t.init) == null ? void 0 : s.status,
				headers:
					(i = t.init) != null && i.headers
						? new Headers(t.init.headers)
						: void 0,
		  }
		: { type: "data", data: t };
}
function u0(e, t, n, r, a) {
	let s = e.headers.get("Location");
	if (
		(se(
			s,
			"Redirects returned/thrown from loaders/actions must have a Location header",
		),
		!Hu.test(s))
	) {
		let i = r.slice(0, r.findIndex((o) => o.route.id === n) + 1);
		(s = So(new URL(t.url), i, a, s)), e.headers.set("Location", s);
	}
	return e;
}
function $d(e, t, n) {
	if (Hu.test(e)) {
		let r = e,
			a = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
			s = Ut(a.pathname, n) != null;
		if (a.origin === t.origin && s) return a.pathname + a.search + a.hash;
	}
	return e;
}
function vr(e, t, n, r) {
	let a = e.createURL(Mp(t)).toString(),
		s = { signal: n };
	if (r && At(r.formMethod)) {
		let { formMethod: i, formEncType: o } = r;
		(s.method = i.toUpperCase()),
			o === "application/json"
				? ((s.headers = new Headers({ "Content-Type": o })),
				  (s.body = JSON.stringify(r.json)))
				: o === "text/plain"
				? (s.body = r.text)
				: o === "application/x-www-form-urlencoded" && r.formData
				? (s.body = Eo(r.formData))
				: (s.body = r.formData);
	}
	return new Request(a, s);
}
function Eo(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries())
		t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function Hd(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function c0(e, t, n, r = !1, a = !1) {
	let s = {},
		i = null,
		o,
		u = !1,
		c = {},
		d = n && gt(n[1]) ? n[1].error : void 0;
	return (
		e.forEach((p) => {
			if (!(p.route.id in t)) return;
			let m = p.route.id,
				y = t[m];
			if (
				(se(!Xn(y), "Cannot handle redirect results in processLoaderData"),
				gt(y))
			) {
				let j = y.error;
				if ((d !== void 0 && ((j = d), (d = void 0)), (i = i || {}), a))
					i[m] = j;
				else {
					let g = Qn(e, m);
					i[g.route.id] == null && (i[g.route.id] = j);
				}
				r || (s[m] = Ap),
					u || ((u = !0), (o = Fl(y.error) ? y.error.status : 500)),
					y.headers && (c[m] = y.headers);
			} else
				(s[m] = y.data),
					y.statusCode && y.statusCode !== 200 && !u && (o = y.statusCode),
					y.headers && (c[m] = y.headers);
		}),
		d !== void 0 && n && ((i = { [n[0]]: d }), (s[n[0]] = void 0)),
		{ loaderData: s, errors: i, statusCode: o || 200, loaderHeaders: c }
	);
}
function Vd(e, t, n, r, a, s) {
	let { loaderData: i, errors: o } = c0(t, n, r);
	return (
		a.forEach((u) => {
			let { key: c, match: d, controller: p } = u,
				m = s[c];
			if (
				(se(m, "Did not find corresponding fetcher result"),
				!(p && p.signal.aborted))
			)
				if (gt(m)) {
					let y = Qn(e.matches, d == null ? void 0 : d.route.id);
					(o && o[y.route.id]) || (o = { ...o, [y.route.id]: m.error }),
						e.fetchers.delete(c);
				} else if (Xn(m)) se(!1, "Unhandled fetcher revalidation redirect");
				else {
					let y = wn(m.data);
					e.fetchers.set(c, y);
				}
		}),
		{ loaderData: i, errors: o }
	);
}
function Wd(e, t, n, r) {
	let a = Object.entries(t)
		.filter(([, s]) => s !== Ap)
		.reduce((s, [i, o]) => ((s[i] = o), s), {});
	for (let s of n) {
		let i = s.route.id;
		if (
			(!t.hasOwnProperty(i) &&
				e.hasOwnProperty(i) &&
				s.route.loader &&
				(a[i] = e[i]),
			r && r.hasOwnProperty(i))
		)
			break;
	}
	return a;
}
function qd(e) {
	return e
		? gt(e[1])
			? { actionData: {} }
			: { actionData: { [e[0]]: e[1].data } }
		: {};
}
function Qn(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function Kd(e) {
	let t =
		e.length === 1
			? e[0]
			: e.find((n) => n.index || !n.path || n.path === "/") || {
					id: "__shim-error-route__",
			  };
	return {
		matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
		route: t,
	};
}
function Ct(
	e,
	{ pathname: t, routeId: n, method: r, type: a, message: s } = {},
) {
	let i = "Unknown Server Error",
		o = "Unknown @remix-run/router error";
	return (
		e === 400
			? ((i = "Bad Request"),
			  r && t && n
					? (o = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`)
					: a === "invalid-body" && (o = "Unable to encode submission body"))
			: e === 403
			? ((i = "Forbidden"), (o = `Route "${n}" does not match URL "${t}"`))
			: e === 404
			? ((i = "Not Found"), (o = `No route matches URL "${t}"`))
			: e === 405 &&
			  ((i = "Method Not Allowed"),
			  r && t && n
					? (o = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`)
					: r && (o = `Invalid request method "${r.toUpperCase()}"`)),
		new ml(e || 500, i, new Error(o), !0)
	);
}
function Cs(e) {
	let t = Object.entries(e);
	for (let n = t.length - 1; n >= 0; n--) {
		let [r, a] = t[n];
		if (Xn(a)) return { key: r, result: a };
	}
}
function Mp(e) {
	let t = typeof e == "string" ? Hn(e) : e;
	return zn({ ...t, hash: "" });
}
function d0(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ""
		? t.hash !== ""
		: e.hash === t.hash
		? !0
		: t.hash !== "";
}
function f0(e) {
	return zp(e.result) && Yy.has(e.result.status);
}
function gt(e) {
	return e.type === "error";
}
function Xn(e) {
	return (e && e.type) === "redirect";
}
function Qd(e) {
	return (
		typeof e == "object" &&
		e != null &&
		"type" in e &&
		"data" in e &&
		"init" in e &&
		e.type === "DataWithResponseInit"
	);
}
function zp(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.headers == "object" &&
		typeof e.body < "u"
	);
}
function h0(e) {
	return Jy.has(e.toUpperCase());
}
function At(e) {
	return Ky.has(e.toUpperCase());
}
function Vu(e) {
	return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function ga(e, t) {
	let n = typeof t == "string" ? Hn(t).search : t.search;
	if (e[e.length - 1].route.index && Vu(n || "")) return e[e.length - 1];
	let r = Op(e);
	return r[r.length - 1];
}
function Jd(e) {
	let {
		formMethod: t,
		formAction: n,
		formEncType: r,
		text: a,
		formData: s,
		json: i,
	} = e;
	if (!(!t || !n || !r)) {
		if (a != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: void 0,
				text: a,
			};
		if (s != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: s,
				json: void 0,
				text: void 0,
			};
		if (i !== void 0)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: i,
				text: void 0,
			};
	}
}
function Ni(e, t) {
	return t
		? {
				state: "loading",
				location: e,
				formMethod: t.formMethod,
				formAction: t.formAction,
				formEncType: t.formEncType,
				formData: t.formData,
				json: t.json,
				text: t.text,
		  }
		: {
				state: "loading",
				location: e,
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
		  };
}
function p0(e, t) {
	return {
		state: "submitting",
		location: e,
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text,
	};
}
function ua(e, t) {
	return e
		? {
				state: "loading",
				formMethod: e.formMethod,
				formAction: e.formAction,
				formEncType: e.formEncType,
				formData: e.formData,
				json: e.json,
				text: e.text,
				data: t,
		  }
		: {
				state: "loading",
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
				data: t,
		  };
}
function m0(e, t) {
	return {
		state: "submitting",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0,
	};
}
function wn(e) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e,
	};
}
function g0(e, t) {
	try {
		let n = e.sessionStorage.getItem(Dp);
		if (n) {
			let r = JSON.parse(n);
			for (let [a, s] of Object.entries(r || {}))
				s && Array.isArray(s) && t.set(a, new Set(s || []));
		}
	} catch {}
}
function v0(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [r, a] of t) n[r] = [...a];
		try {
			e.sessionStorage.setItem(Dp, JSON.stringify(n));
		} catch (r) {
			jt(
				!1,
				`Failed to save applied view transitions in sessionStorage (${r}).`,
			);
		}
	}
}
function y0() {
	let e,
		t,
		n = new Promise((r, a) => {
			(e = async (s) => {
				r(s);
				try {
					await n;
				} catch {}
			}),
				(t = async (s) => {
					a(s);
					try {
						await n;
					} catch {}
				});
		});
	return { promise: n, resolve: e, reject: t };
}
var fr = h.createContext(null);
fr.displayName = "DataRouter";
var Ya = h.createContext(null);
Ya.displayName = "DataRouterState";
var Wu = h.createContext({ isTransitioning: !1 });
Wu.displayName = "ViewTransition";
var Ip = h.createContext(new Map());
Ip.displayName = "Fetchers";
var x0 = h.createContext(null);
x0.displayName = "Await";
var Zt = h.createContext(null);
Zt.displayName = "Navigation";
var Ml = h.createContext(null);
Ml.displayName = "Location";
var Bt = h.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Bt.displayName = "Route";
var qu = h.createContext(null);
qu.displayName = "RouteError";
function w0(e, { relative: t } = {}) {
	se(
		Ga(),
		"useHref() may be used only in the context of a <Router> component.",
	);
	let { basename: n, navigator: r } = h.useContext(Zt),
		{ hash: a, pathname: s, search: i } = Xa(e, { relative: t }),
		o = s;
	return (
		n !== "/" && (o = s === "/" ? n : Xt([n, s])),
		r.createHref({ pathname: o, search: i, hash: a })
	);
}
function Ga() {
	return h.useContext(Ml) != null;
}
function pn() {
	return (
		se(
			Ga(),
			"useLocation() may be used only in the context of a <Router> component.",
		),
		h.useContext(Ml).location
	);
}
var Up =
	"You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Bp(e) {
	h.useContext(Zt).static || h.useLayoutEffect(e);
}
function qr() {
	let { isDataRoute: e } = h.useContext(Bt);
	return e ? F0() : j0();
}
function j0() {
	se(
		Ga(),
		"useNavigate() may be used only in the context of a <Router> component.",
	);
	let e = h.useContext(fr),
		{ basename: t, navigator: n } = h.useContext(Zt),
		{ matches: r } = h.useContext(Bt),
		{ pathname: a } = pn(),
		s = JSON.stringify(Bu(r)),
		i = h.useRef(!1);
	return (
		Bp(() => {
			i.current = !0;
		}),
		h.useCallback(
			(u, c = {}) => {
				if ((jt(i.current, Up), !i.current)) return;
				if (typeof u == "number") {
					n.go(u);
					return;
				}
				let d = $u(u, JSON.parse(s), a, c.relative === "path");
				e == null &&
					t !== "/" &&
					(d.pathname = d.pathname === "/" ? t : Xt([t, d.pathname])),
					(c.replace ? n.replace : n.push)(d, c.state, c);
			},
			[t, n, s, a, e],
		)
	);
}
var N0 = h.createContext(null);
function S0(e) {
	let t = h.useContext(Bt).outlet;
	return t && h.createElement(N0.Provider, { value: e }, t);
}
function C0() {
	let { matches: e } = h.useContext(Bt),
		t = e[e.length - 1];
	return t ? t.params : {};
}
function Xa(e, { relative: t } = {}) {
	let { matches: n } = h.useContext(Bt),
		{ pathname: r } = pn(),
		a = JSON.stringify(Bu(n));
	return h.useMemo(() => $u(e, JSON.parse(a), r, t === "path"), [e, a, r, t]);
}
function E0(e, t, n, r) {
	se(
		Ga(),
		"useRoutes() may be used only in the context of a <Router> component.",
	);
	let { navigator: a } = h.useContext(Zt),
		{ matches: s } = h.useContext(Bt),
		i = s[s.length - 1],
		o = i ? i.params : {};
	i && i.pathname;
	let u = i ? i.pathnameBase : "/";
	i && i.route;
	let c = pn(),
		d;
	d = c;
	let p = d.pathname || "/",
		m = p;
	if (u !== "/") {
		let g = u.replace(/^\//, "").split("/");
		m = "/" + p.replace(/^\//, "").split("/").slice(g.length).join("/");
	}
	let y = En(e, { pathname: m });
	return _0(
		y &&
			y.map((g) =>
				Object.assign({}, g, {
					params: Object.assign({}, o, g.params),
					pathname: Xt([
						u,
						a.encodeLocation
							? a.encodeLocation(g.pathname).pathname
							: g.pathname,
					]),
					pathnameBase:
						g.pathnameBase === "/"
							? u
							: Xt([
									u,
									a.encodeLocation
										? a.encodeLocation(g.pathnameBase).pathname
										: g.pathnameBase,
							  ]),
				}),
			),
		s,
		n,
		r,
	);
}
function k0() {
	let e = A0(),
		t = Fl(e)
			? `${e.status} ${e.statusText}`
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
	return h.createElement(
		h.Fragment,
		null,
		h.createElement("h2", null, "Unexpected Application Error!"),
		h.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? h.createElement("pre", { style: a }, n) : null,
		null,
	);
}
var b0 = h.createElement(k0, null),
	P0 = class extends h.Component {
		constructor(e) {
			super(e),
				(this.state = {
					location: e.location,
					revalidation: e.revalidation,
					error: e.error,
				});
		}
		static getDerivedStateFromError(e) {
			return { error: e };
		}
		static getDerivedStateFromProps(e, t) {
			return t.location !== e.location ||
				(t.revalidation !== "idle" && e.revalidation === "idle")
				? { error: e.error, location: e.location, revalidation: e.revalidation }
				: {
						error: e.error !== void 0 ? e.error : t.error,
						location: t.location,
						revalidation: e.revalidation || t.revalidation,
				  };
		}
		componentDidCatch(e, t) {
			console.error(
				"React Router caught the following error during render",
				e,
				t,
			);
		}
		render() {
			return this.state.error !== void 0
				? h.createElement(
						Bt.Provider,
						{ value: this.props.routeContext },
						h.createElement(qu.Provider, {
							value: this.state.error,
							children: this.props.component,
						}),
				  )
				: this.props.children;
		}
	};
function R0({ routeContext: e, match: t, children: n }) {
	let r = h.useContext(fr);
	return (
		r &&
			r.static &&
			r.staticContext &&
			(t.route.errorElement || t.route.ErrorBoundary) &&
			(r.staticContext._deepestRenderedBoundaryId = t.route.id),
		h.createElement(Bt.Provider, { value: e }, n)
	);
}
function _0(e, t = [], n = null, r = null) {
	if (e == null) {
		if (!n) return null;
		if (n.errors) e = n.matches;
		else if (t.length === 0 && !n.initialized && n.matches.length > 0)
			e = n.matches;
		else return null;
	}
	let a = e,
		s = n == null ? void 0 : n.errors;
	if (s != null) {
		let u = a.findIndex(
			(c) => c.route.id && (s == null ? void 0 : s[c.route.id]) !== void 0,
		);
		se(
			u >= 0,
			`Could not find a matching route for errors on route IDs: ${Object.keys(
				s,
			).join(",")}`,
		),
			(a = a.slice(0, Math.min(a.length, u + 1)));
	}
	let i = !1,
		o = -1;
	if (n)
		for (let u = 0; u < a.length; u++) {
			let c = a[u];
			if (
				((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (o = u),
				c.route.id)
			) {
				let { loaderData: d, errors: p } = n,
					m =
						c.route.loader &&
						!d.hasOwnProperty(c.route.id) &&
						(!p || p[c.route.id] === void 0);
				if (c.route.lazy || m) {
					(i = !0), o >= 0 ? (a = a.slice(0, o + 1)) : (a = [a[0]]);
					break;
				}
			}
		}
	return a.reduceRight((u, c, d) => {
		let p,
			m = !1,
			y = null,
			j = null;
		n &&
			((p = s && c.route.id ? s[c.route.id] : void 0),
			(y = c.route.errorElement || b0),
			i &&
				(o < 0 && d === 0
					? (M0(
							"route-fallback",
							!1,
							"No `HydrateFallback` element provided to render during initial hydration",
					  ),
					  (m = !0),
					  (j = null))
					: o === d &&
					  ((m = !0), (j = c.route.hydrateFallbackElement || null))));
		let g = t.concat(a.slice(0, d + 1)),
			S = () => {
				let v;
				return (
					p
						? (v = y)
						: m
						? (v = j)
						: c.route.Component
						? (v = h.createElement(c.route.Component, null))
						: c.route.element
						? (v = c.route.element)
						: (v = u),
					h.createElement(R0, {
						match: c,
						routeContext: { outlet: u, matches: g, isDataRoute: n != null },
						children: v,
					})
				);
			};
		return n && (c.route.ErrorBoundary || c.route.errorElement || d === 0)
			? h.createElement(P0, {
					location: n.location,
					revalidation: n.revalidation,
					component: y,
					error: p,
					children: S(),
					routeContext: { outlet: null, matches: g, isDataRoute: !0 },
			  })
			: S();
	}, null);
}
function Ku(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function L0(e) {
	let t = h.useContext(fr);
	return se(t, Ku(e)), t;
}
function O0(e) {
	let t = h.useContext(Ya);
	return se(t, Ku(e)), t;
}
function T0(e) {
	let t = h.useContext(Bt);
	return se(t, Ku(e)), t;
}
function Qu(e) {
	let t = T0(e),
		n = t.matches[t.matches.length - 1];
	return (
		se(
			n.route.id,
			`${e} can only be used on routes that contain a unique "id"`,
		),
		n.route.id
	);
}
function D0() {
	return Qu("useRouteId");
}
function A0() {
	var r;
	let e = h.useContext(qu),
		t = O0("useRouteError"),
		n = Qu("useRouteError");
	return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function F0() {
	let { router: e } = L0("useNavigate"),
		t = Qu("useNavigate"),
		n = h.useRef(!1);
	return (
		Bp(() => {
			n.current = !0;
		}),
		h.useCallback(
			async (a, s = {}) => {
				jt(n.current, Up),
					n.current &&
						(typeof a == "number"
							? e.navigate(a)
							: await e.navigate(a, { fromRouteId: t, ...s }));
			},
			[e, t],
		)
	);
}
var Yd = {};
function M0(e, t, n) {
	Yd[e] || ((Yd[e] = !0), jt(!1, n));
}
var Gd = {};
function Xd(e, t) {
	!e && !Gd[t] && ((Gd[t] = !0), console.warn(t));
}
function z0(e) {
	let t = {
		hasErrorBoundary:
			e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
	};
	return (
		e.Component &&
			Object.assign(t, {
				element: h.createElement(e.Component),
				Component: void 0,
			}),
		e.HydrateFallback &&
			Object.assign(t, {
				hydrateFallbackElement: h.createElement(e.HydrateFallback),
				HydrateFallback: void 0,
			}),
		e.ErrorBoundary &&
			Object.assign(t, {
				errorElement: h.createElement(e.ErrorBoundary),
				ErrorBoundary: void 0,
			}),
		t
	);
}
var I0 = class {
	constructor() {
		(this.status = "pending"),
			(this.promise = new Promise((e, t) => {
				(this.resolve = (n) => {
					this.status === "pending" && ((this.status = "resolved"), e(n));
				}),
					(this.reject = (n) => {
						this.status === "pending" && ((this.status = "rejected"), t(n));
					});
			}));
	}
};
function U0({ router: e, flushSync: t }) {
	let [n, r] = h.useState(e.state),
		[a, s] = h.useState(),
		[i, o] = h.useState({ isTransitioning: !1 }),
		[u, c] = h.useState(),
		[d, p] = h.useState(),
		[m, y] = h.useState(),
		j = h.useRef(new Map()),
		g = h.useCallback(
			(x, { deletedFetchers: E, flushSync: w, viewTransitionOpts: P }) => {
				E.forEach((k) => j.current.delete(k)),
					x.fetchers.forEach((k, M) => {
						k.data !== void 0 && j.current.set(M, k.data);
					}),
					Xd(
						w === !1 || t != null,
						'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
					);
				let L =
					e.window != null &&
					e.window.document != null &&
					typeof e.window.document.startViewTransition == "function";
				if (
					(Xd(
						P == null || L,
						"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.",
					),
					!P || !L)
				) {
					t && w ? t(() => r(x)) : h.startTransition(() => r(x));
					return;
				}
				if (t && w) {
					t(() => {
						d && (u && u.resolve(), d.skipTransition()),
							o({
								isTransitioning: !0,
								flushSync: !0,
								currentLocation: P.currentLocation,
								nextLocation: P.nextLocation,
							});
					});
					let k = e.window.document.startViewTransition(() => {
						t(() => r(x));
					});
					k.finished.finally(() => {
						t(() => {
							c(void 0), p(void 0), s(void 0), o({ isTransitioning: !1 });
						});
					}),
						t(() => p(k));
					return;
				}
				d
					? (u && u.resolve(),
					  d.skipTransition(),
					  y({
							state: x,
							currentLocation: P.currentLocation,
							nextLocation: P.nextLocation,
					  }))
					: (s(x),
					  o({
							isTransitioning: !0,
							flushSync: !1,
							currentLocation: P.currentLocation,
							nextLocation: P.nextLocation,
					  }));
			},
			[e.window, t, d, u],
		);
	h.useLayoutEffect(() => e.subscribe(g), [e, g]),
		h.useEffect(() => {
			i.isTransitioning && !i.flushSync && c(new I0());
		}, [i]),
		h.useEffect(() => {
			if (u && a && e.window) {
				let x = a,
					E = u.promise,
					w = e.window.document.startViewTransition(async () => {
						h.startTransition(() => r(x)), await E;
					});
				w.finished.finally(() => {
					c(void 0), p(void 0), s(void 0), o({ isTransitioning: !1 });
				}),
					p(w);
			}
		}, [a, u, e.window]),
		h.useEffect(() => {
			u && a && n.location.key === a.location.key && u.resolve();
		}, [u, d, n.location, a]),
		h.useEffect(() => {
			!i.isTransitioning &&
				m &&
				(s(m.state),
				o({
					isTransitioning: !0,
					flushSync: !1,
					currentLocation: m.currentLocation,
					nextLocation: m.nextLocation,
				}),
				y(void 0));
		}, [i.isTransitioning, m]);
	let S = h.useMemo(
			() => ({
				createHref: e.createHref,
				encodeLocation: e.encodeLocation,
				go: (x) => e.navigate(x),
				push: (x, E, w) =>
					e.navigate(x, {
						state: E,
						preventScrollReset: w == null ? void 0 : w.preventScrollReset,
					}),
				replace: (x, E, w) =>
					e.navigate(x, {
						replace: !0,
						state: E,
						preventScrollReset: w == null ? void 0 : w.preventScrollReset,
					}),
			}),
			[e],
		),
		v = e.basename || "/",
		f = h.useMemo(
			() => ({ router: e, navigator: S, static: !1, basename: v }),
			[e, S, v],
		);
	return h.createElement(
		h.Fragment,
		null,
		h.createElement(
			fr.Provider,
			{ value: f },
			h.createElement(
				Ya.Provider,
				{ value: n },
				h.createElement(
					Ip.Provider,
					{ value: j.current },
					h.createElement(
						Wu.Provider,
						{ value: i },
						h.createElement(
							V0,
							{
								basename: v,
								location: n.location,
								navigationType: n.historyAction,
								navigator: S,
							},
							h.createElement(B0, {
								routes: e.routes,
								future: e.future,
								state: n,
							}),
						),
					),
				),
			),
		),
		null,
	);
}
var B0 = h.memo($0);
function $0({ routes: e, future: t, state: n }) {
	return E0(e, void 0, n, t);
}
function H0(e) {
	return S0(e.context);
}
function V0({
	basename: e = "/",
	children: t = null,
	location: n,
	navigationType: r = "POP",
	navigator: a,
	static: s = !1,
}) {
	se(
		!Ga(),
		"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
	);
	let i = e.replace(/^\/*/, "/"),
		o = h.useMemo(
			() => ({ basename: i, navigator: a, static: s, future: {} }),
			[i, a, s],
		);
	typeof n == "string" && (n = Hn(n));
	let {
			pathname: u = "/",
			search: c = "",
			hash: d = "",
			state: p = null,
			key: m = "default",
		} = n,
		y = h.useMemo(() => {
			let j = Ut(u, i);
			return j == null
				? null
				: {
						location: { pathname: j, search: c, hash: d, state: p, key: m },
						navigationType: r,
				  };
		}, [i, u, c, d, p, m, r]);
	return (
		jt(
			y != null,
			`<Router basename="${i}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
		),
		y == null
			? null
			: h.createElement(
					Zt.Provider,
					{ value: o },
					h.createElement(Ml.Provider, { children: t, value: y }),
			  )
	);
}
var Is = "get",
	Us = "application/x-www-form-urlencoded";
function zl(e) {
	return e != null && typeof e.tagName == "string";
}
function W0(e) {
	return zl(e) && e.tagName.toLowerCase() === "button";
}
function q0(e) {
	return zl(e) && e.tagName.toLowerCase() === "form";
}
function K0(e) {
	return zl(e) && e.tagName.toLowerCase() === "input";
}
function Q0(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function J0(e, t) {
	return e.button === 0 && (!t || t === "_self") && !Q0(e);
}
function ko(e = "") {
	return new URLSearchParams(
		typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
			? e
			: Object.keys(e).reduce((t, n) => {
					let r = e[n];
					return t.concat(Array.isArray(r) ? r.map((a) => [n, a]) : [[n, r]]);
			  }, []),
	);
}
function Y0(e, t) {
	let n = ko(e);
	return (
		t &&
			t.forEach((r, a) => {
				n.has(a) ||
					t.getAll(a).forEach((s) => {
						n.append(a, s);
					});
			}),
		n
	);
}
var Es = null;
function G0() {
	if (Es === null)
		try {
			new FormData(document.createElement("form"), 0), (Es = !1);
		} catch {
			Es = !0;
		}
	return Es;
}
var X0 = new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain",
]);
function Si(e) {
	return e != null && !X0.has(e)
		? (jt(
				!1,
				`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Us}"`,
		  ),
		  null)
		: e;
}
function Z0(e, t) {
	let n, r, a, s, i;
	if (q0(e)) {
		let o = e.getAttribute("action");
		(r = o ? Ut(o, t) : null),
			(n = e.getAttribute("method") || Is),
			(a = Si(e.getAttribute("enctype")) || Us),
			(s = new FormData(e));
	} else if (W0(e) || (K0(e) && (e.type === "submit" || e.type === "image"))) {
		let o = e.form;
		if (o == null)
			throw new Error(
				'Cannot submit a <button> or <input type="submit"> without a <form>',
			);
		let u = e.getAttribute("formaction") || o.getAttribute("action");
		if (
			((r = u ? Ut(u, t) : null),
			(n = e.getAttribute("formmethod") || o.getAttribute("method") || Is),
			(a =
				Si(e.getAttribute("formenctype")) ||
				Si(o.getAttribute("enctype")) ||
				Us),
			(s = new FormData(o, e)),
			!G0())
		) {
			let { name: c, type: d, value: p } = e;
			if (d === "image") {
				let m = c ? `${c}.` : "";
				s.append(`${m}x`, "0"), s.append(`${m}y`, "0");
			} else c && s.append(c, p);
		}
	} else {
		if (zl(e))
			throw new Error(
				'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
			);
		(n = Is), (r = null), (a = Us), (i = e);
	}
	return (
		s && a === "text/plain" && ((i = s), (s = void 0)),
		{ action: r, method: n.toLowerCase(), encType: a, formData: s, body: i }
	);
}
function Ju(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function ex(e, t) {
	if (e.id in t) return t[e.id];
	try {
		let n = await import(e.module);
		return (t[e.id] = n), n;
	} catch (n) {
		return (
			console.error(
				`Error loading route module \`${e.module}\`, reloading page...`,
			),
			console.error(n),
			window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
			window.location.reload(),
			new Promise(() => {})
		);
	}
}
function tx(e) {
	return e == null
		? !1
		: e.href == null
		? e.rel === "preload" &&
		  typeof e.imageSrcSet == "string" &&
		  typeof e.imageSizes == "string"
		: typeof e.rel == "string" && typeof e.href == "string";
}
async function nx(e, t, n) {
	let r = await Promise.all(
		e.map(async (a) => {
			let s = t.routes[a.route.id];
			if (s) {
				let i = await ex(s, n);
				return i.links ? i.links() : [];
			}
			return [];
		}),
	);
	return lx(
		r
			.flat(1)
			.filter(tx)
			.filter((a) => a.rel === "stylesheet" || a.rel === "preload")
			.map((a) =>
				a.rel === "stylesheet"
					? { ...a, rel: "prefetch", as: "style" }
					: { ...a, rel: "prefetch" },
			),
	);
}
function Zd(e, t, n, r, a, s) {
	let i = (u, c) => (n[c] ? u.route.id !== n[c].route.id : !0),
		o = (u, c) => {
			var d;
			return (
				n[c].pathname !== u.pathname ||
				(((d = n[c].route.path) == null ? void 0 : d.endsWith("*")) &&
					n[c].params["*"] !== u.params["*"])
			);
		};
	return s === "assets"
		? t.filter((u, c) => i(u, c) || o(u, c))
		: s === "data"
		? t.filter((u, c) => {
				var p;
				let d = r.routes[u.route.id];
				if (!d || !d.hasLoader) return !1;
				if (i(u, c) || o(u, c)) return !0;
				if (u.route.shouldRevalidate) {
					let m = u.route.shouldRevalidate({
						currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
						currentParams: ((p = n[0]) == null ? void 0 : p.params) || {},
						nextUrl: new URL(e, window.origin),
						nextParams: u.params,
						defaultShouldRevalidate: !0,
					});
					if (typeof m == "boolean") return m;
				}
				return !0;
		  })
		: [];
}
function rx(e, t) {
	return ax(
		e
			.map((n) => {
				let r = t.routes[n.route.id];
				if (!r) return [];
				let a = [r.module];
				return r.imports && (a = a.concat(r.imports)), a;
			})
			.flat(1),
	);
}
function ax(e) {
	return [...new Set(e)];
}
function sx(e) {
	let t = {},
		n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function lx(e, t) {
	let n = new Set();
	return (
		new Set(t),
		e.reduce((r, a) => {
			let s = JSON.stringify(sx(a));
			return n.has(s) || (n.add(s), r.push({ key: s, link: a })), r;
		}, [])
	);
}
function ix(e) {
	let t =
		typeof e == "string"
			? new URL(
					e,
					typeof window > "u"
						? "server://singlefetch/"
						: window.location.origin,
			  )
			: e;
	return (
		t.pathname === "/"
			? (t.pathname = "_root.data")
			: (t.pathname = `${t.pathname.replace(/\/$/, "")}.data`),
		t
	);
}
function ox() {
	let e = h.useContext(fr);
	return (
		Ju(
			e,
			"You must render this element inside a <DataRouterContext.Provider> element",
		),
		e
	);
}
function ux() {
	let e = h.useContext(Ya);
	return (
		Ju(
			e,
			"You must render this element inside a <DataRouterStateContext.Provider> element",
		),
		e
	);
}
var Yu = h.createContext(void 0);
Yu.displayName = "FrameworkContext";
function $p() {
	let e = h.useContext(Yu);
	return (
		Ju(e, "You must render this element inside a <HydratedRouter> element"), e
	);
}
function cx(e, t) {
	let n = h.useContext(Yu),
		[r, a] = h.useState(!1),
		[s, i] = h.useState(!1),
		{
			onFocus: o,
			onBlur: u,
			onMouseEnter: c,
			onMouseLeave: d,
			onTouchStart: p,
		} = t,
		m = h.useRef(null);
	h.useEffect(() => {
		if ((e === "render" && i(!0), e === "viewport")) {
			let g = (v) => {
					v.forEach((f) => {
						i(f.isIntersecting);
					});
				},
				S = new IntersectionObserver(g, { threshold: 0.5 });
			return (
				m.current && S.observe(m.current),
				() => {
					S.disconnect();
				}
			);
		}
	}, [e]),
		h.useEffect(() => {
			if (r) {
				let g = setTimeout(() => {
					i(!0);
				}, 100);
				return () => {
					clearTimeout(g);
				};
			}
		}, [r]);
	let y = () => {
			a(!0);
		},
		j = () => {
			a(!1), i(!1);
		};
	return n
		? e !== "intent"
			? [s, m, {}]
			: [
					s,
					m,
					{
						onFocus: ca(o, y),
						onBlur: ca(u, j),
						onMouseEnter: ca(c, y),
						onMouseLeave: ca(d, j),
						onTouchStart: ca(p, y),
					},
			  ]
		: [!1, m, {}];
}
function ca(e, t) {
	return (n) => {
		e && e(n), n.defaultPrevented || t(n);
	};
}
function dx({ page: e, ...t }) {
	let { router: n } = ox(),
		r = h.useMemo(() => En(n.routes, e, n.basename), [n.routes, e, n.basename]);
	return r
		? h.createElement(hx, { page: e, matches: r, ...t })
		: (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function fx(e) {
	let { manifest: t, routeModules: n } = $p(),
		[r, a] = h.useState([]);
	return (
		h.useEffect(() => {
			let s = !1;
			return (
				nx(e, t, n).then((i) => {
					s || a(i);
				}),
				() => {
					s = !0;
				}
			);
		}, [e, t, n]),
		r
	);
}
function hx({ page: e, matches: t, ...n }) {
	let r = pn(),
		{ manifest: a, routeModules: s } = $p(),
		{ loaderData: i, matches: o } = ux(),
		u = h.useMemo(() => Zd(e, t, o, a, r, "data"), [e, t, o, a, r]),
		c = h.useMemo(() => Zd(e, t, o, a, r, "assets"), [e, t, o, a, r]),
		d = h.useMemo(() => {
			if (e === r.pathname + r.search + r.hash) return [];
			let y = new Set(),
				j = !1;
			if (
				(t.forEach((S) => {
					var f;
					let v = a.routes[S.route.id];
					!v ||
						!v.hasLoader ||
						((!u.some((x) => x.route.id === S.route.id) &&
							S.route.id in i &&
							(f = s[S.route.id]) != null &&
							f.shouldRevalidate) ||
						v.hasClientLoader
							? (j = !0)
							: y.add(S.route.id));
				}),
				y.size === 0)
			)
				return [];
			let g = ix(e);
			return (
				j &&
					y.size > 0 &&
					g.searchParams.set(
						"_routes",
						t
							.filter((S) => y.has(S.route.id))
							.map((S) => S.route.id)
							.join(","),
					),
				[g.pathname + g.search]
			);
		}, [i, r, a, u, t, e, s]),
		p = h.useMemo(() => rx(c, a), [c, a]),
		m = fx(c);
	return h.createElement(
		h.Fragment,
		null,
		d.map((y) =>
			h.createElement("link", {
				key: y,
				rel: "prefetch",
				as: "fetch",
				href: y,
				...n,
			}),
		),
		p.map((y) =>
			h.createElement("link", { key: y, rel: "modulepreload", href: y, ...n }),
		),
		m.map(({ key: y, link: j }) => h.createElement("link", { key: y, ...j })),
	);
}
function px(...e) {
	return (t) => {
		e.forEach((n) => {
			typeof n == "function" ? n(t) : n != null && (n.current = t);
		});
	};
}
var Hp =
	typeof window < "u" &&
	typeof window.document < "u" &&
	typeof window.document.createElement < "u";
try {
	Hp && (window.__reactRouterVersion = "7.0.1");
} catch {}
function mx(e, t) {
	return e0({
		basename: t == null ? void 0 : t.basename,
		future: t == null ? void 0 : t.future,
		history: Cy({ window: t == null ? void 0 : t.window }),
		hydrationData: gx(),
		routes: e,
		mapRouteProperties: z0,
		dataStrategy: t == null ? void 0 : t.dataStrategy,
		patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation,
		window: t == null ? void 0 : t.window,
	}).initialize();
}
function gx() {
	let e = window == null ? void 0 : window.__staticRouterHydrationData;
	return e && e.errors && (e = { ...e, errors: vx(e.errors) }), e;
}
function vx(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, a] of t)
		if (a && a.__type === "RouteErrorResponse")
			n[r] = new ml(a.status, a.statusText, a.data, a.internal === !0);
		else if (a && a.__type === "Error") {
			if (a.__subType) {
				let s = window[a.__subType];
				if (typeof s == "function")
					try {
						let i = new s(a.message);
						(i.stack = ""), (n[r] = i);
					} catch {}
			}
			if (n[r] == null) {
				let s = new Error(a.message);
				(s.stack = ""), (n[r] = s);
			}
		} else n[r] = a;
	return n;
}
var Vp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	_e = h.forwardRef(function (
		{
			onClick: t,
			discover: n = "render",
			prefetch: r = "none",
			relative: a,
			reloadDocument: s,
			replace: i,
			state: o,
			target: u,
			to: c,
			preventScrollReset: d,
			viewTransition: p,
			...m
		},
		y,
	) {
		let { basename: j } = h.useContext(Zt),
			g = typeof c == "string" && Vp.test(c),
			S,
			v = !1;
		if (typeof c == "string" && g && ((S = c), Hp))
			try {
				let M = new URL(window.location.href),
					$ = c.startsWith("//") ? new URL(M.protocol + c) : new URL(c),
					de = Ut($.pathname, j);
				$.origin === M.origin && de != null
					? (c = de + $.search + $.hash)
					: (v = !0);
			} catch {
				jt(
					!1,
					`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
				);
			}
		let f = w0(c, { relative: a }),
			[x, E, w] = cx(r, m),
			P = jx(c, {
				replace: i,
				state: o,
				target: u,
				preventScrollReset: d,
				relative: a,
				viewTransition: p,
			});
		function L(M) {
			t && t(M), M.defaultPrevented || P(M);
		}
		let k = h.createElement("a", {
			...m,
			...w,
			href: S || f,
			onClick: v || s ? t : L,
			ref: px(y, E),
			target: u,
			"data-discover": !g && n === "render" ? "true" : void 0,
		});
		return x && !g
			? h.createElement(h.Fragment, null, k, h.createElement(dx, { page: f }))
			: k;
	});
_e.displayName = "Link";
var yx = h.forwardRef(function (
	{
		"aria-current": t = "page",
		caseSensitive: n = !1,
		className: r = "",
		end: a = !1,
		style: s,
		to: i,
		viewTransition: o,
		children: u,
		...c
	},
	d,
) {
	let p = Xa(i, { relative: c.relative }),
		m = pn(),
		y = h.useContext(Ya),
		{ navigator: j, basename: g } = h.useContext(Zt),
		S = y != null && kx(p) && o === !0,
		v = j.encodeLocation ? j.encodeLocation(p).pathname : p.pathname,
		f = m.pathname,
		x =
			y && y.navigation && y.navigation.location
				? y.navigation.location.pathname
				: null;
	n ||
		((f = f.toLowerCase()),
		(x = x ? x.toLowerCase() : null),
		(v = v.toLowerCase())),
		x && g && (x = Ut(x, g) || x);
	const E = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
	let w = f === v || (!a && f.startsWith(v) && f.charAt(E) === "/"),
		P =
			x != null &&
			(x === v || (!a && x.startsWith(v) && x.charAt(v.length) === "/")),
		L = { isActive: w, isPending: P, isTransitioning: S },
		k = w ? t : void 0,
		M;
	typeof r == "function"
		? (M = r(L))
		: (M = [
				r,
				w ? "active" : null,
				P ? "pending" : null,
				S ? "transitioning" : null,
		  ]
				.filter(Boolean)
				.join(" "));
	let $ = typeof s == "function" ? s(L) : s;
	return h.createElement(
		_e,
		{
			...c,
			"aria-current": k,
			className: M,
			ref: d,
			style: $,
			to: i,
			viewTransition: o,
		},
		typeof u == "function" ? u(L) : u,
	);
});
yx.displayName = "NavLink";
var xx = h.forwardRef(
	(
		{
			discover: e = "render",
			fetcherKey: t,
			navigate: n,
			reloadDocument: r,
			replace: a,
			state: s,
			method: i = Is,
			action: o,
			onSubmit: u,
			relative: c,
			preventScrollReset: d,
			viewTransition: p,
			...m
		},
		y,
	) => {
		let j = Cx(),
			g = Ex(o, { relative: c }),
			S = i.toLowerCase() === "get" ? "get" : "post",
			v = typeof o == "string" && Vp.test(o),
			f = (x) => {
				if ((u && u(x), x.defaultPrevented)) return;
				x.preventDefault();
				let E = x.nativeEvent.submitter,
					w = (E == null ? void 0 : E.getAttribute("formmethod")) || i;
				j(E || x.currentTarget, {
					fetcherKey: t,
					method: w,
					navigate: n,
					replace: a,
					state: s,
					relative: c,
					preventScrollReset: d,
					viewTransition: p,
				});
			};
		return h.createElement("form", {
			ref: y,
			method: S,
			action: g,
			onSubmit: r ? u : f,
			...m,
			"data-discover": !v && e === "render" ? "true" : void 0,
		});
	},
);
xx.displayName = "Form";
function wx(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Wp(e) {
	let t = h.useContext(fr);
	return se(t, wx(e)), t;
}
function jx(
	e,
	{
		target: t,
		replace: n,
		state: r,
		preventScrollReset: a,
		relative: s,
		viewTransition: i,
	} = {},
) {
	let o = qr(),
		u = pn(),
		c = Xa(e, { relative: s });
	return h.useCallback(
		(d) => {
			if (J0(d, t)) {
				d.preventDefault();
				let p = n !== void 0 ? n : zn(u) === zn(c);
				o(e, {
					replace: p,
					state: r,
					preventScrollReset: a,
					relative: s,
					viewTransition: i,
				});
			}
		},
		[u, o, c, n, r, t, e, a, s, i],
	);
}
function Gu(e) {
	jt(
		typeof URLSearchParams < "u",
		"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
	);
	let t = h.useRef(ko(e)),
		n = h.useRef(!1),
		r = pn(),
		a = h.useMemo(() => Y0(r.search, n.current ? null : t.current), [r.search]),
		s = qr(),
		i = h.useCallback(
			(o, u) => {
				const c = ko(typeof o == "function" ? o(a) : o);
				(n.current = !0), s("?" + c, u);
			},
			[s, a],
		);
	return [a, i];
}
var Nx = 0,
	Sx = () => `__${String(++Nx)}__`;
function Cx() {
	let { router: e } = Wp("useSubmit"),
		{ basename: t } = h.useContext(Zt),
		n = D0();
	return h.useCallback(
		async (r, a = {}) => {
			let { action: s, method: i, encType: o, formData: u, body: c } = Z0(r, t);
			if (a.navigate === !1) {
				let d = a.fetcherKey || Sx();
				await e.fetch(d, n, a.action || s, {
					preventScrollReset: a.preventScrollReset,
					formData: u,
					body: c,
					formMethod: a.method || i,
					formEncType: a.encType || o,
					flushSync: a.flushSync,
				});
			} else
				await e.navigate(a.action || s, {
					preventScrollReset: a.preventScrollReset,
					formData: u,
					body: c,
					formMethod: a.method || i,
					formEncType: a.encType || o,
					replace: a.replace,
					state: a.state,
					fromRouteId: n,
					flushSync: a.flushSync,
					viewTransition: a.viewTransition,
				});
		},
		[e, t, n],
	);
}
function Ex(e, { relative: t } = {}) {
	let { basename: n } = h.useContext(Zt),
		r = h.useContext(Bt);
	se(r, "useFormAction must be used inside a RouteContext");
	let [a] = r.matches.slice(-1),
		s = { ...Xa(e || ".", { relative: t }) },
		i = pn();
	if (e == null) {
		s.search = i.search;
		let o = new URLSearchParams(s.search),
			u = o.getAll("index");
		if (u.some((d) => d === "")) {
			o.delete("index"),
				u.filter((p) => p).forEach((p) => o.append("index", p));
			let d = o.toString();
			s.search = d ? `?${d}` : "";
		}
	}
	return (
		(!e || e === ".") &&
			a.route.index &&
			(s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
		n !== "/" && (s.pathname = s.pathname === "/" ? n : Xt([n, s.pathname])),
		zn(s)
	);
}
function kx(e, t = {}) {
	let n = h.useContext(Wu);
	se(
		n != null,
		"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
	);
	let { basename: r } = Wp("useViewTransitionState"),
		a = Xa(e, { relative: t.relative });
	if (!n.isTransitioning) return !1;
	let s = Ut(n.currentLocation.pathname, r) || n.currentLocation.pathname,
		i = Ut(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return pl(a.pathname, i) != null || pl(a.pathname, s) != null;
}
new TextEncoder();
/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bx(e) {
	return h.createElement(U0, { flushSync: Rp.flushSync, ...e });
}
var qp = { exports: {} },
	Px = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
	Rx = Px,
	_x = Rx;
function Kp() {}
function Qp() {}
Qp.resetWarningCache = Kp;
var Lx = function () {
	function e(r, a, s, i, o, u) {
		if (u !== _x) {
			var c = new Error(
				"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
			);
			throw ((c.name = "Invariant Violation"), c);
		}
	}
	e.isRequired = e;
	function t() {
		return e;
	}
	var n = {
		array: e,
		bigint: e,
		bool: e,
		func: e,
		number: e,
		object: e,
		string: e,
		symbol: e,
		any: e,
		arrayOf: t,
		element: e,
		elementType: e,
		instanceOf: t,
		node: e,
		objectOf: t,
		oneOf: t,
		oneOfType: t,
		shape: t,
		exact: t,
		checkPropTypes: Qp,
		resetWarningCache: Kp,
	};
	return (n.PropTypes = n), n;
};
qp.exports = Lx();
var Ox = qp.exports;
const U = xl(Ox);
var Tx = ["color", "size", "title", "className"];
function bo() {
	return (
		(bo =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}),
		bo.apply(this, arguments)
	);
}
function Dx(e, t) {
	if (e == null) return {};
	var n = Ax(e, t),
		r,
		a;
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (a = 0; a < s.length; a++)
			(r = s[a]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function Ax(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		a,
		s;
	for (s = 0; s < r.length; s++)
		(a = r[s]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
	return n;
}
var Xu = h.forwardRef(function (e, t) {
	var n = e.color,
		r = e.size,
		a = e.title,
		s = e.className,
		i = Dx(e, Tx);
	return ae.createElement(
		"svg",
		bo(
			{
				ref: t,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				width: r,
				height: r,
				fill: n,
				className: ["bi", "bi-cart3", s].filter(Boolean).join(" "),
			},
			i,
		),
		a ? ae.createElement("title", null, a) : null,
		ae.createElement("path", {
			d: "M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
		}),
	);
});
Xu.propTypes = {
	color: U.string,
	size: U.oneOfType([U.string, U.number]),
	title: U.string,
	className: U.string,
};
Xu.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: "",
};
var Fx = ["color", "size", "title", "className"];
function Po() {
	return (
		(Po =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}),
		Po.apply(this, arguments)
	);
}
function Mx(e, t) {
	if (e == null) return {};
	var n = zx(e, t),
		r,
		a;
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (a = 0; a < s.length; a++)
			(r = s[a]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function zx(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		a,
		s;
	for (s = 0; s < r.length; s++)
		(a = r[s]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
	return n;
}
var Zu = h.forwardRef(function (e, t) {
	var n = e.color,
		r = e.size,
		a = e.title,
		s = e.className,
		i = Mx(e, Fx);
	return ae.createElement(
		"svg",
		Po(
			{
				ref: t,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				width: r,
				height: r,
				fill: n,
				className: ["bi", "bi-chevron-compact-down", s]
					.filter(Boolean)
					.join(" "),
			},
			i,
		),
		a ? ae.createElement("title", null, a) : null,
		ae.createElement("path", {
			fillRule: "evenodd",
			d: "M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67",
		}),
	);
});
Zu.propTypes = {
	color: U.string,
	size: U.oneOfType([U.string, U.number]),
	title: U.string,
	className: U.string,
};
Zu.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: "",
};
var Ix = ["color", "size", "title", "className"];
function Ro() {
	return (
		(Ro =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}),
		Ro.apply(this, arguments)
	);
}
function Ux(e, t) {
	if (e == null) return {};
	var n = Bx(e, t),
		r,
		a;
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (a = 0; a < s.length; a++)
			(r = s[a]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function Bx(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		a,
		s;
	for (s = 0; s < r.length; s++)
		(a = r[s]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
	return n;
}
var ec = h.forwardRef(function (e, t) {
	var n = e.color,
		r = e.size,
		a = e.title,
		s = e.className,
		i = Ux(e, Ix);
	return ae.createElement(
		"svg",
		Ro(
			{
				ref: t,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				width: r,
				height: r,
				fill: n,
				className: ["bi", "bi-chevron-compact-up", s].filter(Boolean).join(" "),
			},
			i,
		),
		a ? ae.createElement("title", null, a) : null,
		ae.createElement("path", {
			fillRule: "evenodd",
			d: "M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z",
		}),
	);
});
ec.propTypes = {
	color: U.string,
	size: U.oneOfType([U.string, U.number]),
	title: U.string,
	className: U.string,
};
ec.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: "",
};
var $x = ["color", "size", "title", "className"];
function _o() {
	return (
		(_o =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}),
		_o.apply(this, arguments)
	);
}
function Hx(e, t) {
	if (e == null) return {};
	var n = Vx(e, t),
		r,
		a;
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (a = 0; a < s.length; a++)
			(r = s[a]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function Vx(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		a,
		s;
	for (s = 0; s < r.length; s++)
		(a = r[s]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
	return n;
}
var tc = h.forwardRef(function (e, t) {
	var n = e.color,
		r = e.size,
		a = e.title,
		s = e.className,
		i = Hx(e, $x);
	return ae.createElement(
		"svg",
		_o(
			{
				ref: t,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				width: r,
				height: r,
				fill: n,
				className: ["bi", "bi-dash-square-dotted", s].filter(Boolean).join(" "),
			},
			i,
		),
		a ? ae.createElement("title", null, a) : null,
		ae.createElement("path", {
			d: "M2.5 0q-.25 0-.487.048l.194.98A1.5 1.5 0 0 1 2.5 1h.458V0zm2.292 0h-.917v1h.917zm1.833 0h-.917v1h.917zm1.833 0h-.916v1h.916zm1.834 0h-.917v1h.917zm1.833 0h-.917v1h.917zM13.5 0h-.458v1h.458q.151 0 .293.029l.194-.981A2.5 2.5 0 0 0 13.5 0m2.079 1.11a2.5 2.5 0 0 0-.69-.689l-.556.831q.248.167.415.415l.83-.556zM1.11.421a2.5 2.5 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415zM16 2.5q0-.25-.048-.487l-.98.194q.027.141.028.293v.458h1zM.048 2.013A2.5 2.5 0 0 0 0 2.5v.458h1V2.5q0-.151.029-.293zM0 3.875v.917h1v-.917zm16 .917v-.917h-1v.917zM0 5.708v.917h1v-.917zm16 .917v-.917h-1v.917zM0 7.542v.916h1v-.916zm15 .916h1v-.916h-1zM0 9.375v.917h1v-.917zm16 .917v-.917h-1v.917zm-16 .916v.917h1v-.917zm16 .917v-.917h-1v.917zm-16 .917v.458q0 .25.048.487l.98-.194A1.5 1.5 0 0 1 1 13.5v-.458zm16 .458v-.458h-1v.458q0 .151-.029.293l.981.194Q16 13.75 16 13.5M.421 14.89c.183.272.417.506.69.689l.556-.831a1.5 1.5 0 0 1-.415-.415zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373Q2.25 16 2.5 16h.458v-1H2.5q-.151 0-.293-.029zM13.5 16q.25 0 .487-.048l-.194-.98A1.5 1.5 0 0 1 13.5 15h-.458v1zm-9.625 0h.917v-1h-.917zm1.833 0h.917v-1h-.917zm1.834 0h.916v-1h-.916zm1.833 0h.917v-1h-.917zm1.833 0h.917v-1h-.917zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z",
		}),
	);
});
tc.propTypes = {
	color: U.string,
	size: U.oneOfType([U.string, U.number]),
	title: U.string,
	className: U.string,
};
tc.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: "",
};
var Wx = ["color", "size", "title", "className"];
function Lo() {
	return (
		(Lo =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}),
		Lo.apply(this, arguments)
	);
}
function qx(e, t) {
	if (e == null) return {};
	var n = Kx(e, t),
		r,
		a;
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (a = 0; a < s.length; a++)
			(r = s[a]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function Kx(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		a,
		s;
	for (s = 0; s < r.length; s++)
		(a = r[s]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
	return n;
}
var nc = h.forwardRef(function (e, t) {
	var n = e.color,
		r = e.size,
		a = e.title,
		s = e.className,
		i = qx(e, Wx);
	return ae.createElement(
		"svg",
		Lo(
			{
				ref: t,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				width: r,
				height: r,
				fill: n,
				className: ["bi", "bi-list-check", s].filter(Boolean).join(" "),
			},
			i,
		),
		a ? ae.createElement("title", null, a) : null,
		ae.createElement("path", {
			fillRule: "evenodd",
			d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0",
		}),
	);
});
nc.propTypes = {
	color: U.string,
	size: U.oneOfType([U.string, U.number]),
	title: U.string,
	className: U.string,
};
nc.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: "",
};
var Qx = ["color", "size", "title", "className"];
function Oo() {
	return (
		(Oo =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}),
		Oo.apply(this, arguments)
	);
}
function Jx(e, t) {
	if (e == null) return {};
	var n = Yx(e, t),
		r,
		a;
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (a = 0; a < s.length; a++)
			(r = s[a]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function Yx(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		a,
		s;
	for (s = 0; s < r.length; s++)
		(a = r[s]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
	return n;
}
var rc = h.forwardRef(function (e, t) {
	var n = e.color,
		r = e.size,
		a = e.title,
		s = e.className,
		i = Jx(e, Qx);
	return ae.createElement(
		"svg",
		Oo(
			{
				ref: t,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				width: r,
				height: r,
				fill: n,
				className: ["bi", "bi-people", s].filter(Boolean).join(" "),
			},
			i,
		),
		a ? ae.createElement("title", null, a) : null,
		ae.createElement("path", {
			d: "M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
		}),
	);
});
rc.propTypes = {
	color: U.string,
	size: U.oneOfType([U.string, U.number]),
	title: U.string,
	className: U.string,
};
rc.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: "",
};
var Gx = ["color", "size", "title", "className"];
function To() {
	return (
		(To =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}),
		To.apply(this, arguments)
	);
}
function Xx(e, t) {
	if (e == null) return {};
	var n = Zx(e, t),
		r,
		a;
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (a = 0; a < s.length; a++)
			(r = s[a]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function Zx(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		a,
		s;
	for (s = 0; s < r.length; s++)
		(a = r[s]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
	return n;
}
var ac = h.forwardRef(function (e, t) {
	var n = e.color,
		r = e.size,
		a = e.title,
		s = e.className,
		i = Xx(e, Gx);
	return ae.createElement(
		"svg",
		To(
			{
				ref: t,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				width: r,
				height: r,
				fill: n,
				className: ["bi", "bi-person-badge", s].filter(Boolean).join(" "),
			},
			i,
		),
		a ? ae.createElement("title", null, a) : null,
		ae.createElement("path", {
			d: "M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
		}),
		ae.createElement("path", {
			d: "M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z",
		}),
	);
});
ac.propTypes = {
	color: U.string,
	size: U.oneOfType([U.string, U.number]),
	title: U.string,
	className: U.string,
};
ac.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: "",
};
var e1 = ["color", "size", "title", "className"];
function Do() {
	return (
		(Do =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}),
		Do.apply(this, arguments)
	);
}
function t1(e, t) {
	if (e == null) return {};
	var n = n1(e, t),
		r,
		a;
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (a = 0; a < s.length; a++)
			(r = s[a]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function n1(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		a,
		s;
	for (s = 0; s < r.length; s++)
		(a = r[s]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
	return n;
}
var sc = h.forwardRef(function (e, t) {
	var n = e.color,
		r = e.size,
		a = e.title,
		s = e.className,
		i = t1(e, e1);
	return ae.createElement(
		"svg",
		Do(
			{
				ref: t,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				width: r,
				height: r,
				fill: n,
				className: ["bi", "bi-person-plus", s].filter(Boolean).join(" "),
			},
			i,
		),
		a ? ae.createElement("title", null, a) : null,
		ae.createElement("path", {
			d: "M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z",
		}),
		ae.createElement("path", {
			fillRule: "evenodd",
			d: "M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5",
		}),
	);
});
sc.propTypes = {
	color: U.string,
	size: U.oneOfType([U.string, U.number]),
	title: U.string,
	className: U.string,
};
sc.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: "",
};
var r1 = ["color", "size", "title", "className"];
function Ao() {
	return (
		(Ao =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}),
		Ao.apply(this, arguments)
	);
}
function a1(e, t) {
	if (e == null) return {};
	var n = s1(e, t),
		r,
		a;
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (a = 0; a < s.length; a++)
			(r = s[a]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function s1(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		a,
		s;
	for (s = 0; s < r.length; s++)
		(a = r[s]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
	return n;
}
var lc = h.forwardRef(function (e, t) {
	var n = e.color,
		r = e.size,
		a = e.title,
		s = e.className,
		i = a1(e, r1);
	return ae.createElement(
		"svg",
		Ao(
			{
				ref: t,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				width: r,
				height: r,
				fill: n,
				className: ["bi", "bi-plus", s].filter(Boolean).join(" "),
			},
			i,
		),
		a ? ae.createElement("title", null, a) : null,
		ae.createElement("path", {
			d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4",
		}),
	);
});
lc.propTypes = {
	color: U.string,
	size: U.oneOfType([U.string, U.number]),
	title: U.string,
	className: U.string,
};
lc.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: "",
};
var l1 = ["color", "size", "title", "className"];
function Fo() {
	return (
		(Fo =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}),
		Fo.apply(this, arguments)
	);
}
function i1(e, t) {
	if (e == null) return {};
	var n = o1(e, t),
		r,
		a;
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (a = 0; a < s.length; a++)
			(r = s[a]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function o1(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		a,
		s;
	for (s = 0; s < r.length; s++)
		(a = r[s]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
	return n;
}
var ic = h.forwardRef(function (e, t) {
	var n = e.color,
		r = e.size,
		a = e.title,
		s = e.className,
		i = i1(e, l1);
	return ae.createElement(
		"svg",
		Fo(
			{
				ref: t,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				width: r,
				height: r,
				fill: n,
				className: ["bi", "bi-wallet", s].filter(Boolean).join(" "),
			},
			i,
		),
		a ? ae.createElement("title", null, a) : null,
		ae.createElement("path", {
			d: "M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1",
		}),
	);
});
ic.propTypes = {
	color: U.string,
	size: U.oneOfType([U.string, U.number]),
	title: U.string,
	className: U.string,
};
ic.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: "",
};
var u1 = ["color", "size", "title", "className"];
function Mo() {
	return (
		(Mo =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}),
		Mo.apply(this, arguments)
	);
}
function c1(e, t) {
	if (e == null) return {};
	var n = d1(e, t),
		r,
		a;
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (a = 0; a < s.length; a++)
			(r = s[a]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function d1(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		a,
		s;
	for (s = 0; s < r.length; s++)
		(a = r[s]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
	return n;
}
var gl = h.forwardRef(function (e, t) {
	var n = e.color,
		r = e.size,
		a = e.title,
		s = e.className,
		i = c1(e, u1);
	return ae.createElement(
		"svg",
		Mo(
			{
				ref: t,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				width: r,
				height: r,
				fill: n,
				className: ["bi", "bi-wallet2", s].filter(Boolean).join(" "),
			},
			i,
		),
		a ? ae.createElement("title", null, a) : null,
		ae.createElement("path", {
			d: "M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z",
		}),
	);
});
gl.propTypes = {
	color: U.string,
	size: U.oneOfType([U.string, U.number]),
	title: U.string,
	className: U.string,
};
gl.defaultProps = {
	color: "currentColor",
	size: "1em",
	title: null,
	className: "",
};
const f1 = {
		login: {
			id: 0,
			username: "",
			plan_total: "",
			ac_active_date: "",
			sponsor_id: "",
			first_name: "",
			last_name: "",
		},
		setLogin: () => "",
		token: null,
		setToken: () => {},
	},
	we = h.createContext(f1),
	h1 = [
		{ label: "Dashboard", icon: l.jsx(tc, {}), submenu: [], href: "/" },
		{
			label: "Account Topup",
			icon: l.jsx(sc, {}),
			isOpen: !1,
			submenu: [
				{ label: "Topup Account", href: "/topup-account" },
				{ label: "Topup History", href: "/topup-history" },
				{ label: "Upgrade Account", href: "/upgrade-account" },
			],
		},
		{
			label: "Profile",
			icon: l.jsx(ac, {}),
			isOpen: !1,
			submenu: [
				{ label: "Edit Profile", href: "/edit-profile" },
				{ label: "Change Password", href: "/change-password" },
				{ label: "Forgot Password", href: "/forgot-password" },
				{ label: "Upload KYC", href: "/upload-kyc" },
				{
					label: "Welcome Letter",
					href: "https://inspirelife.in/welcome-letter.php?userid=",
					external: !0,
				},
			],
		},
		{
			label: "Fund Management",
			icon: l.jsx(ic, {}),
			isOpen: !1,
			submenu: [
				{ label: "Deposit Fund", href: "/fund-request" },
				{ label: "Deposite History", href: "/deposite-history" },
				{ label: "Fund Transfer", href: "/fund-transfer" },
				{ label: "Fund Transfer History", href: "/fund-transfer-history" },
			],
		},
		{
			label: "Orders",
			icon: l.jsx(Xu, {}),
			isOpen: !1,
			submenu: [
				{ label: "My Orders", href: "/my-orders" },
				{ label: "View Products", href: "/view-products" },
			],
		},
		{
			label: "Teams",
			icon: l.jsx(rc, {}),
			isOpen: !1,
			submenu: [
				{ label: "My Direct Members", href: "/direct-members" },
				{ label: "My Downline", href: "/my-downline" },
				{ label: "Member Tree", href: "/member-tree" },
			],
		},
		{
			label: "Income Report",
			icon: l.jsx(gl, {}),
			isOpen: !1,
			submenu: [
				{ label: "Matching Income", href: "/payment-report/level" },
				{ label: "Level Income", href: "/payment-report/roi" },
				{ label: "Rank Rewards", href: "/rank-rewards" },
				{ label: "Family club fund", href: "/payment-report/family" },
				{ label: "Bonaza Weekly", href: "/payment-report/bonanza" },
			],
		},
		{
			label: "Fund Withdraw",
			icon: l.jsx(gl, {}),
			isOpen: !1,
			submenu: [
				{ label: "Withdraw Request", href: "/withdraw" },
				{ label: "Withdraw History", href: "/withdraw-history" },
			],
		},
		{
			label: "Help & Support",
			icon: l.jsx(nc, {}),
			submenu: [],
			href: "/supports",
		},
	];
function p1() {
	const [e, t] = h.useState(h1),
		[n, r] = h.useState(!1),
		{ login: a } = h.useContext(we),
		s = (o, u) =>
			l.jsx("ul", {
				className: u ? "open" : "close",
				children: o.map((c, d) =>
					l.jsx(
						"li",
						{
							children: c.external
								? l.jsx(_e, {
										to: c.href + `${a.id}`,
										target: "_blank",
										rel: "noopener noreferrer",
										children: c.label,
								  })
								: l.jsx(_e, { to: `/dashboard${c.href}`, children: c.label }),
						},
						"smenu" + d,
					),
				),
			}),
		i = (o) => {
			e.map((u) => (u.isOpen = !1)), (e[o].isOpen = !e[o].isOpen), t(e), r(!n);
		};
	return l.jsx("div", {
		id: "sidebar",
		className:
			"animated bounceInDown navbar-nav sidebar accordion side overflow-auto",
		style: { maxHeight: "100vh" },
		children: l.jsxs("div", {
			children: [
				l.jsx("div", {
					className: "d-flex align-items-center justify-content-center p-2",
					children: l.jsx("img", {
						alt: "User",
						style: { width: "100%", height: "auto" },
						src: "/img/dashboard-logo.png",
						className: "rounded-1",
					}),
				}),
				l.jsx("ul", {
					className: "sidebar-menu",
					children: e.map((o, u) =>
						l.jsxs(
							"li",
							{
								children: [
									l.jsxs(_e, {
										onClick: () => i(u),
										to: o.href == null ? "#" : `/dashboard${o.href}`,
										children: [
											o.icon,
											o.label,
											l.jsx("span", {
												children: o.submenu.length
													? o.isOpen
														? l.jsx(ec, {})
														: l.jsx(Zu, {})
													: null,
											}),
										],
									}),
									o.submenu.length > 0 && s(o.submenu, o.isOpen),
								],
							},
							"menu" + u,
						),
					),
				}),
			],
		}),
	});
}
function Jp(e, t) {
	return function () {
		return e.apply(t, arguments);
	};
}
const { toString: m1 } = Object.prototype,
	{ getPrototypeOf: oc } = Object,
	Il = ((e) => (t) => {
		const n = m1.call(t);
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
	})(Object.create(null)),
	$t = (e) => ((e = e.toLowerCase()), (t) => Il(t) === e),
	Ul = (e) => (t) => typeof t === e,
	{ isArray: Kr } = Array,
	Va = Ul("undefined");
function g1(e) {
	return (
		e !== null &&
		!Va(e) &&
		e.constructor !== null &&
		!Va(e.constructor) &&
		xt(e.constructor.isBuffer) &&
		e.constructor.isBuffer(e)
	);
}
const Yp = $t("ArrayBuffer");
function v1(e) {
	let t;
	return (
		typeof ArrayBuffer < "u" && ArrayBuffer.isView
			? (t = ArrayBuffer.isView(e))
			: (t = e && e.buffer && Yp(e.buffer)),
		t
	);
}
const y1 = Ul("string"),
	xt = Ul("function"),
	Gp = Ul("number"),
	Bl = (e) => e !== null && typeof e == "object",
	x1 = (e) => e === !0 || e === !1,
	Bs = (e) => {
		if (Il(e) !== "object") return !1;
		const t = oc(e);
		return (
			(t === null ||
				t === Object.prototype ||
				Object.getPrototypeOf(t) === null) &&
			!(Symbol.toStringTag in e) &&
			!(Symbol.iterator in e)
		);
	},
	w1 = $t("Date"),
	j1 = $t("File"),
	N1 = $t("Blob"),
	S1 = $t("FileList"),
	C1 = (e) => Bl(e) && xt(e.pipe),
	E1 = (e) => {
		let t;
		return (
			e &&
			((typeof FormData == "function" && e instanceof FormData) ||
				(xt(e.append) &&
					((t = Il(e)) === "formdata" ||
						(t === "object" &&
							xt(e.toString) &&
							e.toString() === "[object FormData]"))))
		);
	},
	k1 = $t("URLSearchParams"),
	[b1, P1, R1, _1] = ["ReadableStream", "Request", "Response", "Headers"].map(
		$t,
	),
	L1 = (e) =>
		e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Za(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e === null || typeof e > "u") return;
	let r, a;
	if ((typeof e != "object" && (e = [e]), Kr(e)))
		for (r = 0, a = e.length; r < a; r++) t.call(null, e[r], r, e);
	else {
		const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
			i = s.length;
		let o;
		for (r = 0; r < i; r++) (o = s[r]), t.call(null, e[o], o, e);
	}
}
function Xp(e, t) {
	t = t.toLowerCase();
	const n = Object.keys(e);
	let r = n.length,
		a;
	for (; r-- > 0; ) if (((a = n[r]), t === a.toLowerCase())) return a;
	return null;
}
const Zn =
		typeof globalThis < "u"
			? globalThis
			: typeof self < "u"
			? self
			: typeof window < "u"
			? window
			: global,
	Zp = (e) => !Va(e) && e !== Zn;
function zo() {
	const { caseless: e } = (Zp(this) && this) || {},
		t = {},
		n = (r, a) => {
			const s = (e && Xp(t, a)) || a;
			Bs(t[s]) && Bs(r)
				? (t[s] = zo(t[s], r))
				: Bs(r)
				? (t[s] = zo({}, r))
				: Kr(r)
				? (t[s] = r.slice())
				: (t[s] = r);
		};
	for (let r = 0, a = arguments.length; r < a; r++)
		arguments[r] && Za(arguments[r], n);
	return t;
}
const O1 = (e, t, n, { allOwnKeys: r } = {}) => (
		Za(
			t,
			(a, s) => {
				n && xt(a) ? (e[s] = Jp(a, n)) : (e[s] = a);
			},
			{ allOwnKeys: r },
		),
		e
	),
	T1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
	D1 = (e, t, n, r) => {
		(e.prototype = Object.create(t.prototype, r)),
			(e.prototype.constructor = e),
			Object.defineProperty(e, "super", { value: t.prototype }),
			n && Object.assign(e.prototype, n);
	},
	A1 = (e, t, n, r) => {
		let a, s, i;
		const o = {};
		if (((t = t || {}), e == null)) return t;
		do {
			for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
				(i = a[s]), (!r || r(i, e, t)) && !o[i] && ((t[i] = e[i]), (o[i] = !0));
			e = n !== !1 && oc(e);
		} while (e && (!n || n(e, t)) && e !== Object.prototype);
		return t;
	},
	F1 = (e, t, n) => {
		(e = String(e)),
			(n === void 0 || n > e.length) && (n = e.length),
			(n -= t.length);
		const r = e.indexOf(t, n);
		return r !== -1 && r === n;
	},
	M1 = (e) => {
		if (!e) return null;
		if (Kr(e)) return e;
		let t = e.length;
		if (!Gp(t)) return null;
		const n = new Array(t);
		for (; t-- > 0; ) n[t] = e[t];
		return n;
	},
	z1 = (
		(e) => (t) =>
			e && t instanceof e
	)(typeof Uint8Array < "u" && oc(Uint8Array)),
	I1 = (e, t) => {
		const r = (e && e[Symbol.iterator]).call(e);
		let a;
		for (; (a = r.next()) && !a.done; ) {
			const s = a.value;
			t.call(e, s[0], s[1]);
		}
	},
	U1 = (e, t) => {
		let n;
		const r = [];
		for (; (n = e.exec(t)) !== null; ) r.push(n);
		return r;
	},
	B1 = $t("HTMLFormElement"),
	$1 = (e) =>
		e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, a) {
			return r.toUpperCase() + a;
		}),
	ef = (
		({ hasOwnProperty: e }) =>
		(t, n) =>
			e.call(t, n)
	)(Object.prototype),
	H1 = $t("RegExp"),
	em = (e, t) => {
		const n = Object.getOwnPropertyDescriptors(e),
			r = {};
		Za(n, (a, s) => {
			let i;
			(i = t(a, s, e)) !== !1 && (r[s] = i || a);
		}),
			Object.defineProperties(e, r);
	},
	V1 = (e) => {
		em(e, (t, n) => {
			if (xt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
				return !1;
			const r = e[n];
			if (xt(r)) {
				if (((t.enumerable = !1), "writable" in t)) {
					t.writable = !1;
					return;
				}
				t.set ||
					(t.set = () => {
						throw Error("Can not rewrite read-only method '" + n + "'");
					});
			}
		});
	},
	W1 = (e, t) => {
		const n = {},
			r = (a) => {
				a.forEach((s) => {
					n[s] = !0;
				});
			};
		return Kr(e) ? r(e) : r(String(e).split(t)), n;
	},
	q1 = () => {},
	K1 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
	Ci = "abcdefghijklmnopqrstuvwxyz",
	tf = "0123456789",
	tm = { DIGIT: tf, ALPHA: Ci, ALPHA_DIGIT: Ci + Ci.toUpperCase() + tf },
	Q1 = (e = 16, t = tm.ALPHA_DIGIT) => {
		let n = "";
		const { length: r } = t;
		for (; e--; ) n += t[(Math.random() * r) | 0];
		return n;
	};
function J1(e) {
	return !!(
		e &&
		xt(e.append) &&
		e[Symbol.toStringTag] === "FormData" &&
		e[Symbol.iterator]
	);
}
const Y1 = (e) => {
		const t = new Array(10),
			n = (r, a) => {
				if (Bl(r)) {
					if (t.indexOf(r) >= 0) return;
					if (!("toJSON" in r)) {
						t[a] = r;
						const s = Kr(r) ? [] : {};
						return (
							Za(r, (i, o) => {
								const u = n(i, a + 1);
								!Va(u) && (s[o] = u);
							}),
							(t[a] = void 0),
							s
						);
					}
				}
				return r;
			};
		return n(e, 0);
	},
	G1 = $t("AsyncFunction"),
	X1 = (e) => e && (Bl(e) || xt(e)) && xt(e.then) && xt(e.catch),
	nm = ((e, t) =>
		e
			? setImmediate
			: t
			? ((n, r) => (
					Zn.addEventListener(
						"message",
						({ source: a, data: s }) => {
							a === Zn && s === n && r.length && r.shift()();
						},
						!1,
					),
					(a) => {
						r.push(a), Zn.postMessage(n, "*");
					}
			  ))(`axios@${Math.random()}`, [])
			: (n) => setTimeout(n))(
		typeof setImmediate == "function",
		xt(Zn.postMessage),
	),
	Z1 =
		typeof queueMicrotask < "u"
			? queueMicrotask.bind(Zn)
			: (typeof process < "u" && process.nextTick) || nm,
	_ = {
		isArray: Kr,
		isArrayBuffer: Yp,
		isBuffer: g1,
		isFormData: E1,
		isArrayBufferView: v1,
		isString: y1,
		isNumber: Gp,
		isBoolean: x1,
		isObject: Bl,
		isPlainObject: Bs,
		isReadableStream: b1,
		isRequest: P1,
		isResponse: R1,
		isHeaders: _1,
		isUndefined: Va,
		isDate: w1,
		isFile: j1,
		isBlob: N1,
		isRegExp: H1,
		isFunction: xt,
		isStream: C1,
		isURLSearchParams: k1,
		isTypedArray: z1,
		isFileList: S1,
		forEach: Za,
		merge: zo,
		extend: O1,
		trim: L1,
		stripBOM: T1,
		inherits: D1,
		toFlatObject: A1,
		kindOf: Il,
		kindOfTest: $t,
		endsWith: F1,
		toArray: M1,
		forEachEntry: I1,
		matchAll: U1,
		isHTMLForm: B1,
		hasOwnProperty: ef,
		hasOwnProp: ef,
		reduceDescriptors: em,
		freezeMethods: V1,
		toObjectSet: W1,
		toCamelCase: $1,
		noop: q1,
		toFiniteNumber: K1,
		findKey: Xp,
		global: Zn,
		isContextDefined: Zp,
		ALPHABET: tm,
		generateString: Q1,
		isSpecCompliantForm: J1,
		toJSONObject: Y1,
		isAsyncFn: G1,
		isThenable: X1,
		setImmediate: nm,
		asap: Z1,
	};
function ee(e, t, n, r, a) {
	Error.call(this),
		Error.captureStackTrace
			? Error.captureStackTrace(this, this.constructor)
			: (this.stack = new Error().stack),
		(this.message = e),
		(this.name = "AxiosError"),
		t && (this.code = t),
		n && (this.config = n),
		r && (this.request = r),
		a && ((this.response = a), (this.status = a.status ? a.status : null));
}
_.inherits(ee, Error, {
	toJSON: function () {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: _.toJSONObject(this.config),
			code: this.code,
			status: this.status,
		};
	},
});
const rm = ee.prototype,
	am = {};
[
	"ERR_BAD_OPTION_VALUE",
	"ERR_BAD_OPTION",
	"ECONNABORTED",
	"ETIMEDOUT",
	"ERR_NETWORK",
	"ERR_FR_TOO_MANY_REDIRECTS",
	"ERR_DEPRECATED",
	"ERR_BAD_RESPONSE",
	"ERR_BAD_REQUEST",
	"ERR_CANCELED",
	"ERR_NOT_SUPPORT",
	"ERR_INVALID_URL",
].forEach((e) => {
	am[e] = { value: e };
});
Object.defineProperties(ee, am);
Object.defineProperty(rm, "isAxiosError", { value: !0 });
ee.from = (e, t, n, r, a, s) => {
	const i = Object.create(rm);
	return (
		_.toFlatObject(
			e,
			i,
			function (u) {
				return u !== Error.prototype;
			},
			(o) => o !== "isAxiosError",
		),
		ee.call(i, e.message, t, n, r, a),
		(i.cause = e),
		(i.name = e.name),
		s && Object.assign(i, s),
		i
	);
};
const ew = null;
function Io(e) {
	return _.isPlainObject(e) || _.isArray(e);
}
function sm(e) {
	return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function nf(e, t, n) {
	return e
		? e
				.concat(t)
				.map(function (a, s) {
					return (a = sm(a)), !n && s ? "[" + a + "]" : a;
				})
				.join(n ? "." : "")
		: t;
}
function tw(e) {
	return _.isArray(e) && !e.some(Io);
}
const nw = _.toFlatObject(_, {}, null, function (t) {
	return /^is[A-Z]/.test(t);
});
function $l(e, t, n) {
	if (!_.isObject(e)) throw new TypeError("target must be an object");
	(t = t || new FormData()),
		(n = _.toFlatObject(
			n,
			{ metaTokens: !0, dots: !1, indexes: !1 },
			!1,
			function (g, S) {
				return !_.isUndefined(S[g]);
			},
		));
	const r = n.metaTokens,
		a = n.visitor || d,
		s = n.dots,
		i = n.indexes,
		u = (n.Blob || (typeof Blob < "u" && Blob)) && _.isSpecCompliantForm(t);
	if (!_.isFunction(a)) throw new TypeError("visitor must be a function");
	function c(j) {
		if (j === null) return "";
		if (_.isDate(j)) return j.toISOString();
		if (!u && _.isBlob(j))
			throw new ee("Blob is not supported. Use a Buffer instead.");
		return _.isArrayBuffer(j) || _.isTypedArray(j)
			? u && typeof Blob == "function"
				? new Blob([j])
				: Buffer.from(j)
			: j;
	}
	function d(j, g, S) {
		let v = j;
		if (j && !S && typeof j == "object") {
			if (_.endsWith(g, "{}"))
				(g = r ? g : g.slice(0, -2)), (j = JSON.stringify(j));
			else if (
				(_.isArray(j) && tw(j)) ||
				((_.isFileList(j) || _.endsWith(g, "[]")) && (v = _.toArray(j)))
			)
				return (
					(g = sm(g)),
					v.forEach(function (x, E) {
						!(_.isUndefined(x) || x === null) &&
							t.append(
								i === !0 ? nf([g], E, s) : i === null ? g : g + "[]",
								c(x),
							);
					}),
					!1
				);
		}
		return Io(j) ? !0 : (t.append(nf(S, g, s), c(j)), !1);
	}
	const p = [],
		m = Object.assign(nw, {
			defaultVisitor: d,
			convertValue: c,
			isVisitable: Io,
		});
	function y(j, g) {
		if (!_.isUndefined(j)) {
			if (p.indexOf(j) !== -1)
				throw Error("Circular reference detected in " + g.join("."));
			p.push(j),
				_.forEach(j, function (v, f) {
					(!(_.isUndefined(v) || v === null) &&
						a.call(t, v, _.isString(f) ? f.trim() : f, g, m)) === !0 &&
						y(v, g ? g.concat(f) : [f]);
				}),
				p.pop();
		}
	}
	if (!_.isObject(e)) throw new TypeError("data must be an object");
	return y(e), t;
}
function rf(e) {
	const t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+",
		"%00": "\0",
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
		return t[r];
	});
}
function uc(e, t) {
	(this._pairs = []), e && $l(e, this, t);
}
const lm = uc.prototype;
lm.append = function (t, n) {
	this._pairs.push([t, n]);
};
lm.toString = function (t) {
	const n = t
		? function (r) {
				return t.call(this, r, rf);
		  }
		: rf;
	return this._pairs
		.map(function (a) {
			return n(a[0]) + "=" + n(a[1]);
		}, "")
		.join("&");
};
function rw(e) {
	return encodeURIComponent(e)
		.replace(/%3A/gi, ":")
		.replace(/%24/g, "$")
		.replace(/%2C/gi, ",")
		.replace(/%20/g, "+")
		.replace(/%5B/gi, "[")
		.replace(/%5D/gi, "]");
}
function im(e, t, n) {
	if (!t) return e;
	const r = (n && n.encode) || rw,
		a = n && n.serialize;
	let s;
	if (
		(a
			? (s = a(t, n))
			: (s = _.isURLSearchParams(t) ? t.toString() : new uc(t, n).toString(r)),
		s)
	) {
		const i = e.indexOf("#");
		i !== -1 && (e = e.slice(0, i)),
			(e += (e.indexOf("?") === -1 ? "?" : "&") + s);
	}
	return e;
}
class af {
	constructor() {
		this.handlers = [];
	}
	use(t, n, r) {
		return (
			this.handlers.push({
				fulfilled: t,
				rejected: n,
				synchronous: r ? r.synchronous : !1,
				runWhen: r ? r.runWhen : null,
			}),
			this.handlers.length - 1
		);
	}
	eject(t) {
		this.handlers[t] && (this.handlers[t] = null);
	}
	clear() {
		this.handlers && (this.handlers = []);
	}
	forEach(t) {
		_.forEach(this.handlers, function (r) {
			r !== null && t(r);
		});
	}
}
const om = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1,
	},
	aw = typeof URLSearchParams < "u" ? URLSearchParams : uc,
	sw = typeof FormData < "u" ? FormData : null,
	lw = typeof Blob < "u" ? Blob : null,
	iw = {
		isBrowser: !0,
		classes: { URLSearchParams: aw, FormData: sw, Blob: lw },
		protocols: ["http", "https", "file", "blob", "url", "data"],
	},
	cc = typeof window < "u" && typeof document < "u",
	Uo = (typeof navigator == "object" && navigator) || void 0,
	ow =
		cc &&
		(!Uo || ["ReactNative", "NativeScript", "NS"].indexOf(Uo.product) < 0),
	uw =
		typeof WorkerGlobalScope < "u" &&
		self instanceof WorkerGlobalScope &&
		typeof self.importScripts == "function",
	cw = (cc && window.location.href) || "http://localhost",
	dw = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				hasBrowserEnv: cc,
				hasStandardBrowserEnv: ow,
				hasStandardBrowserWebWorkerEnv: uw,
				navigator: Uo,
				origin: cw,
			},
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	ht = { ...dw, ...iw };
function fw(e, t) {
	return $l(
		e,
		new ht.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (n, r, a, s) {
					return ht.isNode && _.isBuffer(n)
						? (this.append(r, n.toString("base64")), !1)
						: s.defaultVisitor.apply(this, arguments);
				},
			},
			t,
		),
	);
}
function hw(e) {
	return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
		t[0] === "[]" ? "" : t[1] || t[0],
	);
}
function pw(e) {
	const t = {},
		n = Object.keys(e);
	let r;
	const a = n.length;
	let s;
	for (r = 0; r < a; r++) (s = n[r]), (t[s] = e[s]);
	return t;
}
function um(e) {
	function t(n, r, a, s) {
		let i = n[s++];
		if (i === "__proto__") return !0;
		const o = Number.isFinite(+i),
			u = s >= n.length;
		return (
			(i = !i && _.isArray(a) ? a.length : i),
			u
				? (_.hasOwnProp(a, i) ? (a[i] = [a[i], r]) : (a[i] = r), !o)
				: ((!a[i] || !_.isObject(a[i])) && (a[i] = []),
				  t(n, r, a[i], s) && _.isArray(a[i]) && (a[i] = pw(a[i])),
				  !o)
		);
	}
	if (_.isFormData(e) && _.isFunction(e.entries)) {
		const n = {};
		return (
			_.forEachEntry(e, (r, a) => {
				t(hw(r), a, n, 0);
			}),
			n
		);
	}
	return null;
}
function mw(e, t, n) {
	if (_.isString(e))
		try {
			return (t || JSON.parse)(e), _.trim(e);
		} catch (r) {
			if (r.name !== "SyntaxError") throw r;
		}
	return (0, JSON.stringify)(e);
}
const es = {
	transitional: om,
	adapter: ["xhr", "http", "fetch"],
	transformRequest: [
		function (t, n) {
			const r = n.getContentType() || "",
				a = r.indexOf("application/json") > -1,
				s = _.isObject(t);
			if ((s && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t)))
				return a ? JSON.stringify(um(t)) : t;
			if (
				_.isArrayBuffer(t) ||
				_.isBuffer(t) ||
				_.isStream(t) ||
				_.isFile(t) ||
				_.isBlob(t) ||
				_.isReadableStream(t)
			)
				return t;
			if (_.isArrayBufferView(t)) return t.buffer;
			if (_.isURLSearchParams(t))
				return (
					n.setContentType(
						"application/x-www-form-urlencoded;charset=utf-8",
						!1,
					),
					t.toString()
				);
			let o;
			if (s) {
				if (r.indexOf("application/x-www-form-urlencoded") > -1)
					return fw(t, this.formSerializer).toString();
				if ((o = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
					const u = this.env && this.env.FormData;
					return $l(
						o ? { "files[]": t } : t,
						u && new u(),
						this.formSerializer,
					);
				}
			}
			return s || a ? (n.setContentType("application/json", !1), mw(t)) : t;
		},
	],
	transformResponse: [
		function (t) {
			const n = this.transitional || es.transitional,
				r = n && n.forcedJSONParsing,
				a = this.responseType === "json";
			if (_.isResponse(t) || _.isReadableStream(t)) return t;
			if (t && _.isString(t) && ((r && !this.responseType) || a)) {
				const i = !(n && n.silentJSONParsing) && a;
				try {
					return JSON.parse(t);
				} catch (o) {
					if (i)
						throw o.name === "SyntaxError"
							? ee.from(o, ee.ERR_BAD_RESPONSE, this, null, this.response)
							: o;
				}
			}
			return t;
		},
	],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: { FormData: ht.classes.FormData, Blob: ht.classes.Blob },
	validateStatus: function (t) {
		return t >= 200 && t < 300;
	},
	headers: {
		common: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": void 0,
		},
	},
};
_.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
	es.headers[e] = {};
});
const gw = _.toObjectSet([
		"age",
		"authorization",
		"content-length",
		"content-type",
		"etag",
		"expires",
		"from",
		"host",
		"if-modified-since",
		"if-unmodified-since",
		"last-modified",
		"location",
		"max-forwards",
		"proxy-authorization",
		"referer",
		"retry-after",
		"user-agent",
	]),
	vw = (e) => {
		const t = {};
		let n, r, a;
		return (
			e &&
				e
					.split(
						`
`,
					)
					.forEach(function (i) {
						(a = i.indexOf(":")),
							(n = i.substring(0, a).trim().toLowerCase()),
							(r = i.substring(a + 1).trim()),
							!(!n || (t[n] && gw[n])) &&
								(n === "set-cookie"
									? t[n]
										? t[n].push(r)
										: (t[n] = [r])
									: (t[n] = t[n] ? t[n] + ", " + r : r));
					}),
			t
		);
	},
	sf = Symbol("internals");
function da(e) {
	return e && String(e).trim().toLowerCase();
}
function $s(e) {
	return e === !1 || e == null ? e : _.isArray(e) ? e.map($s) : String(e);
}
function yw(e) {
	const t = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let r;
	for (; (r = n.exec(e)); ) t[r[1]] = r[2];
	return t;
}
const xw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ei(e, t, n, r, a) {
	if (_.isFunction(r)) return r.call(this, t, n);
	if ((a && (t = n), !!_.isString(t))) {
		if (_.isString(r)) return t.indexOf(r) !== -1;
		if (_.isRegExp(r)) return r.test(t);
	}
}
function ww(e) {
	return e
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function jw(e, t) {
	const n = _.toCamelCase(" " + t);
	["get", "set", "has"].forEach((r) => {
		Object.defineProperty(e, r + n, {
			value: function (a, s, i) {
				return this[r].call(this, t, a, s, i);
			},
			configurable: !0,
		});
	});
}
class pt {
	constructor(t) {
		t && this.set(t);
	}
	set(t, n, r) {
		const a = this;
		function s(o, u, c) {
			const d = da(u);
			if (!d) throw new Error("header name must be a non-empty string");
			const p = _.findKey(a, d);
			(!p || a[p] === void 0 || c === !0 || (c === void 0 && a[p] !== !1)) &&
				(a[p || u] = $s(o));
		}
		const i = (o, u) => _.forEach(o, (c, d) => s(c, d, u));
		if (_.isPlainObject(t) || t instanceof this.constructor) i(t, n);
		else if (_.isString(t) && (t = t.trim()) && !xw(t)) i(vw(t), n);
		else if (_.isHeaders(t)) for (const [o, u] of t.entries()) s(u, o, r);
		else t != null && s(n, t, r);
		return this;
	}
	get(t, n) {
		if (((t = da(t)), t)) {
			const r = _.findKey(this, t);
			if (r) {
				const a = this[r];
				if (!n) return a;
				if (n === !0) return yw(a);
				if (_.isFunction(n)) return n.call(this, a, r);
				if (_.isRegExp(n)) return n.exec(a);
				throw new TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(t, n) {
		if (((t = da(t)), t)) {
			const r = _.findKey(this, t);
			return !!(r && this[r] !== void 0 && (!n || Ei(this, this[r], r, n)));
		}
		return !1;
	}
	delete(t, n) {
		const r = this;
		let a = !1;
		function s(i) {
			if (((i = da(i)), i)) {
				const o = _.findKey(r, i);
				o && (!n || Ei(r, r[o], o, n)) && (delete r[o], (a = !0));
			}
		}
		return _.isArray(t) ? t.forEach(s) : s(t), a;
	}
	clear(t) {
		const n = Object.keys(this);
		let r = n.length,
			a = !1;
		for (; r--; ) {
			const s = n[r];
			(!t || Ei(this, this[s], s, t, !0)) && (delete this[s], (a = !0));
		}
		return a;
	}
	normalize(t) {
		const n = this,
			r = {};
		return (
			_.forEach(this, (a, s) => {
				const i = _.findKey(r, s);
				if (i) {
					(n[i] = $s(a)), delete n[s];
					return;
				}
				const o = t ? ww(s) : String(s).trim();
				o !== s && delete n[s], (n[o] = $s(a)), (r[o] = !0);
			}),
			this
		);
	}
	concat(...t) {
		return this.constructor.concat(this, ...t);
	}
	toJSON(t) {
		const n = Object.create(null);
		return (
			_.forEach(this, (r, a) => {
				r != null && r !== !1 && (n[a] = t && _.isArray(r) ? r.join(", ") : r);
			}),
			n
		);
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(t) {
		return t instanceof this ? t : new this(t);
	}
	static concat(t, ...n) {
		const r = new this(t);
		return n.forEach((a) => r.set(a)), r;
	}
	static accessor(t) {
		const r = (this[sf] = this[sf] = { accessors: {} }).accessors,
			a = this.prototype;
		function s(i) {
			const o = da(i);
			r[o] || (jw(a, i), (r[o] = !0));
		}
		return _.isArray(t) ? t.forEach(s) : s(t), this;
	}
}
pt.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization",
]);
_.reduceDescriptors(pt.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(r) {
			this[n] = r;
		},
	};
});
_.freezeMethods(pt);
function ki(e, t) {
	const n = this || es,
		r = t || n,
		a = pt.from(r.headers);
	let s = r.data;
	return (
		_.forEach(e, function (o) {
			s = o.call(n, s, a.normalize(), t ? t.status : void 0);
		}),
		a.normalize(),
		s
	);
}
function cm(e) {
	return !!(e && e.__CANCEL__);
}
function Qr(e, t, n) {
	ee.call(this, e ?? "canceled", ee.ERR_CANCELED, t, n),
		(this.name = "CanceledError");
}
_.inherits(Qr, ee, { __CANCEL__: !0 });
function dm(e, t, n) {
	const r = n.config.validateStatus;
	!n.status || !r || r(n.status)
		? e(n)
		: t(
				new ee(
					"Request failed with status code " + n.status,
					[ee.ERR_BAD_REQUEST, ee.ERR_BAD_RESPONSE][
						Math.floor(n.status / 100) - 4
					],
					n.config,
					n.request,
					n,
				),
		  );
}
function Nw(e) {
	const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
	return (t && t[1]) || "";
}
function Sw(e, t) {
	e = e || 10;
	const n = new Array(e),
		r = new Array(e);
	let a = 0,
		s = 0,
		i;
	return (
		(t = t !== void 0 ? t : 1e3),
		function (u) {
			const c = Date.now(),
				d = r[s];
			i || (i = c), (n[a] = u), (r[a] = c);
			let p = s,
				m = 0;
			for (; p !== a; ) (m += n[p++]), (p = p % e);
			if (((a = (a + 1) % e), a === s && (s = (s + 1) % e), c - i < t)) return;
			const y = d && c - d;
			return y ? Math.round((m * 1e3) / y) : void 0;
		}
	);
}
function Cw(e, t) {
	let n = 0,
		r = 1e3 / t,
		a,
		s;
	const i = (c, d = Date.now()) => {
		(n = d), (a = null), s && (clearTimeout(s), (s = null)), e.apply(null, c);
	};
	return [
		(...c) => {
			const d = Date.now(),
				p = d - n;
			p >= r
				? i(c, d)
				: ((a = c),
				  s ||
						(s = setTimeout(() => {
							(s = null), i(a);
						}, r - p)));
		},
		() => a && i(a),
	];
}
const vl = (e, t, n = 3) => {
		let r = 0;
		const a = Sw(50, 250);
		return Cw((s) => {
			const i = s.loaded,
				o = s.lengthComputable ? s.total : void 0,
				u = i - r,
				c = a(u),
				d = i <= o;
			r = i;
			const p = {
				loaded: i,
				total: o,
				progress: o ? i / o : void 0,
				bytes: u,
				rate: c || void 0,
				estimated: c && o && d ? (o - i) / c : void 0,
				event: s,
				lengthComputable: o != null,
				[t ? "download" : "upload"]: !0,
			};
			e(p);
		}, n);
	},
	lf = (e, t) => {
		const n = e != null;
		return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
	},
	of =
		(e) =>
		(...t) =>
			_.asap(() => e(...t)),
	Ew = ht.hasStandardBrowserEnv
		? (function () {
				const t =
						ht.navigator && /(msie|trident)/i.test(ht.navigator.userAgent),
					n = document.createElement("a");
				let r;
				function a(s) {
					let i = s;
					return (
						t && (n.setAttribute("href", i), (i = n.href)),
						n.setAttribute("href", i),
						{
							href: n.href,
							protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
							host: n.host,
							search: n.search ? n.search.replace(/^\?/, "") : "",
							hash: n.hash ? n.hash.replace(/^#/, "") : "",
							hostname: n.hostname,
							port: n.port,
							pathname:
								n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
						}
					);
				}
				return (
					(r = a(window.location.href)),
					function (i) {
						const o = _.isString(i) ? a(i) : i;
						return o.protocol === r.protocol && o.host === r.host;
					}
				);
		  })()
		: (function () {
				return function () {
					return !0;
				};
		  })(),
	kw = ht.hasStandardBrowserEnv
		? {
				write(e, t, n, r, a, s) {
					const i = [e + "=" + encodeURIComponent(t)];
					_.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
						_.isString(r) && i.push("path=" + r),
						_.isString(a) && i.push("domain=" + a),
						s === !0 && i.push("secure"),
						(document.cookie = i.join("; "));
				},
				read(e) {
					const t = document.cookie.match(
						new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
					);
					return t ? decodeURIComponent(t[3]) : null;
				},
				remove(e) {
					this.write(e, "", Date.now() - 864e5);
				},
		  }
		: {
				write() {},
				read() {
					return null;
				},
				remove() {},
		  };
function bw(e) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Pw(e, t) {
	return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function fm(e, t) {
	return e && !bw(t) ? Pw(e, t) : t;
}
const uf = (e) => (e instanceof pt ? { ...e } : e);
function or(e, t) {
	t = t || {};
	const n = {};
	function r(c, d, p) {
		return _.isPlainObject(c) && _.isPlainObject(d)
			? _.merge.call({ caseless: p }, c, d)
			: _.isPlainObject(d)
			? _.merge({}, d)
			: _.isArray(d)
			? d.slice()
			: d;
	}
	function a(c, d, p) {
		if (_.isUndefined(d)) {
			if (!_.isUndefined(c)) return r(void 0, c, p);
		} else return r(c, d, p);
	}
	function s(c, d) {
		if (!_.isUndefined(d)) return r(void 0, d);
	}
	function i(c, d) {
		if (_.isUndefined(d)) {
			if (!_.isUndefined(c)) return r(void 0, c);
		} else return r(void 0, d);
	}
	function o(c, d, p) {
		if (p in t) return r(c, d);
		if (p in e) return r(void 0, c);
	}
	const u = {
		url: s,
		method: s,
		data: s,
		baseURL: i,
		transformRequest: i,
		transformResponse: i,
		paramsSerializer: i,
		timeout: i,
		timeoutMessage: i,
		withCredentials: i,
		withXSRFToken: i,
		adapter: i,
		responseType: i,
		xsrfCookieName: i,
		xsrfHeaderName: i,
		onUploadProgress: i,
		onDownloadProgress: i,
		decompress: i,
		maxContentLength: i,
		maxBodyLength: i,
		beforeRedirect: i,
		transport: i,
		httpAgent: i,
		httpsAgent: i,
		cancelToken: i,
		socketPath: i,
		responseEncoding: i,
		validateStatus: o,
		headers: (c, d) => a(uf(c), uf(d), !0),
	};
	return (
		_.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
			const p = u[d] || a,
				m = p(e[d], t[d], d);
			(_.isUndefined(m) && p !== o) || (n[d] = m);
		}),
		n
	);
}
const hm = (e) => {
		const t = or({}, e);
		let {
			data: n,
			withXSRFToken: r,
			xsrfHeaderName: a,
			xsrfCookieName: s,
			headers: i,
			auth: o,
		} = t;
		(t.headers = i = pt.from(i)),
			(t.url = im(fm(t.baseURL, t.url), e.params, e.paramsSerializer)),
			o &&
				i.set(
					"Authorization",
					"Basic " +
						btoa(
							(o.username || "") +
								":" +
								(o.password ? unescape(encodeURIComponent(o.password)) : ""),
						),
				);
		let u;
		if (_.isFormData(n)) {
			if (ht.hasStandardBrowserEnv || ht.hasStandardBrowserWebWorkerEnv)
				i.setContentType(void 0);
			else if ((u = i.getContentType()) !== !1) {
				const [c, ...d] = u
					? u
							.split(";")
							.map((p) => p.trim())
							.filter(Boolean)
					: [];
				i.setContentType([c || "multipart/form-data", ...d].join("; "));
			}
		}
		if (
			ht.hasStandardBrowserEnv &&
			(r && _.isFunction(r) && (r = r(t)), r || (r !== !1 && Ew(t.url)))
		) {
			const c = a && s && kw.read(s);
			c && i.set(a, c);
		}
		return t;
	},
	Rw = typeof XMLHttpRequest < "u",
	_w =
		Rw &&
		function (e) {
			return new Promise(function (n, r) {
				const a = hm(e);
				let s = a.data;
				const i = pt.from(a.headers).normalize();
				let { responseType: o, onUploadProgress: u, onDownloadProgress: c } = a,
					d,
					p,
					m,
					y,
					j;
				function g() {
					y && y(),
						j && j(),
						a.cancelToken && a.cancelToken.unsubscribe(d),
						a.signal && a.signal.removeEventListener("abort", d);
				}
				let S = new XMLHttpRequest();
				S.open(a.method.toUpperCase(), a.url, !0), (S.timeout = a.timeout);
				function v() {
					if (!S) return;
					const x = pt.from(
							"getAllResponseHeaders" in S && S.getAllResponseHeaders(),
						),
						w = {
							data:
								!o || o === "text" || o === "json"
									? S.responseText
									: S.response,
							status: S.status,
							statusText: S.statusText,
							headers: x,
							config: e,
							request: S,
						};
					dm(
						function (L) {
							n(L), g();
						},
						function (L) {
							r(L), g();
						},
						w,
					),
						(S = null);
				}
				"onloadend" in S
					? (S.onloadend = v)
					: (S.onreadystatechange = function () {
							!S ||
								S.readyState !== 4 ||
								(S.status === 0 &&
									!(S.responseURL && S.responseURL.indexOf("file:") === 0)) ||
								setTimeout(v);
					  }),
					(S.onabort = function () {
						S &&
							(r(new ee("Request aborted", ee.ECONNABORTED, e, S)), (S = null));
					}),
					(S.onerror = function () {
						r(new ee("Network Error", ee.ERR_NETWORK, e, S)), (S = null);
					}),
					(S.ontimeout = function () {
						let E = a.timeout
							? "timeout of " + a.timeout + "ms exceeded"
							: "timeout exceeded";
						const w = a.transitional || om;
						a.timeoutErrorMessage && (E = a.timeoutErrorMessage),
							r(
								new ee(
									E,
									w.clarifyTimeoutError ? ee.ETIMEDOUT : ee.ECONNABORTED,
									e,
									S,
								),
							),
							(S = null);
					}),
					s === void 0 && i.setContentType(null),
					"setRequestHeader" in S &&
						_.forEach(i.toJSON(), function (E, w) {
							S.setRequestHeader(w, E);
						}),
					_.isUndefined(a.withCredentials) ||
						(S.withCredentials = !!a.withCredentials),
					o && o !== "json" && (S.responseType = a.responseType),
					c && (([m, j] = vl(c, !0)), S.addEventListener("progress", m)),
					u &&
						S.upload &&
						(([p, y] = vl(u)),
						S.upload.addEventListener("progress", p),
						S.upload.addEventListener("loadend", y)),
					(a.cancelToken || a.signal) &&
						((d = (x) => {
							S &&
								(r(!x || x.type ? new Qr(null, e, S) : x),
								S.abort(),
								(S = null));
						}),
						a.cancelToken && a.cancelToken.subscribe(d),
						a.signal &&
							(a.signal.aborted ? d() : a.signal.addEventListener("abort", d)));
				const f = Nw(a.url);
				if (f && ht.protocols.indexOf(f) === -1) {
					r(new ee("Unsupported protocol " + f + ":", ee.ERR_BAD_REQUEST, e));
					return;
				}
				S.send(s || null);
			});
		},
	Lw = (e, t) => {
		const { length: n } = (e = e ? e.filter(Boolean) : []);
		if (t || n) {
			let r = new AbortController(),
				a;
			const s = function (c) {
				if (!a) {
					(a = !0), o();
					const d = c instanceof Error ? c : this.reason;
					r.abort(
						d instanceof ee ? d : new Qr(d instanceof Error ? d.message : d),
					);
				}
			};
			let i =
				t &&
				setTimeout(() => {
					(i = null), s(new ee(`timeout ${t} of ms exceeded`, ee.ETIMEDOUT));
				}, t);
			const o = () => {
				e &&
					(i && clearTimeout(i),
					(i = null),
					e.forEach((c) => {
						c.unsubscribe
							? c.unsubscribe(s)
							: c.removeEventListener("abort", s);
					}),
					(e = null));
			};
			e.forEach((c) => c.addEventListener("abort", s));
			const { signal: u } = r;
			return (u.unsubscribe = () => _.asap(o)), u;
		}
	},
	Ow = function* (e, t) {
		let n = e.byteLength;
		if (n < t) {
			yield e;
			return;
		}
		let r = 0,
			a;
		for (; r < n; ) (a = r + t), yield e.slice(r, a), (r = a);
	},
	Tw = async function* (e, t) {
		for await (const n of Dw(e)) yield* Ow(n, t);
	},
	Dw = async function* (e) {
		if (e[Symbol.asyncIterator]) {
			yield* e;
			return;
		}
		const t = e.getReader();
		try {
			for (;;) {
				const { done: n, value: r } = await t.read();
				if (n) break;
				yield r;
			}
		} finally {
			await t.cancel();
		}
	},
	cf = (e, t, n, r) => {
		const a = Tw(e, t);
		let s = 0,
			i,
			o = (u) => {
				i || ((i = !0), r && r(u));
			};
		return new ReadableStream(
			{
				async pull(u) {
					try {
						const { done: c, value: d } = await a.next();
						if (c) {
							o(), u.close();
							return;
						}
						let p = d.byteLength;
						if (n) {
							let m = (s += p);
							n(m);
						}
						u.enqueue(new Uint8Array(d));
					} catch (c) {
						throw (o(c), c);
					}
				},
				cancel(u) {
					return o(u), a.return();
				},
			},
			{ highWaterMark: 2 },
		);
	},
	Hl =
		typeof fetch == "function" &&
		typeof Request == "function" &&
		typeof Response == "function",
	pm = Hl && typeof ReadableStream == "function",
	Aw =
		Hl &&
		(typeof TextEncoder == "function"
			? (
					(e) => (t) =>
						e.encode(t)
			  )(new TextEncoder())
			: async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
	mm = (e, ...t) => {
		try {
			return !!e(...t);
		} catch {
			return !1;
		}
	},
	Fw =
		pm &&
		mm(() => {
			let e = !1;
			const t = new Request(ht.origin, {
				body: new ReadableStream(),
				method: "POST",
				get duplex() {
					return (e = !0), "half";
				},
			}).headers.has("Content-Type");
			return e && !t;
		}),
	df = 64 * 1024,
	Bo = pm && mm(() => _.isReadableStream(new Response("").body)),
	yl = { stream: Bo && ((e) => e.body) };
Hl &&
	((e) => {
		["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
			!yl[t] &&
				(yl[t] = _.isFunction(e[t])
					? (n) => n[t]()
					: (n, r) => {
							throw new ee(
								`Response type '${t}' is not supported`,
								ee.ERR_NOT_SUPPORT,
								r,
							);
					  });
		});
	})(new Response());
const Mw = async (e) => {
		if (e == null) return 0;
		if (_.isBlob(e)) return e.size;
		if (_.isSpecCompliantForm(e))
			return (
				await new Request(ht.origin, { method: "POST", body: e }).arrayBuffer()
			).byteLength;
		if (_.isArrayBufferView(e) || _.isArrayBuffer(e)) return e.byteLength;
		if ((_.isURLSearchParams(e) && (e = e + ""), _.isString(e)))
			return (await Aw(e)).byteLength;
	},
	zw = async (e, t) => {
		const n = _.toFiniteNumber(e.getContentLength());
		return n ?? Mw(t);
	},
	Iw =
		Hl &&
		(async (e) => {
			let {
				url: t,
				method: n,
				data: r,
				signal: a,
				cancelToken: s,
				timeout: i,
				onDownloadProgress: o,
				onUploadProgress: u,
				responseType: c,
				headers: d,
				withCredentials: p = "same-origin",
				fetchOptions: m,
			} = hm(e);
			c = c ? (c + "").toLowerCase() : "text";
			let y = Lw([a, s && s.toAbortSignal()], i),
				j;
			const g =
				y &&
				y.unsubscribe &&
				(() => {
					y.unsubscribe();
				});
			let S;
			try {
				if (
					u &&
					Fw &&
					n !== "get" &&
					n !== "head" &&
					(S = await zw(d, r)) !== 0
				) {
					let w = new Request(t, { method: "POST", body: r, duplex: "half" }),
						P;
					if (
						(_.isFormData(r) &&
							(P = w.headers.get("content-type")) &&
							d.setContentType(P),
						w.body)
					) {
						const [L, k] = lf(S, vl(of(u)));
						r = cf(w.body, df, L, k);
					}
				}
				_.isString(p) || (p = p ? "include" : "omit");
				const v = "credentials" in Request.prototype;
				j = new Request(t, {
					...m,
					signal: y,
					method: n.toUpperCase(),
					headers: d.normalize().toJSON(),
					body: r,
					duplex: "half",
					credentials: v ? p : void 0,
				});
				let f = await fetch(j);
				const x = Bo && (c === "stream" || c === "response");
				if (Bo && (o || (x && g))) {
					const w = {};
					["status", "statusText", "headers"].forEach((M) => {
						w[M] = f[M];
					});
					const P = _.toFiniteNumber(f.headers.get("content-length")),
						[L, k] = (o && lf(P, vl(of(o), !0))) || [];
					f = new Response(
						cf(f.body, df, L, () => {
							k && k(), g && g();
						}),
						w,
					);
				}
				c = c || "text";
				let E = await yl[_.findKey(yl, c) || "text"](f, e);
				return (
					!x && g && g(),
					await new Promise((w, P) => {
						dm(w, P, {
							data: E,
							headers: pt.from(f.headers),
							status: f.status,
							statusText: f.statusText,
							config: e,
							request: j,
						});
					})
				);
			} catch (v) {
				throw (
					(g && g(),
					v && v.name === "TypeError" && /fetch/i.test(v.message)
						? Object.assign(new ee("Network Error", ee.ERR_NETWORK, e, j), {
								cause: v.cause || v,
						  })
						: ee.from(v, v && v.code, e, j))
				);
			}
		}),
	$o = { http: ew, xhr: _w, fetch: Iw };
_.forEach($o, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", { value: t });
		} catch {}
		Object.defineProperty(e, "adapterName", { value: t });
	}
});
const ff = (e) => `- ${e}`,
	Uw = (e) => _.isFunction(e) || e === null || e === !1,
	gm = {
		getAdapter: (e) => {
			e = _.isArray(e) ? e : [e];
			const { length: t } = e;
			let n, r;
			const a = {};
			for (let s = 0; s < t; s++) {
				n = e[s];
				let i;
				if (
					((r = n),
					!Uw(n) && ((r = $o[(i = String(n)).toLowerCase()]), r === void 0))
				)
					throw new ee(`Unknown adapter '${i}'`);
				if (r) break;
				a[i || "#" + s] = r;
			}
			if (!r) {
				const s = Object.entries(a).map(
					([o, u]) =>
						`adapter ${o} ` +
						(u === !1
							? "is not supported by the environment"
							: "is not available in the build"),
				);
				let i = t
					? s.length > 1
						? `since :
` +
						  s.map(ff).join(`
`)
						: " " + ff(s[0])
					: "as no adapter specified";
				throw new ee(
					"There is no suitable adapter to dispatch the request " + i,
					"ERR_NOT_SUPPORT",
				);
			}
			return r;
		},
		adapters: $o,
	};
function bi(e) {
	if (
		(e.cancelToken && e.cancelToken.throwIfRequested(),
		e.signal && e.signal.aborted)
	)
		throw new Qr(null, e);
}
function hf(e) {
	return (
		bi(e),
		(e.headers = pt.from(e.headers)),
		(e.data = ki.call(e, e.transformRequest)),
		["post", "put", "patch"].indexOf(e.method) !== -1 &&
			e.headers.setContentType("application/x-www-form-urlencoded", !1),
		gm
			.getAdapter(e.adapter || es.adapter)(e)
			.then(
				function (r) {
					return (
						bi(e),
						(r.data = ki.call(e, e.transformResponse, r)),
						(r.headers = pt.from(r.headers)),
						r
					);
				},
				function (r) {
					return (
						cm(r) ||
							(bi(e),
							r &&
								r.response &&
								((r.response.data = ki.call(
									e,
									e.transformResponse,
									r.response,
								)),
								(r.response.headers = pt.from(r.response.headers)))),
						Promise.reject(r)
					);
				},
			)
	);
}
const vm = "1.7.7",
	dc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
	(e, t) => {
		dc[e] = function (r) {
			return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
		};
	},
);
const pf = {};
dc.transitional = function (t, n, r) {
	function a(s, i) {
		return (
			"[Axios v" +
			vm +
			"] Transitional option '" +
			s +
			"'" +
			i +
			(r ? ". " + r : "")
		);
	}
	return (s, i, o) => {
		if (t === !1)
			throw new ee(
				a(i, " has been removed" + (n ? " in " + n : "")),
				ee.ERR_DEPRECATED,
			);
		return (
			n &&
				!pf[i] &&
				((pf[i] = !0),
				console.warn(
					a(
						i,
						" has been deprecated since v" +
							n +
							" and will be removed in the near future",
					),
				)),
			t ? t(s, i, o) : !0
		);
	};
};
function Bw(e, t, n) {
	if (typeof e != "object")
		throw new ee("options must be an object", ee.ERR_BAD_OPTION_VALUE);
	const r = Object.keys(e);
	let a = r.length;
	for (; a-- > 0; ) {
		const s = r[a],
			i = t[s];
		if (i) {
			const o = e[s],
				u = o === void 0 || i(o, s, e);
			if (u !== !0)
				throw new ee("option " + s + " must be " + u, ee.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new ee("Unknown option " + s, ee.ERR_BAD_OPTION);
	}
}
const Ho = { assertOptions: Bw, validators: dc },
	xn = Ho.validators;
class nr {
	constructor(t) {
		(this.defaults = t),
			(this.interceptors = { request: new af(), response: new af() });
	}
	async request(t, n) {
		try {
			return await this._request(t, n);
		} catch (r) {
			if (r instanceof Error) {
				let a;
				Error.captureStackTrace
					? Error.captureStackTrace((a = {}))
					: (a = new Error());
				const s = a.stack ? a.stack.replace(/^.+\n/, "") : "";
				try {
					r.stack
						? s &&
						  !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
						  (r.stack +=
								`
` + s)
						: (r.stack = s);
				} catch {}
			}
			throw r;
		}
	}
	_request(t, n) {
		typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
			(n = or(this.defaults, n));
		const { transitional: r, paramsSerializer: a, headers: s } = n;
		r !== void 0 &&
			Ho.assertOptions(
				r,
				{
					silentJSONParsing: xn.transitional(xn.boolean),
					forcedJSONParsing: xn.transitional(xn.boolean),
					clarifyTimeoutError: xn.transitional(xn.boolean),
				},
				!1,
			),
			a != null &&
				(_.isFunction(a)
					? (n.paramsSerializer = { serialize: a })
					: Ho.assertOptions(
							a,
							{ encode: xn.function, serialize: xn.function },
							!0,
					  )),
			(n.method = (n.method || this.defaults.method || "get").toLowerCase());
		let i = s && _.merge(s.common, s[n.method]);
		s &&
			_.forEach(
				["delete", "get", "head", "post", "put", "patch", "common"],
				(j) => {
					delete s[j];
				},
			),
			(n.headers = pt.concat(i, s));
		const o = [];
		let u = !0;
		this.interceptors.request.forEach(function (g) {
			(typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
				((u = u && g.synchronous), o.unshift(g.fulfilled, g.rejected));
		});
		const c = [];
		this.interceptors.response.forEach(function (g) {
			c.push(g.fulfilled, g.rejected);
		});
		let d,
			p = 0,
			m;
		if (!u) {
			const j = [hf.bind(this), void 0];
			for (
				j.unshift.apply(j, o),
					j.push.apply(j, c),
					m = j.length,
					d = Promise.resolve(n);
				p < m;

			)
				d = d.then(j[p++], j[p++]);
			return d;
		}
		m = o.length;
		let y = n;
		for (p = 0; p < m; ) {
			const j = o[p++],
				g = o[p++];
			try {
				y = j(y);
			} catch (S) {
				g.call(this, S);
				break;
			}
		}
		try {
			d = hf.call(this, y);
		} catch (j) {
			return Promise.reject(j);
		}
		for (p = 0, m = c.length; p < m; ) d = d.then(c[p++], c[p++]);
		return d;
	}
	getUri(t) {
		t = or(this.defaults, t);
		const n = fm(t.baseURL, t.url);
		return im(n, t.params, t.paramsSerializer);
	}
}
_.forEach(["delete", "get", "head", "options"], function (t) {
	nr.prototype[t] = function (n, r) {
		return this.request(
			or(r || {}, { method: t, url: n, data: (r || {}).data }),
		);
	};
});
_.forEach(["post", "put", "patch"], function (t) {
	function n(r) {
		return function (s, i, o) {
			return this.request(
				or(o || {}, {
					method: t,
					headers: r ? { "Content-Type": "multipart/form-data" } : {},
					url: s,
					data: i,
				}),
			);
		};
	}
	(nr.prototype[t] = n()), (nr.prototype[t + "Form"] = n(!0));
});
class fc {
	constructor(t) {
		if (typeof t != "function")
			throw new TypeError("executor must be a function.");
		let n;
		this.promise = new Promise(function (s) {
			n = s;
		});
		const r = this;
		this.promise.then((a) => {
			if (!r._listeners) return;
			let s = r._listeners.length;
			for (; s-- > 0; ) r._listeners[s](a);
			r._listeners = null;
		}),
			(this.promise.then = (a) => {
				let s;
				const i = new Promise((o) => {
					r.subscribe(o), (s = o);
				}).then(a);
				return (
					(i.cancel = function () {
						r.unsubscribe(s);
					}),
					i
				);
			}),
			t(function (s, i, o) {
				r.reason || ((r.reason = new Qr(s, i, o)), n(r.reason));
			});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(t) {
		if (this.reason) {
			t(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
	}
	unsubscribe(t) {
		if (!this._listeners) return;
		const n = this._listeners.indexOf(t);
		n !== -1 && this._listeners.splice(n, 1);
	}
	toAbortSignal() {
		const t = new AbortController(),
			n = (r) => {
				t.abort(r);
			};
		return (
			this.subscribe(n),
			(t.signal.unsubscribe = () => this.unsubscribe(n)),
			t.signal
		);
	}
	static source() {
		let t;
		return {
			token: new fc(function (a) {
				t = a;
			}),
			cancel: t,
		};
	}
}
function $w(e) {
	return function (n) {
		return e.apply(null, n);
	};
}
function Hw(e) {
	return _.isObject(e) && e.isAxiosError === !0;
}
const Vo = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
};
Object.entries(Vo).forEach(([e, t]) => {
	Vo[t] = e;
});
function ym(e) {
	const t = new nr(e),
		n = Jp(nr.prototype.request, t);
	return (
		_.extend(n, nr.prototype, t, { allOwnKeys: !0 }),
		_.extend(n, t, null, { allOwnKeys: !0 }),
		(n.create = function (a) {
			return ym(or(e, a));
		}),
		n
	);
}
const ce = ym(es);
ce.Axios = nr;
ce.CanceledError = Qr;
ce.CancelToken = fc;
ce.isCancel = cm;
ce.VERSION = vm;
ce.toFormData = $l;
ce.AxiosError = ee;
ce.Cancel = ce.CanceledError;
ce.all = function (t) {
	return Promise.all(t);
};
ce.spread = $w;
ce.isAxiosError = Hw;
ce.mergeConfig = or;
ce.AxiosHeaders = pt;
ce.formToJSON = (e) => um(_.isHTMLForm(e) ? new FormData(e) : e);
ce.getAdapter = gm.getAdapter;
ce.HttpStatusCode = Vo;
ce.default = ce;
const In = { API_URL: "https://admin.inspirelife.in/v1/" },
	ie = async (e, t = {}) => {
		try {
			const n = In.API_URL + e;
			return await (
				await ce.post(n, t, { headers: { "Content-Type": "application/json" } })
			).data;
		} catch (n) {
			console.log("api-call-error", n);
		}
	},
	xm = (e) => `/dashboard/${e}`;
function en() {
	return l.jsx("div", {
		style: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			flex: 1,
			minHeight: 300,
			background: "#fff",
		},
		children: l.jsx("img", {
			src: "./img/loader.svg",
			alt: "Loader",
			width: 200,
			height: 100,
		}),
	});
}
function wm() {
	const { login: e } = h.useContext(we),
		[t, n] = h.useState([]),
		[r, a] = h.useState(!1),
		[s, i] = h.useState([]),
		o = 50,
		[u, c] = h.useState({ username: "", sponsor: "", rank: "-", created: "" }),
		[d, p] = h.useState([]);
	h.useEffect(() => {
		m();
	}, [e.id]);
	const m = async () => {
		a(!0);
		const g = await ie("users/dashboard", { user_id: e.id });
		g != null && g.success && (n(g.data.tiles), c(g.data.info)), a(!1);
	};
	h.useEffect(() => {
		y();
	}, [e.id, o]);
	const y = async () => {
		a(!0);
		let g = (await In.API_URL) + "users/pending-members";
		ce.post(g, { user_id: e.id, limit: 5 })
			.then((S) => {
				let v = S.data;
				v.success && (console.log(v.data), i(v.data));
			})
			.finally(() => a(!1));
	};
	h.useEffect(() => {
		j();
	}, [e.id]);
	const j = () => {
		ie("users/options", { user_id: e.id }).then((g) => {
			const S = g == null ? void 0 : g.data;
			p(S);
		});
	};
	return l.jsxs("div", {
		id: "adsview",
		children: [
			l.jsxs("div", {
				className: "page-header",
				children: [
					l.jsxs("h5", {
						children: [
							"Welcome ",
							l.jsx("b", { children: e.first_name + " " + e.last_name }),
						],
					}),
					l.jsxs(_e, {
						to: "/signup/?ref=" + e.username,
						target: "_blank",
						className: "btn  btn-primary",
						children: [l.jsx(lc, {}), " Add New Member"],
					}),
				],
			}),
			d &&
				l.jsx("div", {
					className: "alert alert-danger row m-2",
					children: l.jsx("div", {
						className: "overflow-hidden",
						children: l.jsx("div", {
							className: "scrolling-text",
							children: d.message,
						}),
					}),
				}),
			l.jsxs("div", {
				className: "row mb-3",
				children: [
					l.jsxs("div", {
						className: "col-sm-4",
						children: [
							e.ac_status == 1
								? l.jsxs("div", {
										className:
											"bg-success text-white p-3 rounded-1 mb-2 d-flex justify-content-between align-items-center",
										children: [
											l.jsx("div", {
												children: l.jsx("span", { children: "Account Active" }),
											}),
											l.jsxs("div", { children: ["Rank: ", u.rank] }),
										],
								  })
								: l.jsxs("div", {
										className:
											"bg-danger text-white p-3 rounded-1 mb-2 d-flex justify-content-between align-items-center",
										children: [
											l.jsx("div", {
												children: l.jsx("span", {
													children: "Account Not Active",
												}),
											}),
											l.jsx("div", {
												children: l.jsx(_e, {
													to: "/dashboard/topup-account",
													className: "btn  btn-warning",
													children: "Activate",
												}),
											}),
										],
								  }),
							l.jsx("div", {
								className: "bg-white p-2 shadow-sm rounded",
								children: l.jsx("table", {
									className: "table m-0 table-striped",
									children: l.jsxs("tbody", {
										children: [
											l.jsxs("tr", {
												children: [
													l.jsx("td", { children: "Username" }),
													l.jsx("td", { children: u.username }),
												],
											}),
											l.jsxs("tr", {
												children: [
													l.jsx("td", { children: "Sponsor Id" }),
													l.jsx("td", { children: u.sponsor }),
												],
											}),
											l.jsxs("tr", {
												children: [
													l.jsx("td", { children: "Created" }),
													l.jsx("td", { children: u.created }),
												],
											}),
										],
									}),
								}),
							}),
						],
					}),
					l.jsx("div", {
						className: "col-sm-8",
						children: r
							? l.jsx(en, {})
							: l.jsx("div", {
									className: "row g-2",
									children: t.map((g, S) =>
										l.jsx(
											"div",
											{
												className: "col-6 col-sm-4",
												children: l.jsx("div", {
													className: "card p-3 card-tiles",
													children: l.jsxs("div", {
														className: "box-p",
														children: [
															l.jsx("p", { children: g.label }),
															l.jsx("h4", { children: g.value }),
														],
													}),
												}),
											},
											S,
										),
									),
							  }),
					}),
				],
			}),
			d &&
				l.jsxs("div", {
					className: "alert alert-info p-2 my-1",
					children: [
						d.zoom_info &&
							l.jsx("p", { className: "mb-2", children: d.zoom_info }),
						d.zoom_link &&
							l.jsx("a", {
								href: d.zoom_link,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn btn-sm btn-primary",
								children: "Join Now",
							}),
					],
				}),
			l.jsx("h5", { children: "Recent Members" }),
			l.jsx("div", {
				className: "card p-3",
				children: l.jsxs("table", {
					className: "table m-0",
					children: [
						l.jsx("thead", {
							children: l.jsxs("tr", {
								children: [
									l.jsx("th", { children: "Sl" }),
									l.jsx("th", { children: "Username" }),
									l.jsx("th", { children: "Name" }),
									l.jsx("th", { children: "Mobile Number" }),
									l.jsx("th", { children: "Created" }),
									l.jsx("th", { children: "Activate" }),
								],
							}),
						}),
						l.jsx("tbody", {
							children:
								s.length > 0
									? s.map((g, S) =>
											l.jsxs(
												"tr",
												{
													children: [
														l.jsx("td", { children: S + 1 }),
														l.jsx("td", { children: g.username }),
														l.jsx("td", {
															children: `${g.first_name} ${g.last_name}`,
														}),
														l.jsx("td", { children: g.mobile }),
														l.jsx("td", { children: g.created }),
														l.jsx("td", {
															children: l.jsx(_e, {
																to: "topup-account/?ref=" + g.username,
																className: "btn  btn-primary",
																children: "Activate",
															}),
														}),
													],
												},
												S,
											),
									  )
									: l.jsx("tr", {
											children: l.jsx("td", {
												colSpan: 6,
												className: "text-center",
												children: "No Data Found",
											}),
									  }),
						}),
					],
				}),
			}),
		],
	});
}
function mf() {
	const { login: e } = h.useContext(we),
		t = qr(),
		n = pn();
	return (
		h.useEffect(() => {
			e.id == 0 && t("/login");
		}, [e.id]),
		l.jsxs("div", {
			id: "wrapper",
			children: [
				l.jsx(p1, {}),
				l.jsxs("div", {
					id: "content-wrapper",
					className: "d-flex flex-column",
					children: [
						l.jsxs("div", {
							className:
								"bg-primary p-3 d-flex justify-content-between align-items-center text-white",
							children: [
								l.jsxs("div", {
									children: [
										l.jsx("div", {
											children: l.jsx("b", {
												children: e.first_name + " " + e.last_name,
											}),
										}),
										l.jsx("div", { children: e.username }),
									],
								}),
								l.jsx(_e, {
									to: "/logout",
									className: "btn btn-xs btn-outline-light",
									children: "Logout",
								}),
							],
						}),
						l.jsxs("div", {
							id: "content",
							className: "p-3",
							children: [n.pathname == "/" && l.jsx(wm, {}), l.jsx(H0, {})],
						}),
					],
				}),
			],
		})
	);
}
function Vw() {
	const { login: e } = h.useContext(we),
		[t, n] = h.useState(0),
		[r, a] = h.useState(0),
		[s, i] = h.useState(0),
		[o, u] = h.useState({ type: "", message: "" });
	h.useEffect(() => {
		c();
	}, [e.id, s]);
	const c = async () => {
		ie("users/get-balance-info", { user_id: e.id }).then((m) => {
			m != null && m.success && n(m == null ? void 0 : m.data.main_balance);
		});
	};
	h.useEffect(() => {
		d();
	}, [e.id, s]);
	const d = async () => {
			s > 0
				? ie("users/withdrawal-fee", { user_id: e.id, amount: s }).then((m) => {
						if (m != null && m.success) {
							const y = (s * 0.1).toFixed(2);
							a(parseFloat(y));
						}
				  })
				: a(0);
		},
		p = () => {
			if ((u({ ...o, message: "ggg" }), s <= 0)) {
				u({ type: "danger", message: "Please enter amount" });
				return;
			} else if (s > t) {
				u({ type: "danger", message: "In-sufficient wallet balance" });
				return;
			}
			ie("users/withdraw", { user_id: e.id, amount: s }).then((m) => {
				m.success
					? u({ type: "success", message: m.message })
					: u({ type: "danger", message: m.message });
			});
		};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: "Fund Withdraw" }),
			}),
			l.jsx("div", {
				className: "row",
				children: l.jsxs("div", {
					className: "col-sm-6 m-auto",
					children: [
						o.message.length > 0 &&
							l.jsx("div", {
								className: "alert alert-" + o.type,
								children: o.message,
							}),
						l.jsxs("div", {
							className: "bg-3 bg-white rounded mybox",
							children: [
								l.jsx("div", {
									className: "box-body border-bottom",
									children: l.jsx("div", {
										className: "row g-2 text-center",
										children: l.jsx("div", {
											className: "col",
											children: l.jsxs("div", {
												className: "py-4 bg-light",
												children: [
													l.jsx("h6", { children: "Main Balance" }),
													l.jsxs("h2", {
														className: "mb-0",
														children: [" ", t],
													}),
												],
											}),
										}),
									}),
								}),
								l.jsxs("div", {
									className: "box-body",
									children: [
										l.jsxs("div", {
											className: "mb-3 row",
											children: [
												l.jsxs("label", {
													className: "col-sm-4 control-label col-form-label",
													children: [" ", "Withdrawal Amount"],
												}),
												l.jsxs("div", {
													className: "col-sm-6",
													children: [
														l.jsx("input", {
															type: "number",
															value: s,
															onChange: (m) => i(parseInt(m.target.value)),
															placeholder: "e.g.",
															className: "form-control",
														}),
														l.jsx("small", {
															className: "text-muted",
															children: "Min withdrawal INR ",
														}),
													],
												}),
											],
										}),
										l.jsxs("div", {
											className: "row mb-3",
											children: [
												l.jsxs("label", {
													className: "col-sm-4 control-label col-form-label",
													children: [" ", "Processing Fee (10%)"],
												}),
												l.jsx("div", {
													className: "col-sm-6",
													children: l.jsx("input", {
														disabled: !0,
														value: r.toFixed(2),
														className: "form-control",
													}),
												}),
											],
										}),
										l.jsxs("div", {
											className: "row mb-3",
											children: [
												l.jsxs("label", {
													className: "col-sm-4 control-label col-form-label",
													children: [" ", "Net Payment"],
												}),
												l.jsx("div", {
													className: "col-sm-6",
													children: l.jsx("input", {
														disabled: !0,
														value: (s - r).toFixed(2),
														className: "form-control",
													}),
												}),
											],
										}),
										l.jsxs("div", {
											className: "row mb-3",
											children: [
												l.jsx("label", {
													className: "col-sm-4 control-label col-form-label",
													children: " ",
												}),
												l.jsx("div", {
													className: "col-sm-6",
													children: l.jsx("button", {
														className: "btn btn-primary",
														onClick: p,
														children: "Submit",
													}),
												}),
											],
										}),
									],
								}),
							],
						}),
					],
				}),
			}),
		],
	});
}
function Ww() {
	const [e, t] = h.useState(!0),
		[n, r] = h.useState([]),
		{ login: a } = h.useContext(we);
	h.useEffect(() => {
		i();
	}, [a.id, 50]);
	const i = () => {
		t(!0),
			ie("users/withdraw-history", { user_id: a.id, page: 1, type: "sponsor" })
				.then((o) => {
					if (o.success) {
						const u = o.data;
						r(u.items);
					}
				})
				.finally(() => t(!1));
	};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: "Withdraw History" }),
			}),
			l.jsxs("div", {
				className: "card",
				children: [
					l.jsx("div", {
						className: "card-header",
						children: l.jsx("b", { children: "List" }),
					}),
					e && l.jsx(en, {}),
					l.jsxs("table", {
						className: "table",
						children: [
							l.jsx("thead", {
								children: l.jsxs("tr", {
									children: [
										l.jsx("th", { children: "Sl No" }),
										l.jsx("th", { children: "Amount" }),
										l.jsx("th", { children: "Status" }),
										l.jsx("th", { children: "Comments" }),
										l.jsx("th", { children: "Created" }),
									],
								}),
							}),
							l.jsx("tbody", {
								children:
									n.length > 0
										? n.map((o, u) =>
												l.jsxs(
													"tr",
													{
														children: [
															l.jsx("td", { children: u + 1 }),
															l.jsx("td", { children: o.amount }),
															l.jsx("td", { children: o.status }),
															l.jsx("td", { children: o.comments }),
															l.jsx("td", { children: o.created }),
															l.jsxs("td", {
																children: [
																	o.status == 0 &&
																		l.jsx("span", {
																			className: "badge bg-warning",
																			children: "Pending",
																		}),
																	o.status == 1 &&
																		l.jsx("span", {
																			className: "badge bg-success",
																			children: "Approved",
																		}),
																	o.status == 2 &&
																		l.jsx("span", {
																			className: "badge bg-danger",
																			children: "Declined",
																		}),
																],
															}),
														],
													},
													o.id,
												),
										  )
										: l.jsx("tr", {
												children: l.jsx("td", {
													colSpan: 5,
													className: "text-center",
													children: "No Data Found",
												}),
										  }),
							}),
						],
					}),
				],
			}),
		],
	});
}
function Pi(e) {
	const { login: t } = h.useContext(we),
		[n, r] = h.useState([]);
	h.useEffect(() => {
		a();
	}, [e.users, t.id]);
	const a = () => {
		e.users === "direct"
			? ie("users/direct-members", { user_id: t.id }).then((s) => {
					s != null && s.success ? r(s.data) : r([]);
			  })
			: e.users === "downline"
			? ie("users/downline-members", { user_id: t.id }).then((s) => {
					s != null && s.success ? r(s.data) : r([]);
			  })
			: r([]);
	};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: e.title }),
			}),
			l.jsxs("div", {
				className: "card",
				children: [
					l.jsx("div", { className: "card-header", children: "List" }),
					l.jsxs("table", {
						className: "table",
						children: [
							l.jsx("thead", {
								children: l.jsxs("tr", {
									children: [
										l.jsx("th", { children: "Sl" }),
										l.jsx("th", { children: "Name" }),
										l.jsx("th", { children: "Username" }),
										l.jsx("th", { children: "Sponsorid" }),
										l.jsx("th", { children: "Mobile" }),
										l.jsx("th", { children: "Position" }),
										l.jsx("th", { children: "Created" }),
										l.jsx("th", { children: "Action" }),
									],
								}),
							}),
							l.jsx("tbody", {
								children:
									n.length > 0
										? n.map((s, i) =>
												l.jsxs(
													"tr",
													{
														children: [
															l.jsx("td", { children: i + 1 }),
															l.jsx("td", {
																children: s.first_name + " " + s.last_name,
															}),
															l.jsxs("td", { children: [s.username, " "] }),
															l.jsxs("td", { children: [s.sponsor, " "] }),
															l.jsxs("td", { children: [s.mobile, " "] }),
															l.jsx("td", {
																children:
																	e.users === "downline"
																		? s.position === 1
																			? "LEFT"
																			: "RIGHT"
																		: "Direct Member",
															}),
															l.jsx("td", { children: s.created }),
															l.jsx("td", {
																children:
																	s.ac_status === 1
																		? l.jsx("span", {
																				className: "badge bg-success",
																				children: "Active",
																		  })
																		: l.jsx("span", {
																				className: "badge bg-danger",
																				children: "Pending",
																		  }),
															}),
														],
													},
													s.id,
												),
										  )
										: l.jsx("tr", {
												children: l.jsx("td", {
													colSpan: 8,
													className: "text-center",
													children: "No Data Found",
												}),
										  }),
							}),
						],
					}),
				],
			}),
		],
	});
}
const qw = () =>
	l.jsx("div", {
		className: "p-8",
		children: l.jsxs("div", {
			className: "page-header",
			children: [
				l.jsx("h5", { children: "Support with us" }),
				l.jsxs("div", {
					children: [
						l.jsx(_e, {
							to: "/dashboard/new-ticket",
							className: "btn btn-primary ",
							children: "New Tickets",
						}),
						l.jsx(_e, {
							to: "/dashboard/close-ticket",
							className: "btn btn-secondary  mx-2",
							children: "Closed Tickets",
						}),
						l.jsx(_e, {
							to: "/dashboard/all-ticket",
							className: "btn btn-dark ",
							children: "All Tickets",
						}),
					],
				}),
			],
		}),
	});
function Kw() {
	const [e, t] = h.useState(0),
		{ login: n } = h.useContext(we),
		[r, a] = h.useState(!1),
		[s, i] = h.useState({ message: "", type: "" }),
		[o, u] = h.useState(""),
		[c, d] = h.useState(""),
		[p, m] = h.useState("0"),
		[y, j] = h.useState(!1),
		[g, S] = h.useState([]),
		[v] = Gu(),
		f = v.get("ref"),
		[x] = h.useState(!1);
	h.useEffect(() => {
		typeof f == "string" && u(f), E(), w();
	}, []);
	const E = async () => {
			ie("users/plans").then((k) => {
				S(k != null && k.success ? k.data : []);
			});
		},
		w = () => {
			ie("users/get-balance-info", { user_id: n.id }).then((k) => {
				k != null && k.success && t(k.data);
			});
		},
		P = () => {
			d(
				l.jsx("span", {
					className: "text-primary smalll",
					children: "Checking...",
				}),
			),
				ie("users/search", { username: o }).then((k) => {
					k != null && k.success
						? (d(
								l.jsxs("span", {
									className: "text-light smalll",
									children: [" ", k.data.first_name + " " + k.data.last_name],
								}),
						  ),
						  j(!0))
						: (d("Invalid Username"), j(!1));
				});
		},
		L = () => {
			if ((i({ ...s, message: "" }), !o.trim() || !y)) {
				i({ message: "Please fill in all required fields.", type: "danger" });
				return;
			}
			a(!0),
				ie("users/activate", {
					username: o,
					from_id: n.id,
					plan_id: parseInt(p),
					payfrom: e.selectedType,
				})
					.then((k) => {
						k != null && k.success
							? (i({ message: k.message, type: "success" }), w())
							: i({ message: k.message, type: "danger" });
					})
					.finally(() => a(!1));
		};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: "Account Activation" }),
			}),
			l.jsx("div", {
				className: "row",
				children: l.jsxs("div", {
					className: "col-sm-6 m-auto",
					children: [
						l.jsxs("div", {
							className: "box p-3 shadow-sm mb-2",
							children: [
								s.message.length > 0 &&
									l.jsx("div", {
										className: "alert alert-" + s.type,
										children: s.message,
									}),
								l.jsxs("div", {
									className: "card-body",
									children: [
										l.jsxs("div", {
											className: "mb-3 row",
											children: [
												l.jsx("label", {
													className: "col-sm-3",
													children: "Username",
												}),
												l.jsxs("div", {
													className: "col-sm-8",
													children: [
														l.jsxs("div", {
															className: "d-flex gap-2",
															children: [
																l.jsx("input", {
																	type: "text",
																	value: o,
																	onChange: (k) => u(k.target.value),
																	onBlur: () => P(),
																	className: "form-control",
																}),
																l.jsx("button", {
																	disabled: x,
																	onClick: P,
																	className: "btn btn-primary",
																	children: x ? "Searching..." : "Verify",
																}),
															],
														}),
														l.jsx("div", {
															className: `badge ${
																y
																	? "badge-success text-light"
																	: "badge-danger text-danger"
															}`,
															children: c || "Invalid Username",
														}),
													],
												}),
											],
										}),
										l.jsxs("div", {
											className: "mb-3 row",
											children: [
												l.jsx("label", {
													className: "col-sm-3",
													children: "Activation Amount",
												}),
												l.jsx("div", {
													className: "col-sm-8",
													children: l.jsxs("select", {
														value: e.selectedType || "0",
														onChange: (k) => {
															const M = k.target.value;
															t({ ...e, selectedType: M });
														},
														className: "form-select",
														children: [
															l.jsx("option", {
																value: "0",
																children: "Select",
															}),
															l.jsxs("option", {
																value: "main",
																children: [
																	"Main balance ",
																	e.main_balance || 0,
																],
															}),
															l.jsxs("option", {
																value: "fund",
																children: [
																	"Fund balance ",
																	e.fund_balance || 0,
																],
															}),
															l.jsxs("option", {
																value: "wallet",
																children: [
																	"Wallet balance ",
																	e.wallet_balance || 0,
																],
															}),
														],
													}),
												}),
											],
										}),
										l.jsxs("div", {
											className: "mb-3 row",
											children: [
												l.jsx("label", {
													className: "col-sm-3",
													children: "Activation Plans",
												}),
												l.jsx("div", {
													className: "col-sm-8",
													children: l.jsxs("select", {
														value: p,
														onChange: (k) => m(k.target.value),
														className: "form-select",
														children: [
															l.jsx("option", {
																value: "0",
																children: "Select",
															}),
															g.map((k) =>
																l.jsx(
																	"option",
																	{ value: k.plan_id, children: k.label },
																	k.plan_id,
																),
															),
														],
													}),
												}),
											],
										}),
										l.jsxs("div", {
											className: "row align-items-center",
											children: [
												l.jsx("label", { className: "col-sm-3" }),
												l.jsx("div", {
													className: "col-sm-8",
													children: l.jsx("button", {
														onClick: L,
														disabled: r || !y,
														className: "btn btn-primary",
														children: r ? "Please wait..." : "Activate",
													}),
												}),
											],
										}),
									],
								}),
							],
						}),
						l.jsxs("div", {
							className: "bg-danger p-2 text-white text-center",
							style: { borderRadius: 3 },
							children: [
								"Don't have sufficient Funds?",
								" ",
								l.jsx(_e, {
									className: "text-warning",
									to: "/dashboard/fund-request",
									children: "Click here",
								}),
							],
						}),
					],
				}),
			}),
		],
	});
}
var jm = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
	(function () {
		var t = {}.hasOwnProperty;
		function n() {
			for (var s = "", i = 0; i < arguments.length; i++) {
				var o = arguments[i];
				o && (s = a(s, r(o)));
			}
			return s;
		}
		function r(s) {
			if (typeof s == "string" || typeof s == "number") return s;
			if (typeof s != "object") return "";
			if (Array.isArray(s)) return n.apply(null, s);
			if (
				s.toString !== Object.prototype.toString &&
				!s.toString.toString().includes("[native code]")
			)
				return s.toString();
			var i = "";
			for (var o in s) t.call(s, o) && s[o] && (i = a(i, o));
			return i;
		}
		function a(s, i) {
			return i ? (s ? s + " " + i : s + i) : s;
		}
		e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
	})();
})(jm);
var Qw = jm.exports;
const Lt = xl(Qw),
	Jw = ["xxl", "xl", "lg", "md", "sm", "xs"],
	Yw = "xs",
	Gw = h.createContext({ prefixes: {}, breakpoints: Jw, minBreakpoint: Yw });
function Ht(e, t) {
	const { prefixes: n } = h.useContext(Gw);
	return e || n[t] || t;
}
const Nm = (e) =>
		h.forwardRef((t, n) =>
			l.jsx("div", { ...t, ref: n, className: Lt(t.className, e) }),
		),
	Xw = ["as", "disabled"];
function Zw(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e)
		if ({}.hasOwnProperty.call(e, r)) {
			if (t.indexOf(r) >= 0) continue;
			n[r] = e[r];
		}
	return n;
}
function ej(e) {
	return !e || e.trim() === "#";
}
function Sm({
	tagName: e,
	disabled: t,
	href: n,
	target: r,
	rel: a,
	role: s,
	onClick: i,
	tabIndex: o = 0,
	type: u,
}) {
	e || (n != null || r != null || a != null ? (e = "a") : (e = "button"));
	const c = { tagName: e };
	if (e === "button") return [{ type: u || "button", disabled: t }, c];
	const d = (m) => {
			if (((t || (e === "a" && ej(n))) && m.preventDefault(), t)) {
				m.stopPropagation();
				return;
			}
			i == null || i(m);
		},
		p = (m) => {
			m.key === " " && (m.preventDefault(), d(m));
		};
	return (
		e === "a" && (n || (n = "#"), t && (n = void 0)),
		[
			{
				role: s ?? "button",
				disabled: void 0,
				tabIndex: t ? void 0 : o,
				href: n,
				target: e === "a" ? r : void 0,
				"aria-disabled": t || void 0,
				rel: e === "a" ? a : void 0,
				onClick: d,
				onKeyDown: p,
			},
			c,
		]
	);
}
const tj = h.forwardRef((e, t) => {
	let { as: n, disabled: r } = e,
		a = Zw(e, Xw);
	const [s, { tagName: i }] = Sm(Object.assign({ tagName: n, disabled: r }, a));
	return l.jsx(i, Object.assign({}, a, s, { ref: t }));
});
tj.displayName = "Button";
const ur = h.forwardRef(
	(
		{
			as: e,
			bsPrefix: t,
			variant: n = "primary",
			size: r,
			active: a = !1,
			disabled: s = !1,
			className: i,
			...o
		},
		u,
	) => {
		const c = Ht(t, "btn"),
			[d, { tagName: p }] = Sm({ tagName: e, disabled: s, ...o }),
			m = p;
		return l.jsx(m, {
			...d,
			...o,
			ref: u,
			disabled: s,
			className: Lt(
				i,
				c,
				a && "active",
				n && `${c}-${n}`,
				r && `${c}-${r}`,
				o.href && s && "disabled",
			),
		});
	},
);
ur.displayName = "Button";
const hc = h.forwardRef(
	({ className: e, bsPrefix: t, as: n = "div", ...r }, a) => (
		(t = Ht(t, "card-body")), l.jsx(n, { ref: a, className: Lt(e, t), ...r })
	),
);
hc.displayName = "CardBody";
const Cm = h.forwardRef(
	({ className: e, bsPrefix: t, as: n = "div", ...r }, a) => (
		(t = Ht(t, "card-footer")), l.jsx(n, { ref: a, className: Lt(e, t), ...r })
	),
);
Cm.displayName = "CardFooter";
const Em = h.createContext(null);
Em.displayName = "CardHeaderContext";
const km = h.forwardRef(
	({ bsPrefix: e, className: t, as: n = "div", ...r }, a) => {
		const s = Ht(e, "card-header"),
			i = h.useMemo(() => ({ cardHeaderBsPrefix: s }), [s]);
		return l.jsx(Em.Provider, {
			value: i,
			children: l.jsx(n, { ref: a, ...r, className: Lt(t, s) }),
		});
	},
);
km.displayName = "CardHeader";
const bm = h.forwardRef(
	({ bsPrefix: e, className: t, variant: n, as: r = "img", ...a }, s) => {
		const i = Ht(e, "card-img");
		return l.jsx(r, { ref: s, className: Lt(n ? `${i}-${n}` : i, t), ...a });
	},
);
bm.displayName = "CardImg";
const Pm = h.forwardRef(
	({ className: e, bsPrefix: t, as: n = "div", ...r }, a) => (
		(t = Ht(t, "card-img-overlay")),
		l.jsx(n, { ref: a, className: Lt(e, t), ...r })
	),
);
Pm.displayName = "CardImgOverlay";
const Rm = h.forwardRef(
	({ className: e, bsPrefix: t, as: n = "a", ...r }, a) => (
		(t = Ht(t, "card-link")), l.jsx(n, { ref: a, className: Lt(e, t), ...r })
	),
);
Rm.displayName = "CardLink";
const nj = Nm("h6"),
	_m = h.forwardRef(
		({ className: e, bsPrefix: t, as: n = nj, ...r }, a) => (
			(t = Ht(t, "card-subtitle")),
			l.jsx(n, { ref: a, className: Lt(e, t), ...r })
		),
	);
_m.displayName = "CardSubtitle";
const Lm = h.forwardRef(
	({ className: e, bsPrefix: t, as: n = "p", ...r }, a) => (
		(t = Ht(t, "card-text")), l.jsx(n, { ref: a, className: Lt(e, t), ...r })
	),
);
Lm.displayName = "CardText";
const rj = Nm("h5"),
	Om = h.forwardRef(
		({ className: e, bsPrefix: t, as: n = rj, ...r }, a) => (
			(t = Ht(t, "card-title")), l.jsx(n, { ref: a, className: Lt(e, t), ...r })
		),
	);
Om.displayName = "CardTitle";
const Tm = h.forwardRef(
	(
		{
			bsPrefix: e,
			className: t,
			bg: n,
			text: r,
			border: a,
			body: s = !1,
			children: i,
			as: o = "div",
			...u
		},
		c,
	) => {
		const d = Ht(e, "card");
		return l.jsx(o, {
			ref: c,
			...u,
			className: Lt(t, d, n && `bg-${n}`, r && `text-${r}`, a && `border-${a}`),
			children: s ? l.jsx(hc, { children: i }) : i,
		});
	},
);
Tm.displayName = "Card";
const Wo = Object.assign(Tm, {
	Img: bm,
	Title: Om,
	Subtitle: _m,
	Body: hc,
	Link: Rm,
	Text: Lm,
	Header: km,
	Footer: Cm,
	ImgOverlay: Pm,
});
function aj() {
	const { login: e } = h.useContext(we),
		[t, n] = h.useState(!0),
		[r, a] = h.useState({
			first_name: "",
			last_name: "",
			email_id: "",
			mobile: "",
			city_name: "",
			address: "",
			district: "",
			bank_edit: 1,
			trc20_adrs: "",
			bank_name: "",
			bank_ac_number: "",
			bank_ac_name: "",
			bank_ifsc: "",
			bank_branch: "",
		}),
		[s, i] = h.useState(""),
		[o, u] = h.useState(!1),
		[c, d] = h.useState({ type: "info", message: "" }),
		p = qr();
	h.useEffect(() => {
		const y = () => {
			ie("users/userinfo", { user_id: e.id })
				.then((j) => {
					if (j != null && j.success) {
						let g = j.data;
						a({
							first_name: g.first_name,
							last_name: g.last_name,
							mobile: g.mobile,
							address: g.address,
							city_name: g.city_name,
							email_id: g.email_id,
							district: g.district,
							bank_edit: g.bank_edit,
							trc20_adrs: g.trc20_adrs,
							bank_name: g.bank_name,
							bank_ac_name: g.bank_ac_name,
							bank_ac_number: g.bank_ac_number,
							bank_ifsc: g.bank_ifsc,
							bank_branch: g.bank_branch,
						}),
							i(r.bank_ac_number);
					}
				})
				.finally(() => n(!1));
		};
		e.id > 0 && y();
	}, [e.id]);
	const m = () => {
		if (r.bank_ac_number != "" && r.bank_ac_number != s) {
			d({ type: "danger", message: "Plese re-enter correct bank account" });
			return;
		}
		u(!0),
			ie("users/update-profile", { user_id: e.id, user: r })
				.then((y) => {
					y != null && y.success
						? d({ type: "success", message: y.message })
						: d({ type: "danger", message: y == null ? void 0 : y.message });
				})
				.finally(() => u(!1));
	};
	return t
		? l.jsxs(l.Fragment, {
				children: [
					l.jsx("div", {
						className: "page-header",
						children: l.jsx("h5", { children: "Edit Profile" }),
					}),
					l.jsx("hr", {}),
					l.jsx(Wo, { children: l.jsx(en, {}) }),
				],
		  })
		: l.jsxs(l.Fragment, {
				children: [
					l.jsx("div", {
						className: "page-header",
						children: l.jsx("h5", { children: "Edit Profile" }),
					}),
					l.jsx("div", {
						className: "row",
						children: l.jsxs("div", {
							className: "col-sm-9",
							children: [
								typeof c.message == "string" &&
									(c == null ? void 0 : c.message.length) > 0 &&
									l.jsx("div", {
										className: "alert mb-2 alert-" + c.type,
										children: c.message,
									}),
								l.jsx(Wo, {
									children: l.jsxs("div", {
										className: "card-body",
										children: [
											l.jsx("h6", { children: "Personal Details" }),
											l.jsx("hr", {}),
											l.jsxs("div", {
												className: "form-group row",
												children: [
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"Name ",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-4",
														children: l.jsx("input", {
															value: r.first_name || "",
															disabled: !0,
															onChange: (y) =>
																a({ ...r, first_name: y.target.value }),
															className: "form-control",
														}),
													}),
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"Last name ",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-4",
														children: l.jsx("input", {
															value: r.last_name,
															onChange: (y) =>
																a({ ...r, last_name: y.target.value }),
															className: "form-control",
														}),
													}),
												],
											}),
											l.jsxs("div", {
												className: "form-group row",
												children: [
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"Email Id",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-4",
														children: l.jsx("input", {
															value: r.email_id,
															onChange: (y) =>
																a({ ...r, email_id: y.target.value }),
															className: "form-control",
														}),
													}),
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"Mobile no",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-4",
														children: l.jsx("input", {
															value: r.mobile,
															disabled: !0,
															onChange: (y) =>
																a({ ...r, mobile: y.target.value }),
															className: "form-control",
														}),
													}),
												],
											}),
											l.jsx("h6", { children: "Contact Details" }),
											l.jsx("hr", {}),
											l.jsxs("div", {
												className: "form-group row",
												children: [
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"City ",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-4",
														children: l.jsx("input", {
															value: r.city_name,
															onChange: (y) =>
																a({ ...r, city_name: y.target.value }),
															className: "form-control",
														}),
													}),
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"District ",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-4",
														children: l.jsx("input", {
															value: r.district,
															onChange: (y) =>
																a({ ...r, district: y.target.value }),
															className: "form-control",
														}),
													}),
												],
											}),
											l.jsxs("div", {
												className: "form-group row",
												children: [
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"Address ",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-10",
														children: l.jsx("input", {
															value: r.address,
															onChange: (y) =>
																a({ ...r, address: y.target.value }),
															className: "form-control",
														}),
													}),
												],
											}),
											l.jsx("h6", { children: "Bank Details" }),
											l.jsx("hr", {}),
											l.jsxs("div", {
												className: "form-group row",
												children: [
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"Bank Name ",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-4",
														children: l.jsx("input", {
															value: r.bank_name,
															disabled: r.bank_edit == 1,
															onChange: (y) =>
																a({ ...r, bank_name: y.target.value }),
															className: "form-control",
														}),
													}),
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"A/c Holder ",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-4",
														children: l.jsx("input", {
															value: r.bank_ac_name,
															disabled: r.bank_edit == 1,
															onChange: (y) =>
																a({ ...r, bank_ac_name: y.target.value }),
															className: "form-control",
														}),
													}),
												],
											}),
											l.jsxs("div", {
												className: "form-group row",
												children: [
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"Account Number ",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-4",
														children: l.jsx("input", {
															value: r.bank_ac_number,
															disabled: r.bank_edit == 1,
															onChange: (y) =>
																a({ ...r, bank_ac_number: y.target.value }),
															className: "form-control",
														}),
													}),
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"Confirm Account Number ",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-4",
														children: l.jsx("input", {
															value: s,
															disabled: r.bank_edit == 1,
															onChange: (y) => i(y.target.value),
															className: "form-control",
														}),
													}),
												],
											}),
											l.jsxs("div", {
												className: "form-group row",
												children: [
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"IFSC Code ",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-4",
														children: l.jsx("input", {
															value: r.bank_ifsc,
															disabled: r.bank_edit == 1,
															onChange: (y) =>
																a({ ...r, bank_ifsc: y.target.value }),
															className: "form-control",
														}),
													}),
													l.jsxs("label", {
														className: "col-sm-2 col-form-label",
														children: [
															"Branch ",
															l.jsx("span", {
																className: "required",
																children: "*",
															}),
														],
													}),
													l.jsx("div", {
														className: "col-sm-4",
														children: l.jsx("input", {
															value: r.bank_branch,
															disabled: r.bank_edit == 1,
															onChange: (y) =>
																a({ ...r, bank_branch: y.target.value }),
															className: "form-control",
														}),
													}),
												],
											}),
											l.jsxs("div", {
												className: "row",
												children: [
													l.jsx("label", { className: "col-sm-2" }),
													l.jsxs("div", {
														className: "col-sm-8",
														children: [
															l.jsx(ur, {
																onClick: m,
																disabled: o,
																className: "me-2",
																children: o ? "Please wait" : "UPDATE DETAILS",
															}),
															l.jsx(ur, {
																onClick: () => p("/"),
																color: "secondary",
																children: "CANCEL",
															}),
														],
													}),
												],
											}),
										],
									}),
								}),
							],
						}),
					}),
				],
		  });
}
function sj() {
	const { login: e } = h.useContext(we),
		[t, n] = h.useState({ oldpass: "", newpass: "", cnfpass: "" }),
		[r, a] = h.useState({ type: "", message: "" }),
		s = () => {
			if (t.oldpass == "" || t.newpass == "") {
				a({ type: "danger", message: "Please fill all fields" });
				return;
			}
			if (t.newpass != t.cnfpass) {
				a({
					type: "danger",
					message: "New password and Confirm password not matching",
				});
				return;
			}
			ie("users/change-password", {
				old_pass: t.oldpass,
				new_pass: t.newpass,
				user_id: e.id,
			}).then((i) => {
				i.success
					? (a({ type: "success", message: i.message }),
					  n({ oldpass: "", newpass: "", cnfpass: "" }))
					: a({ type: "danger", message: i.message });
			});
		};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: "Change Password" }),
			}),
			l.jsx("div", {
				className: "row",
				children: l.jsxs("div", {
					className: "col-sm-5",
					children: [
						r.message.length > 0 &&
							l.jsx("div", {
								className: "alert alert-" + r.type,
								children: r.message,
							}),
						l.jsxs("div", {
							className: "card p-3",
							children: [
								l.jsxs("div", {
									className: "mb-3",
									children: [
										l.jsx("label", {
											className: "mb-1",
											children: "Old Password",
										}),
										l.jsx("input", {
											type: "password",
											value: t.oldpass,
											onChange: (i) => n({ ...t, oldpass: i.target.value }),
											className: "form-control",
											placeholder: "Old Password",
										}),
									],
								}),
								l.jsxs("div", {
									className: "mb-3",
									children: [
										l.jsx("label", {
											className: "mb-1",
											children: "New Password",
										}),
										l.jsx("input", {
											type: "password",
											value: t.newpass,
											onChange: (i) => n({ ...t, newpass: i.target.value }),
											className: "form-control",
											placeholder: "New Password",
										}),
									],
								}),
								l.jsxs("div", {
									className: "mb-3",
									children: [
										l.jsx("label", {
											className: "mb-1",
											children: "Confirm Password",
										}),
										l.jsx("input", {
											type: "password",
											value: t.cnfpass,
											onChange: (i) => n({ ...t, cnfpass: i.target.value }),
											className: "form-control",
											placeholder: "Confirm Password",
										}),
									],
								}),
								l.jsx(ur, { onClick: s, children: "SUBMIT" }),
							],
						}),
					],
				}),
			}),
		],
	});
}
function lj() {
	const [e, t] = h.useState([]),
		[n, r] = h.useState(!0),
		{ login: a } = h.useContext(we);
	h.useEffect(() => {
		s();
	}, [a.id]);
	const s = async () => {
		r(!0),
			ie("users/deposit-history", { user_id: a.id })
				.then((i) => {
					i != null && i.success && t(i.data);
				})
				.finally(() => r(!1));
	};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: "Deposite History" }),
			}),
			l.jsxs(Wo, {
				children: [
					l.jsx("div", {
						className: "card-header",
						children: l.jsx("b", { children: "List" }),
					}),
					n && l.jsx(en, {}),
					!n &&
						l.jsxs("table", {
							className: "table",
							children: [
								l.jsx("thead", {
									children: l.jsxs("tr", {
										children: [
											l.jsx("th", { children: "Sl no" }),
											l.jsx("th", { children: "Amount" }),
											l.jsx("th", { children: "Txn No" }),
											l.jsx("th", { children: "Comments" }),
											l.jsx("th", { children: "Created" }),
											l.jsx("th", { children: "Status" }),
										],
									}),
								}),
								l.jsx("tbody", {
									children:
										e.length > 0
											? e.map((i, o) =>
													l.jsxs(
														"tr",
														{
															children: [
																l.jsx("td", { children: o + 1 }),
																l.jsx("td", { children: i.amount }),
																l.jsx("td", { children: i.txn_no }),
																l.jsx("td", {
																	children: l.jsx("img", {
																		src: i.screenshot,
																		alt: "",
																		width: 24,
																		height: 24,
																		className: "rounded-2",
																	}),
																}),
																l.jsx("td", { children: i.created }),
																l.jsxs("td", {
																	children: [
																		i.status == 1 &&
																			l.jsx("span", {
																				className: "badge bg-success",
																				children: "Success",
																			}),
																		i.status == 0 &&
																			l.jsx("span", {
																				className: "badge bg-warning",
																				children: "Pending",
																			}),
																		i.status == 2 &&
																			l.jsx("span", {
																				className: "badge bg-danger",
																				children: "Rejected",
																			}),
																	],
																}),
															],
														},
														o,
													),
											  )
											: l.jsx("tr", {
													children: l.jsx("td", {
														colSpan: 6,
														className: "text-center",
														children: "No Data Found",
													}),
											  }),
								}),
							],
						}),
				],
			}),
		],
	});
}
function ij() {
	const [e, t] = h.useState("0.00"),
		{ login: n } = h.useContext(we),
		[r, a] = h.useState(!1),
		[s, i] = h.useState(""),
		[o, u] = h.useState({ type: "", message: "" }),
		[c, d] = h.useState({ user_id: n.id, amount: "", receiver_id: "" }),
		[p, m] = h.useState("");
	h.useEffect(() => {
		y();
	}, [n.id]);
	const y = () => {
			ie("users/get-balance-info", { user_id: n.id }).then((S) => {
				S.success && t(S.data.fund_balance);
			});
		},
		j = () => {
			p.trim() !== "" &&
				(i(
					l.jsx("span", {
						className: "text-primary smalll",
						children: "Checking...",
					}),
				),
				ie("users/search", { username: p }).then((S) => {
					S != null && S.success && S != null && S.data
						? (a(!0),
						  i(
								l.jsxs("span", {
									className: "text-light smalll",
									children: [" ", S.data.first_name + " " + S.data.last_name],
								}),
						  ),
						  d({ ...c, receiver_id: S.data.username }))
						: (a(!1),
						  i(
								l.jsx("span", {
									className: "text-danger smalll",
									children: "Invalid Username",
								}),
						  ),
						  d({ ...c, receiver_id: "" }));
				}));
		},
		g = () => {
			if (p == "") {
				u({ type: "danger", message: "Please fill receiver userid" });
				return;
			}
			if (!r) {
				u({ type: "danger", message: "Userid is invalid" });
				return;
			}
			if (parseFloat(c.amount) < 0) {
				u({ type: "danger", message: "Please enter amount to transfer" });
				return;
			}
			ie("users/fund-transfer", c).then((S) => {
				S.success
					? (u({ type: "success", message: S.message }),
					  d({ ...c, amount: "", receiver_id: "" }),
					  m(""),
					  y(),
					  console.log(S))
					: u({ type: "danger", message: S.message });
			});
		};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: "Fund Transfer" }),
			}),
			l.jsx("div", {
				id: "origin",
				className: "row",
				children: l.jsxs("div", {
					className: "col-sm-6",
					children: [
						o.message &&
							o.message.length > 0 &&
							l.jsxs("div", {
								className: "alert alert-" + o.type,
								children: [o.message, " "],
							}),
						l.jsx("div", {
							className: "card",
							children: l.jsxs("div", {
								className: "p-3 align-items-center",
								id: "funds",
								children: [
									l.jsxs("div", {
										className: "form-group row align-items-center",
										children: [
											l.jsx("label", {
												className: "col-sm-4 control-label",
												children: "Fund Balance ",
											}),
											l.jsxs("div", {
												className: "col-md-8",
												children: [
													l.jsx("i", { className: "fa fa-usd" }),
													" ",
													l.jsx("span", {
														className: "fs-5",
														children: e + "",
													}),
												],
											}),
										],
									}),
									l.jsxs("div", {
										className: "form-group row",
										children: [
											l.jsxs("label", {
												className: "col-sm-4 control-label",
												children: [
													"Amount ",
													l.jsx("span", {
														className: "required",
														children: "*",
													}),
													" ",
												],
											}),
											l.jsx("div", {
												className: "col-md-8",
												children: l.jsx("input", {
													value: c.amount,
													onChange: (S) => d({ ...c, amount: S.target.value }),
													className: "form-control",
													type: "number",
													placeholder: "0.00",
												}),
											}),
										],
									}),
									l.jsxs("div", {
										className: "form-group row",
										children: [
											l.jsxs("label", {
												className: "col-sm-4 control-label",
												children: [
													"Transfer To ",
													l.jsx("span", {
														className: "required",
														children: "*",
													}),
												],
											}),
											l.jsxs("div", {
												className: "col-sm-7",
												children: [
													l.jsx("input", {
														value: p,
														onChange: (S) => m(S.target.value),
														onBlur: j,
														className: "form-control text-uppercase",
														type: "text",
														placeholder: "Username",
													}),
													!r &&
														l.jsx("div", {
															className: "badge badge-danger text-danger",
															children: s,
														}),
													r &&
														l.jsx("div", {
															className: "badge badge-success text-success",
															children: s,
														}),
												],
											}),
										],
									}),
									l.jsxs("div", {
										className: "form-group row",
										children: [
											l.jsx("div", { className: "col-sm-4" }),
											l.jsxs("div", {
												className: "col-md-8 d-flex space",
												children: [
													l.jsx("button", {
														className: "btn btn-primary me-2",
														onClick: g,
														children: "Submit",
													}),
													l.jsx(ur, {
														type: "reset",
														className: "btn btn-danger",
														children: "Cancel",
													}),
												],
											}),
										],
									}),
								],
							}),
						}),
					],
				}),
			}),
		],
	});
}
function oj() {
	const { login: e } = h.useContext(we),
		[t, n] = h.useState([]);
	h.useEffect(() => {
		r();
	}, [e.id]);
	const r = () => {
		ie("users/fund-transfer-history", { user_id: e.id }).then((a) => {
			a.success && n(a.data);
		});
	};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: "Fund Transfer History" }),
			}),
			l.jsxs("div", {
				className: "card",
				children: [
					l.jsx("div", { className: "card-header", children: "List" }),
					l.jsxs("table", {
						className: "table",
						children: [
							l.jsx("thead", {
								children: l.jsxs("tr", {
									children: [
										l.jsx("th", { children: "Sl No" }),
										l.jsx("th", { children: "Date" }),
										l.jsx("th", { children: "Notes" }),
										l.jsx("th", { children: "Amount" }),
										l.jsx("th", { children: "CR/DR" }),
										l.jsx("th", { children: "Comment" }),
									],
								}),
							}),
							l.jsx("tbody", {
								children:
									t.length > 0
										? t.map((a, s) =>
												l.jsxs(
													"tr",
													{
														children: [
															l.jsx("td", { children: s + 1 }),
															l.jsx("td", { children: a.created }),
															l.jsx("td", { children: a.notes.toUpperCase() }),
															l.jsx("td", { children: a.amount }),
															l.jsx("td", {
																children:
																	a.cr_dr == "cr"
																		? l.jsx("span", {
																				className: "text-success",
																				children: "CR",
																		  })
																		: l.jsx("span", {
																				className: "text-danger",
																				children: "DR",
																		  }),
															}),
															l.jsx("td", { children: a.comments }),
														],
													},
													a.id,
												),
										  )
										: l.jsx("tr", {
												children: l.jsx("td", {
													colSpan: 6,
													className: "text-center",
													children: "No Data Found",
												}),
										  }),
							}),
						],
					}),
				],
			}),
		],
	});
}
var Dm = { exports: {} };
(function (e, t) {
	(function (n, r) {
		e.exports = r(h);
	})($m, (n) =>
		(() => {
			var r = {
					703: (o, u, c) => {
						var d = c(414);
						function p() {}
						function m() {}
						(m.resetWarningCache = p),
							(o.exports = function () {
								function y(S, v, f, x, E, w) {
									if (w !== d) {
										var P = new Error(
											"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
										);
										throw ((P.name = "Invariant Violation"), P);
									}
								}
								function j() {
									return y;
								}
								y.isRequired = y;
								var g = {
									array: y,
									bigint: y,
									bool: y,
									func: y,
									number: y,
									object: y,
									string: y,
									symbol: y,
									any: y,
									arrayOf: j,
									element: y,
									elementType: y,
									instanceOf: j,
									node: y,
									objectOf: j,
									oneOf: j,
									oneOfType: j,
									shape: j,
									exact: j,
									checkPropTypes: m,
									resetWarningCache: p,
								};
								return (g.PropTypes = g), g;
							});
					},
					697: (o, u, c) => {
						o.exports = c(703)();
					},
					414: (o) => {
						o.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
					},
					98: (o) => {
						o.exports = n;
					},
				},
				a = {};
			function s(o) {
				var u = a[o];
				if (u !== void 0) return u.exports;
				var c = (a[o] = { exports: {} });
				return r[o](c, c.exports, s), c.exports;
			}
			(s.n = (o) => {
				var u = o && o.__esModule ? () => o.default : () => o;
				return s.d(u, { a: u }), u;
			}),
				(s.d = (o, u) => {
					for (var c in u)
						s.o(u, c) &&
							!s.o(o, c) &&
							Object.defineProperty(o, c, { enumerable: !0, get: u[c] });
				}),
				(s.o = (o, u) => Object.prototype.hasOwnProperty.call(o, u)),
				(s.r = (o) => {
					typeof Symbol < "u" &&
						Symbol.toStringTag &&
						Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
						Object.defineProperty(o, "__esModule", { value: !0 });
				});
			var i = {};
			return (
				(() => {
					s.r(i), s.d(i, { default: () => de });
					var o = s(98),
						u = s.n(o),
						c = s(697),
						d = s.n(c);
					function p() {
						return (
							(p = Object.assign
								? Object.assign.bind()
								: function (I) {
										for (var H = 1; H < arguments.length; H++) {
											var te = arguments[H];
											for (var Y in te)
												Object.prototype.hasOwnProperty.call(te, Y) &&
													(I[Y] = te[Y]);
										}
										return I;
								  }),
							p.apply(this, arguments)
						);
					}
					var m = function (I) {
						var H = I.pageClassName,
							te = I.pageLinkClassName,
							Y = I.page,
							Ve = I.selected,
							ze = I.activeClassName,
							A = I.activeLinkClassName,
							O = I.getEventListener,
							b = I.pageSelectedHandler,
							K = I.href,
							F = I.extraAriaContext,
							Q = I.pageLabelBuilder,
							X = I.rel,
							oe = I.ariaLabel || "Page " + Y + (F ? " " + F : ""),
							pe = null;
						return (
							Ve &&
								((pe = "page"),
								(oe = I.ariaLabel || "Page " + Y + " is your current page"),
								(H = H !== void 0 ? H + " " + ze : ze),
								te !== void 0 ? A !== void 0 && (te = te + " " + A) : (te = A)),
							u().createElement(
								"li",
								{ className: H },
								u().createElement(
									"a",
									p(
										{
											rel: X,
											role: K ? void 0 : "button",
											className: te,
											href: K,
											tabIndex: Ve ? "-1" : "0",
											"aria-label": oe,
											"aria-current": pe,
											onKeyPress: b,
										},
										O(b),
									),
									Q(Y),
								),
							)
						);
					};
					m.propTypes = {
						pageSelectedHandler: d().func.isRequired,
						selected: d().bool.isRequired,
						pageClassName: d().string,
						pageLinkClassName: d().string,
						activeClassName: d().string,
						activeLinkClassName: d().string,
						extraAriaContext: d().string,
						href: d().string,
						ariaLabel: d().string,
						page: d().number.isRequired,
						getEventListener: d().func.isRequired,
						pageLabelBuilder: d().func.isRequired,
						rel: d().string,
					};
					const y = m;
					function j() {
						return (
							(j = Object.assign
								? Object.assign.bind()
								: function (I) {
										for (var H = 1; H < arguments.length; H++) {
											var te = arguments[H];
											for (var Y in te)
												Object.prototype.hasOwnProperty.call(te, Y) &&
													(I[Y] = te[Y]);
										}
										return I;
								  }),
							j.apply(this, arguments)
						);
					}
					var g = function (I) {
						var H = I.breakLabel,
							te = I.breakAriaLabel,
							Y = I.breakClassName,
							Ve = I.breakLinkClassName,
							ze = I.breakHandler,
							A = I.getEventListener,
							O = Y || "break";
						return u().createElement(
							"li",
							{ className: O },
							u().createElement(
								"a",
								j(
									{
										className: Ve,
										role: "button",
										tabIndex: "0",
										"aria-label": te,
										onKeyPress: ze,
									},
									A(ze),
								),
								H,
							),
						);
					};
					g.propTypes = {
						breakLabel: d().oneOfType([d().string, d().node]),
						breakAriaLabel: d().string,
						breakClassName: d().string,
						breakLinkClassName: d().string,
						breakHandler: d().func.isRequired,
						getEventListener: d().func.isRequired,
					};
					const S = g;
					function v(I) {
						var H =
							arguments.length > 1 && arguments[1] !== void 0
								? arguments[1]
								: "";
						return I ?? H;
					}
					function f(I) {
						return (
							(f =
								typeof Symbol == "function" &&
								typeof Symbol.iterator == "symbol"
									? function (H) {
											return typeof H;
									  }
									: function (H) {
											return H &&
												typeof Symbol == "function" &&
												H.constructor === Symbol &&
												H !== Symbol.prototype
												? "symbol"
												: typeof H;
									  }),
							f(I)
						);
					}
					function x() {
						return (
							(x = Object.assign
								? Object.assign.bind()
								: function (I) {
										for (var H = 1; H < arguments.length; H++) {
											var te = arguments[H];
											for (var Y in te)
												Object.prototype.hasOwnProperty.call(te, Y) &&
													(I[Y] = te[Y]);
										}
										return I;
								  }),
							x.apply(this, arguments)
						);
					}
					function E(I, H) {
						for (var te = 0; te < H.length; te++) {
							var Y = H[te];
							(Y.enumerable = Y.enumerable || !1),
								(Y.configurable = !0),
								"value" in Y && (Y.writable = !0),
								Object.defineProperty(I, Y.key, Y);
						}
					}
					function w(I, H) {
						return (
							(w = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (te, Y) {
										return (te.__proto__ = Y), te;
								  }),
							w(I, H)
						);
					}
					function P(I, H) {
						if (H && (f(H) === "object" || typeof H == "function")) return H;
						if (H !== void 0)
							throw new TypeError(
								"Derived constructors may only return object or undefined",
							);
						return L(I);
					}
					function L(I) {
						if (I === void 0)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called",
							);
						return I;
					}
					function k(I) {
						return (
							(k = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (H) {
										return H.__proto__ || Object.getPrototypeOf(H);
								  }),
							k(I)
						);
					}
					function M(I, H, te) {
						return (
							H in I
								? Object.defineProperty(I, H, {
										value: te,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (I[H] = te),
							I
						);
					}
					var $ = (function (I) {
						(function (O, b) {
							if (typeof b != "function" && b !== null)
								throw new TypeError(
									"Super expression must either be null or a function",
								);
							(O.prototype = Object.create(b && b.prototype, {
								constructor: { value: O, writable: !0, configurable: !0 },
							})),
								Object.defineProperty(O, "prototype", { writable: !1 }),
								b && w(O, b);
						})(A, I);
						var H,
							te,
							Y,
							Ve,
							ze =
								((Y = A),
								(Ve = (function () {
									if (
										typeof Reflect > "u" ||
										!Reflect.construct ||
										Reflect.construct.sham
									)
										return !1;
									if (typeof Proxy == "function") return !0;
									try {
										return (
											Boolean.prototype.valueOf.call(
												Reflect.construct(Boolean, [], function () {}),
											),
											!0
										);
									} catch {
										return !1;
									}
								})()),
								function () {
									var O,
										b = k(Y);
									if (Ve) {
										var K = k(this).constructor;
										O = Reflect.construct(b, arguments, K);
									} else O = b.apply(this, arguments);
									return P(this, O);
								});
						function A(O) {
							var b, K;
							return (
								(function (F, Q) {
									if (!(F instanceof Q))
										throw new TypeError("Cannot call a class as a function");
								})(this, A),
								M(
									L((b = ze.call(this, O))),
									"handlePreviousPage",
									function (F) {
										var Q = b.state.selected;
										b.handleClick(F, null, Q > 0 ? Q - 1 : void 0, {
											isPrevious: !0,
										});
									},
								),
								M(L(b), "handleNextPage", function (F) {
									var Q = b.state.selected,
										X = b.props.pageCount;
									b.handleClick(F, null, Q < X - 1 ? Q + 1 : void 0, {
										isNext: !0,
									});
								}),
								M(L(b), "handlePageSelected", function (F, Q) {
									if (b.state.selected === F)
										return (
											b.callActiveCallback(F),
											void b.handleClick(Q, null, void 0, { isActive: !0 })
										);
									b.handleClick(Q, null, F);
								}),
								M(L(b), "handlePageChange", function (F) {
									b.state.selected !== F &&
										(b.setState({ selected: F }), b.callCallback(F));
								}),
								M(L(b), "getEventListener", function (F) {
									return M({}, b.props.eventListener, F);
								}),
								M(L(b), "handleClick", function (F, Q, X) {
									var oe =
											arguments.length > 3 && arguments[3] !== void 0
												? arguments[3]
												: {},
										pe = oe.isPrevious,
										Ie = pe !== void 0 && pe,
										mn = oe.isNext,
										be = mn !== void 0 && mn,
										lt = oe.isBreak,
										Xe = lt !== void 0 && lt,
										Vt = oe.isActive,
										We = Vt !== void 0 && Vt;
									F.preventDefault ? F.preventDefault() : (F.returnValue = !1);
									var Wt = b.state.selected,
										je = b.props.onClick,
										Ze = X;
									if (je) {
										var et = je({
											index: Q,
											selected: Wt,
											nextSelectedPage: X,
											event: F,
											isPrevious: Ie,
											isNext: be,
											isBreak: Xe,
											isActive: We,
										});
										if (et === !1) return;
										Number.isInteger(et) && (Ze = et);
									}
									Ze !== void 0 && b.handlePageChange(Ze);
								}),
								M(L(b), "handleBreakClick", function (F, Q) {
									var X = b.state.selected;
									b.handleClick(
										Q,
										F,
										X < F ? b.getForwardJump() : b.getBackwardJump(),
										{ isBreak: !0 },
									);
								}),
								M(L(b), "callCallback", function (F) {
									b.props.onPageChange !== void 0 &&
										typeof b.props.onPageChange == "function" &&
										b.props.onPageChange({ selected: F });
								}),
								M(L(b), "callActiveCallback", function (F) {
									b.props.onPageActive !== void 0 &&
										typeof b.props.onPageActive == "function" &&
										b.props.onPageActive({ selected: F });
								}),
								M(L(b), "getElementPageRel", function (F) {
									var Q = b.state.selected,
										X = b.props,
										oe = X.nextPageRel,
										pe = X.prevPageRel,
										Ie = X.selectedPageRel;
									return Q - 1 === F
										? pe
										: Q === F
										? Ie
										: Q + 1 === F
										? oe
										: void 0;
								}),
								M(L(b), "pagination", function () {
									var F = [],
										Q = b.props,
										X = Q.pageRangeDisplayed,
										oe = Q.pageCount,
										pe = Q.marginPagesDisplayed,
										Ie = Q.breakLabel,
										mn = Q.breakClassName,
										be = Q.breakLinkClassName,
										lt = Q.breakAriaLabels,
										Xe = b.state.selected;
									if (oe <= X)
										for (var Vt = 0; Vt < oe; Vt++)
											F.push(b.getPageElement(Vt));
									else {
										var We = X / 2,
											Wt = X - We;
										Xe > oe - X / 2
											? (We = X - (Wt = oe - Xe))
											: Xe < X / 2 && (Wt = X - (We = Xe));
										var je,
											Ze,
											et = function (qe) {
												return b.getPageElement(qe);
											},
											Pe = [];
										for (je = 0; je < oe; je++) {
											var hr = je + 1;
											if (hr <= pe)
												Pe.push({ type: "page", index: je, display: et(je) });
											else if (hr > oe - pe)
												Pe.push({ type: "page", index: je, display: et(je) });
											else if (
												je >= Xe - We &&
												je <= Xe + (Xe === 0 && X > 1 ? Wt - 1 : Wt)
											)
												Pe.push({ type: "page", index: je, display: et(je) });
											else if (
												Ie &&
												Pe.length > 0 &&
												Pe[Pe.length - 1].display !== Ze &&
												(X > 0 || pe > 0)
											) {
												var Jr = je < Xe ? lt.backward : lt.forward;
												(Ze = u().createElement(S, {
													key: je,
													breakAriaLabel: Jr,
													breakLabel: Ie,
													breakClassName: mn,
													breakLinkClassName: be,
													breakHandler: b.handleBreakClick.bind(null, je),
													getEventListener: b.getEventListener,
												})),
													Pe.push({ type: "break", index: je, display: Ze });
											}
										}
										Pe.forEach(function (qe, it) {
											var Vn = qe;
											qe.type === "break" &&
												Pe[it - 1] &&
												Pe[it - 1].type === "page" &&
												Pe[it + 1] &&
												Pe[it + 1].type === "page" &&
												Pe[it + 1].index - Pe[it - 1].index <= 2 &&
												(Vn = {
													type: "page",
													index: qe.index,
													display: et(qe.index),
												}),
												F.push(Vn.display);
										});
									}
									return F;
								}),
								O.initialPage !== void 0 &&
									O.forcePage !== void 0 &&
									console.warn(
										"(react-paginate): Both initialPage ("
											.concat(O.initialPage, ") and forcePage (")
											.concat(
												O.forcePage,
												") props are provided, which is discouraged.",
											) +
											` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`,
									),
								(K = O.initialPage
									? O.initialPage
									: O.forcePage
									? O.forcePage
									: 0),
								(b.state = { selected: K }),
								b
							);
						}
						return (
							(H = A),
							(te = [
								{
									key: "componentDidMount",
									value: function () {
										var O = this.props,
											b = O.initialPage,
											K = O.disableInitialCallback,
											F = O.extraAriaContext,
											Q = O.pageCount,
											X = O.forcePage;
										b === void 0 || K || this.callCallback(b),
											F &&
												console.warn(
													"DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.",
												),
											Number.isInteger(Q) ||
												console.warn(
													"(react-paginate): The pageCount prop value provided is not an integer (".concat(
														Q,
														"). Did you forget a Math.ceil()?",
													),
												),
											b !== void 0 &&
												b > Q - 1 &&
												console.warn(
													"(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop ("
														.concat(b, " > ")
														.concat(Q - 1, ")."),
												),
											X !== void 0 &&
												X > Q - 1 &&
												console.warn(
													"(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
														.concat(X, " > ")
														.concat(Q - 1, ")."),
												);
									},
								},
								{
									key: "componentDidUpdate",
									value: function (O) {
										this.props.forcePage !== void 0 &&
											this.props.forcePage !== O.forcePage &&
											(this.props.forcePage > this.props.pageCount - 1 &&
												console.warn(
													"(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
														.concat(this.props.forcePage, " > ")
														.concat(this.props.pageCount - 1, ")."),
												),
											this.setState({ selected: this.props.forcePage })),
											Number.isInteger(O.pageCount) &&
												!Number.isInteger(this.props.pageCount) &&
												console.warn(
													"(react-paginate): The pageCount prop value provided is not an integer (".concat(
														this.props.pageCount,
														"). Did you forget a Math.ceil()?",
													),
												);
									},
								},
								{
									key: "getForwardJump",
									value: function () {
										var O = this.state.selected,
											b = this.props,
											K = b.pageCount,
											F = O + b.pageRangeDisplayed;
										return F >= K ? K - 1 : F;
									},
								},
								{
									key: "getBackwardJump",
									value: function () {
										var O = this.state.selected - this.props.pageRangeDisplayed;
										return O < 0 ? 0 : O;
									},
								},
								{
									key: "getElementHref",
									value: function (O) {
										var b = this.props,
											K = b.hrefBuilder,
											F = b.pageCount,
											Q = b.hrefAllControls;
										if (K)
											return Q || (O >= 0 && O < F)
												? K(O + 1, F, this.state.selected)
												: void 0;
									},
								},
								{
									key: "ariaLabelBuilder",
									value: function (O) {
										var b = O === this.state.selected;
										if (
											this.props.ariaLabelBuilder &&
											O >= 0 &&
											O < this.props.pageCount
										) {
											var K = this.props.ariaLabelBuilder(O + 1, b);
											return (
												this.props.extraAriaContext &&
													!b &&
													(K = K + " " + this.props.extraAriaContext),
												K
											);
										}
									},
								},
								{
									key: "getPageElement",
									value: function (O) {
										var b = this.state.selected,
											K = this.props,
											F = K.pageClassName,
											Q = K.pageLinkClassName,
											X = K.activeClassName,
											oe = K.activeLinkClassName,
											pe = K.extraAriaContext,
											Ie = K.pageLabelBuilder;
										return u().createElement(y, {
											key: O,
											pageSelectedHandler: this.handlePageSelected.bind(
												null,
												O,
											),
											selected: b === O,
											rel: this.getElementPageRel(O),
											pageClassName: F,
											pageLinkClassName: Q,
											activeClassName: X,
											activeLinkClassName: oe,
											extraAriaContext: pe,
											href: this.getElementHref(O),
											ariaLabel: this.ariaLabelBuilder(O),
											page: O + 1,
											pageLabelBuilder: Ie,
											getEventListener: this.getEventListener,
										});
									},
								},
								{
									key: "render",
									value: function () {
										var O = this.props.renderOnZeroPageCount;
										if (this.props.pageCount === 0 && O !== void 0)
											return O && O(this.props);
										var b = this.props,
											K = b.disabledClassName,
											F = b.disabledLinkClassName,
											Q = b.pageCount,
											X = b.className,
											oe = b.containerClassName,
											pe = b.previousLabel,
											Ie = b.previousClassName,
											mn = b.previousLinkClassName,
											be = b.previousAriaLabel,
											lt = b.prevRel,
											Xe = b.nextLabel,
											Vt = b.nextClassName,
											We = b.nextLinkClassName,
											Wt = b.nextAriaLabel,
											je = b.nextRel,
											Ze = this.state.selected,
											et = Ze === 0,
											Pe = Ze === Q - 1,
											hr = "".concat(v(Ie)).concat(et ? " ".concat(v(K)) : ""),
											Jr = "".concat(v(Vt)).concat(Pe ? " ".concat(v(K)) : ""),
											qe = "".concat(v(mn)).concat(et ? " ".concat(v(F)) : ""),
											it = "".concat(v(We)).concat(Pe ? " ".concat(v(F)) : ""),
											Vn = et ? "true" : "false",
											Yr = Pe ? "true" : "false";
										return u().createElement(
											"ul",
											{
												className: X || oe,
												role: "navigation",
												"aria-label": "Pagination",
											},
											u().createElement(
												"li",
												{ className: hr },
												u().createElement(
													"a",
													x(
														{
															className: qe,
															href: this.getElementHref(Ze - 1),
															tabIndex: et ? "-1" : "0",
															role: "button",
															onKeyPress: this.handlePreviousPage,
															"aria-disabled": Vn,
															"aria-label": be,
															rel: lt,
														},
														this.getEventListener(this.handlePreviousPage),
													),
													pe,
												),
											),
											this.pagination(),
											u().createElement(
												"li",
												{ className: Jr },
												u().createElement(
													"a",
													x(
														{
															className: it,
															href: this.getElementHref(Ze + 1),
															tabIndex: Pe ? "-1" : "0",
															role: "button",
															onKeyPress: this.handleNextPage,
															"aria-disabled": Yr,
															"aria-label": Wt,
															rel: je,
														},
														this.getEventListener(this.handleNextPage),
													),
													Xe,
												),
											),
										);
									},
								},
							]) && E(H.prototype, te),
							Object.defineProperty(H, "prototype", { writable: !1 }),
							A
						);
					})(o.Component);
					M($, "propTypes", {
						pageCount: d().number.isRequired,
						pageRangeDisplayed: d().number,
						marginPagesDisplayed: d().number,
						previousLabel: d().node,
						previousAriaLabel: d().string,
						prevPageRel: d().string,
						prevRel: d().string,
						nextLabel: d().node,
						nextAriaLabel: d().string,
						nextPageRel: d().string,
						nextRel: d().string,
						breakLabel: d().oneOfType([d().string, d().node]),
						breakAriaLabels: d().shape({
							forward: d().string,
							backward: d().string,
						}),
						hrefBuilder: d().func,
						hrefAllControls: d().bool,
						onPageChange: d().func,
						onPageActive: d().func,
						onClick: d().func,
						initialPage: d().number,
						forcePage: d().number,
						disableInitialCallback: d().bool,
						containerClassName: d().string,
						className: d().string,
						pageClassName: d().string,
						pageLinkClassName: d().string,
						pageLabelBuilder: d().func,
						activeClassName: d().string,
						activeLinkClassName: d().string,
						previousClassName: d().string,
						nextClassName: d().string,
						previousLinkClassName: d().string,
						nextLinkClassName: d().string,
						disabledClassName: d().string,
						disabledLinkClassName: d().string,
						breakClassName: d().string,
						breakLinkClassName: d().string,
						extraAriaContext: d().string,
						ariaLabelBuilder: d().func,
						eventListener: d().string,
						renderOnZeroPageCount: d().func,
						selectedPageRel: d().string,
					}),
						M($, "defaultProps", {
							pageRangeDisplayed: 2,
							marginPagesDisplayed: 3,
							activeClassName: "selected",
							previousLabel: "Previous",
							previousClassName: "previous",
							previousAriaLabel: "Previous page",
							prevPageRel: "prev",
							prevRel: "prev",
							nextLabel: "Next",
							nextClassName: "next",
							nextAriaLabel: "Next page",
							nextPageRel: "next",
							nextRel: "next",
							breakLabel: "...",
							breakAriaLabels: {
								forward: "Jump forward",
								backward: "Jump backward",
							},
							disabledClassName: "disabled",
							disableInitialCallback: !1,
							pageLabelBuilder: function (I) {
								return I;
							},
							eventListener: "onClick",
							renderOnZeroPageCount: void 0,
							selectedPageRel: "canonical",
							hrefAllControls: !1,
						});
					const de = $;
				})(),
				i
			);
		})(),
	);
})(Dm);
var uj = Dm.exports;
const cj = xl(uj);
function Vl({ perPage: e, total: t, onChange: n }) {
	const r = Math.ceil(t / e);
	return l.jsx(cj, {
		pageCount: r,
		onPageChange: (a) => n(a.selected + 1),
		className: "pagination pagination-sm",
		pageClassName: "page-item",
		pageLinkClassName: "page-link",
		previousClassName: "page-item",
		nextClassName: "page-item",
		previousLinkClassName: "page-link",
		nextLinkClassName: "page-link",
		activeClassName: "page-item active",
	});
}
Vl.propTypes = { perPage: U.number.isRequired, total: U.number };
function dj() {
	const [e, t] = h.useState(!0),
		[n, r] = h.useState([]),
		[a, s] = h.useState(1),
		[i] = h.useState(1),
		{ login: o } = h.useContext(we),
		u = 50;
	h.useEffect(() => {
		c();
	}, [o.id]);
	const c = async () => {
		ie("users/topup-history", { user_id: o.id })
			.then((d) => {
				d != null && d.success && r(d.data.items);
			})
			.finally(() => t(!1));
	};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: "Topup History" }),
			}),
			e && l.jsx(en, {}),
			!e &&
				l.jsxs(l.Fragment, {
					children: [
						l.jsxs("div", {
							className: "card mb-3",
							children: [
								l.jsx("div", { className: "card-header", children: "List" }),
								l.jsxs("table", {
									className: "table m-0",
									children: [
										l.jsx("thead", {
											children: l.jsxs("tr", {
												children: [
													l.jsx("th", { children: "Sl no" }),
													l.jsx("th", { children: "Name" }),
													l.jsx("th", { children: "User Id" }),
													l.jsx("th", { children: "Plan Amount" }),
													l.jsx("th", { children: "Activation Date" }),
													l.jsx("th", { children: "Activation From" }),
													l.jsx("th", { children: "Top up By" }),
												],
											}),
										}),
										l.jsx("tbody", {
											children: n.map((d, p) =>
												l.jsxs(
													"tr",
													{
														children: [
															l.jsx("td", { children: (a - 1) * u + (p + 1) }),
															l.jsx("td", { children: d.username }),
															l.jsx("td", { children: d.user_id }),
															l.jsx("td", { children: d.act_info }),
															l.jsx("td", { children: d.created }),
															l.jsx("td", { children: d.act_type }),
															l.jsx("td", { children: d.topup_by }),
														],
													},
													d.id,
												),
											),
										}),
									],
								}),
							],
						}),
						i > u && l.jsx(Vl, { total: i, perPage: u, onChange: s }),
					],
				}),
		],
	});
}
function fj() {
	const { login: e } = h.useContext(we),
		[t, n] = h.useState(!1),
		[r, a] = h.useState({ variant: "", message: "" }),
		[s, i] = h.useState({
			amount: "",
			date: "",
			user_id: e.id,
			image: "",
			txn_no: "",
			paymode: "",
		}),
		o = () => {
			if (s.amount == "" || s.date == "") {
				a({ variant: "error", message: "Fill all required fields" });
				return;
			}
			a({ variant: "info", message: "Uploading... please wait!!" }), n(!0);
			const u = new FormData();
			u.append("user_id", e.id + ""),
				u.append("amount", s.amount),
				u.append("date", s.date),
				u.append("txn_no", s.txn_no),
				u.append("screenshot", s.image),
				u.append("paymode", s.paymode);
			let c = In.API_URL + "users/fund-request";
			ce({
				method: "POST",
				url: c,
				data: u,
				headers: { "Content-Type": "multipart/form-data" },
			})
				.then((d) => {
					let p = d.data;
					console.log(p),
						p != null && p.success
							? (a({ variant: "success", message: p.message }),
							  i({ ...s, amount: "", date: "", txn_no: "" }))
							: a({ variant: "danger", message: p.message });
				})
				.finally(() => n(!1));
		};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: "Fund Request" }),
			}),
			l.jsx("div", {
				className: "row",
				children: l.jsxs("div", {
					className: "col-sm-5",
					children: [
						r.message.length > 0 &&
							l.jsx("div", {
								className: "alert alert-" + r.variant,
								children: r.message,
							}),
						l.jsxs("div", {
							className: "card p-3",
							children: [
								l.jsxs("div", {
									className: "mb-2 row align-items-center",
									children: [
										l.jsx("div", {
											className: "col-sm-4",
											children: l.jsxs("label", {
												children: [
													"Request Amount ",
													l.jsx("span", {
														className: "text-danger",
														children: "*",
													}),
												],
											}),
										}),
										l.jsx("div", {
											className: "col-sm-8",
											children: l.jsx("input", {
												type: "number",
												value: s.amount,
												onChange: (u) => i({ ...s, amount: u.target.value }),
												className: "form-control",
												placeholder: "0.00",
											}),
										}),
									],
								}),
								l.jsxs("div", {
									className: "mb-2 row align-items-center",
									children: [
										l.jsx("div", {
											className: "col-sm-4",
											children: l.jsxs("label", {
												children: [
													"Payment Mode ",
													l.jsx("span", {
														className: "text-danger",
														children: "*",
													}),
												],
											}),
										}),
										l.jsx("div", {
											className: "col-sm-8",
											children: l.jsxs("select", {
												onChange: (u) => i({ ...s, paymode: u.target.value }),
												className: "form-select",
												children: [
													l.jsx("option", {
														value: "online",
														children: "Online Payment",
													}),
													l.jsx("option", { value: "imps", children: "IMPS" }),
													l.jsx("option", {
														value: "upi",
														children: "Paytm/PhonePe/GooglePay/UPI",
													}),
													l.jsx("option", { value: "cash", children: "Cash" }),
												],
											}),
										}),
									],
								}),
								l.jsxs("div", {
									className: "mb-2 row align-items-center",
									children: [
										l.jsx("div", {
											className: "col-sm-4",
											children: l.jsxs("label", {
												children: [
													"Transaction Date ",
													l.jsx("span", {
														className: "text-danger",
														children: "*",
													}),
												],
											}),
										}),
										l.jsx("div", {
											className: "col-sm-8",
											children: l.jsx("input", {
												type: "date",
												value: s.date,
												onChange: (u) => i({ ...s, date: u.target.value }),
												className: "form-control",
											}),
										}),
									],
								}),
								l.jsxs("div", {
									className: "mb-2 row align-items-center",
									children: [
										l.jsx("div", {
											className: "col-sm-4",
											children: l.jsxs("label", {
												children: [
													"Txn No ",
													l.jsx("span", {
														className: "text-danger",
														children: "*",
													}),
												],
											}),
										}),
										l.jsx("div", {
											className: "col-sm-8",
											children: l.jsx("input", {
												type: "text",
												value: s.txn_no,
												onChange: (u) => i({ ...s, txn_no: u.target.value }),
												className: "form-control",
											}),
										}),
									],
								}),
								l.jsxs("div", {
									className: "mb-2 row align-items-center",
									children: [
										l.jsx("div", {
											className: "col-sm-4",
											children: l.jsx("label", { children: "Screenshot" }),
										}),
										l.jsx("div", {
											className: "col-sm-8",
											children: l.jsx("input", {
												type: "file",
												accept: "image/*",
												onChange: (u) => {
													var c;
													u.target.files &&
														((c = u.target.files) == null ? void 0 : c.length) >
															0 &&
														i({ ...s, image: u.target.files[0] });
												},
												className: "form-control",
											}),
										}),
									],
								}),
								l.jsxs("div", {
									className: "mb-2 row align-items-center",
									children: [
										l.jsx("div", {
											className: "col-sm-4",
											children: l.jsx("label", {}),
										}),
										l.jsx("div", {
											className: "col-sm-8",
											children: l.jsx(ur, {
												onClick: o,
												disabled: t,
												className: "btn btn-primary",
												children: "Submit",
											}),
										}),
									],
								}),
							],
						}),
					],
				}),
			}),
		],
	});
}
function gf() {
	const { login: e } = h.useContext(we),
		[t, n] = h.useState([]),
		[r, a] = h.useState(!0),
		[s, i] = h.useState(1),
		[o, u] = h.useState(0),
		[c, d] = h.useState("Transaction"),
		[p] = h.useState([]),
		m = 50,
		{ tab: y } = C0();
	h.useEffect(() => {
		j().then(() => {
			a(!1);
		}),
			y == "direct"
				? d("Sponsor Income")
				: y == "level"
				? d("Level Income")
				: y == "roi"
				? d("ROI Income")
				: y == "family"
				? d("Family Income")
				: d("Transaction History");
	}, [y, s, e.id]);
	const j = async () => {
		y == null
			? ie("users/payment-history", { user_id: e.id, type: p, page: s }).then(
					(g) => {
						g.success && (n(g.data.items), u(g.data.total), i(1));
					},
			  )
			: ie("payment-history", { user_id: e.id, type: y, page: s }).then((g) => {
					g.success && (n(g.data.items), u(g.data.total), i(1));
			  });
	};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsxs("h5", { children: [c, " Reports"] }),
			}),
			l.jsxs("div", {
				className: "card card-body mb-2",
				children: [
					r && l.jsx(en, {}),
					!r &&
						l.jsxs("table", {
							className: "table",
							children: [
								l.jsx("thead", {
									children: l.jsxs("tr", {
										children: [
											l.jsx("th", { children: "Sl No" }),
											l.jsx("th", { children: "Date" }),
											l.jsx("th", { children: "Amount" }),
											l.jsx("th", { children: "CR/DR" }),
											l.jsx("th", { children: "Comments" }),
										],
									}),
								}),
								l.jsx("tbody", {
									children:
										t.length > 0
											? t.map((g, S) =>
													l.jsxs(
														"tr",
														{
															children: [
																l.jsx("td", { children: S + 1 }),
																l.jsx("td", { children: g.created }),
																l.jsx("td", { children: g.amount }),
																l.jsx("td", {
																	children:
																		g.cr_dr == "cr"
																			? l.jsx("span", {
																					className: "text-success",
																					children: "CR",
																			  })
																			: l.jsx("span", {
																					className: "text-danger",
																					children: "DR",
																			  }),
																}),
																l.jsx("td", { children: g.comments }),
															],
														},
														g.id,
													),
											  )
											: l.jsx("tr", {
													children: l.jsx("td", {
														colSpan: 5,
														className: "text-center",
														children: "No Data Found",
													}),
											  }),
								}),
							],
						}),
				],
			}),
			l.jsx(Vl, { perPage: m, total: o, onChange: i }),
		],
	});
}
const hj = () => {
		const [e, t] = h.useState({ username: "", password: "" }),
			[n, r] = h.useState({ message: "", type: "" }),
			[a, s] = h.useState(!1),
			{ setLogin: i } = h.useContext(we),
			o = qr(),
			[u] = Gu();
		h.useEffect(() => {
			let d = u.get("user"),
				p = u.get("pass");
			d !== null && p !== null && t({ username: d, password: p });
		}, []);
		const c = () => {
			if (e.username == "" || e.password == "") {
				r({ message: "Enter username and Password", type: "danger" });
				return;
			}
			s(!0);
			let d = In.API_URL + "users/login";
			ce.post(d, e)
				.then((p) => {
					let m = p.data;
					m.success
						? (r({ message: m.message, type: "success" }),
						  localStorage.setItem("_login", JSON.stringify(m.data)),
						  i(m.data),
						  o("/dashboard"))
						: r({ message: m.message, type: "danger" });
				})
				.finally(() => s(!1));
		};
		return l.jsx("div", {
			className: "container",
			children: l.jsx("div", {
				className: "row pt-5",
				children: l.jsxs("div", {
					className: "col-sm-5 m-auto",
					children: [
						l.jsx("div", {
							className: "text-center mb-4",
							children: l.jsx("img", { src: "/img/logo-main.png", width: 240 }),
						}),
						n.message.length > 0 &&
							l.jsx("div", {
								className: "alert alert-" + n.type,
								children: n.message,
							}),
						l.jsx("div", {
							className: "card mb-2 border-0 shadow-sm",
							children: l.jsxs("div", {
								className: "card-body",
								children: [
									l.jsx("h4", {
										className: "text-center",
										children: "Account Login",
									}),
									l.jsxs("div", {
										className: "mb-3",
										children: [
											l.jsx("label", { children: "Username" }),
											l.jsx("input", {
												value: e.username,
												onChange: (d) => t({ ...e, username: d.target.value }),
												className: "form-control",
											}),
										],
									}),
									l.jsxs("div", {
										className: "mb-3",
										children: [
											l.jsx("label", { children: "Password" }),
											l.jsx("input", {
												value: e.password,
												onChange: (d) => t({ ...e, password: d.target.value }),
												type: "password",
												className: "form-control",
											}),
										],
									}),
									l.jsx("button", {
										onClick: c,
										disabled: a,
										className: "btn btn-primary",
										children: a ? "Please wait..." : "Login",
									}),
								],
							}),
						}),
						l.jsx("div", {
							className: "card border-0 shadow-sm",
							children: l.jsxs("div", {
								className: "card-body",
								children: [
									"Don't have an account? ",
									l.jsx(_e, { to: "/signup", children: "Click here" }),
								],
							}),
						}),
					],
				}),
			}),
		});
	},
	pj = () => {
		const { setLogin: e } = h.useContext(we),
			t = qr();
		return (
			h.useEffect(() => {
				e(0), localStorage.removeItem("_login"), t("/login");
			}),
			null
		);
	};
function mj() {
	const [e, t] = h.useState({
			first_name: "",
			last_name: "",
			email_id: "",
			mobile: "",
			position: "0",
			sponsor: "",
			placement: "",
			pan_no: "",
		}),
		[n, r] = h.useState(!1),
		[a, s] = h.useState({ message: "", variant: "" }),
		[i, o] = h.useState(null),
		[u, c] = h.useState(null),
		[d, p] = h.useState({
			id: 0,
			first_name: "",
			last_name: "",
			username: "",
			passwd: "",
		}),
		[m, y] = h.useState(!1),
		[j, g] = h.useState(!1),
		[S, v] = h.useState(!1),
		[f] = Gu(),
		x = f.get("ref");
	h.useEffect(() => {
		typeof x == "string" && t({ ...e, sponsor: x, placement: x }), w("sponsor");
	}, []);
	const E = () => {
			if (
				e.first_name == "" ||
				e.last_name == "" ||
				e.email_id == "" ||
				e.mobile == "" ||
				e.sponsor == "" ||
				e.placement == "" ||
				e.pan_no == ""
			) {
				s({ message: "Please fill all details", variant: "danger" });
				return;
			}
			e.pan_no.length < 11 &&
				s({ message: "Length Should be 11 Characters", variant: "danger" }),
				r(!0),
				s({ ...a, message: "" });
			let P = In.API_URL + "users/signup";
			ce.post(P, e)
				.then((L) => {
					let k = L.data;
					k.success
						? (v(!0), p(k.data))
						: s({ message: k.message, variant: "danger" });
				})
				.finally(() => r(!1));
		},
		w = async (P) => {
			const L = P === "sponsor" ? e.sponsor : e.placement;
			if (!L) return;
			s({ ...a, message: "" }), P === "sponsor" ? y(!0) : g(!0);
			let k = In.API_URL + "users/search";
			ce.post(k, { username: L })
				.then((M) => {
					let $ = M.data;
					$.success
						? (s({ message: $.message, variant: "success" }),
						  P === "sponsor" ? o($.data) : c($.data))
						: (s({ message: $.message, variant: "danger" }),
						  P === "sponsor" ? o(null) : c(null));
				})
				.finally(() => {
					P === "sponsor" ? y(!1) : g(!1);
				});
		};
	return S
		? l.jsx("div", {
				className: "container",
				children: l.jsx("div", {
					className: "row pt-5",
					children: l.jsxs("div", {
						className: "col-sm-6 m-auto",
						children: [
							l.jsx("div", {
								className: "text-center mb-4",
								children: l.jsx("img", {
									src: "/img/logo-main.png",
									width: 240,
								}),
							}),
							a.message.length > 0 &&
								l.jsx("div", {
									className: "alert alert-" + a.variant,
									children: a.message,
								}),
							l.jsx("div", {
								className: "card mb-2 border-0 shadow-sm",
								children: l.jsxs("div", {
									className: "card-body",
									children: [
										l.jsxs("div", {
											className: "text-center",
											children: [
												l.jsx("img", {
													src: "/img/success.png",
													width: 200,
													className: "img-fluid",
												}),
												l.jsx("h6", {
													className: "text-success",
													children:
														"Congratulation!! Your account has been created with Easyloan.",
												}),
											],
										}),
										l.jsx("table", {
											className: "table table-bordered",
											children: l.jsxs("tbody", {
												children: [
													l.jsxs("tr", {
														children: [
															l.jsx("td", { children: "Name" }),
															l.jsx("td", {
																children: d.first_name + " " + d.last_name,
															}),
														],
													}),
													l.jsxs("tr", {
														children: [
															l.jsx("td", { children: "Userid" }),
															l.jsx("td", { children: d.username }),
														],
													}),
													l.jsxs("tr", {
														children: [
															l.jsx("td", { children: "Password" }),
															l.jsx("td", { children: d.passwd }),
														],
													}),
												],
											}),
										}),
									],
								}),
							}),
							l.jsx("div", {
								className: "card border-0 shadow-sm",
								children: l.jsx("button", {
									onClick: () => {
										v(!1),
											t({
												...e,
												first_name: "",
												last_name: "",
												email_id: "",
												mobile: "",
												position: "0",
											});
									},
									className: "btn btn-primary",
									children: "Create new account",
								}),
							}),
						],
					}),
				}),
		  })
		: l.jsx("div", {
				className: "container",
				children: l.jsx("div", {
					className: "row pt-5",
					children: l.jsxs("div", {
						className: "col-sm-6 m-auto",
						children: [
							l.jsx("div", {
								className: "text-center mb-4",
								children: l.jsx("img", {
									src: "/img/logo-main.png",
									width: 240,
								}),
							}),
							a.message.length > 0 &&
								l.jsx("div", {
									className: "alert alert-" + a.variant,
									children: a.message,
								}),
							l.jsxs("div", {
								className: "card mb-2 border-0 shadow-sm",
								children: [
									l.jsx("div", {
										className: "pt-3",
										children: l.jsx("h4", {
											className: "text-center",
											children: "Create an account",
										}),
									}),
									l.jsxs("div", {
										className: "card-body",
										children: [
											l.jsxs("div", {
												className: "mb-2",
												children: [
													l.jsxs("label", {
														children: [
															"Sponsor Id ",
															l.jsx("span", {
																className: "text-danger",
																children: "*",
															}),
														],
													}),
													l.jsxs("div", {
														className: "d-flex gap-2",
														children: [
															l.jsx("input", {
																type: "text",
																value: e.sponsor,
																onChange: (P) =>
																	t({ ...e, sponsor: P.target.value }),
																className: "form-control text-uppercase",
															}),
															l.jsx("button", {
																disabled: m,
																onClick: () => w("sponsor"),
																className: "btn btn-primary",
																children: m ? "Searching..." : "Verify",
															}),
														],
													}),
													i != null &&
														l.jsx("div", {
															className: "badge bg-success",
															children: i.first_name + " " + i.last_name,
														}),
												],
											}),
											l.jsxs("div", {
												className: "mb-2",
												children: [
													l.jsxs("label", {
														children: [
															"Placement Id ",
															l.jsx("span", {
																className: "text-danger",
																children: "*",
															}),
														],
													}),
													l.jsxs("div", {
														className: "d-flex gap-2",
														children: [
															l.jsx("input", {
																type: "text",
																value: e.placement,
																onChange: (P) =>
																	t({ ...e, placement: P.target.value }),
																className: "form-control text-uppercase",
															}),
															l.jsx("button", {
																disabled: j,
																onClick: () => w("placement"),
																className: "btn btn-primary",
																children: j ? "Searching..." : "Verify",
															}),
														],
													}),
													u != null &&
														l.jsx("div", {
															className: "badge bg-success",
															children: u.first_name + " " + u.last_name,
														}),
												],
											}),
											l.jsxs("div", {
												className: "mb-2 row",
												children: [
													l.jsxs("div", {
														className: "col-sm-6",
														children: [
															l.jsxs("label", {
																children: [
																	"First name ",
																	l.jsx("span", {
																		className: "text-danger",
																		children: "*",
																	}),
																	" ",
																],
															}),
															l.jsx("input", {
																value: e.first_name,
																onChange: (P) =>
																	t({ ...e, first_name: P.target.value }),
																type: "text",
																className: "form-control",
															}),
														],
													}),
													l.jsxs("div", {
														className: "col-sm-6",
														children: [
															l.jsxs("label", {
																children: [
																	"Last name ",
																	l.jsx("span", {
																		className: "text-danger",
																		children: "*",
																	}),
																],
															}),
															l.jsx("input", {
																value: e.last_name,
																onChange: (P) =>
																	t({ ...e, last_name: P.target.value }),
																type: "text",
																className: "form-control",
															}),
														],
													}),
												],
											}),
											l.jsxs("div", {
												className: "mb-2 row",
												children: [
													l.jsxs("div", {
														className: "col-sm-6",
														children: [
															l.jsxs("label", {
																children: [
																	"Mobile no ",
																	l.jsx("span", {
																		className: "text-danger",
																		children: "*",
																	}),
																],
															}),
															l.jsx("input", {
																value: e.mobile,
																onChange: (P) =>
																	t({ ...e, mobile: P.target.value }),
																type: "tel",
																minLength: 8,
																maxLength: 12,
																className: "form-control",
															}),
														],
													}),
													l.jsxs("div", {
														className: "col-sm-6",
														children: [
															l.jsxs("label", {
																children: [
																	"Email address",
																	l.jsx("span", {
																		className: "text-danger",
																		children: "*",
																	}),
																],
															}),
															l.jsx("input", {
																value: e.email_id,
																onChange: (P) =>
																	t({ ...e, email_id: P.target.value }),
																type: "email",
																className: "form-control",
															}),
														],
													}),
												],
											}),
											l.jsxs("div", {
												className: "mb-2 row align-items-center",
												children: [
													l.jsxs("div", {
														className: "col-sm-6",
														children: [
															l.jsxs("label", {
																children: [
																	"Position ",
																	l.jsx("span", {
																		className: "text-danger",
																		children: "*",
																	}),
																],
															}),
															l.jsxs("select", {
																value: e.position,
																onChange: (P) =>
																	t({ ...e, position: P.target.value }),
																className: "form-select",
																children: [
																	l.jsx("option", {
																		value: "0",
																		children: "Select",
																	}),
																	l.jsx("option", {
																		value: "1",
																		children: "LEFT",
																	}),
																	l.jsx("option", {
																		value: "2",
																		children: "RIGHT",
																	}),
																],
															}),
														],
													}),
													l.jsxs("div", {
														className: "col-sm-6",
														children: [
															l.jsxs("label", {
																children: [
																	"Pan Card ",
																	l.jsx("span", {
																		className: "text-danger",
																		children: "*",
																	}),
																],
															}),
															l.jsx("input", {
																value: e.pan_no,
																onChange: (P) => {
																	const M = P.target.value
																		.replace(/[^a-zA-Z0-9]/g, "")
																		.toUpperCase();
																	t({ ...e, pan_no: M });
																},
																type: "text",
																className: "form-control",
															}),
														],
													}),
												],
											}),
											l.jsx("div", {
												className: "d-flex forget-passwd terms",
												children: l.jsxs("label", {
													className: "checkbox",
													children: [
														l.jsx("input", {
															checked: !0,
															disabled: !0,
															type: "checkbox",
															value: "1",
															name: "policy",
														}),
														"I accept all",
														" ",
														l.jsx("a", {
															target: "_blank",
															href: "https://inspirelife.in/terms.php",
															className: "text-primary",
															children: "terms and policy",
														}),
													],
												}),
											}),
											l.jsx("div", {
												className: "p-4 text-center",
												children: l.jsx("button", {
													disabled: n,
													onClick: E,
													className: "btn btn-primary",
													children: n ? "Please wait..." : "Create account",
												}),
											}),
										],
									}),
								],
							}),
							l.jsx("div", {
								className: "card border-0 shadow-sm",
								children: l.jsxs("div", {
									className: "card-body",
									children: [
										"Already have an account? ",
										l.jsx(_e, { to: "/login", children: "Click here" }),
									],
								}),
							}),
						],
					}),
				}),
		  });
}
const tt = ({ item: e, onClick: t }) =>
	l.jsxs("div", {
		className: "userinfo",
		children: [
			l.jsx("img", {
				onClick: () => t(e == null ? void 0 : e.id),
				className: "img-profile rounded-circle",
				src: e == null ? void 0 : e.image,
				title: "",
			}),
			l.jsx("div", {
				className: "text-center img-name",
				style: { height: 65 },
				children: l.jsx("span", {
					className: "small",
					children: e == null ? void 0 : e.username,
				}),
			}),
			l.jsxs("div", {
				className: "userdetails",
				children: [
					l.jsxs("div", {
						className: "us-row",
						children: [
							l.jsx("span", { children: "Designation: " }),
							l.jsx("span", { children: e == null ? void 0 : e.designation }),
						],
					}),
					l.jsxs("div", {
						className: "us-row",
						children: [
							l.jsx("span", { children: "Sponsor ID: " }),
							l.jsx("span", { children: e == null ? void 0 : e.sponsor_id }),
						],
					}),
					l.jsxs("div", {
						className: "us-row",
						children: [
							l.jsx("span", { children: "Sponsor name: " }),
							l.jsx("span", { children: e == null ? void 0 : e.sponsor_name }),
						],
					}),
					l.jsxs("div", {
						className: "us-row",
						children: [
							l.jsx("span", { children: "Placement ID: " }),
							l.jsx("span", { children: e == null ? void 0 : e.placement_id }),
						],
					}),
					l.jsxs("div", {
						className: "us-row",
						children: [
							l.jsx("span", { children: "Username: " }),
							l.jsx("span", { children: e == null ? void 0 : e.username }),
						],
					}),
					l.jsxs("div", {
						className: "us-row",
						children: [
							l.jsx("span", { children: "Name: " }),
							l.jsx("span", { children: e == null ? void 0 : e.name }),
						],
					}),
					l.jsxs("div", {
						className: "us-row",
						children: [
							l.jsx("span", { children: "Active Plan: " }),
							l.jsx("span", { children: e == null ? void 0 : e.plan }),
						],
					}),
					l.jsxs("div", {
						className: "us-row",
						children: [
							l.jsx("span", { children: "DOJ: " }),
							l.jsx("span", { children: e == null ? void 0 : e.doj }),
						],
					}),
					l.jsxs("div", {
						className: "us-row",
						children: [
							l.jsx("span", { children: "Matching: " }),
							l.jsx("span", { children: e == null ? void 0 : e.matching }),
						],
					}),
				],
			}),
		],
	});
function gj() {
	const [e, t] = h.useState([]),
		{ login: n } = h.useContext(we),
		[r, a] = h.useState(!0),
		[s, i] = h.useState(n.id);
	h.useEffect(() => {
		o();
	}, [s]);
	const o = async () => {
			a(!0);
			const c = await ie("users/member-tree", { user_id: s });
			c != null && c.success && t(c.data), a(!1);
		},
		u = (c) => {
			i(c);
		};
	return l.jsxs(l.Fragment, {
		children: [
			r && l.jsx(en, {}),
			!r &&
				l.jsxs("div", {
					className: "container",
					style: { width: "1050px" },
					children: [
						l.jsx("div", {
							className: "d-flex justify-content-center",
							children: l.jsx(tt, { item: e[0], onClick: u }),
						}),
						l.jsx("div", { className: "divr", style: { width: "50%" } }),
						l.jsxs("div", {
							className: "d-flex justify-content-around",
							children: [
								l.jsx("div", {
									children: l.jsx(tt, { item: e[1], onClick: u }),
								}),
								l.jsx("div", {
									children: l.jsx(tt, { item: e[2], onClick: u }),
								}),
							],
						}),
						l.jsxs("div", {
							className: "d-flex justify-content-around",
							children: [
								l.jsx("div", { className: "divr", style: { width: "25%" } }),
								l.jsx("div", { className: "divr", style: { width: "25%" } }),
							],
						}),
						l.jsxs("div", {
							className: "d-flex justify-content-around",
							children: [
								l.jsx("div", {
									children: l.jsx(tt, { item: e[3], onClick: u }),
								}),
								l.jsx("div", {
									children: l.jsx(tt, { item: e[4], onClick: u }),
								}),
								l.jsx("div", {
									children: l.jsx(tt, { item: e[5], onClick: u }),
								}),
								l.jsx("div", {
									children: l.jsx(tt, { item: e[6], onClick: u }),
								}),
							],
						}),
						l.jsxs("div", {
							className: "d-flex justify-content-around",
							children: [
								l.jsx("div", { className: "divr", style: { width: "12.5%" } }),
								l.jsx("div", { className: "divr", style: { width: "12.5%" } }),
								l.jsx("div", { className: "divr", style: { width: "12.5%" } }),
								l.jsx("div", { className: "divr", style: { width: "12.5%" } }),
							],
						}),
						l.jsxs("div", {
							className: "d-flex last-row justify-content-around",
							children: [
								l.jsx("div", {
									children: l.jsx(tt, { item: e[7], onClick: u }),
								}),
								l.jsx("div", {
									children: l.jsx(tt, { item: e[8], onClick: u }),
								}),
								l.jsx("div", {
									children: l.jsx(tt, { item: e[9], onClick: u }),
								}),
								l.jsx("div", {
									children: l.jsx(tt, { item: e[10], onClick: u }),
								}),
								l.jsx("div", {
									children: l.jsx(tt, { item: e[11], onClick: u }),
								}),
								l.jsx("div", {
									children: l.jsx(tt, { item: e[12], onClick: u }),
								}),
								l.jsx("div", {
									children: l.jsx(tt, { item: e[13], onClick: u }),
								}),
								l.jsx("div", {
									children: l.jsx(tt, { item: e[14], onClick: u }),
								}),
							],
						}),
						l.jsx("div", { style: { marginBottom: 100 } }),
					],
				}),
		],
	});
}
const vj = () =>
		l.jsx("div", {
			className: "container mt-2",
			children: l.jsxs("div", {
				className: "d-flex justify-content-between align-items-center mb-4",
				children: [
					l.jsx("h2", {
						className: "fs-4 fw-semibold",
						children: "Ticket ID: #19333",
					}),
					l.jsxs("div", {
						className: "d-flex gap-2 justify-content-end",
						children: [
							l.jsx(_e, {
								to: "/new-tickets",
								children: l.jsx("button", {
									type: "button",
									className: "btn btn-primary rounded",
									children: "New Tickets",
								}),
							}),
							l.jsx(_e, {
								to: "/close-tickets",
								children: l.jsx("button", {
									type: "button",
									className: "btn btn-secondary rounded",
									children: "Closed Tickets",
								}),
							}),
							l.jsx(_e, {
								to: "/all-tickets",
								children: l.jsx("button", {
									type: "button",
									className: "btn btn-dark rounded",
									children: "All Tickets",
								}),
							}),
						],
					}),
				],
			}),
		}),
	yj = () => l.jsx("div", { children: "CloseTicket" }),
	xj = () => l.jsx("div", { children: "AllTicket" });
function wj() {
	const [e, t] = h.useState(0),
		{ login: n } = h.useContext(we),
		[r, a] = h.useState(!1),
		[s, i] = h.useState({ message: "", type: "" }),
		[o, u] = h.useState("0"),
		[c] = h.useState(!1),
		[d, p] = h.useState([]);
	h.useEffect(() => {
		m(), y();
	}, []);
	const m = async () => {
			ie("users/plans").then((g) => {
				if (g != null && g.success) {
					const S = g.data.map((v) => ({
						...v,
						disabled: v.plan_id === 0 || v.plan_id === 1,
					}));
					p(S);
				}
			});
		},
		y = () => {
			ie("users/get-balance-info", { user_id: n.id }).then((g) => {
				g != null && g.success && t(g.data);
			});
		},
		j = () => {
			i({ ...s, message: "" }),
				a(!0),
				ie("users/upgrade", {
					username: n.username,
					from_id: n.id,
					plan_id: o,
					payfrom: e,
				})
					.then((g) => {
						g != null && g.success
							? (i({ message: g.message, type: "success" }), y())
							: i({ message: g.message, type: "danger" });
					})
					.finally(() => a(!1));
		};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: "Upgrade Account" }),
			}),
			l.jsx("div", {
				className: "row",
				children: l.jsxs("div", {
					className: "col-sm-6 m-auto",
					children: [
						l.jsxs("div", {
							className: "box p-3 shadow-sm mb-2",
							children: [
								s.message.length > 0 &&
									l.jsx("div", {
										className: "alert alert-" + s.type,
										children: s.message,
									}),
								l.jsxs("div", {
									className: "card-body",
									children: [
										l.jsxs("div", {
											className: "mb-3 row",
											children: [
												l.jsx("label", {
													className: "col-sm-3",
													children: "Upgrade Amount",
												}),
												l.jsx("div", {
													className: "col-sm-8",
													children: l.jsxs("select", {
														value: e.selectedType || "0",
														onChange: (g) => {
															const S = g.target.value;
															t({
																...e,
																selectedType: S,
																selectedBalance: e[S + "_balance"],
															});
														},
														className: "form-select",
														children: [
															l.jsx("option", {
																value: "0",
																children: "Select",
															}),
															l.jsxs("option", {
																value: "main",
																children: [
																	"Main balance ",
																	e.main_balance || 0,
																],
															}),
															l.jsxs("option", {
																value: "fund",
																children: [
																	"Fund balance ",
																	e.fund_balance || 0,
																],
															}),
															l.jsxs("option", {
																value: "wallet",
																children: [
																	"Wallet balance ",
																	e.wallet_balance || 0,
																],
															}),
														],
													}),
												}),
											],
										}),
										l.jsxs("div", {
											className: "mb-3 row",
											children: [
												l.jsx("label", {
													className: "col-sm-3",
													children: "Upgrade Plans",
												}),
												l.jsx("div", {
													className: "col-sm-8",
													children: l.jsxs("select", {
														value: o,
														onChange: (g) => u(g.target.value),
														className: "form-select",
														children: [
															l.jsx("option", {
																value: "0",
																children: "Select",
															}),
															d.map((g) =>
																l.jsx(
																	"option",
																	{
																		value: g.plan_id,
																		disabled: g.disabled,
																		children: g.label,
																	},
																	g.plan_id,
																),
															),
														],
													}),
												}),
											],
										}),
										l.jsxs("div", {
											className: "row align-items-center",
											children: [
												l.jsx("label", { className: "col-sm-3" }),
												l.jsx("div", {
													className: "col-sm-8",
													children: l.jsx("button", {
														onClick: j,
														disabled: r || c,
														className: "btn btn-primary",
														children: r ? "Please wait..." : "Upgrade",
													}),
												}),
											],
										}),
									],
								}),
							],
						}),
						l.jsxs("div", {
							className: "bg-danger p-2 text-white text-center",
							style: { borderRadius: 3 },
							children: [
								"Don't have sufficient Funds?",
								" ",
								l.jsx(_e, {
									className: "text-warning",
									to: "/dashboard/fund-request",
									children: "Click here",
								}),
							],
						}),
					],
				}),
			}),
		],
	});
}
const jj = () => {
	const { login: e } = h.useContext(we),
		[t, n] = h.useState(),
		[r, a] = h.useState(),
		[s, i] = h.useState(),
		[o, u] = h.useState({ type: "", message: "" }),
		[c, d] = h.useState({ aadharFront: "", aadharBack: "", pan: "" });
	h.useEffect(() => {
		y();
	}, [e.id]);
	const [p, m] = h.useState(!0),
		y = async () => {
			m(!0);
			let g = await ie("users/userinfo", { user_id: e.id });
			g != null && g.success && d(g.data), m(!1);
		},
		j = async () => {
			if (!t || !r || !s) {
				u({ type: "error", message: "All files are required." });
				return;
			}
			const g = new FormData();
			g.append("user_id", e.id.toString()),
				g.append("aadhar_front", r),
				g.append("aadhar_back", s),
				g.append("pan", t);
			try {
				let S = In.API_URL + "users/upload-kyc";
				const f = (await ce.post(S, g)).data;
				console.log(f),
					f.success
						? (u({ message: f.message, type: "success" }), y())
						: u({ message: f.message, type: "error" });
			} catch {
				u({ type: "error", message: "An error occurred during submission." });
			}
		};
	return p
		? l.jsx(l.Fragment, { children: l.jsx(en, {}) })
		: l.jsxs("div", {
				children: [
					l.jsx("div", {
						className: "page-header",
						children: l.jsxs("h5", {
							children: [
								"KYC Update - Your KYC Status:",
								" ",
								c.kyc_status == 1
									? "Approved"
									: c.kyc_status == -1
									? "Processing"
									: c.kyc_status == 0
									? "Pending"
									: "Rejected",
							],
						}),
					}),
					o.message &&
						l.jsx("div", {
							className: `alert ${
								o.type === "success" ? "alert-success" : "alert-danger"
							} mt-3`,
							children: o.message,
						}),
					l.jsx("div", {
						className: "row",
						children: l.jsx("div", {
							className: "col-sm-8",
							children: l.jsxs("div", {
								className: "box p-3",
								children: [
									l.jsx("table", {
										className: "table",
										children: l.jsxs("tbody", {
											children: [
												l.jsxs("tr", {
													children: [
														l.jsx("td", { children: "PAN Card" }),
														l.jsx("td", {
															children: c.pan
																? l.jsx("img", {
																		src: c.pan,
																		alt: "PAN Card",
																		style: { width: "100px", height: "100px" },
																  })
																: l.jsx("input", {
																		type: "file",
																		className: "form-control",
																		accept: "image/*",
																		disabled: c.kyc_status === 1,
																		onChange: (g) =>
																			n(
																				g.target.files
																					? g.target.files[0]
																					: null,
																			),
																  }),
														}),
													],
												}),
												l.jsxs("tr", {
													children: [
														l.jsx("td", { children: "Aadhar Card (Front)" }),
														l.jsx("td", {
															children: c.aadharf
																? l.jsx("img", {
																		src: c.aadharf,
																		alt: "Aadhar Front",
																		style: { width: "100px", height: "100px" },
																  })
																: l.jsx("input", {
																		type: "file",
																		className: "form-control",
																		accept: "image/*",
																		disabled: c.kyc_status === 1,
																		onChange: (g) =>
																			a(
																				g.target.files
																					? g.target.files[0]
																					: null,
																			),
																  }),
														}),
													],
												}),
												l.jsxs("tr", {
													children: [
														l.jsx("td", { children: "Aadhar Card (Back)" }),
														l.jsx("td", {
															children: c.aadharb
																? l.jsx("img", {
																		src: c.aadharb,
																		alt: "Aadhar Back",
																		style: { width: "100px", height: "100px" },
																  })
																: l.jsx("input", {
																		type: "file",
																		className: "form-control",
																		accept: "image/*",
																		disabled: c.kyc_status === 1,
																		onChange: (g) =>
																			i(
																				g.target.files
																					? g.target.files[0]
																					: null,
																			),
																  }),
														}),
													],
												}),
											],
										}),
									}),
									l.jsx("button", {
										disabled: !t || !r || !s || c.kyc_status === 1,
										onClick: j,
										className: "btn btn-primary mt-3",
										children: "SUBMIT FOR REVIEW",
									}),
								],
							}),
						}),
					}),
				],
		  });
};
function Nj() {
	const { login: e } = h.useContext(we),
		[t, n] = h.useState([]);
	h.useEffect(() => {
		r();
	}, [e.id]);
	const r = () => {
		ie("products/order-history", { user_id: e.id }).then((a) => {
			a.success && n(a.data);
		});
	};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: "My Orders" }),
			}),
			l.jsxs("div", {
				className: "card",
				children: [
					l.jsx("div", { className: "card-header", children: "List" }),
					l.jsxs("table", {
						className: "table",
						children: [
							l.jsx("thead", {
								children: l.jsxs("tr", {
									children: [
										l.jsx("th", { children: "Sl No" }),
										l.jsx("th", { children: "User Id" }),
										l.jsx("th", { children: "Amount" }),
										l.jsx("th", { children: "PV" }),
										l.jsx("th", { children: "Status" }),
										l.jsx("th", { children: "Created" }),
										l.jsx("th", { children: "Updated" }),
										l.jsx("th", { children: "Comments" }),
									],
								}),
							}),
							l.jsx("tbody", {
								children:
									t.length > 0
										? t.map((a, s) =>
												l.jsxs(
													"tr",
													{
														children: [
															l.jsx("td", { children: s + 1 }),
															l.jsx("td", { children: a.user_id }),
															l.jsx("td", { children: a.amount }),
															l.jsx("td", { children: a.pv }),
															l.jsx("td", { children: a.statusText }),
															l.jsx("td", { children: a.created }),
															l.jsx("td", { children: a.updated }),
															l.jsx("td", { children: a.comments }),
														],
													},
													a.id,
												),
										  )
										: l.jsx("tr", {
												children: l.jsx("td", {
													colSpan: 8,
													className: "text-center",
													children: "No Data Found",
												}),
										  }),
							}),
						],
					}),
				],
			}),
		],
	});
}
const Sj = () => {
		const [e, t] = h.useState([]),
			[n, r] = h.useState({ type: "", message: "" });
		h.useEffect(() => {
			a();
		}, []);
		const a = async () => {
				ie("products").then((i) => {
					i != null && i.success && t(i.data);
				});
			},
			s = (i) => {
				try {
					const o = localStorage.getItem("cart");
					let u = [];
					if (o)
						try {
							const d = JSON.parse(o);
							Array.isArray(d)
								? (u = d)
								: r({
										message:
											"Cart data in localStorage is not an array. Resetting...",
										type: "danger",
								  });
						} catch (d) {
							r({ message: d.message, type: "danger" });
						}
					const c = u.find((d) => d.id === i.id);
					c ? (c.qty += 1) : u.push({ ...i, qty: 1 }),
						localStorage.setItem("cart", JSON.stringify(u)),
						r({ message: "Item has been added to the cart.", type: "success" });
				} catch (o) {
					r({ message: o.message, type: "danger" });
				}
			};
		return l.jsxs(l.Fragment, {
			children: [
				l.jsxs("div", {
					className: "page-header",
					children: [
						l.jsx("h5", { children: "Latest Products" }),
						l.jsx(_e, {
							to: xm("view-cart"),
							children: l.jsx("button", {
								className: "btn btn-primary rounded-1",
								children: "View Cart",
							}),
						}),
					],
				}),
				n.message.length > 0 &&
					l.jsx("div", {
						className: "alert alert-" + n.type,
						children: n.message,
					}),
				l.jsx("div", {
					className: "row",
					children:
						e.length > 0
							? e.map((i) =>
									l.jsx(
										"div",
										{
											className: "col-md-3 mb-4",
											children: l.jsxs("div", {
												className: "card h-100 rounded-2",
												children: [
													l.jsx("img", {
														src: i.image,
														className: "card-img-top",
														alt: i.name,
														style: { height: "200px", objectFit: "cover" },
													}),
													l.jsxs("div", {
														className: "card-body text-center",
														children: [
															l.jsx("h6", {
																className: "card-title",
																children: i.name,
															}),
															l.jsxs("p", {
																className: "card-text",
																children: ["Price: ₹", i.price],
															}),
															l.jsx("button", {
																className: "btn btn-primary ",
																onClick: () => s(i),
																children: "Add To Cart",
															}),
														],
													}),
												],
											}),
										},
										i.id,
									),
							  )
							: l.jsx("p", {
									className: "text-center",
									children: "Loading products...",
							  }),
				}),
			],
		});
	},
	Cj = () => {
		const { login: e } = h.useContext(we),
			[t, n] = h.useState(0),
			[r, a] = h.useState([]),
			[s, i] = h.useState("Fund Balance"),
			[o, u] = h.useState({ type: "", message: "" }),
			[c, d] = h.useState(!1);
		h.useEffect(() => {
			try {
				const f = localStorage.getItem("cart"),
					x = f ? JSON.parse(f) : [];
				if (Array.isArray(x)) {
					const E = x.map((w) => ({ ...w, price: Number(w.price) }));
					a(E);
				} else a([]);
			} catch (f) {
				console.error("Error parsing cart data from localStorage:", f), a([]);
			}
		}, []);
		const p = (f) => {
				localStorage.setItem("cart", JSON.stringify(f)), a(f);
			},
			m = (f) => {
				const x = r.map((E) => (E.id === f ? { ...E, qty: E.qty + 1 } : E));
				p(x);
			},
			y = (f) => {
				const x = r
					.map((E) => (E.id === f && E.qty > 1 ? { ...E, qty: E.qty - 1 } : E))
					.filter((E) => E.qty > 0);
				p(x);
			},
			j = (f) => {
				const x = r.filter((E) => E.id !== f);
				p(x);
			},
			g = () => r.reduce((f, x) => f + x.price * x.qty, 0),
			S = async () => {
				d(!0);
				const f = {
					user_id: e.id,
					wallet: s === "Fund Balance" ? "fund" : "main",
					items: r.map((x) => ({
						id: String(x.id),
						amount: String(x.price),
						qty: String(x.qty),
						bv: "0",
					})),
				};
				try {
					let x = In.API_URL + "products/create-order";
					ce.post(x, f).then((E) => {
						E != null && E.data.success
							? (u({ message: "Order Created Successfully", type: "success" }),
							  localStorage.removeItem("cart"),
							  a([]))
							: u({ message: "Failed To Create Order", type: "danger" });
					});
				} catch (x) {
					u({ message: x.message, type: "danger" });
				} finally {
					d(!1);
				}
			};
		h.useEffect(() => {
			v();
		}, [e.id]);
		const v = async () => {
			ie("users/get-balance-info", { user_id: e.id }).then((f) => {
				f != null && f.success && n(f == null ? void 0 : f.data);
			});
		};
		return l.jsxs(l.Fragment, {
			children: [
				l.jsxs("div", {
					className: "page-header",
					children: [
						l.jsx("h5", { children: "Order Summary" }),
						l.jsx("button", {
							className: "btn btn-sm btn-primary rounded-1",
							onClick: () => {
								localStorage.removeItem("cart"), a([]);
							},
							children: "Remove All",
						}),
					],
				}),
				l.jsxs("div", {
					className: "row",
					children: [
						o.message.length > 0 &&
							l.jsx("div", {
								className: "alert alert-" + o.type,
								children: o.message,
							}),
						l.jsxs("div", {
							className:
								"border my-3 -mx-4 d-flex justify-content-around gap-2 bg-white p-3",
							children: [
								l.jsx("h6", { children: "Pay via" }),
								l.jsxs("div", {
									className: "d-flex align-items-center gap-3",
									children: [
										l.jsxs("label", {
											className:
												"form-check-label d-flex align-items-center me-4",
											children: [
												l.jsx("input", {
													type: "radio",
													name: "paymentMode",
													value: "Fund Balance",
													checked: s === "Fund Balance",
													onChange: (f) => i(f.target.value),
													className: "form-check-input me-2",
												}),
												t &&
													l.jsxs("span", {
														children: ["Rs - ", t.fund_balance, " /-"],
													}),
												" Fund Balance",
											],
										}),
										l.jsxs("label", {
											className: "form-check-label d-flex align-items-center",
											children: [
												l.jsx("input", {
													type: "radio",
													name: "paymentMode",
													value: "Main Balance",
													checked: s === "Main Balance",
													onChange: (f) => i(f.target.value),
													className: "form-check-input me-2",
												}),
												t &&
													l.jsxs("span", {
														children: ["Rs - ", t.main_balance, " /-"],
													}),
												" Main Balance",
											],
										}),
									],
								}),
							],
						}),
					],
				}),
				l.jsxs("div", {
					className: "row",
					children: [
						r.length > 0
							? l.jsx("div", {
									className: "table-responsive",
									children: l.jsxs("table", {
										className: "table table-bordered",
										children: [
											l.jsx("thead", {
												children: l.jsxs("tr", {
													children: [
														l.jsx("th", { children: "Sl No" }),
														l.jsx("th", { children: "Product" }),
														l.jsx("th", { children: "Rate" }),
														l.jsx("th", { children: "Qty" }),
														l.jsx("th", { children: "Sub Total" }),
														l.jsx("th", { children: "Actions" }),
													],
												}),
											}),
											l.jsx("tbody", {
												children: r.map((f, x) =>
													l.jsxs(
														"tr",
														{
															children: [
																l.jsx("td", { children: x + 1 }),
																l.jsx("td", {
																	children: l.jsx("img", {
																		src: f.image,
																		alt: "Product-img",
																		width: 24,
																		height: 24,
																		className: "rounded-2",
																	}),
																}),
																l.jsxs("td", {
																	children: ["₹", f.price.toFixed(2)],
																}),
																l.jsxs("td", {
																	children: [
																		l.jsx("button", {
																			className: "btn btn-light",
																			onClick: () => y(f.id),
																			children: "-",
																		}),
																		l.jsx("span", {
																			className: "mx-2",
																			children: f.qty,
																		}),
																		l.jsx("button", {
																			className: "btn btn-light",
																			onClick: () => m(f.id),
																			children: "+",
																		}),
																	],
																}),
																l.jsxs("td", {
																	children: ["₹", (f.price * f.qty).toFixed(2)],
																}),
																l.jsx("td", {
																	children: l.jsx("button", {
																		className: "btn btn-danger",
																		onClick: () => j(f.id),
																		children: "Remove",
																	}),
																}),
															],
														},
														f.id,
													),
												),
											}),
											l.jsx("tfoot", {
												children: l.jsxs("tr", {
													children: [
														l.jsx("td", {
															colSpan: 4,
															className: "text-start",
															children: l.jsx("strong", {
																children: "Total Amount:",
															}),
														}),
														l.jsxs("td", {
															colSpan: 2,
															children: ["₹", g().toFixed(2)],
														}),
													],
												}),
											}),
										],
									}),
							  })
							: l.jsx("div", {
									className: "table-responsive",
									children: l.jsxs("table", {
										className: "table table-bordered",
										children: [
											l.jsx("thead", {
												children: l.jsxs("tr", {
													children: [
														l.jsx("th", { children: "Sl No" }),
														l.jsx("th", { children: "Product" }),
														l.jsx("th", { children: "Rate" }),
														l.jsx("th", { children: "Qty" }),
														l.jsx("th", { children: "Sub Total" }),
														l.jsx("th", { children: "Actions" }),
													],
												}),
											}),
											l.jsx("tbody", {
												children: l.jsx("tr", {
													children: l.jsx("td", {
														colSpan: 6,
														className: "text-center",
														children: "Your cart is empty.",
													}),
												}),
											}),
										],
									}),
							  }),
						l.jsxs("div", {
							className: "text-center mt-3",
							children: [
								l.jsx(_e, {
									to: xm("view-products"),
									children: l.jsx("button", {
										className: "btn btn-secondary mx-2",
										children: "Back",
									}),
								}),
								l.jsx("button", {
									className: "btn btn-primary mx-2",
									onClick: r.length > 0 ? S : void 0,
									disabled: r.length === 0 || c,
									children: c ? "Processing..." : "Checkout",
								}),
							],
						}),
					],
				}),
			],
		});
	},
	Ej = () => {
		const [e, t] = h.useState({ email: "" }),
			[n, r] = h.useState({ type: "", message: "" }),
			a = () => {
				if (e.email == "") {
					r({ type: "danger", message: "Please fill all fields" });
					return;
				}
				ie("users/forget-password", { email_id: e.email }).then((s) => {
					s.success
						? (r({ type: "success", message: s.message }), t({ email: "" }))
						: r({ type: "danger", message: s.message });
				});
			};
		return l.jsxs(l.Fragment, {
			children: [
				l.jsx("div", {
					className: "page-header",
					children: l.jsx("h5", { children: "Forgot Password" }),
				}),
				l.jsx("div", {
					className: "row",
					children: l.jsxs("div", {
						className: "col-sm-5",
						children: [
							n.message.length > 0 &&
								l.jsx("div", {
									className: "alert alert-" + n.type,
									children: n.message,
								}),
							l.jsxs("div", {
								className: "card p-3",
								children: [
									l.jsxs("div", {
										className: "mb-3",
										children: [
											l.jsx("label", {
												className: "mb-1",
												children: "Enter Your Email",
											}),
											l.jsx("input", {
												type: "email",
												value: e.email,
												onChange: (s) => t({ ...e, email: s.target.value }),
												className: "form-control",
												placeholder: "Email Address",
											}),
										],
									}),
									l.jsx(ur, { onClick: a, children: "SUBMIT" }),
								],
							}),
						],
					}),
				}),
			],
		});
	};
function kj() {
	const { login: e } = h.useContext(we),
		[t, n] = h.useState([]),
		[r, a] = h.useState(!0),
		[s] = h.useState(1),
		[i] = h.useState(0),
		o = 50;
	h.useEffect(() => {
		u();
	}, [e.id]);
	const u = async () => {
		a(!0),
			ie("users/rewards", { user_id: e.id }).then((c) => {
				c.success && n(c.data);
			}),
			a(!1);
	};
	return l.jsxs(l.Fragment, {
		children: [
			l.jsx("div", {
				className: "page-header",
				children: l.jsx("h5", { children: "Rank Rewards" }),
			}),
			l.jsxs("div", {
				className: "card card-body mb-2",
				children: [
					r && l.jsx(en, {}),
					!r &&
						l.jsxs("table", {
							className: "table",
							children: [
								l.jsx("thead", {
									children: l.jsxs("tr", {
										children: [
											l.jsx("th", { children: "Sl No" }),
											l.jsx("th", { children: "Left BV" }),
											l.jsx("th", { children: "Right BV" }),
											l.jsx("th", { children: "Rank" }),
											l.jsx("th", { children: "Status" }),
											l.jsx("th", { children: "Rewards" }),
										],
									}),
								}),
								l.jsx("tbody", {
									children:
										(t == null ? void 0 : t.length) > 0
											? t.map((c, d) =>
													l.jsxs(
														"tr",
														{
															children: [
																l.jsx("td", { children: d + 1 }),
																l.jsx("td", { children: c.left_bv }),
																l.jsx("td", { children: c.right_bv }),
																l.jsx("td", { children: c.rank }),
																l.jsx("td", { children: c.status }),
																l.jsx("td", { children: c.rewards }),
															],
														},
														c.id,
													),
											  )
											: l.jsx("tr", {
													children: l.jsx("td", {
														colSpan: 6,
														className: "text-center",
														children: "No rewards available",
													}),
											  }),
								}),
							],
						}),
				],
			}),
			l.jsx(Vl, { perPage: o, total: i, onChange: s }),
		],
	});
}
const bj = mx([
	{ path: "/", element: l.jsx(mf, {}) },
	{ path: "/login", element: l.jsx(hj, {}) },
	{ path: "/logout", element: l.jsx(pj, {}) },
	{ path: "/signup", element: l.jsx(mj, {}) },
	{
		path: "/dashboard",
		element: l.jsx(mf, {}),
		children: [
			{ path: "/dashboard", element: l.jsx(wm, {}) },
			{ path: "members", element: l.jsx(Pi, {}) },
			{ path: "topup-account", element: l.jsx(Kw, {}) },
			{ path: "upgrade-account", element: l.jsx(wj, {}) },
			{ path: "topup-history", element: l.jsx(dj, {}) },
			{ path: "edit-profile", element: l.jsx(aj, {}) },
			{ path: "change-password", element: l.jsx(sj, {}) },
			{ path: "upload-kyc", element: l.jsx(jj, {}) },
			{ path: "forgot-password", element: l.jsx(Ej, {}) },
			{ path: "fund-request", element: l.jsx(fj, {}) },
			{ path: "deposite-history", element: l.jsx(lj, {}) },
			{ path: "fund-transfer", element: l.jsx(ij, {}) },
			{ path: "fund-transfer-history", element: l.jsx(oj, {}) },
			{ path: "my-orders", element: l.jsx(Nj, {}) },
			{ path: "view-products", element: l.jsx(Sj, {}) },
			{ path: "view-cart", element: l.jsx(Cj, {}) },
			{
				path: "direct-members",
				element: l.jsx(Pi, { title: "Direct Members", users: "direct" }),
			},
			{
				path: "my-downline",
				element: l.jsx(Pi, { title: "My Downline", users: "downline" }),
			},
			{ path: "payment-report", element: l.jsx(gf, {}) },
			{ path: "payment-report/:tab", element: l.jsx(gf, {}) },
			{ path: "rank-rewards", element: l.jsx(kj, {}) },
			{ path: "withdraw", element: l.jsx(Vw, {}) },
			{ path: "withdraw-history", element: l.jsx(Ww, {}) },
			{ path: "supports", element: l.jsx(qw, {}) },
			{ path: "member-tree", element: l.jsx(gj, {}) },
			{ path: "new-ticket", element: l.jsx(vj, {}) },
			{ path: "close-ticket", element: l.jsx(yj, {}) },
			{ path: "all-ticket", element: l.jsx(xj, {}) },
		],
	},
]);
function Pj() {
	return l.jsx(bx, { router: bj });
}
function Rj() {
	const [e, t] = h.useState({
			id: 0,
			username: "",
			plan_total: "",
			ac_active_date: "",
			sponsor_id: "",
			first_name: "",
			last_name: "",
		}),
		[n, r] = h.useState(null),
		[a, s] = h.useState(!0);
	return (
		h.useEffect(() => {
			const i = localStorage.getItem("_login");
			i !== null && t(JSON.parse(i)), s(!1);
		}, [e.id]),
		l.jsx(we.Provider, {
			value: { login: e, setLogin: t, token: n, setToken: r },
			children: a ? l.jsx(en, {}) : l.jsx(Pj, {}),
		})
	);
}
Ri.createRoot(document.getElementById("root")).render(
	l.jsx(ae.StrictMode, { children: l.jsx(Rj, {}) }),
);
