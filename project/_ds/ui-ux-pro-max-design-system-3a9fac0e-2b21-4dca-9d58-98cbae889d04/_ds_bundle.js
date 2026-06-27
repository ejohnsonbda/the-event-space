/* @ds-bundle: {"format":3,"namespace":"UIUXProMaxDesignSystem_3a9fac","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"GradientText","sourcePath":"components/core/GradientText.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Terminal","sourcePath":"components/core/Terminal.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"52915997f1af","components/core/Button.jsx":"456bfd01c1f0","components/core/Card.jsx":"7fee087e9d93","components/core/GradientText.jsx":"22ffe3b41a4d","components/core/Input.jsx":"c6052323c998","components/core/Pill.jsx":"7b9071638918","components/core/StatCard.jsx":"26713911fd75","components/core/Switch.jsx":"da781a6feffd","components/core/Tabs.jsx":"30308f03b817","components/core/Terminal.jsx":"c6b69114ad18","ui_kits/website/app.jsx":"b6c549f66584","ui_kits/website/icons.jsx":"cbf9cc39f9de","ui_kits/website/screens.jsx":"2e6a2f141bb3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UIUXProMaxDesignSystem_3a9fac = window.UIUXProMaxDesignSystem_3a9fac || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UI UX Pro Max — Badge
 * Compact status / count label. Soft tinted fills on the dark canvas, with an
 * optional leading dot. Tones map to the semantic palette.
 */
const TONES = {
  neutral: {
    bg: 'rgba(255,255,255,0.07)',
    fg: 'var(--slate-200)',
    dot: 'var(--slate-400)'
  },
  primary: {
    bg: 'rgba(38,102,243,0.16)',
    fg: 'var(--blue-300)',
    dot: 'var(--blue-400)'
  },
  accent: {
    bg: 'rgba(249,115,22,0.16)',
    fg: 'var(--orange-300)',
    dot: 'var(--orange-400)'
  },
  success: {
    bg: 'rgba(46,207,143,0.15)',
    fg: '#7ee9bf',
    dot: 'var(--success)'
  },
  warning: {
    bg: 'rgba(245,178,49,0.15)',
    fg: '#f6cd7a',
    dot: 'var(--warning)'
  },
  danger: {
    bg: 'rgba(244,73,93,0.15)',
    fg: '#f6909c',
    dot: 'var(--danger)'
  }
};
function Badge({
  tone = 'neutral',
  dot = false,
  solid = false,
  children,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '4px 10px',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.01em',
    lineHeight: 1.4,
    background: solid ? t.dot : t.bg,
    color: solid ? '#0a0e1a' : t.fg,
    border: '1px solid ' + (solid ? 'transparent' : 'rgba(255,255,255,0.05)'),
    ...rest.style
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: style
  }), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? '#0a0e1a' : t.dot
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UI UX Pro Max — Button
 * The brand's core action. Electric-blue primary with a soft glow on hover,
 * an orange accent, quiet secondary/ghost variants, and a spectrum-gradient
 * special. Built on design tokens; dark-first.
 */
const SIZES = {
  sm: {
    padding: '8px 14px',
    fontSize: 13,
    borderRadius: 'var(--radius-sm)',
    gap: 6,
    height: 34
  },
  md: {
    padding: '0 20px',
    fontSize: 15,
    borderRadius: 'var(--radius-md)',
    gap: 8,
    height: 44
  },
  lg: {
    padding: '0 26px',
    fontSize: 16,
    borderRadius: 'var(--radius-md)',
    gap: 9,
    height: 52
  }
};
function variantStyle(variant, hover, active) {
  switch (variant) {
    case 'accent':
      return {
        background: hover ? 'var(--brand-accent-hover)' : 'var(--brand-accent)',
        color: 'var(--text-on-accent)',
        border: '1px solid transparent',
        boxShadow: hover ? 'var(--glow-accent)' : 'none'
      };
    case 'secondary':
      return {
        background: hover ? 'var(--surface-card-hover)' : 'var(--surface-card)',
        color: 'var(--text-strong)',
        border: '1px solid var(--border-default)'
      };
    case 'ghost':
      return {
        background: hover ? 'rgba(255,255,255,0.06)' : 'transparent',
        color: 'var(--text-body)',
        border: '1px solid transparent'
      };
    case 'spectrum':
      return {
        background: 'var(--gradient-spectrum)',
        color: '#fff',
        border: '1px solid transparent',
        boxShadow: hover ? 'var(--glow-primary)' : 'none',
        filter: hover ? 'saturate(1.1) brightness(1.05)' : 'none'
      };
    case 'primary':
    default:
      return {
        background: hover ? 'var(--brand-primary-hover)' : 'var(--brand-primary)',
        color: 'var(--text-on-primary)',
        border: '1px solid transparent',
        boxShadow: hover ? 'var(--glow-primary)' : 'none'
      };
  }
}
function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconRight,
  disabled = false,
  full = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = variantStyle(variant, hover && !disabled, active);
  const style = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: s.borderRadius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    letterSpacing: '-0.01em',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    transform: active && !disabled ? 'translateY(1px) scale(0.99)' : 'none',
    opacity: disabled ? 0.45 : 1,
    ...v
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UI UX Pro Max — Card
 * Dark surface container with a hairline border. Optional hover lift for
 * interactive cards and an optional accent glow.
 */
function Card({
  children,
  interactive = false,
  glow = false,
  padding = 24,
  as = 'div',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const style = {
    background: hover && interactive ? 'var(--surface-card-hover)' : 'var(--surface-card)',
    border: '1px solid ' + (hover && interactive ? 'var(--border-strong)' : 'var(--border-default)'),
    borderRadius: 'var(--radius-lg)',
    padding,
    boxShadow: glow ? 'var(--glow-primary)' : hover && interactive ? 'var(--shadow-lg)' : 'var(--shadow-md)',
    transition: 'all var(--dur-base) var(--ease-out)',
    transform: hover && interactive ? 'translateY(-3px)' : 'none',
    cursor: interactive ? 'pointer' : 'default',
    ...rest.style
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: style,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false)
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/GradientText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UI UX Pro Max — GradientText
 * Applies the brand blue→indigo→orange spectrum to text. Use for the wordmark
 * and a single hero emphasis per view.
 */
function GradientText({
  children,
  as = 'span',
  soft = false,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      backgroundImage: soft ? 'var(--gradient-spectrum-soft)' : 'var(--gradient-spectrum)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      WebkitTextFillColor: 'transparent',
      ...rest.style
    }
  }), children);
}
Object.assign(__ds_scope, { GradientText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GradientText.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UI UX Pro Max — Input
 * Text field on the dark canvas. Hairline border that lights up blue on focus,
 * optional leading icon and label.
 */
function Input({
  label,
  icon,
  hint,
  error,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? 'in-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--brand-primary)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      width: '100%'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 14px',
      height: 44,
      background: 'var(--surface-inset)',
      border: '1px solid ' + borderColor,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px rgba(38,102,243,0.18)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId
  }, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      height: '100%'
    }
  }))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UI UX Pro Max — Pill
 * The rounded "Works with …" chip from the hero: a logo/icon slot + label on a
 * dark glassy surface. Optionally interactive (hover lift + border highlight).
 */
function Pill({
  icon,
  children,
  active = false,
  as = 'div',
  href,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!(href || onClick);
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '7px 14px 7px 8px',
    borderRadius: 'var(--radius-pill)',
    background: hover && interactive ? 'var(--surface-elevated)' : 'var(--surface-card)',
    border: '1px solid ' + (active ? 'var(--brand-primary)' : 'var(--border-default)'),
    color: 'var(--text-body)',
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 600,
    textDecoration: 'none',
    cursor: interactive ? 'pointer' : 'default',
    transition: 'all var(--dur-base) var(--ease-out)',
    transform: hover && interactive ? 'translateY(-1px)' : 'none',
    boxShadow: active ? 'var(--glow-primary)' : 'none',
    ...rest.style
  };
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    onClick: onClick,
    style: style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--navy-740)',
      color: 'var(--text-strong)',
      flexShrink: 0
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UI UX Pro Max — StatCard
 * The numbered metric tile from the hero: outline icon, big blue figure, label.
 * Dark surface, hairline border, subtle hover lift.
 */
function StatCard({
  icon,
  value,
  label,
  accent = 'primary',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const valueColor = accent === 'accent' ? 'var(--orange-400)' : 'var(--blue-400)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-lg)',
      padding: '22px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 120,
      transition: 'all var(--dur-base) var(--ease-out)',
      transform: hover ? 'translateY(-3px)' : 'none',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      ...rest.style
    }
  }), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: valueColor,
      display: 'inline-flex'
    }
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 1,
      color: valueColor
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UI UX Pro Max — Switch
 * Toggle control. Off = navy track, On = brand blue track with a glow.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  ...rest
}) {
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const control = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: toggle,
    style: {
      width: 46,
      height: 27,
      borderRadius: 999,
      border: 'none',
      padding: 3,
      background: checked ? 'var(--brand-primary)' : 'var(--navy-680)',
      boxShadow: checked ? 'var(--glow-primary)' : 'inset 0 1px 2px rgba(0,0,0,0.4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 21,
      height: 21,
      borderRadius: '50%',
      background: '#fff',
      transform: checked ? 'translateX(19px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-spring)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.4)'
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UI UX Pro Max — Tabs
 * Horizontal segmented nav. Active tab gets a blue underline and bright label;
 * controlled or uncontrolled.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      ...rest.style
    }
  }), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => select(it.id),
      style: {
        position: 'relative',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '10px 16px 13px',
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: 600,
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'color var(--dur-base)'
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1,
        height: 2,
        borderRadius: 2,
        background: on ? 'var(--brand-primary)' : 'transparent',
        boxShadow: on ? '0 0 12px rgba(38,102,243,0.6)' : 'none',
        transition: 'background var(--dur-base)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Terminal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UI UX Pro Max — Terminal
 * The CLI motif rendered as a styled block: optional traffic-light title bar
 * and mono lines. Pass plain strings (auto-tokenized: leading $, --flags,
 * # comments) or your own nodes.
 */
function tokenize(line, i) {
  if (typeof line !== 'string') return /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      minHeight: '1.5em'
    }
  }, line);
  if (line.trimStart().startsWith('#')) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        color: 'var(--text-faint)'
      }
    }, line);
  }
  const parts = line.split(/(\s+)/);
  let sawPrompt = false;
  return /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      minHeight: '1.5em',
      whiteSpace: 'pre-wrap'
    }
  }, parts.map((p, j) => {
    if (p === '$' && !sawPrompt) {
      sawPrompt = true;
      return /*#__PURE__*/React.createElement("span", {
        key: j,
        style: {
          color: 'var(--orange-500)'
        }
      }, "$");
    }
    if (p.startsWith('--')) return /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        color: 'var(--blue-300)'
      }
    }, p);
    if (/^".*"$/.test(p)) return /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        color: 'var(--orange-300)'
      }
    }, p);
    return /*#__PURE__*/React.createElement("span", {
      key: j
    }, p);
  }));
}
function Terminal({
  title,
  lines = [],
  chrome = true,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: 'var(--surface-code)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)',
      boxShadow: 'var(--shadow-md)',
      ...rest.style
    }
  }), chrome ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 14px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'rgba(255,255,255,0.02)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#ff5f57'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#febc2e'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#28c840'
    }
  }), title ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, title) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--slate-200)'
    }
  }, children || lines.map(tokenize)));
}
Object.assign(__ds_scope, { Terminal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Terminal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* UI UX Pro Max — Styles gallery, CTA, footer + App shell. window.SiteApp */
(function () {
  const DS = window.UIUXProMaxDesignSystem_3a9fac;
  const {
    Button,
    Card,
    Badge,
    Tabs,
    Terminal,
    GradientText
  } = DS;
  const U = window.UIcons;
  const {
    Nav,
    Hero,
    Features,
    Logomark
  } = window.Site;
  const STYLES = {
    general: [['Minimalism & Swiss', 'Dashboards, docs'], ['Glassmorphism', 'Modern SaaS'], ['Claymorphism', 'Educational, kids'], ['Neubrutalism', 'Gen Z, startups'], ['Bento Box Grid', 'Product pages'], ['Dark Mode (OLED)', 'Coding platforms'], ['Aurora UI', 'Creative agencies'], ['AI-Native UI', 'Chatbots, copilots'], ['Cyberpunk UI', 'Gaming, crypto']],
    landing: [['Hero-Centric', 'Strong visual identity'], ['Conversion-Optimized', 'Sales pages'], ['Feature-Rich Showcase', 'Complex products'], ['Social Proof-Focused', 'B2C services'], ['Trust & Authority', 'B2B, enterprise'], ['Storytelling-Driven', 'Brands, nonprofits']],
    dashboard: [['Data-Dense', 'Complex analysis'], ['Executive', 'C-suite summaries'], ['Real-Time Monitoring', 'Ops, DevOps'], ['Predictive Analytics', 'Forecasting, ML'], ['Financial', 'Finance, accounting'], ['Sales Intelligence', 'Sales teams, CRM']]
  };
  const SWATCH = ['var(--gradient-spectrum)', 'linear-gradient(135deg,#2666f3,#6d5cf0)', 'linear-gradient(135deg,#f97316,#fb923c)', 'linear-gradient(135deg,#2ecf8f,#36c6e0)', 'linear-gradient(135deg,#6d5cf0,#f4495d)', 'linear-gradient(135deg,#0f1626,#26324f)'];
  function StylesGallery() {
    const [tab, setTab] = React.useState('general');
    const list = STYLES[tab];
    return /*#__PURE__*/React.createElement("section", {
      id: "styles",
      style: {
        maxWidth: 1120,
        margin: '0 auto',
        padding: '40px 20px 72px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "67 UI Styles"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 40,
        letterSpacing: '-0.025em',
        color: 'var(--text-strong)',
        marginTop: 12
      }
    }, "A style for every product")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: [{
        id: 'general',
        label: 'General'
      }, {
        id: 'landing',
        label: 'Landing'
      }, {
        id: 'dashboard',
        label: 'Dashboard'
      }],
      value: tab,
      onChange: setTab
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 16
      },
      className: "feat-grid"
    }, list.map((s, i) => /*#__PURE__*/React.createElement(Card, {
      key: s[0],
      interactive: true,
      padding: 0,
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 90,
        background: SWATCH[i % SWATCH.length]
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 16,
        color: 'var(--text-strong)'
      }
    }, s[0]), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, String(i + 1).padStart(2, '0'))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, s[1]))))));
  }
  function CTASection() {
    return /*#__PURE__*/React.createElement("section", {
      id: "stacks",
      style: {
        maxWidth: 1120,
        margin: '0 auto',
        padding: '0 20px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-2xl)',
        border: '1px solid var(--border-default)',
        background: 'var(--bg-raised)',
        padding: '56px 40px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--glow-blue), var(--glow-orange)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(30px,5vw,46px)',
        letterSpacing: '-0.03em',
        color: 'var(--text-strong)'
      }
    }, "Install once. ", /*#__PURE__*/React.createElement(GradientText, {
      soft: true
    }, "Design smarter.")), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: 520,
        margin: '14px auto 0',
        fontSize: 17,
        color: 'var(--text-muted)'
      }
    }, "One CLI command adds design intelligence to your favourite AI assistant."), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 440,
        margin: '28px auto 0'
      }
    }, /*#__PURE__*/React.createElement(Terminal, {
      title: "zsh",
      lines: ['$ npm install -g uipro-cli', '$ uipro init --ai claude']
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 12,
        marginTop: 26,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "spectrum",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(U.Arrow, {
        size: 16
      })
    }, "Get Started"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg"
    }, "Read the Docs")))));
  }
  function SiteFooter() {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        padding: '40px 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1120,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Logomark, {
      size: 28
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, "UI UX Pro Max")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Features"), /*#__PURE__*/React.createElement("span", null, "Stacks"), /*#__PURE__*/React.createElement("span", null, "Styles"), /*#__PURE__*/React.createElement("span", null, "GitHub")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-faint)'
      }
    }, "MIT \xB7 uupm.cc")));
  }
  function Toast({
    show
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: `translateX(-50%) translateY(${show ? '0' : '20px'})`,
        opacity: show ? 1 : 0,
        transition: 'all var(--dur-base) var(--ease-out)',
        pointerEvents: 'none',
        zIndex: 100,
        background: 'var(--surface-elevated)',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        boxShadow: 'var(--shadow-lg)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--success)'
      }
    }, /*#__PURE__*/React.createElement(U.Check, {
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-body)'
      }
    }, "Copied: uipro init --ai claude"));
  }
  function App() {
    const [toast, setToast] = React.useState(false);
    const tRef = React.useRef();
    const copy = () => {
      try {
        navigator.clipboard && navigator.clipboard.writeText('uipro init --ai claude');
      } catch (e) {}
      setToast(true);
      clearTimeout(tRef.current);
      tRef.current = setTimeout(() => setToast(false), 1900);
    };
    const nav = id => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({
        top: el.offsetTop - 90,
        behavior: 'smooth'
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "uupm-glow-canvas",
      style: {
        minHeight: '100vh',
        paddingTop: 16
      }
    }, /*#__PURE__*/React.createElement(Nav, {
      onNav: nav
    }), /*#__PURE__*/React.createElement(Hero, {
      onCopy: copy
    }), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(StylesGallery, null), /*#__PURE__*/React.createElement(CTASection, null), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(Toast, {
      show: toast
    }));
  }
  window.SiteApp = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
/* UI UX Pro Max — Lucide-style outline icons used across the kits.
   Exposed on window.UIcons. Stroke 2, round caps/joins, currentColor. */
const I = (paths, fill = false) => ({
  size = 22,
  ...p
} = {}) => React.createElement('svg', {
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: fill ? 'currentColor' : 'none',
  stroke: fill ? 'none' : 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  ...p
}, paths.map((d, i) => React.createElement('path', {
  key: i,
  d
})));
const ICircle = (cx, cy, r) => React.createElement('circle', {
  key: 'c' + cx,
  cx,
  cy,
  r
});
window.UIcons = {
  Layers: I(['M12 2 2 7l10 5 10-5-10-5z', 'M2 17l10 5 10-5', 'M2 12l10 5 10-5']),
  Brush: I(['M9.06 11.9 18 3a2.1 2.1 0 0 1 3 3l-8.9 8.94', 'M7 14a4 4 0 0 0-4 4c0 1.5-1 2-1 2s2 1 4 1a4 4 0 0 0 4-4 4 4 0 0 0-3-3z']),
  Message: I(['M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z']),
  Stack: I(['M12 2 2 7l10 5 10-5-10-5z', 'M2 17l10 5 10-5', 'M2 12l10 5 10-5']),
  BarChart: I(['M3 3v18h18', 'M7 16v-5', 'M12 16V8', 'M17 16v-9']),
  Grid: I(['M3 3h7v7H3z', 'M14 3h7v7h-7z', 'M14 14h7v7h-7z', 'M3 14h7v7H3z']),
  Arrow: I(['M5 12h14', 'M13 6l6 6-6 6']),
  Moon: I(['M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z']),
  Sun: ({
    size = 22,
    ...p
  } = {}) => React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...p
  }, [ICircle(12, 12, 4), React.createElement('path', {
    key: 'r',
    d: 'M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4'
  })]),
  Check: I(['M20 6 9 17l-5-5']),
  Spark: I(['M12 2l1.8 5.7L19.5 9l-4.7 3.6L16 18l-4-3.2L8 18l1.2-5.4L4.5 9l5.7-1.3z'], true),
  Search: ({
    size = 22,
    ...p
  } = {}) => React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...p
  }, [ICircle(11, 11, 7), React.createElement('path', {
    key: 'h',
    d: 'm21 21-4.3-4.3'
  })]),
  Terminal: I(['M4 17l6-6-6-6', 'M12 19h8']),
  Zap: I(['M13 2 3 14h9l-1 8 10-12h-9z']),
  Shield: I(['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z']),
  Type: I(['M4 7V4h16v3', 'M9 20h6', 'M12 4v16']),
  Sliders: I(['M4 21v-7', 'M4 10V3', 'M12 21v-9', 'M12 8V3', 'M20 21v-5', 'M20 12V3', 'M1 14h6', 'M9 8h6', 'M17 16h6']),
  X: I(['M18 6 6 18', 'M6 6l12 12']),
  Copy: I(['M9 9h11v11H9z', 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'])
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screens.jsx
try { (() => {
/* UI UX Pro Max — Marketing site screens. Exposed on window.Site.
   Composes the design-system primitives + UIcons. Recreates uupm.cc. */
(function () {
  const DS = window.UIUXProMaxDesignSystem_3a9fac;
  const {
    Button,
    Pill,
    StatCard,
    Card,
    Terminal,
    GradientText,
    Tabs,
    Badge
  } = DS;
  const U = window.UIcons;
  const Mono = p => React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)'
    },
    ...p
  });
  const Logomark = ({
    size = 34
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: size * 0.18,
      top: size * 0.18,
      width: size * 0.42,
      height: size * 0.42,
      borderRadius: size * 0.13,
      background: 'var(--blue-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: size * 0.4,
      top: size * 0.4,
      width: size * 0.42,
      height: size * 0.42,
      borderRadius: size * 0.13,
      background: 'var(--orange-500)'
    }
  }));

  /* ---------------- Nav ---------------- */
  function Nav({
    onNav
  }) {
    const [dark, setDark] = React.useState(true);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 16,
        zIndex: 50,
        padding: '0 20px'
      }
    }, /*#__PURE__*/React.createElement("nav", {
      style: {
        maxWidth: 1120,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 14px 12px 20px',
        borderRadius: 'var(--radius-pill)',
        background: 'rgba(15,22,38,0.72)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid var(--border-default)',
        boxShadow: 'var(--shadow-md)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement(Logomark, null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 19,
        color: 'var(--text-strong)',
        letterSpacing: '-0.01em'
      }
    }, "UI UX Pro Max")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 28
      },
      className: "nav-links"
    }, ['Features', 'Stacks', 'Styles'].map(l => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: '#' + l.toLowerCase(),
      onClick: e => {
        e.preventDefault();
        onNav && onNav(l.toLowerCase());
      },
      style: {
        color: 'var(--text-muted)',
        fontSize: 15,
        fontWeight: 500,
        cursor: 'pointer'
      },
      onMouseEnter: e => e.currentTarget.style.color = 'var(--text-strong)',
      onMouseLeave: e => e.currentTarget.style.color = 'var(--text-muted)'
    }, l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setDark(!dark),
      "aria-label": "Toggle theme",
      style: {
        width: 38,
        height: 38,
        borderRadius: '50%',
        border: '1px solid var(--border-default)',
        background: 'var(--navy-820)',
        color: 'var(--text-body)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, dark ? /*#__PURE__*/React.createElement(U.Moon, {
      size: 17
    }) : /*#__PURE__*/React.createElement(U.Sun, {
      size: 17
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Get Started"))));
  }

  /* ---------------- Hero ---------------- */
  const STATS = [{
    icon: 'Layers',
    value: '57',
    label: 'UI Styles'
  }, {
    icon: 'Brush',
    value: '95',
    label: 'Color Palettes'
  }, {
    icon: 'Message',
    value: '56',
    label: 'Font Pairings'
  }, {
    icon: 'Stack',
    value: '8',
    label: 'Tech Stacks'
  }, {
    icon: 'BarChart',
    value: '24',
    label: 'Chart Types'
  }, {
    icon: 'Grid',
    value: '29',
    label: 'Landing Patterns'
  }];
  const WORKS = ['Claude Code', 'Cursor', 'Windsurf', 'Antigravity'];
  function Hero({
    onCopy
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'relative',
        textAlign: 'center',
        padding: '64px 20px 36px',
        maxWidth: 920,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        flexWrap: 'wrap',
        marginBottom: 36
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Works with"), WORKS.map((w, i) => /*#__PURE__*/React.createElement(Pill, {
      key: w,
      icon: /*#__PURE__*/React.createElement(U.Spark, {
        size: 15
      })
    }, w))), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(44px,8vw,80px)',
        letterSpacing: '-0.035em',
        lineHeight: 1,
        margin: 0
      }
    }, /*#__PURE__*/React.createElement(GradientText, null, "UI UX Pro Max")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(34px,6vw,58px)',
        letterSpacing: '-0.03em',
        color: 'var(--text-strong)',
        lineHeight: 1.05,
        marginTop: 4
      }
    }, "Design Intelligence"), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: 600,
        margin: '22px auto 0',
        fontSize: 19,
        lineHeight: 1.55,
        color: 'var(--text-muted)'
      }
    }, "Searchable database of UI styles, color palettes, font pairings, chart types and UX guidelines. Build beautiful interfaces with AI-powered design recommendations."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onCopy,
      className: "uupm-terminal",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 20px',
        fontSize: 15,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "tok-prompt"
    }, "$"), " uipro init ", /*#__PURE__*/React.createElement("span", {
      className: "tok-flag"
    }, "--ai"), " claude"), /*#__PURE__*/React.createElement(U.Copy, {
      size: 15
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 14,
        marginTop: 34,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg"
    }, "Explore Features"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg"
    }, "View Styles")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6,1fr)',
        gap: 14,
        marginTop: 64
      },
      className: "stat-grid"
    }, STATS.map(s => {
      const Icon = U[s.icon];
      return /*#__PURE__*/React.createElement(StatCard, {
        key: s.label,
        icon: /*#__PURE__*/React.createElement(Icon, {
          size: 22
        }),
        value: s.value,
        label: s.label
      });
    })));
  }

  /* ---------------- Features ---------------- */
  const FEATURES = [{
    icon: 'Zap',
    title: 'Design System Generator',
    body: 'Describe your product; get pattern, style, colors, type, effects and anti-patterns in seconds.'
  }, {
    icon: 'Brush',
    title: '95 Color Palettes',
    body: 'Industry-specific palettes aligned 1:1 with product types, from fintech to wellness.'
  }, {
    icon: 'Type',
    title: '56 Font Pairings',
    body: 'Curated typography combinations with ready-to-paste Google Fonts imports.'
  }, {
    icon: 'Stack',
    title: '15 Tech Stacks',
    body: 'Stack-specific guidelines: React, Next.js, Vue, SwiftUI, Flutter, Tailwind and more.'
  }, {
    icon: 'Shield',
    title: '99 UX Guidelines',
    body: 'Best practices, accessibility rules and anti-patterns checked before delivery.'
  }, {
    icon: 'Terminal',
    title: 'CLI + Skill',
    body: 'Install once with uipro; activates automatically on any UI/UX request.'
  }];
  function Features() {
    return /*#__PURE__*/React.createElement("section", {
      id: "features",
      style: {
        maxWidth: 1120,
        margin: '0 auto',
        padding: '72px 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 44
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "What's inside"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 40,
        letterSpacing: '-0.025em',
        color: 'var(--text-strong)',
        marginTop: 12
      }
    }, "Design intelligence, on tap")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 18
      },
      className: "feat-grid"
    }, FEATURES.map(f => {
      const Icon = U[f.icon];
      return /*#__PURE__*/React.createElement(Card, {
        key: f.title,
        interactive: true,
        padding: 26
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 46,
          height: 46,
          borderRadius: 13,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(38,102,243,0.14)',
          color: 'var(--blue-400)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        size: 22
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 19,
          color: 'var(--text-strong)',
          marginTop: 18
        }
      }, f.title), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 15,
          lineHeight: 1.55,
          color: 'var(--text-muted)',
          marginTop: 8
        }
      }, f.body));
    })));
  }
  window.Site = {
    Nav,
    Hero,
    Features,
    Logomark,
    STATS
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GradientText = __ds_scope.GradientText;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Terminal = __ds_scope.Terminal;

})();
