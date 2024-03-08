// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/gp-achievement-list/index.js
import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
  name: "gp-achievement-list",
  category: "text-image",
  label: "Achievement-list Section",
  className: "gp-achievement-list",
  component: "sw-cms-block-gp-achievement-list",
  previewComponent: "sw-cms-preview-gp-achievement-list",
  defaultConfig: {
    marginBottom: "20px",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    sizingMode: "boxed",
  },
  slots: {
    achievements: {
      type: "text",
      default: {
        config: {
          content: {
            source: "static",
            value: `
											<h2 style="text-align: center;">Lorem Ipsum dolor</h2>
											`.trim(),
          },
        },
      },
    },
    "long-text": {
      type: "text",
      default: {
        config: {
          content: {
            source: "static",
            value: `
											<h2 style="text-align: center;">Lorem Ipsum dolor</h2>
											<p style="text-align: center;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
											sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
											sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
											`.trim(),
          },
        },
      },
    },
    "main-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
  },
});
