// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/gp-achievement/index.js
import './component'
import './preview'

Shopware.Service('cmsService').registerCmsBlock({
	name: 'gp-achievement',
	category: 'text-image',
	label: 'Achievement Section',
	className: 'gp-achievement',
	component: 'sw-cms-block-gp-achievement',
	previewComponent: 'sw-cms-preview-gp-achievement',
	defaultConfig: {
		marginBottom: '20px',
		marginTop: '20px',
		marginLeft: '20px',
		marginRight: '20px',
		sizingMode: 'boxed',
	},
	slots: {
		'left-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'left-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
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
		'center-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'center-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
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
		'right-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'right-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
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
	}
})
