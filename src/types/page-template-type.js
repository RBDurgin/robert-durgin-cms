import { shape, string, node } from 'prop-types';

export const PageTemplateType = shape({
  title: string,
  description: string,
  helmet: node,
});

export const PageTemplateDefaultProps = {
  title: null,
  description: null,
  helmet: null,
};
