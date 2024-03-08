// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/gp-consultation/index.js
import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
  name: "gp-consultation",
  category: "text-image",
  label: "GP Consultation Form",
  className: "gp-consultation",
  component: "sw-cms-block-gp-consultation",
  previewComponent: "sw-cms-preview-gp-consultation",
  defaultConfig: {
    marginBottom: "20px",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    sizingMode: "boxed",
  },
  slots: {
    title: "text",
  },
});
