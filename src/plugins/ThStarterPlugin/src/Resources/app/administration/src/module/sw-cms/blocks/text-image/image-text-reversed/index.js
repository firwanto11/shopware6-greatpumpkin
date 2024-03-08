// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/image-text-reversed/index.js
import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
	name: 'image-text-reversed',
	category: 'text-image',
	label: 'Image Text Reversed',
	component: 'sw-cms-block-image-text-reversed',
	previewComponent: 'sw-cms-preview-image-text-reversed',
	defaultConfig: {
			marginBottom: '20px',
			marginTop: '20px',
			marginLeft: '20px',
			marginRight: '20px',
			sizingMode: 'boxed'
	},
	slots: {
    left: {
        type: 'text',
        default: {
            config: {
                content: { source: 'static', value: 'lorem ipsum' },
            },
        },
    },
    right: {
        type: 'image',
        default: {
            config: {
                displayMode: { source: 'static', value: 'cover' },
            },
        },
    },
},
});
