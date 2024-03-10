// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/gp-video/index.js
import './component'
import './preview'

Shopware.Service('cmsService').registerCmsBlock({
	name: 'gp-video',
	category: 'text-image',
	label: 'GP video',
	className: 'gp-video',
	component: 'sw-cms-block-gp-video',
	previewComponent: 'sw-cms-preview-gp-video',
	defaultConfig: {
		marginBottom: '0',
		marginTop: '0',
		marginLeft: '0',
		marginRight: '0',
		sizingMode: 'full-width'
	},
	slots: {
		video: 'youtube-video'
	},
})
