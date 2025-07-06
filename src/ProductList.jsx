import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ramImg from './assets/ram.jpg';
import gpuImg from './assets/gpu.png';
import cpuImg from './assets/cpu.jpg';
import psuImg from './assets/psu.jpg';
import caseImg from './assets/case.jpg';
import fanImg from './assets/fan.jpg';

// Add brand to each product (example brands, adjust as needed)
export const products = [
	// RAM
	{ id: 1, name: 'Corsair Vengeance 16GB DDR4', price: 69.99, image: ramImg, sale: '10% OFF', category: 'RAM', brand: 'Corsair', specs: { speed: '3200MHz', capacity: '16GB', type: 'DDR4' } },
	{ id: 2, name: 'G.SKILL Trident Z RGB 32GB DDR4', price: 129.99, image: ramImg, sale: null, category: 'RAM', brand: 'G.SKILL', specs: { speed: '3600MHz', capacity: '32GB', type: 'DDR4' } },
	{ id: 3, name: 'Kingston Fury Beast 16GB DDR5', price: 99.99, image: ramImg, sale: '5% OFF', category: 'RAM', brand: 'Kingston', specs: { speed: '5200MHz', capacity: '16GB', type: 'DDR5' } },
	{ id: 4, name: 'Crucial Ballistix 8GB DDR4', price: 39.99, image: ramImg, sale: null, category: 'RAM', brand: 'Crucial', specs: { speed: '3000MHz', capacity: '8GB', type: 'DDR4' } },
	{ id: 5, name: 'Team T-Force Delta RGB 16GB DDR4', price: 74.99, image: ramImg, sale: null, category: 'RAM', brand: 'Team', specs: { speed: '3200MHz', capacity: '16GB', type: 'DDR4' } },
	{ id: 6, name: 'Patriot Viper Steel 32GB DDR4', price: 119.99, image: ramImg, sale: '8% OFF', category: 'RAM', brand: 'Patriot', specs: { speed: '4000MHz', capacity: '32GB', type: 'DDR4' } },
	{ id: 7, name: 'ADATA XPG Spectrix D60G 16GB', price: 84.99, image: ramImg, sale: null, category: 'RAM', brand: 'ADATA', specs: { speed: '3200MHz', capacity: '16GB', type: 'DDR4' } },
	{ id: 8, name: 'Silicon Power 16GB DDR4', price: 59.99, image: ramImg, sale: null, category: 'RAM', brand: 'Silicon Power', specs: { speed: '2666MHz', capacity: '16GB', type: 'DDR4' } },
	// GPUs
	{ id: 9, name: 'NVIDIA RTX 4070', price: 599.99, image: gpuImg, sale: null, category: 'Graphics Cards', brand: 'NVIDIA', specs: { vram: '12GB', chipset: 'RTX 4070', boostClock: '2475MHz' } },
	{ id: 10, name: 'NVIDIA RTX 4060 Ti', price: 399.99, image: gpuImg, sale: '15% OFF', category: 'Graphics Cards', brand: 'NVIDIA', specs: { vram: '8GB', chipset: 'RTX 4060 Ti', boostClock: '2535MHz' } },
	{ id: 11, name: 'NVIDIA RTX 4080', price: 1099.99, image: gpuImg, sale: null, category: 'Graphics Cards', brand: 'NVIDIA', specs: { vram: '16GB', chipset: 'RTX 4080', boostClock: '2505MHz' } },
	{ id: 12, name: 'AMD Radeon RX 7900 XT', price: 899.99, image: gpuImg, sale: '10% OFF', category: 'Graphics Cards', brand: 'AMD', specs: { vram: '20GB', chipset: 'RX 7900 XT', boostClock: '2400MHz' } },
	{ id: 13, name: 'AMD Radeon RX 7800 XT', price: 699.99, image: gpuImg, sale: null, category: 'Graphics Cards', brand: 'AMD', specs: { vram: '16GB', chipset: 'RX 7800 XT', boostClock: '2430MHz' } },
	{ id: 14, name: 'NVIDIA RTX 3060', price: 299.99, image: gpuImg, sale: null, category: 'Graphics Cards', brand: 'NVIDIA', specs: { vram: '12GB', chipset: 'RTX 3060', boostClock: '1777MHz' } },
	{ id: 15, name: 'NVIDIA RTX 4090', price: 1799.99, image: gpuImg, sale: '5% OFF', category: 'Graphics Cards', brand: 'NVIDIA', specs: { vram: '24GB', chipset: 'RTX 4090', boostClock: '2520MHz' } },
	{ id: 16, name: 'AMD Radeon RX 6700 XT', price: 349.99, image: gpuImg, sale: null, category: 'Graphics Cards', brand: 'AMD', specs: { vram: '12GB', chipset: 'RX 6700 XT', boostClock: '2581MHz' } },
	// CPUs
	{ id: 17, name: 'Intel Core i7-13700K', price: 399.99, image: cpuImg, sale: '15% OFF', category: 'CPU', brand: 'Intel', specs: { cores: 16, threads: 24, baseClock: '3.4GHz', boostClock: '5.4GHz' } },
	{ id: 18, name: 'Intel Core i9-13900K', price: 599.99, image: cpuImg, sale: null, category: 'CPU', brand: 'Intel', specs: { cores: 24, threads: 32, baseClock: '3.0GHz', boostClock: '5.8GHz' } },
	{ id: 19, name: 'AMD Ryzen 7 7800X3D', price: 449.99, image: cpuImg, sale: null, category: 'CPU', brand: 'AMD', specs: { cores: 8, threads: 16, baseClock: '4.2GHz', boostClock: '5.0GHz' } },
	{ id: 20, name: 'AMD Ryzen 9 7950X', price: 699.99, image: cpuImg, sale: '10% OFF', category: 'CPU', brand: 'AMD', specs: { cores: 16, threads: 32, baseClock: '4.5GHz', boostClock: '5.7GHz' } },
	{ id: 21, name: 'Intel Core i5-13600K', price: 299.99, image: cpuImg, sale: null, category: 'CPU', brand: 'Intel', specs: { cores: 14, threads: 20, baseClock: '3.5GHz', boostClock: '5.1GHz' } },
	{ id: 22, name: 'AMD Ryzen 5 7600X', price: 249.99, image: cpuImg, sale: null, category: 'CPU', brand: 'AMD', specs: { cores: 6, threads: 12, baseClock: '4.7GHz', boostClock: '5.3GHz' } },
	{ id: 23, name: 'Intel Core i3-13100F', price: 129.99, image: cpuImg, sale: null, category: 'CPU', brand: 'Intel', specs: { cores: 4, threads: 8, baseClock: '3.4GHz', boostClock: '4.5GHz' } },
	{ id: 24, name: 'AMD Ryzen 3 4100', price: 99.99, image: cpuImg, sale: '5% OFF', category: 'CPU', brand: 'AMD', specs: { cores: 4, threads: 8, baseClock: '3.8GHz', boostClock: '4.0GHz' } },
	// PSUs
	{ id: 25, name: 'EVGA 750W Power Supply', price: 89.99, image: psuImg, sale: null, category: 'Power Supplies', brand: 'EVGA', specs: { wattage: '750W', efficiency: '80+ Bronze', modular: 'No' } },
	{ id: 26, name: 'Corsair RM850x 850W', price: 139.99, image: psuImg, sale: '10% OFF', category: 'Power Supplies', brand: 'Corsair', specs: { wattage: '850W', efficiency: '80+ Gold', modular: 'Yes' } },
	{ id: 27, name: 'Seasonic Focus GX-650', price: 109.99, image: psuImg, sale: null, category: 'Power Supplies', brand: 'Seasonic', specs: { wattage: '650W', efficiency: '80+ Gold', modular: 'Yes' } },
	{ id: 28, name: 'Cooler Master MWE Gold 650W', price: 89.99, image: psuImg, sale: null, category: 'Power Supplies', brand: 'Cooler Master', specs: { wattage: '650W', efficiency: '80+ Gold', modular: 'No' } },
	{ id: 29, name: 'Thermaltake Smart 500W', price: 49.99, image: psuImg, sale: null, category: 'Power Supplies', brand: 'Thermaltake', specs: { wattage: '500W', efficiency: '80+', modular: 'No' } },
	{ id: 30, name: 'NZXT C750 750W', price: 119.99, image: psuImg, sale: '8% OFF', category: 'Power Supplies', brand: 'NZXT', specs: { wattage: '750W', efficiency: '80+ Gold', modular: 'Yes' } },
	{ id: 31, name: 'ASUS ROG Strix 850W', price: 159.99, image: psuImg, sale: null, category: 'Power Supplies', brand: 'ASUS', specs: { wattage: '850W', efficiency: '80+ Gold', modular: 'Yes' } },
	{ id: 32, name: 'Be Quiet! Pure Power 11 600W', price: 79.99, image: psuImg, sale: null, category: 'Power Supplies', brand: 'Be Quiet!', specs: { wattage: '600W', efficiency: '80+ Gold', modular: 'No' } },
	// Cases
	{ id: 33, name: 'NZXT H510 Case', price: 79.99, image: caseImg, sale: '5% OFF', category: 'Cases', brand: 'NZXT', specs: { formFactor: 'ATX Mid', color: 'Black', sidePanel: 'Tempered Glass' } },
	{ id: 34, name: 'Corsair 4000D Airflow', price: 94.99, image: caseImg, sale: null, category: 'Cases', brand: 'Corsair', specs: { formFactor: 'ATX Mid', color: 'White', sidePanel: 'Tempered Glass' } },
	{ id: 35, name: 'Fractal Design Meshify C', price: 109.99, image: caseImg, sale: null, category: 'Cases', brand: 'Fractal Design', specs: { formFactor: 'ATX Mid', color: 'Black', sidePanel: 'Tempered Glass' } },
	{ id: 36, name: 'Lian Li PC-O11 Dynamic', price: 139.99, image: caseImg, sale: '10% OFF', category: 'Cases', brand: 'Lian Li', specs: { formFactor: 'ATX Full', color: 'White', sidePanel: 'Tempered Glass' } },
	{ id: 37, name: 'Phanteks Eclipse P400A', price: 89.99, image: caseImg, sale: null, category: 'Cases', brand: 'Phanteks', specs: { formFactor: 'ATX Mid', color: 'Black', sidePanel: 'Tempered Glass' } },
	{ id: 38, name: 'Cooler Master MasterBox NR600', price: 69.99, image: caseImg, sale: null, category: 'Cases', brand: 'Cooler Master', specs: { formFactor: 'ATX Mid', color: 'Black', sidePanel: 'Mesh' } },
	{ id: 39, name: 'Thermaltake Versa H18', price: 49.99, image: caseImg, sale: null, category: 'Cases', brand: 'Thermaltake', specs: { formFactor: 'Micro ATX', color: 'Black', sidePanel: 'Acrylic' } },
	{ id: 40, name: 'Be Quiet! Pure Base 500DX', price: 119.99, image: caseImg, sale: '8% OFF', category: 'Cases', brand: 'Be Quiet!', specs: { formFactor: 'ATX Mid', color: 'Black', sidePanel: 'Tempered Glass' } },
	// Fans/Misc
	{ id: 41, name: 'Noctua NF-A12 Fan', price: 19.99, image: fanImg, sale: null, category: 'Misc.', brand: 'Noctua', specs: { size: '120mm', rgb: false } },
	{ id: 42, name: 'Corsair LL120 RGB Fan', price: 34.99, image: fanImg, sale: '10% OFF', category: 'Misc.', brand: 'Corsair', specs: { size: '120mm', rgb: true } },
	{ id: 43, name: 'be quiet! Silent Wings 3', price: 24.99, image: fanImg, sale: null, category: 'Misc.', brand: 'be quiet!', specs: { size: '120mm', rgb: false } },
	{ id: 44, name: 'Cooler Master SickleFlow 120', price: 14.99, image: fanImg, sale: null, category: 'Misc.', brand: 'Cooler Master', specs: { size: '120mm', rgb: false } },
	{ id: 45, name: 'NZXT Aer RGB 2', price: 29.99, image: fanImg, sale: null, category: 'Misc.', brand: 'NZXT', specs: { size: '120mm', rgb: true } },
	{ id: 46, name: 'Arctic P12 PWM PST', price: 11.99, image: fanImg, sale: null, category: 'Misc.', brand: 'Arctic', specs: { size: '120mm', rgb: false } },
	{ id: 47, name: 'Thermaltake Riing Quad 12', price: 39.99, image: fanImg, sale: '5% OFF', category: 'Misc.', brand: 'Thermaltake', specs: { size: '120mm', rgb: true } },
	{ id: 48, name: 'Lian Li UNI FAN SL120', price: 29.99, image: fanImg, sale: null, category: 'Misc.', brand: 'Lian Li', specs: { size: '120mm', rgb: true } },
	// More variety
	{ id: 49, name: 'G.SKILL Ripjaws V 16GB DDR4', price: 64.99, image: ramImg, sale: null, category: 'RAM', brand: 'G.SKILL', specs: { speed: '3200MHz', capacity: '16GB', type: 'DDR4' } },
	{ id: 50, name: 'MSI GeForce RTX 3060 Ventus', price: 319.99, image: gpuImg, sale: '7% OFF', category: 'Graphics Cards', brand: 'MSI', specs: { vram: '12GB', chipset: 'RTX 3060', boostClock: '1807MHz' } },
];

const categories = [
	{ label: 'All', value: 'All' },
	{ label: 'RAM', value: 'RAM' },
	{ label: 'Graphics Cards', value: 'Graphics Cards' },
	{ label: "CPU's", value: 'CPU' },
	{ label: 'Power Supplies', value: 'Power Supplies' },
	{ label: 'Cases', value: 'Cases' },
	{ label: 'Misc.', value: 'Misc.' },
];

function getSpecOptions(products, category) {
	// Returns unique spec values for the selected category or all if 'All'
	const filtered = products.filter(p =>
		category === 'All' ? true : (category === "CPU's" ? p.category === 'CPU' : p.category === category)
	);
	const specFields = {
		'RAM': ['speed', 'capacity', 'type'],
		'Graphics Cards': ['vram', 'chipset'],
		'CPU': ['cores', 'threads'],
		'Power Supplies': ['wattage', 'efficiency', 'modular'],
		'Cases': ['formFactor', 'color', 'sidePanel'],
		'Misc.': ['size', 'rgb']
	};
	let fieldsByCategory = {};
	if (category === 'All') {
		// For 'All', group fields by category
		Object.entries(specFields).forEach(([cat, fields]) => {
			fieldsByCategory[cat] = fields;
		});
		fieldsByCategory['General'] = ['brand'];
	} else {
		const cat = category === "CPU's" ? 'CPU' : category;
		fieldsByCategory[cat] = specFields[cat] || [];
		fieldsByCategory['General'] = ['brand'];
	}
	// Build options for each field
	const options = {};
	Object.entries(fieldsByCategory).forEach(([cat, fields]) => {
		fields.forEach(field => {
			if (field === 'brand') {
				options[field] = { values: Array.from(new Set(filtered.map(p => p.brand).filter(Boolean))), category: cat };
			} else {
				options[field] = { values: Array.from(new Set(filtered.map(p => p.specs?.[field]).filter(Boolean))), category: cat };
			}
		});
	});
	return options;
}

function ProductList({ selectedCategory = 'All', onCategoryChange, searchText = '', addToCart }) {
	const [activeCategory, setActiveCategory] = useState(selectedCategory);
	const [specFilters, setSpecFilters] = useState({});
	const [priceRange, setPriceRange] = useState([0, 0]);
	const [priceFilter, setPriceFilter] = useState([null, null]);
	const [page, setPage] = useState(1);
	const pageSize = 12;
	const navigate = useNavigate();

	const handleCategoryClick = (cat) => {
		setActiveCategory(cat);
		setSpecFilters({}); // Reset spec filters on category change
		setPage(1); // Reset to first page
		if (onCategoryChange) onCategoryChange(cat);
	};

	const handleSpecChange = (field, value) => {
		setSpecFilters(prev => ({ ...prev, [field]: value }));
	};

	React.useEffect(() => {
		// Set min/max price for current filtered products
		const filtered = products.filter(p =>
			activeCategory === 'All' ? true : (activeCategory === "CPU's" ? p.category === 'CPU' : p.category === activeCategory)
		);
		if (filtered.length) {
			const min = Math.floor(Math.min(...filtered.map(p => p.price)));
			const max = Math.ceil(Math.max(...filtered.map(p => p.price)));
			setPriceRange([min, max]);
			setPriceFilter([min, max]);
		}
	}, [activeCategory]);

	const specOptions = getSpecOptions(products, activeCategory);

	const filteredProducts = products.filter((p) => {
		const matchesCategory =
			activeCategory === 'All' ||
			p.category === activeCategory ||
			(activeCategory === "CPU's" && p.category === 'CPU');
		const matchesSearch =
			!searchText ||
			p.name.toLowerCase().includes(searchText.toLowerCase());
		// Spec filter logic
		const matchesSpecs = Object.entries(specFilters).every(([field, value]) => {
			if (!value) return true;
			return p.specs && String(p.specs[field]) === String(value);
		});
		// Price filter
		const matchesPrice = (!priceFilter[0] || p.price >= priceFilter[0]) && (!priceFilter[1] || p.price <= priceFilter[1]);
		return matchesCategory && matchesSearch && matchesSpecs && matchesPrice;
	});

	const totalPages = Math.ceil(filteredProducts.length / pageSize);
	const paginatedProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

	return (
		<div className="d-flex">
			{/* Sidebar Filter */}
			<div className="bg-light border-end p-3" style={{ minWidth: 220, maxWidth: 260 }}>
				<h5 className="mb-3">Filter</h5>
				{/* Price Filter */}
				<div className="mb-3">
					<label className="form-label">Price Range</label>
					<div className="d-flex align-items-center gap-2">
						<input type="number" className="form-control" style={{ width: 80 }} min={priceRange[0]} max={priceRange[1]} value={priceFilter[0] ?? ''} onChange={e => setPriceFilter([Number(e.target.value), priceFilter[1]])} />
						<span>-</span>
						<input type="number" className="form-control" style={{ width: 80 }} min={priceRange[0]} max={priceRange[1]} value={priceFilter[1] ?? ''} onChange={e => setPriceFilter([priceFilter[0], Number(e.target.value)])} />
					</div>
					<div className="text-muted small mt-1">${priceRange[0]} - ${priceRange[1]}</div>
				</div>
				{/* Other Filters */}
				{Object.keys(specOptions).length === 0 && <div className="text-muted">No filters</div>}
				{/* Group filters by category for 'All' */}
				{activeCategory === 'All' ? (
					Object.entries({
						'General': ['brand'],
						'RAM': ['speed', 'capacity', 'type'],
						'Graphics Cards': ['vram', 'chipset'],
						'CPU': ['cores', 'threads'],
						'Power Supplies': ['wattage', 'efficiency', 'modular'],
						'Cases': ['formFactor', 'color', 'sidePanel'],
						'Misc.': ['size', 'rgb']
					}).map(([cat, fields]) => (
						<div key={cat} className="mb-2">
							<div className="fw-bold text-primary small mb-1" style={{textTransform:'uppercase', letterSpacing:'1px'}}>{cat}</div>
							{fields.map(field => specOptions[field] && (
								<div className="mb-2" key={field}>
									<label className="form-label" style={{ textTransform: 'capitalize' }}>{field}</label>
									<select
										className="form-select"
										value={specFilters[field] || ''}
										onChange={e => handleSpecChange(field, e.target.value)}
									>
										<option value="">All</option>
										{specOptions[field].values.map(val => (
											<option value={val} key={val}>{String(val)}</option>
										))}
									</select>
								</div>
							))}
						</div>
					))
				) : (
					Object.entries(specOptions).map(([field, { values }]) => (
						<div className="mb-3" key={field}>
							<label className="form-label" style={{ textTransform: 'capitalize' }}>{field}</label>
							<select
								className="form-select"
								value={specFilters[field] || ''}
								onChange={e => handleSpecChange(field, e.target.value)}
							>
								<option value="">All</option>
								{values.map(val => (
									<option value={val} key={val}>{String(val)}</option>
								))}
							</select>
						</div>
					))
				)}
			</div>
			{/* Main Content */}
			<div style={{ flex: 1 }}>
				{/* Category Bar */}
				<div className="bg-secondary bg-opacity-25 py-2 px-3 d-flex justify-content-center align-items-center w-100" style={{ fontSize: '1rem', fontWeight: 600, width: '100vw' }}>
					<div className="d-flex gap-4 flex-wrap">
						{categories.map((cat) => (
							<button
								key={cat.value}
								className={`category-link text-dark bg-transparent text-decoration-none px-2 py-1 fw-bold rounded-2 btn btn-link${activeCategory === cat.value ? ' text-primary' : ''}`}
								style={{ outline: 'none', boxShadow: 'none' }}
								onClick={() => handleCategoryClick(cat.value)}
							>
								{cat.label}
							</button>
						))}
					</div>
				</div>
				{/* Search Info */}
				{searchText && (
					<div className="container mt-3 mb-2">
						<div className="alert alert-info py-2 mb-0">
							Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} for <strong>"{searchText}"</strong>
						</div>
					</div>
				)}
				{/* Product Cards */}
				<div className="container py-4">
					<div className="row g-4">
						{paginatedProducts.map(product => (
							<div className="col-md-4 col-lg-3" key={product.id}>
								<div className="card h-100 shadow-sm position-relative" style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${product.id}`)}>
									{product.sale && (
										<span className="badge bg-danger position-absolute top-0 end-0 m-2" style={{ zIndex: 2 }}>{product.sale}</span>
									)}
									<img src={product.image} className="card-img-top" alt={product.name} style={{ height: '180px', objectFit: 'cover' }} />
									<div className="card-body d-flex flex-column">
										<h5 className="card-title">{product.name}</h5>
										<p className="card-text fw-bold mb-2">${product.price.toFixed(2)}</p>
										<button className="btn btn-primary mt-auto" onClick={e => { e.stopPropagation(); addToCart(product); }}>Add to Cart</button>
									</div>
								</div>
							</div>
						))}
					</div>
					{/* Pagination Controls */}
					{totalPages > 1 && (
						<nav className="mt-4 d-flex justify-content-center">
							<ul className="pagination">
								<li className={`page-item${page === 1 ? ' disabled' : ''}`}>
									<button className="page-link" onClick={() => setPage(page - 1)} disabled={page === 1}>&laquo;</button>
								</li>
								{Array.from({ length: totalPages }, (_, i) => (
									<li key={i + 1} className={`page-item${page === i + 1 ? ' active' : ''}`}>
										<button className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</button>
									</li>
								))}
								<li className={`page-item${page === totalPages ? ' disabled' : ''}`}>
									<button className="page-link" onClick={() => setPage(page + 1)} disabled={page === totalPages}>&raquo;</button>
								</li>
							</ul>
						</nav>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProductList;
