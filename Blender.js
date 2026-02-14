// Tools Data
const toolsData = [
    {
        id: 1,
        name: "Move Tool",
        category: "modeling",
        icon: "🔄",
        shortcut: "G",
        description: "Grab and move objects, faces, edges, or vertices in 3D space.",
        details: "The Move (Grab) tool is fundamental in Blender. Press G to activate, then move your mouse to reposition the selection. You can constrain movement to specific axes by pressing X, Y, or Z after pressing G.",
        tips: [
            "Press G twice to use edge/face sliding",
            "Hold Shift while moving for precise adjustments",
            "Type numbers after G to move exact distances"
        ]
    },
    {
        id: 2,
        name: "Rotate Tool",
        category: "modeling",
        icon: "↻",
        shortcut: "R",
        description: "Rotate objects or components around a pivot point.",
        details: "The Rotate tool allows you to spin objects in 3D space. Press R to activate rotation, then move your mouse. Like the Move tool, you can constrain rotation to specific axes.",
        tips: [
            "Press R + X/Y/Z to rotate on specific axis",
            "Type rotation amount in degrees after pressing R",
            "Double-tap R for trackball rotation"
        ]
    },
    {
        id: 3,
        name: "Scale Tool",
        category: "modeling",
        icon: "⇲",
        shortcut: "S",
        description: "Resize objects, faces, edges, or vertices uniformly or along specific axes.",
        details: "The Scale tool resizes your selection. Press S to activate, then move the mouse to scale. You can scale along specific axes by pressing X, Y, or Z after S.",
        tips: [
            "Press S + Shift + X/Y/Z to scale on all axes except the one specified",
            "Type scale factor after S (e.g., S + 2 doubles size)",
            "Use S + 0 to flatten along an axis"
        ]
    },
    {
        id: 4,
        name: "Extrude",
        category: "modeling",
        icon: "⬆️",
        shortcut: "E",
        description: "Create new geometry by extending faces, edges, or vertices.",
        details: "Extrusion is one of the most powerful modeling tools. It creates new geometry connected to your selection, perfect for building complex shapes from simple primitives.",
        tips: [
            "Use Alt+E for extrude menu with more options",
            "Extrude along normals with Alt+E > Extrude Faces Along Normals",
            "Cancel extrusion with right-click if you make a mistake"
        ]
    },
    {
        id: 5,
        name: "Loop Cut",
        category: "modeling",
        icon: "✂️",
        shortcut: "Ctrl+R",
        description: "Add edge loops to mesh for additional geometry control.",
        details: "Loop cuts add evenly spaced edge loops across your mesh. This is essential for adding detail and controlling edge flow in your models.",
        tips: [
            "Scroll mouse wheel to add multiple loops",
            "Press E after cutting to slide along edges",
            "Use edge loops to define hard edges and curves"
        ]
    },
    {
        id: 6,
        name: "Knife Tool",
        category: "modeling",
        icon: "🔪",
        shortcut: "K",
        description: "Cut custom edges and faces into your mesh.",
        details: "The Knife tool allows freeform cutting through mesh geometry. Click to create cut points, and press Enter to confirm the cut.",
        tips: [
            "Press C for angle constraint snapping",
            "Press Z to cut through the mesh",
            "Use Shift for midpoint snapping"
        ]
    },
    {
        id: 7,
        name: "Subdivision Surface",
        category: "modeling",
        icon: "🎯",
        shortcut: "Modifier",
        description: "Smooth and subdivide mesh for organic modeling.",
        details: "The Subdivision Surface modifier smooths your mesh by subdividing faces. It's essential for creating smooth, organic shapes while keeping your base mesh simple.",
        tips: [
            "Add edge loops to control where subdivisions occur",
            "Use Ctrl+1, 2, 3 to quickly add subdivision levels",
            "Apply creases with Shift+E for hard edges"
        ]
    },
    {
        id: 8,
        name: "Boolean Operations",
        category: "modeling",
        icon: "🔲",
        shortcut: "Modifier",
        description: "Combine or subtract meshes using boolean operations.",
        details: "Boolean modifiers allow you to combine (Union), subtract (Difference), or intersect meshes. Great for hard-surface modeling and creating complex shapes quickly.",
        tips: [
            "Keep meshes as simple as possible for cleaner booleans",
            "Apply scale before using booleans (Ctrl+A)",
            "Use the Bool Tool addon for easier access"
        ]
    },
    {
        id: 9,
        name: "Shader Editor",
        category: "materials",
        icon: "🎨",
        shortcut: "Workspace",
        description: "Create and edit materials using node-based shading.",
        details: "The Shader Editor is where you create materials. It uses a node-based system where you connect different shader nodes to create complex material effects.",
        tips: [
            "Use Shift+A to add new nodes",
            "Press Ctrl+Shift+Click on nodes to preview",
            "Learn Principled BSDF first - it covers most needs"
        ]
    },
    {
        id: 10,
        name: "Principled BSDF",
        category: "materials",
        icon: "💎",
        shortcut: "Node",
        description: "All-in-one physically based shader for realistic materials.",
        details: "The Principled BSDF is the go-to shader for PBR (Physically Based Rendering) materials. It combines multiple shading models into one convenient node.",
        tips: [
            "Metallic slider: 0 for dielectrics, 1 for metals",
            "Roughness controls surface glossiness",
            "Use IOR values from real-world references"
        ]
    },
    {
        id: 11,
        name: "UV Editor",
        category: "materials",
        icon: "🗺️",
        shortcut: "Workspace",
        description: "Unwrap and edit UV coordinates for texture mapping.",
        details: "UV unwrapping creates a 2D representation of your 3D model for texture painting. The UV Editor lets you layout and optimize these UV maps.",
        tips: [
            "Mark seams before unwrapping (Ctrl+E > Mark Seam)",
            "Use U > Smart UV Project for quick unwraps",
            "Pack UVs efficiently to maximize texture resolution"
        ]
    },
    {
        id: 12,
        name: "Texture Paint",
        category: "materials",
        icon: "🖌️",
        shortcut: "Workspace",
        description: "Paint textures directly onto 3D models.",
        details: "Texture Paint mode allows you to paint directly on your model's surface. The paint follows the UV mapping and updates in real-time.",
        tips: [
            "Create image textures in UV Editor first",
            "Use X to flip draw/erase modes",
            "Adjust brush strength with Shift+F"
        ]
    },
    {
        id: 13,
        name: "Point Light",
        category: "lighting",
        icon: "💡",
        shortcut: "Shift+A",
        description: "Omnidirectional light source radiating in all directions.",
        details: "Point lights emit light equally in all directions from a single point, similar to a light bulb. Great for indoor scenes and local lighting.",
        tips: [
            "Adjust Power in watts for realistic brightness",
            "Use falloff settings to control light range",
            "Combine multiple point lights for ambient lighting"
        ]
    },
    {
        id: 14,
        name: "Sun Light",
        category: "lighting",
        icon: "☀️",
        shortcut: "Shift+A",
        description: "Directional light simulating sunlight with parallel rays.",
        details: "Sun lights create parallel rays of light, perfect for outdoor scenes. The position doesn't matter, only the rotation affects the lighting direction.",
        tips: [
            "Angle controls apparent sun size and shadow softness",
            "Use warm colors (slight orange) for sunset effects",
            "Strength around 1-5 works for most outdoor scenes"
        ]
    },
    {
        id: 15,
        name: "Area Light",
        category: "lighting",
        icon: "🔦",
        shortcut: "Shift+A",
        description: "Rectangular light source for soft, realistic lighting.",
        details: "Area lights provide soft, even lighting from a rectangular surface. They're excellent for studio lighting setups and creating realistic indoor lighting.",
        tips: [
            "Larger area lights create softer shadows",
            "Use for product renders and portrait lighting",
            "Adjust size in light properties for different effects"
        ]
    },
    {
        id: 16,
        name: "HDRI Environment",
        category: "lighting",
        icon: "🌍",
        shortcut: "World",
        description: "360-degree image-based lighting for realistic environments.",
        details: "HDRI (High Dynamic Range Image) provides realistic lighting and reflections from a 360-degree image. Essential for photorealistic renders.",
        tips: [
            "Download free HDRIs from Poly Haven",
            "Adjust strength to control overall brightness",
            "Rotate on Z-axis to change lighting direction"
        ]
    },
    {
        id: 17,
        name: "Keyframe Animation",
        category: "animation",
        icon: "🎬",
        shortcut: "I",
        description: "Set keyframes to animate object properties over time.",
        details: "Keyframes mark specific values at specific frames. Blender interpolates between keyframes to create smooth animation.",
        tips: [
            "Press I on any property to set a keyframe",
            "Use the timeline to scrub through animation",
            "Right-click properties to access keyframe options"
        ]
    },
    {
        id: 18,
        name: "Graph Editor",
        category: "animation",
        icon: "📈",
        shortcut: "Workspace",
        description: "Edit animation curves and timing with precise control.",
        details: "The Graph Editor shows animation as curves over time. You can adjust the interpolation and timing of animations with precision.",
        tips: [
            "Select curves and press V to change interpolation",
            "Use T for easing options (ease in, ease out)",
            "Normalize curves for consistent playback speed"
        ]
    },
    {
        id: 19,
        name: "Dope Sheet",
        category: "animation",
        icon: "📋",
        shortcut: "Workspace",
        description: "Manage and organize keyframes across multiple objects.",
        details: "The Dope Sheet provides a high-level view of all keyframes in your scene, making it easy to manage complex animations.",
        tips: [
            "Use action editor mode for NLA (Non-Linear Animation)",
            "Summary mode shows all scene keyframes",
            "Box select and move keyframes in bulk"
        ]
    },
    {
        id: 20,
        name: "Eevee Renderer",
        category: "rendering",
        icon: "⚡",
        shortcut: "Render",
        description: "Real-time render engine for fast previews and animations.",
        details: "Eevee is Blender's real-time renderer. It provides fast, good-quality renders perfect for animations and quick previews.",
        tips: [
            "Enable Bloom for glowing effects",
            "Use Screen Space Reflections for mirrors",
            "Increase shadow cube size for better quality"
        ]
    },
    {
        id: 21,
        name: "Cycles Renderer",
        category: "rendering",
        icon: "🎯",
        shortcut: "Render",
        description: "Physically based path tracing for photorealistic renders.",
        details: "Cycles is a raytracing renderer that simulates light physics for photorealistic results. Slower than Eevee but produces superior quality.",
        tips: [
            "Start with 128 samples for previews, 512+ for final",
            "Use denoising to reduce noise in renders",
            "Enable GPU rendering in preferences for speed"
        ]
    },
    {
        id: 22,
        name: "Compositor",
        category: "rendering",
        icon: "🎞️",
        shortcut: "Workspace",
        description: "Post-process renders with node-based compositing.",
        details: "The Compositor allows you to enhance renders with color correction, effects, and compositing multiple layers.",
        tips: [
            "Enable 'Use Nodes' to activate compositor",
            "Add glare node for lens flare effects",
            "Use color balance for mood adjustments"
        ]
    },
    {
        id: 23,
        name: "Array Modifier",
        category: "modeling",
        icon: "📊",
        shortcut: "Modifier",
        description: "Duplicate objects in a linear or circular pattern.",
        details: "The Array modifier creates copies of your object offset in various ways. Perfect for creating fences, columns, and repeated elements.",
        tips: [
            "Use with curve modifier for arrays along paths",
            "Combine with mirror modifier for symmetrical arrays",
            "Adjust count and offset for different patterns"
        ]
    },
    {
        id: 24,
        name: "Mirror Modifier",
        category: "modeling",
        icon: "🪞",
        shortcut: "Modifier",
        description: "Create symmetrical models by mirroring geometry.",
        details: "The Mirror modifier creates a mirrored copy of your mesh across an axis. Essential for symmetrical modeling of characters and objects.",
        tips: [
            "Enable clipping to merge center vertices",
            "Use multiple mirror modifiers for multiple axes",
            "Apply mirror when symmetry is no longer needed"
        ]
    },
    {
        id: 25,
        name: "Particle System",
        category: "animation",
        icon: "✨",
        shortcut: "Modifier",
        description: "Generate and animate large numbers of objects or particles.",
        details: "Particle systems create and animate many objects or particles, perfect for hair, grass, crowds, and special effects.",
        tips: [
            "Start with emitter type for basic particles",
            "Use hair type for fur and grass",
            "Adjust velocity and random for natural movement"
        ]
    },
    {
        id: 26,
        name: "Solidify Modifier",
        category: "modeling",
        icon: "📏",
        shortcut: "Modifier",
        description: "Add thickness to surfaces and meshes.",
        details: "Solidify adds depth to surfaces, turning flat planes into solid objects. Great for creating walls, shells, and thickness.",
        tips: [
            "Increase offset to control thickness direction",
            "Enable 'Even Thickness' for better corners",
            "Useful for architectural modeling"
        ]
    },
    {
        id: 27,
        name: "Bevel Modifier",
        category: "modeling",
        icon: "🔷",
        shortcut: "Modifier",
        description: "Round or chamfer edges for realistic hard-surface models.",
        details: "The Bevel modifier rounds edges, adding realism to hard-surface models by simulating wear and manufacturing limits.",
        tips: [
            "Use weight painting to control which edges bevel",
            "Limit method 'Angle' for automatic sharp edge detection",
            "Lower segment count for performance"
        ]
    },
    {
        id: 28,
        name: "Camera View",
        category: "rendering",
        icon: "📷",
        shortcut: "Numpad 0",
        description: "View and render from the camera's perspective.",
        details: "Camera view shows what will be rendered. You can position cameras and lock the view to compose your shots perfectly.",
        tips: [
            "Press Numpad 0 to toggle camera view",
            "Use Ctrl+Alt+Numpad 0 to snap camera to current view",
            "Add multiple cameras and switch between them"
        ]
    },
    {
        id: 29,
        name: "Constraints",
        category: "animation",
        icon: "🔗",
        shortcut: "Panel",
        description: "Control object behavior and relationships.",
        details: "Constraints limit or control object transformations based on other objects or properties. Essential for rigging and animation.",
        tips: [
            "Track To constraint for eyes following targets",
            "Copy Location for parent-child alternatives",
            "Limit constraints for mechanical movements"
        ]
    },
    {
        id: 30,
        name: "Weight Paint",
        category: "animation",
        icon: "🎨",
        shortcut: "Mode",
        description: "Paint vertex weights for rigging and deformation.",
        details: "Weight painting assigns influence values to vertices, controlling how bones deform the mesh in character rigging.",
        tips: [
            "Use in combination with armatures",
            "Red = full influence, blue = no influence",
            "Smooth weights for natural deformation"
        ]
    }
];

// Search functionality
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchBtn.addEventListener('click', () => {
    searchModal.classList.add('active');
    searchInput.focus();
});

closeSearch.addEventListener('click', () => {
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
});

searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    }
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
    }
    
    const filtered = toolsData.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.shortcut.toLowerCase().includes(query)
    );
    
    if (filtered.length === 0) {
        searchResults.innerHTML = '<p style="color: var(--gray-text); padding: 1rem;">No results found</p>';
        return;
    }
    
    searchResults.innerHTML = filtered.map(tool => `
        <div class="search-result-item" onclick="openToolModal(${tool.id})">
            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">${tool.icon}</div>
            <div style="font-weight: 600; color: var(--light-text);">${tool.name}</div>
            <div style="font-size: 0.9rem; color: var(--gray-text);">${tool.description}</div>
            <div style="font-size: 0.8rem; color: var(--primary-color); margin-top: 0.5rem;">
                ${tool.category.charAt(0).toUpperCase() + tool.category.slice(1)} • ${tool.shortcut}
            </div>
        </div>
    `).join('');
});

// Populate tools grid
const toolsGrid = document.getElementById('toolsGrid');

function renderTools(category = 'all') {
    const filteredTools = category === 'all' 
        ? toolsData 
        : toolsData.filter(tool => tool.category === category);
    
    toolsGrid.innerHTML = filteredTools.map(tool => `
        <div class="tool-card" data-category="${tool.category}" onclick="openToolModal(${tool.id})">
            <div class="tool-icon">${tool.icon}</div>
            <span class="tool-category">${tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}</span>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <span class="tool-shortcut">${tool.shortcut}</span>
        </div>
    `).join('');
}

// Initial render
renderTools();

// Filter functionality
const filterTabs = document.querySelectorAll('.filter-tab');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        filterTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Get category and filter tools
        const category = tab.getAttribute('data-category');
        renderTools(category);
    });
});

// Tool modal functionality
const toolModal = document.getElementById('toolModal');
const closeModal = document.getElementById('closeModal');
const toolModalBody = document.getElementById('toolModalBody');

function openToolModal(toolId) {
    const tool = toolsData.find(t => t.id === toolId);
    
    if (!tool) return;
    
    toolModalBody.innerHTML = `
        <div class="tool-icon" style="font-size: 4rem; margin-bottom: 1rem;">${tool.icon}</div>
        <h2>${tool.name}</h2>
        <span class="tool-category">${tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}</span>
        <p style="margin-top: 1rem;"><strong>Shortcut:</strong> <span class="tool-shortcut">${tool.shortcut}</span></p>
        <p style="margin-top: 1rem;">${tool.details}</p>
        ${tool.tips ? `
            <h3>Pro Tips</h3>
            <ul>
                ${tool.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        ` : ''}
    `;
    
    toolModal.classList.add('active');
    
    // Close search modal if open
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
}

closeModal.addEventListener('click', () => {
    toolModal.classList.remove('active');
});

toolModal.addEventListener('click', (e) => {
    if (e.target === toolModal) {
        toolModal.classList.remove('active');
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all tool cards and workflow cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.tool-card, .workflow-card, .tip-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        toolModal.classList.remove('active');
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    }
});

console.log('BlenderHub loaded successfully! 🔷');
console.log(`Total tools available: ${toolsData.length}`);
