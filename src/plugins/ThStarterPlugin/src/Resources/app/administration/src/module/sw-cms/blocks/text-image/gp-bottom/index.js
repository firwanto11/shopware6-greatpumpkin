// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/gp-achievement/index.js
import './component'
import './preview'

Shopware.Service('cmsService').registerCmsBlock({
	name: 'gp-bottom',
	category: 'text-image',
	label: 'Bottom',
	className: 'gp-bottom',
	component: 'sw-cms-block-gp-bottom',
	previewComponent: 'sw-cms-preview-gp-bottom',
	defaultConfig: {
		sizingMode: 'full_width',
	},
	slots: {
		bottom: {
		  type: "text",
		  default: {
			config: {
			  content: {
				source: "static",
				value: `
												<h2 style="text-align: center;">Bottom</h2>
												`.trim(),
			  },
			},
		  },
		}
	}
})
