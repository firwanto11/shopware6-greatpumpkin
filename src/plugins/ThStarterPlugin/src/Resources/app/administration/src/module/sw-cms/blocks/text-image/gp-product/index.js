// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/gp-product/index.js
import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
	name: 'gp-product',
	category: 'text-image',
	label: 'GP Product',
	className: 'gp-product',
	component: 'sw-cms-block-gp-product',
	previewComponent: 'sw-cms-preview-gp-product',
	defaultConfig: {
			marginBottom: '20px',
			marginTop: '20px',
			marginLeft: '20px',
			marginRight: '20px',
			sizingMode: 'boxed'
	},
	slots: {
    products: 'product-slider'
},
});
