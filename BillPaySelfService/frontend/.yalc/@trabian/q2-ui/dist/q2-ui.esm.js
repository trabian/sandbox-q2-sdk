import { jsx, Flex, Box, Text, ThemeProvider as ThemeProvider$1 } from 'theme-ui';
export { Box, Flex, Grid, Styled, Text, css, jsx, useColorMode, useThemeUI } from 'theme-ui';
import numeral from 'numeral';
import React, { useRef, useEffect, Children, isValidElement, cloneElement } from 'react';
import styled from '@emotion/styled';
import { system } from 'styled-system';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import classNames from 'classnames';
import useEventListener from '@use-it/event-listener';
import { useId } from '@reach/auto-id';
import { CacheProvider } from '@emotion/core';
import createCache from '@emotion/cache';
import extraScopePlugin from 'stylis-plugin-extra-scope';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var shouldForwardProp = /*#__PURE__*/createShouldForwardProp(['strokeWidth', 'stroke', 'strokeSecondary']);

var Q2Icon = function Q2Icon(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["className"]);

  return React.createElement("q2-icon", Object.assign({
    "class": className
  }, props));
};

var StyledIcon = /*#__PURE__*/styled(Q2Icon, {
  shouldForwardProp: shouldForwardProp
})( /*#__PURE__*/system({
  // @ts-ignore
  strokeWidth: {
    property: '--t-icon-stroke-width'
  },
  // @ts-ignore
  stroke: {
    property: '--t-icon-stroke-primary',
    scale: 'colors'
  },
  // @ts-ignore
  strokeSecondary: {
    property: '--t-icon-stroke-secondary',
    scale: 'colors'
  }
}));

var Icon = function Icon(_ref2) {
  var type = _ref2.type,
      props = _objectWithoutPropertiesLoose(_ref2, ["type"]);

  return React.createElement(StyledIcon, Object.assign({
    type: type
  }, props));
};

var Button = function Button(_ref) {
  var _ref$badge = _ref.badge,
      badge = _ref$badge === void 0 ? false : _ref$badge,
      _ref$block = _ref.block,
      block = _ref$block === void 0 ? false : _ref$block,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? false : _ref$icon,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["badge", "block", "disabled", "icon", "className"]);

  // Tecton adds a `hydrated` classname when Tecton components are loaded but
  // doesn't consistently reapply the classname on rerender.
  var cls = classNames([className]);
  return React.createElement("q2-btn", Object.assign({
    badge: badge,
    block: block ? true : undefined,
    disabled: disabled,
    icon: icon,
    "class": cls
  }, props));
};

var iconStrokeColor = function iconStrokeColor(color) {
  return color ? "var(--q2-btn-" + color + "-font-color)" : undefined;
};

var IconButton = function IconButton(_ref2) {
  var type = _ref2.type,
      icon = _ref2.icon,
      color = _ref2.color,
      strokeWidth = _ref2.strokeWidth,
      _ref2$stroke = _ref2.stroke,
      stroke = _ref2$stroke === void 0 ? iconStrokeColor(color) : _ref2$stroke,
      strokeSecondary = _ref2.strokeSecondary,
      props = _objectWithoutPropertiesLoose(_ref2, ["type", "icon", "color", "strokeWidth", "stroke", "strokeSecondary"]);

  return React.createElement(Button, Object.assign({
    type: type,
    color: color,
    icon: true
  }, props), React.createElement(Icon, {
    type: icon,
    strokeWidth: strokeWidth,
    stroke: stroke,
    strokeSecondary: strokeSecondary
  }));
};

var InlineEdit = function InlineEdit(_ref) {
  var persistentLabel = _ref.persistentLabel,
      ariaLabel = _ref.ariaLabel,
      formatModifier = _ref.formatModifier,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["persistentLabel", "ariaLabel", "formatModifier", "onChange"]);

  var ref = useRef();
  useEventListener('input', function (event) {
    if (onChange) {
      event.stopPropagation();
      onChange(_extends({}, event, {
        // @ts-ignore
        type: 'input',
        target: {
          value: event.detail.value,
          formattedValue: event.detail.formattedValue
        }
      }));
    }
  }, ref.current);
  return React.createElement("q2-editable-field", Object.assign({
    "persistent-label": persistentLabel ? true : undefined,
    "aria-label": ariaLabel,
    "format-modifier": formatModifier,
    ref: ref
  }, props));
};

var Checkbox = function Checkbox(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$indeterminate = _ref.indeterminate,
      indeterminate = _ref$indeterminate === void 0 ? false : _ref$indeterminate,
      className = _ref.className,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["disabled", "indeterminate", "className", "onChange"]);

  var ref = useRef();
  useEffect(function () {
    ref.current.onchange = onChange;
  }, [onChange]);
  return React.createElement("q2-checkbox", Object.assign({
    ref: ref,
    disabled: disabled,
    indeterminate: indeterminate,
    "class": className
  }, props));
};

var checksums = {
  sunday: 1,
  monday: 2,
  tuesday: 4,
  wednesday: 8,
  thursday: 16,
  friday: 32,
  saturday: 64
};

var calculateDOWChecksum = function calculateDOWChecksum(validDays) {
  var checksum = validDays.map(function (day) {
    return checksums[day.toString()];
  }).reduce(function (acc, el) {
    return acc + el;
  });
  return checksum > 0 ? checksum : undefined;
};

var allDays = /*#__PURE__*/Object.keys(checksums);
var weekendDays = ['saturday', 'sunday'];

var getDaysOfWeekChecksum = function getDaysOfWeekChecksum(_ref) {
  var blockWeekends = _ref.blockWeekends,
      validDaysOfWeek = _ref.validDaysOfWeek;
  var days = validDaysOfWeek;

  if (blockWeekends) {
    var _days;

    days = (_days = days) === null || _days === void 0 ? void 0 : _days.filter(function (day) {
      return !weekendDays.includes(day);
    });
  }

  return days ? calculateDOWChecksum(days) : undefined;
};

var DatePicker = function DatePicker(_ref2) {
  var _ref2$validDaysOfWeek = _ref2.validDaysOfWeek,
      validDaysOfWeek = _ref2$validDaysOfWeek === void 0 ? allDays : _ref2$validDaysOfWeek,
      _ref2$blockWeekends = _ref2.blockWeekends,
      blockWeekends = _ref2$blockWeekends === void 0 ? false : _ref2$blockWeekends,
      startDate = _ref2.startDate,
      validDates = _ref2.validDates,
      invalidDates = _ref2.invalidDates,
      onChange = _ref2.onChange,
      props = _objectWithoutPropertiesLoose(_ref2, ["validDaysOfWeek", "blockWeekends", "startDate", "validDates", "invalidDates", "onChange"]);

  var ref = useRef();
  var daysOfWeekChecksum = getDaysOfWeekChecksum({
    blockWeekends: blockWeekends,
    validDaysOfWeek: validDaysOfWeek
  });
  useEffect(function () {
    if (ref && ref.current) {
      ref.current.validDates = validDates;
      ref.current.invalidDates = invalidDates;
    }
  }, [ref.current, validDates, invalidDates]);
  useEventListener('change', function (event) {
    if (onChange) {
      event.stopPropagation(); // work around a bug where the `change` listener is fired simultaneously for all calendars

      if (event.target.id === props.id) {
        onChange(_extends({}, event, {
          type: 'input',
          target: {
            id: event.target.id,
            value: event.detail.value
          }
        }));
      }
    }
  }, ref.current);
  return React.createElement("q2-calendar", Object.assign({
    ref: ref,
    "days-of-week-checksum": daysOfWeekChecksum,
    "start-date": startDate
  }, props));
};

var LoadingIndicator = function LoadingIndicator(_ref) {
  var inline = _ref.inline,
      rows = _ref.rows,
      columns = _ref.columns,
      shape = _ref.shape,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? shape ? 'skeleton' : 'spinner' : _ref$type,
      _ref$counts = _ref.counts,
      counts = _ref$counts === void 0 ? countsForRowsAndColumns({
    rows: rows,
    columns: columns
  }) : _ref$counts,
      props = _objectWithoutPropertiesLoose(_ref, ["inline", "rows", "columns", "shape", "type", "counts"]);

  return React.createElement("q2-loading", Object.assign({
    inline: inline ? true : undefined,
    counts: counts,
    type: type,
    shape: shape
  }, props));
};

var countsForRowsAndColumns = function countsForRowsAndColumns(_ref2) {
  var rows = _ref2.rows,
      columns = _ref2.columns;
  return [columns, rows].filter(Boolean).join('x');
};

var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement("q2-dropdown", Object.assign({}, props), children);
};
var DropdownItem = function DropdownItem(_ref2) {
  var label = _ref2.label,
      onClick = _ref2.onClick,
      onRemove = _ref2.onRemove,
      props = _objectWithoutPropertiesLoose(_ref2, ["label", "onClick", "onRemove"]);

  var handleClick = function handleClick(e) {
    if (e.detail.type === 'remove') {
      if (onRemove) {
        onRemove();
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  return React.createElement("q2-dropdown-item", Object.assign({
    onClick: handleClick,
    removable: Boolean(onRemove)
  }, props), label);
};
var DropdownSeparator = function DropdownSeparator() {
  return React.createElement("q2-dropdown-item", {
    separator: true
  });
};

var DropdownSelectOption = function DropdownSelectOption(_ref) {
  var children = _ref.children,
      display = _ref.display,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "display"]);

  if (!display && typeof children === 'string') {
    display = children;
  }

  return React.createElement("q2-option", Object.assign({
    display: display
  }, props), children);
};
var DropdownOptGroup = function DropdownOptGroup(props) {
  return React.createElement("q2-optgroup", Object.assign({}, props));
};
var DropdownSelect = function DropdownSelect(_ref2) {
  var children = _ref2.children,
      multiple = _ref2.multiple,
      multilineOptions = _ref2.multilineOptions,
      onSearchInput = _ref2.onSearchInput,
      onChange = _ref2.onChange,
      value = _ref2.value,
      props = _objectWithoutPropertiesLoose(_ref2, ["children", "multiple", "multilineOptions", "onSearchInput", "onChange", "value"]);

  var ref = useRef(); //Emitted when an option is selected.

  useEventListener('change', function (event) {
    if (!onChange) {
      return;
    }

    var value = multiple ? event.detail.selectedOptions : event.detail.value;
    onChange(value);
  }, ref.current); // Set the `selectedOptions` attribute on the component based on the value.
  // Setting the property directly on the web component doesn't work for array
  // values.

  useEffect(function () {
    if (value && multiple && ref.current) {
      ref.current.selectedOptions = value;
    }
  }, [value, multiple]);
  useEventListener('input', function (event) {
    //@ts-ignore
    var newQuery = event.detail.query;

    if (onSearchInput) {
      onSearchInput(newQuery);
    }
  }, ref.current);
  return React.createElement("q2-select", Object.assign({
    "multiline-options": multilineOptions,
    multiple: multiple,
    searchable: Boolean(onSearchInput),
    ref: ref,
    value: multiple ? undefined : value,
    style: {
      margin: 0
    }
  }, props), children);
};

var RadioGroup = function RadioGroup(_ref) {
  var children = _ref.children,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "onChange"]);

  var ref = useRef();
  useEventListener('change', function (event) {
    if (onChange) {
      event.stopPropagation();
      onChange(_extends({}, event, {
        // @ts-ignore
        type: 'input',
        target: {
          value: event.detail.value,
          formattedValue: event.detail.formattedValue
        }
      }));
    }
  }, ref.current);
  return React.createElement("q2-radio-group", Object.assign({
    ref: ref
  }, props), children);
};
var Radio = function Radio(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  return React.createElement("q2-radio", Object.assign({}, props), children);
};

var TabsContainer = function TabsContainer(_ref) {
  var children = _ref.children,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "onChange"]);

  var ref = useRef();
  var name = useId(props.name);
  useEventListener('change', function (event) {
    if (onChange) {
      var _event$detail;

      onChange((_event$detail = event.detail) === null || _event$detail === void 0 ? void 0 : _event$detail.value);
    }
  }, ref.current);
  var childrenWithName = React.Children.map(children, function (child) {
    return React.isValidElement(child) ? React.cloneElement(child, {
      name: name
    }) : null;
  });
  return React.createElement("q2-tab-container", Object.assign({}, props, {
    name: name,
    ref: ref
  }), childrenWithName);
};
var Tab = function Tab(props) {
  var value = useId(props.value);
  return React.createElement("q2-tab-pane", Object.assign({}, props, {
    value: value
  }));
};

var Input = function Input(_ref) {
  var formatModifier = _ref.formatModifier,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight,
      ariaLabel = _ref.ariaLabel,
      onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$hideMessages = _ref.hideMessages,
      hideMessages = _ref$hideMessages === void 0 ? false : _ref$hideMessages,
      _ref$readonly = _ref.readonly,
      readonly = _ref$readonly === void 0 ? false : _ref$readonly,
      _ref$clearable = _ref.clearable,
      clearable = _ref$clearable === void 0 ? false : _ref$clearable,
      _ref$optional = _ref.optional,
      optional = _ref$optional === void 0 ? false : _ref$optional,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      _ref$hints = _ref.hints,
      hints = _ref$hints === void 0 ? [] : _ref$hints,
      props = _objectWithoutPropertiesLoose(_ref, ["formatModifier", "iconLeft", "iconRight", "ariaLabel", "onChange", "disabled", "hideMessages", "readonly", "clearable", "optional", "errors", "hints"]);

  var ref = useRef();
  useEventListener('input', function (event) {
    if (onChange) {
      event.stopPropagation();
      onChange(_extends({}, event, {
        // @ts-ignore
        type: 'input',
        target: {
          value: event.detail.value,
          formattedValue: event.detail.formattedValue
        }
      }));
    }
  }, ref.current);
  React.useEffect(function () {
    if (ref && ref.current) {
      ref.current.errors = typeof errors === 'string' ? [errors] : errors;
    }
  }, [errors]);
  React.useEffect(function () {
    if (ref && ref.current) {
      ref.current.hints = typeof hints === 'string' ? [hints] : hints;
    }
  }, [hints]);
  return React.createElement("q2-input", Object.assign({
    ref: ref
  }, props, {
    "aria-label": ariaLabel,
    "format-modifier": formatModifier,
    "hide-messages": hideMessages || undefined,
    "icon-left": iconLeft,
    "icon-right": iconRight,
    disabled: disabled || undefined,
    readonly: readonly || undefined,
    clearable: clearable || undefined,
    optional: optional || undefined
  }));
};

var Section = function Section(_ref) {
  var label = _ref.label,
      _ref$collapsible = _ref.collapsible,
      collapsible = _ref$collapsible === void 0 ? false : _ref$collapsible,
      _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? false : _ref$expanded,
      onToggle = _ref.onToggle,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "collapsible", "expanded", "onToggle", "children"]);

  var ref = useRef(null);
  useEventListener('change', function (event) {
    if (onToggle) {
      // @ts-ignore
      onToggle(event.detail.expanded);
    }
  }, ref.current);
  return React.createElement("q2-section", Object.assign({
    collapsible: collapsible ? true : undefined,
    expanded: expanded ? true : undefined,
    label: label,
    ref: ref
  }, props), children);
};

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'n' : _ref$position,
      label = _ref.label,
      className = _ref.className,
      _ref$multiline = _ref.multiline,
      multiline = _ref$multiline === void 0 ? false : _ref$multiline;
  var childrenWithClass = Children.map(children, function (child) {
    if (!isValidElement(child)) {
      return child;
    }

    var cls = classNames([className, 'tooltipped', "tooltipped-" + position, child.props.className, {
      'tooltipped-multiline': multiline
    }]);
    return cloneElement(child, {
      className: cls,
      'aria-label': child.props['aria-label'] || label
    });
  });
  return React.createElement(React.Fragment, null, childrenWithClass);
};

var Message = function Message(props) {
  return React.createElement("q2-message", Object.assign({}, props));
};

/** @jsx jsx */

var AccountOption = function AccountOption(_ref) {
  var id = _ref.id,
      name = _ref.name,
      maskedAccountNumber = _ref.maskedAccountNumber,
      balance = _ref.balance,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? name + " " + maskedAccountNumber : _ref$display;
  return jsx(DropdownSelectOption, {
    value: id,
    display: display
  }, jsx(Flex, {
    sx: {
      alignItems: 'center'
    }
  }, jsx(Box, {
    sx: {
      flex: 1
    }
  }, jsx(Text, {
    sx: {
      fontWeight: 'bold'
    }
  }, name), jsx(Text, {
    sx: {
      color: 'muted'
    }
  }, maskedAccountNumber)), balance ? jsx(Text, {
    sx: {
      fontWeight: 'semibold'
    }
  }, numeral(balance).format('($0,0.00)')) : null));
};

var cssVar = function cssVar(name) {
  return "var(--" + name + ")";
};

var cssVarList = function cssVarList(start, end, prefix, defaultVal) {
  if (defaultVal === void 0) {
    defaultVal = '';
  }

  var list = [];

  for (var i = 0; i <= end; i++) {
    if (i < start) {
      // Follow the index pattern of the underlying css var. For example,
      // `highlight.1` should map to `t-highlight-1`, so we skip `highlight.0`
      // since the css variables start at 1.
      list.push(defaultVal);
    } else {
      list.push(cssVar("" + prefix + i));
    }
  }

  return list;
};

var theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace'
  },
  colors: {
    text: /*#__PURE__*/cssVar('t-font-color'),
    muted: /*#__PURE__*/cssVar('t-a11y-gray-color'),
    background: /*#__PURE__*/cssVar('t-content-bg'),
    link: /*#__PURE__*/cssVar('t-link-color'),
    linkHover: /*#__PURE__*/cssVar('t-link-hover-color'),
    primary: /*#__PURE__*/cssVar('t-primary'),
    primaryLight: /*#__PURE__*/cssVarList(1, 2, 't-primary-l'),
    primaryDark: /*#__PURE__*/cssVarList(1, 2, 't-primary-d'),
    secondary: /*#__PURE__*/cssVar('t-secondary'),
    secondaryLight: /*#__PURE__*/cssVarList(1, 2, 't-secondary-l'),
    secondaryDark: /*#__PURE__*/cssVarList(1, 2, 't-secondary-d'),
    black: /*#__PURE__*/cssVar('app-black'),
    white: /*#__PURE__*/cssVar('app-white'),
    gray: /*#__PURE__*/cssVar('app-gray'),
    grayLight: /*#__PURE__*/cssVarList(1, 3, 'app-gray-l'),
    grayDark: /*#__PURE__*/cssVarList(1, 3, 'app-gray-d'),
    highlight: /*#__PURE__*/cssVarList(1, 15, 't-highlight-'),
    stoplight: {
      info: /*#__PURE__*/cssVar('const-stoplight-info'),
      success: /*#__PURE__*/cssVar('const-stoplight-success'),
      warning: /*#__PURE__*/cssVar('const-stoplight-warning'),
      alert: /*#__PURE__*/cssVar('const-stoplight-alert')
    }
  },
  // https://cdn1.onlineaccess1.com/cdn/base/tecton/v0.39.1/Documentation/index.html#/ui/grid-layout
  breakpoints: ['480px', '768px', '992px', '1200px'],
  space: /*#__PURE__*/cssVarList(0, 6, 'app-scale-'),
  radii: /*#__PURE__*/cssVarList(1, 2, 'app-border-radius-', '0'),
  shadows: /*#__PURE__*/cssVarList(1, 2, 'app-shadow-'),
  variants: {
    primary: {
      bg: 'primary',
      color: 'white'
    },
    secondary: {
      bg: 'secondary',
      color: 'text'
    }
  }
};

var cache = /*#__PURE__*/createCache({
  key: 'tecton',
  stylisPlugins: [/*#__PURE__*/extraScopePlugin('[data-tecton-module]')]
});

var ThemeProvider = function ThemeProvider(_ref) {
  var _ref$theme = _ref.theme,
      theme$1 = _ref$theme === void 0 ? theme : _ref$theme,
      children = _ref.children;
  return React.createElement(CacheProvider, {
    value: cache
  }, React.createElement(ThemeProvider$1, {
    theme: theme$1
  }, children));
};

export { AccountOption, Button, Checkbox, DatePicker, Dropdown, DropdownItem, DropdownOptGroup, DropdownSelect, DropdownSelectOption, DropdownSeparator, Icon, IconButton, InlineEdit, Input, LoadingIndicator, Message, Radio, RadioGroup, Section, Tab, TabsContainer, ThemeProvider, Tooltip, theme };
//# sourceMappingURL=q2-ui.esm.js.map
