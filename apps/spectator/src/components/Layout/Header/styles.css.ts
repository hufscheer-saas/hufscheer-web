import { rem, theme } from '@hcc/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'sticky',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: theme.zIndices.header,
});

export const container = style({
  ...theme.layouts.rowBetween,
  position: 'relative',
  height: rem(44),
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  paddingInline: theme.sizes.appInlinePadding,
  marginInline: 'auto',
  borderBottom: `${rem(1)} solid ${theme.colors.gray25}`,
  backgroundColor: theme.colors.white,
});

export const home = style({
  ...theme.layouts.center,
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: 'fit-content',
  flexGrow: 0,
  transform: 'translate(-50%, -50%)',
});

export const previous = style({
  ...theme.layouts.center,
  flexGrow: 0,
  width: 'fit-content',
});
