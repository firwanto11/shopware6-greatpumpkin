// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/gp-company-discount/index.js
import './component'
import './preview'

Shopware.Service('cmsService').registerCmsBlock({
	name: 'gp-company-discount',
	category: 'text-image',
	label: 'Company Discount Section',
	className: 'gp-company-discount',
	component: 'sw-cms-block-gp-company-discount',
	previewComponent: 'sw-cms-preview-gp-company-discount',
	defaultConfig: {
		marginBottom: '0',
		marginTop: '0',
		marginLeft: '0',
		marginRight: '0',
		sizingMode: 'boxed',
	},
	slots: {
		'first-title': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `<h2>Company Name</h2>`.trim(),
					},
				},
			},
		},
		'first-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'first-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<p>2,749 pound World Record Pumpkin Michael Jordan</p>
										<div class="grower-footer">
												<p>Promo Code</p>
												<a href="#" target="_self" class="gp-btn">Buy</a>
											</div>
										`.trim(),
					},
				},
			},
		},
		'second-title': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `<h2>Company Name</h2>`.trim(),
					},
				},
			},
		},
		'second-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'second-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<p>2,749 pound World Record Pumpkin Michael Jordan</p>
										<div class="grower-footer">
											<p>Promo Code</p>
											<a href="#" target="_self" class="gp-btn">Buy</a>
										</div>
										`.trim(),
					},
				},
			},
		},
		'third-title': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `<h2>Company Name</h2>`.trim(),
					},
				},
			},
		},
		'third-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'third-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<p>2,749 pound World Record Pumpkin Michael Jordan</p>
										<div class="grower-footer">
											<p>Promo Code</p>
											<a href="#" target="_self" class="gp-btn">Buy</a>
										</div>
										`.trim(),
					},
				},
			},
		},
		'fourth-title': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `<h2>Company Name</h2>`.trim(),
					},
				},
			},
		},
		'fourth-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'fourth-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<p>2,749 pound World Record Pumpkin Michael Jordan</p>
										<div class="grower-footer">
											<p>Promo Code</p>
											<a href="#" target="_self" class="gp-btn">Buy</a>
										</div>
										`.trim(),
					},
				},
			},
		},
		'fifth-title': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `<h2>Company Name</h2>`.trim(),
					},
				},
			},
		},
		'fifth-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'fifth-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<p>2,749 pound World Record Pumpkin Michael Jordan</p>
										<div class="grower-footer">
											<p>Promo Code</p>
											<a href="#" target="_self" class="gp-btn">Buy</a>
										</div>
										`.trim(),
					},
				},
			},
		},
		'six-title': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `<h2>Company Name</h2>`.trim(),
					},
				},
			},
		},
		'six-image': {
			type: 'image',
			default: {
				config: {
					displayMode: { source: 'static', value: 'cover' },
				},
			},
		},
		'six-text': {
			type: 'text',
			default: {
				config: {
					content: {
						source: 'static',
						value: `
										<p>2,749 pound World Record Pumpkin Michael Jordan</p>
										<div class="grower-footer">
											<p>Promo Code</p>
											<a href="#" target="_self" class="gp-btn">Buy</a>
										</div>
										`.trim(),
					},
				},
			},
		},
	}
})
