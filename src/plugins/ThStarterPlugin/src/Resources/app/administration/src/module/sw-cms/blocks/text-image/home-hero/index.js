// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/home-hero/index.js
import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
	name: 'home-hero',
	category: 'text-image',
	label: 'Home Hero',
	className: 'home-hero',
	component: 'sw-cms-block-home-hero',
	previewComponent: 'sw-cms-preview-home-hero',
	defaultConfig: {
			marginBottom: '20px',
			marginTop: '20px',
			marginLeft: '20px',
			marginRight: '20px',
			sizingMode: 'boxed'
	},
	slots: {
    title: {
        type: 'text',
        default: {
            config: {
                content: { source: 'static', value: 'lorem ipsum' },
            },
        },
    },
    subtitle: {
        type: 'text',
        default: {
            config: {
                content: { source: 'static', value: 'lorem ipsum' },
            },
        },
    },
    paragraph: {
        type: 'text',
        default: {
            config: {
                content: { source: 'static', value: 'lorem ipsum' },
            },
        },
    },
    media: {
        type: 'image',
        default: {
            config: {
                displayMode: { source: 'static', value: 'cover' },
            },
        },
    }
},
});
