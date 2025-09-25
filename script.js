// StudySync - Notes & PYQ Platform
// This is a frontend simulation - in a real application, you would need a backend to serve files

document.addEventListener('DOMContentLoaded', function() {
    // Sample data structure matching your folder organization
    const subjectsData = {
        "M3(BCS301)": {
            name: "Mathematics III",
            code: "BCS301",
            notes: [
                { name: "Module 1 - Linear Algebra", filename: "Resources/M3(BCS301)/Notes/M1.pdf", size: "2.4 MB" },
                { name: "Module 2 - Calculus", filename: "Resources/M3(BCS301)/Notes/M2.pdf", size: "3.1 MB" },
                { name: "Module 3 - Differential Equations", filename: "Resources/M3(BCS301)/Notes/M3.pdf", size: "2.8 MB" },
                { name: "Module 4 - Probability", filename: "Resources/M3(BCS301)/Notes/M4.pdf", size: "2.5 MB" },
                { name: "Module 5 - Statistics", filename: "Resources/M3(BCS301)/Notes/M5.pdf", size: "3.2 MB" }
            ],
            pyq: [
                { name: "BCS301 - Previous Year Questions", filename: "Resources/M3(BCS301)/PYQ/BCS301_Dec23-Jan2024.pdf", size: "4.5 MB", year: "2020-2023" },
                { name: "M3 Solved Papers - June 2024", filename: "Resources/M3(BCS301)/PYQ/solved_june24.pdf", size: "5.2 MB", year: "2024" },
                { name: "BCS301 Dec 2023 - Jan 2024", filename: "Resources/M3(BCS301)/PYQ/BCS301_Dec23-Jan2024.pdf", size: "4.8 MB", year: "2023-2024" }
            ]
        },
        "DDCO(BCS302)": {
            name: "Digital Design and Computer Organization",
            code: "BCS302",
            notes: [
                { name: "Module 1 - Digital Logic", filename: "Resources/DDCO(BCS302)/BCS302_Notes/M1.pdf", size: "2.1 MB" },
                { name: "Module 2 - Combinational Circuits", filename: "Resources/DDCO(BCS302)/BCS302_Notes/M2.pdf", size: "2.7 MB" },
                { name: "Module 3 - Sequential Circuits", filename: "Resources/DDCO(BCS302)/BCS302_Notes/M3.pdf", size: "3.0 MB" },
                { name: "Module 4 - Memory Organization", filename: "Resources/DDCO(BCS302)/BCS302_Notes/M4.pdf", size: "2.4 MB" },
                { name: "Module 5 - CPU Design", filename: "Resources/DDCO(BCS302)/BCS302_Notes/M5.pdf", size: "2.9 MB" }
            ],
            pyq: [
                { name: "BCS302 - Previous Year Questions", filename: "Resources/DDCO(BCS302)/BCS302_PYQ/BCS302june-july2024.pdf", size: "3.8 MB", year: "2020-2023" },
                { name: "DDCO Solved Papers - 2024", filename: "Resources/DDCO(BCS302)/BCS302_PYQ/MQP-BCS302.pdf", size: "4.5 MB", year: "2024" }
            ]
        },
        "OS(BCS303)": {
            name: "Operating Systems",
            code: "BCS303",
            notes: [
                { name: "Module 1 - Introduction to OS", filename: "Resources/OS(BCS303)/OS NOTES/OS_module1.pdf", size: "2.3 MB" },
                { name: "Module 2 - Process Management", filename: "Resources/OS(BCS303)/OS NOTES/OS_Module2.pdf", size: "3.2 MB" },
                { name: "Module 3 - Memory Management", filename: "Resources/OS(BCS303)/OS NOTES/OS_module3.pdf", size: "2.8 MB" },
                { name: "Module 4 - File Systems", filename: "Resources/OS(BCS303)/OS NOTES/OS_Module 4.pdf", size: "2.5 MB" },
                { name: "Module 5 - Security", filename: "Resources/OS(BCS303)/OS NOTES/OS_Module 5.pdf", size: "2.6 MB" }
            ],
            pyq: [
                { name: "BCS303 - Previous Year Questions", filename: "Resources/OS(BCS303)/OS PYQ/BCS303 Dec23-Jan24.pdf", size: "4.2 MB", year: "2020-2023" },
                { name: "OS Important Questions", filename: "Resources/OS(BCS303)/OS PYQ/BCS303_MQP.pdf", size: "3.5 MB", year: "2024" }
            ]
        },
        "DSA(BCS304)": {
            name: "Data Structures and Algorithms",
            code: "BCS304",
            notes: [
                { name: "Module 1 - Introduction to DSA", filename: "Resources/DSA(BCS304)/NOTES/BCS304-module-1-pdf.pdf", size: "2.6 MB" },
                { name: "Module 2 - Arrays and Linked Lists", filename: "Resources/DSA(BCS304)/NOTES/BCS304-module-2-pdf.pdf", size: "3.1 MB" },
                { name: "Module 3 - Stacks and Queues", filename: "Resources/DSA(BCS304)/NOTES/BCS304-module-3-pdf.pdf", size: "2.9 MB" },
                { name: "Module 4 - Trees and Graphs", filename: "Resources/DSA(BCS304)/NOTES/BCS304-module-4-pdf.pdf", size: "3.4 MB" },
                { name: "Module 5 - Sorting Algorithms", filename: "Resources/DSA(BCS304)/NOTES/BCS304-module-5-pdf.pdf", size: "2.7 MB" }
            ],
            pyq: [
                { name: "BCS304 - Previous Year Questions", filename: "Resources/DSA(BCS304)/PYQ/BCS304 DEC23:JAN24.pdf", size: "4.7 MB", year: "2020-2023" },
                { name: "DSA Practice Problems", filename: "Resources/DSA(BCS304)/PYQ/BCS304-model-paper-set-1.pdf", size: "5.1 MB", year: "2024" }
            ]
        },
        "JAVA(BCS306A)": {
            name: "Java Programming",
            code: "BCS306A",
            notes: [
                { name: "Module 1 - Java Basics", filename: "Resources/JAVA(BCS306A)/NOTES/BCS306A-module-1-pdf.pdf", size: "2.8 MB" },
                { name: "Module 2 - OOP Concepts", filename: "Resources/JAVA(BCS306A)/NOTES/BCS306A-module-2-pdf.pdf", size: "3.3 MB" },
                { name: "Module 3 - Exception Handling", filename: "Resources/JAVA(BCS306A)/NOTES/BCS306A-module-3-pdf.pdf", size: "2.5 MB" },
                { name: "Module 4 - Collections Framework", filename: "Resources/JAVA(BCS306A)/NOTES/BCS306A-module-4-pdf.pdf", size: "3.0 MB" },
                { name: "Module 5 - Multithreading", filename: "Resources/JAVA(BCS306A)/NOTES/BCS306A-module-5-pdf.pdf", size: "2.9 MB" }
            ],
            pyq: [
                { name: "BCS306A - Previous Year Questions", filename: "Resources/JAVA(BCS306A)/JAVA-PYQ/JAVA MQP.pdf", size: "4.3 MB", year: "2020-2023" },
                { name: "Java Programming Exercises", filename: "Resources/JAVA(BCS306A)/JAVA-PYQ/OOPS-WITH-JAVA-BCS306A-MQP_SOLUTION.pdf", size: "4.8 MB", year: "2024" }
            ]
        }
    };

    // DOM Elements
    const subjectsGrid = document.getElementById('subjectsGrid');
    const resourcesGrid = document.getElementById('resourcesGrid');
    const currentSubjectEl = document.getElementById('currentSubject');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // Current state
    let currentSubject = null;
    let currentResourceType = 'notes';
    let allResources = [];

    // Initialize the application
    function init() {
        renderSubjects();
    }

    // Select a subject and display its resources
    function selectSubject(subjectKey) {
        // Update UI
        document.querySelectorAll('.subject-card').forEach(card => {
            card.classList.remove('active');
        });
        
        const selectedCard = document.querySelector(`.subject-card[data-subject="${subjectKey}"]`);
        if (selectedCard) {
            selectedCard.classList.add('active');
        }
        
        // Update current subject
        currentSubject = subjectKey;
        const subject = subjectsData[subjectKey];
        currentSubjectEl.textContent = `Resources for ${subject.name} (${subject.code})`;
        
        // Render resources
        renderResources();
    }

    // Render resources based on current selection
    function renderResources() {
        if (!currentSubject) return;
        
        const subject = subjectsData[currentSubject];
        const resources = currentResourceType === 'notes' ? subject.notes : subject.pyq;
        
        resourcesGrid.innerHTML = '';
        
        if (resources.length === 0) {
            resourcesGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-folder-open"></i>
                    <h3>No ${currentResourceType === 'notes' ? 'notes' : 'PYQs'} available</h3>
                    <p>Check back later for new resources</p>
                </div>
            `;
            return;
        }
        
        resources.forEach(resource => {
            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            
            const resourceType = currentResourceType === 'notes' ? 'Notes' : 'PYQ';
            const icon = currentResourceType === 'notes' ? 'fa-file-alt' : 'fa-question-circle';
            
            resourceCard.innerHTML = `
                <div class="resource-header">
                    <h4>${resourceType}</h4>
                    <span>${resource.size}</span>
                </div>
                <div class="resource-body">
                    <h4>${resource.name}</h4>
                    <p>${subject.name} - ${subject.code}</p>
                    <div class="resource-meta">
                        <span><i class="fas ${icon}"></i> ${resourceType}</span>
                        ${resource.year ? `<span><i class="fas fa-calendar"></i> ${resource.year}</span>` : ''}
                    </div>
                    <a class="download-btn" href="${resource.filename}" download>
                        Download <i class="fas fa-download"></i>
                    </a>
                </div>
            `;
            
            resourcesGrid.appendChild(resourceCard);
        });
        
        // Store all resources for search functionality
        allResources = resources.map(resource => ({
            ...resource,
            subjectName: subject.name,
            subjectCode: subject.code,
            type: currentResourceType
        }));
    }

    // Render all subjects
    function renderSubjects() {
        subjectsGrid.innerHTML = '';
        Object.keys(subjectsData).forEach(subjectKey => {
            const subject = subjectsData[subjectKey];
            const subjectCard = document.createElement('div');
            subjectCard.className = 'subject-card';
            subjectCard.dataset.subject = subjectKey;
            subjectCard.innerHTML = `
                <div class="subject-header">
                    <h3>${subject.name}</h3>
                    <span>${subject.code}</span>
                </div>
                <div class="subject-body">
                    <p>Comprehensive notes and PYQs for ${subject.name}</p>
                    <div class="subject-stats">
                        <span><i class="fas fa-file"></i> ${subject.notes.length} Notes</span>
                        <span><i class="fas fa-question-circle"></i> ${subject.pyq.length} PYQs</span>
                    </div>
                </div>
            `;
            subjectsGrid.appendChild(subjectCard);
        });
        // Select first subject by default
        if (Object.keys(subjectsData).length > 0) {
            const firstSubject = Object.keys(subjectsData)[0];
            selectSubject(firstSubject);
        }
        // Attach event listeners after rendering
        setupEventListeners();
    }

    // Setup event listeners
    function setupEventListeners() {
        // Subject selection
        document.querySelectorAll('.subject-card').forEach(card => {
            card.addEventListener('click', function() {
                const subjectKey = this.dataset.subject;
                selectSubject(subjectKey);
            });
        });
        
        // Tab switching
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentResourceType = this.dataset.type;
                renderResources();
            });
        });
        
        // Search functionality
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Download buttons (simulated)
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('download-btn') || 
                e.target.closest('.download-btn')) {
                const btn = e.target.classList.contains('download-btn') ? 
                    e.target : e.target.closest('.download-btn');
                const filename = btn.dataset.filename;
                simulateDownload(filename);
            }
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Simulate file download
    function simulateDownload(filename) {
        showLoading();
        
        // In a real application, this would be an actual file download
        // For simulation, we'll just show a success message after a delay
        setTimeout(() => {
            hideLoading();
            
            // Create and show download success notification
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--success);
                color: white;
                padding: 15px 20px;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 10px;
            `;
            
            notification.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>Download started: ${filename}</span>
            `;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transition = 'opacity 0.5s';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 500);
            }, 3000);
        }, 1500);
    }

    // Search functionality
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            // If search is empty, show resources for the current subject
            renderResources();
            return;
        }
        // Search across both notes and pyq for the current subject
        if (!currentSubject) return;
        const subject = subjectsData[currentSubject];
        const resources = [...subject.notes.map(r => ({...r, type: 'notes'})), ...subject.pyq.map(r => ({...r, type: 'pyq'}))];
        const filteredResources = resources.filter(resource => 
            resource.name.toLowerCase().includes(query) ||
            (resource.subjectName ? resource.subjectName.toLowerCase().includes(query) : false) ||
            (resource.subjectCode ? resource.subjectCode.toLowerCase().includes(query) : false)
        );
        resourcesGrid.innerHTML = '';
        if (filteredResources.length === 0) {
            resourcesGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <h3>No results found</h3>
                    <p>Try different keywords or browse all resources</p>
                </div>
            `;
            return;
        }
        filteredResources.forEach(resource => {
            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            const resourceType = resource.type === 'notes' ? 'Notes' : 'PYQ';
            const icon = resource.type === 'notes' ? 'fa-file-alt' : 'fa-question-circle';
            resourceCard.innerHTML = `
                <div class="resource-header">
                    <h4>${resourceType}</h4>
                    <span>${resource.size}</span>
                </div>
                <div class="resource-body">
                    <h4>${resource.name}</h4>
                    <p>${subject.name} - ${subject.code}</p>
                    <div class="resource-meta">
                        <span><i class="fas ${icon}"></i> ${resourceType}</span>
                        ${resource.year ? `<span><i class="fas fa-calendar"></i> ${resource.year}</span>` : ''}
                    </div>
                    <a class="download-btn" href="${resource.filename}" download>
                        Download <i class="fas fa-download"></i>
                    </a>
                </div>
            `;
            resourcesGrid.appendChild(resourceCard);
        });
    }

    // Loading spinner functions
    function showLoading() {
        loadingSpinner.style.display = 'flex';
    }

    function hideLoading() {
        loadingSpinner.style.display = 'none';
    }

    // Initialize the application
    init();
});