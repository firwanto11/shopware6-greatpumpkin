// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/gp-affiliate/index.js
import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
  name: "gp-affiliate",
  category: "text-image",
  label: "Voucher Affiliate Section",
  className: "gp-affiliate",
  component: "sw-cms-block-gp-affiliate",
  previewComponent: "sw-cms-preview-gp-affiliate",
  defaultConfig: {
    marginBottom: "0",
    marginTop: "0",
    marginLeft: "0",
    marginRight: "0",
    sizingMode: "boxed",
  },
  slots: {
    "first-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
    "first-text": {
      type: "text",
      default: {
        config: {
          content: {
            source: "static",
            value: `
										<div class="gp-affiliate__item-content">
											<p class="gp-affiliate__item-name">30% off on products</p>
											<p class="gp-affiliate__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<div class="gp-affiliate__item-footer">
												<p class="gp-affiliate__item-code">Promo Code</p>
												<a class="gp-affiliate__item-button" href="/" target="_blank">visit site</a>
											</div>
										</div>
										`.trim(),
          },
        },
      },
    },
    "second-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
    "second-text": {
      type: "text",
      default: {
        config: {
          content: {
            source: "static",
            value: `
										<div class="gp-affiliate__item-content">
											<p class="gp-affiliate__item-name">30% off on products</p>
											<p class="gp-affiliate__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<div class="gp-affiliate__item-footer">
												<p class="gp-affiliate__item-code">Promo Code</p>
												<a class="gp-affiliate__item-button" href="/" target="_blank">visit site</a>
											</div>
										</div>
										`.trim(),
          },
        },
      },
    },
    "third-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
    "third-text": {
      type: "text",
      default: {
        config: {
          content: {
            source: "static",
            value: `
										<div class="gp-affiliate__item-content">
											<p class="gp-affiliate__item-name">30% off on products</p>
											<p class="gp-affiliate__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<div class="gp-affiliate__item-footer">
												<p class="gp-affiliate__item-code">Promo Code</p>
												<a class="gp-affiliate__item-button" href="/" target="_blank">visit site</a>
											</div>
										</div>
										`.trim(),
          },
        },
      },
    },
    "fourth-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
    "fourth-text": {
      type: "text",
      default: {
        config: {
          content: {
            source: "static",
            value: `
										<div class="gp-affiliate__item-content">
											<p class="gp-affiliate__item-name">30% off on products</p>
											<p class="gp-affiliate__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<div class="gp-affiliate__item-footer">
												<p class="gp-affiliate__item-code">Promo Code</p>
												<a class="gp-affiliate__item-button" href="/" target="_blank">visit site</a>
											</div>
										</div>
										`.trim(),
          },
        },
      },
    },
    "fifth-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
    "fifth-text": {
      type: "text",
      default: {
        config: {
          content: {
            source: "static",
            value: `
										<div class="gp-affiliate__item-content">
											<p class="gp-affiliate__item-name">30% off on products</p>
											<p class="gp-affiliate__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<div class="gp-affiliate__item-footer">
												<p class="gp-affiliate__item-code">Promo Code</p>
												<a class="gp-affiliate__item-button" href="/" target="_blank">visit site</a>
											</div>
										</div>
										`.trim(),
          },
        },
      },
    },
    "six-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
    "six-text": {
      type: "text",
      default: {
        config: {
          content: {
            source: "static",
            value: `
										<div class="gp-affiliate__item-content">
											<p class="gp-affiliate__item-name">30% off on products</p>
											<p class="gp-affiliate__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<div class="gp-affiliate__item-footer">
												<p class="gp-affiliate__item-code">Promo Code</p>
												<a class="gp-affiliate__item-button" href="/" target="_blank">visit site</a>
											</div>
										</div>
										`.trim(),
          },
        },
      },
    },
    "seventh-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
    "seventh-text": {
      type: "text",
      default: {
        config: {
          content: {
            source: "static",
            value: `
										<div class="gp-affiliate__item-content">
											<p class="gp-affiliate__item-name">30% off on products</p>
											<p class="gp-affiliate__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<div class="gp-affiliate__item-footer">
												<p class="gp-affiliate__item-code">Promo Code</p>
												<a class="gp-affiliate__item-button" href="/" target="_blank">visit site</a>
											</div>
										</div>
										`.trim(),
          },
        },
      },
    },
    "eight-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
    "eight-text": {
      type: "text",
      default: {
        config: {
          content: {
            source: "static",
            value: `
										<div class="gp-affiliate__item-content">
											<p class="gp-affiliate__item-name">30% off on products</p>
											<p class="gp-affiliate__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<div class="gp-affiliate__item-footer">
												<p class="gp-affiliate__item-code">Promo Code</p>
												<a class="gp-affiliate__item-button" href="/" target="_blank">visit site</a>
											</div>
										</div>
										`.trim(),
          },
        },
      },
    },
    "ninth-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
    "ninth-text": {
      type: "text",
      default: {
        config: {
          content: {
            source: "static",
            value: `
										<div class="gp-affiliate__item-content">
											<p class="gp-affiliate__item-name">30% off on products</p>
											<p class="gp-affiliate__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<div class="gp-affiliate__item-footer">
												<p class="gp-affiliate__item-code">Promo Code</p>
												<a class="gp-affiliate__item-button" href="/" target="_blank">visit site</a>
											</div>
										</div>
										`.trim(),
          },
        },
      },
    },
    "ten-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
    "ten-text": {
      type: "text",
      default: {
        config: {
          content: {
            source: "static",
            value: `
										<div class="gp-affiliate__item-content">
											<p class="gp-affiliate__item-name">30% off on products</p>
											<p class="gp-affiliate__item-desc">Lorem Ipsum is simply dummy text of the printing</p>
											<div class="gp-affiliate__item-footer">
												<p class="gp-affiliate__item-code">Promo Code</p>
												<a class="gp-affiliate__item-button" href="/" target="_blank">visit site</a>
											</div>
										</div>
										`.trim(),
          },
        },
      },
    },
  },
});
