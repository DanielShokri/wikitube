import types from "../types";

export const selectLightTheme = isLight => ({
  type: types.SELECT_LIGHT_THEME,
  payload: isLight
});

export const selectDarkTheme = isDark => ({
  type: types.SELECT_DARK_THEME,
  payload: isDark
});

export const selectBlueTheme = isBlue => ({
  type: types.SELECT_BLUE_THEME,
  payload: isBlue
});
