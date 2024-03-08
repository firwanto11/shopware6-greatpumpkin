// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/gp-contact/index.js
import './component'
import './preview'

Shopware.Service('cmsService').registerCmsBlock({
	name: 'gp-contact',
	category: 'text-image',
	label: 'GP contact',
	className: 'gp-contact',
	component: 'sw-cms-block-gp-contact',
	previewComponent: 'sw-cms-preview-gp-contact',
	defaultConfig: {
		marginBottom: '20px',
		marginTop: '20px',
		marginLeft: '20px',
		marginRight: '20px',
		sizingMode: 'boxed'
	},
	slots: {
		title: 'text'
	},
})
